var fs = require("fs");

/*
//readFileSync
console.log("A");
var result = fs.readFileSync("Syntax/sample.txt", "utf8");
console.log(result);
console.log("C");
*/

console.log("A");
fs.readFile("Syntax/sample.txt", "utf8", function(err, result) {
  console.log(result);
});
console.log("C");
