/**
 *
 * COMPOSICION
 *
 *  - Es el arte de poder ir construyendo funciones mas grandes en base a funciones más pequeñas
 *  - La gracia que tiene la composición de funciones es que estas son faciles de poder probar y también faciles de poder
 *  intuir que es lo que esta tiene que hacer
 *  - Una funcion recibe un argumento esa funcion va a tener un resultado y esa se la pasamos a otra función
 */

const _ = require("lodash");
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((y, f) => f(y), x);

const users = [{ id: "1", nombre: "rocio", apellido: "baez" }];

const head = (x) => x[0];
const capitalizaNombreYApellido = (x) => ({
  nombre: _.upperFirst(x.nombre),
  apellido: _.upperFirst(x.apellido),
});
const generaNombre = (x) => `${x.nombre} ${x.apellido}`;

// se le conoce como point free
const getNombreCompleto = compose(
  generaNombre,
  capitalizaNombreYApellido,
  head
);
// return generaNombre(capitalizaNombreYApellido(head(_users)));

const x = getNombreCompleto(users);
console.log(x);

// const getNombreCompleto = (_users) => {
//   const primero = _users[0];

//   const capitalizados = {
//     nombre: _.upperFirst(primero.nombre),
//     apellido: _.upperFirst(primero.apellido),
//   };

//   return `${capitalizados.nombre} ${capitalizados.apellido}`;
// };

// const x = getNombreCompleto(users);
// console.log(x);
