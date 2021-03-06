<Query Kind="Statements" />

var fileList = Directory.GetFiles(@"D:\Ever17Converter\output\script_js", "*.js");
var pattern = new Regex(@"(dimOff_[0-9a-fA-F]+?) . .+?;");
var map = new Dictionary<string, int>();
var count = 0;
var sum = 0;
foreach (var filePath in fileList) {
	 var fileContent = File.ReadAllText(filePath);
	 foreach (Match match in pattern.Matches(fileContent)) {
		string str = match.ToString();
	 	if (map.TryGetValue(str, out int cnt)) {
	 		map[str] = cnt + 1;
		}
		else {
			map.Add(str, 1);
		}
	 }
	 count++;
}
count.Dump();
sum.Dump();
map.OrderBy(e => e.Key).Dump();