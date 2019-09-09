package nl.weeaboo.kid;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import nl.weeaboo.io.FileUtil;
import nl.weeaboo.vnds.AbstractPacker;
import nl.weeaboo.vnds.Log;

public class KIDPacker extends AbstractPacker {

   public KIDPacker(File srcF, File dstF) {
      super(srcF, dstF);
   }

   //Functions
   protected static void printUsage() {
      System.err.printf("Usage: java %s <src-folder> <dst-folder> <flags>\nflags:"
              + "\n", KIDPacker.class.getName());
   }

   public static void main(String[] args) {
      if (args.length < 2) {
         printUsage();
         return;
      }

      System.setProperty("line.separator", "\n");

      File srcF = new File(args[0]);
      File dstF = new File(args[1]);
      KIDPacker packer = new KIDPacker(srcF, dstF);
      packer.pack();
   }

   @Override
   protected void packMore() throws IOException {
      super.packMore();

      File skinF = new File(srcF, "skin");
      if (skinF.exists()) {
         FileUtil.copyFolder(skinF, dstF, false, null);
      }

      //Include manual and append scripts
      for (File file : srcF.listFiles()) {
         String name = file.getName();
         if (file.isDirectory() && name.startsWith("manual")) {
            Log.v("Including manual folder: " + name);
            FileUtil.copyFolder(file, dstF);
         }
      }
   }

   @Override
   protected String optimizeTextLine(String line) {
      line = super.optimizeTextLine(line);

      StringBuilder sb = new StringBuilder();

      String[] textLines = normalizeText(line.substring(5));
      for (String l : textLines) {
         sb.append("text ");
         sb.append(l.replace("【", "[").replace("】", "]"));
         sb.append('\n');
      }

      return sb.toString();
   }

   protected static String[] normalizeText(String line) {
      List<String> result = new ArrayList<>();

      //Split multi-sentence lines into one line per sentence.
      final int MIN_PART_LEN = 16;

      int lastIndex = 0;
      int index = 0;
      while ((index = line.indexOf('.', index)) >= 0) {
         if (index + 1 < line.length() && line.charAt(index + 1) == ' ' && index - lastIndex > MIN_PART_LEN) {
            String part = line.substring(lastIndex, index + 1).trim();

            boolean leftParen = part.contains("(");
            boolean rightParen = part.contains(")");
            if ((leftParen && rightParen) || (!leftParen && !rightParen)) {
               if (part.length() > 0) {
                  result.add(part);
               }
               lastIndex = index + 1;
            }
         }
         index++;
      }

      if (lastIndex < line.length()) {
         String part = line.substring(lastIndex).trim();
         if (part.length() > 0) {
            result.add(part);
         }
      }

      String last = null;
      for (Iterator<String> itr = result.iterator(); itr.hasNext();) {
         String part = itr.next();
         if (part.equals(last)) {
            itr.remove(); //Remove duplicate lines, usually "...", "..."
         }
         last = part;
      }

      return result.toArray(new String[result.size()]);
   }

   //Getters
   //Setters
}
