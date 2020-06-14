import fs from 'fs';
import path from 'path';
import frida, {
   Session, ScriptMessageHandler, Script, ScriptRuntime, Message, MessageType
} from "frida";
import watch from 'node-watch';
import { isNumber } from 'util';

const MOD_PATH = "built/injected.js";
const MOD_SCRIPT_CONTENT = fs.readFileSync(MOD_PATH, "utf8");
const SCRIPT_PATH = "C:/Home/Program File/Infinity Series/Ever17/script.dat";
const TARGET_PATH = "C:/Home/Program File/Infinity Series/Ever17/ever17PC_us.exe";

type Metadata = Record<number, { fileSize: number, fileName: string }>;

(async function main() {
   const metadata = loadScriptMetadata();
   const pid = await frida.spawn(TARGET_PATH);
   const session = await frida.attach(pid);

   let script = await loadScript(session, messageEvent);
   await script.load();
   await frida.resume(pid);

   const watcher = watch(MOD_PATH, async evt => {
      if (evt != "update") return;
      await script.unload();
      script = await loadScript(session, messageEvent);
      await script.load();
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
            console.log('Received GetScriptMetadata message');
            script.post({ type: "ScriptMetadata", message: metadata });
            break;
         case "GetUnitData":
            console.log('Received GetUnitData message');
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
   const script = await session.createScript(MOD_SCRIPT_CONTENT, { name: MOD_PATH, runtime: ScriptRuntime.V8 });
   script.message.connect(event);
   return script;
}

function injectBufferByConfig(buf: Buffer, name: string): void {
   // please don't use characters outside ascii table, this is just for reverse engineering
   const config = JSON.parse(fs.readFileSync("./scr_mod.json", 'utf8'));
   const entryPoint = buf.readUInt32LE(12);
   let hookName = config.fileRedirect[name]?.toString().trim() as string;
   if (hookName?.length === 0) {
      hookName = path.basename(hookName, ".scr").toUpperCase();
      buf.writeUInt8(0x10, entryPoint);
      buf.writeUInt8(0x01, entryPoint + 1);
      buf.write(hookName, entryPoint + 2, 'utf8');
      buf.writeUInt8(0x00, entryPoint + 2 + hookName.length);
   }
   const newEntryPoint = parseInt(config.entryPointRedirect[name]);
   if (isNumber(newEntryPoint)) {
      buf.writeUInt32LE(newEntryPoint, 12);
   }
   // too lazy to check for error
   const overwriteArr = config.overwrite[name];
   if (overwriteArr != null && Array.isArray(overwriteArr)) {
      for (const item of overwriteArr) {
         const offset = parseInt(item.offset) + parseInt(item.shift);
         const byteArr = item.content.split(' ').filter(e => e.trim().length > 0).map(e => parseInt(e, 16));
         byteArr.forEach((e, i) => {
            buf.writeUInt8(e, offset + i);
         });
      }
   }
}