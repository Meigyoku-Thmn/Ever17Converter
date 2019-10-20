package nl.weeaboo.kid.ever17;

import java.io.File;

import nl.weeaboo.awt.AwtUtil;
import nl.weeaboo.common.Dim;
import nl.weeaboo.kid.KIDPacker;
import nl.weeaboo.kid.KIDResourceConverter;
import nl.weeaboo.vnds.AbstractConversionGUI;

@SuppressWarnings("serial")
public class ConversionGUI extends AbstractConversionGUI {

   private static final String version = "1.1.2";

   /*
	 * [ ] Add ending credits?
	 *     [ ] Transliterate the multiple timelines in Coco's ending movie.
	 * [ ] Support zoom/crop support of specialEffectImage (zoomed-in versions can be pre-created)
	 * [ ] What to do about cutin movies
	 * [ ] Needs more testing
    */
 /*
	 * Changes:
	 *
	 * 2012/05/02 -- v1.1.2
	 * - Support for extended constants in conditional jump command (thanks to
	 *   Daniel Dawson for identifying the problem).
	 *
	 * 2012/11/03 -- v1.1.1
	 * - Coco route and the two epilogues (You/Sara) should now be accessible.
	 * - Added links to all epilogues to the 'Debug' menu on the title screen.
	 *
	 * 2012/10/06 -- v1.1.0
	 * - Voice data no longer requires external KTG tool to convert
	 * - Sora route was inaccessible through normal means due to a bug.
	 *
	 * 2012/05/27 -- v1.0.2
	 * - Fixed sprite double-scaling bug
	 * 
	 * 2011/09/22 -- v1.0.1
	 * - Android conversion uses Ogg-Vorbis for all audio
	 * 
	 * 2011/05/27 -- v1.0.0
	 * - Initial release
    */
   public ConversionGUI() {
      super("Ever17 -> VNDS Conversion GUI v" + version,
              ConversionGUI.class.getResource("res/icon.png"),
              new File("D:/Games/KID/ever17PC_us"),
              new File("Z:/temp"),
              "ever17",
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
      KIDResourceConverter.main(merged);
   }

   @Override
   protected void callScriptConverter(String srcFolder, String dstFolder) {
      ScriptConverter.main(new String[]{srcFolder + "/script", dstFolder});
   }

   @Override
   protected void callPacker(String srcFolder, String dstFolder) {
      KIDPacker.main(new String[]{srcFolder, dstFolder});
   }

}
