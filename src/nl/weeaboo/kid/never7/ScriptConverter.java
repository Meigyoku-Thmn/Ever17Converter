package nl.weeaboo.kid.never7;

import static nl.weeaboo.common.StringUtil.stripExtension;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.EmptyStackException;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import nl.weeaboo.common.Dim;
import nl.weeaboo.common.StringUtil;
import nl.weeaboo.io.FileUtil;
import nl.weeaboo.kid.ImageInsets;
import nl.weeaboo.kid.KIDUtil;
import nl.weeaboo.kid.MusicState;
import nl.weeaboo.settings.INIFile;
import nl.weeaboo.vnds.FileExts;
import nl.weeaboo.vnds.Log;
import nl.weeaboo.vnds.ResourcesUsed;

public class ScriptConverter extends WorkManager {

   private static final boolean deleteTempFiles = false;
   private static final boolean warnUnsupported = false;

   private static final Set<String> SKIP_SCRIPTS = new HashSet<String>(Arrays.asList(
           "staffroll.scr", "startup.scr", "startup_.scr", "sub.scr", "sub_.scr"
   ));

   protected final File srcF;
   protected final File dstF;
   protected final File scriptF;

   protected final Dim srcScreenSize;
   protected final Set<Integer> unsupportedCommands;
   protected final Set<Integer> unsupportedOps;
   protected final ResourcesUsed resUsed;

   private final ImageInsets imageInsets;
   private final Dim targetImageSize;
   private final FileExts fileExts;
   private final String encoding;
   private final StringCommandReader stringCommandReader;

   private ByteBuffer input;
   private int[] jumpTable;
   private int[] textTable;
   private int[] graphicsTable;

   private String pos;
   private List<String> _logicBuffer = new ArrayList<>();

   public ScriptConverter(File srcF, File dstF) {
      this.srcScreenSize = new Dim(800, 600);
      this.srcF = srcF;
      this.dstF = dstF;

      boolean isJapanese = !srcF.getName().equals("scr-en") && "scr-en".equals(srcF.getParent());
      if (isJapanese) {
         encoding = "SJIS";
      } else {
         encoding = "UTF-8";
      }
      stringCommandReader = new StringCommandReader(encoding, !isJapanese);

      FileExts exts;
      try {
         exts = FileExts.fromFile(new File(dstF, "exts.ini"));
      } catch (IOException e) {
         //Ignore
         exts = new FileExts();
      }
      fileExts = exts;

      scriptF = new File(dstF, "script");
      scriptF.mkdirs();

      unsupportedCommands = new HashSet<>();
      unsupportedOps = new HashSet<>();

      resUsed = new ResourcesUsed();
      resUsed.load(dstF, true);
      resUsed.setMusicUsed("track_21." + fileExts.music);

      Dim d = new Dim(256, 192);
      try {
         INIFile imgIni = new INIFile();
         imgIni.read(new File(dstF, "img.ini"));
         d = new Dim(imgIni.getInt("width", d.w), imgIni.getInt("height", d.h));
      } catch (IOException ioe) {
         Log.w("Error reading img.ini", ioe);
      }
      targetImageSize = d;

      imageInsets = new ImageInsets();
      try {
         imageInsets.load(new File(dstF, "imginsets.txt"), targetImageSize);
      } catch (IOException e) {
         Log.w("Exception loading imageInsets", e);
      }
   }

   //Functions	
   public static void main(String args[]) {
      System.setProperty("line.separator", "\n");

      final File scriptFile = new File(args[0]);
      final File dstFolder = new File(args[1]);

      ScriptConverter sc = new ScriptConverter(scriptFile, dstFolder);
      try {
         sc.convertFolder();
      } catch (IOException e) {
         Log.e("Error converting scripts", e);
      }
   }

