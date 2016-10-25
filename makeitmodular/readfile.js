// var fs = require('fs');
// var path = require('path');
// var filteredFiles = [];

// function filterDirectory(dirPath, fileExtension, callback) {
//     if (fileExtension[0] !== '.') fileExtension = '.' + fileExtension;
//     fs.readdir(dirPath, 'utf-8', (error, files) => {
//         if (error) return callback(error);  
//         if (files.length === 0) return; 
//         files.forEach((resource) => {
//             if (path.extname(resource) === fileExtension) {
//                 filteredFiles.push(resource);
//             };
//         });
//         return callback(null, filteredFiles);
//     });
// };

// module.exports = filterDirectory;

var fs = require('fs');
var newList = [];

module.exports = function (filePath, extStr, callback){
    fs.readdir(filePath, function (err, list){
        if(err){
            return callback(err);
        }
        else{
           for(var i = 0; i < list.length; i++){
                    var ext = "."+extStr;
                    if(list[i].substr(-1*ext.length,ext.length) === ext){
                        newList.push(list[i]);
                    }        
                }
                callback(null, newList);
        }
    });
}