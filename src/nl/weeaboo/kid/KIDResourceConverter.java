package nl.weeaboo.kid;

import java.awt.Component;
import java.awt.Dimension;
import java.awt.Frame;
import java.awt.Image;
import java.awt.Insets;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.TreeMap;

import javax.imageio.ImageIO;
import javax.swing.JFrame;
import javax.swing.JOptionPane;

import nl.weeaboo.awt.ImageUtil;
import nl.weeaboo.common.Dim;
import nl.weeaboo.common.StringUtil;
import nl.weeaboo.io.ByteBufferInputStream;
import nl.weeaboo.io.FileUtil;
import nl.weeaboo.io.LittleEndianInputStream;
import nl.weeaboo.kid.ImageInsets.ImageData;
import nl.weeaboo.system.ProcessUtil;
import nl.weeaboo.vnds.AbstractResourceConverter;
import nl.weeaboo.vnds.BatchProcess;
import nl.weeaboo.vnds.FileOp;
import nl.weeaboo.vnds.Log;
import nl.weeaboo.vnds.VNImageUtil;
import nl.weeaboo.vnds.VNSoundUtil;
import nl.weeaboo.vnds.tools.ImageConverter;
import nl.weeaboo.vnds.tools.SoundConverter;

public class KIDResourceConverter extends AbstractResourceConverter {

	private final File templateF;
	
	public KIDResourceConverter(String templateFolder) {
		this.templateF = new File(templateFolder);
	}
	
	//Functions
	public static void main(String args[]) {		
		System.setProperty("line.separator", "\n");
		
		/*try { //Test image conversion
			BufferedImage img = readPRT(new File("Z:/temp/_original/bg/bg00e.cps.unpacked"), 800, 600, new Insets(0, 0, 0, 0));
			ImageIO.write(img, "png", new File("Z:/temp/decoded.png"));
		} catch (IOException ioe) {
			ioe.printStackTrace();
		}		
		System.exit(1337);*/
		
		KIDResourceConverter e = new KIDResourceConverter(args[0]);
		try {
			e.parseCommandLine(args, 3);
		} catch (IOException ioe) {
			printUsage(e.getClass());
			return;
		}		
				
		try {
			e.extract(args[1], args[2]);
		} catch (IOException ioe) {
			Log.e("Fatal error during resource conversion", ioe);
		}
	}
	
	public void extract(String src, String dst) throws IOException {
		ImageInsets ii = new ImageInsets();

		File dstF = new File(dst);
		File originalF = new File(dstF, "_original");
		File generatedF = new File(dstF, "_generated");
		
		//Clean up _original folder
		FileUtil.deleteFolder(originalF);
		originalF.mkdirs();

		//Extract game data
		extractResources(new File(src), originalF, generatedF);			
		
		//Clean up _generated folder
		initOutputFolder(generatedF);
		
		//Convert
		convertBackground(dstF);
		convertForeground(dstF, ii);
		convertSound(dstF);
		convertMusic(dstF);
		
		ii.save(new File(generatedF, "imginsets.txt"));				
		
		//Template
		copyTemplate(templateF, generatedF);
		
		//Done
		Log.v("Done");
	}
	
	protected void extractResources(File srcF, File originalF, File generatedF) throws IOException {
		UnDAT.extractFolder(srcF, originalF, "resum.dat", "saver.dat", "wallpaper.dat");		
	}
	
	protected void askExtractVoice(File originalF) throws IOException {
		Component parent = null;
		for (Frame frame : Frame.getFrames()) {
			if (frame instanceof JFrame) {
				JFrame jframe = (JFrame)frame;
				parent = jframe.getContentPane();
				break;
			}
		}
		
		int r = JOptionPane.showConfirmDialog(parent, "Do you want to use KID Tools GUI to convert voices?", "Notice",
				JOptionPane.YES_NO_OPTION, JOptionPane.PLAIN_MESSAGE);

		if (r == JOptionPane.YES_OPTION) {			
			Process p = ProcessUtil.execInDir("KTG_v21b080717.exe", "tools/KTG");
			
			File voiceF = new File(originalF, "voice");
			voiceF.mkdirs();
			
			JOptionPane.showMessageDialog(null, String.format("<html><div width=300>" +
					"Right-click on the KID tools GUI window, select 'Open KID pack' " +
					"and then the 'voice.dat' file in your Ever17 installation folder. <br><br>" +
					"Right-click on the list of files that appears on the left, " +
					"select 'Save All' and browse to '%s'.<br><br>"+
					"Close the KID Tools GUI window to continue afterwards.</div></html>",
					voiceF));
			
			ProcessUtil.waitFor(p);
			ProcessUtil.kill(p);
		}		
	}
	
