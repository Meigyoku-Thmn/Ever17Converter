package nl.weeaboo.kid.ever17;

import static nl.weeaboo.string.StringUtil2.unescapeString;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Locale;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

import nl.weeaboo.common.StringUtil;
import nl.weeaboo.kid.Choice;
import nl.weeaboo.kid.KIDUtil;
import nl.weeaboo.kid.GraphicsState;
import nl.weeaboo.kid.MusicState;
import nl.weeaboo.kid.ever17.ScriptConverter.WorkItem;
import nl.weeaboo.vnds.FileExts;
import nl.weeaboo.vnds.Log;
import nl.weeaboo.vnds.ResourcesUsed;

public class CommandHandler {

   private enum Mode {
      TEXT, SWITCH
   };

   private final ScriptConverter scriptConverter;
   private final ResourcesUsed resUsed;
   private final FileExts fileExts;

   private Mode mode;
   private GraphicsState gstate;
   private MusicState mstate;
   private String switchVarname;
   private int choiceLabel;
   private final Set<String> unsupported;
   private final Map<String, GraphicsState> gotoGraphicsStates;
   private final Map<String, MusicState> gotoMusicStates;

   public CommandHandler(ScriptConverter sc, String fn,
           GraphicsState gs, MusicState ms, ResourcesUsed used,
           FileExts exts) {
      scriptConverter = sc;
      //filename = fn;
      gstate = gs;
      mstate = ms;
      resUsed = used;
      fileExts = exts;

      unsupported = new HashSet<>();
      gotoGraphicsStates = new HashMap<>();
      gotoMusicStates = new HashMap<>();
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
            case SWITCH:
               return processSwitch(line, scanner);
         }
      }

      if (!scanner.hasNext()) {
         return ""; //Empty line probably
      }

      String cmd = scanner.next();
      if (cmd.equals("goto")) {
         String target = KIDUtil.getLabel(Integer.parseInt(scanner.next(), 16));
         onGoto(target);
         return "goto " + target;
      }

      Opcode op = Opcode.get(cmd);

      if (op == null) {
         if (!cmd.equals("unsupported")) {
            if (unsupported.add(cmd)) {
               Log.v("Unsupported command: " + cmd);
            }
         }
         return "#" + line;
      }

      switch (op) {
         case jump: {
            String target = scanner.next().toLowerCase() + ".scr";
            String result = gflush("jump " + target);

            WorkItem wi = scriptConverter.getWorkItem(target, false);
            if (wi != null) {
               wi.setGraphicsState(gstate.copy());
               wi.setMusicState(mstate.copy());
            }

            return result;
         }
         case bgload: {
            int unknown1 = Integer.parseInt(scanner.next(), 16); //Same as unidentified int in fgload?
            String filename = scanner.next();
            String unknown2 = scanner.next();
            String unknown3 = scanner.next();
            gstate.clearSprites();
            gstate.setBackground(filename, -1);
            return "";
         }
         case specialEffectImage: {
            int unknown1 = scanner.nextInt();
            String filename = scanner.next();
            String unknown2 = scanner.next();
            String unknown3 = scanner.next();
            //First 4 args are the same as bgload
            int cropX = scanner.nextInt();
            int cropY = scanner.nextInt();
            int cropW = scanner.nextInt();
            int cropH = scanner.nextInt();
            gstate.setBackground(filename, -1);
            return "";

         }
         case tweenZoom: {
            //Ignore, this command will always be followed by a command representing the end state
            return "#" + line;
         }
         case removeBG: {
            int _mode = scanner.nextInt();
            gstate.clearSprites();
            if (_mode == 1) {
               gstate.setBackground("special/white", -1);
            } else {
               gstate.setBackground("special/black", -1);
            }
            return "";
         }
         case fgload: {
            int id = scanner.nextInt();
            int unknown1 = Integer.parseInt(scanner.next(), 16); //Maybe a tint-color?
            String filename = scanner.next();
            int dx = scanner.nextInt();
            int unknown2 = scanner.nextInt(); //Seems to usually be 3
            gstate.setSprite(id, dx, filename);
            return gstate.maybeFlush();
         }
         case multifgload2: {
            //multifgload2 1 2 00000000 MY19ADS 00000000 CO11ADS 176 464 3
            int id1 = scanner.nextInt();
            int id2 = scanner.nextInt();
            int a1 = Integer.parseInt(scanner.next(), 16); //Maybe a tint-color?
            String filename1 = scanner.next();
            int a2 = Integer.parseInt(scanner.next(), 16); //Maybe a tint-color?
            String filename2 = scanner.next();
            int dx1 = scanner.nextInt();
            int dx2 = scanner.nextInt();
            int unknown = scanner.nextInt();

            gstate.setSprite(id1, dx1, filename1);
            gstate.setSprite(id2, dx2, filename2);
            return gstate.maybeFlush();
         }
         case multifgload3: {
            //multifgload3 00000000 SA09ADS 00000000 SO02ADS 00000000 YU09BDS 128 512 320 3
            int a1 = Integer.parseInt(scanner.next(), 16); //Maybe a tint-color?
            String filename1 = scanner.next();
            int a2 = Integer.parseInt(scanner.next(), 16); //Maybe a tint-color?
            String filename2 = scanner.next();
            int a3 = Integer.parseInt(scanner.next(), 16); //Maybe a tint-color?
            String filename3 = scanner.next();
            int dx1 = scanner.nextInt();
            int dx2 = scanner.nextInt();
            int dx3 = scanner.nextInt();
            int unknown = scanner.nextInt();

            gstate.setSprite(1, dx1, filename1);
            gstate.setSprite(2, dx2, filename2);
            gstate.setSprite(4, dx3, filename3);
            return gstate.maybeFlush();
         }
         case removeFG: {
            int id = scanner.nextInt();
            int unknown = scanner.nextInt(); //Same as the last param of fgload
            gstate.removeSprite(id);
            return gstate.maybeFlush();
         }
         case multiremoveFG2: {
            gstate.clearSprites(); //Whatever, it'll remove all sprites 99% of the time anyway
            return gstate.maybeFlush();
         }
         case multiremoveFG3: {
            gstate.clearSprites(); //Whatever, it'll remove all sprites 99% of the time anyway
            return gstate.maybeFlush();
         }
         case overlayImage: {
            int a1 = Integer.parseInt(scanner.next(), 16); //Maybe a tint-color?
            String filename = gstate.toBackgroundFilename(scanner.next());
            resUsed.setBackgroundUsed(filename);
            return gflush(String.format("bgload %s", filename));
         }
         case text: {
            mode = Mode.TEXT;
            return "";
         }
         case _switch: {
            mode = Mode.SWITCH;
            switchVarname = "selected";
            return "";
         }
         case playBGM: {
            int num = scanner.nextInt();
            int volume = scanner.nextInt();
            mstate.start(0, String.format("bgm%02d", num));
            return "";
         }
         case stopBGM: {
            mstate.stop(0);
            return "";
         }
         case playSFX: {
            String filename = scanner.next();
            boolean looping = filename.endsWith("L");
            filename = toSoundFilename(filename);
            resUsed.setSoundUsed(filename);
            return "sound " + filename + (looping ? " -1" : "");
         }
         case stopSFX: {
            return "sound ~";
         }
         case waitForSFX: {
            return "delay 30";
         }
         case clock: {
            String timeString = scanner.next();
            return String.format("text <<TIME %s>>", timeString);
         }
         case delay: {
            int delay = (scanner.hasNextInt() ? scanner.nextInt() : 30);
            return "delay " + Math.max(1, Math.min(60, delay));
         }
         case varop: {
            scanner.skip("\\s*\\(.*?\\)");
            String varname = KIDUtil.getVarname(scanner.next());
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
               default:
                  break;
            }
            scanner.skip("\\s*\\(.*?\\)");

            String value = resolveVar(scanner.next());
            if (Ever17Util.isGlobal(varname)) {
               return "gsetvar " + varname + " " + operator + " " + value;
            } else {
               return "setvar " + varname + " " + operator + " " + value;
            }
         }
         case specialEffect: {
            int type = scanner.nextInt();
            int unknown = scanner.nextInt();
            if (type == 3) {
               return changePerspective();
            } else {
               return "#" + line;
            }
         }
         case gotoif: {
            //gotoif 1 (28 0a a4) dd == (01) 0 (0001) -> 00000848 (00000004)
            int unknown1 = scanner.nextInt();
            scanner.skip("\\s*\\(.*?\\)");
            String varname = KIDUtil.getVarname(scanner.next());
            String operator = scanner.next();
            scanner.skip("\\s*\\(.*?\\)");
            String value = resolveVar(scanner.next());
            scanner.skip("\\s*\\(.*?\\)");
            scanner.skip("\\s*->");
            String targetRaw = scanner.next();
            try {
               String target = KIDUtil.getLabel(Integer.parseInt(targetRaw, 16));

               onGoto(target);
               return String.format("if %s %s %s\n\tgoto %s\nfi\n",
                       varname, operator, value, target);
            } catch (NumberFormatException nfe) {
               return "#" + line;
            }
         }
         case chapterCutin: {
            int unknown1 = Integer.parseInt(scanner.next(), 16); //Same as unidentified int in bgload?
            String filename = scanner.next();

            StringBuilder sb = new StringBuilder();
            if (gstate.isDirty()) {
               sb.append(gstate.flush());
               sb.append("\n");
            }
            {
               GraphicsState gs = gstate.copy();
               gs.setBackground(filename, 60);
               sb.append(gs.flush());
               sb.append("\n");
               sb.append("delay 90\n");
            }
            sb.append(gstate.flush());
            sb.append("\n");
            return sb.toString();
         }

         case end:
         case hideTextbox:
         case showTextbox: {
            return "";
         }

         case scriptLocationId:
         case choiceId:
         case openAnim:
         case closeAnim:
         case setDialogBoxColor: {
            return "#" + line;
         }
         default:
            if (unsupported.add(cmd)) {
               Log.v("Unsupported command: " + cmd);
            }
            return "#" + line;
      }
   }

   protected String processText(String line, Scanner scanner) {
      line = line.trim();
      if (line.length() == 0) {
         mode = null;
         return "";
      }

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

   @SuppressWarnings("unused")
   protected String processTextCommand(String line) {
      Scanner scanner = createScanner(line);
      if (!scanner.hasNext()) {
         return ""; //Empty line probably
      }

      String cmd = scanner.next();
      StrOpcode op = StrOpcode.get(cmd);
      if (op != null) {
         switch (op) {
            case clearText: {
               return "";
            }
            case sound: {
               String filename = toSoundFilename(scanner.next());
               resUsed.setSoundUsed(filename);
               return "sound " + filename;
            }
            case waitForSound: {
               return ""; //Ignore
            }
            case textboxColor: {
               return "#" + line;
            }
            case unknownE: {
               return "#" + line;
            }
            case choice: {
               String arg0 = scanner.next();
               String arg1 = scanner.next();
               String rest = scanner.findInLine(".*").trim();
               if (!rest.startsWith("|")) {
                  Log.v("Choice options didn't start with a '|' character");
               } else {
                  rest = rest.substring(1);
               }

               Choice c = new Choice("CL" + (++choiceLabel));

               String[] opts = rest.split("\\|");
               for (String opt : opts) {
                  opt = opt.trim();

                  if (opt.startsWith("{cond")) {
                     int endIndex = opt.indexOf('}');
                     Scanner s2 = createScanner(opt.substring(5, endIndex));
                     s2.skip("\\s*\\(.*?\\)");
                     String varname = KIDUtil.getVarname(s2.next());
                     c.add(varname, opt.substring(endIndex + 1).trim());
                  } else {
                     c.add(opt);
                  }
               }

               return c.toString();
            }
            case appendText: {
               return ""; //return "#" + line;
            }
            case unknown11: {
               return "";
            }
            default:
               Log.v("Unsupported str-command: " + cmd);
               return "#" + line;
         }
      } else {
         Log.v("Unknown str-command: " + cmd);
      }
      return "#" + line;
   }

   protected String processSwitch(String line, Scanner scanner) {
      line = line.trim();
      if (line.length() == 0) {
         mode = null;
         switchVarname = null;
         return "";
      }

      String cmd = scanner.next();
      switch (cmd) {
         case "switch_varop":
            scanner.skip("\\s*\\(.*?\\)");
            switchVarname = KIDUtil.getVarname(scanner.next());
            return "";
         case "27":
            scanner.skip("\\s*->");
            int val = scanner.nextInt();
            String target = KIDUtil.getLabel(Integer.parseInt(scanner.next(), 16));

            onGoto(target);
            return String.format("if %s == %d\n\tgoto %s\nfi\n", switchVarname, val, target);
         default:
            Log.v("Unknown switch subcommand: " + cmd);
            break;
      }
      return "";
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

   private String resolveVar(String value) {
      try {
         return "" + Integer.parseInt(value);
      } catch (NumberFormatException nfe) {
         //Not an int
      }

      if (value.startsWith("\"")) {
         return unescape(value).trim();
      } else {
         return value;
      }
   }

   protected String changePerspective() {
      return gflush("text ***");
   }

   protected static String unescape(String str) {
      if (str.startsWith("\"") && str.endsWith("\"") && str.length() > 1) {
         str = str.substring(1, str.length() - 1);
      }
      return unescapeString(str);
   }

   protected String toSoundFilename(String filename) {
      return StringUtil.replaceExt(filename.toLowerCase(), fileExts.sound);
   }

   protected void onGoto(String label) {
      gotoGraphicsStates.put(label, gstate.copy());
      gotoMusicStates.put(label, mstate.copy());
   }

   protected void onLabel(String label) {
      GraphicsState gstored = gotoGraphicsStates.get(label);
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
