/*
  1. RETURN 3 TIMES
    - "CMD + K + Q" - Existing File, "CMD + K + J" -New File
*/
// console.log("return 3 times");

// function example(a, b) {
//   return function (c, d) {
//     return function (e, f) {
//       console.log(a, b, c, d, e, f);
//       return a * c * e + b * d * f;
//     };
//   };
// }
const example = (a, b) => (c, d) => (e, f) => a * c * e + b * d * f;

// console.log(example(1, 2)(3, 4)(5, 6));
// console.log(example(1, 2)(1, 2)(3, 4));
// console.log(example(1, 2)(0, 1)(0, 5));

// example (1,2)(1,2)(3,4)
// 1 * 1 * 3 + 2 * 2 * 4 = 3 + 16 = 19

// example (1,2)(0,1)(3,4)
// 1 * 0 * 0 + 2 * 1 * 5 = 0 + 10 = 10

/*
    2. MULTIPLY ARGUMENTS
      - multiply arguments, unlimited arguments, if 0 add
*/
// EXAMPLE 1
// function multiply() {
//   const args = [...arguments];
//   // console.log(args);
//   const result = args.reduce((total, item) => {
//     return item ? item * total : total + total;
//   }, 1);
//   return result;
// }

// EXAMPLE 2
const multiply = (...args) => {
  const result = args.reduce((total, item) => {
    return item ? item * total : total + total;
  }, 1);
  return result;
};

// console.log(multiply(4, 5));
// // 4 * 5 = 20
// console.log(multiply(1, 2, 3, 5));
// // 1 * 2 * 3 * 5 = 30
// console.log(multiply(2, 0, 4, 2));
// // 2 + 0 * 4 * 2 = 32

/*
  3. DAYS BETWEEN
    - how many days, between two dates
 */
const date1 = new Date("May 27, 2021");
const date2 = new Date("June 5, 2021");

// EXAMPLE 1
// const getDays = (date1, date2) => {
//   const oneDay = 1000 * 60 * 60 * 24;
//   const time2 = date2.getTime();
//   // console.log(time2);
//   const time1 = date1.getTime();
//   // console.log(time1);

//   let time = time2 - time1;
//   // console.log(time);
//   time = time / oneDay;
//   time = Math.round(Math.abs(time));
//   return time;
// };

// EXAMPLE 2
const getDays = (date1, date2) =>
  Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

// console.log(getDays(date1, date2));

/*
  4. NUMBER SQUENCE
    - count sequences, three numbers, first equals to third
    - and middle one different, all three numbers equal does not count [4,4,4]
*/

const first = [8, 6, 8, 6, 7, 4, 7];
// returns 3 - [8,6,8], [6,8,6], [7,4,7]
const second = [4, 5, 5, 7, 5, 5, 9];
// returns 1 - [5,7,6]
const third = [3, 3, 2, 8, 7, 6, 5];
// return 0

// EXAMPLE 1
// const count = (data) => {
//   return data.reduce((total, item, index) => {
//     // console.log(item);
//     // console.log(index);
//     // console.log(item === data[index + 2]);
//     // console.log(item !== data[index + 1]);
//     const match = item === data[index + 2] && item !== data[index + 1];
//     if (match) return total + 1;
//     return total;
//   }, 0);
// };

// EXAMPLE 2
const count = (data) =>
  data.reduce(
    (total, item, index) =>
      total + (item === data[index + 2] && item !== data[index + 1]),
    0
  );

// console.log(count(first));
// console.log(count(second));
// console.log(count(third));

/*
5 . EVEN OR ODD
    - sum(56) - odd
    - 7 + 5 + 5 = 16
    - 16 % 2 = 0

    Number To String
    - .toString()
    - + ''

    String To Number
    - parseInt - for integer
    - parseFoat - for decimals
    - Number  returns Nan if not a number
*/
// EXAMPLE 1
// const sum = (number) => {
//   const items = [...(number + "")];
//   const result = items.reduce((total, item) => {
//     return total + Number(item);
//   }, 0);
//   return result % 2 === 0 ? "EVEN" : "ODD";
// };

// EXAMPLE 2
const sum = (number) =>
  [...number.toString()].reduce((total, item) => total + Number(item), 0) %
    2 ===
  0
    ? "EVEN"
    : "ODD";

console.log(sum(754));
