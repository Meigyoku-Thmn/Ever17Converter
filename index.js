const fs = require('fs');
const path = require('path');
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
               let unitBuf = fs.readFileSync("base_script/en/" + message.payload.unitName);
               injectBufferByConfig(unitBuf, message.payload.unitName)
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

/**
 * @param {Buffer} buf 
 * @param {string} name 
 * @returns {void}
 */
function injectBufferByConfig(buf, name) {
   // please don't use characters outside ascii table, this is just for reverse engineering
   delete require.cache[require.resolve('./scr_mod.json')];
   let config = require("./scr_mod.json");
   let entryPoint = buf.readUInt32LE(12);
   let hookName = config.fileRedirect[name];
   if (!(hookName == null || typeof hookName != 'string'  || (hookName = hookName.trim()).length == 0))  {
      hookName = path.basename(hookName, ".scr").toUpperCase();
      buf.writeUInt8(0x10, entryPoint);
      buf.writeUInt8(0x01, entryPoint + 1);
      buf.write(hookName, entryPoint + 2, 'utf8')
      buf.writeUInt8(0x00, entryPoint + 2 + hookName.length);
   }
   let newEntryPoint = config.entryPointRedirect[name];
   newEntryPoint = parseInt(newEntryPoint);
   if (!(Number.isNaN(newEntryPoint))) {
      buf.writeUInt32LE(newEntryPoint, 12);
   }
   // too lazy to check for error
   let overwriteArr = config.overwrite[name];
   if (overwriteArr != null && Array.isArray(overwriteArr)) {
      overwriteArr.forEach(item => {
         let offset = parseInt(item.offset) + parseInt(item.shift);
         let byteArr = item.content.split(' ').filter(e => e.trim().length > 0).map(e => parseInt(e, 16));
         byteArr.forEach((e, i) => {
            buf.writeUInt8(e, offset + i);
         });
      })
   }
}