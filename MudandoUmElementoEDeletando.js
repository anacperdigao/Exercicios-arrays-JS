const nomes = ['Eduardo', 'Maria', 'Joana'];
//Outra forma de criar array

//const nomes = new Array('Eduardo', 'Maria', 'Joana')

nomes[2] = 'João'
console.log(nomes)

delete nomes[2];
console.log(nomes)

/*
Info: Start process (20:34:47)
[ 'Eduardo', 'Maria', 'João' ]
[ 'Eduardo', 'Maria', <1 empty item> ]
Info: End process (20:34:48)
*/