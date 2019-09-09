package nl.weeaboo.kid;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.util.Hashtable;
import java.util.Map;

import nl.weeaboo.common.StringUtil;
import nl.weeaboo.io.ByteBufferInputStream;
import nl.weeaboo.io.FileUtil;
import nl.weeaboo.io.StreamUtil;

public class WafToWav {

	final static int RIFF = 0x46464952;
	final static byte WAVFMT[] = new byte[] {
		0x57, 0x41, 0x56, 0x45, 0x66, 0x6D, 0x74, 0x20, 0x32, 0x00, 0x00, 0x00
	};
	
	final static byte FACT[] = new byte[] {
		0x66, 0x61, 0x63, 0x74, 0x04, 0x00, 0x00, 0x00, 0x30, (byte) 0x83, 0x6A, 0x00
	};
	final static int DATA = 0x61746164;

	private WafToWav() {		
	}
	
	//Functions		
	public static void convertFolder(File src, File dst) throws IOException {
		Map<String, File> files = new Hashtable<String, File>();
		FileUtil.collectFiles(files, src, false);
		
		System.out.printf("Decoding WAF files (%d)", files.size());
		for (File f : files.values()) {			
			System.out.print('.');
			if (f.isFile() && f.getName().endsWith(".waf")) {
				convert(f, dst);			
			}
		}
		System.out.println();
	}
	public static File convert(File src, File dstFolder) throws IOException {
		if (!src.isFile()) throw new IllegalArgumentException("src is not a file");
		dstFolder.mkdirs();
		if (!dstFolder.isDirectory()) throw new IllegalArgumentException("dst is not a folder");
		File dstF = new File(dstFolder, StringUtil.replaceExt(src.getName(), "wav"));
		
		ByteBuffer in = ByteBuffer.wrap(FileUtil.readBytes(src));
		in.order(ByteOrder.LITTLE_ENDIAN);
		int magic = in.getInt();

		if (magic == 0x00464157) {
			//WAF
			convertWAV(in, dstF);
		} else {
			//WAV
		}
		
		return dstF;
	}
	
	public static void convertWAV(ByteBuffer in, File dstF) throws IOException {
		byte[] wavFeature = new byte[16];
		in.get(wavFeature);
		wavFeature[0] = 2;
		
		byte[] fillCode = new byte[32];
		in.get(fillCode);

		int wavDataSize = in.getInt();
		int wavFileSize = 82 + wavDataSize;

		ByteBuffer header = ByteBuffer.allocate(90);
		header.order(ByteOrder.LITTLE_ENDIAN);
		header.putInt(RIFF);
		header.putInt(wavFileSize);
		header.put(WAVFMT);
		header.put(wavFeature);
		header.putShort((short)fillCode.length);
		header.put(fillCode);
		header.put(FACT);
		header.putInt(DATA);
		header.putInt(wavDataSize);
						
		FileOutputStream fout = new FileOutputStream(dstF);
		try {
			fout.write(header.array(), 0, header.position());
			StreamUtil.writeFully(fout, new ByteBufferInputStream(in));
		} finally {
			fout.close();
		}
	}
	
	//Getters
	
	//Setters
	
}
