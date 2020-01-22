using System.Linq;

partial class Kits {
   public static string EscapeBackTick(string input) {
      return input.Replace("`", "\\`");
   }

   public static string Params2Str(object[] @params) {
      return string.Join(",", @params.Select(e => {
         if (e is int) return e;
         if (Config.codeProvider.IsValidIdentifier(e.ToString()))
            return e;
         throw new InvalidSyntaxException($"Invalid Indentifier '{e}'");
      }));
   }
}