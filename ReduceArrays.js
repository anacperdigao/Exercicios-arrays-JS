// O Reduce é muito versátil, daria pra utlizar só ele como Filter e Map
// Teoricamente o reduce é para reduzir o array em um elemento só
// Aqui os parametros da função callback irão aumentar pq tem um acumulador antes dos outros 3 anteriores


// Caso 1: some todos os numeros (REDUCE)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce((acumulador, valor, indice, array) => {
    return acumulador = acumulador + valor
}, 0); // AQUI POSSO RECEBER UM VALOR INICIAL NA FUNÇÃO DE CALLBACK (opcional, se nao colocar nada, ele entende como o primeiro valor do array)

console.log(total)


// Caso 2: retorne um array com os pares (FILTER)
const pares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0){
        acumulador.push(valor);
    }
    return acumulador;
}, []) // PRECISEI COLOCAR O COLCHETE PRA RETORNAR COMO ARRAY

console.log(pares)


// Caso 3: retorne um array com o dobro dos valores (MAP)
const dobro = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2);
    return acumulador;
}, []);

console.log(dobro);

