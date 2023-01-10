http = require('http');
_ = require('lodash');

const greetings = ["Hello",  "Bonjour",  "Hola",  "Ciao",  "Hallo",  "こんにちは",  "안녕하세요",  "你好",  "Olá",  "Привет"]

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<html><head><meta charset="utf-8"></head><body><h2>${_.sample(greetings)}</h2></body></html>`); //write a response to the client
  res.end();
}).listen(8080);