/**
 * PIPES
 * - Es una ejecución de izquierda a derecha de un conjunto de funciones
 * - https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */
const games = [
  {
    name: "Mario Party Superstars",
    console: "Nintendo Switch",
    price: "59.99",
  },
  {
    name: "Zelda Breath Of The Wild",
    console: "Nintendo Switch",
    price: "49.99",
  },
  {
    name: "Super Smash Bros Ultimate",
    console: "Nintendo Switch",
    price: "39.99",
  },
];

function sort(g) {
  return g.sort((a, b) => a.price - b.price);
}

function toUpperCaseName(g) {
  return g.map((e) => ({
    name: e.name.toUpperCase(),
    price: e.price,
    console: e.console,
  }));
}

function applyTax(g) {
  return g.map((e) => ({
    name: e.name.toUpperCase(),
    price: (e.price * 1.16).toFixed(2),
    console: e.console,
  }));
}

// const myGames = applyTax(toUpperCaseName(sort(games)));
// console.log(myGames);

pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

Array.prototype.pipe = function (...fns) {
  return fns.reduce((v, f) => f(v), this);
};

// const myGames2 = pipe(sort, toUpperCaseName, applyTax)(games);
// console.log(myGames2);

const myGames3 = games.pipe(sort, toUpperCaseName, applyTax);
console.log(myGames3);
