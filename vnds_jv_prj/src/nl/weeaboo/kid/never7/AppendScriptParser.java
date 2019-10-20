package nl.weeaboo.kid.never7;

import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.EmptyStackException;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.NoSuchElementException;
import java.util.Scanner;
import java.util.TreeMap;

import nl.weeaboo.common.Dim;
import nl.weeaboo.common.StringUtil;
import nl.weeaboo.io.FileUtil;
import nl.weeaboo.kid.ImageInsets;
import nl.weeaboo.kid.KIDUtil;
import nl.weeaboo.kid.MusicState;
import nl.weeaboo.vnds.FileExts;
import nl.weeaboo.vnds.Log;
import nl.weeaboo.vnds.ResourcesUsed;

public class AppendScriptParser extends WorkManager {

   protected final File srcF;
   protected final File dstF;
   protected final File scriptF;

   protected final Dim srcScreenSize;
   protected final ResourcesUsed resUsed;

   private final ImageInsets imageInsets;
   private final FileExts fileExts;
   private final String encoding;
   private final boolean spacesBetweenWords;

   private final List<ScriptHeader> scriptHeaders;
   private Map<String, Integer> variables;
   private Scanner scanner;

   private AppendScriptParser(File srcF, File dstF) {
      this(srcF, dstF, new Dim(800, 600), new ResourcesUsed(), new ImageInsets(), new FileExts());
   }

   public AppendScriptParser(File srcF, File dstF, Dim srcSize, ResourcesUsed re, ImageInsets ii, FileExts fe) {
      this.srcF = srcF;
      this.dstF = dstF;

      this.srcScreenSize = srcSize;
      this.resUsed = re;
      this.imageInsets = ii;
      this.fileExts = fe;

      boolean isJapanese = !srcF.getName().equals("scr-en") && "scr-en".equals(srcF.getParent());
      if (isJapanese) {
         encoding = "SJIS";
         spacesBetweenWords = false;
      } else {
         encoding = "UTF-8";
         spacesBetweenWords = true;
      }

      scriptF = new File(dstF, "script");
      scriptF.mkdirs();

      scriptHeaders = new ArrayList<>();
      variables = new HashMap<>();
   }

   //Functions
   public static void main(String[] args) {
      System.setProperty("line.separator", "\n");

      final File scriptFile = new File(args[0]);
      final File dstFolder = new File(args[1]);

      AppendScriptParser sp = new AppendScriptParser(scriptFile, dstFolder);
      try {
         sp.convertFolder();
      } catch (IOException e) {
         Log.e("Error converting scripts", e);
      }
   }

   public void convertFolder() throws IOException {
      Log.v("Converting append scripts");

      Map<String, File> files = new TreeMap<>();
      FileUtil.collectFiles(files, srcF, false, false, (String relpath, File file) -> file.isDirectory() || StringUtil.getExtension(relpath).equalsIgnoreCase("snr"));
      for (Entry<String, File> entry : files.entrySet()) {
         String relpath = entry.getKey();
         File file = entry.getValue();

         String[] lines = readLines(file, encoding);
         boolean isMainFile = (lines.length > 0 && lines[0].startsWith("SCRIP-400"));
         addWorkItem(new WorkItem(relpath, file, isMainFile));
      }

      WorkItem wi;
      while ((wi = peekNextWorkItem()) != null) {
         convertFile(wi);
      }
   }

