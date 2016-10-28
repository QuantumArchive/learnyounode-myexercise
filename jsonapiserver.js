const http = require('http');
const url = require('url');
const urlParse = url.parse;
const qstring = require('querystring');
const path = require('path');
const port = process.argv[2];

const server = http.createServer((req, res) => {
    const urlParsedObject = urlParse(req.url);
    const reqMethod = req.method;
    const qsParse = qstring.parse(urlParsedObject.query);
    const pathParsedObject = path.parse(urlParsedObject.pathname);
    console.log(pathParsedObject);
    console.log(urlParsedObject);
    console.log(qsParse);
    var newDate = new Date(qsParse.iso);
    var newDateJSONString = '';
    if (reqMethod === 'GET') {
        if (pathParsedObject.dir === '/api' && pathParsedObject.name === 'parsetime') {
            newDateObject = JSON.stringify({
                hour: newDate.getHours(),
                minute: newDate.getMinutes(),
                second: newDate.getSeconds()
            });
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(newDateObject);
        } else if (pathParsedObject.dir === '/api' && pathParsedObject.name === 'unixtime') {
            newDateObject = JSON.stringify({
                unixtime: Date.parse(qsParse.iso)
            });
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(newDateObject);
        } else {
            res.end();
        };
        
        res.end('got get');
    } else {
        res.end('whoops');
    };  
});

server.listen(port, err => {
    if (err) return err;
});

//HI CODE FELLOWS THIS IS CHRIS B :D