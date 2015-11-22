var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function (socket) {
  var d = strftime('%F %k:%M');
    socket.end(d);
});

server.listen(process.argv[2]);