	public void convertBackground(File root) throws IOException {
		File targetFolder = new File(root, "/_generated/background");
		
		Log.v("Converting backgrounds...");
		ImageConverter ic = createBackgroundConverter();

		Map<String, File> files = new TreeMap<String, File>();
		FileUtil.collectFiles(files, new File(root, "/_original/bg"), false);
		FileUtil.collectFiles(files, new File(root, "/_original/system"), false);
		
		BatchProcess bp = createBatch();
		try {
			bp.run(files, new BackgroundTask(targetFolder, sourceImageSize, ic));
		} catch (InterruptedException e) {
			Log.w("Batch Process Interrupted", e);
		}
	}	
	
	public void convertForeground(File root, ImageInsets ii) throws IOException {
		File targetFolder = new File(root, "/_generated/foreground");

		Log.v("Converting sprites...");
		ImageConverter ic = createForegroundConverter();

		Map<String, File> files = new TreeMap<String, File>();
		FileUtil.collectFiles(files, new File(root, "/_original/chara"), false);
		FileUtil.collectFiles(files, new File(root, "/_original/system"), false);
		
		BatchProcess bp = createBatch();		
		try {
			bp.run(files, new ForegroundTask(targetFolder, ii, ic,
					sourceImageSize, targetImageSize));
		} catch (InterruptedException e) {
			Log.w("Batch Process Interrupted", e);
		}
	}

	public void convertSound(File root) throws IOException {
		File targetFolder = new File(root, "_generated/sound");
								
		Log.v("Converting SFX...");
		try {
			SoundConverter sc = createSFXEncoder();
			
			Map<String, File> files = new HashMap<String, File>();
			FileUtil.collectFiles(files, new File(root, "/_original/se"), false);
			FileUtil.collectFiles(files, new File(root, "/_original/sysvoice"), false);

			BatchProcess bp = createBatch();
			bp.setTaskSize(100);
			bp.run(files, new AudioTask(targetFolder, sc, false));
		} catch (InterruptedException e) {
			Log.w("Batch Process Interrupted", e);
		}

		if (convertVoice) {
			Log.v("Converting Voice...");
			SoundConverter sc = createVoiceEncoder();

			Map<String, File> files = new HashMap<String, File>();
			FileUtil.collectFiles(files, new File(root, "/_original/voice"), false);
			FileUtil.collectFiles(files, new File(root, "/_original/wave"), false);

			BatchProcess bp = createBatch();
			bp.setTaskSize(250);
			try {				
				bp.run(files, new AudioTask(targetFolder, sc, false));
			} catch (InterruptedException e) {
				Log.w("Batch Process Interrupted", e);
			}
		}
	}

	public void convertMusic(File root) throws IOException {
		File targetFolder = new File(root, "_generated/sound");

		Log.v("Converting Music...");
		SoundConverter sc = createMusicEncoder();
		
		Map<String, File> files = new HashMap<String, File>();
		FileUtil.collectFiles(files, new File(root, "_original/bgm"), false);		

		BatchProcess bp = createBatch();
		bp.setTaskSize(5);
		try {
			bp.run(files, new AudioTask(targetFolder, sc, true));
		} catch (InterruptedException e) {
			Log.w("Batch Process Interrupted", e);
		}
	}
	
	public static BufferedImage readCPS(File file, int defaultW, int defaultH) throws IOException {
		return readCPS(file, defaultW, defaultH, new Insets(0, 0, 0, 0));
	}
	
