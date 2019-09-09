package nl.weeaboo.kid.never7;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Arrays;

import nl.weeaboo.common.StringUtil;
import nl.weeaboo.io.FileUtil;
import nl.weeaboo.kid.KIDResourceConverter;
import nl.weeaboo.vnds.Log;

public class Never7ResourceConverter extends KIDResourceConverter {

   public Never7ResourceConverter(String templateFolder) {
      super(templateFolder);
   }

   //Functions
   public static void main(String args[]) {
      System.setProperty("line.separator", "\n");

      Never7ResourceConverter e = new Never7ResourceConverter(args[0]);
      try {
         e.parseCommandLine(args, 3);
      } catch (IOException ioe) {
         printUsage(e.getClass());
         return;
      }

      try {
         e.extract(args[1], args[2]);
      } catch (IOException ioe) {
         Log.e("Fatal error during resource conversion", ioe);
      }
   }

   @Override
   protected void extractResources(File srcF, File originalF, File generatedF) throws IOException {
      super.extractResources(srcF, originalF, generatedF);

      //Patch with "-en" files		
      for (File folder : originalF.listFiles()) {
         String name = folder.getName();
         if (name.endsWith("-en")) {
            String stripped = name.substring(0, name.indexOf("-en"));
            File orig = new File(folder.getParentFile(), stripped);
            if (orig.exists()) {
               Log.v("Patching with English patch folder: " + name);
               FileUtil.copyFolderContents(folder, orig);
            }
         }
      }

      //Include custom soundtrack
      File dstMusicF = new File(originalF, "bgm");

      TrackFile tf = findTrackFile(srcF);
      if (tf != null) {
         Log.v("Track list found: " + tf.getTitle());

         int t = 0;
         for (String entry : tf.getEntries()) {
            t++;

            File file = new File(srcF, entry);
            String dstName = String.format("track_%02d.%s", t, StringUtil.getExtension(entry));
            try {
               FileUtil.copyFile(file, new File(dstMusicF, dstName));
            } catch (FileNotFoundException fnfe) {
               Log.w("Music mentioned in .track file not found: " + entry, fnfe);
            }
         }
      }

      //Include manual and append scripts
      for (File file : srcF.listFiles()) {
         String name = file.getName();
         if (file.isDirectory() && name.startsWith("manual")) {
            Log.v("Including manual folder: " + name);
            FileUtil.copyFolder(file, generatedF);
         } else if (file.isDirectory() && name.startsWith("append")) {
            Log.v("Including append folder: " + name);
            FileUtil.copyFolder(file, originalF);
         }

      }
   }

   protected TrackFile findTrackFile(File srcF) throws IOException {
      TrackFile tf = new TrackFile();

      File[] files = srcF.listFiles((File dir, String name) -> name.toLowerCase().endsWith(".track"));

      if (files != null && files.length >= 1) {
         Arrays.sort(files, (File fa, File fb) -> {
            String a = fa.getName().toLowerCase();
            String b = fb.getName().toLowerCase();

            //Mute is probably not the .track we want
            if (a.equals("mute")) {
               return 1;
            }
            if (b.equals("mute")) {
               return -1;
            }

            //Recommended .track file by translation patch
            if (a.equals("psp-ost-95.track")) {
               return -1;
            }
            if (b.equals("psp-ost-95.track")) {
               return 1;
            }

            //Get the most specific one, psp-ost-90, rather than psp-ost
            if (a.startsWith(b)) {
               return 1;
            }
            if (b.startsWith(a)) {
               return -1;
            }

            return a.compareTo(b); //Alphabetical as a last resort
         });

         tf.parse(files[0]);
      }

      return tf;
   }

}
