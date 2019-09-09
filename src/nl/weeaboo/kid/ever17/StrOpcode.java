package nl.weeaboo.kid.ever17;

import java.util.HashMap;
import java.util.Map;


public enum StrOpcode {

	textboxColor(0x4, 1),
	clearText(0x5, 2),
	choice(0xB, 1),
	waitForSound(0xC, 0),
	sound(0xD, 0),
	unknownE(0xE, 0),
	appendText(0x10, 1),
	unknown11(0x11, 0);
	
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
			idLookup = new HashMap<Integer, StrOpcode>();
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
			nameLookup = new HashMap<String, StrOpcode>();
			for (StrOpcode op : values()) {
				nameLookup.put(op.toString(), op);
			}
		}		
		return nameLookup.get(name);
	}
	
}
