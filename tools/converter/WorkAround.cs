using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace converter {
   internal class WorkAround {
      public static bool CanSuppressVaropError(int arg0) {
         return arg0 == 51;
      }
      public static string CollectASpecialGotoIfThatNotActuallyGotoIf(BinaryReader buf, long lastPos) {
         var bkOffset = buf.BaseStream.Position;
         var a1 = buf.ReadByte() & 0xFF;
         var a2 = buf.ReadByte() & 0xFF;
         var a3 = buf.ReadByte() & 0xFF;
         var a4 = buf.ReadByte() & 0xFF;
         if (!(a1 == 0x10 && a2 == 0x3a && a3 == 0x00 && a4 == 0x19)) {
            buf.BaseStream.Position = bkOffset;
            return null;
         }
         var a5 = Ever17Util.ReadExpr(buf, lastPos);
         var a6 = Ever17Util.ReadExpr(buf, lastPos);
         return "notActuallyGotoIfUnk";
      }
      public static bool Make(long offset, string fileName, BinaryReader buf, int[] jumpTable, StreamWriter outp) {
         var rs = true;
         buf.BaseStream.Position = offset;
         if (fileName == "s_2a.scr" && (offset == 0x00000199 || offset == 0x0000027c || offset == 0x000002d8)) {
            buf.BaseStream.Position = offset + 1;
            var numOfRandom = buf.ReadByte() & 0x7F;
            buf.BaseStream.Position = offset;
            for (var a = 0; a < 12; a++) {
               var dump = buf.ReadByte();
               if (a + 1 != 12) {
                  outp.Write("{x2} ", dump);
               }
               else {
                  outp.Write("{x2}", dump);
               }
            }
            outp.Write(": ");
            outp.WriteLine("random " + numOfRandom);
            for (var i = 0; i < numOfRandom; i++) {
               outp.Write("{8x}", buf.BaseStream.Position);
               for (var a = 0; a < 5; a++) {
                  var dump = buf.ReadByte();
                  outp.Write(" {2x}", dump);
               }
               outp.Write(": ");
               var jumpTableIndex = buf.ReadInt16();
               var jumpTarget = jumpTable[jumpTableIndex];
               outp.WriteLine("jumpIfRandomIs " + i + string.Format(" {0:8x} ({1:8x})", jumpTarget, jumpTableIndex));
            }
         }
         else {
            rs = false;
            buf.BaseStream.Position = offset + 1;
         }

         return rs;
      }
   }
}
