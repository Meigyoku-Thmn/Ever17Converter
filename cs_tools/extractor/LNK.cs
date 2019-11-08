using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace extractor {
   static public class LNK {
      public class Record {
         public readonly long offset;
         public readonly string filename;
         public long length;
         public bool compressed;
         public Record(long offset, string filename, long length, bool compressed) {
            this.offset = offset;
            this.filename = filename;
            this.compressed = compressed;
            this.length = length;
         }
      }
      public static Record[] ReadRecords(Stream inp) {
         Record[] records;
         var lin = new BinaryReader(inp);
         int magic = lin.ReadInt32();
         if (magic != 0x004B4E4C) {
            throw new IOException($"Unknown archive format (Magic code: {magic:x8})");
         }
         uint recordsL = lin.ReadUInt32();
         records = new Record[recordsL];
         lin.BaseStream.Position += 8;
         byte[] filenameBytes = new byte[24];
         for (int n = 0; n < recordsL; n++) {
            uint rawOffset = lin.ReadUInt32();
            uint shiftedSize = lin.ReadUInt32();
            lin.Read(filenameBytes, 0, 24);
            int filenameLen = Array.FindIndex(filenameBytes, chr => chr == '\0');
            string filename = Encoding.ASCII.GetString(filenameBytes, 0, filenameLen);
            //Offset in file is relative to end of header
            long offset = 16 + 32 * recordsL + rawOffset;
            uint size = shiftedSize >> 1;
            bool compressed = (shiftedSize & 1) == 1 ? true : false;
            records[n] = new Record(offset, filename, size, compressed);
         }
         return records;
      }
      public static MemoryStream ReadFile(Stream inp, Record record) {
         inp.Position = record.offset;
         var outStream = new MemoryStream(new Func<byte[]>(() => {
            var buffer = new byte[record.length];
            inp.Read(buffer, 0, buffer.Length);
            return buffer;
         })());         
         DecryptInPlace(outStream.GetBuffer(), record.filename);
         if (record.compressed)
            return LND.Decompress(outStream);
         else return outStream;
      }
      // this decryption function relies on default number overflow behavior of C#
      static void DecryptInPlace(byte[] target, string targetName) {
         var startOffset = -1;
         if (targetName.ToLower().EndsWith(".wav"))
            startOffset = 0;
         else if (targetName.ToLower().EndsWith(".jpg"))
            startOffset = 4352;
         else if (targetName.ToLower().EndsWith(".scr"))
            startOffset = 4096;
         if (startOffset == -1) return;
         byte key = 0;
         foreach (var chr in Encoding.ASCII.GetBytes(targetName)) {
            key += chr;
         }
         for (int i = 0; i < 256; i++) {
            target[startOffset + i] -= key;
            key = (byte)(key * 0x6D - 0x25);
         }
      }
   }
}