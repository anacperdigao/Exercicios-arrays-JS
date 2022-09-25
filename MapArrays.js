// O método MAP retorna o mesmo array só que com os valores alterados.
// Funciona da mesma forma que o FILTER, sendo obrigatorio receber uma funçao de callback,
// e com os parâmetros (valor, indice, array)


//Exemplo 1: Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosDobrados = numeros.map(valor => valor * 2)
//console.log(numerosDobrados)


// Exemplo 2: 
// Para cada elemento:
// Caso 1: Retorne apenas uma string com o nome da pessoa
// Caso 2: Remova apenas a chave "nome" do objeto
// Caso 3: Adicione uma chave ID em cada objeto

const pessoas = [
    {nome:'Luiz', idade: 62 },
    {nome:'Maria', idade: 23 },
    {nome:'Eduardo', idade: 55 },
    {nome:'Letícia', idade: 19 },
    {nome:'Rosana', idade: 32 },
    {nome:'Wallace', idade: 47 },
];

//Caso 1
const nomesPessoas = pessoas.map(valor => valor.nome)
console.log(nomesPessoas)

//Caso 2
/*
const retiraChaveNome = pessoas.map(valor => { 
    delete valor.nome
    return valor;
})
*/

//Outra opção para esse mesmo caso
const retiraChaveNome = pessoas.map(valor => { 
    return {idade: valor.idade};
})
console.log(retiraChaveNome)

//Caso 3 - AQUI TEM UM PROBLEMA
//const adicionaId = pessoas.map((valor, indice) => {
    //valor.id = indice; //AQUI EU ESTOU MUDANDO NO ARRAY ORIGINAL E AS VEZES EU POSSO NAO QUERER. 
                       //PRECISO CRIAR UM NOVO ARRAR PARA ARMAZENAR
    //return valor;
//})

const adicionaId = pessoas.map((valor, indice) => {
    const novoArray = {...valor} //ESTOU CRIANDO UM NOVO ARRAR PARA ARMAZENAR E COPIANDO OS VALORES DO ARRAY PESSOAS
    novoArray.id = indice;     
    return novoArray;
})

console.log(pessoas) //Agora eu nao mudei o original
console.log(adicionaId)





