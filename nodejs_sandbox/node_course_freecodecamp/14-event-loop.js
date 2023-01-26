const { readFile } = require("fs");

console.log("started a fitst task");

// CHECK FILE PATH !!!
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting next task");

// started operating system process
console.log("first");
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");
// completed and exited operating system process

// setInterval(() => {
//   console.log("hello world");
// }, 2000);
console.log("I will run first");
// process stays alive unless
// kill process CONTROL + C
// unexpected error
