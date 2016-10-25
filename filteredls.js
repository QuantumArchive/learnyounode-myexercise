var fs = require('fs');
var path = require('path');
var extensionType = '.' + process.argv[3];
var fileDir = process.argv[2];
var filteredList = [];
var fileExtension;

fs.readdir(fileDir, (err, list) => {
    if (err) return err;
    list.forEach((item) => {
        if (path.extname(item) === extensionType) {
            console.log(item);
        };
    });
});