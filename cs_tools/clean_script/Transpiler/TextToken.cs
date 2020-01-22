using System.Diagnostics;

[DebuggerDisplay("{DebugValue}")]
class TextToken {
   private string DebugValue {
      get {
         if (Name == "Text") {
            return $"{CharaName}`{Text}`";
         } else {
            return $"{Name}({Kits.Params2Str(Params)})";
         }
      }
   }
   public string Name = "";
   public object[] Params = new object[0];
   public string CharaName = "";
   public string Text = "";
}