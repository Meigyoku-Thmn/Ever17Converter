package nl.weeaboo.kid;

public class Sprite implements Comparable<Sprite> {

   public final int slot;
   public final int x;
   public final int y;
   public final int z;
   public final String filename;

   public Sprite(int slot, int x, int y, int z, String filename) {
      this.slot = slot;
      this.x = x;
      this.y = y;
      this.z = z;
      this.filename = filename;
   }

   @Override
   public int compareTo(Sprite s) {
      return z - s.z;
   }

}
