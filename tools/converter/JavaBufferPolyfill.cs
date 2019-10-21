using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace converter {
   internal static class JavaBufferPolyfill {
      private class State {
         internal long limit = 0;
         internal long mark = -1;
      }
      private static Dictionary<Stream, State> streamStore = new Dictionary<Stream, State>();
      internal static void SetUpPolyfill(this Stream stream, long limit = 0) {
         if (!streamStore.ContainsKey(stream)) {
            streamStore[stream] = new State() { limit = limit };
         }
      }
      internal static bool HasRemaining(this Stream stream) {
         return stream.Remaining() > 0;
      }
      internal static long Limit(this Stream stream) {
         return streamStore[stream].limit;
      }
      internal static Stream Limit(this Stream stream, long newLimit) {
         if ((newLimit < 0) || (newLimit > stream.Length))
            throw new ArgumentException();
         var state = streamStore[stream];
         if (newLimit < state.mark)
            state.mark = -1;
         if (stream.Position > newLimit)
            stream.Position = newLimit;
         state.limit = newLimit;
         return stream;
      }
      internal static Stream Mark(this Stream stream) {
         streamStore[stream].mark = stream.Position;
         return stream;
      }
      internal static long Remaining(this Stream stream) {
         return streamStore[stream].limit - stream.Position;
      }
      internal static Stream Reset(this Stream stream) {
         var state = streamStore[stream];
         if (state.mark == -1)
            throw new IndexOutOfRangeException();
         stream.Position = state.mark;
         return stream;
      }
      internal static Stream Rewind(this Stream stream) {
         streamStore[stream].mark = -1;
         stream.Position = 0;
         return stream;
      }

   }
}
