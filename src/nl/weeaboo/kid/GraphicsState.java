package nl.weeaboo.kid;

import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;

import nl.weeaboo.common.Dim;
import nl.weeaboo.common.StringUtil;
import nl.weeaboo.kid.ImageInsets.ImageData;
import nl.weeaboo.vnds.Log;
import nl.weeaboo.vnds.ResourcesUsed;

public class GraphicsState {

   protected final Dim screenSize;
   protected final ImageInsets imageInsets;
   protected final ResourcesUsed resUsed;
   protected final Set<String> opaqueSprites;

   protected String background;
   protected int backgroundFadeFrames;
   protected boolean backgroundDirty;

   protected Map<Integer, Sprite> sprites;
   protected boolean foregroundDirty;

   public GraphicsState(Dim screen, ImageInsets ii, ResourcesUsed used, Collection<String> opaque) {
      screenSize = screen;
      imageInsets = ii;
      resUsed = used;
      opaqueSprites = new HashSet<>(opaque);

      background = "special/black.jpg";
      backgroundFadeFrames = -1;
      sprites = new LinkedHashMap<>();
   }

   public GraphicsState(GraphicsState gs) {
      this(gs.screenSize, gs.imageInsets, gs.resUsed, gs.opaqueSprites);

      background = gs.background;
      backgroundFadeFrames = gs.backgroundFadeFrames;
      backgroundDirty = gs.backgroundDirty;

      sprites.putAll(gs.sprites);
      foregroundDirty = gs.foregroundDirty;
   }

   //Functions
   public GraphicsState copy() {
      return new GraphicsState(this);
   }

   public void clear() {
      setBackground("special/black.jpg", 0);
      clearSprites();
   }

   public void clearSprites() {
      if (sprites.size() > 0) {
         sprites.clear();
         foregroundDirty = true;
      }
   }

   public String maybeFlush() {
      return (isDirty() ? flush() : "");
   }

   public String flushBackground() {
      backgroundDirty = false;

      String opaqueSprite = getOpaqueSprite();
      if (opaqueSprite != null) {
         return showOpaqueSprite(opaqueSprite);
      }

      String result = "bgload " + background;
      if (backgroundFadeFrames >= 0) {
         result += " " + Math.min(600, backgroundFadeFrames);
         backgroundFadeFrames = -1;
      }
      return result;
   }

   public String flush() {
      foregroundDirty = false;

      String opaqueSprite = getOpaqueSprite();
      if (opaqueSprite != null) {
         return showOpaqueSprite(opaqueSprite);
      }

      StringBuilder sb = new StringBuilder();
      sb.append(flushBackground());

      Sprite[] imgs = sprites.values().toArray(new Sprite[sprites.size()]);
      Arrays.sort(imgs);

      for (Sprite s : imgs) {
         sb.append(String.format("\nsetimg %s %d %d", s.filename, s.x, s.y));
      }

      return sb.toString();
   }

   public void removeSprite(int id) {
      Sprite removed = sprites.remove(id);

      if (removed == null) {
         //Log.v("Tried to remove non-existant sprite; id=" + id);
      } else {
         //Log.v("Removing sprite: " + removed.filename);
         foregroundDirty = true;
      }
   }

   protected String showOpaqueSprite(String filenameNoExt) {
      String bg = toBackgroundFilename(filenameNoExt);
      resUsed.setBackgroundUsed(bg);

      return String.format("bgload %s", bg);
   }

   public String toBackgroundFilename(String filename) {
      return StringUtil.replaceExt(filename.toLowerCase(), "jpg");
   }

   protected String toSpriteFilename(String filename) {
      return StringUtil.replaceExt(filename.toLowerCase(), "png");
   }

   //Getters
   public boolean isDirty() {
      return isBackgroundDirty() || isForegroundDirty();
   }

   public boolean isBackgroundDirty() {
      return backgroundDirty;
   }

   public boolean isForegroundDirty() {
      return foregroundDirty;
   }

   public boolean isOpaqueSprite(String filename) {
      return opaqueSprites.contains(StringUtil.stripExtension(filename))
              || filename.startsWith("bgcc");
   }

   public int getSpriteCount() {
      return sprites.size();
   }

   protected String getOpaqueSprite() {
      for (Sprite sprite : sprites.values()) {
         if (isOpaqueSprite(sprite.filename)) {
            return StringUtil.stripExtension(sprite.filename);
         }
      }
      return null;
   }

   //Setters	
   public void setBackground(String filename, int fadeTimeFrames) {
      if (filename == null) {
         Log.w("Background filename is null");
         return;
      }

      filename = toBackgroundFilename(filename);
      resUsed.setBackgroundUsed(filename);

      backgroundFadeFrames = fadeTimeFrames;

      if (!background.equals(filename)) {
         background = filename;
         backgroundDirty = true;
      }
   }

   public void setSprite(int id, int dx, String filename) {
      if (filename == null) {
         Log.w("Sprite filename is null");
         return;
      }

      if (dx == 320) {
         Sprite oldSprite = sprites.get(id);
         if (oldSprite != null) {
            //When overwriting any sprite, inherit its DX
            dx = oldSprite.slot;
         }
      }

      int x = Math.round((256f / 640f) * (dx - 320));
      int y = 0;

      filename = toSpriteFilename(filename);
      resUsed.setForegroundUsed(filename);

      ImageData imgdata = imageInsets.get(filename);
      if (imgdata == null) {
         Log.w("No imgdata for image: " + filename);
      } else {
         x += imgdata.dsx();
         y += imgdata.dsy();
      }

      //Force sprites to be bottom-aligned
      y = Math.max(y, 192 - imgdata.dsh());

      sprites.put(id, new Sprite(dx, x, y, -id, filename));
      foregroundDirty = true;
   }

}
