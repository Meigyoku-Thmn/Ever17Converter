using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;

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
               Text = Kits.EscapeBackTick(_fragment).Replace("\r\n", "\n").Replace("\r", "\n"),
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
         state.dialogCompleted = true;
         outputLines.Add("choice(");
         outputLines.Add(innerText);
         outputLines.Add(");");
         return;
      }
      IEnumerable<List<TextToken>> groupedToken;
      var clearTextHitOuter = false;
      groupedToken = textTokens
         .Aggregate(new List<List<TextToken>>() { new List<TextToken>() }, (acc, token) => {
            if ((state.textMode == TextMode.NVL && (token.Name == "marker" || token.Name == "appendText")) ||
               (state.textMode == TextMode.ADV && (token.Name == "marker"))) {
               acc.Add(new List<TextToken>());
            } else {
               if (token.Name == "clearText")
                  clearTextHitOuter = true;
               else {
                  if (clearTextHitOuter == true && state.textMode == TextMode.ADV)
                     acc.Add(new List<TextToken>());
                  clearTextHitOuter = false;
               }
               acc.Last().Add(token);
            }
            return acc;
         })
         .Where(e => e.Count > 0)
         .Select(_tokens => {
            var splittedDialogToken = _tokens.Aggregate(new List<List<TextToken>>() { new List<TextToken>() }, (acc, token) => {
               if (token.Name != "Text") acc.Last().Add(token);
               else {
                  var newLineIdxs = token.Text.AllIndexOf("\n");
                  if (newLineIdxs.Count == 0) acc.Last().Add(token);
                  else {
                     foreach (var (idx, i) in newLineIdxs.Select((idx, i) => (idx, i))) {
                        var subToken = token.Clone() as TextToken;
                        var previousIdx = i == 0 ? 0 : newLineIdxs[i - 1] + 1;
                        subToken.Text = subToken.Text.Substring(previousIdx, idx - previousIdx + 1);
                        subToken.CharaName = i == 0 ? subToken.CharaName : "";
                        acc.Last().Add(subToken);
                        acc.Add(new List<TextToken>());
                        if (i + 1 == newLineIdxs.Count) {
                           var lastSubToken = token.Clone() as TextToken;
                           lastSubToken.Text = lastSubToken.Text.Substring(idx + 1);
                           lastSubToken.CharaName = "";
                           acc.Last().Add(lastSubToken);
                        }
                     }
                  }
               }
               return acc;
            });
            var rs = new List<TextToken>();
            var lastTokens = splittedDialogToken.Last();
            foreach (var tokens in splittedDialogToken) {
               rs.AddRange(tokens);
               if (tokens == lastTokens) continue;
               var lineIsEmpty = tokens.All(token => {
                  if (token.Name != "Text") return true;
                  else if (token.Text == "") return true;
                  else if (token == tokens.Last() && token.Text == "\n") return true;
                  return false;
               });
               if (lineIsEmpty) continue;
               var lastTextToken = tokens.FindLast(token => token.Name == "Text");
               if (lastTextToken.Text.Length == 1 || lastTextToken.Text[^2] != ' ')
                  lastTextToken.Text =
                     lastTextToken.Text.Substring(0, lastTextToken.Text.Length - 1) + " ";
               else
                  lastTextToken.Text = lastTextToken.Text.Substring(0, lastTextToken.Text.Length - 1);
            }
            foreach (var token in rs) token.Text = token.Text.Replace("\n", "\r\n");
            return rs;
         })
         ;
      foreach (var _tokens in groupedToken) {
         // state.dialogCompleted == false => the last loop doesn't clear text
         var currentName = state.dialogCompleted == true ? "" : "Append";
         if (state.textMode == TextMode.NVL) state.dialogCompleted = true;
         var currentText = "";
         var baseVoice = "";
         // Fix some edge cases
         if (state.textMode == TextMode.NVL) {
            if (_tokens[^1].Name == "Text") {
               if (_tokens[^2].Text == " " && _tokens[^1].Text == "")
                  _tokens.RemoveRange(_tokens.Count - 2, 2);
               else if ((_tokens[^2].Text == "\n" || _tokens[^2].Text == "\r\n") && _tokens[^1].Text == "")
                  _tokens.RemoveRange(_tokens.Count - 2, 2);
            } else {
               state.dialogCompleted = false;
            }
         }
         var clearNVLType = ClearPageType.None;
         var hasWaitClickAtEnd = false;
         var clearTextHit = false;
         var bigCharHit = false;
         var textHit = false;
         foreach (var token in _tokens) {
            if (clearTextHit == true && state.textMode == TextMode.ADV)
               throw new InvalidSyntaxException($"Lingering command(s) after 'clearText' at line {inputLine + 1} of file '{filePath}'");
            void AddWaitClick() {
               if (hasWaitClickAtEnd == true) currentText += "${wait}";
               hasWaitClickAtEnd = false;
            }
            switch (token.Name) {
               case "nextPage":
                  if ((int)token.Params[0] == 4) clearNVLType = ClearPageType.Fade;
                  else currentText += $"${{nextPage({Kits.Params2Str(token.Params)})}}";
                  state.dialogCompleted = true;
                  break;
               case "waitForClick":
                  if (hasWaitClickAtEnd == true) currentText += "${wait}";
                  hasWaitClickAtEnd = true;
                  break;
               case "clearText":
                  if (state.textMode != TextMode.NVL)
                     clearTextHit = true;
                  else if (bigCharHit == true) {
                     bigCharHit = false;
                  } else {
                     clearNVLType = ClearPageType.NoEffect;
                     state.dialogCompleted = true;
                  }
                  break;
               case "delay": {
                  if ((int)token.Params[0] == 0) break;
                  AddWaitClick();
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
               case "bigChar":
                  AddWaitClick();
                  bigCharHit = true;
                  currentText += "${bigChar}";
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
                  if (textHit == false) {
                     if (currentName != "Append")
                        currentName = token.CharaName;
                  } else if (token.CharaName != "")
                     throw new InvalidSyntaxException($"Detect lingering name tag '{token.CharaName}' at line {inputLine + 1} of file '{filePath}'");
                  currentText += token.Text;
                  textHit = true;
                  break;
               default:
                  throw new InvalidSyntaxException($"Invalid command '{token.Name}' at line {inputLine + 1} of file '{filePath}'");
            }
         }
         if (state.textMode == TextMode.ADV)
            if (clearTextHit == false) state.dialogCompleted = false;
            else state.dialogCompleted = true;
         if (currentName == "" && baseVoice != "")
            innerText += $"{Config.tab}`${{voice({baseVoice})}}{currentText}{(hasWaitClickAtEnd ? "" : "${noWait}")}`;\r\n";
         else
            innerText += $"{Config.tab}{currentName}{(baseVoice == "" ? "" : $"({baseVoice})")}`{currentText}{(hasWaitClickAtEnd ? "" : "${noWait}")}`;\r\n";
         switch (clearNVLType) {
            case ClearPageType.Fade:
               innerText += $"{Config.tab}fadeClearPage();";
               break;
            case ClearPageType.NoEffect:
               innerText += $"{Config.tab}clearPage();";
               break;
         }
      }
      outputLines.Add("text(() => {");
      outputLines.Add(innerText);
      outputLines.Add("});");
   }
}