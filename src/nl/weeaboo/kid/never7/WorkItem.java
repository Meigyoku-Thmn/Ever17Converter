package nl.weeaboo.kid.never7;

import java.io.File;

import nl.weeaboo.kid.MusicState;
import nl.weeaboo.vnds.Log;

public class WorkItem implements Comparable<WorkItem> {

	private final String relpath;
	private final File file;
	private final boolean isMainScript;
	
	private Never7GraphicsState gstate;
	private MusicState mstate;
	
	public WorkItem(String relpath, File file, boolean isMainScript) {
		this.relpath = relpath;
		this.file = file;
		this.isMainScript = isMainScript;
	}
	
	public String getRelpath() { return relpath; }
	public File getFile() { return file; }
	public Never7GraphicsState getGraphicsState() { return gstate; }
	public MusicState getMusicState() { return mstate; }
	
	public void setGraphicsState(Never7GraphicsState gs) {
		if (gstate != gs) {			
			if (gstate != null) {
				Log.v("Setting a workitem's graphics state multiple times");
			}
			gstate = gs;
		}
	}
	
	public void setMusicState(MusicState ms) {
		if (mstate != ms) {			
			if (mstate != null) {
				Log.v("Setting a workitem's music state multiple times");
			}				
			mstate = ms;
		}
	}

	@Override
	public int compareTo(WorkItem i) {
		if (isMainScript && !i.isMainScript) {
			return -1;
		} else if (!isMainScript && i.isMainScript) {
			return 1;
		}
		
		if (gstate != null && i.gstate == null) {
			return -1;
		} else if (gstate == null && i.gstate != null) {
			return 1;
		}
		
		return relpath.compareTo(i.relpath);
	}
	
	@Override
	public String toString() {
		return "WorkItem " + relpath;
	}
}
