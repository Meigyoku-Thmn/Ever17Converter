# About the LNK file format:
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

The records in saver.dat, sysvoice.dat, wallpaper.dat files are encrypted. Some records are compressed.

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
- `padding` is just padding and always zero.

Right after that, there is an array that has `nRecords` pieces of record's information (Index), corresponding to each records respectively. Each piece of information has this structure:
```c
struct Index {
   uint32_t relOffset;
   uint32_t attributes;
   char name[24];
}
```
- `relOffset` is the relative offset of the corresponding record in the archive.
Absolute offset is `sizeof(Header) + nRecords * sizeof(Index) + relOffset`;
- `attributes` is the attributes of the corresponding record in the archive;
- `name` is the __file name__ of the corresponding record. This is a __null-terminated__ string, the length of this string doesn't exceed 24 bytes, including the terminating NULL.

## About the attributes of record
- If the least significant bit of it is set, then the corresponding record is __compressed__;
- Take the `attributes` and shift it right, discarding the least significant bit, then you will get the size of the record: `attributes >> 1`.

## How to know which record is encrypted
- You check the __file name__, if the file name ends with `".wav"`, `".jpg"` or `".scr"` (by case-insensitive manner), then that record is encrypted;
- Except records in script.dat which are non-encrypted;

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

# Layout of the LNK format
| Name of segment | Note               |
| -               | -                  |
| Header          |                    |
| List of Indexes | `nRecord` elements |
| List of Records | `nRecord` elements |