   @SuppressWarnings("unused")
   public void convertFile(WorkItem wi) throws IOException {
      if (!removeWorkItem(wi)) {
         return;
      }

      Log.v("Converting append script: " + wi.getRelpath());

      List<String> lines = new LinkedList<>(Arrays.asList(readLines(wi.getFile(), encoding)));

      //Strip comments
      boolean inComment = false;
      for (ListIterator<String> litr = lines.listIterator(); litr.hasNext();) {
         String line = litr.next();
         if (inComment) {
            int index = line.indexOf("*/");
            if (index >= 0) {
               line = line.substring(index + 2);
               inComment = false;
            }
         }

         if (!inComment) {
            int index = line.indexOf("/*");
            if (index >= 0) {
               line = line.substring(0, index);
               inComment = true;
            }
         }

         if (!inComment) {
            //Fails when "//" is used inside a string (very unlikely)
            int index = line.indexOf("//");
            if (index >= 0) {
               line = line.substring(0, index);
            }
         }

         if (inComment) {
            litr.remove();
         } else {
            litr.set(line);
         }
      }

      File decF = new File(scriptF, StringUtil.replaceExt(toScriptFilename(wi.getRelpath(), wi.getFile().getName()), "dec"));
      decF.getParentFile().mkdirs();

      String vndsRelpath = toScriptFilename(wi.getRelpath(), wi.getFile().getName());

      PrintWriter pout = new PrintWriter(new OutputStreamWriter(new BufferedOutputStream(new FileOutputStream(decF)), "UTF-8"));
      try {
         if (!lines.isEmpty() && lines.get(0).trim().startsWith("SCRIP-400")) {
            variables.clear();

            //Read header
            String magic = lines.remove(0).trim();
            String icon = lines.remove(0).trim();
            String title = lines.remove(0).trim();
            String author = lines.remove(0).trim();
            String date = lines.remove(0).trim();
            String comment1 = lines.remove(0).trim();
            String comment2 = lines.remove(0).trim();
            String comment3 = lines.remove(0).trim();
            String comment4 = lines.remove(0).trim();

            scriptHeaders.add(new ScriptHeader(vndsRelpath, icon, title, author, date, comment1, comment2, comment3, comment4));
         }

         while (!lines.isEmpty()) {
            String line = lines.remove(0).trim();
            if (line.length() <= 0) {
               continue;
            }

            if (line.startsWith(":")) { //Label
               pout.println("@label " + makeLabel(line.substring(1)));
               continue;
            } else if (line.startsWith("@")) { //VNDS code
               pout.println(line);
               continue;
            }

            useScanner(line);

            try {
               String tkn = scanner.next();

               //Read constants registration
               if (tkn.equalsIgnoreCase("Reg")) {
                  //Skip until {
                  do {
                     if (line.contains("{")) {
                        break;
                     }
                     line = lines.remove(0).trim();
                  } while (!lines.isEmpty());

                  //Read entries until }
                  while (!lines.isEmpty()) {
                     line = lines.remove(0).trim();
                     if (line.equals("}")) {
                        break;
                     } else if (line.length() > 0) {
                        useScanner(line);

                        variables.put(readString(), 0);
                     }
                  }
                  continue;
               } else if (tkn.equalsIgnoreCase("Select")) {
                  String varname = makeVarname(readString());
                  List<String> choices = new ArrayList<>();

                  //Skip until {
                  do {
                     if (line.contains("{")) {
                        break;
                     }
                     line = lines.remove(0).trim();
                  } while (!lines.isEmpty());

                  //Read entries until }
                  while (!lines.isEmpty()) {
                     line = lines.remove(0).trim();
                     if (line.equals("}")) {
                        break;
                     } else if (line.length() > 0) {
                        if (line.startsWith("'")) {
                           line = line.substring(1);
                        }
                        choices.add(line);
                     }
                  }

                  StringBuilder sb = new StringBuilder("@choice ");
                  for (int n = 0; n < choices.size(); n++) {
                     if (n > 0) {
                        sb.append("|");
                     }
                     sb.append(choices.get(n));
                  }
                  sb.append("\n@setvar " + varname + " = selected");
                  pout.println(sb);
                  continue;
               } else if (tkn.equalsIgnoreCase("goto")) {
                  String lbl = readString();
                  pout.println("@goto " + makeLabel(lbl));
                  continue;
               } else if (tkn.equalsIgnoreCase("if")) {
                  int index = line.indexOf(",");

                  String cond = line.substring(0, index);
                  useScanner(cond);
                  scanner.skip("if\\s+");
                  String exprA = readIfExpr();
                  String op = scanner.findInLine("[!<>=]=?");
                  String exprB = readIfExpr();

                  StringBuilder sb = new StringBuilder();
                  sb.append("@if " + exprA + " " + op + " " + exprB);
                  sb.append("\n@    goto " + makeLabel(line.substring(index + 1).trim()));
                  sb.append("\n@fi");
                  pout.println(sb);

                  continue;
               }

               //Read commands
               if (variables.containsKey(tkn)) {
                  scanner.skip("\\s*=\\s*");
                  variables.put(tkn, readInt());
               } else {
                  Command cmd = Command.get(tkn);
                  if (cmd != null) {
                     pout.println(parseCommand(cmd, scanner));
                  } else if (line.startsWith("\\") || line.startsWith("'") || line.charAt(0) >= 0x80) {
                     StringBuilder sb = new StringBuilder();
                     do {
                        sb.append(line).append('\n');
                        line = lines.remove(0).trim();
                     } while (line.startsWith("\\") || line.startsWith("'") || line.length() == 0 || line.charAt(0) >= 0x80);
                     pout.println(parseText(sb.toString()));

                     lines.add(0, line);
                  } else {
                     Log.w("Unknown append cmd: " + tkn);
                  }
               }
            } catch (NoSuchElementException nse) {
               Log.v("Error parsing (" + wi.getRelpath() + ") line: \"" + line + "\"", nse);
            }
         }
      } finally {
         pout.close();
      }

      //Assemble
      Never7GraphicsState gstate;
      if (wi.getGraphicsState() != null) {
         gstate = wi.getGraphicsState();
      } else {
         Log.w("[[Resetting graphics state]]");
         gstate = new Never7GraphicsState(srcScreenSize, imageInsets, resUsed,
                 Arrays.asList(Never7Util.getOpaqueSprites()));
      }

      MusicState mstate;
      if (wi.getMusicState() != null) {
         mstate = wi.getMusicState();
      } else {
         Log.w("[[Resetting music state]]");
         mstate = new MusicState(resUsed, fileExts);
      }

      CommandHandler ch = new CommandHandler(this, wi.getRelpath(), gstate, mstate, resUsed, fileExts);

      File outF = new File(scriptF, vndsRelpath);
      outF.getParentFile().mkdirs();
      pout = new PrintWriter(new OutputStreamWriter(new BufferedOutputStream(new FileOutputStream(outF)), "UTF-8"));
      try {
         int lineNum = 0;
         for (String line : readLines(decF, "UTF-8")) {
            lineNum++;

            useScanner(line);
            if (scanner.hasNext()) {
               String cmd = scanner.next();
               switch (cmd) {
                  case "@label":
                     ch.onLabel(scanner.next());
                     break;
                  case "jump":
                     //Fix path for jump
                     String target = toScriptFilename(wi.getRelpath(), scanner.next());
                     line = "jump " + target + " " + scanner.findInLine(".*");
                     break;
                  case "@goto":
                     ch.onGoto(scanner.next());
                     break;
                  default:
                     break;
               }
            }

            try {
               line = ch.process(line);
               if (line.length() > 0) {
                  pout.println(line);
               }
            } catch (RuntimeException re) {
               String message = "*** Exception while reading decompiled script (" + srcF.getName() + ":" + lineNum + ") *** " + line;
               if (re instanceof EmptyStackException) {
                  Log.w(message);
               } else {
                  Log.w(message, re);
               }
            }
         }
      } finally {
         pout.close();
      }

      //decF.delete();
   }

