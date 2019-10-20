package nl.weeaboo.kid.never7;

import java.io.File;

import nl.weeaboo.awt.AwtUtil;
import nl.weeaboo.common.Dim;
import nl.weeaboo.kid.KIDPacker;
import nl.weeaboo.vnds.AbstractConversionGUI;

@SuppressWarnings("serial")
public class ConversionGUI extends AbstractConversionGUI {

   private static final String version = "1.1.1";

   /*
	 * [ ] Some effect/loop commands not supported, doesn't appear to matter
    */
 /*
	 * Changes:
	 *
	 * 2013/03/08 -- v1.1.1
	 * - bugfix: unable to get Haruka good ending
	 *
	 * 2013/02/27 -- v1.1.0
	 * - bugfix: you were forced into the Izumi route
	 *
	 * 2012/10/06 -- v1.0.1
	 * - Wrong branch was taken during Saki conversation at pool.
	 *
	 * 2012/09/22 -- v1.0.0
	 * - Initial release
     * - Supports both EN/JA versions
     * - Picks up custom soundtrack (.track files)
     * - Append scripts are also converted
    */
   public ConversionGUI() {
      super("Never7 -> VNDS Conversion GUI v" + version,
              ConversionGUI.class.getResource("res/icon.png"),
              new File("D:/Games/Never7"),
              new File("Z:/temp"),
              "never7",
              true,
              new Dim(800, 600));
   }

   public static void main(String args[]) {
      AwtUtil.setDefaultLAF();
      System.setProperty("line.separator", "\n");

      new ConversionGUI().create();
   }

   @Override
   protected void callResourceConverter(String templateFolder, String srcFolder,
           String dstFolder, String... args) {
      String[] merged = new String[args.length + 3];
      merged[0] = templateFolder;
      merged[1] = srcFolder;
      merged[2] = dstFolder;
      System.arraycopy(args, 0, merged, merged.length - args.length, args.length);
      Never7ResourceConverter.main(merged);
   }

   @Override
   protected void callScriptConverter(String srcFolder, String dstFolder) {
      File scriptFolder = new File(srcFolder, "scr-en");
      if (!scriptFolder.exists()) {
         //Use Japanese/original script folder if English translation not available.
         scriptFolder = new File(srcFolder, "script");
      }
      ScriptConverter.main(new String[]{scriptFolder.getAbsolutePath(), dstFolder});
   }

   @Override
   protected void callPacker(String srcFolder, String dstFolder) {
      KIDPacker.main(new String[]{srcFolder, dstFolder});
   }

}
