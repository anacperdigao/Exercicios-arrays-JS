// Método filter é uma função que recebe uma função de callback e EXIGE QUE A FUNÇÃO CALLBACK RETORNE UM BOOLEAN
// TRUE SE QUISER QUE O VALOR SEJA EMBUTIDO NO NOVO ARRAY E FALSE SE NAO QUISER INCLUIR
// Retorne os números maiores que 10 em uma nova array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

function callbackFilter(valor, indice, array){ //PODERIA EXCLUIR OS PARAMETROS INDICE E ARRAY PQ NAO ESTOU UTILIZANDO
    return valor > 10;
}
    /* PODERIA FAZER ASSIM, MAS NAO HÁ NECESSIDADE PQ A PROPRIA CONDIÇÃO JA RETORNA TRUE OU FALSE
    if (valor > 10){
        return true;
    } else {
        return false;
    }
    */

// 1° parametro: valor é cada um dos valores do array
// 2° parametro: indice do valor que esta sendo iterado no momento
// 3° parametro: array completo

const numerosFiltrados = numeros.filter(callbackFilter)
console.log(numerosFiltrados)

/* RESULTADO NODE.JS

Info: Start process (11:41:24)
[ 50, 80, 11, 15, 22, 27 ]
Info: End process (11:41:25)
*/