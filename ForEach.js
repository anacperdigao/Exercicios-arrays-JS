// Uma forma diferente de iterar, SÓ ESTA DISPONIVEL DENTRO DE ARRAYS

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let total = 0;

a1.forEach((valor, indice, array) => {
    total = total + valor;
});

console.log(total)