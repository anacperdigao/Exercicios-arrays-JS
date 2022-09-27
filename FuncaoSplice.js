//array.splice(indice que quero comecar a mexer, quantos elementos quero remover do array, elementos para adicionar)
//                 -5         -4      -3       -2     -1
//                  0          1       2        3      4 
const nomes = [ 'Eduardo', 'Maria', 'Joana', 'João', 'Ana' ]

// EXEMPLO FAZENDO A FUNCAO DO POP QUE RETIRA O ULTIMO ITEM
//A DIFERENÇA É QUE O ITEM REMOVIDO VEM EM FORMATO DE ARRAY E NAO COMO UMA STRING

const removidos = nomes.splice(4,1)
console.log(nomes,removidos)
/*
Info: Start process (21:49:55)
[ 'Eduardo', 'Maria', 'Joana', 'João' ] [ 'Ana' ]
Info: End process (21:49:55)
*/
