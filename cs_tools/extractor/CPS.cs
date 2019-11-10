using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace extractor {
   static class CPS {
      static readonly uint ExpectedMagic = Encoding.ASCII.GetBytes("CPS\0").ToUInt32();
      public static MemoryStream ToPRT(this Stream inp, long length = -1) {
         var lastPos = inp.Position;
         var inb = new BinaryReader(inp);
         var magic = inb.ReadUInt32();
         if (magic != ExpectedMagic) throw new IOException($"Unknown archive format (Magic code: {magic:x8})");

         var size_comp = inb.ReadUInt32();
         var version = inb.ReadUInt16();
         if (version != 0x66) throw new IOException($"Unknown CPS file version (0x{version.ToString("X")})");
         var comprType = inb.ReadUInt16();
         var size_orig = inb.ReadUInt32();

         var outLen = size_comp - 16 - 4;
         var outStream = new MemoryStream(inb.ReadBytes((int)outLen), 0, (int)outLen, true, true);
         var offset = inb.ReadUInt32() - 0x7534682;
         if (length > -1 && inp.Position - lastPos > length) throw new IndexOutOfRangeException("");
         if (offset != 0)
            DecryptInPlace(outStream.GetBuffer(), size_comp, offset);
         if ((comprType & 1) != 0)
            outStream = outStream.DecompressLND(size_orig);
         outStream.Position = 0;
         return outStream;
      }
      static void DecryptInPlace(byte[] input, uint size_comp, uint offset) {
         var inputStream = new BinaryReader(new MemoryStream(input));
         var outputStream = new BinaryWriter(new MemoryStream(input, true));

         var realOffset = offset - 16;
         inputStream.BaseStream.Position = realOffset;
         var key = inputStream.ReadUInt32() + offset + 0x3786425;

         inputStream.BaseStream.Position = 0;
         var allowWrite = false;
         while (inputStream.BaseStream.HasLeft()) {
            bool useKey = inputStream.BaseStream.Position != realOffset;
            var value = inputStream.ReadUInt32();
            if (useKey) {
               value -= size_comp;
               value -= key;
            }
            if (allowWrite) outputStream.Write(value);
            key = key * 0x41C64E6D + 0x9B06;
            allowWrite = true;
         }
         outputStream.Write((uint)0);
      }
   }
}
