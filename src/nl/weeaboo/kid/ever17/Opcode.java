package nl.weeaboo.kid.ever17;

import java.util.HashMap;
import java.util.Map;


public enum Opcode {

	end(0x0, 0),
	jump(0x1, 1),
	playBGM(0x3, 2),
	stopBGM(0x4, 0),
	playSFX(0x5, 3),
	stopSFX(0x6, 0),
	waitForSFX(0x7, 0),
	gotoif(0xa, 0),
	bgload(0xc, 5),
	removeBG(0xd, 3),
	fgload(0xf, 5),
	removeFG(0x10, 2),
	multifgload2(0x12, 9),
	multiremoveFG2(0x13, 2),
	multiremoveFG3(0x14, 3),
	multifgload3(0x16, 10),
	hideTextbox(0x18, 0),
	showTextbox(0x19, 0),
	choiceId(0x1A, 2), //Uniquely identifies a choice?
	chapterCutin(0x1D, 2),
	delay(0x1E, 1),
	clock(0x1F, 2),
	unknown20(0x20, 1),
	unknown21(0x21, 1),
	scriptLocationId(0x24, 1), //Uniquely identifies a line in a script
	_switch(0x26, 1),
	overlayImage(0x27, 1),
	_switch3(0x28, 1),
	unknown37(0x37, 2),
	specialEffectImage(0x40, 8),
	tweenZoom(0x41, 5),
	specialEffect(0x45, 2),
	unknown46(0x46, 1),
	varop(0xFE, 0),
	text(0xFF, 1);
	
	public final int id;
	public final int args;
	
	private Opcode(int id) {
		this(id, 0);
	}
	private Opcode(int id, int args) {
		this.id = id;
		this.args = args;
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
