const moduloA = require ('../../moduloA');

console.log(moduloA.ola);

const saudacao = require('saudacao');

console.log(saudacao.mensagem);

const c = require('./pastaC');

console.log(c.ola2);

const http = require('http');

http.createServer((req, res) => {
  res.write('bom dia!!');
  res.end();
}).listen(8080);