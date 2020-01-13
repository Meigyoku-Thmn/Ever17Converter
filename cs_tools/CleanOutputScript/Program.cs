using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Runtime.Serialization;
using System.Security.Permissions;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace CleanOutputScript {
   public class InvalidSyntaxException : Exception {
      public InvalidSyntaxException() { }
      public InvalidSyntaxException(string message) : base(message) { }
      public InvalidSyntaxException(string message, Exception inner) : base(message, inner) { }
   }
   class Program {
      static readonly string inputDirPath = @"\Ever17Converter\output\script";
      static readonly string outputDirPath = @"\Ever17Converter\output\script_js";
      static readonly Regex strip1 = new Regex(@"^\[(.+?)\].+?: +", RegexOptions.Compiled);
      static readonly Regex inlineCommand1 = new Regex(@"{(.+?)}", RegexOptions.Compiled);
      static readonly Regex inlineCommand2 = new Regex(@"^{(.+?)}$", RegexOptions.Compiled);
      static readonly Regex nameTag = new Regex(@"^\[(.+?)\]\r\n", RegexOptions.Compiled);
      static readonly Regex condBlock = new Regex(@"^\[cond \(28 0a a4\) (.+?) 14 \(00\)\](.+)", RegexOptions.Compiled);
      static readonly Regex nextStatement = new Regex(@"^\[[0-9a-fA-F]+?\]", RegexOptions.Compiled);
      static readonly Regex rgb = new Regex(@"^rgb\((.+?),(.+?),(.+?)\)$", RegexOptions.Compiled);
      static readonly Regex jsInvalidChar1 = new Regex(@"[/ \-']");
      static readonly Regex jsInvalidChar2 = new Regex(@"[\.]");
      static readonly Regex varop = new Regex(@".+? .+? (.+?)\) (.+?) (.+?) .+? (.+)");
      static readonly CodeDomProvider codeProvider = CodeDomProvider.CreateProvider("JScript");
      static readonly int indent = 3;
      static readonly string tab = new string(' ', indent);
      static string EscapeBackTick(string input) {
         return input.Replace("`", "\\`");
      }
      static string FixJPTextInEnVer(string input) {
         if (input == "‚k‚qQ‚`‚O‚O‚Ì’l‚ª³‚µ‚­‚ ‚è‚Ü‚¹‚ñB") {
            input = "ＬＲ＿Ａ００の値が正しくありません。";
         }
         return input;
      }
      static void Main(string[] args) {
         Directory.CreateDirectory(outputDirPath);
         var filePaths = Directory.GetFiles(inputDirPath, "*.dec", SearchOption.TopDirectoryOnly).OrderBy(e => e);
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
                  if (outputLines[i] != "-")
                     rs.Add(outputLines[i]);
               }
               return rs;
            }
            try {
               for (var i = 0; i < lines.Length; i++) {
                  var line = lines[i];
                  var label = "";
                  var line2 = strip1.Replace(line, (m) => {
                     label = m.Groups[1].Value;
                     return "";
                  });
                  if (label == "") throw new InvalidSyntaxException($"Invalid [label] syntax at line {i + 1} of file '{filePath}'");
                  if (line2 == line) throw new InvalidSyntaxException($"Invalid statement syntax at line {i + 1} of file '{filePath}'");
                  var tokens = line2.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
                  labelSet[outputLines.Count] = label;
                  Resolve(filePath, tokens, ref i, lines, outputLines, usedLabelSet);
               }
            }
            catch (Exception) {
               File.WriteAllLines(
                  Path.Combine(outputDirPath, Path.GetFileNameWithoutExtension(filePath) + ".js"), ResolveLabel());
               throw;
            }
            File.WriteAllLines(
               Path.Combine(outputDirPath, Path.GetFileNameWithoutExtension(filePath) + ".js"), ResolveLabel());
         }
      }
      static void Resolve(string filePath, string[] tokens, ref int i, string[] lines, List<string> outputLines, HashSet<string> usedLabelSet) {
         if (tokens.Length == 0) {
            outputLines.Add("-");
            return;
         }
         var inputLine = i;
         try {
            switch (tokens[0]) {
               case "closeSnowFallingAnim": {
                  outputLines.Add($"closeSnowFallingAnim();");
                  break;
               }
               case "openSnowFallingAnim": {
                  outputLines.Add($"openSnowFallingAnim();");
                  break;
               }
               case "unlockCG": {
                  var name = EscapeBackTick(tokens[1]);
                  outputLines.Add($"unlockCG($`{name}`);");
                  break;
               }
               case "playVoice": {
                  var name = EscapeBackTick(tokens[1]);
                  outputLines.Add($"playVoice($`{name}`);");
                  break;
               }
               case "makeFGHasYellowAmbient": {
                  var id = tokens[1];
                  outputLines.Add($"makeFGHasYellowAmbient({{ id: {id} }});");
                  break;
               }
               case "closeCherryBlossomAnim": {
                  outputLines.Add($"closeCherryBlossomAnim();");
                  break;
               }
               case "openCherryBlossomAnim": {
                  outputLines.Add($"openCherryBlossomAnim();");
                  break;
               }
               case "makeFGNormal": {
                  var id = tokens[1];
                  outputLines.Add($"makeFGNormal({{ id: {id} }});");
                  break;
               }
               case "makeFGTransparent": {
                  var id = tokens[1];
                  outputLines.Add($"makeFGTransparent({{ id: {id} }});");
                  break;
               }
               case "closeFog2": {
                  outputLines.Add($"closeFog2();");
                  break;
               }
               case "showFog2": {
                  outputLines.Add($"showFog2();");
                  break;
               }
               case "show_map_root_image_blinking_Anim": {
                  outputLines.Add($"show_map_root_image_blinking_Anim();");
                  break;
               }
               case "triggerFlash": {
                  outputLines.Add($"triggerFlash();");
                  break;
               }
               case "setFlashBrightness": {
                  var num = tokens[1];
                  var m = rgb.Match(num);
                  if (m.Success == false) {
                     outputLines.Add($"setFlashRGBColor({num}, {num}, {num});");
                  }
                  else {
                     var r = m.Groups[1].Value;
                     var g = m.Groups[2].Value;
                     var b = m.Groups[3].Value;
                     outputLines.Add($"setFlashRGBColor({r}, {g}, {b});");
                  }
                  break;
               }
               case "setNumberOfFlash": {
                  var num = tokens[1];
                  outputLines.Add($"setNumberOfFlash({num});");
                  break;
               }
               case "jumpIfRandomIs": {
                  var num = tokens[1];
                  var label = tokens[2];
                  usedLabelSet.Add(label);
                  outputLines.Add($"jump(lbl_{label}).ifRandomIs({num});");
                  break;
               }
               case "random": {
                  var num = tokens[1];
                  outputLines.Add($"random({num});");
                  break;
               }
               case "setFGOrder_Unk": {
                  var a1 = tokens[1];
                  var a2 = tokens[2];
                  var a3 = tokens[3];
                  outputLines.Add($"setFGOrder_Unk({a1}, {a2}, {a3});");
                  break;
               }
               case "setFGOrder": {
                  var id1 = tokens[1];
                  var id2 = tokens[2];
                  var id3 = tokens[3];
                  outputLines.Add($"setFGRenderOrder({id1}, {id2}, {id3});");
                  break;
               }
               case "multifgload3": {
                  var name1 = EscapeBackTick(tokens[2]);
                  var name2 = EscapeBackTick(tokens[4]);
                  var name3 = EscapeBackTick(tokens[6]);
                  var x1 = tokens[7];
                  var x2 = tokens[8];
                  var x3 = tokens[9];
                  var useAnim = tokens[10];
                  outputLines.Add($"multifgload3({{ name1: `{name1}`, name2: `{name2}`, name3: `{name3}`, x1: {x1}, x2: {x2}, x3: {x3}, useAnim: {useAnim} }});");
                  break;
               }
               case "closeMapIndicatorAnim": {
                  outputLines.Add("closeMapIndicatorAnim();");
                  break;
               }
               case "waitForClick": {
                  outputLines.Add("waitForClick();");
                  break;
               }
               case "openMapCommentAnim": {
                  outputLines.Add("openMapCommentAnim();");
                  break;
               }
               case "setMapCommentSlotToDisplay": {
                  var slot = tokens[1];
                  outputLines.Add($"setMapCommentToDisplay({{ slot: {slot} }});");
                  break;
               }
               case "pickMapCommentByIndex2": {
                  var index = tokens[1];
                  outputLines.Add($"pickMapComment2({{ index: {index} }});");
                  break;
               }
               case "pickMapCommentByIndex": {
                  var index = tokens[1];
                  outputLines.Add($"pickMapComment({{ index: {index} }});");
                  break;
               }
               case "playMovie": {
                  var name = EscapeBackTick(tokens[1]);
                  outputLines.Add($"playMovie(`{name}`);");
                  break;
               }
               case "jump": {
                  var file = EscapeBackTick(tokens[1]);
                  outputLines.Add($"jump(`{file}`);");
                  break;
               }
               case "closeDimOverlay": {
                  outputLines.Add("closeDimOverlay();");
                  break;
               }
               case "showDimOverlay": {
                  outputLines.Add("showDimOverlay();");
                  break;
               }
               case "showFilter2": {
                  outputLines.Add("showFilter2();");
                  break;
               }
               case "closeDimInAndOutAndFilterAnim": {
                  outputLines.Add("closeDimInAndOutAndFilterAnim();");
                  break;
               }
               case "varop": {
                  var unk = string.Join(" ", tokens.Skip(1));
                  var m = varop.Match(unk);
                  var type = m.Groups[1].Value;
                  var name = m.Groups[2].Value;
                  var op = m.Groups[3].Value;
                  var assignee = m.Groups[4].Value;
                  switch (type) {
                     case "a4": type = "g_"; break;
                     case "a2": type = "eff_"; break;
                     case "a0": type = "dimOff_"; break;
                     case "a3": type = "sys_"; break;
                     default: throw new InvalidSyntaxException($"Invalid varop type at line {inputLine + 1} of file '{filePath}'");
                  }
                  switch (op) {
                     case ":=": op = "="; break;
                     case "+=": break;
                  }
                  outputLines.Add($"{type}{name} {op} {assignee};");
                  break;
               }
               case "delay": {
                  var interval = tokens[1];
                  outputLines.Add($"delay({{ interval: {interval} }});");
                  break;
               }
               case "removeBG": {
                  if (tokens[1] == "3") {
                     outputLines.Add($"removeBG_unk({tokens[1]}, {tokens[2]}, {tokens[3]});");
                     break;
                  }
                  string mode = (tokens[1] == "1" ? "white" : tokens[1] == "0" ? "black" : null).ToUpper();
                  var transition = Convert.ToInt32(tokens[2] + tokens[3], 10);
                  outputLines.Add($"removeBG({{ mode: {mode}, transition: {transition} }});");
                  break;
               }
               case "setSceneTitleByIndex": {
                  var index = tokens[1];
                  outputLines.Add($"setSceneTitle({{ index: {index} }});");
                  break;
               }
               case "setDialogBoxColor": {
                  var color = tokens[1].ToUpper();
                  outputLines.Add($"setDialogBoxColor({color});");
                  break;
               }
               case "showTextbox": {
                  outputLines.Add("showTextbox();");
                  break;
               }
               case "text": {
                  ResolveText(filePath, tokens, ref i, lines, outputLines);
                  break;
               }
               case "hideTextbox": {
                  outputLines.Add("hideTextbox();");
                  break;
               }
               case "playSFX": {
                  var name = EscapeBackTick(tokens[1].ToUpper());
                  var a1 = tokens[2];
                  var volume = tokens[3];
                  outputLines.Add($"playSFX({{ name: `{name}`, a1: {a1}, volume: {volume} }});");
                  break;
               }
               case "waitForSFX": {
                  outputLines.Add("waitForSFX();");
                  break;
               }
               case "monoColorOverlay": {
                  var interval = tokens[1];
                  var color = (tokens[2] == "1" ? "white" : tokens[2] == "0" ? "black" : null).ToUpper();
                  outputLines.Add($"monoColorOverlay({{ interval: {interval}, color: {color} }});");
                  break;
               }
               case "bgloadCrop": {
                  var name = EscapeBackTick(tokens[2].ToUpper());
                  var transition = Convert.ToInt32(tokens[4] + tokens[3], 10);
                  var x = tokens[5];
                  var y = tokens[6];
                  var hx = tokens[7];
                  var hy = tokens[8];
                  outputLines.Add($"bgloadCrop({{ name: `{name}`, transition: {transition}, x: {x}, y: {y}, hx: {hx}, hy: {hy} }});");
                  break;
               }
               case "setKomoreType": {
                  var type = tokens[1];
                  outputLines.Add($"setKomoreType({type});");
                  break;
               }
               case "showKomoreAnim": {
                  outputLines.Add($"showKomoreAnim();");
                  break;
               }
               case "openShakeScreenAnim": {
                  outputLines.Add($"openShakeScreenAnim();");
                  break;
               }
               case "setMonoColorOverlayFadeOutDuration": {
                  var duration = tokens[1].Replace("VAR_c0_", "");
                  outputLines.Add($"setMonoColorOverlayFadeOutDuration({duration});");
                  break;
               }
               case "fadeOutMonoColorOverlay": {
                  outputLines.Add($"fadeOutMonoColorOverlay();");
                  break;
               }
               case "unSkippableDelay": {
                  var duration = tokens[1];
                  outputLines.Add($"unSkippableDelay({duration});");
                  break;
               }
               case "closeKomoreAnim": {
                  outputLines.Add("closeKomoreAnim();");
                  break;
               }
               case "closeShakeScreenAnim": {
                  outputLines.Add("closeShakeScreenAnim();");
                  break;
               }
               case "chapterCutin": {
                  var name = EscapeBackTick(tokens[1]);
                  outputLines.Add($"chapterCutin({{ name: `{name}` }});");
                  break;
               }
               case "stopSFX": {
                  outputLines.Add($"stopSFX()");
                  break;
               }
               case "playBGM": {
                  var num = tokens[1];
                  var volume = tokens[2];
                  outputLines.Add($"playBGM({{ num: {num}, volume: {volume} }});");
                  break;
               }
               case "bgload": {
                  var name = EscapeBackTick(tokens[2].ToUpper());
                  var transition = Convert.ToInt32(tokens[4] + tokens[3], 10);
                  outputLines.Add($"bgload({{ name: `{name}`, transition: {transition} }});");
                  break;
               }
               case "clock": {
                  var time = EscapeBackTick(tokens[1]);
                  outputLines.Add($"clock(`{time}`);");
                  break;
               }
               case "tweenZoom": {
                  var x = tokens[1];
                  var y = tokens[2];
                  var hx = tokens[3];
                  var hy = tokens[4];
                  var duration = tokens[5];
                  outputLines.Add($"tweenZoom({{ x: {x}, y: {y}, hx: {hx}, hy: {hy}, duration: {duration} }});");
                  break;
               }
               case "stopBGM": {
                  outputLines.Add("stopBGM();");
                  break;
               }
               case "setChangePerspectiveDirection": {
                  var from = (tokens[1] == "1" ? "from_right" : tokens[1] == "0" ? "from_left" : tokens[1] == "2" ? "from_both" : null).ToUpper();
                  outputLines.Add($"setChangePerspectiveDirection({from});");
                  break;
               }
               case "triggerChangePerspectiveAnim": {
                  outputLines.Add("triggerChangePerspectiveAnim();");
                  break;
               }
               case "fgload": {
                  var id = tokens[1];
                  var name = EscapeBackTick(tokens[3]);
                  var x = tokens[4];
                  var useAnim = tokens[5] == "3" ? "true" : "false";
                  outputLines.Add($"fgload({{ id: {id}, name: `{name}`, x: {x}, useAnim: {useAnim} }});");
                  break;
               }
               case "removeFG": {
                  var id = tokens[1];
                  var useAnim = tokens[2] == "3" ? "true" : "false";
                  outputLines.Add($"removeFG({{ id: {id}, useAnim: {useAnim} }});");
                  break;
               }
               case "multifgload2": {
                  var id1 = tokens[1];
                  var id2 = tokens[2];
                  var name1 = EscapeBackTick(tokens[4]);
                  var name2 = EscapeBackTick(tokens[6]);
                  var x1 = tokens[7];
                  var x2 = tokens[8];
                  var useAnim = tokens[9] == "3" ? "true" : "false";
                  outputLines.Add($"multifgload2({{ id1: {id1}, id2: {id2}, name1: `{name1}`, name2: `{name2}`, x1: {x1}, x2: {x2}, useAnim: {useAnim} }});");
                  break;
               }
               case "notActuallyGotoIfUnk":
               case "unknown09":
               case "unknown43":
               case "unknown3c":
               case "unknown3b":
               case "unknown2b":
               case "l_unk06":
               case "l_unk0d":
               case "l_unk12":
               case "l_unk13":
               case "l_unk15":
               case "l_unk19":
               case "l_unk28":
               case "scriptLocationId":
               case "choiceId": {
                  outputLines.Add("-");
                  break;
               }
               case "_switch": {
                  i += 2;
                  var texts = new List<string>();
                  while (lines[i].Trim() != "") {
                     var _tokens = lines[i].Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
                     var choice = _tokens[2];
                     var label = _tokens[3];
                     texts.Add($"{tab}case {choice}: goto(lbl_{label});");
                     usedLabelSet.Add(label);
                     i++;
                  }
                  var text = string.Join("\r\n", texts);
                  outputLines.Add("switch (choice) {");
                  outputLines.Add(text);
                  outputLines.Add("}");
                  break;
               }
               case "goto": {
                  var label = tokens[1];
                  usedLabelSet.Add(label);
                  outputLines.Add($"goto(lbl_{label});");
                  break;
               }
               case "gotoif": {
                  var variable = tokens[5];
                  var comparision = tokens[6];
                  var opposed_value = tokens[8];
                  var label = tokens[11];
                  usedLabelSet.Add(label);
                  outputLines.Add($"goto(lbl_{label}).if(g_{variable} {comparision} {opposed_value});");
                  break;
               }
               case "shakeScreen": {
                  outputLines.Add("shakeScreen();");
                  break;
               }
               case "bgload_keepFg": {
                  var name = EscapeBackTick(tokens[2].ToUpper());
                  var transition = Convert.ToInt32(tokens[4] + tokens[3], 10);
                  outputLines.Add($"bgload_keepFg({{ name: `{name}`, transition: {transition} }});");
                  break;
               }
               case "multiremoveFG_Anim": {
                  var id1 = tokens[1];
                  var id2 = tokens[2];
                  var id3 = tokens[3];
                  outputLines.Add($"multiremoveFG({{ id1: {id1}, id2: {id2}, id3: {id3}, useAnim: true }});");
                  break;
               }
               case "multiremoveFG_Sta": {
                  var id1 = tokens[1];
                  var id2 = tokens[2];
                  var id3 = tokens[3];
                  outputLines.Add($"multiremoveFG({{ id1: {id1}, id2: {id2}, id3: {id3}, useAnim: false }});");
                  break;
               }
               case "shakeScreenHard": {
                  outputLines.Add("shakeScreenHard();");
                  break;
               }
               case "turnOnFullscreenTextMode": {
                  outputLines.Add("NVL_Mode();");
                  break;
               }
               case "turnOffFullscreenTextMode": {
                  outputLines.Add("AVL_Mode();");
                  break;
               }
               case "showDimInAndOutAnim": {
                  outputLines.Add("showDimInAndOutAnim();");
                  break;
               }
               default: {
                  throw new InvalidSyntaxException($"Unknown statement '{tokens[0]}' at line {inputLine + 1} of file '{filePath}'");
               }
            }
         }
         catch (Exception e) {
            if (e is InvalidSyntaxException) throw;
            throw new InvalidSyntaxException($"The syntax might be invalid or unknown at line {i + 1} of file '{filePath}", e);
         }
      }
      static void ResolveText(string filePath, string[] tokens, ref int i, string[] lines, List<string> outputLines) {
         i++;
         var inputLine = i;
         var texts = new List<string>();
         var lastIsEmpty = false;
         while (true) {
            if (nextStatement.IsMatch(lines[i])) {
               if (lastIsEmpty) {
                  texts.RemoveAt(texts.Count - 1);
                  i--;
                  break;
               }
               else throw new InvalidSyntaxException($"Unexpected statement after text block at line {i + 1} of file '{filePath}");
            }
            if (lines[i].Trim() == "") lastIsEmpty = true;
            else lastIsEmpty = false;
            texts.Add(lines[i]);
            i++;
         }
         var text = string.Join("\r\n", texts);

         text = inlineCommand1.Replace(text, m => {
            return $"�{m}�";
         });
         var innerText = tab;
         var fragments = text.Split(new[] { '�' }, StringSplitOptions.RemoveEmptyEntries);
         var isChoice = false;
         foreach (var fragment in fragments) {
            if (isChoice == true) {
               throw new InvalidSyntaxException($"This range has other commands beside {{choice}} at line {inputLine + 1} of file '{filePath}'");
            }
            var m = inlineCommand2.Match(fragment);
            if (m.Success == false) {
               string name = "Narr";
               var _fragment = nameTag.Replace(fragment, (_m) => {
                  name = _m.Groups[1].Value;
                  var name_comment = name;
                  name = jsInvalidChar1.Replace(name, "_");
                  name = jsInvalidChar2.Replace(name, "");
                  if (codeProvider.IsValidIdentifier(name) == false) {
                     if (name[0] == '?') name = "Unk";
                     else throw new InvalidSyntaxException($"Unknown name tag format at line {inputLine + 1} of file '{filePath}'");
                  }
                  if (name != name_comment)
                     name = $"//{name_comment}\r\n{tab}{name}";
                  return "";
               });
               _fragment = FixJPTextInEnVer(_fragment);
               innerText += $"\r\n{tab}{name}`{EscapeBackTick(_fragment)}`;\r\n{tab}";
               continue;
            }
            var command = m.Groups[1].Value;
            var _tokens = command.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            switch (_tokens[0]) {
               case "waitForClick":
               case "clearText":
               case "appendText":
               case "waitForSound":
               case "marker": {
                  innerText += $"{_tokens[0]}; ";
                  break;
               }
               case "delay": {
                  innerText += $"delay({_tokens[1]}); ";
                  break;
               }
               case "sound": {
                  innerText += $"sound(`{EscapeBackTick(_tokens[1])}`); ";
                  break;
               }
               case "nextPage": {
                  innerText += $"nextPage({_tokens[1]}); ";
                  break;
               }
               case "bigChar": {
                  innerText += $"bigChar; ";
                  break;
               }
               case "choice": {
                  isChoice = true;
                  innerText = "";
                  var selections = command.Split(new[] { '|' }, StringSplitOptions.RemoveEmptyEntries).Skip(1);
                  foreach (var selection in selections) {
                     string variable = null;
                     string realSelection = null;
                     var _selection = condBlock.Replace(selection, (_m) => {
                        variable = _m.Groups[1].Value;
                        realSelection = _m.Groups[2].Value;
                        return "";
                     });
                     if (selection == _selection) {
                        innerText += tab + $"`{EscapeBackTick(selection)}`\r\n";
                     }
                     else {
                        innerText += tab + $"`{EscapeBackTick(realSelection)}`.if(g_{variable} != 0),\r\n";
                     }
                  }
                  innerText = innerText.TrimEnd();
                  break;
               }
               default: {
                  throw new InvalidSyntaxException($"Unknown command '{_tokens[0]}' at line {inputLine + 1} of file '{filePath}'");
               }
            }
         }
         if (isChoice == false) {
            outputLines.Add("text(() => {");
            outputLines.Add(innerText);
            outputLines.Add("});");
         }
         else {
            outputLines.Add("choice(");
            outputLines.Add(innerText);
            outputLines.Add(");");
         }
      }
   }
}
