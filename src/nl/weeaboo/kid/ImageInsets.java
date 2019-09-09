package nl.weeaboo.kid;

import java.awt.Dimension;
import java.awt.Insets;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Scanner;

import nl.weeaboo.common.Dim;
import nl.weeaboo.vnds.FileMapper;
import nl.weeaboo.vnds.Log;

public class ImageInsets {

	private Map<String, ImageData> imageData;
	
	public ImageInsets() {
		imageData = new HashMap<String, ImageData>();
	}
	
	//Functions
	public void load(File file, Dim targetImageSize) throws IOException {
		if (!file.exists()) {
			return;
		}
				
		Scanner scanner = new Scanner(file);
		scanner.useDelimiter("(\\s+|,)");
		
		while (scanner.hasNext()) {
			String fn = scanner.next();
			
			scanner.next(); //Skip '>' char
			
			Dimension d = new Dimension(scanner.nextInt(), scanner.nextInt());
			Insets i = new Insets(scanner.nextInt(), scanner.nextInt(), scanner.nextInt(), scanner.nextInt());
			ImageData id = new ImageData(i, d, targetImageSize);
			
			imageData.put(fn, id);
		}
		
		scanner.close();
	}
	public void save(File file) throws IOException {
		OutputStream fout = new BufferedOutputStream(new FileOutputStream(file));
		for (Entry<String, ImageData> entry : imageData.entrySet()) {			
			ImageData id = entry.getValue();
			
			fout.write(entry.getKey().getBytes("UTF-8"));
			fout.write(" > ".getBytes("UTF-8"));
			fout.write(String.format("%d,%d %d,%d,%d,%d", id.d.width, id.d.height,
					id.i.top, id.i.left, id.i.bottom, id.i.right).getBytes("UTF-8"));
			fout.write('\n');
		}
		fout.close();
	}
	
	public void rename(FileMapper fm) {
		Map<String, ImageData> newMap = new HashMap<String, ImageData>();
		for (Entry<String, ImageData> entry : imageData.entrySet()) {
			String hash = fm.getHashed(entry.getKey());
			if (hash != null) {
				newMap.put(hash, entry.getValue());
			} else {
				Log.w("Non-mapped filename: " + entry.getKey());
			}
		}
		
		imageData = newMap;
	}
	
	//Getters
	public ImageData get(String filename) {
		return imageData.get(filename);
	}
	
	//Setters
	public void set(String filename, ImageData i) {
		imageData.put(filename, i);
	}
	
	//Inner Classes
	public static class ImageData {
		
		private final Insets i;
		private final Dimension d;
		private final Insets dsi;
		private final Dimension dsd;
		
		public ImageData(Insets i, Dimension d, Dim targetImageSize) {
			this.i = i;
			this.d = d;
			
			float scale = Math.min(256f / targetImageSize.w, 192f / targetImageSize.h);
			
			dsd = new Dimension(Math.round(scale * d.width), Math.round(scale * d.height));
			dsi = new Insets(Math.round(scale * i.top), Math.round(scale * i.left),
					Math.round(scale * i.bottom), Math.round(scale * i.right));
		}
		
		public int imgx() { return i.left; }
		public int imgy() { return i.top; }
		public int imgw() { return d.width; }
		public int imgh() { return d.height; }
		
		public int dsx() { return dsi.left; }
		public int dsy() { return dsi.top; }
		public int dsw() { return dsd.width; }
		public int dsh() { return dsd.height; }
		
	}
	
}
