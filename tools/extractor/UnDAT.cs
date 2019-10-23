using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace extractor {
   public class UnDAT {
      private UnDAT() { }
      static void Main(string[] args) {
         string src = args[0];
         string dst = args[1];

         ExtractFolder(new DirectoryInfo(src), new DirectoryInfo(dst));
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
      public static void ExtractFolder(DirectoryInfo srcF, DirectoryInfo dstF, params string[] ignoreList) {

         var files = srcF.GetFiles("*.dat", SearchOption.TopDirectoryOnly).ToList();
         files.RemoveAll(e => ignoreList.Any(ignoredFile => ignoredFile == e.Name));

         foreach (var file in files) {
            Extract(file, new DirectoryInfo(Path.Combine(dstF.FullName, Path.GetFileNameWithoutExtension(file.Name))));
         }
      }
      public static void Extract(FileInfo archive, DirectoryInfo dst) {
         dst.Create();
         using (var fin = archive.OpenRead()) {
            Record[] records;
            uint recordsL;
            {
               var lin = new BinaryReader(fin);
               int magic = lin.ReadInt32();
               if (magic != 0x004B4E4C) {
                  throw new IOException($"Unknown archive format header: {magic:x8}");
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
               FileInfo file = new FileInfo(Path.Combine(dst.FullName, records[n].filename));
               file.Directory.Create();
               var lndHeader = new BinaryReader(new MemoryStream(16));
               using (var fout = file.OpenWrite()) {
                  var oc = fout;
                  long off = records[n].offset;
                  long len = records[n].length;
                  lndHeader.BaseStream.Position = 0;
                  channel.Position = off;
                  channel.CopyTo(lndHeader.BaseStream, (int)lndHeader.BaseStream.Length);
                  lndHeader.BaseStream.Position = 0;
                  if (lndHeader.ReadInt32() == 0x00646E6C) {
                     //LND compressed
                     lndHeader.BaseStream.Position = 8;
                     int ulen = lndHeader.ReadInt32();
                     channel.Position = off + lndHeader.BaseStream.Length;
                     var buf = new MemoryStream(ulen);
                     DecompressLND(buf, ulen, new BinaryReader(fin));
                     buf.Position = 0;
                     buf.CopyTo(oc);
                     buf.Position = 0;
                  }
                  else {
                     channel.Position = off;
                     channel.CopyTo(oc, (int)len);
                  }
               }
            }
         }
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