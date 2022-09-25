// Método filter é uma função que recebe uma função de callback e EXIGE QUE A FUNÇÃO CALLBACK RETORNE UM BOOLEAN
// TRUE SE QUISER QUE O VALOR SEJA EMBUTIDO NO NOVO ARRAY E FALSE SE NAO QUISER INCLUIR
// Retorne os números maiores que 10 em uma nova array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

/* Utilizando a função anônima
const numerosFiltrados = numeros.filter(function(valor){
    return valor > 10;
});
*/

// Utilizando arrow function
// Lembrando que quando eu tenho apenas um parametro, eu posso retirar os parenteses iniciais da arrow function
// Outra coisa é que eu posso retirar a palavra return e as chaves tambem pq só tem um retorno simples
/* ERA ASSIM

const numerosFiltrados = numeros.filter((valor) => {
    return valor > 10;
});

*/

//FICOU ASSIM
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados)

/* RESULTADO NODE.JS

Info: Start process (11:49:55)
[ 50, 80, 11, 15, 22, 27 ]
Info: End process (11:49:55)
*/