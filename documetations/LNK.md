# About the LNK file format
LNK is the main archive format in Ever17.

The following files use the LNK file format:

- `bg.dat` (contains background images);
- `bgm.dat` (contains background musics);
- `chara.dat` (contains standing character sprites, aka tachi-e);
- `saver.dat` (contains bonus screensavers, in the days of LCD screen, this is pretty outdated);
- `script.dat` (contains in-game scripts);
- `se.dat` (contains sound effects);
- `system.dat` (contains sprites for GUI);
- `sysvoice.dat` (contains bonus voice clips);
- `voice.dat` (contains voices for every dialogues);
- `wallpaper.dat` (contains bonus wallpapers).

The LNK format stores multiple records, each record correctsponds to a file, there is no folder.

The records in `saver.dat`, `sysvoice.dat`, `wallpaper.dat` files are encrypted.

Some records are compressed.

# Sequential Layout
| Name of segment  | Note |
| -                | - |
| **Header**       | Retrieve `nRecord` from here |
| **Index** table  | Has `nRecord` **Index** elements  |
| **Record** table | Has `nRecord` **Record** elements |

# File format

The archive begins by a header with this structure:
```c
struct Header {
   char magic[4];
   uint32_t nRecords;
   char padding[8];
}
```
- `magic` must be `"LNK\0"`;
- `nRecord` is the number of records in archive;
- `padding` is just padding, value doesn't matter.

Right after that, there is an array that has `nRecords` pieces of record information (`Index indexes[nRecord]`), corresponding to each records. Each piece of information has this structure:
```c
struct Index {
   uint32_t relOffset;
   uint32_t attributes;
   char name[24];
}
```
- `relOffset` is the relative offset of the corresponding record in the archive.<br>Absolute offset is `sizeof(Header) + nRecords * sizeof(Index) + relOffset`;
- `attributes` is the attributes of the corresponding record in the archive, contains the record's size and a compression flag;
- `name` is the __file name__ of the corresponding record. This is a __null-terminated__ string, the length of this string doesn't exceed 24 bytes, including the terminating NULL.

## About the attributes of record
- If the least significant bit of it is set, then the corresponding record is __compressed__;
- Take the `attributes` and shift it right (discard the least significant bit), then you will get the size of the record: `attributes >> 1`.

## How to know which record is encrypted
- You check the __file name__, if the file name ends with `".wav"`, `".jpg"` or `".scr"` (by case-insensitive manner), then that record is encrypted;
- Except records in script.dat which are non-encrypted.

## Algorithm to decrypt records
```csharp
// this decrypting method relies on the integer overflow behavior of C#
static void DecryptInPlace(byte[] record, string name) {
   var startPos = -1;
   if (name.ToLower().EndsWith(".wav"))
      startPos = 0;
   else if (name.ToLower().EndsWith(".jpg"))
      startPos = 4352;
   else if (name.ToLower().EndsWith(".scr"))
      startPos = 4096;
   if (startPos == -1)
      return;
   byte key = 0;
   foreach (var chr in Encoding.ASCII.GetBytes(name)) {
      key += chr;
   }
   for (int i = 0; i < 256; i++) {
      record[startPos + i] -= key;
      key = (byte)(key * 0x6D - 0x25);
   }
}
```

## Algorithm to decompress records
To decompress record, pass a record stream to the `inp` parameter and zero to the `_uncompressedLength` parameter (This algorithm is also used as a step in the process of decoding `"*.cps"` files which is covered in another documentation).
```csharp
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
            // Copy single byte k times
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
            // Copy previously decompressed bytes to output
            int offset = ((b & 0x03) << 8) + din.ReadByte() + 1;
            int count = ((b >> 2) & 0x0f) + 2;
            int readIndex = w - offset;
            // Can't copy multiple bytes at a time, readIndex+count may be greater than the initial write pos
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
            // Copy byte sequence k times
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
            // Copy byte sequence
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
