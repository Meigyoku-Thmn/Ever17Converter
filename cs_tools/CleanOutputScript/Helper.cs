using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CleanOutputScript {
   static class Helper {
      public static string FormatEx(this string format, params object[] args) {
         return string.Format(format, args);
      }
   }
}
