/*
  Given two values, write a JS program to find out wich one is nearest to 100
*/

const closestTo100 = (a, b) => (100 - a < 100 - b ? a : b);
console.log(closestTo100(99, 1));
console.log(closestTo100(49, 51));
console.log(closestTo100(50, 50));
