package nl.weeaboo.kid.ever17;

import java.nio.ByteBuffer;

import nl.weeaboo.kid.KIDUtil;
import nl.weeaboo.vnds.Log;

public class StringCommandReader {

	private final String inputEncoding;
	private final boolean spacesBetweenWords;
	
	private ByteBuffer input;
	private StringBuilder output;
	
	public StringCommandReader(String inputEncoding, boolean spacesBetweenWords) {
		this.inputEncoding = inputEncoding;
		this.spacesBetweenWords = spacesBetweenWords;
		
		output = new StringBuilder();
	}
	
	//Functions
	public String parse(ByteBuffer in) {
		setInput(in);
		parse();
		
		return output.toString();
	}
	
	public void parse() {
		output.delete(0, output.length());
		
		int c;
		while ((c = peek()) != 0) {
			StrOpcode op = StrOpcode.get(c);
			if (op == null) {
				output.append(readChar());
			} else {
				c = read();
				if (op == StrOpcode.textboxColor) {
					output.append(String.format("{%s %08x}", op, readInt()));
				} else if (op == StrOpcode.clearText) {
					output.append(String.format("{%s %s}", op, readExpr()));
				} else if (op == StrOpcode.sound) {
					output.append(String.format("{%s %s}", op, readCString()));
				} else if (op == StrOpcode.waitForSound) {
					output.append(String.format("{%s}", op));
				} else if (op == StrOpcode.choice) {
					int arg0 = read();
					int arg1 = readShort();
					
					output.append(String.format("{%s %02x %04x ", op, arg0, arg1));
					while (peek() != 0) {
						String option = parseChoiceOption();
						output.append('|');
						output.append(option);
					}
					read(); //Read away the trailing 0
					output.append("}");
					break;
				} else if (op == StrOpcode.unknownE) {
					//pout.printf("{%s}", op);
				} else if (op == StrOpcode.appendText) {
					int arg0 = read();
					output.append(String.format("{%s %02x}", op, arg0));
				} else if (op == StrOpcode.unknown11) {
					output.append(String.format("{%s}", op));
				}
			}
		}
	}
	
	protected String parseChoiceOption() {
		int marker = read();
		if (marker != 0x0B) {
			Log.v("Expected choice-option's marker to be: " + 0x0B + ", but got: " + marker);
		}
				
		StringBuilder temp = new StringBuilder();
		while (peek() != 0x0B && peek() != 0x00) {
			if (peek() == 0x28) {
				int arg0 = read();
				int arg1 = read();
				int arg2 = read();
				int varname = read();
				int op = read();
				int arg3 = read();
				if (op != 0x14) {
					Log.v("Unknown operator in choice option cond: " + op);
				}
				
				temp.append(String.format("{%s (%02x %02x %02x) %02x %02x (%02x)}",
						"cond", arg0, arg1, arg2, varname, op, arg3));
			} else {
				String c = readChar();				
				c = c.replace("\n", " ");
				temp.append(c);
			}
		}
				
		return temp.toString();
	}
		
	//Getters
	protected int peek() {
		if (!input.hasRemaining()) return 0;
		return input.get(input.position()) & 0xFF;
	}
	protected int read() {
		return input.get() & 0xFF;
	}
	protected int readShort() {
		return input.getShort() & 0xFFFF;
	}
	protected int readInt() {
		return input.getInt() & 0xFFFFFFFF;
	}
	
	private final byte[] readCharTemp = new byte[4];
	
	protected String readChar() {
		int c = read();
		
		int numBytes = 1;
		if (inputEncoding.equals("SJIS")) {			
			if ((c >= 0x81 && c <= 0x9f) || (c >= 0xe0 && c <= 0xef)) {
				numBytes = 2;
			}
		} else if (inputEncoding.equals("UTF-8")) {
			if (c >= 0xc2 && c <= 0xef) {
				numBytes = 3;
			} else if (c >= 0xf0) {
				numBytes = 4;
			}
		}
		
		if (!spacesBetweenWords) {
			if (c == 0x01) return "";
			if (c == 0x02) return "";
			if (c == 0x10) return "";
		} else {
			if (c == 0x01) c = ' ';  //Newline
			if (c == 0x02) c = ' ';  //Wait click
			if (c == 0x10) c = ' ';  //Append text
		}
		if (c == 0x03) c = '\n'; //New page

		if (c == 0x81) {
			int c2 = read();
			if (c2 != 0x44) {
				Log.v("What I though was a period turns out not to be: " + c2);
			}
			return ".";
		} else if (c == 0x87) {
			int c2 = read();
			if (c2 != 0x4C) {
				Log.v("What I though was an emdash turns out not to be: " + c2);
			}
			return "--";
		}

		readCharTemp[0] = (byte)c;
		for (int n = 1; n < numBytes; n++) {
			readCharTemp[n] = (byte)read();
		}
		
		return new String(readCharTemp, 0, numBytes);
	}
	private String readCString() {
		return KIDUtil.readCString(input, inputEncoding);
	}
	private String readExpr() {
		return Ever17Util.readExpr(input);
	}
	
	//Setters
	public void setInput(ByteBuffer in) {
		input = in;
	}
	
}