   protected void useScanner(String line) {
      scanner = new Scanner(line);
      scanner.useLocale(StringUtil.LOCALE);
      scanner.useDelimiter("(\\s+|\\s*,\\s*)");
   }

   /**
    *
    * @param cmd
    * @param scanner
    * @return
    */
   @SuppressWarnings("unused")
   protected String parseCommand(Command cmd, Scanner scanner) {
      switch (cmd) {
         case DispBG: {
            //DispBG "____",type,speed,pos
            String filename = readString();
            int fade = readInt(0);
            int speed = readInt(2);
            int pos = readInt(0); //Non-zero pos translates to a different command.

            return String.format("%s %08x %s %d %d %d %d %d", CmdOpcode.bgload, 0, filename, pos, 4, 0, fade, speed);
         }
         case MoveBG: {
            int speed = readInt(2);
            int pos = readInt(0);

            return String.format("%s %d %d %d %d", CmdOpcode.movePanBG, pos, 4, 0, 16);
         }
         case ClrBG: {
            int type = readInt(0);
            int speed = readInt(2);
            int col = readInt(0);
            return String.format("%s %d %d %d", CmdOpcode.removeBG, col, type, speed);
         }
         case DispCHA: {
            int buf = readInt();
            String filename = readString();
            int timeOfDay = readInt(0);
            int pos = readInt(1);
            int fade = readInt(3);

            filename = toSpriteFilename(filename, timeOfDay);

            return String.format("%s %d %08x %s %d %d", CmdOpcode.fgload, buf, 0, filename, pos, fade);
         }
         case MoveCHA: {
            int buf = readInt();
            int pos = readInt(1);

            return String.format("%s %d %d", CmdOpcode.moveFG, buf, pos);
         }
         case ClrCHA: {
            int buf = readInt();
            int fade = readInt(3);

            return String.format("%s %d %d", CmdOpcode.removeFG, buf, fade);
         }
         case DispCHA2: {
            String filenameA = readString();
            String filenameB = readString();
            int timeOfDay = readInt(0);
            int pos = readInt(0);
            int fade = readInt(3);

            filenameA = toSpriteFilename(filenameA, timeOfDay);
            filenameB = toSpriteFilename(filenameB, timeOfDay);
            return String.format("%s %08x %s %d %08x %s %d", CmdOpcode.multifgload2, 0, filenameA, pos, 0, filenameB, fade);
         }
         case ClrCHA2: {
            //int buf = readInt(); //This param makes no sense, is the documentation wrong?
            int fade = readInt(3);
            return String.format("%s %d", CmdOpcode.removeAllFG, fade);
         }
         case PlayBGM: {
            int num = readInt();
            return String.format("%s %d", CmdOpcode.playBGM, num);
         }
         case StopBGM: {
            return String.format("%s", CmdOpcode.stopBGM);
         }
         case PlaySE: {
            int num = readInt();
            int loops = 1;
            return String.format("%s %d %d", CmdOpcode.playSFX, num, loops);
         }
         case StopSE: {
            return String.format("%s", CmdOpcode.stopSFX);
         }
         case PlayVoice: {
            String filename = readString();
            return String.format("%s %s", CmdOpcode.playVoice, filename);
         }
         case Effect: {
            int no = readInt();
            return ""; //dunno
         }
         case EffectOff: {
            int no = readInt(0);
            return ""; //dunno
         }
         case TextMode: {
            int mode = readInt(0);
            return "";
         }
         case Wait: {
            int frames = readInt();
            return String.format("%s %d", Opcode.delay, frames);
         }
         case TimeDisp: {
            int hour = readInt();
            int min = readInt();

            String hoursVar = KIDUtil.getVarname("a0_fc");
            String minsVar = KIDUtil.getVarname("a0_fd");
            return String.format("@setvar %s = %d\n@setvar %s = %d\n%s", hoursVar, hour, minsVar, min, CmdOpcode.showClock);
         }
         case Calender: {
            int bg = readInt();
            int mon = readInt();
            int day = readInt();

            String[] BACKGROUNDS = {
               "bgcal1", "bgcal2", "bgcal3", "bgcal4",
               "bgcal5yu", "bgcal5ha", "bgcal5sa", "bgcal5ku", "bgcal5iz",
               "bgcal6", "bgcal7"
            };

            String dayVar = KIDUtil.getVarname("a0_fb");
            int dayValue = day;

            return String.format("@setvar %s = %d\n%s %08x %s", dayVar, dayValue, CmdOpcode.dayIntro, 0, BACKGROUNDS[bg]);
         }
         case Load: {
            String filename = readString();
            return String.format("%s %s", CmdOpcode.jump, filename);
         }
         case End: {
            return String.format("%s", CmdOpcode.returnTitle);
         }
      }

      return "#" + cmd;
   }

