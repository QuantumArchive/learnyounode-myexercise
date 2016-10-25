const fs = require('fs');
const http = require('http');
const map = require('through2-map');

const server = http.createServer((req, res) => {
    req.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res);
});

const port = process.argv[2];
server.listen(port);