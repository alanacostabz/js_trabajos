/*
  HOISTING
    - https://developer.mozilla.org/es/docs/Glossary/Hoisting
    - Una clausura o closure es una función que guarda referencias del estado adyacente (ámbito léxico). En otras palabras, una clausura permite acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada.
*/
let myName = "Goldis";

greetMeWithDelay();

myName = "Rocio";

function greetMeWithDelay() {
  setTimeout(function () {
    console.log("Hi " + myName);
  }, 1500);
}
