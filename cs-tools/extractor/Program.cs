using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace extractor
{
    class Program
    {
        static readonly string[] defaultInputNames = new string[] {
         "bg.dat",       // hình nền dùng trong kịch bản
         "bgm.dat",      // nhạc nền
         "chara.dat",    // tachi-e nhân vật
         "saver.dat",    // screensaver
         "se.dat",       // hiệu ứng âm thanh
         "system.dat",   // sprite hệ thống
         "sysvoice.dat", // voice-clip dành cho ai muốn cài vào làm hiệu ứng âm thanh cho hệ điều hành
         "voice.dat",    // toàn bộ dialogue voice clip
         "wallpaper.dat" // hình nền để làm wallpaper, kích thước khung hình lớn nhưng đều là jpg
      };
        static void Main(string[] args)
        {
            string src = Path.GetFullPath(args[0]);
            string dst = Path.GetFullPath(args[1]);

            var srcAttr = File.GetAttributes(src);
            var inputNames = defaultInputNames;
            if ((srcAttr & FileAttributes.Directory) == 0)
            {
                inputNames = new string[] { Path.GetFileName(src) };
                src = Path.GetDirectoryName(src);
            }
            ExtractFolder(src, dst, inputNames);
        }
        static readonly bool use_ffmpeg = true;
        static readonly bool use_png_optimizer = true;
        public static void ExtractFolder(string srcDirName, string dstDirName, string[] inputNames)
        {
            var s1 = Stopwatch.StartNew();
            foreach (var inputName in inputNames)
            {
                Console.WriteLine($"Extract {inputName}");
                var inputFileStream = File.OpenRead(Path.Combine(srcDirName, inputName));
                var outputDirName = Path.Combine(dstDirName, Path.GetFileNameWithoutExtension(inputFileStream.Name));
                Directory.CreateDirectory(outputDirName);
                var records = inputFileStream.ReadRecords();
                inputFileStream.Close();
                Parallel.ForEach(
                   Partitioner.Create(records, EnumerablePartitionerOptions.NoBuffering),
                   new ParallelOptions { MaxDegreeOfParallelism = 1 },
                   (record) => {
                       Console.WriteLine(record.filename);
                       var outFileName = record.filename;
                       var ext = Path.GetExtension(outFileName);
                       var subInputFileStream = File.OpenRead(Path.Combine(srcDirName, inputName));
                       MemoryStream outputStream = subInputFileStream.ReadFile(record);
                       subInputFileStream.Close();
                       switch (ext)
                       {
                           case ".waf":
                           case ".WAF":
                               outFileName = Path.ChangeExtension(outFileName, ".wav");
                               outputStream = outputStream.ToWAV(outputStream.Length);
                               if (use_ffmpeg)
                               {
                                   outFileName = Path.ChangeExtension(outFileName, ".ogg");
                                   outputStream.ToOggFile(Path.Combine(outputDirName, outFileName));
                               }
                               break;
                           case ".cps":
                           case ".CPS":
                               outFileName = Path.ChangeExtension(outFileName, ".png");
                               outputStream = outputStream.ToPRT(outputStream.Length);
                               var outName = Path.Combine(outputDirName, outFileName);
                               outputStream.ToPNGFile(outName, outputStream.Length);
                               if (use_png_optimizer) Optimizer.CompressPNG(outName);
                               break;
                           default:
                               using (var outputFile = File.OpenWrite(Path.Combine(outputDirName, outFileName)))
                                   outputFile.Write(outputStream.GetBuffer(), 0, (int)outputStream.Length);
                               break;
                       }
                   }
                );
            }
            s1.Stop();
            Console.WriteLine("All completed in {0:c}", s1.Elapsed);
        }
    }
}
