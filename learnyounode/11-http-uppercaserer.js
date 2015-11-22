var http = require('http');
var map = require('through2-map');
var inStream = process.argv[3];

var server = http.createServer(function (req, res) {
  // request handling logic...
  req.pipe(map(function(chunk){
    return chunk.toString().toUpperCase();
  })).pipe(res);
});

server.listen(process.argv[2]);
