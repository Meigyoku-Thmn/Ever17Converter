package nl.weeaboo.kid.never7;

import java.util.Collection;

import nl.weeaboo.common.Dim;
import nl.weeaboo.common.StringUtil;
import nl.weeaboo.kid.GraphicsState;
import nl.weeaboo.kid.ImageInsets;
import nl.weeaboo.kid.Sprite;
import nl.weeaboo.kid.ImageInsets.ImageData;
import nl.weeaboo.vnds.Log;
import nl.weeaboo.vnds.ResourcesUsed;

public class Never7GraphicsState extends GraphicsState {

   public Never7GraphicsState(Dim screen, ImageInsets ii, ResourcesUsed used, Collection<String> opaque) {
      super(screen, ii, used, opaque);
   }

   public Never7GraphicsState(Never7GraphicsState other) {
      super(other);
   }

   //Functions
   @Override
   public Never7GraphicsState copy() {
      return new Never7GraphicsState(this);
   }

   @Override
   protected String toSpriteFilename(String filename) {
      filename = super.toSpriteFilename(filename);

      if (imageInsets.get(filename) == null) {
         final String[] tintedExts = new String[]{"n.png", "d.png", "na.png"};
         for (String ext : tintedExts) {
            //Certain file-ext referring to non-existant image files indicate sprite tinting
            if (filename.endsWith(ext)) {
               String baseSprite = filename.substring(0, filename.length() - ext.length()) + ".png";
               if (imageInsets.get(baseSprite) != null) {
                  //Use non-tinted base sprite
                  filename = baseSprite;
               }
            }
         }
      }
      return filename;
   }

   protected String toPanBGFilenameTop(String filename) {
      String mfilename = toBackgroundFilename(StringUtil.stripExtension(filename));
      /*if (exits mfilename)*/ filename = mfilename;
      return toBackgroundFilename(filename);
   }

   protected String toPanBGFilenameMiddle(String filename) {
      String mfilename = toBackgroundFilename(StringUtil.stripExtension(filename) + "-middle");
      /*if (exits mfilename)*/ filename = mfilename;
      return toBackgroundFilename(filename);
   }

   protected String toPanBGFilenameBottom(String filename) {
      String mfilename = toBackgroundFilename(StringUtil.stripExtension(filename) + "-bottom");
      /*if (exits mfilename)*/ filename = mfilename;
      return toBackgroundFilename(filename);
   }

   //Getters
   public String getBackground() {
      return background;
   }

   //Setters
   @Override
   public void setSprite(int id, int slot, String filename) {
      if (filename == null) {
         Log.w("Sprite filename is null");
         return;
      }

      if (slot < 0) {
         Sprite sprite = sprites.get(id);
         if (sprite != null) {
            slot = sprite.slot;
         } else {
            slot = 1;
         }
      }

      int x = 128;
      if (slot == 0) {
         x = 192;
      } else if (slot == 2) {
         x = 64;
      }

      int y = 0;

      filename = toSpriteFilename(filename);
      resUsed.setForegroundUsed(filename);

      ImageData imgdata = imageInsets.get(filename);
      if (imgdata == null) {
         Log.w("No imgdata for image: " + filename);
      } else {
         x += imgdata.dsx() - imgdata.dsw() / 2;
         y += imgdata.dsy();

         //Force sprites to be bottom-aligned
         y = Math.max(y, 192 - imgdata.dsh());
      }

      sprites.put(id, new Sprite(slot, x, y, -id, filename));
      foregroundDirty = true;
   }

   public void setSpriteSlot(int id, int slot) {
      Sprite sprite = sprites.get(id);
      if (sprite == null) {
         Log.w("Sprite is null, can't change its slot");
         return;
      }

      setSprite(id, slot, sprite.filename);
   }

}
