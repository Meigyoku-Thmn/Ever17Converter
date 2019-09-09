package nl.weeaboo.kid.never7;

import java.util.PriorityQueue;

import nl.weeaboo.vnds.Log;

public abstract class WorkManager {

	private final PriorityQueue<WorkItem> workQueue;

	public WorkManager() {
		workQueue = new PriorityQueue<WorkItem>();
	}
	
	//Functions
	public void reset() {
		workQueue.clear();
	}
	
	public void addWorkItem(WorkItem item) {
		workQueue.add(item);
	}
	
	public boolean removeWorkItem(WorkItem item) {
		return workQueue.remove(item);
	}
	
	public WorkItem peekNextWorkItem() {
		return workQueue.peek();
	}
	
	//Getters
	protected void onWorkItemChanged(WorkItem item) {
		if (workQueue.remove(item)) {
			workQueue.add(item);
		}
	}
	
	protected WorkItem getWorkItem(String relpath, boolean warn) {
		for (WorkItem wi : workQueue) {
			if (wi.getRelpath().equals(relpath)) {
				return wi;
			}
		}
		if (warn) {
			Log.v("Couldn't find work item: " + relpath);
		}
		return null;
	}
	
	//Setters
}
