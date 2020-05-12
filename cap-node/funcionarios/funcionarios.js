const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

axios.get(url).then(response => {
  const funcionarios = response.data;
  /*desafio de array*/
  const mulher = funcionario => funcionario.genero === 'F'; //retorna os funcionarios femininos
  const chinesa = funcionario => funcionario.pais === 'China';

  const calcularMenor = (func, funcAtual) => func.salario<funcAtual.salario ? func : funcAtual;
  console.log(funcionarios.filter(mulher).filter(chinesa).reduce(calcularMenor));
  
})