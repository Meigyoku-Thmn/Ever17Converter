using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace extractor {
   static public class DAT {
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
            LND.Decompress();
         else return outStream;
      }
      public static void Extract(FileInfo archive, DirectoryInfo dst, int decryptMode = -1) {
         dst.Create();
         using (var fin = archive.OpenRead()) {
            Record[] records;
            uint recordsL;
            {
               var lin = new BinaryReader(fin);
               int magic = lin.ReadInt32();
               if (magic != 0x004B4E4C) {
                  throw new IOException($"{archive.Name}: Unknown archive format header: {magic:x8}");
               }
               recordsL = lin.ReadUInt32();
               records = new Record[recordsL];
               lin.BaseStream.Position += 8;
               byte[] temp = new byte[24];
               for (int n = 0; n < recordsL; n++) {
                  uint rawOffset = lin.ReadUInt32();
                  uint unknown = lin.ReadUInt32();
                  lin.Read(temp, 0, 24);
                  int tempL = 0;
                  while (tempL < temp.Length && temp[tempL] != '\0') {
                     tempL++;
                  }
                  string filename = Encoding.ASCII.GetString(temp, 0, tempL);
                  //Offset in file is relative to end of header
                  long offset = 16 + 32 * recordsL + rawOffset;
                  if (n > 0) {
                     records[n - 1].length = offset - records[n - 1].offset;
                  }
                  records[n] = new Record(offset, filename);
               }
               if (recordsL > 0) {
                  records[recordsL - 1].length = archive.Length - records[recordsL - 1].offset;
               }
            }
            var channel = fin;
            Console.WriteLine($"Extracting {archive.Name} ({recordsL} files)");
            for (int n = 0; n < recordsL; n++) {
               Console.WriteLine(records[n].filename);
               FileInfo file = new FileInfo(Path.Combine(dst.FullName, records[n].filename));
               file.Directory.Create();
               var lndHeader = new BinaryReader(new MemoryStream(16));
               using (var fout = file.OpenWrite()) {
                  var oc = fout;
                  long off = records[n].offset;
                  long len = records[n].length;
                  lndHeader.BaseStream.Position = 0;
                  channel.Position = off;
                  (lndHeader.BaseStream as MemoryStream).SetLength((lndHeader.BaseStream as MemoryStream).Capacity);
                  channel.Read((lndHeader.BaseStream as MemoryStream).GetBuffer(), 0, (int)lndHeader.BaseStream.Length);
                  lndHeader.BaseStream.Position = 0;
                  if (lndHeader.ReadInt32() == 0x00646E6C) {
                     //LND compressed
                     lndHeader.BaseStream.Position = 8;
                     int ulen = lndHeader.ReadInt32();
                     channel.Position = off + (lndHeader.BaseStream as MemoryStream).Length;
                     var buf = LND.Decompress(new BinaryReader(fin), ulen);
                     buf.Position = 0;
                     oc.Write(buf.GetBuffer(), 0, (int)buf.Length);
                     buf.Position = 0;
                  }
                  else if (decryptMode < 0 || decryptMode > 2) {
                     channel.Position = off;
                     channel.CopyPartTo(oc, (int)len);
                  }
                  else {
                     DecryptAndWriteData(channel, oc, off, (int)len, decryptMode, records[n].filename);
                  }
               }
            }
         }
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