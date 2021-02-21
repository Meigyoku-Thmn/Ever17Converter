import fs from 'fs';
import path from 'path';
import * as frida from 'frida';
import { Session, ScriptMessageHandler, Script, ScriptRuntime, Message, MessageType } from 'frida';
import watch from 'node-watch';

console.log('Remember to build your shellcode!');
function readJSON(path: string) {
   return JSON.parse(fs.readFileSync(path, 'utf8'));
}
const PACKAGE_JSON = readJSON("package.json");
const MOD_PATH = path.join(__dirname, "../frida-built/shellcode.js");
const SCRIPT_PATH = PACKAGE_JSON.scriptPath;
const TARGET_PATH = PACKAGE_JSON.targetPath;

type Metadata = Record<number, { fileSize: number, fileName: string }>;

(async function main() {
   const metadata = loadScriptMetadata();
   const pid = await frida.spawn(TARGET_PATH);
   const session = await frida.attach(pid);

   let script: Script;
   try {
      script = await loadScript(session, messageEvent);
   } catch (err) {
      console.error(err);
      await frida.kill(pid);
      console.log('Target process was terminated.');
      process.exit();
   }
   await script.load();
   await frida.resume(pid);

   process.on('SIGINT', () => {
      frida.kill(pid);
      console.log('Target process was terminated.');
   });

   const watcher = watch(MOD_PATH, async evt => {
      if (evt != "update") return;
      await script.unload();
      console.log("Unloaded old shellcode js script.");
      script = await loadScript(session, messageEvent);
      await script.load();
      console.log("Loaded new shellcode js script.");
   });
   session.detached.connect(() => {
      console.log("Session detached.");
      watcher.close();
   });
   function messageEvent(message: Message) {
      if (message.type == MessageType.Error) {
         console.error(message.stack);
         return;
      }
      if (message.type != MessageType.Send)
         return;
      switch (message.payload.command) {
         case "GetScriptMetadata":
            console.log('Received GetScriptMetadata command');
            script.post({ type: "ScriptMetadata", message: metadata });
            break;
         case "GetUnitData":
            console.log('Received GetUnitData command');
            try {
               const unitBuf = fs.readFileSync("base_script/en/" + message.payload.unitName);
               injectBufferByConfig(unitBuf, message.payload.unitName);
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

function loadScriptMetadata(): Metadata {
   const metadata: Metadata = {};
   const fd = fs.openSync(SCRIPT_PATH, 'r');
   const fileCountBuffer = Buffer.alloc(4);
   fs.readSync(fd, fileCountBuffer, 0, 4, 4);
   const fileCount = fileCountBuffer.readUInt32LE(0);
   const metadataSize = 32 * fileCount;
   const fileInfoBuf = Buffer.alloc(metadataSize);
   fs.readSync(fd, fileInfoBuf, 0, metadataSize, 16);
   let offset = 0;
   do {
      let fileOffset = fileInfoBuf.readUInt32LE(offset); offset += 4;
      fileOffset = fileOffset + 16 + metadataSize;
      let fileSize = fileInfoBuf.readUInt32LE(offset); offset += 4;
      fileSize = fileSize / 2;
      let fileName = fileInfoBuf.toString('ascii', offset, offset + 24); offset += 24;
      fileName = fileName.replace(/\0/g, '');
      metadata[fileOffset] = { fileSize, fileName };
   } while (offset < metadataSize);
   fs.closeSync(fd);
   return metadata;
}

async function loadScript(session: Session, event: ScriptMessageHandler): Promise<Script> {
   const scriptContent = fs.readFileSync(MOD_PATH, "utf8");
   const script = await session.createScript(scriptContent, {
      name: MOD_PATH.replace(/\.[^/.]+$/, ""),
      runtime: ScriptRuntime.Default
   });
   script.message.connect(event);
   return script;
}

function injectBufferByConfig(buf: Buffer, name: string): void {
   // please don't use characters outside ascii table, this is just for reverse engineering
   const config = readJSON("./scr_mod.json");
   const entryPoint = buf.readUInt32LE(12);
   let hookName = config.fileRedirect[name]?.toString().trim() as string;
   if (hookName?.length === 0) {
      // write to entrypoint a command that jumps to hookName file
      hookName = path.basename(hookName, ".scr").toUpperCase();
      buf.writeUInt8(0x10, entryPoint);
      buf.writeUInt8(0x01, entryPoint + 1);
      buf.write(hookName, entryPoint + 2, 'utf8');
      buf.writeUInt8(0x00, entryPoint + 2 + hookName.length);
   }
   const newEntryPoint = parseInt(config.entryPointRedirect[name]);
   // change entrypoint to another point in the file
   if (typeof newEntryPoint === 'number') {
      buf.writeUInt32LE(newEntryPoint, 12);
   }
   // too lazy to check for error
   const overwriteArr = config.overwrite[name];
   if (overwriteArr != null && Array.isArray(overwriteArr)) {
      // patch some bytecodes
      for (const item of overwriteArr) {
         const offset = parseInt(item.offset) + parseInt(item.shift);
         const byteArr = item.content.split(' ').filter(e => e.trim().length > 0).map(e => parseInt(e, 16));
         byteArr.forEach((e, i) => {
            buf.writeUInt8(e, offset + i);
         });
      }
   }
}