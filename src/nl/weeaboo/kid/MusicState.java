package nl.weeaboo.kid;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Map.Entry;

import nl.weeaboo.common.StringUtil;
import nl.weeaboo.vnds.FileExts;
import nl.weeaboo.vnds.ResourcesUsed;

public class MusicState {

	private final ResourcesUsed resUsed;
	private final FileExts fileExts;
	
	private boolean dirty;
	private Map<Integer, String> music;
	
	public MusicState(ResourcesUsed used, FileExts exts) {
		resUsed = used;
		fileExts = exts;
		
		dirty = true;
		music = new LinkedHashMap<Integer, String>();
	}
	public MusicState(MusicState m) {
		this(m.resUsed, m.fileExts);
		
		dirty = m.dirty;
		music.putAll(m.music);
	}
	
	//Functions
	public MusicState copy() {
		return new MusicState(this);
	}
	
	public String flush() {
		dirty = false;
		
		int ch = getActiveChannel();
		if (music.isEmpty() || !music.containsKey(ch)) {
			return "music ~";
		}		
		return "music " + music.get(ch);
	}
	
	public void start(int ch, String filename) {
		filename = toMusicFilename(filename);
		resUsed.setMusicUsed(filename);
		
		if (!filename.equals(music.get(ch))) {
			dirty = true;
			
			music.put(ch, filename);
			//Log.v("Start music: "+ ch);			
		}
	}
	
	public void stop(int ch) {
		dirty = (getActiveChannel() == ch);
		
		String removed = music.remove(ch);
		if (removed == null) {
			//Log.v("Stopping non-existant music: " + ch);
		} else {
			//Log.v("Stop music: " + ch);
		}
	}
	
	protected String toMusicFilename(String filename) {
		return StringUtil.replaceExt(filename.toLowerCase(), fileExts.music);
	}
		
	//Getters
	public int getActiveChannel() {
		int best = 1;
		for (Entry<Integer, String> entry : music.entrySet()) {
			int ch = entry.getKey();
			best = ch;
		}
		return best;
	}
	
	public boolean isDirty() {
		return dirty;
	}
	
	//Setters
	
}
