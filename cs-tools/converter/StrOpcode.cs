using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace converter {
   internal class StrOpcode {
      public readonly int id;
      public readonly int args;
      public readonly string name;

      public override string ToString() => name;

      public static readonly StrOpcode waitForClick = new(0x2);
      public static readonly StrOpcode clearText = new(0x3);
      public static readonly StrOpcode delay = new(0x4, 1);
      public static readonly StrOpcode appendText = new(0x5, 2);
      public static readonly StrOpcode choice = new(0xB, 1);
      public static readonly StrOpcode waitForSound = new(0xC, 0);
      public static readonly StrOpcode sound = new(0xD, 0);
      public static readonly StrOpcode marker = new(0xE, 0);
      public static readonly StrOpcode nextPage = new(0x10, 1);
      public static readonly StrOpcode bigChar = new(0x11, 0);

      private StrOpcode(int id) : this(id, 0) { }
      private StrOpcode(int id, int args, string name = null) {
         this.id = id;
         this.args = args;
         this.name = name;
      }

      static StrOpcode() {
         foreach (var opField in Values()) {
            var op = opField.GetValue(null) as StrOpcode;
            opField.SetValue(null, new StrOpcode(op.id, op.args, opField.Name));
         }
      }

      private static IEnumerable<FieldInfo> Values() {
         return typeof(StrOpcode)
            .GetFields(BindingFlags.Public | BindingFlags.Static)
            .Where(e => e.FieldType == typeof(StrOpcode))
            ;
      }

      //Fast lookup from ID to StrOpcode
      private static Dictionary<int, StrOpcode> idLookup;
      public static StrOpcode Get(int id) {
         if (idLookup == null) {
            idLookup = new Dictionary<int, StrOpcode>();
            foreach (FieldInfo opField in Values()) {
               var op = opField.GetValue(null) as StrOpcode;
               idLookup.Add(op.id, op);
            }
         }
         idLookup.TryGetValue(id, out StrOpcode strOpcode);
         return strOpcode;
      }

      //Fast lookup from String to StrOpcode
      private static Dictionary<string, StrOpcode> nameLookup;
      public static StrOpcode Get(string name) {
         if (nameLookup == null) {
            nameLookup = new Dictionary<string, StrOpcode>();
            foreach (FieldInfo opField in Values()) {
               var op = opField.GetValue(null) as StrOpcode;
               nameLookup.Add(op.ToString(), op);
            }
         }
         nameLookup.TryGetValue(name, out StrOpcode strOpcode);
         return strOpcode;
      }
   }
}
