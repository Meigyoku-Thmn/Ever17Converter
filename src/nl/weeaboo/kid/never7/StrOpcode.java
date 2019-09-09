package nl.weeaboo.kid.never7;

import java.util.HashMap;
import java.util.Map;

public enum StrOpcode {

   //0x1 = Newline
   //0x2 = Wait Click
   //0x3 = New page
   delay(0x4, 1),
   textColor(0x5, 2),
   choiceOpt(0xb, 1);
   //0x10 = Append Text

   public final int id;
   public final int args;

   private StrOpcode(int id) {
      this(id, 0);
   }

   private StrOpcode(int id, int args) {
      this.id = id;
      this.args = args;
   }

   //Fast lookup from ID to Opcode
   private static Map<Integer, StrOpcode> idLookup;

   public static StrOpcode get(int id) {
      if (idLookup == null) {
         idLookup = new HashMap<>();
         for (StrOpcode op : values()) {
            idLookup.put(op.id, op);
         }
      }
      return idLookup.get(id);
   }

   //Fast lookup from String to Opcode
   private static Map<String, StrOpcode> nameLookup;

   public static StrOpcode get(String name) {
      if (nameLookup == null) {
         nameLookup = new HashMap<>();
         for (StrOpcode op : values()) {
            nameLookup.put(op.toString(), op);
         }
      }
      return nameLookup.get(name);
   }

}
