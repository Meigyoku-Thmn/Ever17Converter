package nl.weeaboo.kid.never7;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

import nl.weeaboo.common.StringUtil;
import nl.weeaboo.kid.KIDUtil;
import nl.weeaboo.kid.MusicState;
import nl.weeaboo.vnds.FileExts;
import nl.weeaboo.vnds.Log;
import nl.weeaboo.vnds.ResourcesUsed;

public class CommandHandler {

   private enum Mode {
      TEXT
   };

   private static final boolean warnUnsupported = false;
   private static final String[] DAY_NAMES = {
      "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
   };

   private final WorkManager workManager;
   private final ResourcesUsed resUsed;
   private final FileExts fileExts;

   private final String filename;
   private Mode mode;
   private Never7GraphicsState gstate;
   private MusicState mstate;
   private final Set<String> unsupported;
   private final Map<String, Never7GraphicsState> gotoGraphicsStates;
   private final Map<String, MusicState> gotoMusicStates;
   private final List<String> choiceOpts;

   public CommandHandler(WorkManager wc, String fn,
           Never7GraphicsState gs, MusicState ms, ResourcesUsed used,
           FileExts exts) {
      workManager = wc;
      filename = fn;
      gstate = gs;
      mstate = ms;
      resUsed = used;
      fileExts = exts;

      unsupported = new HashSet<>();
      gotoGraphicsStates = new HashMap<>();
      gotoMusicStates = new HashMap<>();
      choiceOpts = new ArrayList<>();
   }

   //Functions
   private Scanner createScanner(String line) {
      Scanner scanner = new Scanner(line);
      scanner.useLocale(Locale.ROOT);
      scanner.useDelimiter("\\s+");
      return scanner;
   }

