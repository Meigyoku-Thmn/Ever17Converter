package nl.weeaboo.kid.ever17;

import java.nio.ByteBuffer;

import nl.weeaboo.kid.KIDUtil;
import nl.weeaboo.vnds.Log;

public final class Ever17Util {

   private Ever17Util() {
   }

   public static String readExpr(ByteBuffer buf) {
      int arg0 = buf.get() & 0xFF;
      if (arg0 == 0xC0) {
         int mode = arg0;
         int val = buf.get() & 0xFF;
         return String.format("VAR_%02x_%d", mode, val);
      } else if (arg0 >= 0xC1 && arg0 <= 0xCF) {
         int mode = arg0;
         int a = buf.getShort() & 0xFFFF;
         int b = buf.getShort() & 0xFFFF;
         return String.format("VAR_%02x_%d_%d", mode, a, b);
      } else if (arg0 >= 0xA0 && arg0 <= 0xAF) {
         int m = arg0;
         int a = buf.get() & 0xFF;
         int b = buf.get() & 0xFF;
         int nil = buf.get();
         if (nil != 0) {
            Log.v("I thought exprs ended with 0x00, but got: " + nil);
         }

         if (b == 0 && nil == 0) {
            return Integer.toString(256 * (m - 0xA0) + a);
         } else if (m == 0xA4) {
            return KIDUtil.getVarname(String.format("%02x", a));
         }
         return String.format("CONST_%02x_%02x_%02x", m, a, b);
      } else if (arg0 >= 0x80 && arg0 <= 0x8F) {
         int a = arg0 - 0x80; //Constant
         int b = buf.get() & 0xFF;

         if (b != 0) {
            Log.v(String.format("I don't really know what to do with 2-byte constants: %02x %02x", arg0, b));
         }

         int nil = buf.get();
         if (nil != 0) {
            Log.v("I thought exprs ended with 0x00, but got: " + nil);
         }

         return "" + a;
      } else if (arg0 == 0x28) {
         int arg1 = buf.get();
         if (arg1 != 0x0a) {
            Log.v("I thought 0x28 is always followed by 0x0a, but got: " + arg1);
         }
         return readExpr(buf);
      } else {
         Log.v("What kind of expr is this? " + arg0);
         return "" + arg0;
      }
   }

   public static boolean isGlobal(String varname) {
      if (varname.startsWith("v_")) {
         varname = varname.substring(2);
      } else {
         Log.w("Error in isGlobal, varnames should always start with \"v_\"");
      }

      int num = Integer.parseInt(varname, 16);
      return num > 0 && num <= 0x1F;
   }

}
