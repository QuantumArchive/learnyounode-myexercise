var readFile = require('./readfile');

readFile(process.argv[2], process.argv[3], (err, list) => {
    if (err) return console.log(err);
    list.forEach((resource) => {
        console.log(resource);
    });
});
