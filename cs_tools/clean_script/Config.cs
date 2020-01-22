using System.CodeDom.Compiler;
using System.Text.RegularExpressions;

class Config {
   public static readonly string inputDirPath = @"\Ever17Converter\output\script";
   public static readonly string outputDirPath = @"\Ever17Converter\output\script_js";
   public static readonly Regex strip1 = new Regex(@"^\[(.+?)\].+?: +", RegexOptions.Compiled);
   public static readonly Regex inlineCommand1 = new Regex(@"{(.+?)}", RegexOptions.Compiled);
   public static readonly Regex inlineCommand2 = new Regex(@"^{(.+?)}$", RegexOptions.Compiled);
   public static readonly Regex nameTag = new Regex(@"^\[(.+?)\]\r\n", RegexOptions.Compiled);
   public static readonly Regex condBlock = new Regex(@"^\[cond \(28 0a a4\) (.+?) 14 \(00\)\](.+)", RegexOptions.Compiled);
   public static readonly Regex nextStatement = new Regex(@"^\[[0-9a-fA-F]+?\]", RegexOptions.Compiled);
   public static readonly Regex rgb = new Regex(@"^rgb\((.+?),(.+?),(.+?)\)$", RegexOptions.Compiled);
   public static readonly Regex jsInvalidChar1 = new Regex(@"[/ \-']");
   public static readonly Regex jsInvalidChar2 = new Regex(@"[\.]");
   public static readonly Regex varop = new Regex(@".+? .+? (.+?)\) (.+?) (.+?) .+? (.+)");
   public static readonly Regex switch_varop = new Regex(@"^switch_varop \(28 0a a4\) (.+?) .+? \(00\)");
   public static readonly CodeDomProvider codeProvider = CodeDomProvider.CreateProvider("JScript");
   public static readonly int indent = 3;
   public static readonly string tab = new string(' ', indent);
}