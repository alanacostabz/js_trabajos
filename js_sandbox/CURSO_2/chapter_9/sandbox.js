////////////////////////////////////////////////////////////////////////////
////////////////////// ARRAY METHODS //////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


//---------------------- FILTER METHOD ----------------------------------------

// const scores = [10, 30, 15, 25, 50, 40, 4];
// const filteredScore = scores.filter((score) => {
//   return score > 20;
// });

// console.log(filteredScore);

// const games = [
//   { name: 'ZELDA BREATH OF THE WILD', premium: true },
//   { name: 'SUPER SMASH BROS. ULTIMATE', premium: false },
//   { name: 'MARAKIO KART 8 DELUXE', premium: false },
//   { name: 'POKEMON: SWORD', premium: true }
// ];

// const premiumGames = games.filter(game => game.premium);
// console.log(premiumGames);






//----------------- MAP METHOD ---------------------------------------------

// const prices = [60, 40, 20, 30, 25, 80, 5, 15];

// // const salesPrices = prices.map(price => {
// //   return price / 2;
// // });
// // console.log(salesPrices);

// const consoles = [
//   { name: 'PLAYSTATION 4 PRO', price: 400 },
//   { name: 'PLAYSTATION 3', price: 150 },
//   { name: 'XBOX ONE X', price: 500 },
//   { name: 'NINTENDO SWITCH', price: 300 },
//   { name: 'NINTENDO SWITCH LITE', price: 200 }
// ];

// const saleConsoles = consoles.map(consol => {
//   if (consol.price > 300) {
//     return { name: consol.name, price: consol.price / 2 };
//   } else {
//     return consol;
//   }
// });
// console.log(saleConsoles, consol);







//----------------- REDUCE METHOD ---------------------------------------------

// const goals = [10, 20, 60, 40, 70, 90, 30];

// const result = goals.reduce((acc, curr) => {
//   if (curr > 50) {
//     acc++;
//   }
//   return acc;
// }, 0);
// console.log(result);

// const scores = [
//   { player: 'zelda', score: 50 },
//   { player: 'yoshi', score: 30 },
//   { player: 'zelda', score: 70 },
//   { player: 'link', score: 60 },
// ];

// const zeldaTotal = scores.reduce((acc, curr) => {
//   if (curr.player === 'zelda') {
//     acc += curr.score;
//   }
//   return acc;
// }, 0);
// console.log(zeldaTotal);








//----------------- FIND METHOD ---------------------------------------------
// const scores = [10, 5, 90, 40, 60, 10, 20, 70];

// const firstHighScore = scores.find(score => score > 50);

// console.log(firstHighScore);









//----------------- SORT METHOD ---------------------------------------------

// example 1 - sorting strings
// const names = ['mario', 'link', 'zelda', 'corin', 'yoshi'];
// names.sort();
// names.reverse();
// console.log(names);

// example 2 - sorting numbers
//const scores = [10, 50, 20, 5, 35, 79, 45];
// //scores.sort();
// scores.reverse();
// console.log(scores);
// scores.sort((a, b) => b - a);
// console.log(scores);

// example 3 -sorting objects
// const players = [
//   { name: 'messi', age: 32 },
//   { name: 'hazard', age: 28 },
//   { name: 'ronaldo', age: 34 },
//   { name: 'mbappe', age: 20 },
//   { name: 'neymar', age: 27 }
// ];

// players.sort((a, b) => {
//   if (a.age > b.age) {
//     return -1;
//   } else if (b.age > a.age) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// players.sort((a, b) => b.age - a.age);
// console.log(players);





//----------------- CHAINING METHOD ---------------------------------------------

const games = [
  { name: 'ZELDA: BREATH OF THE WILD', price: 60 },
  { name: 'POKEMON SWORD', price: 70 },
  { name: 'MARIO KART 8 DELUXE', price: 50 },
  { name: 'DARK SOULS: REMASTERED', price: 24 },
  { name: 'FIFA 20', price: 30 }
];

// const filtered = games.filter(game => game.price > 40);

// const promos = filtered.map(game => {
//   return `${game.name} is ${game.price / 2} dollars`;
// });

const promos = games
  .filter(game => game.price > 40)
  .map(game => {
    return `${game.name} is ${game.price / 2} dollars`;
  });

console.log(promos);