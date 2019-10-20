package nl.weeaboo.kid.ever17;

import java.nio.ByteBuffer;

import nl.weeaboo.kid.KIDUtil;
import nl.weeaboo.vnds.Log;

public final class Ever17Util {

   private Ever17Util() {
   }

   public static String readExpr(ByteBuffer buf) {
      return readExpr(buf, -1);
   }

   public static String readExpr(ByteBuffer buf, int lastPosition) {

      var _position = "";
      if (lastPosition > 0) {
         _position = String.format(" at %08x", lastPosition);
      }

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
            Log.v("  [Unknown] I thought exprs ended with 0x00, but got: " + nil + _position);
         }

         if (b == 0 && nil == 0) {
            return Integer.toString(256 * (m - 0xA0) + a);
         } else if (m == 0xA4) {
            return KIDUtil.getVarname(String.format("%02x", a));
         }
         return String.format("CONST_%02x_%02x_%02x", m, a, b);
      } else if (arg0 >= 0xB0 && arg0 <= 0xBF) {
         int m = arg0;
         int a = buf.get() & 0xFF;
         int b = buf.get() & 0xFF;
         int nil = buf.get();
         if (nil != 0) {
            Log.v("  [Unknown] I thought negative exprs ended with 0x00, but got: " + nil + _position);
         }

         if (b == 0 && nil == 0) {
            return Integer.toString(256 * (m - 0xBF) + (a - 0x100));
         } else if (m == 0xB4) {
            return KIDUtil.getVarname(String.format("%02x", a));
         }
         return String.format("CONST_%02x_%02x_%02x", m, a, b);
      } else if (arg0 >= 0x80 && arg0 <= 0x8F) {
         int a = arg0 - 0x80; //Constant
         int b = buf.get() & 0xFF;

         if (b != 0) {
            Log.v(String.format("  [Unknown] I don't really know what to do with 2-byte constants: %02x %02x%s", arg0, b, _position));
         }

         int nil = buf.get();
         if (nil != 0) {
            Log.v("  [Unknown] I thought exprs ended with 0x00, but got: " + nil + _position);
         }

         return "" + a;
      } else if (arg0 == 0x28) {
         int arg1 = buf.get() & 0xFF;
         if (arg1 != 0x0a) {
            Log.v("  [Unknown] I thought 0x28 is always followed by 0x0a, but got: " + arg1 + _position);
         }
         return readExpr(buf);
      } else if (arg0 == 0xe0) {
         int rColor = buf.get() & 0xFF;
         int gColor = buf.get() & 0xFF;
         int bColor = buf.get() & 0xFF;
         int null1 = buf.get();
         int null2 = buf.get();
         int null3 = buf.get();
         if (null1 != 0 || null2 != 0 || null3 != 0) {
            Log.v("  [Unknown] I thought 0xe0 color code is always ended by three 0x00, at " + _position);
         }
         return String.format("rgb(%s,%s,%s)", rColor, gColor, bColor);
      } else {
         if (!WorkArounder.canSuppressVaropError(arg0)) {
            Log.v("  [Unknown] What kind of expr is this? " + arg0 + _position);
         }
         return "" + arg0;
      }
   }

   public static boolean isGlobal(String varname) {
      if (varname.startsWith("v_")) {
         varname = varname.substring(2);
      } else {
         Log.w("  [Unknown] Error in isGlobal, varnames should always start with \"v_\"");
      }

      int num = Integer.parseInt(varname, 16);
      return num > 0 && num <= 0x1F;
   }

}
