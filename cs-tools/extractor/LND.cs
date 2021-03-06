﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace extractor {
   static class LND {
      static readonly uint ExpectedMagic = Encoding.ASCII.GetBytes("lnd\0").ToUInt32();
      public static MemoryStream DecompressLND(this Stream inp, uint _uncompressedLength = 0) {
         var din = new BinaryReader(inp);
         uint uncompressedLength;
         if (_uncompressedLength == 0) {
            var magic = din.ReadUInt32();
            if (magic != ExpectedMagic) throw new IOException($"This is not a LND Stream! (Magic code: {magic:x8})");
            inp.Position += 4;
            uncompressedLength = din.ReadUInt32();
            inp.Position += 4;
         } else uncompressedLength = _uncompressedLength;
         var @out = new MemoryStream(new byte[uncompressedLength], 0, (int)uncompressedLength, true, true);
         int w = 0;
         byte[] temp = new byte[16 << 10];
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
               } else {
                  //Copy previously decompressed bytes to output
                  int offset = ((b & 0x03) << 8) + din.ReadByte() + 1;
                  int count = ((b >> 2) & 0x0f) + 2;
                  int readIndex = w - offset;
                  //Can't copy multiple bytes at a time, readIndex+count may be greater than the initial write pos
                  for (int n = 0; n < count && w < uncompressedLength; n++) {
                     var currentPos = @out.Position;
                     @out.Position = readIndex + n;
                     var val = @out.ReadByte();
                     @out.Position = currentPos;
                     @out.WriteByte((byte)val);
                     w++;
                  }
               }
            } else {
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
               } else {
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
         @out.Position = 0;
         return @out;
      }
   }
}
