//-------------------- OBJECTS AND ARRAYS ---------------------------//

// // Arrays
// let names = ['spiderman', 'fifa', 'tlou'];

// names.push('uncharted');
// // names.push(3);
// // names[0] = 3;

// let numbers = [10, 20, 30, 40];

// numbers.push(25);
// // numbers.push('cepi');
// // numbers[i] = 'cepi';

// let mixed = ['ken', 4, 'ryu', 9];

// mixed.push('ryu');
// mixed.push(2);
// mixed[0] = 100;



// // Objects
// let ninja = {
//   name: 'mario',
//   belt: 'black',
//   age: 30
// };

// ninja.age = 40;
// ninja.name = 'ryu';
// //ninja.name = 20;
// //ninja.skills = ['figthing','sneaking'];

// ninja = {
//   name: 'yoshi',
//   belt: 'black',
//   age: 10,
//   //skills: []
// }


//----------------- EXPLICIT TYPES -----------------------//

// let character: string;
// let age: number;
// let isLoggedIn: boolean;

// //age = 'luigi';
// age = 30;

// //isLoggedIn = 25;
// isLoggedIn = true;


// // ARRAYS //
// let ninjas: string[] = []; // initialized
// ninjas.push('alan');

// // UNION TYPES //
// let mixed: (number | string | boolean)[] = [];
// mixed.push('hello');
// mixed.push(20);
// mixed.push(false);

// console.log(mixed);

// let uid: string | number;
// uid = 123;
// uid = '123';

// // Objects
// let ninjaOne: object;
// ninjaOne = { name: 'alan', age: 25 };

// let ninjaTwo: {
//   name: string,
//   age: number,
//   beltColour: string
// };

// ninjaTwo = {
//   name: 'alan',
//   age: 10,
//   beltColour: 'balck'
// };

//--------------- DYNAMIC (ANY) TYPES ---------------------//

// let age: any = 25;

// age = true;
// console.log(age);
// age = 'hello';
// console.log(age);
// age = { name: 'alan' };
// console.log(age);

// let mixed: any[] = [];
// mixed.push('alan');
// mixed.push(2);
// mixed.push(false);
// console.log(mixed);

// let ninja: { name: any, age: any };
// ninja = { name: 'yoshi', age: 25 };
// console.log(ninja);
// ninja = { name: 25, age: 'yoshi' };
// console.log(ninja);





//------- BETTER WORKFLOW & TSCONFIG -----------//
// console.log('aggh');


// DOCUMENTATION
// https://www.typescriptlang.org/docs/home.html





//----------------------- FUNCTIONS BASICS ------------------//
// let greet: Function;

// //greet = 'hello';

// greet = () => {
//   console.log('hello, again');
// }

// const add = (a: number, b: number, c?: number | string): void => {
//   console.log(a + b);
//   console.log(c);
// }

// add(5, 10);

// const minus = (a: number, b: number): number => {
//   return a + b;
// }

// let result = minus(10, 5);
//result = 'aggh';





//---------------------------- TYPE ALIASES ---------------------------------//
// type StringOrNum = string | number;
// type objWithName = { name: string, uid: StringOrNum };

// const lgDetails = (uid: StringOrNum, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// }

// const greet = (user: objWithName) => {
//   console.log(`${user.name} says hello`);
// }






//--------------------------- FUNCTIONS TYPES (SIGNATURES) -----------------------
//let greet: Function;

// // example 1
// let greet: (a: string, b: string) => void;
// greet = (name: string, greeting: string) => {
//   console.log(`${name} says ${greeting}`);
// }

// // example 2
// let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numberTwo: number, action: string) => {
//   if (action == 'add') {
//     return numOne + numberTwo;
//   } else {
//     return numOne + numberTwo;
//   }
// }

// // example 3

// type person = { name: string, age: number };

// let logDetails: (obj: person) => void;
// logDetails = (ninja: person) => {
//   console.log(`${ninja.name} is ${ninja.age} years old`);
// }