   @SuppressWarnings("unused")
   public String process(String line) {
      Scanner scanner = createScanner(line);

      if (mode != null) {
         switch (mode) {
            case TEXT:
               return processText(line, scanner);
         }
      }

      if (line.startsWith("@")) { //VNDS command
         return line.substring(1);
      }

      if (!scanner.hasNext()) {
         return ""; //Empty line probably
      }

      String cmd = scanner.next();
      if (cmd.equals("goto7")) {
         int targetI = Integer.parseInt(scanner.next(), 16);
         if (targetI == Never7Util.DEFAULT_JUMP_TARGET) {
            return "#" + line;
         }
         String target = KIDUtil.getLabel(targetI);
         onGoto(target);
         return "goto " + target;
      }

      CmdOpcode cmdOp = CmdOpcode.get(cmd);
      if (cmdOp != null) {
         switch (cmdOp) {
            case jump: {
               String target = StringUtil.replaceExt(scanner.next().toLowerCase(), "scr");
               String result = gflush("jump " + target);

               WorkItem wi = workManager.getWorkItem(target, false);
               if (wi != null) {
                  wi.setGraphicsState(gstate.copy());
                  wi.setMusicState(mstate.copy());
                  workManager.onWorkItemChanged(wi);
               }

               return result;
            }
            case bgload: {
               int unknown1 = Integer.parseInt(scanner.next(), 16); //Same as unidentified int in fgload?
               String _filename = scanner.next();
               String unknown2 = scanner.next();
               String unknown3 = scanner.next();
               gstate.clearSprites();
               gstate.setBackground(_filename, -1);
               return "";
            }
            case removeBG: {
               int color = scanner.nextInt();
               gstate.clearSprites();
               if (color == 1) {
                  gstate.setBackground("special/white", -1);
               } else {
                  gstate.setBackground("special/black", -1);
               }
               return "";
            }
            case removeD: {
               String result = gflush("");
               gstate.clear();
               return gflush(result);
            }
            case fgload: {
               int id = scanner.nextInt();
               int unknown1 = Integer.parseInt(scanner.next(), 16); //Maybe a tint-color?
               String _filename = scanner.next();
               int slot = scanner.nextInt();
               int fade = scanner.nextInt();
               gstate.setSprite(id, slot, _filename);
               return gstate.maybeFlush();
            }
            case multifgload2: {
               int unknownA1 = Integer.parseInt(scanner.next(), 16);
               String filenameA = scanner.next();
               int posA = scanner.nextInt();

               int unknownB1 = Integer.parseInt(scanner.next(), 16);
               String filenameB = scanner.next();
               int fade = scanner.nextInt();

               gstate.setSprite(0, (posA == 0 ? 0 : 2), filenameA);
               gstate.setSprite(1, (posA != 0 ? 0 : 2), filenameB);
               return gstate.maybeFlush();
            }
            case moveFG: {
               int id = scanner.nextInt();
               int targetSlot = scanner.nextInt();
               String result = gstate.maybeFlush();
               gstate.setSpriteSlot(id, targetSlot);
               return result;
            }
            case removeFG: {
               int id = scanner.nextInt();
               int fade = scanner.nextInt();
               gstate.removeSprite(id);
               return gstate.maybeFlush();
            }
            case removeAllFG: {
               gstate.clearSprites();
               return gstate.maybeFlush();
            }
            case createPanBG: {
               int unknown = Integer.parseInt(scanner.next(), 16);
               String _filename = scanner.next();
               int pos = scanner.nextInt();

               gstate.clearSprites();
               if (pos == 2 || pos == 3) {
                  gstate.setBackground(gstate.toPanBGFilenameBottom(_filename), -1);
               } else {
                  gstate.setBackground(gstate.toPanBGFilenameTop(_filename), -1);
               }
               return gstate.maybeFlush();
            }
            case movePanBG: {
               int targetPos = scanner.nextInt();
               int unknown1 = scanner.nextInt();
               int unknown2 = scanner.nextInt();
               int speed = scanner.nextInt();

               String _filename = gstate.getBackground().replaceAll("-(bottom|middle|top)\\.", ".");

               gstate.clearSprites();
               int fadeFrames = (speed > 0 ? Math.min(60, 600 / speed / 2) : -1);

               StringBuilder sb = new StringBuilder();
               sb.append(gflush(""));
               sb.append('\n');

               gstate.setBackground(gstate.toPanBGFilenameMiddle(_filename), fadeFrames);
               sb.append(gstate.maybeFlush());
               sb.append('\n');

               if (targetPos == 2 || targetPos == 3) {
                  gstate.setBackground(gstate.toPanBGFilenameBottom(_filename), fadeFrames);
               } else {
                  gstate.setBackground(gstate.toPanBGFilenameTop(_filename), fadeFrames);
               }
               sb.append(gstate.maybeFlush());
               sb.append('\n');

               return sb.toString();
            }
            case playBGM: {
               int num = scanner.nextInt();
               mstate.start(0, String.format("track_%02d", num));
               return mstate.flush();
            }
            case stopBGM: {
               mstate.stop(0);
               return mstate.flush();
            }
            case playSFX: {
               String _filename = scanner.next();
               int loops = (scanner.hasNextInt() ? scanner.nextInt() : 1);
               _filename = toSoundFilename(_filename);
               resUsed.setSoundUsed(_filename);
               return "sound " + _filename;
            }
            case stopSFX: {
               return "sound ~";
            }
            case waitForSFX: {
               return "delay 30";
            }
            case playVoice: {
               String _filename = toSoundFilename(scanner.next());
               resUsed.setSoundUsed(_filename);
               return "sound " + _filename;
            }
            case choice: {
               String varname = resolveVarName(scanner.next());

               StringBuilder sb = new StringBuilder("choice ");
               int t = 0;
               for (String opt : choiceOpts) {
                  if (t > 0) {
                     sb.append('|');
                  }
                  sb.append(opt);
                  t++;
               }
               sb.append("\nsetvar ").append(varname).append(" = selected");
               sb.append("\nsetvar ").append(varname).append(" - 1");
               return sb.toString();
            }
            case call5: {
               int unknown = scanner.nextInt();
               String target = StringUtil.replaceExt(scanner.next().toLowerCase(), "scr");
               String result = gflush(Never7Util.makeCall(filename, target));

               WorkItem wi = workManager.getWorkItem(target, false);
               if (wi != null) {
                  wi.setGraphicsState(gstate.copy());
                  wi.setMusicState(mstate.copy());
               }

               return result;
            }
            case showClock: {
               String hours = KIDUtil.getVarname("a0_fc");
               String mins = KIDUtil.getVarname("a0_fd");
               String a = String.format("if %s <= 9\n    text <<TIME {$%s}:0{$%s}>>\nfi", mins, hours, mins);
               String b = String.format("if %s > 9 \n    text <<TIME {$%s}:{$%s}>> \nfi", mins, hours, mins);
               return a + "\n" + b;
            }
            case showTennisScore: {
               int a = scanner.nextInt();
               int b = scanner.nextInt();
               return String.format("text <<SCORE %02d-%02d>>", a, b);
            }
            case dayIntro: {
               int unknown1 = Integer.parseInt(scanner.next(), 16);
               String _filename = scanner.next();

               String dayVar = KIDUtil.getVarname("a0_fb");

               StringBuilder sb = new StringBuilder();
               sb.append(gflush(""));

               gstate.clearSprites();
               gstate.setBackground(_filename, -1);
               sb.append('\n');
               sb.append(gstate.maybeFlush());

               for (int day = 1; day <= 7; day++) {
                  sb.append("\nif " + dayVar + " == " + day);
                  sb.append("\n    text " + day + " April " + DAY_NAMES[(day - 1) % 7]);
                  sb.append("\nfi");
               }

               return sb.toString();
            }
            case movie: {
               return "#" + line;
            }
            case returnTitle: {
               return gflush("jump main.scr");
            }
            default:
            //Do nothing
         }
      }

      Opcode op = Opcode.get(cmd);
      if (op != null) {
         switch (op) {
            case varop: {
               String varname = resolveVarName(scanner.next());

               scanner.skip("\\s*\\(.*?\\)");

               String operator = scanner.next();
               switch (operator) {
                  case ":=":
                     operator = "=";
                     break;
                  case "+=":
                     operator = "+";
                     break;
                  case "-=":
                     operator = "-";
                     break;
                  case "*=":
                     operator = "*";
                     break;
                  case "|=":
                     operator = "+"; //Should work in 99% of cases
                     break;
                  default:
                     break;
               }

               scanner.skip("\\s*\\(.*?\\)");

               StringBuilder sb = new StringBuilder();

               String value = resolveVar(scanner.next());
               if (operator.equals("*")) {
                  int ivalue = -1;
                  try {
                     ivalue = Integer.parseInt(value);
                  } catch (NumberFormatException nfe) {
                     //Ignore
                  }

                  if (ivalue >= 1 && ivalue <= 9) {
                     sb.append("\n#" + varname + " *= " + ivalue);
                     sb.append("\nsetvar _multemp = " + varname);
                     for (int n = 1; n < ivalue; n++) {
                        sb.append("\nsetvar _multemp + " + varname);
                     }
                     operator = "=";
                     value = "_multemp";
                  } else {
                     Log.v("Unemulatable multiplication in varop: " + value);
                  }
               }

               String prefix = (Never7Util.isGlobal(varname) ? "gsetvar" : "setvar");
               if (operator.startsWith("_")) {
                  prefix = "#" + prefix;
               }
               sb.append("\n" + prefix + " " + varname + " " + operator + " " + value);
               return sb.toString();
            }
            case condJump: {
               String unknown0 = scanner.next();

               ArrayDeque<String> parts = new ArrayDeque<>();
               do {
                  String varname = resolveVarName(scanner.next());
                  if (varname.equals("2d")) {
                     return "#" + line;
                  }

                  String unknown1 = scanner.next();
                  String operator = scanner.next();
                  scanner.skip("([^-]*->)?");
                  String value = resolveVar(scanner.next());
                  String unknown2 = scanner.next();
                  String cont = scanner.next();

                  parts.add(varname + " " + operator + " " + value);

                  if (!cont.equals("(08)")) {
                     break;
                  }

                  String next = scanner.next(); //&&, ||
                  parts.add(next);
               } while (true);

               scanner.skip("([^*]*\\*)?");
               int next = Integer.parseInt(scanner.next(), 16);
               if (next == Never7Util.DEFAULT_JUMP_TARGET) {
                  return "#" + line;
               }
               String target = KIDUtil.getLabel(next);
               onGoto(target);

               StringBuilder sb = new StringBuilder();
               sb.append("\nsetvar _cond = 0");
               sb.append("\nif " + parts.remove());
               sb.append("\n    setvar _cond = 1");
               sb.append("\nfi");
               while (!parts.isEmpty()) {
                  String a = "_cond != 0";
                  String operator = parts.remove();
                  String b = parts.remove();

                  switch (operator) {
                     case "||":
                        sb.append(or(a, b));
                        sb.append("\nsetvar _cond = _reg");
                        break;
                     case "&&":
                        sb.append(and(a, b));
                        sb.append("\nsetvar _cond = _reg");
                        break;
                     default:
                        Log.w("Unknown condJump joining operator: " + operator);
                        break;
                  }
               }

               sb.append("\nif _cond != 0");
               sb.append("\n    goto " + target);
               sb.append("\nfi");
               return sb.toString();
            }
            case delay: {
               int delay = (scanner.hasNextInt() ? scanner.nextInt() : 30);
               return "delay " + Math.max(1, Math.min(60, delay));
            }
            case notice: {
               mode = Mode.TEXT;
               return "";
            }
            case text: {
               mode = Mode.TEXT;
               return "";
            }
            default:
            //Do nothing
         }
      }

      if (!cmd.equals("unsupported")) {
         if (unsupported.add(cmd)) {
            if (warnUnsupported) {
               Log.v("Unsupported command: " + cmd);
            }
         }
      }
      return "#" + line;
   }

