using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace converter {
   class StringCommandReader {
      private BinaryReader input;
      private readonly StringBuilder output;
      private string NewLine = Environment.NewLine;
      public void SetNewLine(string newLine) {
         NewLine = newLine;
      }
      public StringCommandReader() {
         output = new StringBuilder();
      }
      public void SetInput(BinaryReader @in) {
         input = @in;
      }
      public string Parse(BinaryReader inp) {
         SetInput(inp);
         Parse();
         return output.ToString();
      }
      public void Parse() {
         output.Remove(0, output.Length);
         int c;
         while ((c = Peek()) != 0) {
            StrOpcode op = StrOpcode.Get(c);
            if (op == null) {
               var chr = ReadChar();
               output.Append(chr == "\n" ? NewLine : chr);
            } else {
               c = Read();
               if (op == StrOpcode.waitForClick) {
                  output.Append("{" + op + "}");
               } else if (op == StrOpcode.clearText) {
                  output.Append("{" + op + "}");
               } else if (op == StrOpcode.delay) {
                  output.Append("{" + $"{op} {ReadExpr()}" + "}");
               } else if (op == StrOpcode.appendText) {
                  ReadExpr();
                  output.Append("{" + op + "}");
               } else if (op == StrOpcode.sound) {
                  output.Append("{" + $"{op} {ReadCString()}" + "}");
               } else if (op == StrOpcode.waitForSound) {
                  output.Append("{" + op + "}");
               } else if (op == StrOpcode.choice) {
                  int arg0 = Read();
                  int arg1 = ReadShort();
                  output.Append("{" + $"{op} {arg0:x2} {arg1:x4} ");
                  while (Peek() != 0) {
                     string option = ParseChoiceOption();
                     output.Append('|');
                     output.Append(option);
                  }
                  Read(); //Read away the trailing 0
                  output.Append("}");
                  goto OUTER;
               } else if (op == StrOpcode.marker) {
                  output.Append("{" + $"{op}" + "}");
               } else if (op == StrOpcode.nextPage) {
                  int arg0 = Read();
                  output.Append("{" + $"{op} {arg0:x2}" + "}");
               } else if (op == StrOpcode.bigChar) {
                  output.Append("{" + $"{op}" + "}");
               }
            }
         }
      OUTER:;
      }
      protected string ParseChoiceOption() {
         int marker = Read();
         if (marker != 0x0B) {
            Log.Write("     [Unknown Text] Expected choice-option's marker to be: " + 0x0B + ", but got: " + marker);
         }

         int type = Read();

         StringBuilder temp = new StringBuilder();
         if (type == 1) {
            var c = ReadChar();
            while (c != "\n") {
               temp.Append(c);
               c = ReadChar();
            }
         } else if (type == 2) {
            int arg0 = Read();
            int arg1 = Read();
            int arg2 = Read();
            int varname = Read();
            int op = Read();
            int arg3 = Read();
            if (op != 0x14) {
               Log.Write("     [Unknown Text] Unknown operator in choice option cond: " + op);
            }
            temp.Append($"[cond ({arg0:x2} {arg1:x2} {arg2:x2}) {varname:x2} {op:x2} ({arg3:x2})]");
            var c = ReadChar();
            while (c != "\n") {
               temp.Append(c);
               c = ReadChar();
            }
         }
         return temp.ToString();
      }
      protected int Peek() {
         if (!input.BaseStream.HasRemaining()) {
            return 0;
         }
         int rs = input.ReadByte() & 0xFF;
         input.BaseStream.Position -= 1;
         return rs;
      }
      protected int Read() {
         return input.ReadByte() & 0xFF;
      }
      protected int ReadShort() {
         return input.ReadInt16() & 0xFFFF;
      }
      protected int ReadInt() {
         return input.ReadInt32();
      }
      private readonly byte[] readCharTemp = new byte[4];
      protected string ReadChar() {
         int c = Read();
         if (c == 0x01) {
            return "\n";
         }

         int numBytes = 1;
         // Ever17 JP Edition and Ever17 US Edition are all using SJIS encoding

         if ((c >= 0x80 && c <= 0xa0) || (c >= 0xe0 && c <= 0xef)) {
            numBytes = 2;
         }

         readCharTemp[0] = (byte)c;
         for (int n = 1; n < numBytes; n++) {
            readCharTemp[n] = (byte)Read();
         }

         var rs = ScriptConverter.CP1252.GetString(readCharTemp, 0, numBytes);
         switch (rs) {
            case "①": // Circled Number One
               rs = "{💧💧}";
               break;
            case "②": // Circled Number Two
               rs = "❤️";
               break;
            case "③": // Circled Number Three
               rs = "💢";
               break;
            case "④": // Circled Number Four
               rs = "💦";
               break;
            case "⑤": // Circled Number Five
               rs = "★";
               break;
            case "⑩": // Circled Number Ten
            case "‡I":
               rs = "ä";
               break;
            case "⑪": // Circled Number Eleven
            case "‡J":
               rs = "ö";
               break;
            case "⑫": // Circled Number Twelve
            case "‡K":
               rs = "ü";
               break;
            case "⑬": // Circled Number Thirteen
            case "‡L":
               rs = "—"; // long dash
               break;
            // fallback cases, the English version do this too
            case "\x0081D":
               rs = ".";
               break;
            case "\x0081@":
               rs = " ";
               break;
            case "\x0081I":
               rs = "!";
               break;
         }

         return rs;
      }
      private string ReadCString() {
         return KIDUtil.ReadCString(input);
      }

      private string ReadExpr() {
         return Ever17Util.ReadExpr(input);
      }

   }
}
