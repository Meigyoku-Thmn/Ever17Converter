import { createCStruct, int32, pointer, uint32 } from './frida-struct';
import { keep, wrapCdecl2Stdcall, sendCommand, getUnitData } from './utils';

console.log(`injected.js opened.`);

// -- ALLOW MODIFYING GAME SCRIPT ON-THE-FLY --
(function () {
   type Metadata = Record<number, { fileSize: number, fileName: string }>;

   const ScriptMetadata = sendCommand('ScriptMetadata').message as Metadata;

   const ReadBytesRoutine = {
      Address: ptr(0x40D040),
      Signature: ['pointer', 'pointer', 'int32', 'uint32'],
      RetType: 'bool',
   };

   const ReadBytes = new NativeFunction(ReadBytesRoutine.Address, ReadBytesRoutine.RetType, ReadBytesRoutine.Signature);

   Interceptor.replace(
      ReadBytesRoutine.Address,
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
         return ReadBytes(_fileName, _buffer, _fileOffset, _readSize);
      }, ReadBytesRoutine.RetType, ReadBytesRoutine.Signature)
   );

   keep(ScriptMetadata, ReadBytes);
})();

// -- ADD VSYNC --
(function () {
   const OPENADAPTERFROMHDC = {
      hDc: pointer,
      hAdapter: uint32,
      AdapterLuid: {
         LowPart: uint32,
         HighPart: int32,
      },
      VidPnSourceId: uint32,
   };
   const WAITFORVERTICALBLANKEVENT = {
      hAdapter: uint32,
      hDevice: uint32,
      VidPnSourceId: uint32,
   };

   const S_OK = 0;
   const HDC = 'pointer', HWND = 'pointer', NTSTATUS = 'long';
   const OpenAdapterFromHdc = // NTSTATUS D3DKMTOpenAdapterFromHdc(D3DKMT_OPENADAPTERFROMHDC *Arg1);
      new NativeFunction(Module.findExportByName('gdi32', 'D3DKMTOpenAdapterFromHdc'), NTSTATUS, ['pointer'], 'stdcall');
   const WaitForVerticalBlankEvent = // NTSTATUS D3DKMTWaitForVerticalBlankEvent(D3DKMT_WAITFORVERTICALBLANKEVENT *Arg1);
      new NativeFunction(Module.findExportByName('gdi32', 'D3DKMTWaitForVerticalBlankEvent'), NTSTATUS, ['pointer'], 'stdcall');
   const GetDC = // HDC GetDC(HWND hWnd);
      new NativeFunction(Module.findExportByName('user32', 'GetDC'), HDC, [HWND], 'stdcall');

   const screenHDC = GetDC(NULL) as NativePointer;
   if (screenHDC.isNull())
      return console.error('Cannot execute GetDC.');
   const oa = createCStruct(OPENADAPTERFROMHDC);
   oa.hDc = screenHDC;

   if (OpenAdapterFromHdc(oa.getPtr()) != S_OK)
      return console.error('Cannot execute OpenAdapterFromHdc.');

   const we = createCStruct(WAITFORVERTICALBLANKEVENT);
   we.hAdapter = oa.hAdapter;
   we.hDevice = 0;
   we.VidPnSourceId = oa.VidPnSourceId;

   let nFrame = 0;
   let vsyncFailed = false;
   // this function will be called instead of a certain Sleep function
   const WaitForVBlank = new NativeCallback((delay: number) => {
      if (WaitForVerticalBlankEvent(we.getPtr()) == S_OK) {
         // eslint-disable-next-line @typescript-eslint/no-unused-vars
         nFrame++;
      } else {
         if (vsyncFailed == false) {
            vsyncFailed = true;
            console.log(`*** vsync failed`);
         }
         Thread.sleep(delay / 1000);
      }
   }, 'void', ['uint'], 'mscdecl');
   const WaitForVBlankWrapper = wrapCdecl2Stdcall(WaitForVBlank, 1);
   const VBlankPatchPoint = ptr(0x0042F90F);
   Memory.patchCode(VBlankPatchPoint, 6, code => {
      const cw = new X86Writer(code, { pc: VBlankPatchPoint });
      cw.putMovRegAddress('esi', WaitForVBlankWrapper); // mov   esi, WaitForVBlankWrapper (5 bytes)
      cw.putNop();                                      // nop                             (1 byte, filler)
      cw.flush();
   });
   keep(OpenAdapterFromHdc, WaitForVerticalBlankEvent, GetDC, we, WaitForVBlank, WaitForVBlankWrapper);
});
