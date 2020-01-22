using System.Collections.Generic;

class Label {
   public static List<string> Resolve(List<string> outputLines, Dictionary<int, string> labelSet, HashSet<string> usedLabelSet) {
      var rs = new List<string>();
      for (var i = 0; i < outputLines.Count; i++) {
         labelSet.TryGetValue(i, out string label);
         if (usedLabelSet.Contains(label))
            rs.Add("let lbl_" + label + ";");
         if (outputLines[i] != "-")
            rs.Add(outputLines[i]);
      }
      return rs;
   }
}