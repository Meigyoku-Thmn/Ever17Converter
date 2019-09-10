package nl.weeaboo.kid.ever17;

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
import java.util.PriorityQueue;
import java.util.Set;
import java.util.TreeMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import nl.weeaboo.common.Dim;
import nl.weeaboo.common.StringUtil;
import nl.weeaboo.io.FileUtil;
import nl.weeaboo.kid.GraphicsState;
import nl.weeaboo.kid.ImageInsets;
import nl.weeaboo.kid.KIDUtil;
import nl.weeaboo.kid.MusicState;
import nl.weeaboo.settings.INIFile;
import nl.weeaboo.vnds.FileExts;
import nl.weeaboo.vnds.Log;
import nl.weeaboo.vnds.ResourcesUsed;

public class ScriptConverter {

   private static final boolean deleteTempFiles = false;

   protected final File srcF;
   protected final File dstF;
   protected final File scriptF;

   protected final Dim srcScreenSize;
   protected final Set<Integer> unsupportedOpCodes;
   protected final ResourcesUsed resUsed;

   private final String encoding;
   private final ImageInsets imageInsets;
   private final PriorityQueue<WorkItem> workQueue;
   private final Dim targetImageSize;
   private final FileExts fileExts;
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

      boolean isJapanese = false;

      encoding = "SJIS";
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

      unsupportedOpCodes = new HashSet<>();

      resUsed = new ResourcesUsed();
      resUsed.load(dstF, true);
      resUsed.setBackgroundUsed("title1.jpg");
      resUsed.setMusicUsed("bgm21." + fileExts.music);

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

