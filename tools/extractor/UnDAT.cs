using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace extractor {
   public class UnDAT {
      private UnDAT() { }
      static readonly Item[] files = new Item[] {
         new Item("bg.dat"),
         new Item("bgm.dat"),
         new Item("chara.dat"),
         new Item("saver.dat", 2),
         new Item("se.dat"),
         new Item("system.dat"),
         new Item("sysvoice.dat", 0),
         new Item("voice.dat"),
         new Item("wallpaper.dat", 1),
      };
      static void Main(string[] args) {
         string src = args[0];
         string dst = args[1];

         var srcAttr = File.GetAttributes(src);
         if ((srcAttr & FileAttributes.Directory) != 0)
            ExtractFolder(
               new DirectoryInfo(src),
               new DirectoryInfo(dst)
            );
         else Extract(
            new FileInfo(src),
            new DirectoryInfo(Path.Combine(dst, Path.GetFileNameWithoutExtension(src))),
            files.FirstOrDefault(e => e.Name == Path.GetFileName(src))?.Mode ?? -1
         );
      }
      private class Record {
         public readonly long offset;
         public readonly string filename;
         public long length;
         public Record(long offset, string filename) {
            this.offset = offset;
            this.filename = filename;
         }
      }
      private class Item {
         public readonly string Name;
         public readonly int Mode;
         public Item(string Name, int Mode = -1) {
            this.Name = Name; this.Mode = Mode;
         }
      }
      public static void ExtractFolder(DirectoryInfo srcF, DirectoryInfo dstF) {
         foreach (var item in files) {
            var file = new FileInfo(Path.Combine(srcF.FullName, item.Name));
            Extract(file, new DirectoryInfo(Path.Combine(dstF.FullName, Path.GetFileNameWithoutExtension(file.Name))), item.Mode);
         }
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
                     var buf = new MemoryStream(ulen);
                     DecompressLND(buf, ulen, new BinaryReader(fin));
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
      public static void DecryptAndWriteData(Stream src, Stream dst, long offset, int count, int mode, string srcName) {
         var startOffset = 0;
         if (mode == 1) startOffset = 4352;
         else if (mode == 2) startOffset = 4096;
         byte hash = 0;
         foreach (var chr in Encoding.ASCII.GetBytes(srcName)) {
            hash += chr;
         }
         var key = new byte[256];
         key[0] = hash;
         for (var keyIdx = 1; keyIdx < 256; keyIdx++) {
            key[keyIdx] = (byte)(109 * key[keyIdx - 1] - 37);
         }
         var srcBuffer = new byte[count];
         var srcLastPos = src.Position;
         src.Position = offset;
         src.Read(srcBuffer, 0, count);
         for (var idx = 0; idx < 256; idx++) {
            srcBuffer[startOffset + idx] -= key[idx];
         }
         dst.Write(srcBuffer, 0, count);
         src.Position = srcLastPos;
      }
      public static void DecompressLND(MemoryStream @out, int uncompressedLength, BinaryReader din) {
         byte[] temp = new byte[16 << 10];

         long start = @out.Position;

         int w = 0;
         while (w < uncompressedLength) {
            int b = din.ReadByte();
            if ((b & 0x80) != 0) {
               if ((b & 0x40) != 0) {
                  //Copy single byte k times
                  int k = (b & 0x1f) + 2;
                  if ((b & 0x20) != 0) {
                     k += din.ReadByte() << 5;
                  }

                  b = din.ReadByte();
                  for (int n = 0; n < k && w < uncompressedLength; n++) {
                     @out.WriteByte((byte)b);
                     w++;
                  }
               }
               else {
                  //Copy previously decompressed bytes to output
                  int offset = ((b & 0x03) << 8) + din.ReadByte() + 1;
                  int count = ((b >> 2) & 0x0f) + 2;
                  int readIndex = w - offset;

                  //Can't copy multiple bytes at a time, readIndex+count may be greater than the initial write pos
                  for (int n = 0; n < count && w < uncompressedLength; n++) {
                     var currentPos = @out.Position;
                     @out.Position = start + readIndex + n;
                     var val = @out.ReadByte();
                     @out.Position = currentPos;
                     @out.WriteByte((byte)val);
                     w++;
                  }
               }
            }
            else {
               if ((b & 0x40) != 0) {
                  //Copy byte sequence k times
                  int count = (b & 0x3f) + 2;
                  int k = din.ReadByte() + 1;

                  din.Read(temp, 0, count);
                  for (int n = 0; n < k && w < uncompressedLength; n++) {
                     for (int x = 0; x < count && w < uncompressedLength; x++) {
                        @out.WriteByte(temp[x]);
                        w++;
                     }
                  }
               }
               else {
                  //Copy byte sequence
                  int count = (b & 0x1f) + 1;
                  if ((b & 0x20) != 0) {
                     count += din.ReadByte() << 5;
                  }

                  for (int n = 0; n < count && w < uncompressedLength; n++) {
                     @out.WriteByte(din.ReadByte());
                     w++;
                  }
               }
            }
         }
         @out.SetLength(w);
      }
   }
}