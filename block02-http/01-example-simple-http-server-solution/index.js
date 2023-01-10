var http = require('http');

//create a server

http.createServer(function (req, res) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write('<html><head></head><body><button>I DO NOTHING</button></body></html>'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080