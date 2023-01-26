/*
  Write a JS program to get the largest even number from an array of integers
*/

const largestEvent = (arr) => Math.max(...arr.filter((num) => num % 2 === 0));

console.log(largestEvent([1, 2, 3, 4, 5, 6]));
console.log(largestEvent([1, 2, 33, 4, 5, 6]));
console.log(largestEvent([1, 2, 3, 44, 55, 6]));
