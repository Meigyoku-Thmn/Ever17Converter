package nl.weeaboo.kid.never7;

import java.io.UnsupportedEncodingException;
import java.nio.ByteBuffer;

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
				if (op == StrOpcode.delay) {
					output.append(String.format("{%s %s}", op, readExpr()));
				} else if (op == StrOpcode.textColor) {
					output.append(String.format("{%s %s %s}", op, readExpr(), readExpr()));
				} else if (op == StrOpcode.choiceOpt) {
					output.append(String.format("{%s %s}", op, parseChoiceOption2()));
				}
			}
		}
	}
	
	private String parseChoiceOption2() {
		StringBuilder temp = new StringBuilder();
		
		if (peek() <= 9) {
			int idx = read();
			temp.append(String.format("%d -> ", idx));
		}
		
		while (peek() != 0x0B && peek() != 0x00) {
			String c = readChar();				
			c = c.replace("\n", " ");
			temp.append(c);
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


		readCharTemp[0] = (byte)c;
		for (int n = 1; n < numBytes; n++) {
			readCharTemp[n] = (byte)read();
		}
		
		try {
			return new String(readCharTemp, 0, numBytes, inputEncoding);
		} catch (UnsupportedEncodingException e) {
			return new String(readCharTemp, 0, numBytes);
		}
	}
	private String readExpr() {
		return Never7Util.readExpr(input);
	}
	
	//Setters
	public void setInput(ByteBuffer in) {
		input = in;
	}
	
}
