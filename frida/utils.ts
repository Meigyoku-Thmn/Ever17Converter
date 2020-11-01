const keeper = [];
export function keep(...data: any[]): void {
   data.forEach(datum => keeper.push(datum));
}

export function wrapCdecl2Stdcall(func: NativeCallback, numArgs: number): NativePointer {
   if (numArgs > 127 || numArgs < 0)
      throw new Error('numArgs is out of range [0, 127]');
   const wrapperFunc = Memory.alloc(Process.pageSize);
   Memory.patchCode(wrapperFunc, Process.pageSize, code => {
      const cw = new X86Writer(code, { pc: wrapperFunc });
      for (let i = numArgs; i > 0; i--) {
         cw.putBytes(new Uint8Array([0xFF, 0x74, 0x24, 4 * i]).buffer as ArrayBuffer);
      }                                    // push   DWORD PTR [esp + i] (4 bytes x numArgs)
      cw.putCallAddress(func);             // call   func                (5 bytes)
      cw.putAddRegImm("esp", 4 * numArgs); // add    esp, 4 * numArgs    (3 bytes, up to 6 bytes if 2nd operand > 127)
      cw.putRetImm(4 * numArgs);           // ret    4 * numArgs         (3 bytes)
      cw.flush();
   });
   return wrapperFunc;
}

export function sendCommand(command: string, unitName?: string): { message: any, data: ArrayBuffer } {
   let message: any;
   let data: ArrayBuffer;
   send({ command: 'Get' + command, unitName });
   recv(command, (_message, _data) => { message = _message; data = _data; }).wait();
   return { message, data };
}

export function getUnitData(unitName: string): ArrayBuffer {
   return sendCommand('UnitData', unitName).data;
}