<Query Kind="Statements" />

var fileList = Directory.GetFiles(@"C:\Ever17Converter\output\_generated\script", "*.dec");
var pattern = new Regex(@"playSFX \w+ (\w+) \w+");
var set = new HashSet<string>();
var count = 0;
foreach (var filePath in fileList) {
	 var fileContent = File.ReadAllText(filePath);
	 foreach (Match match in pattern.Matches(fileContent)) {
	 	set.Add(match.Groups[1].ToString());
	 }
	 count++;
}
count.Dump();
set.OrderBy(e => e).Dump();