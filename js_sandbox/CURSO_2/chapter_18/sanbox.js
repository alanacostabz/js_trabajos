// ----------------------------- rest parameter -----------------------------
// const double = (...nums) => {
//   console.log(nums);
//   return nums.map(num => num * 2);
// };
// const result = double(1, 3, 4, 6, 3, 5);
// console.log(result);


//---------------------- spread syntax (arrays) ------------------------------
// const people = ['alan', 'bryan', 'katy'];
// console.log(...people);
// const members = ['luna', 'stephany', 'kass', ...people];
// console.log(members);


// ---------------------- spread syntax (objects) ----------------------------
// const person = { name: 'shuan', age: 30, job: 'net ninja' };
// const personClone = { ...person, location: 'manchester' };
// console.log(personClone);










// ------------------------------- SETS ---------------------------------------
// const namesArray = ['norman', 'john', 'hazard', 'alan', 'hazard'];
// console.log(namesArray);

//const namesSet = new Set(['norman', 'john', 'hazard', 'alan', 'hazard']);
// const namesSet = new Set(namesArray);
// console.log(namesSet);

// const uniqueNames = [...namesSet];
// const uniqueNames = [... new Set(namesArray)];
// console.log(uniqueNames);

// const ages = new Set();
// ages.add(24);
// ages.add(16).add(19);
// ages.add(16);
// ages.delete(19);

// console.log(ages, ages.size);
// console.log(ages.has(16), ages.has(25));

// ages.clear();
// console.log(ages);

// const players = new Set([
//   { name: 'ronaldo', age: 34 },
//   { name: 'messi', age: 32 },
//   { name: 'dos santos', age: 30 },
// ]);

// players.forEach(player => {
//   console.log(player.name, player.age);
// })







// ------------------------------- SYMBOLS ---------------------------------------
const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');
console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne === symbolTwo);

const ninja = {};
ninja.age = 30;
ninja['belt'] = 'orange';
ninja['belt'] = 'black';

ninja[symbolOne] = 'aggh';
ninja[symbolOne] = 'que pex';
console.log(ninja);