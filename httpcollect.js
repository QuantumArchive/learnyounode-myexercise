var http = require('http');
var url = process.argv[2];
var dataAll = '';

http.get(url, (response) => {
    response
    .setEncoding('utf8')
    .on('data', (data) => {
        dataAll += data;
    })
    .on('end', () => {
        console.log(dataAll.length);
        console.log(dataAll);
    });
});