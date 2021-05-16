using System.Collections.Generic;

class State {
   public TextMode textMode = TextMode.ADV;
   public bool dialogCompleted = true;
   public HashSet<string> switchLabelSet = new HashSet<string>();
}