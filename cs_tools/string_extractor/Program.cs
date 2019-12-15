using PeNet.Structures;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using YamlDotNet.Core;
using YamlDotNet.Serialization;
using YamlDotNet.Serialization.EventEmitters;

namespace string_extractor {
   static class Program {
      public static (long size, string checksum) GetSizeAndChecksum(string file) {
         var fileInfo = new FileInfo(file);
         using (FileStream stream = fileInfo.OpenRead()) {
            var sha = new SHA256Managed();
            byte[] checksum = sha.ComputeHash(stream);
            return (fileInfo.Length, BitConverter.ToString(checksum).Replace("-", string.Empty));
         }
      }
      // http://www.rohitab.com/discuss/topic/40291-how-to-convert-file-offset-to-va-in-pe-file/
      static ulong VAToFileOffset(ulong dwVirtAddr, PeNet.PeFile peFile) {
         var secHdrs = peFile.ImageSectionHeaders;
         var dwImageBase = peFile.ImageNtHeaders.OptionalHeader.ImageBase;
         ulong dwReturn = dwVirtAddr;
         for (int wSections = 0; wSections < secHdrs.Length; wSections++) {
            if (dwReturn >= (dwImageBase + secHdrs[wSections].VirtualAddress)) {
               if (dwReturn < (dwImageBase + secHdrs[wSections].VirtualAddress + secHdrs[wSections].VirtualSize)) {
                  dwReturn -= (dwImageBase + secHdrs[wSections].VirtualAddress);
                  dwReturn += secHdrs[wSections].PointerToRawData;
                  return dwReturn;
               }
            }
         }
         return 0;
      }
      static string ReadNullTerminatedStr(this BinaryReader target) {
         var lastPos = target.BaseStream.Position;
         while (target.ReadByte() != 0) { }
         var len = target.BaseStream.Position - lastPos - 1;
         target.BaseStream.Position = lastPos;
         var chrs = target.ReadBytes((int)len);
         return Encoding.GetEncoding(1252).GetString(chrs);
      }
      class MusicInfo {
         public string Name;
         public string Info1;
         public string Info2;
         public string Info3;
         public List<string> Lyrics = new List<string>();
      }
      class VoiceInfo {
         public string Character;
         public List<string> Lines;
      }
      public class MultilineScalarFlowStyleEmitter : ChainedEventEmitter {
         public MultilineScalarFlowStyleEmitter(IEventEmitter nextEmitter) : base(nextEmitter) { }
         public override void Emit(ScalarEventInfo eventInfo, IEmitter emitter) {
            if (typeof(string).IsAssignableFrom(eventInfo.Source.Type)) {
               string value = eventInfo.Source.Value as string;
               if (!string.IsNullOrEmpty(value)) {
                  bool isMultiLine = value.IndexOfAny(new char[] { '\r', '\n', '\x85', '\x2028', '\x2029' }) >= 0;
                  if (isMultiLine) eventInfo = new ScalarEventInfo(eventInfo.Source) {
                     Style = ScalarStyle.Literal
                  };
               }
            }
            nextEmitter.Emit(eventInfo, emitter);
         }
      }

