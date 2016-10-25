const fs = require('fs');
const http = require('http');
const fileaddress = process.argv[3];

const server = http.createServer((req, res) => {
    const streamFile = fs.createReadStream(fileaddress, 'utf-8');
    streamFile.on('data', (data) => {
        res.write(data);
    });
});

const port = process.argv[2];
server.listen(port);