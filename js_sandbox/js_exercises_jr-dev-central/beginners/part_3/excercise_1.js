/*
  Write a JS program to find the number of even digits in an array of integers
*/

const countEventNumbers = (arr) => arr.filter((num) => num % 2 === 0).length;

console.log(countEventNumbers([1, 2, 3, 4, 5, 6]));
console.log(countEventNumbers([2, 2, 2, 2, 2, 2]));
console.log(countEventNumbers([3, 5, 7, 9, 10, 100]));
