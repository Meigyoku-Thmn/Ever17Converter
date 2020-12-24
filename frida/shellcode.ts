import { createCStruct } from './frida-struct';
import {
   keep, wrapCdeclInStdcall, sendCommand, getUnitData, getLastError, decodeKeystrokeFlags, str, KEY_RELEASED, calcStride
} from './utils';
import {
   CallNextHookEx, DialogBoxParamFunc, LPARAM, LRESULT, DialogBoxParam, SetWindowsHookEx, VK_R, WH_KEYBOARD, WPARAM, SECURITY_ATTRIBUTES, CreatePipe, PROCESS_INFORMATION, STARTUPINFO, STARTF_USESTDHANDLES, CreateProcess, CloseHandle, WaitForSingleObject, INFINITE, GetExitCodeProcess, CreateCompatibleDC, BITMAPINFO, BI_RGB, CreateDIBSection, DIB_RGB_COLORS, SelectObject, BitBlt, SRCCOPY, WriteFile, STARTF_USESHOWWINDOW, GetStdHandle, STD_ERROR_HANDLE, STD_OUTPUT_HANDLE, SetHandleInformation, HANDLE_FLAG_INHERIT, SetBkColor, CLR_INVALID, SetTextColor, TextOut
} from './winapi';

console.log(`shellcode.js executed.`);

// -- ALLOW MODIFYING GAME SCRIPT ON-THE-FLY --
(function SetUpGameScriptModding() {
   type Metadata = Record<number, { fileSize: number, fileName: string }>;

   const ScriptMetadata = sendCommand('ScriptMetadata').message as Metadata;

   const ReadBytesFunc = {
      Addr: ptr(0x40D040),
      ArgTypes: ['pointer', 'pointer', 'int32', 'uint32'],
      RetType: 'bool',
      Abi: 'mscdecl' as NativeABI,
   };

   const OriReadBytes = new NativeFunction(ReadBytesFunc.Addr, ReadBytesFunc.RetType, ReadBytesFunc.ArgTypes, ReadBytesFunc.Abi);

   Interceptor.replace(
      ReadBytesFunc.Addr,
      new NativeCallback((_fileName: NativePointer, _buffer: NativePointer, _fileOffset: number, _readSize) => {
         const [fileName, fileOffset] = [_fileName.readAnsiString(), _fileOffset];
         if (fileName.endsWith("script.dat")) {
            if (ScriptMetadata != null && ScriptMetadata[fileOffset] != null) {
               const fileMetadata = ScriptMetadata[fileOffset];
               const buffer = getUnitData(fileMetadata.fileName);
               if (buffer != null) {
                  _buffer.writeByteArray(buffer);
                  console.log("UnitName: " + fileMetadata.fileName);
                  return true;
               }
            }
         }
         return OriReadBytes(_fileName, _buffer, _fileOffset, _readSize);
      }, ReadBytesFunc.RetType, ReadBytesFunc.ArgTypes, ReadBytesFunc.Abi)
   );
})();

