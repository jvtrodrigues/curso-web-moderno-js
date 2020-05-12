console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');

console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];

console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo';

console.log(aprovados[3]);

aprovados.push('Abia'); //add no fim

console.log(aprovados.length);

aprovados[9] = 'Rafael';

console.log(aprovados.length);

console.log(aprovados[8] === undefined);

console.log(aprovados);

aprovados.sort(); //ordena

console.log(aprovados);

delete aprovados[1]

console.log(aprovados);


aprovados = ['Bia', 'Carlos', 'Ana'];

aprovados.splice(1, 1); //exclui 1 elemento apartir do indice 1

aprovados.splice(1, 2, 'Elemento 1', 'Elemento 2'); //add dois elementos apartir do indice 1, substituindo os anteriores
console.log(aprovados);

const nomeCompleto = 'José Vicente Rodrigues';
const nomeArray = nomeCompleto.split(' ');
console.log(nomeArray);
