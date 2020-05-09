const moduloA = require('./moduloA');

module.exports = {
  mensagem: 'Modulo B aqui!!!',

  pegaMensagem(){
    return moduloA.bemVindo;
  }
}