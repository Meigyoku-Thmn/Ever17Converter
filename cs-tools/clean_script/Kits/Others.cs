using System;
using System.Collections.Generic;
using System.Linq;

static partial class Kits {
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
   public static IList<int> AllIndexOf(this string text, string str, StringComparison comparisonType = StringComparison.CurrentCulture) {
      IList<int> allIndexOf = new List<int>();
      int index = text.IndexOf(str, comparisonType);
      while (index != -1) {
         allIndexOf.Add(index);
         index = text.IndexOf(str, index + str.Length, comparisonType);
      }
      return allIndexOf;
   }
}