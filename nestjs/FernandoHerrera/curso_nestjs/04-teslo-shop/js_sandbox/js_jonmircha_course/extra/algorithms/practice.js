/**
 * Write an algirithm that makes an array of numbers as input and calculates the sum of those numbers.
 * Define the time complexity of that algorithm and determine what the lowest possible time complexity is for the problem.
 */

// function sumNumbers(numbers) {
//   return numbers[0] + numbers[1] + numbers[2]; // O(1)
// }

// BEST SOLUTION
// function sumNumbers(numbers) { // O(n)
//   let result = 0; // 1
//   for (const number of numbers) {
//     console.log("..."); // 4
//     result += number; // 4 => n
//   }
//   return result; // 1
// }

// T = 1 + 1 + 1 + n = 3 + 2n = 3 + 2 * n
// T = 1 2*n
// T = 0(n) -> linear time complexity

function sumNumbers(numbers) {
  return numbers.reduce((sum, cur) => sum + cur, 0);
}

console.log(sumNumbers([1, 3, 10, 50]));
