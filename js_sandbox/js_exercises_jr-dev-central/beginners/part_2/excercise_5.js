/*
  Write a JS program to check a given string contains 2 to 4 ocurrences of a specified character
*/
const countChars = (str, char) =>
  str.split("").filter((ch) => ch === char).length;

const contains2To4 = (str, char) =>
  countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(contains2To4("ooh!", "o"));
console.log(contains2To4("oh!", "o"));
console.log(contains2To4("oooh!", "o"));
console.log(contains2To4("ooooh!", "o"));
console.log(contains2To4("oooo0h!", "o"));
