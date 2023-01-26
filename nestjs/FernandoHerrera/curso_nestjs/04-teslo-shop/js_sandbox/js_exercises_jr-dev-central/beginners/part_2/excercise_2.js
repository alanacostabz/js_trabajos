/*
  Write a JS program to extract the first half of a string of event length
*/
const firstaHalf = (str) => str.slice(0, str.length / 2);
console.log(firstaHalf("temp"));
console.log(firstaHalf("temple"));
console.log(firstaHalf("temples"));