   public void convertFolder() throws IOException {
      Set<String> primaryScripts = new HashSet<>(Arrays.asList(getPrimaryScripts()));

      Map<String, File> files = new TreeMap<>();
      FileUtil.collectFiles(files, srcF, false);
      files.entrySet().forEach((entry) -> {
         String relpath = entry.getKey();
         File file = entry.getValue();
         if (StringUtil.stripExtension(relpath).equals("main")) {
            //Log.v("Skipping a script that would overwrite main.scr: " + file);
            //continue;

            relpath = relpath.replaceAll("main", "main2");
         }
         relpath = relpath.toLowerCase();
         if (!(SKIP_SCRIPTS.contains(relpath))) {
            addWorkItem(new WorkItem(relpath, file, primaryScripts.contains(StringUtil.stripExtension(relpath))));
         }
      });

      WorkItem wi;
      while ((wi = peekNextWorkItem()) != null) {
         convertFile(wi);
      }

      { //Convert append scripts
         File appendF = new File(srcF.getParentFile(), "append-en");
         if (!appendF.exists()) {
            appendF = new File(srcF.getParentFile(), "append");
         }
         System.out.println(appendF);

         AppendScriptParser asp = new AppendScriptParser(appendF, dstF, srcScreenSize, resUsed, imageInsets, fileExts);
         asp.convertFolder();

         File appendIndexF = new File(scriptF, "main_append.scr");
         List<String> labels = new ArrayList<>();
         List<String> targets = new ArrayList<>();
         asp.getScriptHeaders().stream().map((header) -> {
            labels.add(header.title);
            return header;
         }).forEachOrdered((header) -> {
            targets.add("bgload special/black.jpg\n    music ~\n    jump " + header.vndsRelpath);
         });
         FileUtil.write(appendIndexF, KIDUtil.generateJumpScript(labels, targets, "", "jump main.scr", 8));
      }

      generateGlueScripts(scriptF);
      resUsed.save(dstF);

      try (PrintStream pout = new PrintStream(new File(dstF, "logic.txt"), "UTF-8")) {
         Collections.sort(_logicBuffer);
         _logicBuffer.forEach((line) -> {
            pout.println(line);
         });
      }
   }

   protected File convertFile(WorkItem wi) throws IOException {
      if (!removeWorkItem(wi)) {
         return null;
      }

      Log.v("Converting script: " + wi.getFile());

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

      CommandHandler commandHandler = new CommandHandler(this, wi.getRelpath(),
              gstate, mstate, resUsed, fileExts);

      unsupportedCommands.clear();
      unsupportedOps.clear();

      input = ByteBuffer.wrap(FileUtil.readBytes(wi.getFile()));
      input.order(ByteOrder.LITTLE_ENDIAN);

      int magic = input.getInt();
      if (magic != 0x00334353) {
         char[] str = new char[]{(char) (magic & 0xFF), (char) ((magic >> 8) & 0xFF), (char) ((magic >> 16) & 0xFF), (char) ((magic >> 24) & 0xFF)};
         throw new IOException("Invalid magic, expected: " + 0x00334353 + ", got " + magic + " (" + new String(str) + ") in file: " + wi.getFile().getName());
      }
      int textTableOffset = input.getInt();
      int graphicsTableOffset = input.getInt();
      int headerSize = input.getInt();

      jumpTable = new int[1 + (headerSize - 16) / 4];
      jumpTable[0] = headerSize;
      for (int t = 1; t < jumpTable.length; t++) {
         jumpTable[t] = input.getInt();
         //System.out.printf("%02x: %08x\n", t, jumpTable[t]);
      }

      input.position(textTableOffset);
      int textTableBytes = graphicsTableOffset - textTableOffset;
      textTable = new int[textTableBytes / 4];
      for (int t = 0; t < textTable.length; t++) {
         textTable[t] = input.getInt();
         //System.out.printf("%02x: %08x -- %s\n", t, textTable[t], readText(input, textTable[t]));			
      }

      input.position(graphicsTableOffset);
      int graphicsTableBytes = (textTable.length > 0 ? textTable[0] : input.limit()) - graphicsTableOffset;
      graphicsTable = new int[graphicsTableBytes / 4];
      for (int t = 0; t < graphicsTable.length; t++) {
         graphicsTable[t] = input.getInt();
         //System.out.printf("%02x: %08x", t, graphicsTable[t]);
         //System.out.printf(" -- %s\n", (graphicsTable[t] < input.limit() ? readText(input, graphicsTable[t]) : "***"));
      }

      //Read opcodes						
      File decF = new File(scriptF, stripExtension(wi.getRelpath()) + ".dec");
      input.position(jumpTable[0]);
      input.limit(Math.min(textTableOffset, graphicsTableOffset));
      try {
         decode(input, decF);
      } finally {
         input.rewind();
         input.limit(input.capacity());
      }

      //Compile
      File _dstF = new File(scriptF, stripExtension(wi.getRelpath()) + ".scr");
      assemble(commandHandler, decF, _dstF);

      if (deleteTempFiles) {
         decF.delete();
      }

      return _dstF;
   }

