package nl.weeaboo.kid.never7;

import java.util.HashMap;
import java.util.Map;


public enum Opcode {

	end(0x0),
	unknown1(0x1),
	delay(0x5),
	unknown6(0x6),
	goto7(0x7),
	condJump(0xa),
	unknownB(0xb),
	returnE(0xe),
	unknown19(0x19),
	unknown21(0x21),
	unknown22(0x22),
	notice(0xfd),
	varop(0xfe),
	text(0xff),
	;
	
	public final int id;
	
	private Opcode(int id) {
		this.id = id;
	}
	
	//Fast lookup from ID to Opcode
	private static Map<Integer, Opcode> idLookup;	
	public static Opcode get(int id) {
		if (idLookup == null) {
			idLookup = new HashMap<Integer, Opcode>();
			for (Opcode op : values()) {
				idLookup.put(op.id, op);
			}
		}		
		return idLookup.get(id);
	}

	//Fast lookup from String to Opcode
	private static Map<String, Opcode> nameLookup;	
	public static Opcode get(String name) {
		if (nameLookup == null) {
			nameLookup = new HashMap<String, Opcode>();
			for (Opcode op : values()) {
				nameLookup.put(op.toString(), op);
			}
		}		
		return nameLookup.get(name);
	}
	
}
