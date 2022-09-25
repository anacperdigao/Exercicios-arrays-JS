// 1° Caso: Retorne as pessoas que tem o nome com 5 letras ou mais
// 2° Caso: Retorne as pessoas com mais de 50 anos
// 3° Caso: Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome:'Luiz', idade: 62 },
    {nome:'Maria', idade: 23 },
    {nome:'Eduardo', idade: 55 },
    {nome:'Letícia', idade: 19 },
    {nome:'Rosana', idade: 32 },
    {nome:'Wallace', idade: 47 },
];

// 1° Caso
// const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 5);

// 2° Caso
//const pessoasComMaisDeCinquentaAnos = pessoas.filter(valor => valor.idade > 50)

// 3° Caso
pessoasComNomeTerminaEmA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'))

console.log(pessoasComNomeTerminaEmA)