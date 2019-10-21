using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace converter {
   internal static class Log {
      static StreamWriter log;
      internal static void Open() {
         log = new StreamWriter("output.txt", false, Encoding.UTF8);
      }
      internal static void Close() {
         log?.Close();
      }
      internal static void Write(string str) {
         log?.WriteLine(str);
      }
   }
}
