using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.CompilerServices;


namespace extractor {
   static class Bit {
      public static uint ToUInt32(this byte[] arr) {
         return (uint)arr.ToInt32();
      }
      public unsafe static int ToInt32(this byte[] arr) {
         fixed (byte* ptr = &arr[0]) {
            return *ptr | ptr[1] << 8 | ptr[2] << 16 | ptr[3] << 24;
         }
      }
   }
   static class S {
      [MethodImpl(MethodImplOptions.AggressiveInlining)]
      public static int Size(this byte o) => sizeof(byte);
      [MethodImpl(MethodImplOptions.AggressiveInlining)]
      public static int Size(this sbyte o) => sizeof(sbyte);
      [MethodImpl(MethodImplOptions.AggressiveInlining)]
      public static int Size(this short o) => sizeof(short);
      [MethodImpl(MethodImplOptions.AggressiveInlining)]
      public static int Size(this ushort o) => sizeof(ushort);
      [MethodImpl(MethodImplOptions.AggressiveInlining)]
      public static int Size(this int o) => sizeof(int);
      [MethodImpl(MethodImplOptions.AggressiveInlining)]
      public static int Size(this uint o) => sizeof(uint);
      [MethodImpl(MethodImplOptions.AggressiveInlining)]
      public static int Size(this long o) => sizeof(long);
      [MethodImpl(MethodImplOptions.AggressiveInlining)]
      public static int Size(this ulong o) => sizeof(ulong);
   }
}
