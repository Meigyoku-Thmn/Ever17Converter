package nl.weeaboo.kid.ever17;

import static nl.weeaboo.common.StringUtil.stripExtension;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.io.Writer;
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
import java.util.function.Function;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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

   private Set<Integer> textCoveragePool = new HashSet<>();
   private Set<Integer> imageCoveragePool = new HashSet<>();

   private String currentFileName = "";
   private int currentOpcodeOffset = 0;

   public ScriptConverter(File srcF, File dstF) {
      this.srcScreenSize = new Dim(800, 600);
      this.srcF = srcF;
      this.dstF = dstF;

      stringCommandReader = new StringCommandReader();

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

      PrintWriter pw = new PrintWriter("./output.txt");
      pw.close();

      while (!workQueue.isEmpty()) {
         convertFile(workQueue.peek());
      }

      generateGlueScripts(scriptF);
      resUsed.save(dstF);

      try ( PrintStream pout = new PrintStream(new File(dstF, "logic.txt"), "UTF-8")) {
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
      Log.EnableFileHandler("./output.txt");
      Log.v("[Info] Converting script: " + wi.getFile());
      currentFileName = wi.getFile().getName();

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
      // int graphicsTableBytes = input.limit() - graphicsTableOffset;
      int graphicsTableBytes = (textTable.length > 0 ? textTable[0] : input.limit()) - graphicsTableOffset;
      graphicsTable = new int[graphicsTableBytes / 4];
      for (int t = 0; t < graphicsTable.length; t++) {
         graphicsTable[t] = input.getInt();
         //System.out.printf("%08x\n", graphicsTable[t]);
      }

      //Read opcodes						
      File decF = new File(scriptF, stripExtension(wi.getRelpath()) + ".dec");
      input.position(jumpTable[0]);
      input.limit(Math.min(textTableOffset, graphicsTableOffset));
      if (graphicsTableOffset < textTableOffset) {
         Log.v("graphicsTableOffset < textTableOffset");
      }
      try {
         decode(input, decF);
      } finally {
         input.rewind();
         input.limit(input.capacity());
      }

      Log.DisableFileHandler();

      //Compile
      File _dstF = new File(scriptF, stripExtension(wi.getRelpath()) + ".scr");
      assemble(commandHandler, decF, _dstF, true);

      if (deleteTempFiles) {
         decF.delete();
      }

      return _dstF;
   }

   protected final void assemble(CommandHandler ch, File srcF, File dstF, boolean activeBlackHole)
           throws IOException {
      try ( PrintWriter out = activeBlackHole ? new PrintWriter(Writer.nullWriter()) : new PrintWriter(dstF, "UTF-8")) {
         Pattern decPattern = Pattern.compile("\\[(\\S*?)\\]\\s*(.*?):\\s*(.*)");

         try ( BufferedReader in = new BufferedReader(new InputStreamReader(
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
      textCoveragePool.clear();
      imageCoveragePool.clear();
      try ( PrintWriter pout = new PrintWriter(dstF, "UTF-8")) {

         boolean commandMode = false;
         while (in.hasRemaining()) {
            pout.printf("[%08x] ", in.position());
            pos = dstF.getName() + ":" + Integer.toHexString(in.position());
            currentOpcodeOffset = in.position();

            int opcode = in.get() & 0xFF;
            int lastPosition = in.position();
            Function<Float, String> getRemainingByteCodes = (_unused) -> {
               int remainingByteLength = in.position() - lastPosition;
               in.position(lastPosition);
               byte[] remainingBytes = new byte[remainingByteLength];
               in.get(remainingBytes, 0, remainingByteLength);
               // địt con mẹ Java API nhé
               var _remainingBytes = new Byte[remainingBytes.length];
               for (int i = 0; i < remainingBytes.length; i++) {
                  _remainingBytes[i] = remainingBytes[i];
               }
               return Stream.of(_remainingBytes)
                       .map(bytecode -> String.format("%02x", bytecode))
                       .collect(Collectors.joining(" "));
            };

            if (WorkArounder.make(currentOpcodeOffset, currentFileName, in, jumpTable, pout)) {
               continue;
            } else {
               pout.printf("%02x", opcode);
            }

            if (commandMode) {
               commandMode = false;

               Opcode op = Opcode.get(opcode);
               if (op == null) {
                  if (unsupportedOpCodes.add(opcode)) {
                     Log.v(String.format("  [Unknown] Unsupported opcode: %02x (%d) at %08x", opcode, opcode, currentOpcodeOffset));
                  }
                  pout.printf(": unsupported %d ", opcode);
               } else {
                  String result = null;
                  try {
                     result = decodeOp(op);
                     var remaining = getRemainingByteCodes.apply(1.0f);
                     pout.print(remaining.length() == 0 ? remaining : (" " + remaining));
                     pout.print(": ");
                     if (result != null) {
                        pout.print(result);
                     }
                  } catch (RuntimeException re) {
                     Log.w("  [Error] Exception while decoding opcode (" + op + ") " + dstF.getName() + ":" + in.position(), re);
                  }
               }
            } else {
               if (opcode == 0x10) {
                  pout.print(": ");
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
                        var remaining = getRemainingByteCodes.apply(1.0f);
                        pout.print(remaining.length() == 0 ? remaining : (" " + remaining));
                        pout.print(": ");
                        if (result != null) {
                           pout.print(result);
                        }
                     } catch (RuntimeException re) {
                        Log.w("  [Error] Exception while decoding opcode (" + op + ") " + pos, re);
                     }
                  } else {
                     pout.print(": unsupported");
                  }
               }
            }

            pout.println();
         }

         if (textCoveragePool.size() < textTable.length) {
            Log.v("  [Warn] Text coverage not covered all texts! (" + textCoveragePool.size() + "/" + textTable.length + ")");
         }
         if (imageCoveragePool.size() < graphicsTable.length) {
            Log.v("  [Warn] Graphics coverage not covered all images! (" + imageCoveragePool.size() + "/" + graphicsTable.length + ")");
            List<String> unusedImages = new ArrayList();
            for (var i = 0; i < graphicsTable.length; i++) {
               if (!imageCoveragePool.contains(i)) {
                  unusedImages.add(readText(input, graphicsTable[i]));
               }
            }
            Log.v("  [Warn] Unused images: " + String.join(" ", unusedImages));
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
            imageCoveragePool.add(imageIndex);

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
            imageCoveragePool.add(imageIndex);

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
            imageCoveragePool.add(imageIndex1);
            String filename2 = readText(input, graphicsTable[imageIndex2]);
            imageCoveragePool.add(imageIndex2);
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
            imageCoveragePool.add(imageIndex1);
            String filename2 = readText(input, graphicsTable[imageIndex2]);
            imageCoveragePool.add(imageIndex2);
            String filename3 = readText(input, graphicsTable[imageIndex3]);
            imageCoveragePool.add(imageIndex3);
            return String.format("%s %08x %s %08x %s %08x %s %s %s %s %s",
                    op, arg0, filename1, arg1, filename2, arg2, filename3,
                    arg3, arg4, arg5, arg6);
         }
         case multiremoveFG: {
            int arg0 = read();
            int arg1 = read();
            int arg2 = read();
            String arg3 = readExpr();
            String interpretedFuncName = arg3.equals("3") ? "multiremoveFG_Anim" : "multiremoveFG_Sta";
            switch (arg0) {
               case 0x87:
                  return String.format("%s 1 2 4", interpretedFuncName);
               case 0x83:
                  return String.format("%s 1 2 0", interpretedFuncName);
               case 0x85:
                  return String.format("%s 1 4 0", interpretedFuncName);
               case 0x86:
                  return String.format("%s 2 4 0", interpretedFuncName);
               default:
                  break;
            }
            return String.format("%s %02x %02x %02x %s", op, arg0, arg1, arg2, arg3);
         }
         case setFGOrder_Unk: {
            String arg0 = readExpr();
            String arg1 = readExpr();
            String arg2 = readExpr();
            String combinedStr = arg0 + ' ' + arg1 + ' ' + arg2;
            String interpretedFuncName = "setFGOrder";
            switch (combinedStr) {
               case "0 1 2":
                  return String.format("%s 4 2 1", interpretedFuncName);
               case "0 2 1":
                  return String.format("%s 2 4 1", interpretedFuncName);
               case "1 0 2":
                  return String.format("%s 4 1 2", interpretedFuncName);
               case "1 2 0":
                  return String.format("%s 1 4 2", interpretedFuncName);
               case "2 0 1":
                  return String.format("%s 2 1 4", interpretedFuncName);
               case "2 1 0":
                  return String.format("%s 1 2 4", interpretedFuncName);
               default:
                  break;
            }
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
               textCoveragePool.add(index);
            } else {
               Log.v("  [Unknown] Text table index is out of bounds at " + String.format("%08x", currentOpcodeOffset) + ": " + index);
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
               Log.v(String.format("  [Unknown] Unexpected val in %s at %08x", v, currentOpcodeOffset));
               val = "00";
            }

            int arg7 = readShort();
            int jumpTableIndex = readShort();
            int jumpTarget = 0xFFFFFFFF;
            if (jumpTableIndex >= 0 && jumpTableIndex < jumpTable.length) {
               jumpTarget = jumpTable[jumpTableIndex];
            } else {
               Log.v("  [Unknown] Invalid jump in " + op + " at " + String.format("%08x", currentOpcodeOffset) + ": " + jumpTableIndex);
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
               Log.v("  [Unknown] Unexpectedly came across a weird opcode (" + condOp2 + ") during a " + op + " at " + String.format("%08x", currentOpcodeOffset));
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
                  Log.v("  [Unknown] Unexpected subop in " + op + ", expected " + 0x27 + ", got " + subop + " at " + String.format("%08x", currentOpcodeOffset));
               }

               String subarg0 = readExpr();
               int jumpTableIndex = readShort();
               int jumpTarget = 0xFFFFFFFF;
               if (jumpTableIndex >= 0 && jumpTableIndex < jumpTable.length) {
                  jumpTarget = jumpTable[jumpTableIndex];
               } else {
                  Log.v("  [Unknown] Invalid jump in switch case at " + String.format("%08x", currentOpcodeOffset) + ": " + jumpTableIndex);
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
            imageCoveragePool.add(imageIndex);
            String arg2 = readExpr();
            String arg3 = readExpr();

            return String.format("%s %08x %s %s %s", op, arg0, filename, arg2, arg3);
         }
         case bgloadCrop: {
            int arg0 = readInt();
            int imageIndex = readShort();
            String arg2 = readExpr();
            String arg3 = readExpr();
            String arg4 = readExpr();
            String arg5 = readExpr();
            String arg6 = readExpr();
            String arg7 = readExpr();

            String filename = readText(input, graphicsTable[imageIndex]);
            imageCoveragePool.add(imageIndex);
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
            input.position(input.position() - 2);
            if (input.get() != 0x10) {
               input.position(input.position() + 1);
               int jumpTableIndex = readShort();
               int jumpTarget = 0xFFFFFFFF;
               if (jumpTableIndex >= 0 && jumpTableIndex < jumpTable.length) {
                  jumpTarget = jumpTable[jumpTableIndex];
                  return String.format("goto %08x (%08x)", jumpTarget, jumpTableIndex);
               } else {
                  Log.v("  [Unknown] Invalid jump in " + op + " at " + String.format("%08x", currentOpcodeOffset) + ": " + jumpTableIndex);
                  return String.format("goto %08x (%08x)", jumpTarget, jumpTableIndex);
               }
            }
            input.position(input.position() + 1);
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

            // hardcode workaround
            if (arg0 == 0x28 && arg1 == 0x0a) {
               switch (arg2) {
                  case 0xa2:
                     switch (arg3) {
                        case 0x38:
                           return "setKomoreType " + arg5;
                        case 0x44:
                           return "setNumberOfFlash " + arg5;
                        case 0x43:
                           return "setFlashBrightness " + arg5;
                        case 0x13:
                           if (arg5.equals("1")) {
                              return "turnOnFullscreenTextMode";
                           } else if (arg5.equals("0")) {
                              return "turnOffFullscreenTextMode";
                           }
                           break;
                        case 0x45:
                           return "setMapCommentSlotToDisplay " + arg5;
                        case 0x46:
                           return "pickMapCommentByIndex " + arg5;
                        case 0x4a:
                           return "pickMapCommentByIndex2 " + arg5;
                        default:
                           break;
                     }
                     break;
                  case 0xa4:
                     switch (arg3) {
                        case 0xfa:
                           return "setSceneTitleByIndex " + arg5;
                        default:
                           break;
                     }
                     break;
                  default:
                     break;
               }
            }

            String result = String.format("%s (%02x %02x %02x) %02x %s (%02x) %s",
                    op, arg0, arg1, arg2, arg3, operator, arg4, arg5);
            logLogic(result);
            return result;
         }
         case chapterCutin: {
            int arg0 = readInt();
            int imageIndex = readShort();
            String filename = readText(input, graphicsTable[imageIndex]);
            imageCoveragePool.add(imageIndex);
            return String.format("%s %08x %s", op, arg0, filename);
         }
         case unlockCG: {
            int arg0 = readInt();
            int imageIndex = readShort();
            String filename = readText(input, graphicsTable[imageIndex]);
            imageCoveragePool.add(imageIndex);
            return String.format("%s %s", op, filename);
         }
         case playVoice: {
            String fileName = readCString();
            return String.format("%s %s", op, fileName);
         }
         case openAnim: {
            // this seems to be an instruction to show overlay anim
            // some case has seperate param instruction
            String arg0 = readExpr();
            // hardcode workaround
            switch (arg0) {
               case "4":
                  return "shakeScreenHard";
               case "5":
                  return "shakeScreen";
               case "12":
                  return "openShakeScreenAnim";
               case "19":
                  return "showFog2";
               case "27":
                  return "showKomoreAnim";
               case "32":
                  return "showFilter2";
               case "41":
                  return "openSnowFallingAnim";
               case "44":
                  return "showDimOverlay";
               case "45":
                  return "showDimInAndOutAnim";
               case "46":
                  return "triggerFlash";
               case "48":
                  return "openMapCommentAnim";
               case "49":
                  return "show_map_root_image_blinking_Anim";
               case "18":
                  return "openCherryBlossomAnim";
               default:
                  break;
            }
            return String.format("%s %s", op, arg0);
         }
         case closeAnim: {
            // this seems to be an instruction to close anim
            // some case has seperate param instruction
            String arg0 = readExpr();
            switch (arg0) {
               case "0":
                  return "closeFog2";
               case "7":
                  return "closeKomoreAnim";
               case "11":
                  return "closeShakeScreenAnim";
               case "12":
                  return "closeCherryBlossomAnim";
               case "13":
                  return "closeDimInAndOutAndFilterAnim";
               case "14":
                  return "closeSnowFallingAnim";
               case "15":
                  return "closeMapIndicatorAnim";
               case "16":
                  return "closeDimOverlay";
            }
            return String.format("%s %s", op, arg0);
         }
         case delay: {
            String arg0 = readExpr();
            if (arg0.equals("VAR_c1_34464_0")) {
               return "waitForClick";
            }
            return String.format("%s %s", op, arg0);
         }
         case scriptLocationId: {
            String arg0 = readExpr();
            return String.format("%s %s", op, arg0);
         }
         case setDialogBoxColor: {
            String arg0 = readExpr();
            switch (arg0) {
               case "2":
                  arg0 = "gray";
                  break;
               case "0":
                  arg0 = "blue";
                  break;
               case "1":
                  arg0 = "green";
                  break;
            }
            return String.format("%s %s", op, arg0);
         }
         case specialEffect: {
            String arg0 = readExpr();
            String arg1 = readExpr();
            return String.format("%s %s %s", op, arg0, arg1);
         }
         case playMovie: {
            String fileName = readCString();
            return String.format("%s %s", op, fileName);
         }
         case unknown09:
         case unknown3a:
         case unknown3c: {
            return op.toString();
         }
         case makeFGSomething: {
            String arg0 = readExpr();
            String arg1 = readExpr();
            String targetId = arg0.equals("0") ? "1" : "2";
            switch (arg1) {
               case "8":
                  return String.format("%s %s", "makeFGTransparent", targetId);
               case "16":
               case "15":
                  return String.format("%s %s", "makeFGNormal", targetId);
               case "17":
                  return String.format("%s %s", "makeFGHasYellowAmbient", targetId);
               default:
                  break;
            }
            return String.format("%s %s %s", op, arg0, arg1);
         }
         case unknown2b:
         case unknown3b:
         case unknown43: {
            String arg0 = readExpr();
            return String.format("%s %s", op, arg0);
         }
         default:
            if (op.args > 0) {
               Log.w(String.format("  [Unknown] Unhandled opcode (%02x) with %d args at %08x", op.id, op.args, currentOpcodeOffset));
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
      return KIDUtil.readCString(input);
   }

   protected String readExpr() {
      return Ever17Util.readExpr(input, currentOpcodeOffset);
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

   protected String readText(ByteBuffer buf) throws UnsupportedEncodingException {
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
