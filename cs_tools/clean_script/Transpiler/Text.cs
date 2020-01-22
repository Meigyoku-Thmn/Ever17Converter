using System;
using System.Collections.Generic;
using System.Linq;

class Text {
   public static void Resolve(State state, string filePath, string[] tokens, ref int i, string[] lines, List<string> outputLines) {
      i++;
      var inputLine = i;
      var texts = new List<string>();
      var lastIsEmpty = false;
      while (true) {
         if (Config.nextStatement.IsMatch(lines[i])) {
            if (lastIsEmpty) {
               texts.RemoveAt(texts.Count - 1);
               i--;
               break;
            } else throw new InvalidSyntaxException($"Unexpected statement after text block at line {i + 1} of file '{filePath}");
         }
         if (lines[i].Trim() == "") lastIsEmpty = true;
         else lastIsEmpty = false;
         texts.Add(lines[i]);
         i++;
      }
      var text = string.Join("\r\n", texts);

      text = Config.inlineCommand1.Replace(text, m => {
         return $"�{m}�";
      });
      string innerText = null;
      List<TextToken> textTokens = new List<TextToken>();
      var fragments = text.Split(new[] { '�' }, StringSplitOptions.RemoveEmptyEntries);
      var isChoice = false;
      foreach (var fragment in fragments) {
         if (isChoice == true) {
            throw new InvalidSyntaxException($"This range has other commands beside {{choice}} at line {inputLine + 1} of file '{filePath}'");
         }
         var m = Config.inlineCommand2.Match(fragment);
         if (!m.Success) {
            // This is a text fragment
            string name = "";
            var _fragment = Config.nameTag.Replace(fragment, (_m) => {
               name = _m.Groups[1].Value;
               var name_comment = name;
               name = Config.jsInvalidChar1.Replace(name, "_");
               name = Config.jsInvalidChar2.Replace(name, "");
               if (Config.codeProvider.IsValidIdentifier(name) == false) {
                  if (name[0] == '?') name = "Unk";
                  else throw new InvalidSyntaxException($"Unknown name tag format at line {inputLine + 1} of file '{filePath}'");
               }
               if (name != name_comment)
                  name = $"//{name_comment}\r\n{Config.tab}{name}";
               return "";
            });
            _fragment = Kits.FixJPTextInEnVer(_fragment);
            textTokens.Add(new TextToken {
               Name = "Text",
               CharaName = name,
               Text = Kits.EscapeBackTick(_fragment),
            });
            continue;
         }
         var command = m.Groups[1].Value;
         var _tokens = command.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
         var foundName = "";
         var foundParams = new object[0];
         switch (_tokens[0]) {
            case "waitForClick":
            case "clearText":
            case "appendText":
            case "waitForSound":
            case "marker": {
               foundName = _tokens[0];
               break;
            }
            case "delay": {
               foundName = "delay"; foundParams = new object[] { int.Parse(_tokens[1]) };
               break;
            }
            case "sound": {
               foundName = "sound"; foundParams = new object[] { Kits.EscapeBackTick(_tokens[1]) };
               break;
            }
            case "nextPage": {
               foundName = "nextPage"; foundParams = new object[] { int.Parse(_tokens[1]) };
               break;
            }
            case "bigChar": {
               foundName = "bigChar";
               break;
            }
            case "choice": {
               isChoice = true;
               innerText = "";
               var selections = command.Split(new[] { '|' }, StringSplitOptions.RemoveEmptyEntries).Skip(1);
               foreach (var selection in selections) {
                  string variable = null;
                  string realSelection = null;
                  var _selection = Config.condBlock.Replace(selection, (_m) => {
                     variable = _m.Groups[1].Value;
                     realSelection = _m.Groups[2].Value;
                     return "";
                  });
                  if (selection == _selection) {
                     innerText += Config.tab + $"`{Kits.EscapeBackTick(selection)}`,\r\n";
                  } else {
                     var num = Convert.ToUInt32(variable, 16);
                     var type = "";
                     if (num > 0 && num <= 0x1F) type = "g_";
                     else type = "l_";
                     var subt = Kits.SubstituteVar(type, variable);
                     innerText += Config.tab + $"cond({type}{subt.var} != 0)`{Kits.EscapeBackTick(realSelection)}`,\r\n";
                  }
               }
               innerText = innerText.TrimEnd();
               break;
            }
            default: {
               throw new InvalidSyntaxException($"Unknown command '{_tokens[0]}' at line {inputLine + 1} of file '{filePath}'");
            }
         }
         textTokens.Add(new TextToken {
            Name = foundName,
            Params = foundParams,
         });
      }
      if (isChoice) {
         outputLines.Add("choice(");
         outputLines.Add(innerText);
         outputLines.Add(");");
         return;
      }
      var groupedToken = textTokens
         .Aggregate(new List<List<TextToken>>() { new List<TextToken>() }, (acc, token) => {
            if ((state.textMode == TextMode.NVL && (token.Name == "marker" || token.Name == "appendText")) ||
               (state.textMode == TextMode.ADV && (token.Name == "marker"))) {
               acc.Add(new List<TextToken>());
            } else {
               acc.Last().Add(token);
            }
            return acc;
         })
         .Where(e => e.Count > 0)
         ;
      foreach (var _tokens in groupedToken) {
         var currentName = state.dialogNotCompleted ? "Append" : "";
         var currentText = "";
         var baseVoice = "";
         state.dialogNotCompleted = state.textMode == TextMode.NVL ? false : true;
         var hasClearNVL = false;
         var hasWaitClickAtEnd = false;
         foreach (var token in _tokens) {
            if (state.dialogNotCompleted == false && state.textMode == TextMode.ADV)
               throw new InvalidSyntaxException($"Lingering command(s) after 'clearText' at line {inputLine + 1} of file '{filePath}'");
            void AddWaitClick() {
               if (hasWaitClickAtEnd == true) currentText += "${wait}";
               hasWaitClickAtEnd = false;
            }
            switch (token.Name) {
               case "nextPage":
                  if ((int)token.Params[0] == 4) hasClearNVL = true;
                  else currentText += $"${{nextPage({Kits.Params2Str(token.Params)})}}";
                  break;
               case "waitForClick":
                  if (hasWaitClickAtEnd == true) currentText += "${wait}";
                  hasWaitClickAtEnd = true;
                  break;
               case "clearText":
                  state.dialogNotCompleted = false;
                  break;
               case "delay": {
                  if ((int)token.Params[0] == 0) break;
                  currentText += $"${{wait({Kits.Params2Str(token.Params)})}}";
                  break;
               }
               case "marker":
               case "appendText":
                  break;
               case "waitForSound":
                  AddWaitClick();
                  currentText += $"${{waitVoice}}";
                  break;
               case "sound": {
                  AddWaitClick();
                  if (baseVoice == "")
                     baseVoice = Kits.Params2Str(token.Params);
                  else
                     currentText += $"${{voice({Kits.Params2Str(token.Params)})}}";
                  break;
               }
               case "Text":
                  AddWaitClick();
                  if (currentName != "")
                     throw new InvalidSyntaxException($"Detect lingering name tag '{token.CharaName}' at line {inputLine + 1} of file '{filePath}'");
                  currentName = token.CharaName;
                  currentText += token.Text;
                  break;
               default:
                  throw new InvalidSyntaxException($"Invalid command '{token.Name}' at line {inputLine + 1} of file '{filePath}'");
            }
         }
         if (currentName == "" && baseVoice != "") currentName = state.lastCharaName;
         else state.lastCharaName = currentName;
         innerText += $"{Config.tab}{currentName}{(baseVoice == "" ? "" : $"({baseVoice})")}`{currentText}{(hasWaitClickAtEnd ? "" : "${noWait}")}`;\r\n";
         if (hasClearNVL)
            innerText += $"{Config.tab}clearPage();";
      }
      outputLines.Add("text(() => {");
      outputLines.Add(innerText);
      outputLines.Add("});");
   }
}