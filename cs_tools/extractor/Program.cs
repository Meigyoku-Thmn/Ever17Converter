using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace extractor {
   class Program {
      private class Item {
         public readonly string Name;
         public readonly int Mode;
         public Item(string Name, int Mode = -1) {
            this.Name = Name; this.Mode = Mode;
         }
      }
      static readonly Item[] files = new Item[] {
         new Item("bg.dat"),
         new Item("bgm.dat"),
         new Item("chara.dat"),
         new Item("saver.dat", 2),
         new Item("se.dat"),
         new Item("system.dat"),
         new Item("sysvoice.dat", 0),
         new Item("voice.dat"),
         new Item("wallpaper.dat", 1),
      };
      static void Main(string[] args) {
         string src = args[0];
         string dst = args[1];

         var srcAttr = File.GetAttributes(src);
         if ((srcAttr & FileAttributes.Directory) != 0)
            ExtractFolder(
               new DirectoryInfo(src),
               new DirectoryInfo(dst)
            );
         else DAT.Extract(
            new FileInfo(src),
            new DirectoryInfo(Path.Combine(dst, Path.GetFileNameWithoutExtension(src))),
            files.FirstOrDefault(e => e.Name == Path.GetFileName(src))?.Mode ?? -1
         );
      }

      public static void ExtractFolder(DirectoryInfo srcF, DirectoryInfo dstF) {
         foreach (var item in files) {
            var file = new FileInfo(Path.Combine(srcF.FullName, item.Name));
            DAT.Extract(file, new DirectoryInfo(Path.Combine(dstF.FullName, Path.GetFileNameWithoutExtension(file.Name))), item.Mode);
         }
      }
   }
}
