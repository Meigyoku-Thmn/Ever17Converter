package nl.weeaboo.kid.ever17;

import java.io.PrintWriter;
import java.nio.ByteBuffer;

public class WorkArounder {

   public static Boolean make(int offset, String fileName, ByteBuffer buf, int[] jumpTable, PrintWriter out) {
      var rs = true;
      buf.position(offset);
      if (fileName.equals("s_2a.scr") && (offset == 0x00000199 || offset == 0x0000027c || offset == 0x000002d8)) {
         buf.position(offset + 1);
         var numOfRandom = buf.get() & 0x7F;
         buf.position(offset);
         for (var a = 0; a < 12; a++) {
            var dump = buf.get();
            if (a + 1 != 12) {
               out.printf("%02x ", dump);
            } else {
               out.printf("%02x", dump);
            }
         }
         out.print(": ");
         out.println("random " + numOfRandom);
         for (var i = 0; i < numOfRandom; i++) {
            out.printf("[%08x]", buf.position());
            for (var a = 0; a < 5; a++) {
               var dump = buf.get();
               out.printf(" %02x", dump);
            }
            out.print(": ");
            var jumpTableIndex = buf.getShort();
            var jumpTarget = jumpTable[jumpTableIndex];
            out.println("jumpIfRandomIs " + i + String.format(" %08x (%08x)", jumpTarget, jumpTableIndex));
         }
      } else {
         rs = false;
         buf.position(offset + 1);
      }

      return rs;
   }
}
