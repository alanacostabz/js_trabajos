/**
 * Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación.
 * Tanto la longitud como el tipo de los elementos de un array son variables.
 */

const posts = [
  {
    id: 1,
    title: "Mi primer post",
    image: "https://img.com/1",
    tags: ["javascript", "webdevelopment"],
  },
  {
    id: 2,
    title: "Mi experiencia con react",
    image: "https://img.com/2",
    tags: ["javascript", "webdevelopment", "react"],
  },
  {
    id: 1,
    title: "Por qué dejé Angular",
    image: "https://img.com/3",
    tags: ["javascript", "webdevelopment", "angular"],
  },
];

// FIND: nos permite buscar un elemento dentro dle array
let metodoFind = posts.find((post) => post.title === "Por qué dejé Angular");
//console.log(metodoFind);

// SOME: nos permite buscar la existencia de algun dato dentro del array
let metodoSome = posts.some((post) => post.id === 1);
// console.log(metodoSome);

// INCLUDES: nos permite mirar si existe dentro de un array cierta palabra o valor
let metodoIncludes = posts.some((post) => post.tags.includes("react"));
// console.log(metodoIncludes);

// EVERY: nos permite comprobar si se cumple un valor determinado en todo el arrat
let metodoEvery = posts.every((post) => post.tags.includes("javascript"));
// console.log(metodoEvery);

// MAP: se puede entender como un bucle for de una manera más declarativa
let metodoMap = posts.map((post) => post.title);
// console.log(metodoMap);

// FILTER
let metodoFilter = posts.filter((post) => post.tags.includes("angular"));
// console.log(metodoFilter);

// REDUCE
let metodoReduce = posts.reduce((allTags, post) => {
  return Array.from(new Set([...allTags, ...post.tags]));
}, []);

let metodoReduce2 = posts
  .reduce((allTags, post) => {
    return [...allTags, ...post.tags];
  }, [])
  .filter((post, index, self) => index === self.indexOf(post));
console.log(metodoReduce);
console.log(metodoReduce2);
