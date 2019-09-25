console.log("mod.js loaded");
var ReadBytesTarget = ptr(0x40D040);
var ReadBytesSignature = ['pointer', 'pointer', 'int32', 'uint32'];
var ReadBytesRetType = 'bool';
var ReadBytes = new NativeFunction(ReadBytesTarget, ReadBytesRetType, ReadBytesSignature)
var scriptMetadata = null;
function getScriptMetadata() {
   let rs = null;
   let ScriptEv = recv("ScriptMetadata", (e) => {
      rs = e.message;
   });
   send({ command: "GetScriptMetadata" });
   ScriptEv.wait();
   return rs;
}
function getUnitData(unitName) {
   let rs = null;
   let ScriptEv = recv("UnitData", (e, buffer) => {
      rs = buffer;
   });
   send({ command: "GetUnitData", unitName });
   ScriptEv.wait();
   return rs;
}
Interceptor.replace(ReadBytesTarget, new NativeCallback(function (_fileName, _buffer, _fileOffset, _readSize) {
   let [fileName, fileOffset, readSize] = [
      _fileName.readAnsiString(), _fileOffset, _readSize];
   if (fileName.endsWith("script.dat")) {
      if (scriptMetadata == null) scriptMetadata = getScriptMetadata();
      if (scriptMetadata == null || scriptMetadata[fileOffset] == null) {
         return ReadBytes(_fileName, _buffer, _fileOffset, _readSize);
      }
      else {
         let fileMetadata = scriptMetadata[fileOffset];
         let buffer = getUnitData(fileMetadata.fileName)
         if (buffer == null) {
            return ReadBytes(_fileName, _buffer, _fileOffset, _readSize);
         }
         _buffer.writeByteArray(buffer);
         if (fileMetadata.fileName == "op00.scr") {
            let random = Math.random();
            MemoryAccessMonitor.disable();
            MemoryAccessMonitor.enable({ base: _buffer, size: _readSize, }, {
               onAccess: (details) => {
                  console.log(details.operation + " " + random);
                  console.log('from ' + details.from)
                  console.log('rangeIndex ' + details.rangeIndex)
               }
            });
         }

         console.log("UnitName: " + fileMetadata.fileName);
         return true;
      }
   }
   return ReadBytes(_fileName, _buffer, _fileOffset, _readSize);
}, ReadBytesRetType, ReadBytesSignature));