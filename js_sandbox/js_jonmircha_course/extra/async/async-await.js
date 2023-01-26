async function fetchCategories({ types }) {
  return; // fetch(...)
}

async function fetchPosts({ limit }) {
  return; // fetch(...)
}

async function app() {
  const categories = await fetchCategories({ types: ["movies"] }); // 10s
  const posts = await fetchPosts({ limit: 5 }); // 5s

  // -> 15s
}

/*************************************************** */

Promise.all([
  Promise.resolve(13),
  Promise.reject(new Error("esto es un error")),
  new Promise((resolve) => setTimeout(() => resolve(26), 1000)),
])
  .then((values) => {
    console.log(values); // aqui no entra !!!
  })
  .catch((error) => {
    console.log(error);
  });

Promise.allSettled([
  Promise.resolve(13),
  Promise.reject(new Error("esto es un error")),
  new Promise((resolve) => setTimeout(() => resolve(26), 1000)),
]).then((values) => {
  console.log(values);
  const [
    { value: firstPromiseValue },
    { value: secondPromiseValue },
    { value: thirdPromiseValue },
  ] = values;

  console.log({
    firstPromiseValue,
    secondPromiseValue,
    thirdPromiseValue,
  });
});
/**
 * Lo que tiene Promise.allSettled es que siempre se resulve y devuelve una array donde somos capaces de saber si una de las promesas ha
 * fallado o no
 *
 * Promise.all a deferencia en cuanto sale un error ya no se puede hacer un then solo un catch del error
 */
