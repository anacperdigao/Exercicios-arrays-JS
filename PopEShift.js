//O método pop() remove o último elemento de um array e retorna aquele elemento.
const nomes = ['Eduardo', 'Maria', 'Joana'];
const nomesPop = nomes.pop();

console.log(nomes)
console.log(nomesPop)


//O método **shift()**remove o primeiro elemento de um array e retorna esse elemento. 
//Este método muda o tamanho do array.

const nomes2 = ['Eduardo', 'Maria', 'Joana'];
const nomesPop2 = nomes2.shift();

console.log(nomes2)
console.log(nomesPop2)

/*
Info: Start process (21:11:02)
[ 'Eduardo', 'Maria' ]
Joana
[ 'Maria', 'Joana' ]
Eduardo
Info: End process (21:11:02)
*/