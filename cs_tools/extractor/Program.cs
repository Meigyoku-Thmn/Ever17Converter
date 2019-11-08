using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace extractor {
   class Program {
      static readonly string[] defaultInputNames = new string[] {
         "bg.dat",
         "bgm.dat",
         "chara.dat",
         "saver.dat",
         "se.dat",
         "system.dat",
         "sysvoice.dat",
         "voice.dat",
         "wallpaper.dat"
      };
      static void Main(string[] args) {
         string src = args[0];
         string dst = args[1];

         var srcAttr = File.GetAttributes(src);
         var inputNames = defaultInputNames;
         if ((srcAttr & FileAttributes.Directory) == 0) {
            inputNames = new string[] { Path.GetFileName(src) };
            src = Path.GetDirectoryName(src);
         }
         ExtractFolder(new DirectoryInfo(src), new DirectoryInfo(dst), inputNames);
      }

      public static void ExtractFolder(DirectoryInfo srcF, DirectoryInfo dstF, string[] inputNames) {
         foreach (var inputName in inputNames) {
            using (var file = new FileInfo(Path.Combine(srcF.FullName, inputName)).OpenRead()) {
               var outputDir = new DirectoryInfo(Path.Combine(dstF.FullName, Path.GetFileNameWithoutExtension(file.Name)));
               outputDir.Create();
               var records = LNK.ReadRecords(file);
               foreach (var record in records) {
                  var outputStream = LNK.ReadFile(file, record);
                  using (var outputFile = new FileInfo(Path.Combine(outputDir.FullName, record.filename)).OpenWrite())
                     outputFile.Write(outputStream.GetBuffer(), 0, (int)outputStream.Length);
               }
            }
         }
      }
   }
}