	@SuppressWarnings("unused")
	public static BufferedImage readCPS(File file, int defaultW, int defaultH, Insets i)
		throws IOException
	{		
		ByteBuffer bytes = ByteBuffer.wrap(FileUtil.readBytes(file));
		bytes.order(ByteOrder.LITTLE_ENDIAN);
		
		int cpsMagic = bytes.getInt();
		int cpsSize = bytes.getInt();
		int unknown1 = bytes.getShort();
		int unknown2 = bytes.getShort();
		int prtSize = bytes.getInt();
		int prtMagic = bytes.getInt();
		
		//Decode CPS
		try {			
			int last = bytes.getInt(cpsSize - 4);
			if (last != 0x07534682) {
				int edi = last - 0x7534682;
				if (edi != 0) {
					int eax = 0x10;
					int edx = 0x10;
					long ecx = (bytes.getInt(edi) + edi + 0x3786425) & 0xFFFFFFFFL;
					if (cpsSize - 4 > 0x10) {
						do {
							if (eax != edi) {
								bytes.putInt(edx, (int)(bytes.getInt(edx) - (cpsSize + ecx)));
							}
							ecx = (ecx * 0x41C64E6D + 0x9B06) & 0xFFFFFFFFL;
							eax += 4;
							edx += 4;
						} while (eax < cpsSize - 4);
					}
					bytes.putInt(cpsSize - 4, 0);
				}
			}
		} catch (RuntimeException re) {
			throw new IOException("Error decoding CPS", re);
		}
		
		if ((unknown2 & 3) != 0) {
			ByteBuffer decompressed = ByteBuffer.allocate(0x10 + prtSize);
			//System.out.printf("%s: %d %d %d\n", file.getName(), bytes.position(), prtSize, bytes.remaining());
			UnDAT.decompressLND(decompressed, prtSize, LittleEndianInputStream.wrap(new ByteBufferInputStream(bytes)));
			bytes = decompressed;
			bytes.rewind();
		}
		return readPRT(file.getName(), bytes, defaultW, defaultH, i);		
		
		/*
		File unpackedCPS = new File(file.getParentFile(), file.getName()+".unpacked");
		try {
			String cmd = String.format("unpackCPS \"%s\"", file.toString());
			Process p = ProcessUtil.execInDir(cmd, "tools/unpackCPS");
			ProcessUtil.waitFor(p);
			ProcessUtil.kill(p);
			
			return readPRT(unpackedCPS, defaultW, defaultH, i);
		} catch (RuntimeException re) {
//			File folder = new File("Z:/temp/ever17/limbo");
//			folder.mkdirs();
//			File targetF = new File(folder, file.getName());
//			targetF.delete();
//			unpackedCPS.renameTo(targetF);			
			throw new IOException("Unable to read " + file.getName(), re);
		} finally {
			unpackedCPS.delete();
		}
		*/		
	}
	
	public static BufferedImage readPRT(File file, int defaultW, int defaultH,
			Insets outInsets) throws IOException
	{		
		ByteBuffer buf = ByteBuffer.wrap(FileUtil.readBytes(file));
		return readPRT(file.getName(), buf, defaultW, defaultH, outInsets);
	}
	public static BufferedImage readPRT(String filename, ByteBuffer buf, int defaultW, int defaultH,
			Insets outInsets) throws IOException
	{		
		buf.order(ByteOrder.LITTLE_ENDIAN);
		
		int id = buf.getInt();
		if (id != 0x00545250) {
			throw new IOException(String.format("Invalid magic: %08x expected %08x", id, 0x00545250));
		}

		int version = buf.getShort() & 0xFFFF;
		if (version == 0x65) {
			return readPRT_0x65(filename, buf, defaultW, defaultH, outInsets);
		} else {
			return readPRT_0x66(filename, buf, defaultW, defaultH, outInsets);
		}
	}
	
