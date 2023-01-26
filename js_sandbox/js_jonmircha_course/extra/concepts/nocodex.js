/**
 * Tomando un array "a" que contiene solo numeros en el rango de 1 a a.length, encuentra el primer número duplicado del cual su segunda ocurrencia tiene el indice menor. En otras palabras, si hay más de un número duplicado, retorna el número que se repita primero. Si no existen duplicados, retorna -1.

Por ejemplo:
a = [2, 1, 3, 5, 3, 2]
firstDuplicate(a) = 3
 */

const firstDuplicate = (arr) => {
  let elementos = {}; // inicializo objeto para contar los elementos
  let indices = []; // inicializo arreglo para almacenar los indices del array donde haya duplicados

  // itero en un foreach al arreglo
  arr.forEach((el, indice) => {
    // este if es para ver si el elemento existe mas de una vez
    if (elementos[el]) {
      elementos[el]++; // si existe se le suma uno a la occurrencia
      indices.push(indice); // de agrega su undice a un indice de areglos
    } else {
      elementos[el] = 1; // por default se le asigna uno
    }
  });

  let duplicado = arr[Math.min(...indices)]; // buscamos el valor del indice menor del duplicado

  return duplicado || -1; // si encuentra algo regresa el duplicado si no retorna -1
};

let respuesta = firstDuplicate([2, 1, 3, 5, 3, 2]);

console.log(respuesta);
