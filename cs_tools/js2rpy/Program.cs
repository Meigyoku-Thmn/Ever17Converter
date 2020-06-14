using System;
using System.Collections.Generic;
using System.Dynamic;
using System.IO;
using System.Linq;
using Esprima;
using Esprima.Ast;

namespace js2rpy {
   class Program {
      static string inputDir = "../../output/script_js";
      static string outputDir = "../../renpyprj/game/scripts";
      static string tab = "   ";
      static void Main(string[] args) {
         var jsFiles = Directory.GetFiles(inputDir)
            .Where(e => e.EndsWith(".js"))
            .OrderBy(e => e)
            ;
         foreach (var jsFileName in jsFiles) {
            Console.WriteLine(jsFileName);
            var basename = Path.GetFileNameWithoutExtension(jsFileName);
            var outputLines = new List<string>() { $"label {basename}:" };
            Position? lastPos = null;
            try {
               var scriptContent = File.ReadAllText(jsFileName);
               var jsParser = new JavaScriptParser(scriptContent, new ParserOptions() { Loc = true });
               var ast = jsParser.ParseProgram();
               foreach (var node in ast.Body) {
                  var pos = node.Location.Start;
                  lastPos = pos;
                  void ThrowUnk() {
                     throw new InvalidSyntaxException($"Invalid statement at {jsFileName}:{pos.Line}:{pos.Column}");
                  };
                  switch (node) {
                     case ExpressionStatement exprNode: {
                        var _node = exprNode.Expression;
                        switch (_node) {
                           case AssignmentExpression _assiNode: {
                              var assignee = (_assiNode.Left as Identifier).Name;
                              var @operator = _assiNode.Operator.GetEnumMemberValue();
                              var assignedValue = (_assiNode.Right as Literal).Raw;
                              outputLines.Add($"{tab}$ {assignee} {@operator} {assignedValue}");
                              break;
                           }
                           case CallExpression _callNode: {
                              var callee = (_callNode.Callee as Identifier).Name;
                              switch (callee) {
                                 case "delay": {
                                    var namedArgs = (_callNode.Arguments[0] as ObjectExpression).ToExpandoObj();
                                    outputLines.Add($"{tab}$ renpy.pause(delay={namedArgs.interval / 60.0})");
                                    break;
                                 }
                                 case "removeBG": {
                                    // TODO: transition
                                    var namedArgs = (_callNode.Arguments[0] as ObjectExpression).ToExpandoObj();
                                    outputLines.Add($"{tab}show bg {namedArgs.mode.ToLower()}");
                                    break;
                                 }
                                 case "setSceneTitle": {
                                    var namedArgs = (_callNode.Arguments[0] as ObjectExpression).ToExpandoObj();
                                    outputLines.Add($"{tab}$ setSceneTitle(index={namedArgs.index})");
                                    break;
                                 }
                                 case "setDialogBoxColor": {
                                    var color = (_callNode.Arguments[0] as Identifier).Name;
                                    outputLines.Add($"{tab}$ setDialogBoxColor('{color}')");
                                    break;
                                 }
                                 case "showTextbox": {
                                    outputLines.Add($"{tab}window show");
                                    break;
                                 }
                                 case "hideTextbox": {
                                    outputLines.Add($"{tab}window hide");
                                    break;
                                 }
                                 case "text": {
                                    // TODO: implement text
                                    outputLines.Add("# text <Not Implement>");
                                    break;
                                 }
                                 default: ThrowUnk(); break;
                              }
                              break;
                           }
                           default: ThrowUnk(); break;
                        }
                        break;
                     }
                     case IfStatement ifNode: {
                        var test = ifNode.Test as BinaryExpression;
                        var @operator = test.Operator.GetEnumMemberValue();
                        var left = (test.Left as Identifier).Name;
                        var right = (test.Right as Literal).Raw;
                        var jmp = ((ifNode.Consequent as ExpressionStatement).Expression as CallExpression);
                        var label = (jmp.Arguments[0] as Identifier).Name;
                        outputLines.Add($"{tab}jump .{label}");
                        break;
                     }
                     default: ThrowUnk(); break;
                  }
               };
            } catch (InvalidSyntaxException e) {
               Console.Error.WriteLine(e);
               break;
            } catch (Exception e) {
               if (lastPos != null)
                  Console.Error.WriteLine(new Exception(
                     $"Unknown error at {jsFileName}:{lastPos.Value.Line}:{lastPos.Value.Column}",
                     e
                  ));
               else Console.Error.WriteLine(e);
            } finally {
               File.WriteAllLines(Path.Combine(outputDir, basename + ".rpy"), outputLines);
            }
         };
      }
   }
}
