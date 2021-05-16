# About CPS file format
This is the format for graphics in Ever17.

Unfortunately, I still don't know much about this format, except some code I adapted from https://weeaboo.nl/ (thanks!).

My code is horrible in performance, sorry, they are from my researching code about this game, so performance was not a priority.

The final PRT image format has an interesting thing: the [strides](https://docs.microsoft.com/en-us/windows/win32/medfound/image-stride). I think the format was made like that, so it can be copied directly to the graphics memory.

# How to decode CPS format
(C#) Prepare a `Stream` and the `length` (in bytes), then pass them to the `ToPRT` method, this returns a decoded stream.
```csharp
static readonly uint ExpectedMagic = Encoding.ASCII.GetBytes("CPS\0").ToUInt32();
// this decoding method relies on the integer overflow behavior of C#
public static MemoryStream ToPRT(this Stream inp, long length = -1) {
   var lastPos = inp.Position;
   var inb = new BinaryReader(inp);
   var magic = inb.ReadUInt32();
   if (magic != ExpectedMagic)
      throw new IOException($"Unknown archive format (Magic code: {magic:x8})");

   var size_comp = inb.ReadUInt32();
   var version = inb.ReadUInt16();
   if (version != 0x66)
      throw new IOException($"Unknown CPS file version (0x{version.ToString("X")})");
   var comprType = inb.ReadUInt16();
   var size_orig = inb.ReadUInt32();

   var outLen = size_comp - 16 - 4;
   var outStream = new MemoryStream(inb.ReadBytes((int)outLen), 0, (int)outLen, true, true);
   var offset = inb.ReadUInt32() - 0x7534682;
   if (length > -1 && inp.Position - lastPos > length)
      throw new IndexOutOfRangeException("");
   if (offset != 0)
      DecryptInPlace(outStream.GetBuffer(), size_comp, offset);
   if ((comprType & 1) != 0)
      outStream = outStream.DecompressLND(size_orig);
   outStream.Position = 0;
   return outStream;
}
static bool HasLeft(this Stream @this) {
   return @this.Position < @this.Length;
}
// this decrypting method relies on the integer overflow behavior of C#
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
static uint ExpectedMagic = Encoding.ASCII.GetBytes("lnd\0").ToUInt32();
static MemoryStream DecompressLND(this Stream inp, uint _uncompressedLength = 0) {
   var din = new BinaryReader(inp);
   uint uncompressedLength;
   if (_uncompressedLength == 0) {
      var magic = din.ReadUInt32();
      if (magic != ExpectedMagic) throw new IOException($"This is not a LND Stream! (Magic code: {magic:x8})");
      inp.Position += 4;
      uncompressedLength = din.ReadUInt32();
      inp.Position += 4;
   } else {
      uncompressedLength = _uncompressedLength;
   }
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
```
After that, pass that decoded stream and a desired output file path to the `ToPNGFile` method, this creates a PNG file and an metadata ini file.

```csharp
static readonly uint ExpectedMagic = Encoding.ASCII.GetBytes("PRT\0").ToUInt32();
static (DirectBitmap image, MemoryStream ini) ToImage(this Stream inp, long length = -1) {
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

   return (image, iniStream);
}
public static void ToPNGFile(this Stream inp, string outName, long length = -1) {
   var (image, iniStream) = inp.ToImage(length);
   image.Bitmap.Save(outName, ImageFormat.Png);
   image.Dispose();
   outName = Path.ChangeExtension(outName, ".ini");
   if (iniStream != null)
      using (var iniFile = File.OpenWrite(outName))
         iniFile.Write(iniStream.GetBuffer(), 0, (int)iniStream.Length);
}
public static (MemoryStream, MemoryStream) ToPNG(this Stream inp, long length = -1) {
   var (image, iniStream) = inp.ToImage(length);
   var outStream = new MemoryStream();
   image.Bitmap.Save(outStream, ImageFormat.Png);
   image.Dispose();
   outStream.Position = 0;
   return (outStream, iniStream);
}
```