      workQueue = new PriorityQueue<>();
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
         if (!(relpath.equals("startup.scr") || relpath.equals("system.scr"))) {
            workQueue.add(new WorkItem(relpath, file, primaryScripts.contains(relpath)));
         }
      });

      while (!workQueue.isEmpty()) {
         convertFile(workQueue.peek());
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
      if (!workQueue.remove(wi)) {
         return null;
      }

      Log.v("Converting script: " + wi.getFile());

      GraphicsState gstate;
      if (wi.getGraphicsState() != null) {
         gstate = wi.getGraphicsState();
      } else {
         Log.w("[[Resetting graphics state]]");
         gstate = new GraphicsState(srcScreenSize, imageInsets, resUsed,
                 Arrays.asList(getOpaqueSprites()));
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

      unsupportedOpCodes.clear();

      input = ByteBuffer.wrap(FileUtil.readBytes(wi.getFile()));
      input.order(ByteOrder.LITTLE_ENDIAN);

      int magic = input.getInt();
      if (magic != 0x00334353) {
         char[] str = new char[]{(char) (magic & 0xFF), (char) ((magic >> 8) & 0xFF), (char) ((magic >> 16) & 0xFF), (char) ((magic >> 24) & 0xFF)};
         throw new IOException("Invalid magic, expected: " + 0x00334353 + ", got " + magic + " (" + new String(str) + ") in file: " + wi.file.getName());
      }
      int textTableOffset = input.getInt();
      int graphicsTableOffset = input.getInt();
      int headerSize = input.getInt();

      jumpTable = new int[(headerSize - 12) / 4];
      jumpTable[0] = headerSize;
      for (int t = 1; t < jumpTable.length; t++) {
         jumpTable[t] = input.getInt();
         //System.out.printf("%d: %08x\n", t, jumpTable[t]);
      }

      input.position(textTableOffset);
      int textTableBytes = graphicsTableOffset - textTableOffset;
      textTable = new int[textTableBytes / 4];
      for (int t = 0; t < textTable.length; t++) {
         textTable[t] = input.getInt();
         //System.out.printf("%08x\n", textTable[t]);
      }

      input.position(graphicsTableOffset);
      int graphicsTableBytes = input.limit() - graphicsTableOffset;
      graphicsTable = new int[graphicsTableBytes / 4];
      for (int t = 0; t < graphicsTable.length; t++) {
         graphicsTable[t] = input.getInt();
         //System.out.printf("%08x\n", graphicsTable[t]);
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

         try (BufferedReader in = new BufferedReader(new InputStreamReader(
                 new FileInputStream(srcF), "UTF-8"))) {
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

         out.println("jump endinfinity.scr"); //Shit-went-wrong panic jump
      }
   }

   protected void generateGlueScripts(File folder) {
      try {
         File endingSelectF = new File(folder, "y_ed.scr");
         endingSelectF.renameTo(new File(endingSelectF.getParent(), "y_ed.bak.scr"));

         FileUtil.write(endingSelectF, "\njump endselect.scr\n");
      } catch (IOException ioe) {
         Log.e("Error writing glue scripts", ioe);
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

               Opcode op = Opcode.get(opcode);
               if (op == null) {
                  if (unsupportedOpCodes.add(opcode)) {
                     Log.v(String.format("Unsupported opcode: %02x (%d)", opcode, opcode));
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
                     Log.w("Exception while decoding opcode (" + op + ") " + dstF.getName() + ":" + in.position(), re);
                  }
               }
            } else {
               if (opcode == 0x10) {
                  commandMode = true;
               } else {
                  Opcode op = Opcode.get(opcode);
                  if (op == Opcode.end
                          || op == Opcode.waitForSFX
                          || op == Opcode.gotoif
                          || op == Opcode._switch
                          || op == Opcode.varop
                          || op == Opcode.text) {
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
            return String.format("%s", op);
         }
         case removeFG: {
            String arg0 = readExpr();
            String arg1 = readExpr();
            return String.format("%s %s %s", op, arg0, arg1);
         }
         case jump: {
            String jumpAddress = readCString();
            return String.format("%s %s", op, jumpAddress);
         }
         case bgload: {
            int arg0 = readInt();
            int imageIndex = readShort();
            String num1 = readExpr();
            String num2 = readExpr();

            String filename = readText(input, graphicsTable[imageIndex]);
            return String.format("bgload %08x %s %s %s",
                    arg0, filename, num1, num2);
         }
         case removeBG: {
            String num1 = readExpr();
            String num2 = readExpr();
            String num3 = readExpr();
            return String.format("removeBG %s %s %s", num1, num2, num3);
         }
         case fgload: {
            String num1 = readExpr();
            int arg0 = readInt();
            int imageIndex = readShort();
            String x = readExpr();
            //x = (800/640) * (x-320)
            String num3 = readExpr();

            String filename = readText(input, graphicsTable[imageIndex]);
            return String.format("fgload %s %08x %s %s %s",
                    num1, arg0, filename, x, num3);
         }
         case multifgload2: {
            String arg0 = readExpr();
            String arg1 = readExpr();
            int arg2 = readInt();
            int imageIndex1 = readShort();
            int arg4 = readInt();
            int imageIndex2 = readShort();
            String x1 = readExpr();
            String x2 = readExpr();
            String arg8 = readExpr();

            String filename1 = readText(input, graphicsTable[imageIndex1]);
            String filename2 = readText(input, graphicsTable[imageIndex2]);
            return String.format("%s %s %s %08x %s %08x %s %s %s %s",
                    op, arg0, arg1, arg2, filename1, arg4, filename2, x1, x2, arg8);
         }
         case multifgload3: {
            int arg0 = readInt();
            int imageIndex1 = readShort();
            int arg1 = readInt();
            int imageIndex2 = readShort();
            int arg2 = readInt();
            int imageIndex3 = readShort();
            String arg3 = readExpr();
            String arg4 = readExpr();
            String arg5 = readExpr();
            String arg6 = readExpr();

            String filename1 = readText(input, graphicsTable[imageIndex1]);
            String filename2 = readText(input, graphicsTable[imageIndex2]);
            String filename3 = readText(input, graphicsTable[imageIndex3]);
            return String.format("%s %08x %s %08x %s %08x %s %s %s %s %s",
                    op, arg0, filename1, arg1, filename2, arg2, filename3,
                    arg3, arg4, arg5, arg6);
         }
         case multiremoveFG2: {
            int arg0 = read();
            int arg1 = read();
            int arg2 = read();
            String arg3 = readExpr();
            return String.format("%s %02x %02x %02x %s", op, arg0, arg1, arg2, arg3);
         }
         case multiremoveFG3: {
            String arg0 = readExpr();
            String arg1 = readExpr();
            String arg2 = readExpr();
            return String.format("%s %s %s %s", op, arg0, arg1, arg2);
         }
         case clock: {
            String hours = readExpr();
            String minutes = readExpr();
            return String.format("clock %s:%s", hours, minutes);
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
         case hideTextbox: {
            return "hideTextbox";
         }
         case showTextbox: {
            return "showTextbox";
         }
         case playBGM: {
            String arg0 = readExpr();
            String arg1 = readExpr();
            return String.format("playBGM %s %s", arg0, arg1);
         }
         case stopBGM: {
            return "stopBGM";
         }
         case playSFX: {
            String filename = readCString();
            String arg0 = readExpr();
            String arg1 = readExpr();
            return String.format("playSFX %s %s %s", filename, arg0, arg1);
         }
         case stopSFX: {
            return "stopSFX";
         }
         case gotoif: {
            int arg0 = read();
            int arg1 = read();
            int arg2 = read();
            int arg3 = read();
            int var = read();
            String operator = getComparisonOperator(readShort());
            int arg4 = read();

            String val;
            int v = peek();
            if (v >= 0x80 && v <= 0x8f) {
               v = read();
               val = String.format("%d", v - 0x80);
            } else if (v >= 0xA0 && v <= 0xAF) {
               v = read();
               int v2 = read();
               val = String.format("%d", 256 * (v - 0xa0) + v2);
            } else {
               Log.v(String.format("Unexpected val in %s", v));
               val = "00";
            }

            int arg7 = readShort();
            int jumpTableIndex = readShort();
            int jumpTarget = 0xFFFFFFFF;
            if (jumpTableIndex >= 0 && jumpTableIndex < jumpTable.length) {
               jumpTarget = jumpTable[jumpTableIndex];
            } else {
               Log.v("Invalid jump in " + op + ": " + jumpTableIndex);
            }

            String result = String.format("%s %d (%02x %02x %02x) %02x "
                    + "%s (%02x) %s (%04x) -> %08x (%08x)",
                    op, arg0, arg1, arg2, arg3, var, operator,
                    arg4, val, arg7, jumpTarget, jumpTableIndex);
            logLogic(result);
            return result;
         }
         case choiceId: { //Choice related?
            String arg0 = readExpr();
            String arg1 = readExpr();
            return String.format("%s %s %s", op, arg0, arg1);
         }
         case _switch: {
            StringBuilder sb = new StringBuilder();
            sb.append(String.format("%s\n", op));

            //Conditional?
            int condOp2 = peek();
            if (condOp2 != Opcode._switch3.id) {
               Log.v("Unexpectedly came across a weird opcode (" + condOp2 + ") during a " + op);
            }

            StringBuilder varopBuffer = new StringBuilder();
            varopBuffer.append("switch_varop ");
            {
               int arg0 = read();
               int arg1 = read();
               int arg2 = read();
               int var = read();
               int operator = readShort();
               int nil = read();
               varopBuffer.append(String.format("(%02x %02x %02x) %02x %04x (%02x)",
                       arg0, arg1, arg2, var, operator, nil));
            }

            logLogic(varopBuffer.toString());
            sb.append(varopBuffer);
            sb.append('\n');

            //Cases
            while (peek() != 0x26) {
               int subop = read();
               if (subop != 0x27) {
                  Log.v("Unexpected subop in " + op + ", expected " + 0x27 + ", got " + subop);
               }

               String subarg0 = readExpr();
               int jumpTableIndex = readShort();
               int jumpTarget = 0xFFFFFFFF;
               if (jumpTableIndex >= 0 && jumpTableIndex < jumpTable.length) {
                  jumpTarget = jumpTable[jumpTableIndex];
               } else {
                  Log.v("Invalid jump in switch case: " + jumpTableIndex);
               }
               sb.append(String.format("%02x -> %s %08x (%08x)\n", subop, subarg0, jumpTarget, jumpTableIndex));

               if (peek() == 0) {
                  read();
               } else {
                  break;
               }
            }

            return sb.toString();
         }
         case overlayImage: {
            int arg0 = readInt();
            int imageIndex = readShort();
            String filename = readText(input, graphicsTable[imageIndex]);
            String arg2 = readExpr();
            String arg3 = readExpr();

            return String.format("%s %08x %s %s %s", op, arg0, filename, arg2, arg3);
         }
         case specialEffectImage: {
            int arg0 = readInt();
            int imageIndex = readShort();
            String arg2 = readExpr();
            String arg3 = readExpr();
            String arg4 = readExpr();
            String arg5 = readExpr();
            String arg6 = readExpr();
            String arg7 = readExpr();

            String filename = readText(input, graphicsTable[imageIndex]);
            return String.format("%s %08x %s %s %s %s %s %s %s", op, arg0, filename,
                    arg2, arg3, arg4, arg5, arg6, arg7);
         }
         case tweenZoom: {
            String x = readExpr();
            String y = readExpr();
            String w = readExpr();
            String h = readExpr();
            String duration = readExpr();
            return String.format("%s %s %s %s %s %s", op, x, y, w, h, duration);
         }
         case waitForSFX: {
            if (peek() != 0x10) {
               input.mark();

               int jumpTableIndex = readShort();
               int jumpTarget = 0xFFFFFFFF;
               if (jumpTableIndex >= 0 && jumpTableIndex < jumpTable.length) {
                  jumpTarget = jumpTable[jumpTableIndex];
                  return String.format("goto %08x (%08x)", jumpTarget, jumpTableIndex);
               } else {
                  Log.v("Invalid jump in " + op + ": " + jumpTableIndex);
               }

               input.reset();
            }
            return String.format("%s", op);
         }
         case varop: {
            int arg0 = read();
            int arg1 = read();
            int arg2 = read();
            int arg3 = read();
            String operator = getVaropOperator(readShort());
            int arg4 = read();
            String arg5 = readExpr();

            String result = String.format("%s (%02x %02x %02x) %02x %s (%02x) %s",
                    op, arg0, arg1, arg2, arg3, operator, arg4, arg5);
            logLogic(result);
            return result;
         }
         case chapterCutin: {
            int arg0 = readInt();
            int imageIndex = readShort();
            String filename = readText(input, graphicsTable[imageIndex]);
            return String.format("%s %08x %s", op, arg0, filename);
         }
         case unknown37: {
            int arg0 = readInt();
            int imageIndex = readShort();
            String filename = readText(input, graphicsTable[imageIndex]);
            return String.format("%s %08x %s", op, arg0, filename);
         }

         case delay:
         case unknown20:
         case unknown21:
         case scriptLocationId:
         case unknown46: {
            String arg0 = readExpr();
            return String.format("%s %s", op, arg0);
         }
         case specialEffect: {
            String arg0 = readExpr();
            String arg1 = readExpr();
            return String.format("%s %s %s", op, arg0, arg1);
         }
         default:
            if (op.args > 0) {
               Log.w(String.format("Unhandled opcode (%02x) with %d args", op.id, op.args));
            }
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
      return Ever17Util.readExpr(input);
   }

   protected String getVaropOperator(int c) {
      switch (c) {
         case 0x1414:
            return ":=";
         case 0x1714:
            return "+=";
      }

      return String.format("%04x", c);
   }

   protected String getComparisonOperator(int c) {
      switch (c) {
         case 0x0c14:
            return "==";
         case 0x0d14:
            return "!=";
         case 0x0e14:
            return "<=";
         case 0x0f14:
            return ">=";
         case 0x1014:
            return "< ";
         case 0x1114:
            return "> ";
      }

      return String.format("%04x", c);
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

   //Getters
   protected String[] getPrimaryScripts() {
      return new String[]{"main", "main2"};
   }

   protected String[] getOpaqueSprites() {
      return new String[]{"black", "white", "red"};
   }

   protected WorkItem getWorkItem(String relpath, boolean warn) {
      for (WorkItem wi : workQueue) {
         if (wi.getRelpath().equals(relpath)) {
            return wi;
         }
      }
      if (warn) {
         Log.v("Couldn't find work item: " + relpath);
      }
      return null;
   }

   //Setters
   //Inner Classes
   public static class WorkItem implements Comparable<WorkItem> {

      private final String relpath;
      private final File file;
      private final boolean isMainScript;

      private GraphicsState gstate;
      private MusicState mstate;

      public WorkItem(String relpath, File file, boolean isMainScript) {
         this.relpath = relpath;
         this.file = file;
         this.isMainScript = isMainScript;
      }

      public String getRelpath() {
         return relpath;
      }

      public File getFile() {
         return file;
      }

      public GraphicsState getGraphicsState() {
         return gstate;
      }

      public MusicState getMusicState() {
         return mstate;
      }

      public void setGraphicsState(GraphicsState gs) {
         if (gstate != gs) {
            if (gstate != null) {
               Log.v("Setting a workitem's graphics state multiple times");
            }
            gstate = gs;
         }
      }

      public void setMusicState(MusicState ms) {
         if (mstate != ms) {
            if (mstate != null) {
               Log.v("Setting a workitem's music state multiple times");
            }
            mstate = ms;
         }
      }

      @Override
      public int compareTo(WorkItem i) {
         if (isMainScript && !i.isMainScript) {
            return -1;
         } else if (!isMainScript && i.isMainScript) {
            return 1;
         }

         if (gstate != null && i.gstate == null) {
            return -1;
         } else if (gstate == null && i.gstate != null) {
            return 1;
         }

         return relpath.compareTo(i.relpath);
      }

      @Override
      public String toString() {
         return "WorkItem " + relpath;
      }
   }

}