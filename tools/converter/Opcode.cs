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

      public static readonly Opcode end = new Opcode(0x0, 0);
      public static readonly Opcode jump = new Opcode(0x1, 1);
      public static readonly Opcode playBGM = new Opcode(0x3, 2);
      public static readonly Opcode stopBGM = new Opcode(0x4, 0);
      public static readonly Opcode playSFX = new Opcode(0x5, 3);
      public static readonly Opcode stopSFX = new Opcode(0x6, 0);
      public static readonly Opcode waitForSFX = new Opcode(0x7, 0);
      public static readonly Opcode playVoice = new Opcode(0x8, 1);
      public static readonly Opcode unknown09 = new Opcode(0x9, 0);
      public static readonly Opcode gotoif = new Opcode(0xa, 0);
      public static readonly Opcode bgload = new Opcode(0xc, 5);
      public static readonly Opcode removeBG = new Opcode(0xd, 3);
      public static readonly Opcode fgload = new Opcode(0xf, 5);
      public static readonly Opcode removeFG = new Opcode(0x10, 2);
      public static readonly Opcode multifgload2 = new Opcode(0x12, 9);
      public static readonly Opcode multiremoveFG = new Opcode(0x13, 2);
      public static readonly Opcode setFGOrder_Unk = new Opcode(0x14, 3);
      public static readonly Opcode makeFGSomething = new Opcode(0x15, 2);
      public static readonly Opcode multifgload3 = new Opcode(0x16, 10);
      public static readonly Opcode hideTextbox = new Opcode(0x18, 0);
      public static readonly Opcode showTextbox = new Opcode(0x19, 0);
      public static readonly Opcode choiceId = new Opcode(0x1A, 2); //Uniquely identifies a choice?
      public static readonly Opcode chapterCutin = new Opcode(0x1D, 2);
      public static readonly Opcode delay = new Opcode(0x1E, 1);
      public static readonly Opcode clock = new Opcode(0x1F, 2);
      public static readonly Opcode openAnim = new Opcode(0x20, 1);
      public static readonly Opcode closeAnim = new Opcode(0x21, 1);
      public static readonly Opcode scriptLocationId = new Opcode(0x24, 1); //Uniquely identifies a line in a script
      public static readonly Opcode _switch = new Opcode(0x26, 1);
      public static readonly Opcode bgload_keepFg = new Opcode(0x27, 1);
      public static readonly Opcode _switch3 = new Opcode(0x28, 1);
      public static readonly Opcode unknown2b = new Opcode(0x2b, 1);
      public static readonly Opcode unlockCG = new Opcode(0x37, 2);
      public static readonly Opcode playMovie = new Opcode(0x39, 1);
      public static readonly Opcode unknown3a = new Opcode(0x3a, 0);
      public static readonly Opcode unknown3b = new Opcode(0x3b, 1);
      public static readonly Opcode unknown3c = new Opcode(0x3c, 0);
      public static readonly Opcode bgloadCrop = new Opcode(0x40, 8);
      public static readonly Opcode tweenZoom = new Opcode(0x41, 5);
      public static readonly Opcode unknown43 = new Opcode(0x43, 1);
      public static readonly Opcode monoColorOverlay = new Opcode(0x45, 2);
      public static readonly Opcode setDialogBoxColor = new Opcode(0x46, 1);
      public static readonly Opcode varop = new Opcode(0xFE, 0);
      public static readonly Opcode text = new Opcode(0xFF, 1);

      private Opcode(int id) : this(id, 0) { }
      private Opcode(int id, int args) {
         this.id = id;
         this.args = args;
      }

      public static Dictionary<int, string> rest = new Dictionary<int, string>() {
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

      private static IEnumerable<Opcode> Values() {
         return typeof(Opcode)
            .GetFields(BindingFlags.Public | BindingFlags.Static)
            .Where(e => e.FieldType == typeof(Opcode))
            .Select(e => (Opcode)e.GetValue(null))
            ;
      }

      //Fast lookup from ID to Opcode
      private static Dictionary<int, Opcode> idLookup;
      public static Opcode Get(int id) {
         if (idLookup == null) {
            idLookup = new Dictionary<int, Opcode>();
            foreach (Opcode op in Values()) {
               idLookup.Add(op.id, op);
            }
         }
         return idLookup[id];
      }

      //Fast lookup from String to Opcode
      private static Dictionary<string, Opcode> nameLookup;
      public static Opcode Get(string name) {
         if (nameLookup == null) {
            nameLookup = new Dictionary<string, Opcode>();
            foreach (Opcode op in Values()) {
               nameLookup.Add(op.ToString(), op);
            }
         }
         return nameLookup[name];
      }
   }
}
