using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace extractor {
   // https://stackoverflow.com/a/34801225/5404503
   public class DirectBitmap : IDisposable {
      public Bitmap Bitmap { get; private set; }
      public int[] Bits { get; private set; }
      public bool Disposed { get; private set; }
      public int Height { get; private set; }
      public int Width { get; private set; }

      protected GCHandle BitsHandle { get; private set; }

      public DirectBitmap(int width, int height) {
         Width = width;
         Height = height;
         Bits = new int[width * height];
         BitsHandle = GCHandle.Alloc(Bits, GCHandleType.Pinned);
         Bitmap = new Bitmap(width, height, width * 4, PixelFormat.Format32bppArgb, BitsHandle.AddrOfPinnedObject());
      }

      public void SetPixel(int x, int y, Color colour) {
         int index = x + (y * Width);
         var col = (uint)colour.ToArgb();

         if (!BitConverter.IsLittleEndian)
            col = (col & 0x000000FFU) << 24 | (col & 0x0000FF00U) << 8 | (col & 0x00FF0000U) >> 8 | (col & 0xFF000000U) >> 24;
         Bits[index] = (int)col;
      }

      public Color GetPixel(int x, int y) {
         int index = x + (y * Width);
         var col = (uint)Bits[index];

         if (!BitConverter.IsLittleEndian)
            col = (col & 0x000000FFU) << 24 | (col & 0x0000FF00U) << 8 | (col & 0x00FF0000U) >> 8 | (col & 0xFF000000U) >> 24;

         Color result = Color.FromArgb((int)col);
         return result;
      }

      public void Dispose() {
         if (Disposed) return;
         Disposed = true;
         Bitmap.Dispose();
         BitsHandle.Free();
      }
   }

}
