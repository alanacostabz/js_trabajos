/*
  PROTOTYPES
*/
// example 1
const person = { kind: "human" };

const user = Object.create(person);
user.name = "Rocío";
console.log(user.kind); // kind

Object.setPrototypeOf(user, { kind: "mammal" });
console.log(user.kind); // works, prints 'mammal'

// example 2
const human = { kind: "human" };

function Person(name) {
  this.name = name;
}

Person.prototype = human;

const rocio = new Person("Rocio");
console.log(rocio.kind);
