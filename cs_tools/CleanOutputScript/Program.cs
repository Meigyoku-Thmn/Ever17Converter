using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace CleanOutputScript {
   class Program {
      static readonly string inputDirPath = @"\Ever17Converter\output\script";
      static readonly string outputDirPath = @"\Ever17Converter\output\script_js";
      static readonly Regex strip1 = new Regex(@"^\[(.+?)\].+?: +", RegexOptions.Compiled);
      static readonly Regex standard1 = new Regex(@"{(.+?)}");
      static void Main(string[] args) {
         Directory.CreateDirectory(outputDirPath);
         var filePaths = Directory.GetFiles(inputDirPath, "*.dec", SearchOption.TopDirectoryOnly);
         foreach (var filePath in filePaths) {
            var lines = File.ReadAllLines(filePath);
            var outputLines = new List<string>();
            var usedLabelSet = new HashSet<string>();
            var labelSet = new Dictionary<int, string>();
            List<string> ResolveLabel() {
               var rs = new List<string>();
               for (var i = 0; i < outputLines.Count; i++) {
                  labelSet.TryGetValue(i, out string label);
                  if (usedLabelSet.Contains(label))
                     rs.Add("let lbl_" + label + ";");
                  rs.Add(outputLines[i]);
               }
               return rs;
            }
            for (var i = 0; i < lines.Length; i++) {
               var line = lines[i];
               var label = "";
               var line2 = strip1.Replace(line, (m) => {
                  label = m.Groups[1].Value;
                  return "";
               });
               if (label == "") throw new Exception($"Invalid [label] syntax at line {i + 1} of file '{filePath}'");
               if (line2 == line) throw new Exception($"Invalid statement syntax at line {i + 1} of file '{filePath}'");
               var tokens = line2.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
               labelSet[outputLines.Count] = label;
               try {
                  Resolve(filePath, tokens, ref i, lines, outputLines, usedLabelSet);
               }
               catch (Exception e) {
                  File.WriteAllLines(
                     Path.Combine(outputDirPath, Path.GetFileNameWithoutExtension(filePath) + ".js"), ResolveLabel());
                  throw e;
               }
            }
            File.WriteAllLines(
               Path.Combine(outputDirPath, Path.GetFileNameWithoutExtension(filePath) + ".js"), ResolveLabel());
         }
      }
      static void Resolve(string filePath, string[] tokens, ref int i, string[] lines, List<string> outputLines, HashSet<string> usedLabelSet) {
         if (tokens.Length == 0) {
            outputLines.Add("");
            return;
         }
         var inputLine = i;
         switch (tokens[0]) {
            case "varop": {
               var unk = string.Join(" ", tokens.Skip(1));
               outputLines.Add($"varop(`{unk}`)");
               break;
            }
            case "delay": {
               var interval = tokens[1];
               outputLines.Add($"delay({{interval: {interval}}})");
               break;
            }
            case "removeBG": {
               string mode = (tokens[1] == "1" ? "white" : tokens[1] == "0" ? "black" : null).ToUpper();
               string transition = tokens[2] + tokens[3];
               outputLines.Add($"removeBG({{mode: {mode}, transition: {transition}}})");
               break;
            }
            case "setSceneTitleByIndex": {
               var index = tokens[1];
               outputLines.Add($"setSceneTitle({{index: {index}}})");
               break;
            }
            case "l_unk28": {
               outputLines.Add("l_unk28()");
               break;
            }
            case "setDialogBoxColor": {
               var color = tokens[1].ToUpper();
               outputLines.Add($"setDialogBoxColor({color})");
               break;
            }
            case "showTextbox": {
               outputLines.Add("showTextbox()");
               break;
            }
            case "text": {
               ResolveText(filePath, tokens, ref i, lines, outputLines);
               break;
            }
            case "hideTextbox": {
               outputLines.Add("hideTextbox()");
               break;
            }
            case "playSFX": {
               var name = tokens[1].ToUpper();
               var a1 = tokens[2];
               var volume = tokens[3];
               outputLines.Add($"playSFX({{name: `{name}`, a1: {a1}, volume: {volume}}})");
               break;
            }
            case "waitForSFX": {
               outputLines.Add("waitForSFX()");
               break;
            }
            case "monoColorOverlay": {
               var interval = tokens[1];
               var color = (tokens[2] == "1" ? "white" : tokens[2] == "0" ? "black" : null).ToUpper();
               outputLines.Add($"monoColorOverlay({{interval: {interval}, color: {color}}})");
               break;
            }
            case "bgloadCrop": {
               var name = tokens[2].ToUpper();
               var transition = tokens[4] + tokens[3];
               var x = tokens[5];
               var y = tokens[6];
               var hx = tokens[7];
               var hy = tokens[8];
               outputLines.Add($"bgloadCrop({{name: `{name}`, transition: {transition}, x: {x}, y: {y}, hx: {hx}, hy: {hy}}})");
               break;
            }
            case "setKomoreType": {
               var type = tokens[1];
               outputLines.Add($"setKomoreType({type})");
               break;
            }
            case "showKomoreAnim": {
               outputLines.Add($"showKomoreAnim()");
               break;
            }
            case "openShakeScreenAnim": {
               outputLines.Add($"openShakeScreenAnim()");
               break;
            }
            case "setMonoColorOverlayFadeOutDuration": {
               var duration = tokens[1].Replace("VAR_c0_", "");
               outputLines.Add($"setMonoColorOverlayFadeOutDuration({duration})");
               break;
            }
            case "fadeOutMonoColorOverlay": {
               outputLines.Add($"fadeOutMonoColorOverlay()");
               break;
            }
            case "unSkippableDelay": {
               var duration = tokens[1];
               outputLines.Add($"unSkippableDelay({duration})");
               break;
            }
            case "closeKomoreAnim": {
               outputLines.Add("closeKomoreAnim()");
               break;
            }
            case "closeShakeScreenAnim": {
               outputLines.Add("closeShakeScreenAnim()");
               break;
            }
            case "chapterCutin": {
               var name = tokens[1];
               outputLines.Add($"chapterCutin({{name: `{name}`}})");
               break;
            }
            case "stopSFX": {
               outputLines.Add($"stopSFX()");
               break;
            }
            case "playBGM": {
               var num = tokens[1];
               var volume = tokens[2];
               outputLines.Add($"playBGM({{num: {num}, volume: {volume}}})");
               break;
            }
            case "bgload": {
               var name = tokens[2].ToUpper();
               var transition = tokens[4] + tokens[3];
               outputLines.Add($"bgload({{name: `{name}`, transition: {transition}}})");
               break;
            }
            case "clock": {
               var time = tokens[1];
               outputLines.Add($"clock(`{time}`)");
               break;
            }
            case "tweenZoom": {
               var x = tokens[1];
               var y = tokens[2];
               var hx = tokens[3];
               var hy = tokens[4];
               var duration = tokens[5];
               outputLines.Add($"tweenZoom({{x: {x}, y: {y}, hx: {hx}, hy: {hy}, duration: {duration}}})");
               break;
            }
            case "stopBGM": {
               outputLines.Add("stopBGM()");
               break;
            }
            case "setChangePerspectiveDirection": {
               var from = (tokens[1] == "1" ? "from_right" : tokens[1] == "0" ? "from_left" : null).ToUpper();
               outputLines.Add($"setChangePerspectiveDirection({from})");
               break;
            }
            case "triggerChangePerspectiveAnim": {
               outputLines.Add("triggerChangePerspectiveAnim()");
               break;
            }
            case "fgload": {
               var id = tokens[1];
               var name = tokens[3];
               var x = tokens[4];
               var useAnim = tokens[5] == "3" ? "true" : "false";
               outputLines.Add($"fgload({{id: {id}, name: `{name}`, x: {x}, useAnim: {useAnim}}})");
               break;
            }
            case "removeFG": {
               var id = tokens[1];
               var useAnim = tokens[2] == "3" ? "true" : "false";
               outputLines.Add($"removeFG({{id: {id}, useAnim: {useAnim}}})");
               break;
            }
            case "multifgload2": {
               var id1 = tokens[1];
               var id2 = tokens[2];
               var name1 = tokens[4];
               var name2 = tokens[6];
               var x1 = tokens[7];
               var x2 = tokens[8];
               var useAnim = tokens[9] == "3" ? "true" : "false";
               outputLines.Add($"multifgload2({{id1: {id1}, id2: {id2}, name1: `{name1}`, name2: `{name2}`, x1: {x1}, x2: {x2}, useAnim: {useAnim}}})");
               break;
            }
            case "choiceId": {
               break;
            }
            case "_switch": {
               i += 2;
               var texts = new List<string>();
               while (lines[i].Trim() != "") {
                  var _tokens = lines[i].Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
                  var choice = _tokens[2];
                  var label = _tokens[3];
                  texts.Add($"  case {choice}: goto(lbl_{label});");
                  usedLabelSet.Add(label);
                  i += 1;
               }
               var text = string.Join("\r\n", texts);
               outputLines.Add("switch (choice) {");
               outputLines.Add(text);
               outputLines.Add("}");
               break;
            }
            default: {
               throw new Exception($"Unknown statement '{tokens[0]}' at line {inputLine + 1} of file '{filePath}'");
            }
         }
      }
      static void ResolveText(string filePath, string[] tokens, ref int i, string[] lines, List<string> outputLines) {
         i += 1;
         var texts = new List<string>();
         while (lines[i].Trim() != "") {
            texts.Add(lines[i]);
            i += 1;
         }
         var text = string.Join("\r\n", texts);
         text = standard1.Replace(text, m => {
            var str = m.Groups[1].Value;
            var _tokens = str.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            if (_tokens.Length > 1)
               return $"${{{_tokens[0]}({string.Join(", ", _tokens.Skip(1))})}}";
            return $"${{{_tokens[0]}}}";
         });
         outputLines.Add($"text`{text}`");
      }
   }
}