	private static BufferedImage readPRT_0x65(String filename, ByteBuffer buf, int defaultW, int defaultH,
			Insets outInsets) throws IOException
	{		
		buf.position(buf.position()+5);
		int paletteEntryBytes = buf.get() & 0xFF;
		int w = buf.getShort() & 0xFFFF;
		if (w <= 0) w = defaultW;
		int h = buf.getShort() & 0xFFFF;
		if (h <= 0) h = defaultH;		
		boolean hasAlpha = buf.getInt() != 0;
		
		int[] palette = new int[256];
		for (int n = 0; n < palette.length; n++) {
			if (paletteEntryBytes == 4) {
				palette[n] = buf.getInt();
			} else {
				//Dunno, lol
			}
			
			if (!hasAlpha) {
				palette[n] = 0xFF000000 | palette[n];
			}
		}

		int bpp = (hasAlpha ? 4 : 3);
		if (paletteEntryBytes > 0) {
			bpp = 1;
		}
		
		int required = w * h * bpp;
		int diff = buf.remaining() - required;
		int scansize = w + (diff / h);
		
		//System.err.println(filename + " " + w + "(" + scansize + ")x" + h + " " + buf.remaining() + " " + diff + " " + buf.remaining()/(double)h/bpp);
		
		if (w >= 2048 || h >= 2048) throw new IOException("Image too large: " + w + "x" + h);
		if (diff < 0) throw new IOException("Buffer underflow, diff=" + diff);
				
		int[] argb = new int[w*h];
		for (int y = h-1; y >= 0; y--) {
			int offset = y * w;
			for (int x = 0; x < w; x++) {
				if (paletteEntryBytes > 0) {
					argb[offset+x] = palette[buf.get() & 0xFF];
				} else {
					int b = buf.get() & 0xFF;
					int g = buf.get() & 0xFF;
					int r = buf.get() & 0xFF;					
					int a = 0xFF;
					argb[offset+x] = (a<<24)|(r<<16)|(g<<8)|b;
				}
			}
			buf.position(buf.position() + 1*(scansize - w));
		}
		if (hasAlpha && paletteEntryBytes <= 0) {
			//Separate alpha
			for (int y = 0; y < h; y++) {
				int offset = y * w;
				for (int x = 0; x < w; x++) {
					int a = buf.get() & 0xFF;
					argb[offset+x] = (a<<24)|(argb[offset+x] & 0xFFFFFF);
				}
			}
		}
		return ImageUtil.createBufferedImage(w, h, argb, false);
	}
	
	private static BufferedImage readPRT_0x66(String filename, ByteBuffer buf, int defaultW, int defaultH,
			Insets outInsets) throws IOException
	{				
		buf.position(buf.position()+5);
		int paletteEntryBytes = buf.get() & 0xFF;
		buf.position(buf.position()+4);
		boolean hasAlpha = buf.getInt() != 0;
		outInsets.left = buf.getInt();
		outInsets.top = buf.getInt();
		//System.out.println(file + " " + outInsets.left + " " + outInsets.top);
		int w = buf.getInt();
		if (w <= 0) w = defaultW;
		int h = buf.getInt();				
		if (h <= 0) h = defaultH;
		
		int[] palette = new int[256];
		for (int n = 0; n < palette.length; n++) {
			if (paletteEntryBytes == 4) {
				palette[n] = buf.getInt();
			} else {
				//Dunno, lol
			}
			
			if (!hasAlpha) {
				palette[n] = 0xFF000000 | palette[n];
			}
		}

		int bpp = (hasAlpha ? 4 : 3);
		if (paletteEntryBytes > 0) {
			bpp = 1;
		}
		
		int required = w * h * bpp;
		int diff = buf.remaining() - required;
		int scansize = w + (diff / h);
		
		//System.err.println(filename + " " + w + "(" + scansize + ")x" + h + " " + buf.remaining() + " " + diff + " " + buf.remaining()/(double)h/bpp);
		
		if (w >= 2048 || h >= 2048) throw new IOException("Image too large: " + w + "x" + h);
		if (diff < 0) throw new IOException("Buffer underflow, diff=" + diff);
				
		int[] argb = new int[w*h];
		for (int y = h-1; y >= 0; y--) {
			int offset = y * w;
			for (int x = 0; x < w; x++) {
				if (paletteEntryBytes > 0) {
					argb[offset+x] = palette[buf.get() & 0xFF];
				} else {
					int b = buf.get() & 0xFF;
					int g = buf.get() & 0xFF;
					int r = buf.get() & 0xFF;					
					int a = 0xFF;
					argb[offset+x] = (a<<24)|(r<<16)|(g<<8)|b;
				}
			}
			buf.position(buf.position() + 1*(scansize - w));
		}
		if (hasAlpha) {
			for (int y = 0; y < h; y++) {
				int offset = y * w;
				for (int x = 0; x < w; x++) {
					int a = buf.get() & 0xFF;
					argb[offset+x] = (a<<24)|(argb[offset+x] & 0xFFFFFF);
				}
			}
		}
		return ImageUtil.createBufferedImage(w, h, argb, false);
	}
	
