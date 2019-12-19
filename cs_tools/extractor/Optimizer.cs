using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace extractor {
   class Optimizer {
      static readonly string CvPath = @"/pingo/pingo.exe";
      static public void CompressPNG(string inName, string outName = null) {
         if (outName == null) outName = inName;
         else {
            Directory.CreateDirectory(Path.GetDirectoryName(outName));
            File.Copy(inName, outName);
         }
         var proc = new Process {
            StartInfo = {
               FileName = CvPath,
               Arguments = $"-s2 {outName}",
               UseShellExecute = false,
               RedirectStandardError = true,
               CreateNoWindow = true
            }
         };
         proc.Start();
         proc.WaitForExit();
         var error = proc.StandardError.ReadToEnd();
         if (proc.ExitCode != 0) throw new Exception($"pingo has exited with code {proc.ExitCode}\r\n{error}");
      }
   }
}
