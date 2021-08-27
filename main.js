const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('ITIS week 1 Assignment');
}

const server = http.createServer(requestListener);
server.listen(8080);
console.log("Hello world");
