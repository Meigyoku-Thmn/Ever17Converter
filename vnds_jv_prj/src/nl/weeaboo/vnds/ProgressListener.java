package nl.weeaboo.vnds;

public interface ProgressListener {

   //Functions
   /**
    * @param value
    * @param max Maximum progress, <code>-1</code> if unknown.
    * @param message
    */
   public void onProgress(int value, int max, String message);

   public void onFinished(String message);

   //Getters
   //Setters
}
