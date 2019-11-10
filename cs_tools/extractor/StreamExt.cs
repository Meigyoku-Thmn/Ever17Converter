using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace extractor {
   static class StreamExt {
      public static bool HasLeft(this Stream @this) {
         return @this.Position < @this.Length;
      }
      public static void CopyPartTo(this Stream @this, Stream destination, int length) {
         if (length < 0) throw new ArgumentException("Length is negative!");
         byte[] array = new byte[81920];
         int count;
         while ((count = @this.Read(array, 0, Math.Min(array.Length, length))) != 0) {
            destination.Write(array, 0, count);
            length -= count;
         }
      }
   }
}
