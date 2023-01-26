/*
  Write a JS program to concatenate two string except their first character
*/

const concatenate = (str1, str2) => str1.slice(1) + str2.slice(1);

console.log(concatenate("abx", "def"));
console.log(concatenate("Junior", "Developer"));
