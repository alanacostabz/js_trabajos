/*
  Write a JS program to replace every character in a given stirng with the character following it in the alphabet
*/

// String.fromCharCode
// charCodeAt

const moveCharsFoward = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

console.log(moveCharsFoward("abcd"));
console.log(moveCharsFoward("z"));
