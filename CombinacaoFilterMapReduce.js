//Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/*
const pares = numeros.filter((valor) => valor % 2 === 0); //FILTREI

const dobro = pares.map(valor => valor * 2); //DOBREI

const total = dobro.reduce((acumulador, valor) => { //SOMEI TUDO
    acumulador += valor;
    return acumulador;
})
*/

//FAZENDO TUDO EM UMA LINHA ENCADEANDO

const total = numeros
    .filter((valor) => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor);

console.log(total);