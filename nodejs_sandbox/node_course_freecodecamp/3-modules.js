// CommonJS, every file is module (by default)
// MODULES - ENCAPSULATED CODE (only share minimun)
// https://www.geeksforgeeks.org/node-js-modules/
const names = require("./4-names");
const sayHi = require("./5-utils.js");
const data = require("./6-alternative-flavor.js");
require("./7-mind-granade");

// console.log(data);
console.log(names);

sayHi("Karla");
sayHi(names.rocio);