   protected String parseText(String line) {
      /*
		 * \n
		 * \f
		 * \c0,0;
		 * \k
		 * \p
		 * \w0;
       */

      StringBuilder out = new StringBuilder("@text ");
      for (int n = 0; n < line.length(); n++) {
         char c = line.charAt(n);
         if (c == '\\' && n < line.length() - 1) {
            c = line.charAt(++n);
            switch (c) {
               case 'n':
                  out.append(' ');
                  break;
               case 'p':
                  out.append("\n@text ");
                  break;
               //Done
               case 'f':
               case 'k':
                  break;
               case 'c':
               case 'w':
                  //Skip
                  while (n < line.length() - 1) {
                     c = line.charAt(++n);
                     if (c == ';') {
                        break;
                     }
                  }
                  break;
               default:
                  break;
            }
         } else if (c == '\'' || c >= 0x80) {
            while (n < line.length() - 1) {
               c = line.charAt(++n);
               if (c == '\n') {
                  break;
               }
               out.append(c);
            }
         } else if (c == '\r' || c == '\n') {
            if (spacesBetweenWords) {
               out.append(' ');
            }
         }
      }

      //Remove empty text commands
      String outString = out.toString();
      outString = outString.replaceAll("(^@text|\\n@text)\\s*($|\\n)", "");
      return outString;
   }

