const array1 = [1 , 2 , 3];
const array2 = [4 , 5 , 6];

//Forma 1 com o método concat
//const array3 = array1.concat(array2, [7, 8, 9], 'Ana');

//Forma 2 com o spread operator
const array3 = [...array1, ...array2, ...[7, 8, 9]];

console.log(array3)