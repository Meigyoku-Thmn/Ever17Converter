using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
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
         string src = Path.GetFullPath(args[0]);
         string dst = Path.GetFullPath(args[1]);

         var srcAttr = File.GetAttributes(src);
         var inputNames = defaultInputNames;
         if ((srcAttr & FileAttributes.Directory) == 0) {
            inputNames = new string[] { Path.GetFileName(src) };
            src = Path.GetDirectoryName(src);
         }
         ExtractFolder(src, dst, inputNames);
      }
      static readonly bool use_ffmpeg = true;
      public static void ExtractFolder(string srcDirName, string dstDirName, string[] inputNames) {
         var s1 = Stopwatch.StartNew();
         foreach (var inputName in inputNames) {
            Console.WriteLine($"Extract {inputName}");
            var inputFileStream = File.OpenRead(Path.Combine(srcDirName, inputName));
            var outputDirName = Path.Combine(dstDirName, Path.GetFileNameWithoutExtension(inputFileStream.Name));
            Directory.CreateDirectory(outputDirName);
            var records = inputFileStream.ReadRecords();
            inputFileStream.Close();
            Parallel.ForEach(Partitioner.Create(records, EnumerablePartitionerOptions.NoBuffering), new ParallelOptions() { MaxDegreeOfParallelism = Environment.ProcessorCount }, (record) => {
               Console.WriteLine(record.filename);
               var outFileName = record.filename;
               var ext = Path.GetExtension(outFileName);
               var subInputFileStream = File.OpenRead(Path.Combine(srcDirName, inputName));
               MemoryStream outputStream = subInputFileStream.ReadFile(record);
               subInputFileStream.Close();
               MemoryStream iniStream = null;
               string iniFileName = null;
               switch (ext) {
                  case ".waf":
                  case ".WAF":
                     outFileName = Path.GetFileNameWithoutExtension(outFileName) + ".wav";
                     outputStream = outputStream.ToWAV(outputStream.Length);
                     if (use_ffmpeg) {
                        outFileName = Path.GetFileNameWithoutExtension(outFileName) + ".ogg";
                        //outputStream = outputStream.ToOgg();
                        outputStream.ToOggFile(Path.Combine(outputDirName, outFileName));
                        outputStream = null;
                     }
                     break;
                  case ".cps":
                  case ".CPS":
                     outFileName = Path.GetFileNameWithoutExtension(outFileName) + ".png";
                     outputStream = outputStream.ToPRT(outputStream.Length);
                     (outputStream, iniStream) = outputStream.ToPNG(outputStream.Length);
                     if (iniStream != null) iniFileName = Path.GetFileNameWithoutExtension(outFileName) + ".ini";
                     break;
               }
               if (outputStream != null)
                  using (var outputFile = File.OpenWrite(Path.Combine(outputDirName, outFileName)))
                     outputFile.Write(outputStream.GetBuffer(), 0, (int)outputStream.Length);
               if (iniStream != null)
                  using (var outputFile = File.OpenWrite(Path.Combine(outputDirName, iniFileName)))
                     outputFile.Write(iniStream.GetBuffer(), 0, (int)iniStream.Length);
            });

         }
         s1.Stop();
         Console.WriteLine("All completed in {0:c}", s1.Elapsed);
      }
   }
}
