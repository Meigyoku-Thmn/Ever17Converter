package nl.weeaboo.kid.never7;

import java.util.HashMap;
import java.util.Map;

public enum CmdOpcode {

   end(0x0),
   cmd1(0x1),
   cmd2(0x2), //Toggle textbox?
   choice(0x3),
   jump(0x4),
   call5(0x5),
   playBGM(0x6),
   stopBGM(0x7),
   playSFX(0x8),
   stopSFX(0x9),
   waitForSFX(0xa),
   playVoice(0xb),
   createPanBG(0xc),
   removeD(0xd),
   movePanBG(0xe),
   removeBG(0xf),
   bgload(0x10),
   fgload(0x11),
   removeFG(0x12),
   moveFG(0x13),
   multifgload2(0x14),
   removeAllFG(0x15),
   showTennisScore(0x16),
   showClock(0x17),
   cmd18(0x18),
   cmd19(0x19),
   cmd1A(0x1a),
   dayIntro(0x1b),
   cmd1C(0x1c), //Some kind of conditional execution? Usually found between condJump and goto7
   returnTitle(0x1e),
   movie(0x22),
   cmd23(0x23),
   cmd24(0x24),
   cmd2D(0x2d),
   cmd2E(0x2e), //varop(0xfe),
   //text(0xff),
   ;

   public final int id;

   private CmdOpcode(int id) {
      this.id = id;
   }

   //Fast lookup from ID to Opcode
   private static Map<Integer, CmdOpcode> idLookup;

   public static CmdOpcode get(int id) {
      if (idLookup == null) {
         idLookup = new HashMap<>();
         for (CmdOpcode op : values()) {
            idLookup.put(op.id, op);
         }
      }
      return idLookup.get(id);
   }

   //Fast lookup from String to Opcode
   private static Map<String, CmdOpcode> nameLookup;

   public static CmdOpcode get(String name) {
      if (nameLookup == null) {
         nameLookup = new HashMap<>();
         for (CmdOpcode op : values()) {
            nameLookup.put(op.toString(), op);
         }
      }
      return nameLookup.get(name);
   }

}
