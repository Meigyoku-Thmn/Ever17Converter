import { bool32, int32, pointer, uint16, uint32, uint8 } from "./frida-struct";

export const HANDLE = 'uint32';
export const HHOOK = 'uint32';
export const HINSTANCE = 'uint32';
export const HWND = 'uint32';
export const HDC = 'uint32';
export const HGDIOBJ = 'uint32';
export const LRESULT = 'int32';
export const WPARAM = 'uint32';
export const LPARAM = 'int32';
export const HBITMAP = 'uint32';
export const COLORREF = 'uint32';

export const WH_KEYBOARD = 2;
export const VK_R = 0x52;
export const OBJ_FONT = 6;

export const SECURITY_ATTRIBUTES = {
   nLength: uint32,
   lpSecurityDescriptor: pointer,
   bInheritHandle: bool32,
};

export const PROCESS_INFORMATION = {
   hProcess: uint32,
   hThread: uint32,
   dwProcessId: uint32,
   dwThreadId: uint32,
};

export const STARTF_USESTDHANDLES = 0x00000100;
export const STARTF_USESHOWWINDOW = 0x00000001;

export const STARTUPINFO = {
   cb: uint32,
   lpReserved: pointer,
   lpDesktop: pointer,
   lpTitle: pointer,
   dwX: uint32,
   dwY: uint32,
   dwXSize: uint32,
   dwYSize: uint32,
   dwXCountChars: uint32,
   dwYCountChars: uint32,
   dwFillAttribute: uint32,
   dwFlags: uint32,
   wShowWindow: uint16,
   cbReserved2: uint16,
   lpReserved2: pointer,
   hStdInput: uint32,
   hStdOutput: uint32,
   hStdError: uint32,
};

export const CreatePipe = new SystemFunction(
   Module.findExportByName('Kernel32', 'CreatePipe'),
   'bool', ['pointer', 'pointer', 'pointer', 'uint32'],
   'stdcall'
);

export const CreateProcess = new SystemFunction(
   Module.findExportByName('Kernel32', 'CreateProcessA'),
   'bool', ['pointer', 'pointer', 'pointer', 'pointer', 'bool', 'uint32', 'pointer', 'pointer', 'pointer', 'pointer'],
   'stdcall'
);

export const CloseHandle = new SystemFunction(
   Module.findExportByName('Kernel32', 'CloseHandle'),
   'bool', ['uint32'],
   'stdcall'
);

export const WriteFile = new SystemFunction(
   Module.findExportByName('Kernel32', 'WriteFile'),
   'bool', ['uint32', 'pointer', 'uint32', 'pointer', 'pointer'],
   'stdcall'
);

export const SetWindowsHookEx = new SystemFunction(
   Module.findExportByName('User32', 'SetWindowsHookExA'),
   HHOOK, ['int32', 'pointer', HINSTANCE, 'uint32'],
   'stdcall'
);

export const CallNextHookEx = new SystemFunction(
   Module.findExportByName('User32', 'CallNextHookEx'),
   LRESULT, [HHOOK, 'int32', WPARAM, LPARAM],
   'stdcall'
);

export const DialogBoxParamFunc = {
   Addr: Module.findExportByName('User32', 'DialogBoxParamA'),
   ArgTypes: [HINSTANCE, 'pointer', HWND, 'pointer', LPARAM],
   RetType: 'int32',
   Abi: 'stdcall' as NativeABI,
};
export const DialogBoxParam = new SystemFunction(
   DialogBoxParamFunc.Addr, DialogBoxParamFunc.RetType, DialogBoxParamFunc.ArgTypes, DialogBoxParamFunc.Abi
);

export const INFINITE = 0xFFFFFFFF;

export const WaitForSingleObject = new SystemFunction(
   Module.findExportByName('Kernel32', 'WaitForSingleObject'),
   'uint32', [HANDLE, 'uint32'],
   'stdcall'
);

export const GetExitCodeProcess = new SystemFunction(
   Module.findExportByName('Kernel32', 'GetExitCodeProcess'),
   'bool', [HANDLE, 'pointer'],
   'stdcall'
);

export const BI_RGB = 0;
export const DIB_RGB_COLORS = 0;

export const BITMAPINFO = {
   bmiHeader: {
      biSize: uint32,
      biWidth: int32,
      biHeight: int32,
      biPlanes: uint16,
      biBitCount: uint16,
      biCompression: uint32,
      biSizeImage: uint32,
      biXPelsPerMeter: int32,
      biYPelsPerMeter: int32,
      biClrUsed: uint32,
      biClrImportant: uint32,
   },
   bmiColors: {
      rgbBlue: uint8,
      rgbGreen: uint8,
      rgbRed: uint8,
      rgbReserved: uint8,
   },
};

export const CreateCompatibleDC = new SystemFunction(
   Module.findExportByName('Gdi32', 'CreateCompatibleDC'),
   HDC, [HDC],
   'stdcall'
);

export const CreateDIBSection = new SystemFunction(
   Module.findExportByName('Gdi32', 'CreateDIBSection'),
   HBITMAP, [HDC, 'pointer', 'uint32', 'pointer', HANDLE, 'uint32'],
   'stdcall'
);

export const SelectObject = new SystemFunction(
   Module.findExportByName('Gdi32', 'SelectObject'),
   HGDIOBJ, [HDC, HGDIOBJ],
   'stdcall'
);

export const SRCCOPY = 0x00CC0020;

export const BitBlt = new SystemFunction(
   Module.findExportByName('Gdi32', 'BitBlt'),
   'bool', [HDC, 'int32', 'int32', 'int32', 'int32', HDC, 'int32', 'int32', 'uint32'],
   'stdcall'
);

export const STD_INPUT_HANDLE = -10;
export const STD_OUTPUT_HANDLE = -11;
export const STD_ERROR_HANDLE = -12;

export const GetStdHandle = new SystemFunction(
   Module.findExportByName('Kernel32', 'GetStdHandle'),
   HANDLE, ['uint32'],
   'stdcall'
);

export const HANDLE_FLAG_INHERIT = 0x00000001;

export const SetHandleInformation = new SystemFunction(
   Module.findExportByName('Kernel32', 'SetHandleInformation'),
   'bool', [HANDLE, 'uint32', 'uint32'],
   'stdcall'
);

export const CLR_INVALID = -1;

export const SetTextColor = new SystemFunction(
   Module.findExportByName('Gdi32', 'SetTextColor'),
   COLORREF, [HDC, COLORREF],
   'stdcall'
);

export const SetBkColor = new SystemFunction(
   Module.findExportByName('Gdi32', 'SetBkColor'),
   COLORREF, [HDC, COLORREF],
   'stdcall'
);

export const TextOut = new SystemFunction(
   Module.findExportByName('Gdi32', 'TextOutA'),
   'bool', [HDC, 'int32', 'int32', 'pointer', 'int32'],
   'stdcall'
);