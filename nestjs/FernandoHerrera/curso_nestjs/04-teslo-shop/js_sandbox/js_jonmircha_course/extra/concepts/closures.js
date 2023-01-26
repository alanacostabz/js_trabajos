/**
 *  CLOSURES
 *
 *    - Son la combinación de una función y el alcance léxico que tiene esta
 *    - Principalmente un closure se crea al momento que nosotros ejecutamos una función que es mas que nada a las variables que esta
 *      función puede acceder tanto en esta función como en un contexto más arriba
 *    - Son una forma de composición que podemos utilizar en javascript
 *    - Son un alcance léxico que tiene la función al momento de nosotros ejecutarla, nosotros vamos a poder acceder a las variables
 *      que se encuentran al alacence superior de la función y en base a eso nosotros vamos a poder construir más funciones utilizando
 *      closures que a nosotros nos van a ayudar, para poder generalizar y poder escribir más rápidos nuestras aplicaciones
 */

// const x = "Fluffy";

// const f = () => {
//   const y = "Kins";
//   console.log(x, y);
// };

// f();

require("isomorphic-fetch");

const crudder = (dominio) => (recurso) => {
  const url = `${dominio}/${recurso}`;

  return {
    create: (x) =>
      fetch(url, {
        method: "POST",
        body: JSON.stringify(x),
      }).then((x) => x.json()),
    get: () => fetch(url).then((x) => x.json()),
  };
};

const Base = crudder("https://jsonplaceholder.typicode.com");
const Todos = Base("todos");
const Users = Base("users");

//Todos.get().then((x) => console.log(x[0]));
Users.get().then((x) => console.log(x[0]));
