console.log("injected.js loaded");
type Metadata = Record<number, { fileSize: number, fileName: string }>;
function sendCommand(command: string, unitName?: string) {
   let message: any;
   let data: ArrayBuffer;
   const ScriptEv = recv(command, (_message, _data) => { message = _message; data = _data; });
   send({ command: 'Get' + command, unitName });
   ScriptEv.wait();
   return { message, data };
}
let _scriptMetadata: Metadata;
function getScriptMetadata(): Metadata {
   if (_scriptMetadata != null) return _scriptMetadata;
   const { message: metadata } = sendCommand('ScriptMetadata');
   _scriptMetadata = metadata;
   return metadata;
}
function getUnitData(unitName: string): ArrayBuffer {
   const { data: unitData } = sendCommand('UnitData', unitName);
   return unitData;
}

const ReadBytesRoutine = {
   Address: ptr(0x40D040),
   Signature: ['pointer', 'pointer', 'int32', 'uint32'],
   RetType: 'bool',
};
const ReadBytes = new NativeFunction(ReadBytesRoutine.Address, ReadBytesRoutine.RetType, ReadBytesRoutine.Signature);
Interceptor.replace(ReadBytesRoutine.Address, new NativeCallback(function (
   _fileName: NativePointer, _buffer: NativePointer, _fileOffset: number, _readSize) {
   const [fileName, fileOffset] = [_fileName.readAnsiString(), _fileOffset];
   if (fileName.endsWith("script.dat")) {
      const scriptMetadata = getScriptMetadata();
      if (scriptMetadata == null || scriptMetadata[fileOffset] == null)
         return ReadBytes(_fileName, _buffer, _fileOffset, _readSize);
      else {
         const fileMetadata = scriptMetadata[fileOffset];
         const buffer = getUnitData(fileMetadata.fileName);
         if (buffer == null)
            return ReadBytes(_fileName, _buffer, _fileOffset, _readSize);
         _buffer.writeByteArray(buffer);
         console.log("UnitName: " + fileMetadata.fileName);
         return true;
      }
   }
   return ReadBytes(_fileName, _buffer, _fileOffset, _readSize);
}, ReadBytesRoutine.RetType, ReadBytesRoutine.Signature));