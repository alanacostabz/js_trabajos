// GLOBALS - NO WINDOW
// https://www.geeksforgeeks.org/node-js-global-objects/
// https://nodejs.org/api/globals.html

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);

setInterval(() => {
  console.log("hello world");
}, 1000);
