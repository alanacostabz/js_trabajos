/**
 *  TEMPLATE LITERALS
 */
const nombre = "Rocío";
const apellido = "Báez";

console.log(nombre + " " + apellido);
console.log(`${nombre} ${apellido}`);

/**
 *  SHORTHAND PROPERTY NAMES
 */
const edad = 49;

const persona = {
  nombre,
  edad,
};

/**
 *  ARROW FUNCTIONS
 */
function nombreDeLaFuncion() {
  return "Hola";
}

const functionFlecha = () => "Hola";

nombreDeLaFuncion();
functionFlecha();

/**
 *  DESTRUCTURING
 */
const cuadrado = {
  x: 18,
  y: 10,
};

function calcularArea({ x, y }) {
  return x * y;
}

let area = calcularArea(cuadrado);
console.log(area);

/**
 *  DEFAULT PARAMETERS
 */
function suma(a = 0, b = 0) {
  return a + b;
}

suma(3);

/**
 *  SPREAD OPERATOR / REST PARAMETERS
 */
const array = [1, 2, 3, 4, 5];
const otroArray = [6, 7, 8, 9, 10];

// ANTES
// const nuevoArray = array.concat(otroArray);
// AHORA
const nuevoArray = [...array, ...otroArray];
// console.log(nuevoArray);

const obj1 = {
  a: "a",
  b: "b",
  c: "c",
};

const obj2 = {
  d: "d",
  e: "e",
};

// antes
// const nuevoObjeto = Object.assign({}, obj1, obj2);
// ahora
const nuevoObjeto = { ...obj1, ...obj2 };

// console.log(nuevoObjeto);

/**
 *  ESMODULES
 */
// export default function suma(a, b) {}

// // ---

// export function resta(a, b) {}

// // ---
// import suma from "./suma";
// import {resta} from "./resta";

// function calculadora() {
//   suma();

//   resta();
// }

/**
 *  TERNARY OPERATORS
 */
const coche = {
  marca: "Tesla",
  model: "CyberTuck",
};

let modelo = coche.model ? coche.model : "X";
// console.log(modelo);

/**
 *  ARRAYS METHODS
 *    - find
 *    - some
 *    - every
 *    - includes
 *    - map
 *    - filter
 *    -reduce
 */

/**
 *  PROMISES, ASYNC-AWAIT
 */

/**
 * NOVEDADES ES2020
 */
function suma(a, b) {
  a = a ?? 0;
  b = b ?? 0;

  return a + b;
}

console.log(suma(3));

const user = {
  nombre,
  edad,
  locacion: {
    x,
    y,
    ciudad: {
      zipcode,
      ld1,
    },
  },
};

const zipcode = user?.locacion?.ciudad?.zipcode;