   protected static String or(String a, String b) {
      StringBuilder sb = new StringBuilder();
      sb.append("\nsetvar _reg = 0");
      sb.append("\nif " + a);
      sb.append("\n    setvar _reg = 1");
      sb.append("\nfi");
      sb.append("\nif " + b);
      sb.append("\n    setvar _reg = 1");
      sb.append("\nfi");
      return sb.toString();
   }

   protected static String and(String a, String b) {
      StringBuilder sb = new StringBuilder();
      sb.append("\nsetvar _reg = 0");
      sb.append("\nif " + a);
      sb.append("\n    if " + b);
      sb.append("\n        setvar _reg = 1");
      sb.append("\n    fi");
      sb.append("\nfi");
      return sb.toString();
   }

   protected String processText(String line, Scanner scanner) {
      line = line.trim();
      if (line.length() == 0) {
         mode = null;
         return "";
      }

      choiceOpts.clear();

      StringBuilder commands = new StringBuilder();
      StringBuilder clean = new StringBuilder();

      int lastIndex = 0;
      int index = 0;
      while ((index = line.indexOf('{', index)) >= 0) {
         if (index > lastIndex) {
            clean.append(line.substring(lastIndex, index));
         }

         index++;

         int start = index;
         int depth = 1;
         while (index < line.length() && depth > 0) {
            if (line.charAt(index) == '{') {
               depth++;
            } else if (line.charAt(index) == '}') {
               depth--;
               if (depth <= 0) {
                  break;
               }
            }
            index++;
         }

         String cmd = processTextCommand(line.substring(start, Math.min(line.length(), index)));
         if (cmd != null && cmd.length() > 0) {
            commands.append(cmd);
            commands.append('\n');
         }

         index++;
         lastIndex = index;
      }

      if (lastIndex < line.length()) {
         clean.append(line.substring(lastIndex, line.length()));
      }

      String string = clean.toString().trim();
      if (string.length() > 0) {
         commands.append("text ");
         commands.append(string);
         commands.append('\n');
      }

      return gflush(commands.toString());
   }

