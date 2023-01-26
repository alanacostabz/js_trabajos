/*
  RECURSION
    - it's basically i'ts a funciton that calls itself
  
  CALL BACKS (INDIRECT VS DIRECT FUNCTIONS)
*/

// example 1
function factorial(n) {
  if (n === 0) return 1; // base case
  return n * factorial(n - 1); // recursive step
}

factorial(3); //6

// example 2
function sayHello() {
  console.log("Hello!");
}

sayHello();

const btn = document.querySelector("button");
btn.addEventListener("click", addUser);

function addUser() {
  console.log("Adding a user...");
}
