/**
 * VERIFICAR SI ES QUE UN STRING ES UN PALINDROMO
 */
const isPalindrome = (str) => {
  str = str.replace(/\s/g, "");
  const lowered = str.toLowerCase();
  const splitted = lowered.split("");
  const reversed = splitted.reverse();
  const joined = reversed.join("");
  return lowered == joined;
};

const d = isPalindrome("do geese see God");
console.log(d);
