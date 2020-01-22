using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Transpiler {
   public static void Run() {
      Directory.CreateDirectory(Config.outputDirPath);
      var filePaths = Directory.GetFiles(Config.inputDirPath, "*.dec", SearchOption.TopDirectoryOnly).OrderBy(e => e);
      foreach (var filePath in filePaths) {
         var state = new State() {
            textMode = TextMode.ADV,
            dialogNotCompleted = false,
            lastCharaName = "Narr",
         };

         var lines = File.ReadAllLines(filePath);
         var outputLines = new List<string>();
         var usedLabelSet = new HashSet<string>();
         var labelSet = new Dictionary<int, string>();
         try {
            for (var i = 0; i < lines.Length; i++) {
               var line = lines[i];
               var label = "";
               var line2 = Config.strip1.Replace(line, (m) => {
                  label = m.Groups[1].Value;
                  return "";
               });
               if (label == "") throw new InvalidSyntaxException($"Invalid [label] syntax at line {i + 1} of file '{filePath}'");
               if (line2 == line) throw new InvalidSyntaxException($"Invalid statement syntax at line {i + 1} of file '{filePath}'");
               var tokens = line2.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
               labelSet[outputLines.Count] = label;
               Instruction.Resolve(state, filePath, tokens, ref i, lines, outputLines, usedLabelSet);
            }
         } catch (Exception) {
            File.WriteAllLines(
               Path.Combine(Config.outputDirPath, Path.GetFileNameWithoutExtension(filePath) + ".js"), Label.Resolve(outputLines, labelSet, usedLabelSet));
            throw;
         }
         File.WriteAllLines(
            Path.Combine(Config.outputDirPath, Path.GetFileNameWithoutExtension(filePath) + ".js"), Label.Resolve(outputLines, labelSet, usedLabelSet));
      }
   }
}