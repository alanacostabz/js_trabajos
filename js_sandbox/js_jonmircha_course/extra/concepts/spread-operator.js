//OBJECT SPREAD OPERATOR: generamos copias de objetos

const juego = {
  nombre: "zelda botw",
  plataforma: "nintendo switch",
};

const juego2 = { ...juego };

juego2.nombre = "mario kart deluxe";

const juegos = [juego, juego2];
// console.log(juegos);

////////////////////////////////////////////////////////////////////////////////////////

/** Spread Operator / Rest Operator */
/**
 *  Is three periods
 *  This operators allows expressions to be expanded in places where multiple arguments, elements or variables are expected
 */

// add the elements of an existeing array into a new array
var certsToAdd = ["Algorithms and Data Structures", "Front End Libraries"];
var certifications = [
  "Responsive Web Design",
  ...certsToAdd,
  "Data Visualization",
  "APIs and Microservices",
  "Quality Assurance and Information Secturity",
];
console.log(certifications);

// pass elemets of an array as arguments to a funciton
function addThreeNumbers(x, y, z) {
  console.log(x + y + z);
}
var args = [0, 1, 2];
addThreeNumbers(...args);

// copy arrays
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4);
console.log(arr);
console.log(arr2);

// concatenate arrays
var arr1 = [0, 1, 2];
var arr = [3, 4, 5];
// arr1.concat(arr2);
arr1 = [...arr1, "freeCodeCamp", ...arr2];
console.log(arr1);

// REST: condense multiple elements into an array
/**
 * Is exactly like spread operator is just three dots, but is basically the oposed of the spread operator,
 * the spread operator "spread" or expand an array into its elements, but the rest operator collects multiple elements
 * and condense into a single array element
 */

function multiply(multiplier, ...theArgs) {
  return theArgs.map(function (element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3);
console.log(arr);