	//Getters
	
	//Setters
	
	//Inner Classes	
	private static class ForegroundTask implements FileOp {

		private final File dstFolder;
		private final ImageInsets ii;
		private final ImageConverter ic;
		private final Dim sourceImageSize;
		private final Dim targetImageSize;
		
		public ForegroundTask(File dstFolder, ImageInsets ii, ImageConverter ic,
				Dim sourceImageSize, Dim targetImageSize)
		{
			this.dstFolder = dstFolder;
			this.ii = ii;
			this.ic = ic;
			this.sourceImageSize = sourceImageSize;
			this.targetImageSize = targetImageSize;
		}
		
		@Override
		public void execute(String relpath, File file) throws IOException {
			String fn = relpath.toLowerCase();
			if (fn.startsWith("/")) fn = fn.substring(1);

			String fext = StringUtil.getExtension(file.getName());
			
			Insets insets = new Insets(0, 0, 0, 0);
			BufferedImage image;
			try {
				if (fext.equals("") || fext.equals("bmp")) {
					image = VNImageUtil.readBMP(file);
				} else if (fext.equals("cps")) {
					image = readCPS(file, sourceImageSize.w, sourceImageSize.h, insets);
				} else {
					image = ImageIO.read(file);
				}
			} catch (IOException ioe) {
				if (!file.getParentFile().getName().equals("system")) {
					Log.w("Error reading image: " + relpath);
				}
				return;
			}
			
			int iw = image.getWidth();
			int ih = image.getHeight();
			
			int argb[] = image.getRGB(0, 0, iw, ih, null, 0, iw);
			
			//Scale to target size
			{
				float sx = Math.min(1f, targetImageSize.w / (float)ic.getSourceScreenSize().width);
				float sy = Math.min(1f, targetImageSize.h / (float)ic.getSourceScreenSize().height);
				
				iw = Math.max(1, Math.round(iw * sx));
				ih = Math.max(1, Math.round(ih * sy));
				insets.left   = Math.round(insets.left * sx);
				insets.right  = Math.round(insets.right * sx);
				insets.top    = (int)Math.ceil(insets.top * sy);
				insets.bottom = (int)Math.floor(insets.bottom * sy);
				
				Image i = image.getScaledInstance(iw, ih, Image.SCALE_AREA_AVERAGING);
				image = new BufferedImage(iw, ih, BufferedImage.TYPE_INT_ARGB);
				image.getGraphics().drawImage(i, 0, 0, null);
				image.getRGB(0, 0, iw, ih, argb, 0, iw);
			}
			
			String newFilename = StringUtil.stripExtension(fn.toLowerCase()) + ".png";
			Dimension d = new Dimension(iw, ih);
			synchronized (ii) {
				ii.set(newFilename, new ImageData(insets, d, targetImageSize));
			}
			
			//Write output
			File outFile = new File(dstFolder, newFilename);
			outFile.getParentFile().mkdirs();
			ImageIO.write(image, "png", outFile);
			ic.convertFile(outFile);
		}		
	}
	
	private static class BackgroundTask implements FileOp {

		private final File dstFolder;
		private final Dim sourceImageSize;
		private final ImageConverter ic;

		public BackgroundTask(File dstFolder, Dim sourceImageSize, ImageConverter ic) {
			this.dstFolder = dstFolder;
			this.sourceImageSize = sourceImageSize;
			this.ic = ic;
		}
		
