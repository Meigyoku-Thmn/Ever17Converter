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

      public static readonly StrOpcode waitForClick = new StrOpcode(0x2);
      public static readonly StrOpcode clearText = new StrOpcode(0x3);
      public static readonly StrOpcode delay = new StrOpcode(0x4, 1);
      public static readonly StrOpcode appendText = new StrOpcode(0x5, 2);
      public static readonly StrOpcode choice = new StrOpcode(0xB, 1);
      public static readonly StrOpcode waitForSound = new StrOpcode(0xC, 0);
      public static readonly StrOpcode sound = new StrOpcode(0xD, 0);
      public static readonly StrOpcode marker = new StrOpcode(0xE, 0);
      public static readonly StrOpcode nextPage = new StrOpcode(0x10, 1);
      public static readonly StrOpcode bigChar = new StrOpcode(0x11, 0);

      private StrOpcode(int id) : this(id, 0) { }
      private StrOpcode(int id, int args) {
         this.id = id;
         this.args = args;
      }

      private static IEnumerable<StrOpcode> Values() {
         return typeof(StrOpcode)
            .GetFields(BindingFlags.Public | BindingFlags.Static)
            .Where(e => e.FieldType == typeof(StrOpcode))
            .Select(e => (StrOpcode)e.GetValue(null))
            ;
      }

      //Fast lookup from ID to StrOpcode
      private static Dictionary<int, StrOpcode> idLookup;
      public static StrOpcode Get(int id) {
         if (idLookup == null) {
            idLookup = new Dictionary<int, StrOpcode>();
            foreach (StrOpcode op in Values()) {
               idLookup.Add(op.id, op);
            }
         }
         return idLookup[id];
      }

      //Fast lookup from String to StrOpcode
      private static Dictionary<string, StrOpcode> nameLookup;
      public static StrOpcode Get(string name) {
         if (nameLookup == null) {
            nameLookup = new Dictionary<string, StrOpcode>();
            foreach (StrOpcode op in Values()) {
               nameLookup.Add(op.ToString(), op);
            }
         }
         return nameLookup[name];
      }
   }
}