      static readonly string ever17PC_us_sha256 = "39972B2084CD2C3AA9D9F02B3BB1222A0BFCFE7C922BD53FABD8401FBC9D55CF";
      static readonly long ever17PC_us_size = 368640;
      static void Main(string[] args) {
         var serializer = new SerializerBuilder()
            .WithEventEmitter(e => new MultilineScalarFlowStyleEmitter(e))
            .Build();
         string targetPath = args[0];
         string outputDirPath = args[1];
         Directory.CreateDirectory(outputDirPath);
         var (targetSize, target_sha256) = GetSizeAndChecksum(targetPath);
         if (targetSize != ever17PC_us_size || string.Compare(target_sha256, ever17PC_us_sha256, true) != 0) {
            Console.WriteLine("Wrong exe file!");
            Environment.Exit(-1);
         }
         var targetHeader = new PeNet.PeFile(targetPath);
         var target = new BinaryReader(File.OpenRead(targetPath));

         var scut_pointers_offset = 0x00040E88;
         target.BaseStream.Position = scut_pointers_offset;
         var scut_pointers = new List<long>();
         for (var i = 0; i < 32; i++) {
            scut_pointers.Add((long)VAToFileOffset(target.ReadUInt32(), targetHeader));
         }
         var scut_descriptions = new List<string>();
         foreach (var scut_pointer in scut_pointers) {
            target.BaseStream.Position = scut_pointer;
            var scut_description = target.ReadNullTerminatedStr();
            scut_descriptions.Add(scut_description);
         }
         using (var outfile = new StreamWriter(File.Create(Path.Combine(outputDirPath, $"en_scut_descriptions.yaml")))) {
            var dict = new Dictionary<int, string>();
            foreach (var (scut_description, i) in scut_descriptions.Select((e, i) => (e, i)))
               dict.Add(i, scut_description);
            var yaml = serializer.Serialize(dict);
            outfile.Write(yaml);
         }

         var jukebox_music_name_pointers_offset = 0x00040F58;
         target.BaseStream.Position = jukebox_music_name_pointers_offset;
         var jukebox_music_name_pointers = new List<long>();
         for (var i = 0; i < 179; i++) {
            jukebox_music_name_pointers.Add((long)VAToFileOffset(target.ReadUInt32(), targetHeader));
         }
         var jukebox_music_lines = new List<string>();
         foreach (var jukebox_music_name_pointer in jukebox_music_name_pointers) {
            target.BaseStream.Position = jukebox_music_name_pointer;
            var jukebox_music_name = target.ReadNullTerminatedStr();
            jukebox_music_lines.Add(jukebox_music_name);
         }
         var jukebox_musics = new List<MusicInfo>();
         foreach (var jukebox_line in jukebox_music_lines.Take(28)) {
            jukebox_musics.Add(new MusicInfo() { Name = jukebox_line });
         }
         foreach (var (jukebox_line, i) in jukebox_music_lines.Skip(28).Take(56).Select((e, i) => (e, i))) {
            var musicInfo = jukebox_musics[i / 2];
            if (musicInfo.Info1 == null) musicInfo.Info1 = jukebox_line;
            else if (musicInfo.Info2 == null) musicInfo.Info2 = jukebox_line;
         }
         {
            var vocalMusicInfos = jukebox_musics.Skip(24);
            var idx = -1;
            foreach (var jukebox_line in jukebox_music_lines.Skip(84).Take(95)) {
               if (jukebox_line.StartsWith("Singer:")) {
                  idx++;
                  vocalMusicInfos.ElementAt(idx).Info3 = jukebox_line;
               }
               else {
                  vocalMusicInfos.ElementAt(idx).Lyrics.Add(jukebox_line);
               }
            }
         }
         foreach (var jukebox_music in jukebox_musics) {
            string Beautify(string str) {
               return str.Replace(": ", ":").Replace(", ", ",").Replace(":", ": ").Replace(",", ", ")
                  .Replace("Ly, Mu:", "Lyrics, Music:")
                  .Replace("Mu.Ar:", "Music, Arrange:")
                  .Replace("Ar:", "Arrange:")
                  .Replace("Ly:", "Lyrics:")
                  ;
            }
            if (jukebox_music.Info1 != null) jukebox_music.Info1 = Beautify(jukebox_music.Info1);
            if (jukebox_music.Info2 != null) jukebox_music.Info2 = Beautify(jukebox_music.Info2);
            if (jukebox_music.Info3 != null) jukebox_music.Info3 = Beautify(jukebox_music.Info3);
         }
         using (var musicFile = new StreamWriter(File.Create(Path.Combine(outputDirPath, "en_jukebox_music.yaml")))) {
            var dict = Enumerable.Empty<int>().ToDictionary(x => x, x => new {
               Name = "",
               FileId = 0,
               Infos = new string[0],
               Lyrics = new List<string>(),
            });
            foreach (var (jukebox_music, i) in jukebox_musics.Select((e, i) => (e, i))) {
               var FileId = (i <= 21) ? (i + 1) : (i + 2);
               if (FileId == 26) FileId = 29;
               else if (FileId == 27) FileId = 28;
               else if (FileId == 28) FileId = 27;
               else if (FileId == 29) FileId = 26;
               dict.Add(i, new {
                  Name = jukebox_music.Name.Substring(4),
                  FileId = FileId,
                  Infos = new string[] { jukebox_music.Info1, jukebox_music.Info2, jukebox_music.Info3 }
                     .Where(e => !string.IsNullOrEmpty(e)).ToArray(),
                  Lyrics = jukebox_music.Lyrics,
               });
            }
            var yaml = serializer.Serialize(dict);
            musicFile.Write(yaml);
         }

         var wallpaper_description_offset = 0x00046E9C;
         target.BaseStream.Position = wallpaper_description_offset;
         var wallpaper_description = target.ReadNullTerminatedStr();
         File.WriteAllText(Path.Combine(outputDirPath, "en_wallpaper_description.txt"), wallpaper_description);

         var screensaver_description_offset = 0x0004717C;
         target.BaseStream.Position = screensaver_description_offset;
         var screensaver_description = target.ReadNullTerminatedStr();
         File.WriteAllText(Path.Combine(outputDirPath, "en_screensaver_description.txt"), screensaver_description);

         var system_voice_description_offset = 0x000472A4;
         target.BaseStream.Position = system_voice_description_offset;
         var system_voice_description = target.ReadNullTerminatedStr();
         File.WriteAllText(Path.Combine(outputDirPath, "en_sysvoice_description.txt"), system_voice_description);

         var system_voice_line_pointers_offset = 0x00041520;
         target.BaseStream.Position = system_voice_line_pointers_offset;
         var system_voice_line_pointers = new List<long>();
         for (var i = 0; i < 168; i++) {
            system_voice_line_pointers.Add((long)VAToFileOffset(target.ReadUInt32(), targetHeader));
         }
         var system_voice_lines = new List<string>();
         foreach (var system_voice_line_pointer in system_voice_line_pointers) {
            target.BaseStream.Position = system_voice_line_pointer;
            var system_voice_line = target.ReadNullTerminatedStr();
            system_voice_lines.Add(system_voice_line);
         }
         var system_voices = new List<VoiceInfo>();
         foreach (var system_voice_line in system_voice_lines) {
            var splitPoint = system_voice_line.IndexOf(" ");
            var character = system_voice_line.Substring(0, splitPoint);
            if (character == "Youth") character = "Kid";
            var line = system_voice_line.Substring(splitPoint + 1);
            if (system_voices.Count == 0 || system_voices.Last().Character != character)
               system_voices.Add(new VoiceInfo() { Character = character, Lines = new List<string>() { line } });
            else system_voices.Last().Lines.Add(line);
         }
         foreach (var system_voice in system_voices) {
            File.WriteAllLines(
               Path.Combine(outputDirPath, $"en_system_voice_{system_voice.Character}.txt"), system_voice.Lines);
         }

         var scene_title_pointers_offset = 0x000476C0;
         target.BaseStream.Position = scene_title_pointers_offset;
         var scene_title_pointers = new List<long>();
         for (var i = 0; i < 126; i++) {
            scene_title_pointers.Add((long)VAToFileOffset(target.ReadUInt32(), targetHeader));
         }
         var scene_titles = new List<string>();
         foreach (var scene_title_pointer in scene_title_pointers) {
            target.BaseStream.Position = scene_title_pointer;
            var scene_title = target.ReadNullTerminatedStr();
            scene_titles.Add(scene_title);
         }
         File.WriteAllLines(Path.Combine(outputDirPath, "en_scene_titles.txt"), scene_titles);
         return;
         var test_pointers_offset = 0x0003EA78;
         target.BaseStream.Position = test_pointers_offset;
         var test_pointers = new List<long>();
         for (var i = 0; i < 2202; i++) {
            test_pointers.Add((long)VAToFileOffset(target.ReadUInt32(), targetHeader));
         }
         var tests = new List<string>();
         foreach (var test_pointer in test_pointers) {
            target.BaseStream.Position = test_pointer;
            var test = target.ReadNullTerminatedStr();
            tests.Add(test);
         }
         File.WriteAllLines(Path.Combine(outputDirPath, "new 1.txt"), tests);
      }
   }
}
