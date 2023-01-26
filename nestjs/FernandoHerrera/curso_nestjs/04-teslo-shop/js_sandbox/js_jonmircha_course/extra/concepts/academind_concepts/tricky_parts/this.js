/*
  THIS
*/
const person = {
  age: 31,
  printAge() {
    console.log(this.age);
  },
};

const outputInfo = person.printAge;

outputInfo();
