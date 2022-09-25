// DESSA FORMA EU VINCULO UM ARRAY A OUTRO, O QUE FIZER EM UM, REFLETE NO OUTRO
const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = nomes

novo.pop();
console.log(nomes)
console.log(novo)


//COM O REST OPERATOR OU SPREAD OPERATOR EU VOU FAZER UMA COPIA DO ARRAY E ELES NAO FICAM MAIS VINCULADOS
const nomes2 = ['Eduardo', 'Maria', 'Joana'];
const novo2 = [...nomes2]

novo2.pop(); //O método pop() remove o último elemento de um array e retorna aquele elemento.
console.log(nomes2)
console.log(novo2)

/*
Info: Start process (21:01:15)
[ 'Eduardo', 'Maria' ]
[ 'Eduardo', 'Maria' ]
[ 'Eduardo', 'Maria', 'Joana' ]
[ 'Eduardo', 'Maria' ]
Info: End process (21:01:15)
*/