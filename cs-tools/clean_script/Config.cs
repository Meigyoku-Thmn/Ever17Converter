using System.CodeDom.Compiler;
using System.Text.RegularExpressions;

class Config {
   public static readonly string inputDirPath = @"\Ever17Converter\output\script";
   public static readonly string outputDirPath = @"\Ever17Converter\output\script_js";
   public static readonly Regex strip1 = new(@"^\[(.+?)\].+?: +", RegexOptions.Compiled);
   public static readonly Regex inlineCommand1 = new(@"{(.+?)}", RegexOptions.Compiled);
   public static readonly Regex inlineCommand2 = new(@"^{(.+?)}$", RegexOptions.Compiled);
   public static readonly Regex nameTag = new(@"^\[(.+?)\]\r\n", RegexOptions.Compiled);
   public static readonly Regex condBlock = new(@"^\[cond \(28 0a a4\) (.+?) 14 \(00\)\](.+)", RegexOptions.Compiled);
   public static readonly Regex nextStatement = new(@"^\[[0-9a-fA-F]+?\]", RegexOptions.Compiled);
   public static readonly Regex rgb = new(@"^rgb\((.+?),(.+?),(.+?)\)$", RegexOptions.Compiled);
   public static readonly Regex jsInvalidChar1 = new(@"[/ \-']", RegexOptions.Compiled);
   public static readonly Regex jsInvalidChar2 = new(@"[\.]", RegexOptions.Compiled);
   public static readonly Regex varop = new(@".+? .+? (.+?)\) (.+?) (.+?) .+? (.+)", RegexOptions.Compiled);
   public static readonly Regex switch_varop = new(@"^switch_varop \(28 0a a4\) (.+?) .+? \(00\)");
   public static readonly Regex spaces = new(@" +", RegexOptions.Compiled);
   public static readonly CodeDomProvider codeProvider = CodeDomProvider.CreateProvider("CSharp");
   public static readonly int indent = 3;
   public static readonly string tab = new(' ', indent);
}