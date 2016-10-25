var fs = require('fs');
var filePath = process.argv[2];

var fileContents = fs.readFileSync(filePath).toString();

console.log((fileContents.split('\n').length - 1));