   protected String processTextCommand(String line) {
      Scanner scanner = createScanner(line);
      if (!scanner.hasNext()) {
         return ""; //Empty line probably
      }

      String cmd = scanner.next();
      StrOpcode op = StrOpcode.get(cmd);
      if (op != null) {
         switch (op) {
            case choiceOpt: {
               scanner.skip(".*?->");
               String text = scanner.findInLine(".*").trim();
               choiceOpts.add(text);
            }
            case delay:
            case textColor: {
               return "";
            }
            default:
               if (warnUnsupported) {
                  Log.v("Unsupported str-command: " + cmd);
               }
               return "#" + line;
         }
      } else {
         if (warnUnsupported) {
            Log.v("Unknown str-command: " + cmd);
         }
      }
      return "#" + line;
   }

   protected String gflush(String command) {
      StringBuilder sb = new StringBuilder();
      if (mstate.isDirty()) {
         sb.append(mstate.flush());
         sb.append('\n');
      }
      if (gstate.isDirty()) {
         sb.append(gstate.flush());
         sb.append('\n');
      }
      sb.append(command);
      return sb.toString();
   }

   private String resolveVarName(String value) {
      if (value.startsWith("VAR_")) {
         //System.err.println("*** " + value);
         value = value.replaceAll("VAR_(\\(.*?\\)_)*", "");
         //System.err.println("+++ " + value);
         return KIDUtil.getVarname(value);
      }
      return value;
   }

   private String resolveVar(String value) {
      try {
         return "" + Integer.parseInt(value);
      } catch (NumberFormatException nfe) {
         //Not an int
      }

      if (value.startsWith("\"")) {
         return Never7Util.unescape(value).trim();
      } else if (value.startsWith("VAR_")) {
         return resolveVarName(value);
      } else {
         return value;
      }
   }

   protected String changePerspective() {
      return gflush("text ***");
   }

   protected String toSoundFilename(String filename) {
      return StringUtil.replaceExt(filename.toLowerCase(), fileExts.sound);
   }

   protected void onGoto(String label) {
      if (!gotoGraphicsStates.containsKey(label)) {
         gotoGraphicsStates.put(label, gstate.copy());
      } else {
         //Maybe give a warning if current gstate differs from stored one
      }
      if (!gotoMusicStates.containsKey(label)) {
         gotoMusicStates.put(label, mstate.copy());
      } else {
         //Maybe give a warning if current mstate differs from stored one
      }
   }

   protected void onLabel(String label) {
      Never7GraphicsState gstored = gotoGraphicsStates.get(label);
      if (gstored != null) {
         gstate = gstored;
      }
      MusicState mstored = gotoMusicStates.get(label);
      if (mstored != null) {
         mstate = mstored;
      }
   }

   //Getters
   //Setters
}
