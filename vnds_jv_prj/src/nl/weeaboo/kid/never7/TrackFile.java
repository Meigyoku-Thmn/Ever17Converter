package nl.weeaboo.kid.never7;

import java.io.BufferedInputStream;
import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import nl.weeaboo.common.StringUtil;
import nl.weeaboo.io.StreamUtil;

public class TrackFile {

   private static final byte[] HEADER_MAGIC = new byte[]{
      0x54, 0x52, 0x41, 0x43, 0x4B, 0x00, 0x00, 0x00 //TRACK\0\0\0
   };

   private String title;
   private List<String> entries;

   public TrackFile() {
      reset0();
   }

   //Functions
   public static void main(String[] args) throws IOException {
      TrackFile file = new TrackFile();
      file.parse(new File(args[0]));
   }

   public void reset() {
      reset0();
   }

   private void reset0() {
      title = "";
      entries = new ArrayList<>();
   }

   @SuppressWarnings("unused")
   public void parse(File file) throws IOException {
      reset();

      try (InputStream in = new BufferedInputStream(new FileInputStream(file))) {
         DataInputStream din = new DataInputStream(in);
         byte[] header = new byte[HEADER_MAGIC.length];
         din.readFully(header);
         if (!Arrays.equals(header, HEADER_MAGIC)) {
            throw new IOException("Invalid header magic \"" + StringUtil.fromUTF8(header, 0, header.length) + "\", expected \"" + StringUtil.fromUTF8(HEADER_MAGIC, 0, HEADER_MAGIC.length) + "\"");
         }

         int unknown = din.readInt(); //Volume?

         byte[] contentBytes = StreamUtil.readFully(in);
         String content = new String(contentBytes, "UTF-16LE");
         String[] _entries = content.split("├");

         this.title = _entries[0];
         for (int n = 1; n < _entries.length; n++) {
            this.entries.add(_entries[n].trim());
         }
      }
   }

   //Getters
   public String getTitle() {
      return title;
   }

   public List<String> getEntries() {
      return Collections.unmodifiableList(entries);
   }

   //Setters
}
