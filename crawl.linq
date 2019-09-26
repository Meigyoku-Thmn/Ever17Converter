<Query Kind="Statements" />

var fileList = Directory.GetFiles(@"C:\Ever17Converter\output\_generated\script", "*.dec");
var pattern = new Regex(@"unknown15 \w+ \w+");
var map = new Dictionary<string, int>();
var count = 0;
foreach (var filePath in fileList) {
	 var fileContent = File.ReadAllText(filePath);
	 foreach (Match match in pattern.Matches(fileContent)) {
	    int cnt;
	 	if (map.TryGetValue(match.ToString(), out cnt)) {
	 		map[match.ToString()] = cnt + 1;
		}
		else {
			map.Add(match.ToString(), 1);
		}
	 }
	 count++;
}
count.Dump();
map.OrderBy(e => e.Key).Dump();