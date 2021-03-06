package nl.weeaboo.vnds;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.logging.ConsoleHandler;
import java.util.logging.FileHandler;
import java.util.logging.Formatter;
import java.util.logging.Handler;
import java.util.logging.Level;
import java.util.logging.LogRecord;
import java.util.logging.Logger;
import java.util.logging.SimpleFormatter;

public final class Log {

   private static final Logger INSTANCE;
   private static Handler handler;
   private static Handler fileHandler;

   static {
      INSTANCE = Logger.getLogger("nl.weeaboo.vnds");
      INSTANCE.setUseParentHandlers(false);
      INSTANCE.setLevel(Level.CONFIG);

      initDefaultHandler();
   }

   public static Logger getLogger() {
      return INSTANCE;
   }

   public static void EnableFileHandler(String filePath) throws IOException {
      DisableFileHandler();
      fileHandler = new FileHandler(filePath, true);
      fileHandler.setLevel(Level.ALL);
      fileHandler.setFormatter(getFormatter());
      INSTANCE.addHandler(fileHandler);
   }

   public static void DisableFileHandler() {
      if (fileHandler != null) {
         INSTANCE.removeHandler(fileHandler);
         fileHandler.close();
         fileHandler = null;
      }
   }

   private static Formatter getFormatter() {
      return new Formatter() {
         @Override
         public String format(LogRecord record) {
            StringWriter sw = new StringWriter();
            PrintWriter pw = new PrintWriter(sw);

            String msg = record.getMessage();
            if (msg != null) {
               pw.println(msg);
            }

            Throwable t = record.getThrown();
            if (t != null) {
               t.printStackTrace(pw);
            }
            return sw.toString();
         }
      };
   }

   public static void initDefaultHandler() {
      if (handler != null) {
         INSTANCE.removeHandler(handler);
      }

      handler = new ConsoleHandler();
      handler.setLevel(Level.ALL);
      handler.setFormatter(getFormatter());
      INSTANCE.addHandler(handler);
   }

   public static void v(String message) {
      v(message, null);
   }

   public static void v(String message, Throwable t) {
      INSTANCE.logp(Level.CONFIG, null, null, message, t);
   }

   public static void fnf(String message) {
      fnf(message, null);
   }

   public static void fnf(String message, Throwable t) {
      INSTANCE.logp(Level.INFO, null, null, "FileNotFound: " + message, t);
   }

   public static void w(String message) {
      w(message, null);
   }

   public static void w(String message, Throwable t) {
      INSTANCE.logp(Level.WARNING, null, null, message, t);
   }

   public static void e(String message) {
      e(message, null);
   }

   public static void e(String message, Throwable t) {
      INSTANCE.logp(Level.SEVERE, null, null, message, t);
   }

}