   protected String[] readLines(File file, String encoding) throws IOException {
      List<String> result = new ArrayList<>();
      try (BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(file), encoding))) {
         String line;
         while ((line = reader.readLine()) != null) {
            result.add(line);
         }
      }
      return result.toArray(new String[result.size()]);
   }

   private String makeVarname(String s) {
      return "vap_" + s;
   }

   private String makeLabel(String lbl) {
      return "ap_" + lbl;
   }

   private String toSpriteFilename(String filename, int timeOfDay) {
      filename = StringUtil.stripExtension(filename);
      if (timeOfDay == 1) {
         filename += "na"; //not sure
      }
      if (timeOfDay == 2) {
         filename += "n";
      }
      return filename;
   }

   private String toScriptFilename(String relpath, String filename) {
      filename = StringUtil.stripExtension(relpath.substring(0, relpath.lastIndexOf('/') + 1) + filename);
      return "append/" + filename + ".scr";
   }

   //Getters
   private int readInt(int defval) {
      try {
         return readInt();
      } catch (NoSuchElementException nse) {
         return defval;
      }
   }

   private int readInt() {
      String val = scanner.next();
      try {
         return Integer.parseInt(val);
      } catch (NumberFormatException nfe) {
         //Ignore
      }

      Integer constI = variables.get(val); //Guess the probable value of the variable
      if (constI != null) {
         return constI;
      }

      throw new NoSuchElementException();
   }

   private String readString() {
      return Never7Util.unescape(scanner.next());
   }

   private String readIfExpr() {
      String str = scanner.next();

      //String literal
      if (str.startsWith("\"")) {
         return str;
      }

      //Integer literal
      try {
         return Integer.toString(Integer.parseInt(str));
      } catch (NumberFormatException nfe) {
         //Ignore
      }

      //Variable
      if (variables.containsKey(str)) {
         return str;
      }

      str = makeVarname(str);
      if (variables.containsKey(str)) {
         return str;
      }

      throw new NoSuchElementException();
   }

   @Override
   protected WorkItem getWorkItem(String relpath, boolean warn) {
      //rewrite back from VNDS file structure to original filenames if needed.
      if (relpath.startsWith("append/")) {
         relpath = relpath.substring(7);
      }
      relpath = StringUtil.replaceExt(relpath, "snr");
      return super.getWorkItem(relpath, warn);
   }

   public Collection<ScriptHeader> getScriptHeaders() {
      return Collections.unmodifiableCollection(scriptHeaders);
   }

   //Setters
   //Inner Classes
   private static enum Command {
      DispBG,
      MoveBG,
      ClrBG,
      DispCHA,
      MoveCHA,
      ClrCHA,
      DispCHA2,
      ClrCHA2,
      PlayBGM,
      StopBGM,
      PlaySE,
      StopSE,
      PlayVoice,
      Effect,
      EffectOff,
      TextMode,
      Wait,
      TimeDisp,
      Calender,
      Load,
      End,;

      private Command() {
      }

      //Fast lookup from String to Opcode
      private static Map<String, Command> nameLookup;

      public static Command get(String name) {
         if (nameLookup == null) {
            nameLookup = new HashMap<>();
            for (Command cmd : values()) {
               nameLookup.put(cmd.name().toLowerCase(), cmd);
            }
         }
         return nameLookup.get(name.toLowerCase());
      }

   }

   public static class ScriptHeader {

      public final String vndsRelpath;

      public final String icon;
      public final String title;
      public final String author;
      public final String date;
      public final String comment1;
      public final String comment2;
      public final String comment3;
      public final String comment4;

      public ScriptHeader(String vndsRelpath, String icon, String title, String author, String date,
              String comment1, String comment2, String comment3, String comment4) {
         this.vndsRelpath = vndsRelpath;
         this.icon = icon;
         this.title = title;
         this.author = author;
         this.date = date;
         this.comment1 = comment1;
         this.comment2 = comment2;
         this.comment3 = comment3;
         this.comment4 = comment4;
      }

   }

}
