package nl.weeaboo.kid.ever17;

import java.io.UnsupportedEncodingException;
import java.nio.ByteBuffer;

import nl.weeaboo.kid.KIDUtil;
import nl.weeaboo.vnds.Log;

public class StringCommandReader {

   private ByteBuffer input;
   private final StringBuilder output;

   public StringCommandReader() {
      output = new StringBuilder();
   }

   //Functions
   public String parse(ByteBuffer in) throws UnsupportedEncodingException {
      setInput(in);
      parse();

      return output.toString();
   }

   public void parse() throws UnsupportedEncodingException {
      output.delete(0, output.length());

      int c;
      OUTER:
      while ((c = peek()) != 0) {
         StrOpcode op = StrOpcode.get(c);
         if (op == null) {
            output.append(readChar());
         } else {
            c = read();
            switch (op) {
               case waitForClick:
                  output.append(String.format("{%s}", op));
                  break;
               case clearText:
                  output.append(String.format("{%s}", op));
                  break;
               case delay:
                  output.append(String.format("{%s %s}", op, readExpr()));
                  break;
               case appendText:
                  output.append(String.format("{%s}", op, readExpr()));
                  break;
               case sound:
                  output.append(String.format("{%s %s}", op, readCString()));
                  break;
               case waitForSound:
                  output.append(String.format("{%s}", op));
                  break;
               case choice: {
                  int arg0 = read();
                  int arg1 = readShort();
                  output.append(String.format("{%s %02x %04x ", op, arg0, arg1));
                  while (peek() != 0) {
                     String option = parseChoiceOption();
                     output.append('|');
                     output.append(option);
                  }
                  read(); //Read away the trailing 0
                  output.append("}");
                  break OUTER;
               }
               //pout.printf("{%s}", op);
               case marker:
                  output.append(String.format("{%s}", op));
                  break;
               case nextPage: {
                  int arg0 = read();
                  output.append(String.format("{%s %02x}", op, arg0));
                  break;
               }
               case bigChar:
                  output.append(String.format("{%s}", op));
                  break;
               default:
                  break;
            }
         }
      }
   }

   protected String parseChoiceOption() throws UnsupportedEncodingException {
      int marker = read();
      if (marker != 0x0B) {
         Log.v("     [Unknown Text] Expected choice-option's marker to be: " + 0x0B + ", but got: " + marker);
      }

      int type = read();

      StringBuilder temp = new StringBuilder();
      if (type == 1) {
         var c = readChar();
         while (!c.equals("\n")) {
            temp.append(c);
            c = readChar();
         }
      } else if (type == 2) {
         int arg0 = read();
         int arg1 = read();
         int arg2 = read();
         int varname = read();
         int op = read();
         int arg3 = read();
         if (op != 0x14) {
            Log.v("     [Unknown Text] Unknown operator in choice option cond: " + op);
         }
         temp.append(String.format("{%s (%02x %02x %02x) %02x %02x (%02x)}",
                 "cond", arg0, arg1, arg2, varname, op, arg3));
         var c = readChar();
         while (!c.equals("\n")) {
            temp.append(c);
            c = readChar();
         }
      }
      return temp.toString();
   }

   //Getters
   protected int peek() {
      if (!input.hasRemaining()) {
         return 0;
      }
      return input.get(input.position()) & 0xFF;
   }

   protected int read() {
      return input.get() & 0xFF;
   }

   protected int readShort() {
      return input.getShort() & 0xFFFF;
   }

   protected int readInt() {
      return input.getInt() & 0xFFFFFFFF;
   }

   private final byte[] readCharTemp = new byte[4];

   protected String readChar() throws UnsupportedEncodingException {
      int c = read();
      if (c == 0x01) {
         return "\n";
      }

      int numBytes = 1;
      // Ever17 JP Edition and Ever1 US Edition are all using SJIS encoding
//      if (inputEncoding.equals("SJIS")) {
      if ((c >= 0x80 && c <= 0xa0) || (c >= 0xe0 && c <= 0xef)) {
         numBytes = 2;
      }

      readCharTemp[0] = (byte) c;
      for (int n = 1; n < numBytes; n++) {
         readCharTemp[n] = (byte) read();
      }

      var rs = new String(readCharTemp, 0, numBytes, "MS932");
      switch (rs) {
         case "⑩":
            rs = "ä";
            break;
         case "⑪":
            rs = "ö";
            break;
         case "⑫":
            rs = "ü";
            break;
         case "⑬":
            rs = "—"; // long dash
            break;
      }

      return rs;
   }

   private String readCString() {
      return KIDUtil.readCString(input);
   }

   private String readExpr() {
      return Ever17Util.readExpr(input);
   }

   //Setters
   public void setInput(ByteBuffer in) {
      input = in;
   }

}
