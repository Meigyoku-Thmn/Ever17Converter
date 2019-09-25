const fs = require('fs');
const frida = require("frida");
var watch = require('node-watch');
var modPath = "mod.js"
var modScriptContent = fs.readFileSync(modPath, "utf8");
var metadata = {};
{
   let fd = fs.openSync("C:/Home/Program File/Infinity Series/Ever17/script.dat", 'r')
   let fileCount = Buffer.alloc(4);
   fs.readSync(fd, fileCount, 0, 4, 4);
   fileCount = fileCount.readUInt32LE(0);
   let metadataSize = 32 * fileCount;
   let fileInfoBuf = Buffer.alloc(metadataSize);
   fs.readSync(fd, fileInfoBuf, 0, metadataSize, 16);
   let offset = 0;
   while (true) {
      let fileOffset = fileInfoBuf.readUInt32LE(offset); offset += 4;
      fileOffset = fileOffset + 16 + metadataSize;
      let fileSize = fileInfoBuf.readUInt32LE(offset); offset += 4;
      fileSize = fileSize / 2;
      let fileName = fileInfoBuf.toString('ascii', offset, offset + 24); offset += 24;
      fileName = fileName.replace(/\0/g, '');
      metadata[fileOffset] = { fileSize, fileName };
      if (offset >= metadataSize) break;
   }
   fs.closeSync(fd);
}

(async function main() {
   let pid = await frida.spawn("C:/Home/Program File/Infinity Series/Ever17/ever17PC_us.exe");
   let session = await frida.attach(pid);
   var script = await loadScript(session, messageEvent);
   await script.load();
   await frida.resume(pid);
   watcher = watch(modPath, (evt, name) => {
      if (evt != "update") return;
      (async () => {
         await script.unload();
         script = await loadScript(session, messageEvent);
         await script.load();
      })();
   });
   session.detached.connect(() => {
      console.log("Session detached.")
      watcher.close()
   });
   function messageEvent(message) {
      if (message.type == 'error') {
         console.error(message.stack);
         return;
      }
      if (message.type != 'send') return;
      switch (message.payload.command) {
         case "GetScriptMetadata":
            console.log('Received GetScriptMetadata message');
            script.post({ type: "ScriptMetadata", message: metadata })
            break;
         case "GetUnitData":
            console.log('Received GetUnitData message');
            try {
               let unitBuf = fs.readFileSync("script/" + message.payload.unitName);
               script.post({ type: "UnitData" }, unitBuf);
            }
            catch (e) {
               script.post({ type: "UnitData" }, null);
               throw e;
            }
            break;
      }
   }
})().catch(e => console.error(e));
/** 
 * @param {frida.Session} session 
 * @param {frida.SignalHandler} event 
 * @returns {frida.Script}
 */
async function loadScript(session, event = () => { }) {
   let script = await session.createScript(modScriptContent, { name: modPath, runtime: 'v8' });
   script.message.connect(event);
   return script;
}