/*
    SCOPE:
      - it's all about the visibility of variables, so where in our code we can use some variable

    HOISTING
      - is in the end just a core mechanism build into js or into js engines that run the code

    SCOPE & SCOPE RULES:

      - var:
        - local scope (function scope):
          - variables defined inside of funcitons

        - global scope:
          - variables defined globally
      
      - let, const:
        - block scope
          - defined inside of {}

      - variables in outer scope are accessible from inner scope but not the other way around

    PRIMITIVE & REFERENCE VALUES
      - primitive values:
        - number. string, boolean, symbol, null, undefined, bigint
        - are inmutable and share by copy

      - reference values
        - objects (i.e. plain objects, arrays, functions, ...)
        - are mutable and share by reference

*/
// example 1
let result = 1;
console.log(addOne(3)); // outputs 4
console.log(result); // output 4

function addOne(numToAdd) {
  result = result + numToAdd;
  return result;
}

// example 2
let number = 1;
console.log(number + 2);
number = number + 3;

const person = { age: 31 };
const me = person;
person.age = person;
person.age = 32;
console.log(me.age); // prints 32!
