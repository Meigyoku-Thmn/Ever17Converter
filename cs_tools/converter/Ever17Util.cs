using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace converter {
   internal static class Ever17Util {
      public static string ReadExpr(BinaryReader buf, long lastPosition = -1) {
         var _position = "";
         if (lastPosition > 0) {
            _position = string.Format(" at {0:x8}", lastPosition);
         }
         int arg0 = buf.ReadByte() & 0xFF;
         if (arg0 == 0xC0) {
            int mode = arg0;
            int val = buf.ReadByte() & 0xFF;
            return string.Format("VAR_{0:x2}_{1}", mode, val);
         }
         else if (arg0 >= 0xC1 && arg0 <= 0xCF) {
            int mode = arg0;
            int a = buf.ReadInt16() & 0xFFFF;
            int b = buf.ReadInt16() & 0xFFFF;
            return string.Format("VAR_{0:x2}_{1}_{2}", mode, a, b);
         }
         else if (arg0 >= 0xA0 && arg0 <= 0xAF) {
            int m = arg0;
            int a = buf.ReadByte() & 0xFF;
            int b = buf.ReadByte() & 0xFF;
            int nil = buf.ReadByte();
            if (nil != 0) {
               Log.Write("  [Unknown] I thought exprs ended with 0x00, but got: " + nil + _position);
            }

            if (b == 0 && nil == 0) {
               return (256 * (m - 0xA0) + a).ToString();
            }
            else if (m == 0xA4) {
               return KIDUtil.GetVarname(string.Format("{0:x2}", a));
            }
            return string.Format("CONST_{0:x2}_{1:x2}_{2:x2}", m, a, b);
         }
         else if (arg0 >= 0xB0 && arg0 <= 0xBF) {
            int m = arg0;
            int a = buf.ReadByte() & 0xFF;
            int b = buf.ReadByte() & 0xFF;
            int nil = buf.ReadByte();
            if (nil != 0) {
               Log.Write("  [Unknown] I thought negative exprs ended with 0x00, but got: " + nil + _position);
            }

            if (b == 0 && nil == 0) {
               return (256 * (m - 0xBF) + (a - 0x100)).ToString();
            }
            else if (m == 0xB4) {
               return KIDUtil.GetVarname(string.Format("{0:x2}", a));
            }
            return string.Format("CONST_{0:x2}_{1:x2}_{2:x2}", m, a, b);
         }
         else if (arg0 >= 0x80 && arg0 <= 0x8F) {
            int a = arg0 - 0x80; //Constant
            int b = buf.ReadByte() & 0xFF;

            if (b != 0) {
               Log.Write(string.Format(
                  "  [Unknown] I don't really know what to do with 2-byte constants: {0:x2} {1:x2}{2}",
                  arg0, b, _position));
            }

            int nil = buf.ReadByte();
            if (nil != 0) {
               Log.Write("  [Unknown] I thought exprs ended with 0x00, but got: " + nil + _position);
            }

            return "" + a;
         }
         else if (arg0 == 0x28) {
            int arg1 = buf.ReadByte() & 0xFF;
            if (arg1 != 0x0a) {
               Log.Write("  [Unknown] I thought 0x28 is always followed by 0x0a, but got: " + arg1 + _position);
            }
            return ReadExpr(buf);
         }
         else if (arg0 == 0xe0) {
            int rColor = buf.ReadByte() & 0xFF;
            int gColor = buf.ReadByte() & 0xFF;
            int bColor = buf.ReadByte() & 0xFF;
            int null1 = buf.ReadByte();
            int null2 = buf.ReadByte();
            int null3 = buf.ReadByte();
            if (null1 != 0 || null2 != 0 || null3 != 0) {
               Log.Write("  [Unknown] I thought 0xe0 color code is always ended by three 0x00, at " + _position);
            }
            return string.Format($"rgb({rColor},{gColor},{bColor})");
         }
         else {
            if (!WorkAround.CanSuppressVaropError(arg0)) {
               Log.Write("  [Unknown] What kind of expr is this? " + arg0 + _position);
            }
            return "" + arg0;
         }
      }
   }
}
