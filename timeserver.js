var net = require('net');
var server;
var newDate;
var data = '';
var year = '';
var month = '';
var day = '';
var hour = '';
var minute = '';

function listener(socket) {
    newDate = new Date();
    year    = newDate.getFullYear();
    month   = (9 < (newDate.getMonth() + 1)) ? newDate.getMonth() + 1 : '0' + (newDate.getMonth() + 1);
    day     = (9 < newDate.getDate()) ? newDate.getDate() : '0' + newDate.getDate(); 
    hour    = (9 < newDate.getHours()) ? newDate.getHours() : '0' + newDate.getHours();
    minute  = (9 < newDate.getMinutes()) ? newDate.getMinutes() : '0' + newDate.getMinutes();
    data = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + '\n';
    socket.end(data);
};

server = net.createServer(listener);
server.listen(process.argv[2]);