		@Override
		public void execute(String relpath, final File file) throws IOException {
			Map<String, File> tempFiles = new HashMap<String, File>();
			
			String fext = StringUtil.getExtension(relpath);
			if (fext.equals("cps")) {
				File tempFolder = new File(dstFolder, relpath).getParentFile();
				try {
					tempFolder.mkdirs();
					BufferedImage img = readCPS(file, sourceImageSize.w, sourceImageSize.h);
					if (img == null) {
						return;
					}
					
					if (img.getHeight() > sourceImageSize.h) {
						String topPath = StringUtil.stripExtension(relpath) + ".png";
						File topF = new File(dstFolder, topPath);
						ImageIO.write(img.getSubimage(0, 0, img.getWidth(), sourceImageSize.h), "png", topF);
						tempFiles.put(topPath, topF);

						String middlePath = StringUtil.stripExtension(relpath) + "-middle.png";
						File middleF = new File(dstFolder, middlePath);
						ImageIO.write(img.getSubimage(0, (img.getHeight() - sourceImageSize.h)/2, img.getWidth(), sourceImageSize.h), "png", middleF);
						tempFiles.put(middlePath, middleF);
						
						String bottomPath = StringUtil.stripExtension(relpath) + "-bottom.png";
						File bottomF = new File(dstFolder, bottomPath);
						ImageIO.write(img.getSubimage(0, img.getHeight() - sourceImageSize.h, img.getWidth(), sourceImageSize.h), "png", bottomF);
						tempFiles.put(bottomPath, bottomF);
					} else {					
						File tempF = new File(dstFolder, StringUtil.replaceExt(relpath, "png"));
						ImageIO.write(img, "png", tempF);
						tempFiles.put(relpath, tempF);
					}
				} catch (IOException ioe) {
					if (!file.getParentFile().getName().equals("system")) {
						Log.w("Error reading image: " + relpath, ioe);
					}
					return;
				}
			} else {
				tempFiles.put(relpath, file);
			}
			
			for (Entry<String, File> entry : tempFiles.entrySet()) {
				String tempPath = entry.getKey();
				File tempF = entry.getValue();
				try {
					File newFile = ic.convertFile(tempF, dstFolder);
					if (newFile != null) {
						File newFile2 = new File(newFile.getParent(), StringUtil.replaceExt(tempPath.toLowerCase(), StringUtil.getExtension(newFile.getName())));
						newFile2.getParentFile().mkdirs();
						newFile.renameTo(newFile2);
					}
				} finally {
					if (tempF != file) tempF.delete();
				}
			}
		}
	}
	
	private static class AudioTask implements FileOp {

		private final File dstFolder;
		private final SoundConverter se;
		private final boolean pad;
		
		public AudioTask(File dstFolder, SoundConverter se, boolean pad) {
			this.dstFolder = dstFolder;
			this.se = se;
			this.pad = pad;
		}
		
		@Override
		public void execute(String relpath, File file) throws IOException {
			String name = file.getName();
			if (name.equals("thumbs.db") || name.equals("desktop.ini")) {
				return;
			}
			
			File tempF = new File(dstFolder, relpath+".wav");
			tempF.getParentFile().mkdirs();
			try {
				String fext = StringUtil.getExtension(name).toLowerCase();
				if (fext.equals("waf") || fext.equals("wav")) {
					file = WafToWav.convert(file, dstFolder);
					fext = StringUtil.getExtension(file.getName()).toLowerCase();
				}
				
				if (pad && fext.equals("ogg")) {
					file = VNSoundUtil.padAudioFile(file, tempF);
				}
				
				File newFolder = new File(dstFolder, relpath.substring(0, relpath.lastIndexOf('/')+1));
				File newFile = se.convertFile(file, newFolder);
				newFile.renameTo(new File(dstFolder, StringUtil.replaceExt(relpath.toLowerCase(), StringUtil.getExtension(newFile.getName()))));
			} finally {			
				tempF.delete();
			}
		}
	}
	
}
