var fs = require('fs');
var path = process.argv[2];
var stringArray;

fs.readFile(path, 'utf-8', (err, data) => {
    if (err) return err;
    stringArray = data.split('\n');
    console.log((stringArray.length - 1));
});