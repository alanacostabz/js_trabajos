/*
  ARRAYS EN JS
    - Es un objeto que nos sirve para guardar una colección de información, esta puede ser de cualquier tipo elementos númericos,
      cadenas de caracteres, objetos, otras colecciones hasta funciones, etc.

    - CONCEPTOS:
      - INMUTABILIDAD: sirve para elminar los efectos colaterales (crea una copia no se modifica), son métodos que simplemente al
        ejecutarlos modifican el estado.
      - MUTABILIDAD: lo contrario de inmutabilidad
      - FUNCIÓN PURA: es una función que no tiene efectos colaterales con elementos externos y por lo cual solo depende de los 
        elementos de entrada (siempre regresa algo), es cuando un método no modifica los valores del elemento

  - SPREAD OPERATOR
    - El Spread Operator corresponde a un operador el cuál distribuye los elementos de un arreglo u objeto, para asignarlos a alguna variable/constante/función.
    - una funcionalidad tambien es hacer copias de arrays

  - FUNCIÓN DE PRIMER ORDEN
    - Una función de primer orden es una función que se puede llamar por parámetro

  - FUNCIÓN DE ORDEN SUPERIOR
    - Una función de orden superior es aquella que puede recibir otras funciónes como parámetros

  - ARROWS FUNCTION
    - son simplemente una azucar sintactica para escribir menos una función
*/

// creación de array
let numbers = [2, 5, 6, 3];
// const marcas = ["nintendo", "playstation", "xbox"];
const marcas = [
  { name: "nintendo switch", price: 349.99, memory: 64 },
  { name: "playstation 5", price: 499.99, memory: 620 },
  { name: "xbox series x", price: 499.99, memory: 820 },
];

// funcion de primer orden
let fn = function () {
  console.log("hello");
};

// funcion de orden superior
function some(f) {
  console.log("algo antes");
  fn();
  console.log("algo despues");
}

fn();

const arr = [...numbers, ...marcas];
console.log(arr);

// acceder a un elemento del array
console.log(numbers[0]);

// otra forma de acceder
// console.log(numbers.at(2));

// obtener longitud
console.log(numbers.length);

// acceder a la ultima posición
console.log(numbers[numbers.length - 1]);

// marcas = []; // no se puede reasignar un valor al arreglo pero si a sus valores, lo mismo con los objetos

// MUTABLE
// marcas.push("pc"); // agrega un elemento al final
// marcas.unshift("atari"); // agrega un elemento al principio
// marcas.splice(2, 0, "sega"); // sirve para insertar y eliminar elementos en cierta posición
// // eliminar elementos
// let m = marcas.pop(); // elimina el ultimo elemento
// let m2 = marcas.shift(); // elimina el primer elemento
// console.log(m);
// console.log(m2);
// marcas.fill("ea", 0, marcas.length); // llenar el arreglo

// // INMUTABLE
// // const marcas2 = marcas.concat(["atlus"]);
// // marcas2.push("capcom");
// const marcas2 = marcas.slice(0, 1); // cortar el arreglo

// // marcas2[0] = "prueba";

function sum(a, b, c) {
  return a + b + c;
}

console.log("suma", sum(...numbers));

const numbers2 = [...numbers];
numbers2[0] = 100;
numbers[1] = 200;

// show(numbers);
showDown("array1", marcas);
showDown("array2", numbers2);
// showDown("array1", numbers);
// showDown("array2", numbers2);

// para buscar un elemento por su valor en un arreglo (realiza una busqueda estricta ===)
console.log("indexOf", marcas.indexOf("nintendo"));

// HELPERS -------------------------------------------------------------
function show(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function showDown(element, arr) {
  document.getElementById(element).innerHTML += "";

  for (let i = 0; i < arr.length; i++) {
    document.getElementById(
      element
    ).innerHTML += `<div>${arr[i].name} ${arr[i].memory}gb</div>`;
  }
}
