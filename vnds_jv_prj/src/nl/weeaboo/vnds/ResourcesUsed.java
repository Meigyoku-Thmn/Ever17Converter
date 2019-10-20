package nl.weeaboo.vnds;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashSet;
import java.util.Set;

import nl.weeaboo.io.FileUtil;

public class ResourcesUsed {

   private static final String FN_FOREGROUND = "resused-foreground.txt";
   private static final String FN_BACKGROUND = "resused-background.txt";
   private static final String FN_SOUND = "resused-sound.txt";
   private static final String FN_MUSIC = "resused-music.txt";

   private final Set<String> foreground;
   private final Set<String> background;
   private final Set<String> sound;
   private final Set<String> music;

   public ResourcesUsed() {
      foreground = new HashSet<>();
      background = new HashSet<>();
      sound = new HashSet<>();
      music = new HashSet<>();
   }

   //Functions
   public void load(File folder, boolean suppressWarnings) {
      load(foreground, new File(folder, FN_FOREGROUND), suppressWarnings);
      load(background, new File(folder, FN_BACKGROUND), suppressWarnings);
      load(sound, new File(folder, FN_SOUND), suppressWarnings);
      load(music, new File(folder, FN_MUSIC), suppressWarnings);
   }

   protected static boolean load(Set<String> out, File file, boolean suppressWarnings) {
      try {
         for (String line : FileUtil.read(file).split("(\\\r)?\\\n")) {
            out.add(line.trim());
         }
         return true;
      } catch (IOException ioe) {
         if (!suppressWarnings) {
            Log.w("Exception reading: " + file, ioe);
         }
         return false;
      }
   }

   public void save(File folder) {
      folder.mkdirs();
      save(foreground, new File(folder, FN_FOREGROUND));
      save(background, new File(folder, FN_BACKGROUND));
      save(sound, new File(folder, FN_SOUND));
      save(music, new File(folder, FN_MUSIC));
   }

   protected static boolean save(Set<String> set, File file) {
      try {
         try (PrintWriter pout = new PrintWriter(file, "UTF-8")) {
            set.forEach((line) -> {
               pout.println(line);
            });
         }
         return true;
      } catch (IOException ioe) {
         Log.w("Exception writing: " + file, ioe);
         return false;
      }
   }

   //Getters
   public boolean isForegroundUsed(String filename) {
      return foreground.contains(filename);
   }

   public boolean isBackgroundUsed(String filename) {
      return background.contains(filename);
   }

   public boolean isSoundUsed(String filename) {
      return sound.contains(filename);
   }

   public boolean isMusicUsed(String filename) {
      return music.contains(filename);
   }

   //Setters
   public void setForegroundUsed(String filename) {
      foreground.add(filename);
   }

   public void setBackgroundUsed(String filename) {
      background.add(filename);
   }

   public void setSoundUsed(String filename) {
      sound.add(filename);
   }

   public void setMusicUsed(String filename) {
      music.add(filename);
   }

}
