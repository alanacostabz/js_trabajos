/**
 * ESCRIBIR UNA FUNCIÓN QUE APLANE LOS ARREGLOS EN UN NIVEL
 */
const arr = [[1, 2], [[3, 4]], [1, []]]; // resultado esperado: [1,2,[3,4],1,[]]

const flatten = (arr) => arr.reduce((acc, el) => acc.concat(el), []);
const d = flatten(arr);

console.log(d);
console.log(arr.flat());