   protected final void assemble(CommandHandler ch, File srcF, File dstF)
           throws IOException {
      try (PrintWriter out = new PrintWriter(dstF, "UTF-8")) {
         Pattern decPattern = Pattern.compile("\\[(\\S*?)\\]\\s*(\\S*?):\\s*(.*)");

         try (BufferedReader in = new BufferedReader(new InputStreamReader(new FileInputStream(srcF), "UTF-8"))) {
            int lineNum = 0;

            String line;
            while ((line = in.readLine()) != null) {
               lineNum++;

               Matcher m = decPattern.matcher(line);
               if (!m.matches()) {
                  out.println(ch.process(line));
                  continue;
               }

               try {
                  int addr = Integer.parseInt(m.group(1), 16);
                  //int op = Integer.parseInt(m.group(2), 16);
                  line = m.group(3);

                  boolean isJumpTableTarget = false;
                  for (int target : jumpTable) {
                     if (addr == target) {
                        isJumpTableTarget = true;
                        break;
                     }
                  }
                  if (isJumpTableTarget) {
                     String label = KIDUtil.getLabel(addr);
                     out.printf("label %s\n", label);
                     ch.onLabel(label);
                  }

                  line = ch.process(line);
                  if (line.length() > 0) {
                     out.println(line);
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
         }

         out.println(getAppendCommands(StringUtil.stripExtension(srcF.getName())));
      }
   }

   protected void generateGlueScripts(File folder) {
      try {
         StringBuilder sb = new StringBuilder();
         sb.append("text <<Bad End>>\n");
         sb.append("jump $RETFILE $RETLABEL\n");
         FileUtil.write(new File(folder, "staffroll.scr"), sb.toString());
      } catch (IOException ioe) {
         Log.w("Error writing staffroll glue script");
      }
   }

   protected void decode(ByteBuffer in, File dstF) throws IOException {
      try (PrintWriter pout = new PrintWriter(dstF, "UTF-8")) {
         boolean commandMode = false;
         while (in.hasRemaining()) {
            pout.printf("[%08x] ", in.position());

            pos = dstF.getName() + ":" + Integer.toHexString(in.position());
            int opcode = in.get() & 0xFF;

            pout.printf("%2x: ", opcode);

            if (commandMode) {
               commandMode = false;

               CmdOpcode op = CmdOpcode.get(opcode);
               if (op == null) {
                  if (unsupportedCommands.add(opcode)) {
                     if (warnUnsupported) {
                        Log.v(String.format("Unsupported command: %02x (%d)", opcode, opcode));
                     }
                  }
                  pout.printf("unsupported command %d ", opcode);
               } else {
                  String result = null;
                  try {
                     result = decodeCommand(op);
                     if (result != null) {
                        pout.print(result);
                     }
                  } catch (RuntimeException re) {
                     Log.w("Exception while decoding command (" + op + ") " + dstF.getName() + ":" + in.position(), re);
                  }
               }
            } else {
               if (opcode == 0x10) {
                  commandMode = true;
               } else {
                  Opcode op = Opcode.get(opcode);
                  if (op == null) {
                     if (unsupportedOps.add(opcode)) {
                        if (warnUnsupported) {
                           Log.v(String.format("Unsupported op: %02x (%d)", opcode, opcode));
                        }
                     }
                     pout.printf("unsupported %d ", opcode);
                  } else {
                     String result = null;
                     try {
                        result = decodeOp(op);
                        if (result != null) {
                           pout.print(result);
                        }
                     } catch (RuntimeException re) {
                        Log.w("Exception while decoding opcode (" + op + ") " + pos, re);
                     }
                  }
               }
            }

            pout.println();
         }
      }
   }

   protected String decodeOp(Opcode op) throws IOException {
      switch (op) {
         case end: {
            return ""; //String.format("%s", op);
         }
         case unknown1: {
            String arg0 = readExpr();
            String arg1 = readExpr();
            int arg2 = read();
            int arg3 = read();
            return String.format("%s %s %s %02x %02x", op, arg0, arg1, arg2, arg3);
         }
         case delay: {
            String arg0 = readExpr();
            return String.format("%s %s", op, arg0);
         }
         case goto7: {
            int jumpIndex = readShort();

            int jumpTarget = Never7Util.DEFAULT_JUMP_TARGET;
            if (jumpIndex >= 0 && jumpIndex < jumpTable.length) {
               jumpTarget = jumpTable[jumpIndex];
            } else {
               Log.v("Invalid jump in " + op + ": " + jumpIndex);
            }

            return String.format("%s %08x (%04x)", op, jumpTarget, jumpIndex);
         }
         case condJump: {
            int arg0 = read();

            StringBuilder argsString = new StringBuilder();
            {
               while (true) {
                  int first = peek();
                  if (first == 0x28) {
                     argsString.append(Never7Util.readExpr(input)).append(' ');
                  } else {
                     Log.w(String.format("Strange kind of condJump, no 0x28 but instead: 0x%02x", first));
                     argsString.append(String.format("(%02x) ", read()));
                  }
                  argsString.append(String.format("(%02x) ", read()));
                  argsString.append(String.format("%s ", getComparisonOperator(read(), arg0 == 0)));

                  int type = read();
                  argsString.append(String.format("(%02x) ", type));

                  int v = peek();
                  if (v >= 0x80 && v <= 0x8f) {
                     v = read();
                     argsString.append(String.format("(%02x)->%d ", v, v - 0x80));
                  } else if (v >= 0xA0 && v <= 0xAF) {
                     v = read();
                     int v2 = read();
                     argsString.append(String.format("(%02x_%02x)->%d ", v, v, 256 * (v - 0xa0) + v2));
                  } else {
                     argsString.append("->" + Never7Util.readExpr(input) + " ");
                  }

                  argsString.append(String.format("(%02x) ", read()));

                  int cnt0 = read();
                  argsString.append(String.format("(%02x) ", cnt0));
                  if (cnt0 == 0x08 || cnt0 == 0x0a) {
                     int opr = read();

                     String oprString = String.format("CJ_%02x", opr);
                     switch (opr) {
                        case 0x05:
                           oprString = "||";
                           break;
                        case 0x18:
                           oprString = "&&";
                           break; //Maybe actually &?
                        case 0x19:
                           oprString = "&&";
                           break; //Maybe actually &?
                     }

                     argsString.append(oprString + " ");
                  } else {
                     if (cnt0 != 0x00) {
                        System.err.printf("***condJump %02x\n", cnt0);
                     }
                     break;
                  }
               }
            }

            int jumpIndex = readShort();

            int jumpTarget = Never7Util.DEFAULT_JUMP_TARGET;
            if (jumpIndex >= 0 && jumpIndex < jumpTable.length) {
               jumpTarget = jumpTable[jumpIndex];
            } else {
               Log.v("Invalid jump in " + op + ": " + jumpIndex);
            }

            return String.format("%s %02x %s * %08x (%04x)", op, arg0, argsString, jumpTarget, jumpIndex);
         }
         case unknownB: {
            int arg0 = readShort();
            return String.format("%s %04x", op, arg0);
         }
         case returnE: {
            return "return";
         }
         case unknown19: {
            String arg0 = readExpr();
            String arg1 = readExpr();
            return String.format("%s %s %s", op, arg0, arg1);
         }
         case unknown21: {
            return String.format("%s", op);
         }
         case unknown22: {
            int v1 = read();
            if (v1 >= 0xa0 && v1 <= 0xaf) {
               int v2 = read();
               v1 = 256 * (v1 - 0xa0) + v2;
            } else if (v1 >= 0x80 && v1 <= 0x8f) {
               v1 -= 0x80;
            }

            int arg1 = read();
            int arg2 = read();
            int arg3 = read();
            int arg4 = read();
            int arg5 = read();
            int arg6 = read();
            int arg7 = read();
            return String.format("%s %02x %02x %02x %02x %02x_%02x %02x %02x", op,
                    v1, arg1, arg2, arg3, arg4, arg5, arg5, arg6, arg7);
         }
         case varop: {
            String var = readExpr();
            int arg4 = read();
            String operator = getVaropOperator(read());
            int arg5 = read();
            String arg6 = readExpr();

            String result = String.format("%s %s (%02x) %s (%02x) %s",
                    op, var, arg4, operator, arg5, arg6);
            logLogic(result);
            return result;
         }
         case notice: {
            int index = readShort();
            String str = "***";
            if (index >= 0 && index < textTable.length) {
               str = readText(input, textTable[index]);
            } else {
               Log.v("Text table index is out of bounds: " + index);
            }
            return String.format("%s %02x\n%s\n", op, index, str);
         }
         case text: {
            int index = readShort();
            String str = "***";
            if (index >= 0 && index < textTable.length) {
               str = readText(input, textTable[index]);
            } else {
               Log.v("Text table index is out of bounds: " + index);
            }
            return String.format("%s %02x\n%s\n", op, index, str);
         }
         default:
            if (warnUnsupported) {
               Log.w(String.format("Unhandled op (%02x)", op.id));
            }
            return null;
      }
   }

   protected String decodeCommand(CmdOpcode op) throws IOException {
      switch (op) {
         case end: {
            return ""; //String.format("%s", op);
         }
         case cmd1: {
            String expr = readExpr();
            return String.format("%s %s", op, expr);
         }
         case jump: {
            String jumpAddress = readCString();
            return String.format("%s %s", op, jumpAddress);
         }
         case choice: {
            int arg0 = read();
            int arg1 = read();
            int arg2 = read();
            int arg3 = read();

            String varname = KIDUtil.getVarname(String.format("%02x_%02x", arg0, arg1));
            return String.format("%s %s %02x %02x", op, varname, arg2, arg3);
         }
         case createPanBG: { //Used in l1d1aa.scr when Yuka barges in
            int arg0 = readInt();
            int imageIndex = readShort();
            int arg1 = read() - 0x80;
            int arg2 = read();
            int arg3 = read();
            String num1 = readExpr();
            String num2 = readExpr();

            String filename = readText(input, graphicsTable[imageIndex]);
            return String.format("%s %08x %s %d %d %d %s %s", op, arg0, filename, arg1, arg2, arg3, num1, num2);
         }
         case movePanBG: {
            int arg1 = read() - 0x80;
            int arg2 = read();
            int arg3 = read();
            String num1 = readExpr();
            return String.format("%s %d %d %d %s", op, arg1, arg2, arg3, num1);
         }
         case bgload: {
            int arg0 = readInt();
            int imageIndex = readShort();
            String num1 = readExpr();
            String num2 = readExpr();

            String filename = readText(input, graphicsTable[imageIndex]);
            return String.format("%s %08x %s %s %s", op, arg0, filename, num1, num2);
         }
         case removeD: { //Fades BG to black and removes it? Does it remove sprites?
            String arg = readExpr();
            return String.format("%s %s", op, arg);
         }
         case removeBG: {
            String color = readExpr();
            String type = readExpr();
            String speed = readExpr();
            return String.format("%s %s %s %s", op, color, type, speed);
         }
         case fgload: {
            String id = readExpr();
            int unknown0 = readInt();
            int imageIndex = readShort();
            String slot = readExpr();
            String fade = readExpr();

            String filename = readText(input, graphicsTable[imageIndex]);
            return String.format("%s %s %08x %s %s %s", op, id, unknown0, filename, slot, fade);
         }
         case removeFG: {
            String id = readExpr();
            String fade = readExpr();
            return String.format("%s %s %s", op, id, fade);
         }
         case call5: {
            return String.format("%s %s %s", op, readExpr(), readCString());
         }
         case playBGM: {
            return String.format("%s %s", op, readExpr());
         }
         case stopBGM: {
            return String.format("%s", op);
         }
         case playSFX: {
            String filename = readCString();
            String arg0 = readExpr();
            return String.format("%s %s %s", op, filename, arg0);
         }
         case stopSFX: {
            return String.format("%s", op);
         }
         case waitForSFX: {
            return String.format("%s", op);
         }
         case playVoice: {
            String filename = readCString();
            return String.format("%s %s", op, filename);
         }
         case dayIntro: {
            int arg0 = readInt();
            int imageIndex = readShort();
            String filename = readText(input, graphicsTable[imageIndex]);
            return String.format("%s %08x %s", op, arg0, filename);
         }
         case moveFG: {
            String id = readExpr();
            String targetSlot = readExpr();
            return String.format("%s %s %s", op, id, targetSlot);
         }
         case multifgload2: {
            int unknown1 = readInt();
            int imgA = readShort();
            String posA = readExpr();

            int unknown2 = readInt();
            int imgB = readShort();
            String fade = readExpr();

            String filenameA = readText(input, graphicsTable[imgA]);
            String filenameB = readText(input, graphicsTable[imgB]);

            return String.format("%s %08x %s %s %08x %s %s", op, unknown1, filenameA, posA, unknown2, filenameB, fade);
         }
         case removeAllFG: {
            String arg0 = readExpr();
            return String.format("%s %s", op, arg0);
         }
         case showClock: {
            return String.format("%s", op);
         }
         case showTennisScore: {
            String arg0 = readExpr();
            String arg1 = readExpr();
            return String.format("%s %s %s", op, arg0, arg1);
         }
         case cmd19: {
            return "";
         }
         case movie: {
            String arg0 = readCString();
            return String.format("%s %s", op, arg0);
         }
         case cmd24: {
            String arg0 = readExpr();
            return String.format("%s %s", op, arg0);
         }
         case cmd2D: {
            int arg0 = read();
            int arg1 = read();
            int arg2 = read();
            int arg3 = read();
            int arg4 = read();
            int arg5 = read();
            int arg6 = read();
            int arg7 = read();
            int arg8 = read();
            return String.format("%s %02x %02x %02x %02x %02x %02x %02x %02x %02x", op,
                    arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
         }
         case cmd2E: {
            int arg0 = read();
            int arg1 = read();
            int arg2 = read();
            int arg3 = read();
            return String.format("%s %02x %02x %02x %02x", op, arg0, arg1, arg2, arg3);
         }
         case returnTitle: {
            int arg0 = read();
            int arg1 = read();
            int arg2 = read();
            int arg3 = read();
            return String.format("%s %02x %02x %02x %02x", op, arg0, arg1, arg2, arg3);
         }
         case cmd18:
         case cmd1C:
         case cmd23: {
            return String.format("%s", op);
         }
         case cmd2:
         case cmd1A: {
            return String.format("%s %s", op, readExpr());
         }
         default:
            Log.w(String.format("Unhandled command op (%02x)", op.id));
            return null;
      }
   }

   protected void logLogic(String line) {
      if (pos.startsWith("system")
              || pos.startsWith("startup")) {
         //Ignore
         return;
      }

      _logicBuffer.add(line + " <<" + pos + ">>");
   }

   protected int peek() {
      if (input.remaining() == 0) {
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

   protected String readCString() {
      return KIDUtil.readCString(input, encoding);
   }

   protected String readExpr() {
      return Never7Util.readExpr(input);
   }

   protected String readText(ByteBuffer buf, int offset) throws IOException {
      int oldlimit = buf.limit();
      int oldpos = buf.position();
      try {
         buf.limit(buf.capacity());
         buf.position(offset);
         return readText(buf);
      } finally {
         buf.position(oldpos);
         buf.limit(oldlimit);
      }
   }

   protected String readText(ByteBuffer buf) {
      return stringCommandReader.parse(buf);
   }

   protected String getVaropOperator(int c) {
      switch (c) {
         case 0x14:
            return ":=";
         case 0x15:
            return "*=";
         case 0x17:
            return "+=";
         case 0x18:
            return "-=";
         case 0x1c:
            return "|="; //Pulled this one straight from my ass
      }

      Log.w(String.format("Unknown varop operator: %02x", c));
      return String.format("_OP_%02x", c);
   }

   protected String getComparisonOperator(int c, boolean flip) {
      switch (c) {
         case 0x0c:
            return (flip ? "!=" : "==");
         case 0x0d:
            return (flip ? "==" : "!=");
         case 0x0e:
            return (flip ? "> " : "<=");
         case 0x0f:
            return (flip ? "< " : ">=");
         case 0x10:
            return (flip ? ">=" : "< ");
         case 0x11:
            return (flip ? "<=" : "> ");
      }

      return String.format("_COP_%02x", c);
   }

   protected void dumpOp(StringBuilder out, int opcode, Object... args) {
      out.append(String.format("%08x | ", opcode));
      for (int n = 0; n < args.length; n++) {
         if (n > 0) {
            out.append(", ");
         }

         if (args[n] instanceof Integer) {
            out.append(String.format("%08x", args[n]));
         } else {
            out.append(String.format("\"%s\"", String.valueOf(args[n])));
         }
      }
   }

   //Getters
   protected String[] getPrimaryScripts() {
      return new String[]{"main", "main2", "op", "startup_"};
   }

   /**
    * @param filename Filename without the extension
    * @return 
    */
   protected String getAppendCommands(String filename) {
      return "jump $RETFILE $RETLABEL";
   }

   //Setters
}
