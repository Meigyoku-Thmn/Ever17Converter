package nl.weeaboo.kid.never7;

import static nl.weeaboo.string.StringUtil2.unescapeString;

import java.nio.ByteBuffer;
import java.util.concurrent.atomic.AtomicInteger;

import nl.weeaboo.common.StringUtil;
import nl.weeaboo.vnds.Log;

public final class Never7Util {

	public static final int DEFAULT_JUMP_TARGET = 0x0123ABCD;
	
	private Never7Util() {		
	}
	
	public static String readExpr(ByteBuffer buf) {
		int arg0 = buf.get() & 0xFF;
		if (arg0 == 0x28) {
			int arg1 = buf.get() & 0xFF;
			int arg2 = buf.get() & 0xFF;
			int arg3 = buf.get() & 0xFF;
			return String.format("VAR_(%02x_%02x)_%02x_%02x", arg0, arg1, arg2, arg3);
		} else if (arg0 == 0xC0) {
			int mode = arg0;
			int val = buf.get() & 0xFF;
			return String.format("VAR_%02x_%02x", mode, val);
		} else if (arg0 >= 0xC1 && arg0 <= 0xCF) {
			int mode = arg0;			
			int a = buf.getShort() & 0xFFFF;
			int b = buf.getShort() & 0xFFFF;			
			return String.format("VAR_%02x_%02x_%02x", mode, a, b);
		} else if (arg0 >= 0x80 && arg0 <= 0x8F) {
			int a = arg0 - 0x80; //Constant
			int b = buf.get() & 0xFF;
			
			int nil = buf.get();
			if (nil != 0) {
				Log.v("I thought exprs ended with 0x00, but got: " + nil);
			}		
			
			return String.format("%d", 256 * b + a);
		} else if (arg0 >= 0xA0 && arg0 <= 0xAF) {
			int a = buf.get() & 0xFF;
			int b = buf.get() & 0xFF;

			if (b != 0) {
				Log.v(String.format("I don't really know what to do with 2-byte a0-constants: %02x %02x", arg0, b));
			}
			
			int nil = buf.get();
			if (nil != 0) {
				Log.v("I thought exprs ended with 0x00, but got: " + nil);
			}
			
			return String.format("%d", 256 * (arg0 - 0xA0) + a);
		} else if (arg0 == 0xE0) {
			int a = buf.getShort() & 0xFFFF;
			int b = buf.get() & 0xFF;
			int c = buf.getShort() & 0xFFFF;
			int d = buf.get() & 0xFF;
			
			return String.format("%02x_%04x_%02x_%04x_%02x", arg0, a, b, c, d);
		} else {
			Log.v("What kind of expr is this? " + arg0);
			return String.format("{%02x}", arg0);
		}
	}
	
	public static boolean isGlobal(String varname) {
		if (varname.startsWith("v_")) {
			varname = varname.substring(2);
		} else {
			Log.w("Error in isGlobal, varnames should always start with \"v_\" :: " + varname);
		}
		
		if (!varname.startsWith("a0_")) {
			return false;
		}
		
		int num = Integer.parseInt(varname.substring(3), 16);
		return num >= 200 && num < 250;
	}

	private static AtomicInteger callIndex = new AtomicInteger();
	
	public static String makeCall(String src, String target) {
		String callLabel = "callret" + callIndex.incrementAndGet();
		
		String oldRetFileVar = "TEMPRETFILE" + StringUtil.stripExtension(src);
		String oldRetLabelVar = "TEMPRETLABEL" + StringUtil.stripExtension(src);
		
		StringBuilder sb = new StringBuilder();		
		sb.append("\nsetvar " + oldRetFileVar + " = RETFILE");
		sb.append("\nsetvar " + oldRetLabelVar + " = RETLABEL");
		sb.append("\nsetvar RETFILE = \"" + src + "\"");
		sb.append("\nsetvar RETLABEL = \"" + callLabel + "\"");
		sb.append("\njump " + target);
		sb.append("\nlabel " + callLabel);
		sb.append("\nsetvar RETFILE = " + oldRetFileVar);
		sb.append("\nsetvar RETLABEL = " + oldRetLabelVar);
		return sb.toString();
	}
	
	public static String unescape(String str) {
		if (str.startsWith("\"") && str.endsWith("\"") && str.length() > 1) {
			str = str.substring(1, str.length()-1);			
		}
		return unescapeString(str);
	}
	
	public static String[] getOpaqueSprites() {
		return new String[] {"black", "white", "red"};		
	}
	
}
