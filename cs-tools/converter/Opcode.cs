using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace converter {
   internal class Opcode {
      public readonly int id;
      public readonly int args;
      public readonly string name;

      public override string ToString() => name;

      public static readonly Opcode end = new(0x0, 0);
      public static readonly Opcode jump = new(0x1, 1);
      public static readonly Opcode playBGM = new(0x3, 2);
      public static readonly Opcode stopBGM = new(0x4, 0);
      public static readonly Opcode playSFX = new(0x5, 3);
      public static readonly Opcode stopSFX = new(0x6, 0);
      public static readonly Opcode waitForSFX = new(0x7, 0);
      public static readonly Opcode playVoice = new(0x8, 1);
      public static readonly Opcode unknown09 = new(0x9, 0);
      public static readonly Opcode gotoif = new(0xa, 0);
      public static readonly Opcode bgload = new(0xc, 5);
      public static readonly Opcode removeBG = new(0xd, 3);
      public static readonly Opcode fgload = new(0xf, 5);
      public static readonly Opcode removeFG = new(0x10, 2);
      public static readonly Opcode multifgload2 = new(0x12, 9);
      public static readonly Opcode multiremoveFG = new(0x13, 2);
      public static readonly Opcode setFGOrder_Unk = new(0x14, 3);
      public static readonly Opcode makeFGSomething = new(0x15, 2);
      public static readonly Opcode multifgload3 = new(0x16, 10);
      public static readonly Opcode hideTextbox = new(0x18, 0);
      public static readonly Opcode showTextbox = new(0x19, 0);
      public static readonly Opcode choiceId = new(0x1A, 2); //Uniquely identifies a choice?
      public static readonly Opcode chapterCutin = new(0x1D, 2);
      public static readonly Opcode delay = new(0x1E, 1);
      public static readonly Opcode clock = new(0x1F, 2);
      public static readonly Opcode openAnim = new(0x20, 1);
      public static readonly Opcode closeAnim = new(0x21, 1);
      public static readonly Opcode scriptLocationId = new(0x24, 1); //Uniquely identifies a line in a script
      public static readonly Opcode _switch = new(0x26, 1);
      public static readonly Opcode bgload_keepFg = new(0x27, 1);
      public static readonly Opcode _switch3 = new(0x28, 1);
      public static readonly Opcode unknown2b = new(0x2b, 1);
      public static readonly Opcode unlockCG = new(0x37, 2);
      public static readonly Opcode playMovie = new(0x39, 1);
      public static readonly Opcode unknown3a = new(0x3a, 0);
      public static readonly Opcode unknown3b = new(0x3b, 1);
      public static readonly Opcode unknown3c = new(0x3c, 0);
      public static readonly Opcode bgloadCrop = new(0x40, 8);
      public static readonly Opcode tweenZoom = new(0x41, 5);
      public static readonly Opcode unknown43 = new(0x43, 1);
      public static readonly Opcode monoColorOverlay = new(0x45, 2);
      public static readonly Opcode setDialogBoxColor = new(0x46, 1);
      public static readonly Opcode varop = new(0xFE, 0);
      public static readonly Opcode text = new(0xFF, 1);

      private Opcode(int id) : this(id, 0) { }
      private Opcode(int id, int args, string name = null) {
         this.id = id;
         this.args = args;
         this.name = name;
      }

      static Opcode() {
         foreach (var opField in Values()) {
            var op = opField.GetValue(null) as Opcode;
            opField.SetValue(null, new Opcode(op.id, op.args, opField.Name));
         }
      }

      public static Dictionary<int, string> rest = new() {
         { 0x05, "unSkippableDelay" },
         { 0x27, "fadeOutMonoColorOverlay" },
         { 0x28, "l_unk28" },
         { 0x19, "l_unk19" },
         { 0x12, "l_unk12" },
         { 0x13, "l_unk13" },
         { 0x06, "l_unk06" },
         { 0x0d, "l_unk0d" },
         { 0x15, "l_unk15" }
      };

      private static IEnumerable<FieldInfo> Values() {
         return typeof(Opcode)
            .GetFields(BindingFlags.Public | BindingFlags.Static)
            .Where(e => e.FieldType == typeof(Opcode))
            ;
      }

      //Fast lookup from ID to Opcode
      private static Dictionary<int, Opcode> idLookup;
      public static Opcode Get(int id) {
         if (idLookup == null) {
            idLookup = new Dictionary<int, Opcode>();
            foreach (FieldInfo opField in Values()) {
               var op = opField.GetValue(null) as Opcode;
               idLookup.Add(op.id, op);
            }
         }
         idLookup.TryGetValue(id, out Opcode opcode);
         return opcode;
      }

      //Fast lookup from String to Opcode
      private static Dictionary<string, Opcode> nameLookup;
      public static Opcode Get(string name) {
         if (nameLookup == null) {
            nameLookup = new Dictionary<string, Opcode>();
            foreach (FieldInfo opField in Values()) {
               var op = opField.GetValue(null) as Opcode;
               nameLookup.Add(op.ToString(), op);
            }
         }
         nameLookup.TryGetValue(name, out Opcode opcode);
         return opcode;
      }
   }
}
