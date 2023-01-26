/**
 *
 *  PROMESAS
 *
 *  - Son un objeto que representan un valor que eventualmente se va a resolver
 *  - Una ventaja que tiene utilizar las promesas con metodos nativos por sobre sync await es que estas van a ser mas componibles
 *  lo cual permite que podamos reutilizar código
 *  - Se pueden resolver inmediatamente o eventualmente en un futuro
 *  - Estas tambien pueden fallar inmediatamente o eventualmente
 *  - Se pueden ir encadenando
 */

const { reject } = require("lodash");

// const p1 = Promise.resolve(1);

// console.log(p1);

// p1.then((x) => x + 5)
//   .then((x) => Promise.resolve(x + 5))
//   .then((x) => Promise.reject("Error algo sucedió mal"))
//   .then((x) => console.log("Esto no se va llamar"))
//   .catch((e) => console.log(e));

// const delayed = (x) =>
//   new Promise((resolve, reject) => setTimeout(() => resolve(x), 500));

// delayed(7)
//   .then((x) => {
//     console.log(x);
//     return delayed(x + 7);
//   })
//   .then((x) => Promise.reject("Hubo un error :("))
//   .catch((e) => console.log(e));

require("isomorphic-fetch");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((x) => x.json())
  .then((x) => console.log(x));
