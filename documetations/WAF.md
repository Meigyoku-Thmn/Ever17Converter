# About the WAF file format
This is the format for audio in Ever17.

Like the CPS format, I don't know much about this format. My code is adapted from https://github.com/vn-tools/arc_unpacker (thanks!).

This format seems to be just a variant of the wav format. The codec is "Microsoft ADPCM Format" (WAVE_FORMAT_ADPCM).

Reference:
* https://github.com/vn-tools/arc_unpacker/blob/master/src/dec/kid/waf_audio_decoder.cc
* https://www.iana.org/assignments/wave-avi-codec-registry/wave-avi-codec-registry.xhtml

# Decode the WAF file format
(C#) Prepare a Stream and the length (in bytes), then pass them to the ToWAV method, this returns a wav stream, not much a decoding process, the content is copied as-is.
```csharp
static readonly uint ExpectedMagic = Encoding.ASCII.GetBytes("WAF\0").ToUInt32();
public static MemoryStream ToWAV(this Stream inp, long length = -1) {
   var lastPos = inp.Position;
   var inb = new BinaryReader(inp);
   var magic = inb.ReadUInt32();
   if (magic != ExpectedMagic) throw new IOException($"Unknown archive format (Magic code: {magic:x8})");
   var paddingMagic = inb.ReadUInt16();
   if (paddingMagic != 0) throw new IOException($"Unknown archive format (Magic code: {magic:x8})_\\00\\00");

   ushort codecId = 2; // MS ADPCM
   var channelCount = inb.ReadUInt16();
   var sampleRate = inb.ReadUInt32();
   var byteRate = inb.ReadUInt32();
   var blockAlign = inb.ReadUInt16();
   var bitsPerSample = inb.ReadUInt16();
   var extraCodecHeaders = inb.ReadBytes(32);
   var samplesSize = inb.ReadUInt32();
   var samples = inb.ReadBytes((int)samplesSize);

   if (length > -1 && inp.Position - lastPos > length) throw new IndexOutOfRangeException("");

   var riffMagic = Encoding.ASCII.GetBytes("RIFF").ToUInt32();
   var riffSize = (uint)0;
   var waveMagic = Encoding.ASCII.GetBytes("WAVE").ToUInt32();
   var fmt_Magic = Encoding.ASCII.GetBytes("fmt ").ToUInt32();
   var dataMagic = Encoding.ASCII.GetBytes("data").ToUInt32();
   var smplMagic = Encoding.ASCII.GetBytes("smpl").ToUInt32();

   var outLen = riffMagic.Size() +
      riffSize.Size() +
      waveMagic.Size() +
      fmt_Magic.Size() +
      extraCodecHeaders.Length.Size() +
      codecId.Size() +
      channelCount.Size() +
      sampleRate.Size() +
      byteRate.Size() +
      blockAlign.Size() +
      bitsPerSample.Size() +
      ((short)extraCodecHeaders.Length).Size() +
      extraCodecHeaders.Length +
      dataMagic.Size() +
      samples.Length.Size() +
      samples.Length;
   var outB = new BinaryWriter(new MemoryStream(new byte[outLen], 0, outLen, true, true));
   riffSize = (uint)(outB.BaseStream.Length - riffMagic.Size() - riffSize.Size());

   outB.Write(riffMagic);
   outB.Write(riffSize);
   outB.Write(waveMagic);
   outB.Write(fmt_Magic);
   outB.Write(18 + extraCodecHeaders.Length);
   outB.Write(codecId);
   outB.Write(channelCount);
   outB.Write(sampleRate);
   outB.Write(byteRate);
   outB.Write(blockAlign);
   outB.Write(bitsPerSample);
   outB.Write((ushort)extraCodecHeaders.Length);
   outB.Write(extraCodecHeaders);
   outB.Write(dataMagic);
   outB.Write(samples.Length);
   outB.Write(samples);

   var outStream = outB.BaseStream as MemoryStream;
   outStream.Position = 0;
   return outStream;
}
```
