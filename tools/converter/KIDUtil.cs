using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace converter {
   internal static class KIDUtil {
      public static string ReadCString(BinaryReader buf, int pos) {
         long oldlimit = buf.BaseStream.Limit();
         long oldpos = buf.BaseStream.Position;
         try {
            buf.BaseStream.Limit(buf.BaseStream.Length);
            buf.BaseStream.Position = pos;
            return ReadCString(buf);
         }
         finally {
            buf.BaseStream.Position = oldpos;
            buf.BaseStream.Limit(oldlimit);
         }
      }
      public static string ReadCString(BinaryReader buf) {
         byte[] temp = new byte[256];
         int tempIndex = 0;

         while (buf.BaseStream.HasRemaining()) {
            byte b = buf.ReadByte();
            if (b == '\0') {
               break;
            }

            //Resize array if needed
            if (tempIndex >= temp.Length) {
               byte[] newTemp = new byte[temp.Length * 2];
               Array.Copy(temp, 0, newTemp, 0, tempIndex);
               temp = newTemp;
            }
            temp[tempIndex++] = b;
         }

         return MakeString(temp, 0, tempIndex);
      }
      public static string MakeString(byte[] bytes) {
         return MakeString(bytes, 0, bytes.Length);
      }
      public static string MakeString(byte[] bytes, int off, int len) {
         return Encoding.GetEncoding("shift_jis").GetString(bytes, off, len);
      }
      public static string GetVarname(string v) {
         return "v_" + v;
      }
   }
}
