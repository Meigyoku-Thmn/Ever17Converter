using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.IO.MemoryMappedFiles;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace extractor {
   class Benchmark {
      static void Main(string[] args) {
         Case_1();
         Case_2();
         Case_3();
         Case_4();
      }
      static void Case_1() {
         Console.WriteLine(nameof(Case_1) + " MMF Stream to MMF Stream");
         var inputPath = @"C:\Home\Program File\Infinity Series\Ever17\wallpaper.dat";
         var outputPath = @"C:\Users\MeigyokuThmn\Desktop\wallpaper.dat";
         var inputSize = new FileInfo(inputPath).Length;
         Stopwatch s1 = Stopwatch.StartNew();

         using (var mmf = MemoryMappedFile.CreateFromFile(inputPath, FileMode.Open, null, 0, MemoryMappedFileAccess.Read))
         using (var mmfStream = mmf.CreateViewStream(0, 0, MemoryMappedFileAccess.Read))
         using (var mmfOut = MemoryMappedFile.CreateFromFile(outputPath, FileMode.Create, null, inputSize, MemoryMappedFileAccess.ReadWrite))
         using (var mmfStreamOut = mmfOut.CreateViewStream(0, 0, MemoryMappedFileAccess.Write)) {
            Console.WriteLine("  Start");
            mmfStream.CopyTo(mmfStreamOut);
            Console.WriteLine("  Done");
         }

         s1.Stop();
         Console.WriteLine(s1.ElapsedTicks);
         new FileInfo(outputPath).Delete();
      }
      static void Case_2() {
         Console.WriteLine(nameof(Case_2) + " MMF Stream to Stream");
         var inputPath = @"C:\Home\Program File\Infinity Series\Ever17\wallpaper.dat";
         var outputPath = @"C:\Users\MeigyokuThmn\Desktop\wallpaper.dat";
         var inputSize = new FileInfo(inputPath).Length;
         Stopwatch s1 = Stopwatch.StartNew();

         using (var mmf = MemoryMappedFile.CreateFromFile(inputPath, FileMode.Open, null, 0, MemoryMappedFileAccess.Read))
         using (var mmfStream = mmf.CreateViewStream(0, 0, MemoryMappedFileAccess.Read))
         using (var streamOut = new FileStream(outputPath, FileMode.Create, FileAccess.Write)) {
            Console.WriteLine("  Start");
            mmfStream.CopyTo(streamOut);
            Console.WriteLine("  Done");
         }

         s1.Stop();
         Console.WriteLine(s1.ElapsedTicks);
         new FileInfo(outputPath).Delete();
      }
      static void Case_3() {
         Console.WriteLine(nameof(Case_3) + " Stream to MMF Stream");
         var inputPath = @"C:\Home\Program File\Infinity Series\Ever17\wallpaper.dat";
         var outputPath = @"C:\Users\MeigyokuThmn\Desktop\wallpaper.dat";
         var inputSize = new FileInfo(inputPath).Length;
         Stopwatch s1 = Stopwatch.StartNew();

         using (var streamIn = new FileStream(inputPath, FileMode.Open, FileAccess.Read))
         using (var mmfOut = MemoryMappedFile.CreateFromFile(outputPath, FileMode.Create, null, inputSize, MemoryMappedFileAccess.ReadWrite))
         using (var mmfStreamOut = mmfOut.CreateViewStream(0, 0, MemoryMappedFileAccess.Write)) {
            Console.WriteLine("  Start");
            streamIn.CopyTo(mmfStreamOut);
            Console.WriteLine("  Done");
         }

         s1.Stop();
         Console.WriteLine(s1.ElapsedTicks);
         new FileInfo(outputPath).Delete();
      }
      static void Case_4() {
         Console.WriteLine(nameof(Case_4) + " Stream to Stream");
         var inputPath = @"C:\Home\Program File\Infinity Series\Ever17\wallpaper.dat";
         var outputPath = @"C:\Users\MeigyokuThmn\Desktop\wallpaper.dat";
         var inputSize = new FileInfo(inputPath).Length;
         Stopwatch s1 = Stopwatch.StartNew();

         using (var streamIn = new FileStream(inputPath, FileMode.Open, FileAccess.Read))
         using (var streamOut = new FileStream(outputPath, FileMode.Create, FileAccess.Write)) {
            Console.WriteLine("  Start");
            streamIn.CopyTo(streamOut);
            Console.WriteLine("  Done");
         }

         s1.Stop();
         Console.WriteLine(s1.ElapsedTicks);
         new FileInfo(outputPath).Delete();
      }
   }
}
