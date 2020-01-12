using NiL.JS;
using NiL.JS.BaseLibrary;
using NiL.JS.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Js2Rpy {
   class Program {
      static readonly string _code = @"
         var a = 1;
         var b = 2;
         var c = a + b;
         var d = () => console.log('Hello World'); 
         var e = function() {
            var f = 'Hello';
         }
         d();
         e();
         console.log(c);
      ";
      static void Main(string[] args) {
         var module = new Module(_code);

         module.Context.DebuggerCallback += Context_DebuggerCallback;
         module.Context.Debugging = true;

         module.Run();
      }
      public sealed class ContextDebuggerProxy {
         private readonly Context _context;

         public ContextDebuggerProxy(Context context) {
            _context = context;
         }
         public IEnumerable<KeyValuePair<string, JSValue>> Variables {
            get {
               var result = new List<KeyValuePair<string, JSValue>>();
               foreach (var key in _context) {
                  result.Add(new KeyValuePair<string, JSValue>(key, _context.GetVariable(key)));
               }
               return result.ToArray();
            }
         }
      }
      static void Context_DebuggerCallback(Context sender, DebuggerCallbackEventArgs e) {
         Console.Clear();
         var foreColor = Console.ForegroundColor;
         var backColor = Console.BackgroundColor;
         for (var i = 0; i < _code.Length; i++) {
            if (i >= e.Statement.Position && i <= e.Statement.EndPosition) {
               Console.BackgroundColor = ConsoleColor.Yellow;
               Console.ForegroundColor = ConsoleColor.Black;
            }
            else {
               Console.ForegroundColor = foreColor;
               Console.BackgroundColor = ConsoleColor.Black;
            }

            Console.Write(_code[i]);
         }
         Console.BackgroundColor = backColor;
         Console.ForegroundColor = foreColor;


         try {
            Console.WriteLine();

            Console.WriteLine("Variables:");
            Console.WriteLine(string.Join(Environment.NewLine, new ContextDebuggerProxy(sender).Variables.Select(x => x.Key + ": " + x.Value)));

            Console.WriteLine();
            Console.WriteLine("Output:");
         }
         catch (Exception) { }

         while (Console.ReadKey().Key != ConsoleKey.Spacebar) ;
      }
   }
}
