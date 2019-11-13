using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace extractor {
   static class PRT {
      static public void ToBMPFile() {
         throw new NotImplementedException();
      }
      static readonly uint ExpectedMagic = Encoding.ASCII.GetBytes("PRT\0").ToUInt32();
      public static void ToPNGFile() {
         throw new NotImplementedException();
      }
      public static (MemoryStream, MemoryStream) ToPNG(this Stream inp, long length = -1) {
         var lastPos = inp.Position;
         var inb = new BinaryReader(inp);
         var magic = inb.ReadUInt32();
         if (magic != ExpectedMagic) throw new IOException($"Unknown archive format (Magic code: {magic:x8})");

         var version = inb.ReadUInt16();
         if (version != 0x66 && version != 0x65)
            throw new IOException($"Unsupported version of PRT (Version: 0x{version.ToString("X")})");

         var bitDepth = inb.ReadUInt16();
         var paletteOffset = inb.ReadUInt16();
         var dataOffset = inb.ReadUInt16();
         uint width = inb.ReadUInt16();
         uint height = inb.ReadUInt16();
         var hasAlpha = inb.ReadUInt32() != 0;

         MemoryStream iniStream = null;

         if (version == 0x66) {
            var xCoord = inb.ReadUInt32();
            var yCoord = inb.ReadUInt32();
            var width2 = inb.ReadUInt32();
            var height2 = inb.ReadUInt32();
            if (xCoord != 0 || yCoord != 0) {
               iniStream = new MemoryStream();
               var iniWriter = new StreamWriter(iniStream, Encoding.UTF8, 128, true);
               iniWriter.WriteLine($@"[Coord]");
               iniWriter.WriteLine($@"X={xCoord}");
               iniWriter.WriteLine($@"Y={yCoord}");
               iniWriter.Flush();
            }
            if (width2 != 0) width = width2;
            if (height2 != 0) height = height2;
         }

         var stride = (((width * bitDepth / 8) + 3) / 4) * 4;

         inb.BaseStream.Position = paletteOffset;
         Color[] palette = null;
         if (bitDepth == 8) {
            palette = new Color[256];
            for (int i = 0; i < 256; i++) {
               var channelArr = inb.ReadBytes(4);
               var B = channelArr[0];
               var G = channelArr[1];
               var R = channelArr[2];
               var A = 0xFF | channelArr[3];
               palette[i] = Color.FromArgb(A, R, G, B);
            }
         }

         var image = new DirectBitmap((int)width, (int)height);
         void ReadSetPixel_8bppIndexed(int x, int y) {
            image.SetPixel(x, y, palette[inb.ReadByte()]);
         }
         void ReadSetPixel_24bpp(int x, int y) {
            var channelArr = inb.ReadBytes(3);
            var B = channelArr[0];
            var G = channelArr[1];
            var R = channelArr[2];
            image.SetPixel(x, y, Color.FromArgb(0xFF, R, G, B));
         }
         void ReadSetPixel_32bpp(int x, int y) {
            var channelArr = inb.ReadBytes(4);
            var B = channelArr[0];
            var G = channelArr[1];
            var R = channelArr[2];
            var A = channelArr[3];
            image.SetPixel(x, y, Color.FromArgb(A, R, G, B));
         }
         Action<int, int> ReadSetPixel;
         if (bitDepth == 8) ReadSetPixel = ReadSetPixel_8bppIndexed;
         else if (bitDepth == 24) ReadSetPixel = ReadSetPixel_24bpp;
         else if (bitDepth == 32) ReadSetPixel = ReadSetPixel_32bpp;
         else throw new IOException($"Unsupported bit depth: {bitDepth}");
         for (var y = 0; y < height; y++) {
            var rowOffset = dataOffset + y * stride;
            inb.BaseStream.Position = rowOffset;
            for (var x = 0; x < width; x++) {
               ReadSetPixel(x, (int)height - 1 - y);
            }
         }

         if (hasAlpha) {
            inb.BaseStream.Position = dataOffset + height * stride;
            for (var y = 0; y < height; y++) {
               for (var x = 0; x < width; x++) {
                  var c = image.GetPixel(x, y);
                  c = Color.FromArgb(inb.ReadByte(), c);
                  image.SetPixel(x, y, c);
               }
            }
         }

         if (length > -1 && inp.Position - lastPos > length) throw new IndexOutOfRangeException("");

         var outStream = new MemoryStream();
         image.Bitmap.Save(outStream, ImageFormat.Png);
         image.Dispose();
         outStream.Position = 0;
         return (outStream, iniStream);
      }
   }
}
