/*
  Write a JS program to replace the first digit in a string (should  contains at least digit) with $ character
*/

const replaceFirstDigit = (str) => str.replace(/\d/, "$");

console.log(replaceFirstDigit("Abcd1Abcde"));
console.log(replaceFirstDigit("A123Abcde"));
console.log(replaceFirstDigit("A1cd1Abcd1"));
