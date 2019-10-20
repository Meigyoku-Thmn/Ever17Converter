package nl.weeaboo.kid;

import java.io.UnsupportedEncodingException;
import java.nio.ByteBuffer;
import java.util.List;

public final class KIDUtil {

   private KIDUtil() {
   }

   //Functions
   public static String readCString(ByteBuffer buf, int pos) {
      int oldlimit = buf.limit();
      int oldpos = buf.position();
      try {
         buf.limit(buf.capacity());
         buf.position(pos);
         return readCString(buf);
      } finally {
         buf.position(oldpos);
         buf.limit(oldlimit);
      }
   }

   /**
    * Reads a null-terminated UTF-8 string
    *
    * @param buf
    * @return
    */
   public static String readCString(ByteBuffer buf) {
      byte[] temp = new byte[256];
      int tempIndex = 0;

      while (buf.hasRemaining()) {
         byte b = buf.get();
         if (b == '\0') {
            break;
         }

         //Resize array if needed
         if (tempIndex >= temp.length) {
            byte[] newTemp = new byte[temp.length * 2];
            System.arraycopy(temp, 0, newTemp, 0, tempIndex);
            temp = newTemp;
         }
         temp[tempIndex++] = b;
      }

      return makeString(temp, 0, tempIndex);
   }

   public static String makeString(byte[] bytes) {
      return makeString(bytes, 0, bytes.length);
   }

   public static String makeString(byte[] bytes, int off, int len) {
      try {
         return new String(bytes, off, len, "MS932");
      } catch (UnsupportedEncodingException e) {
         return new String(bytes, off, len);
      }
   }

   public static String getLabel(int addr) {
      return String.format("L%08x", addr);
   }

   public static String getVarname(String v) {
      return "v_" + v;
   }

   public static String generateJumpScript(List<String> labels, List<String> targets,
           String labelPrefix, String returnAction, int itemsPerPage) {
      StringBuilder sb = new StringBuilder();

      int numPages = (targets.size() + itemsPerPage - 1) / itemsPerPage;
      for (int p = 0; p < numPages; p++) {
         StringBuilder lsb = new StringBuilder("\nchoice ");
         StringBuilder branches = new StringBuilder();

         int nstart = itemsPerPage * p;
         int n = nstart;
         for (int x = 0; x < itemsPerPage && n < targets.size(); x++) {
            if (x > 0) {
               lsb.append('|');
            }
            lsb.append(labels.get(n));

            branches.append("\nif selected == " + (n - nstart + 1));
            branches.append("\n    " + targets.get(n));
            branches.append("\nfi");

            n++;
         }

         if (numPages > 1) {
            n++;
            lsb.append("|[next]");
            branches.append("\nif selected == " + (n - nstart));
            branches.append("\n    goto " + labelPrefix + "p" + ((p + 1) % numPages));
            branches.append("\nfi");
         }

         n++;
         lsb.append("|[exit]");
         branches.append("\nif selected == " + (n - nstart));
         branches.append("\n    " + returnAction);
         branches.append("\nfi");

         sb.append("\nlabel " + labelPrefix + "p" + p);
         sb.append(lsb);
         sb.append(branches);
      }
      sb.append("\n");

      return sb.toString();
   }

}