// -- ALLOW RECORDING GAMEPLAY --
(function SetUpGameplayRecording() {
   const outputPath = "C:/Users/PC/Desktop/ever17_capture.mkv";
   const width = 800;
   const height = 600;
   const ffmpegCmd = str([
      "C:/ffmpeg/ffmpeg.exe",
      "-hide_banner -loglevel error -y",
      "-f rawvideo -vcodec rawvideo", // no container, no codec for input
      `-video_size ${width}x${height} -pix_fmt bgr24 -framerate 60`,
      "-i -", // input from stdin
      `-vcodec libxvid -qscale:v 3 -vf "vflip, tpad=stop_mode=clone:stop_duration=1" "${outputPath}"`,
      // duplicate the last frame because ffmpeg and many players don't care about people's experiences
   ].join(' '));
   let recording = false;
   let pipeIsOpen = false;
   let recordingFailed = false;
   let initialized = false;
   let hasUnrecoverableError = false;

   const UpdateFunc = {
      Addr: ptr(0x0040E250),
      ArgTypes: ['int32'],
      RetType: 'void',
      Abi: 'mscdecl' as NativeABI,
   };

   const OriUpdate = new NativeFunction(UpdateFunc.Addr, UpdateFunc.RetType, UpdateFunc.ArgTypes, UpdateFunc.Abi);

   const g_hdc = ptr(0x004583BC);
   const c_stdin_ReadHandle = Memory.alloc(4);
   const c_stdin_WriteHandle = Memory.alloc(4);
   const ffmpegExitCode = Memory.alloc(4);
   let memDcHdc: number;
   let memHbm: number;
   const ppvBits = Memory.alloc(4);
   let procInfo = createCStruct(PROCESS_INFORMATION);
   const dwWritten = Memory.alloc(4);
   let frameCount = 0;

   let rs: SystemFunctionResult;

   function InitializeBitmap() {
      if (!(rs = CreateCompatibleDC(g_hdc.readU32())).value)
         throw Error('CreateCompatibleDC failed, error code: ' + getLastError(rs));
      memDcHdc = rs.value as number;
      const bmi = createCStruct(BITMAPINFO);
      bmi.bmiHeader.biSize = bmi.bmiHeader.getSize();
      bmi.bmiHeader.biBitCount = 24;
      bmi.bmiHeader.biPlanes = 1;
      bmi.bmiHeader.biWidth = width;
      bmi.bmiHeader.biHeight = height;
      bmi.bmiHeader.biCompression = BI_RGB;
      rs = CreateDIBSection(memDcHdc, bmi.getPtr(), DIB_RGB_COLORS, ppvBits, 0, 0);
      if (!rs.value)
         throw Error('CreateDIBSection failed, error code: ' + getLastError(rs));
      memHbm = rs.value as number;
      rs = SelectObject(memDcHdc, memHbm);
      if (!rs.value || rs.value == -1)
         throw Error('SelectObject failed, error code: ' + getLastError(rs));
      rs = SetBkColor(memDcHdc, 0x00000000);
      if (rs.value == CLR_INVALID)
         console.error('SetBkColor failed, error code: ' + getLastError(rs));
      rs = SetTextColor(memDcHdc, 0x0000FF00);
      if (rs.value == CLR_INVALID)
         console.error('SetTextColor failed, error code: ' + getLastError(rs));
   }

   const RecordFrame = new NativeCallback(() => {
      if (hasUnrecoverableError === true) return;
      if (initialized === false) {
         try {
            InitializeBitmap();
            initialized = true;
         } catch (err) {
            console.error(err.stack);
            hasUnrecoverableError = true;
         }
      }
      // recording is just turned off but we still don't have ffmpeg exit code
      if (pipeIsOpen && !recording) {
         rs = CloseHandle(c_stdin_WriteHandle.readU32());
         if (!rs.value) console.log('CloseHandle failed (1), error code: ' + getLastError(rs));
         rs = CloseHandle(c_stdin_ReadHandle.readU32());
         if (!rs.value) console.log('CloseHandle failed (2), error code: ' + getLastError(rs));
         c_stdin_WriteHandle.writeU32(0);
         c_stdin_ReadHandle.writeU32(0);
         console.log('Wait for ffmpeg to exit...');
         WaitForSingleObject(procInfo.hProcess, INFINITE);
         if (!(rs = GetExitCodeProcess(procInfo.hProcess, ffmpegExitCode)).value)
            console.error('Cannot get ffmpeg exit code, error code: ' + getLastError(rs));
         else {
            console.log('ffmpeg exit code: ' + ffmpegExitCode.readU32());
         }
         rs = CloseHandle(procInfo.hProcess);
         if (!rs.value) console.log('CloseHandle failed (3), error code: ' + getLastError(rs));
         procInfo.hProcess = 0;
         pipeIsOpen = false;
         recordingFailed = false;
         frameCount = 0;
      }
      // recording is just turned on but ffmpeg is not opened yet
      else if (!pipeIsOpen && recording) {
         pipeIsOpen = true;
         try {
            procInfo = createCStruct(PROCESS_INFORMATION);
            const sAttr = createCStruct(SECURITY_ATTRIBUTES);
            sAttr.nLength = sAttr.getSize();
            sAttr.bInheritHandle = true;
            // Create a pipe for the child process's STDIN.
            rs = CreatePipe(c_stdin_ReadHandle, c_stdin_WriteHandle, sAttr.getPtr(), 0);
            if (!rs.value)
               throw Error("Failed to create STDIN pipe, error code: " + getLastError(rs));
            // this must be set, so the write handle is not leaked into the child process
            // otherwise you will get a deadlock on WaitForSingleObject
            rs = SetHandleInformation(c_stdin_WriteHandle.readU32(), HANDLE_FLAG_INHERIT, 0);
            if (!rs.value) console.log('SetHandleInformation failed, error code: ' + getLastError(rs));
            // Launch the ffmpeg process.
            const startInfo = createCStruct(STARTUPINFO);
            startInfo.cb = startInfo.getSize();
            startInfo.hStdError = GetStdHandle(STD_ERROR_HANDLE).value as number;
            startInfo.hStdOutput = GetStdHandle(STD_OUTPUT_HANDLE).value as number;
            startInfo.hStdInput = c_stdin_ReadHandle.readU32();
            startInfo.dwFlags |= STARTF_USESTDHANDLES | STARTF_USESHOWWINDOW;
            rs = CreateProcess(NULL, ffmpegCmd, NULL, NULL, 1, 0, NULL, NULL, startInfo.getPtr(), procInfo.getPtr());
            if (!rs.value)
               throw Error("Failed to create a ffmpeg process, error code: " + getLastError(rs));
            rs = CloseHandle(procInfo.hThread);
            if (!rs.value) console.log('CloseHandle failed (4), error code: ' + getLastError(rs));
            procInfo.hThread = 0;
            rs = CloseHandle(c_stdin_ReadHandle.readU32());
            if (!rs.value) console.log('CloseHandle failed (5), error code: ' + getLastError(rs));
            c_stdin_ReadHandle.writeU32(0);
            console.log("ffmpeg opened.");
         } catch (err) {
            console.error(err.stack);
            recordingFailed = true;
            console.error('Failed to record.');
         }
      }
      // we are recording
      else if (recording && !recordingFailed) {
         try {
            // extract each frame into ffmpeg
            rs = BitBlt(memDcHdc, 0, 0, width, height, g_hdc.readU32(), 0, 0, SRCCOPY);
            if (!rs.value)
               throw Error("BitBlt failed, error code: " + getLastError(rs));
            const frameCountStr = (frameCount++).toString();
            TextOut(memDcHdc, 0, 0, str(frameCountStr), frameCountStr.length);
            rs = WriteFile(c_stdin_WriteHandle.readU32(), ppvBits.readPointer(), calcStride(width, 24) * height, dwWritten, NULL);
            if (!rs.value)
               throw Error("WriteFile faild, error code: " + getLastError(rs));
         } catch (err) {
            console.error(err.stack);
            recordingFailed = true;
            console.error('Failed to record.');
         }
      }
   }, 'void', [], 'mscdecl');

   // sometime NativeCallback crash the program (possibly corrupted stack or clobbered registers)
   // in that case, CModule is the best workaround
   Interceptor.replace(
      UpdateFunc.Addr,
      new NativeFunction(keep(new CModule(`
         extern void OriUpdate(int a1);
         extern void RecordFrame(void);
         void func(int a1) {
            OriUpdate(a1);
            RecordFrame();
         }
      `, { OriUpdate, RecordFrame }))[0].func, UpdateFunc.RetType, UpdateFunc.ArgTypes, UpdateFunc.Abi)
   );

   const KeyboardProc = wrapCdeclInStdcall(new NativeCallback((code: number, wParam: number, lParam: number) => {
      if (code == 0) {
         const keystrokeFlags = decodeKeystrokeFlags(lParam);
         if (wParam === VK_R && keystrokeFlags.transitionState === KEY_RELEASED) {
            recording = !recording;
            console.log('Recoding state: ' + (recording ? '✅' : '❌'));
         }
      }
      return CallNextHookEx(0, code, wParam, lParam).value;
   }, LRESULT, ['int32', WPARAM, LPARAM], 'mscdecl'), 3);

   Interceptor.replace(
      DialogBoxParamFunc.Addr,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      wrapCdeclInStdcall(new NativeCallback((hInstance, lpTemplateName, hWndParent, lpDialogFunc, dwInitParam) => {
         const rs = DialogBoxParam(hInstance, lpTemplateName, hWndParent, lpDialogFunc, dwInitParam).value;
         if (rs !== 0) {
            const threadId = Process.getCurrentThreadId();
            // some hook procedures are weird that they can only be used on "UI thread" (thread that already in a message loop) 
            const hookHandle = SetWindowsHookEx(WH_KEYBOARD, KeyboardProc, 0, threadId);
            if (hookHandle.value === 0)
               console.error('SetWindowsHookEx failed. Error code: ' + getLastError(hookHandle));
            else {
               console.log('SetWindowsHookEx successfully on thread ' + threadId);
               console.log('Press R key to toggle recording.');
            }
         }
         return rs;
      }, DialogBoxParamFunc.RetType, DialogBoxParamFunc.ArgTypes, 'mscdecl'), DialogBoxParamFunc.ArgTypes.length)
   );
})();