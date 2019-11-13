using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace extractor {
   static class FFMpeg {
      // ffmpeg -y -i bgm06.wav -c:a libvorbis -q:a 5.0 bgm06.ogg
      // ffmpeg -y -i bgm06.wav -c:a libopus -compression_level 5 bgm06.opus
      static readonly string CvPath = @"C:/ffmpeg/bin/ffmpeg.exe";
      public static void ToOggFile(this MemoryStream inp, string outName) {
         var proc = new Process {
            StartInfo = {
               FileName = CvPath,
               Arguments = $"-hide_banner -loglevel error -y -i - -c:a libvorbis -q:a 5.0 -f ogg \"{outName}\"",
               UseShellExecute = false,
               RedirectStandardInput = true,
               RedirectStandardOutput = false,
               RedirectStandardError = true,
            }
         };
         proc.Start();
         try {
            Task.Run(() => {
               proc.StandardInput.BaseStream.Write(inp.GetBuffer(), 0, (int)inp.Length);
               proc.StandardInput.Close();
            }).Wait();
         }
         catch (Exception e) when (e.InnerException is IOException) {
         }
         proc.WaitForExit();
         var error = proc.StandardError.ReadToEnd();
         if (proc.ExitCode != 0) throw new Exception($"ffmpeg has exited with code {proc.ExitCode}\r\n{error}");
      }
      public static MemoryStream ToOgg(this MemoryStream inp) {
         var proc = new Process {
            StartInfo = {
               FileName = CvPath,
               Arguments = "-hide_banner -loglevel error -y -i - -c:a libvorbis -q:a 5.0 -f ogg -",
               UseShellExecute = false,
               RedirectStandardInput = true,
               RedirectStandardOutput = true,
               RedirectStandardError = true,
            }
         };
         proc.Start();
         var inputTask = Task.Run(() => {
            proc.StandardInput.BaseStream.Write(inp.GetBuffer(), 0, (int)inp.Length);
            proc.StandardInput.Close();
         });
         var outStream = new MemoryStream((int)inp.Length);
         var outputTask = Task.Run(() => {
            proc.StandardOutput.BaseStream.CopyTo(outStream);
         });
         try {
            Task.WaitAll(inputTask, outputTask);
         }
         catch (Exception e) when (e.InnerException is IOException) {
         }
         proc.WaitForExit();
         var error = proc.StandardError.ReadToEnd();
         if (proc.ExitCode != 0) throw new Exception($"ffmpeg has exited with code {proc.ExitCode}\r\n{error}");
         return outStream;
      }
   }
}
