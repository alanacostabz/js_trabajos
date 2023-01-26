////////////////////////////////////////////////////////////////
// Console uses
/*
//alert('Hello World!');
console.log(123);
console.log(true);
var greeting =  'AMLO';

console.log(greeting);
console.log(['nike','adidas']);
console.log({a:1,b:2});
console.table({a:1,b:2});

console.error('This is a error');
console.clear();
console.warn('This is a warning!');
console.time('Hello');
console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');
console.timeEnd('Hello')
*/

////////////////////////////////////////////////////////////////////////
// var, let, const
/*
var name = 'Alan Acosta';
console.log(name);
name = 'Cristiano Ronaldo';
console.log(name);

// Init var
var greeting;
console.log(greeting);
greeting = 'Hello!';
console.log(greeting);

// letters, number, _, $
// Can no start with a number;

// Multi word vars
var firstName = 'Alan'; // camel case
var first_name = 'Donald'; //underscore
var FirstName = 'Eden'; // Pascal case
var firstName;
 */

 /*
// let
let name = 'Alan Acosta';
console.log(name);
let nameFamous = 'Cristiano Ronaldo';
console.log(nameFamous);
*/

// const
//const name = 'Alan';
//console.log(name);
// Can not reassing
//name = 'Sara';
// Have to assign a value
// const greeting
/*
const person = {
    name: 'Alan',
    age: 27
}
person.name = 'Kurt';

console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);
*/





//////////////////////////////////////////////////////////////////////////
// Data types

/*
// PRIMITIVE

// string
const name = 'Leonel Messi';

// number
const age = 31;

// boolean
const hasKids = true;

// null
const car = null;

// undefined
let test;

// symbol
const sym = Symbol();


// REFERENCES TYPES - Objects

// Array

const hobbies = ['soccer','videogames'];

// Object literal

const addres = {
    city: 'Hermosillo',
    state: 'Sonora'
}

const today = new Date();

console.log(today);
*/



/////////////////////////////////////////////////////////////////////////////
/*
let val;

// number to string
val = String(5);
val = String(4+4);
// Bool to string
val = String(true);
// date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4,5]);
// toString()
val = (5).toString();
val = (true).toString();


//String to numbers
val = '5';
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);

val = parseInt('100');
val = parseFloat('100.31');


// Output
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(3));

const val1 = String(5);
const val2 = 6;
const sum = Number(val1) + val2;
console.log(sum);
console.log(typeof sum);
*/

/*


////////////////////////////////////////////////////////
// Numbers & the Math projects
const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math object

val = Math.PI;
val = Math.E;
val =  Math.round(2.8);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8,2);
val = Math.min(2,53,12,2,1);
val = Math.max(2,53,12,2,1);
val = Math.random();

val = Math.floor(Math.random() * 100);

console.log(val);
*/




//////////////////////////////////////////////////////////////////
// Strings Methods and Concatenation
/*
const firstName = 'Eden';
const lastName = 'Hazard';
const age = 28;
const str = 'Hola mi nombre es Phil';
const tags = 'Conferencia,de,XBOX';

let val;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Gareth';
val += ' Bale'

val = 'Hola mi nombre es ' + firstName + ' ' + lastName +
 ' y soy nuevo jugador del Real Madrid. Tengo ' + age + ' años.'


 // Escaping
 val = 'That\'s what awesome';


 // Length
 val = firstName.length;

 // Concat
 val = firstName.concat(' ',lastName);
console.log(val);

// Change case
val = firstName.toUpperCase();
val = firstName[0];

// indexOf()
val = firstName.indexOf('d');
val = firstName.lastIndexOf('d');

// charAt()
val = firstName.charAt('2');

// Get last character
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0,2);

// Slice()
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Phil', 'Kojima');

// includes()
val = str.includes('Phil');

console.log(val);
*/




////////////////////////////////////////////////////////////////////
// Template Literals
/*
const name = 'Kurt';
const age = 27;
const job = 'Musician';
const city = 'Seattle';

// Without template stirng (es5)
html = '<ul><li>Name: '+ name +' </li><li> ' + age + ' </li><li> ' + job +
' </li><li> ' + city + ' </li></ul>';

html = '<ul>' +
    '<li>Name: '+ name +' </li>' +
    '<li>Age: ' + age + ' </li>' +
    '<li>Job: ' + job + ' </li>' +
    '<li>City ' + city + ' </li>' +
    '</ul>';

function hello() {
    return 'hello';
}

// With template string (es6)
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2+2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;
document.body.innerHTML = html;
*/




//////////////////////////////////////////////////////////////////////
// Array and Array Methods
/*
// Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);

const fruit = ['EA','Microsoft','Bethesda','Square Enix','Ubisoft'];
const mixed = [22,'KAKA',null,{a:1,b:2},new Date()];

let val;

//Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS

// add on to end
//numbers.push(250);
// add to front
//numbers.unshift(120);
// take off from end
//numbers.pop();
// take off from front
//numbers.shift();
// Splice values
//numbers.splice(1,3)
// Reverse
//numbers.reverse();

// Concatenate arrays
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
//val = numbers.sort();

// Use the "compare function"
//val = numbers.sort(function(x,y){
  //  return x - y;
//});

// Reverse sort
//val = numbers.sort(function(x,y){
  //  return y - x;
//});

//Find
 function under50(num){
    return num < 50;
}
function over50(num){
    return num > 50;
}

val = numbers.find(over50);

console.log(val);
console.log(numbers);
*/








///////////////////////////////////////////////////////////////////////
// Objects literals
/*
const person = {
    firstName: 'Eden',
    lastName: 'Hazard',
    age: '28',
    email: 'ehazard10@gmail.com',
    hobbies: ['anime','videogames','soccer'],
    data: {
        team: 'Real Madrid',
        country: 'España'
    },
    getBirthYear: function(){
        return 2019 - this.age;
    }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.team;
val = person.data['country'];
val = person.getBirthYear();

console.log(val);


const people = [
    {name: 'Barbara', age: 26},
    {name: 'Andrea', age: 31},
    {name: 'Hayley', age: 30}
];

for(let i = 0; people.length; i++) {
    console.log(people[i].name);
}
*/

















//////////////////////////////////////////////////////////////
// Date times
/*
let val;

const today = new Date();
let birthday = new Date('4-25-1995 15:22:00');
birthday = new Date('April 25 1995');
birthday = new Date('4/25/1995');

val = today.getMonth();
//val = birthday;
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val =today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(2007);
birthday.setHours(30);

console.log(birthday);
*/
















////////////////////////////////////////////////////////////////////
// if/else statement
//const id = '100';
/*
// EQUAL TO
if (id == 100) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// NOT EQUAL TO
if (id != 100) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// EQUAL TO VALUE & TYPE
if (id === 100) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// EQUAL TO VALUE & TYPE
if (id !== 100) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}
*/

// Test if undefined
//if(typeof id !== 'undefined') {
  //  console.log(`The id is ${id}`);
//} else {
  //  console.log('No id');
//}

//GREATER O LESS THAN
//if (id <= 100) {
  //  console.log('CORRECT');
//} else {
  //  console.log('INCORRECT');
//}



// IF ELSE
//const color = 'red';
//if (color === 'red') {
  //  console.log('red');
//} else if (color === 'blue') {
  //  console.log('blue');
//} else {
  //  console.log('color is not red or blue')
//}



// LOGICAL OPERATORS
/*
const name = 'Eden';
const age = 28;

// AND &&
if (age > 0 && age < 12) {
    console.log(`${name} is a chid`);
} else if (age > 12 && age < 20) {
    console.log(`${name} is teenager`);
}  else {
    console.log(`${name} is an adult`)
}

// OR ||
if(age < 16 || age >65) {
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

const id = 100;
// TERNARY OPERATOR
console.log(id === 100 ? 'Correct' : 'Incorrect');

// WITHOUT BRACES
if (id === 100) console.log('Correct');
else console.log('Incorrect');
*/











/////////////////////////////////////////////////////////////////////////
// Switches
/*
const color = 'red';

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is no red or blue')
        break;
}

let day;
switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 6:
        day = 'Saturday';
        break;
    case 1:
        day = 'Monday';
        break;
}

console.log(`Today is ${day}`);
*/







/////////////////////////////////////////////////////////////
// Function and declarations expresions

// FUNCTION DECLARATIONS
/*
function greet(firstName = 'Eden', lastName = 'Hazard') {
    //if (typeof firstName === 'undefined'){firstName = 'Eden'}
    //if (typeof lastName === 'undefined'){lastName = 'Hazard'}
    //console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}

//console.log(greet('Eden','Hazard'));
//console.log(greet());


//FUNCTION EXPRESIONS

const square = function (x) {
    return x*x;
};
//console.log(square(8));


// IMMEDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

//(function (){
  //  console.log('IIFE ran...');
//})();

//(function (name){
//  console.log(`Hello ${name}`);
//})('Eden');


// PROPETY METHODS
const todo = {
    add: function(){
        console.log('add to do');
    },
    edit: function(id){
        console.log(`Edit to do ${id}`);
    }
}
todo.delete = function() {
console.log('delete to do...');
}
todo.add();
todo.edit(10);
*/





/////////////////////////////////////////////////////////////////////////
// GENERAL LOOPS

// FOR LOOP
/*
for(let i = 0; i < 10; i++) {
    //console.log('Number ' + i);
    if(i === 2) {
        console.log('2 is my favorite number');
        continue;
    }
    if(i === 5) {
        console.log('Stop the loop');
        break;
    }
    console.log('Number' + i);
}
*/



// WHILE LOOP
//let i = 0;
//while(i < 10) {
//    console.log('Number ' + i);
//    i++;
//}


// DO WHILE
//let i = 100;
//do {
//    console.log('Number ' + i);
//    i++;
//} while (i < 10);


// LOOP THROUGH ARRAY
//const cars = ['Ford','Chevrolet','Honda','Toyota'];
// for(let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }


// FOREACH
//  cars.forEach(function(car, index, array){
//      console.log(`${index}: ${car}`);
//      console.log(array);
// });


// MAP
// const users = [
//     {id: 1, name:'Microsoft'},
//     {id: 2, name:'Square enix'},
//     {id: 3, name:'Ubisoft'}
// ];

// const ids = users.map(function(user) {
//     return user.id;
// });

// console.log(ids);

// // FOR IN LOOP
// const user = {
//     firstName: 'Eden',
//     lastName: 'Hazard',
//     age: 28
// }

// for(let x in user) {
//     console.log(`${x} : ${user[x]}`);
// }





//////////////////////////////////////////////////////////////////////////
// A look in the window object

// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
//alert('Hello World');

// Prompt
//const input = prompt();
//alert(input);

// Confirm
// if(confirm('Are you sure')) {
//     console.log('YES');
// } else {
//     console.log('NO');
// }

//let val;

// Outter height and width
// val = window.outerHeight;
// val = window.outerWidth;

// // Outter height and width
// val = window.innerHeight;
// val = window.innerWidth;

// // Scroll points
// val = window.scrollY;
// val = window.scrollX;

// Location object
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

// Redirect
//window.location.href = 'http://google.com';
// Reload
//window.location.reload();

// History object
//window.history.go();
//val = window.history.length;

// Navigator Object
//val = window.navigator;
//val = window.navigator.appName;
//val = window.navigator.appVersion;
//val = window.navigator.userAgent;
//val = window.navigator.platform;
//val = window.navigator.vendor;
//val = window.navigator.language;

//console.log(val);

















//////////////////////////////////////////////////////////////////////
// Block scope with let and const
/*
// Global scope
var a = 1;
let b = 2;
const c = 3;

//  function test(){
//      var a = 4;
//      let b = 5;
//      const c = 6;
//      console.log('Function socpe: ', a, b, c);
//  }

//test();

 if(true) {
     // Block scope
     var a = 4;
     let b = 5;
     const c = 6;
     console.log('If socpe: ', a, b, c);
}

// for (let a = 0; a < 10; a++) {
//     console.log(`Loop ${a}`);
// }
console.log('Global socpe: ', a, b, c);
*/






//////////////////////////////////////////////////////////////////////////////////
// Constructors & the this keyword

// Person constructor
// function Person(name, dateOfBirth) {
//     this.name = name;
//     //this.age = age
//     this.birthday = new Date(dateOfBirth);
//     this.calculateAge = function() {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }

// const brad = new Person('Brad',16);
// const john = new Person('John',19);
// console.log(brad);
// console.log(john);


// const kurt = new Person('Kurt','5-04-1994');
// console.log(kurt.calculateAge());







////////////////////////////////////////////////////////////////////////////////
// Built in constructor

// // String 
// const name1 = 'Jeff';
// const name2 = new String('Jeff');

// //name2.foo = 'bar';

// //console.log(name2);

// console.log(typeof name2);

// if(name2 === 'Jeff') {
//     console.log('YES');
// } else {
//     console.log('NO');
// }

// // Number
// const num1 = 5;
// const num2 = new Number(5);

// // boolean
// const bool1 = true;
// const bool2 = new Boolean(true);

// // Functions
// const getSum1 = function(x,y) {
//     return x + y;
// }

// const getSum2 = new Function('x','y', 'return 1 + 1');

// // Object
// const john = {name:"John"};
// const john1 = new Object({name:'John'});

// // Array
// const arr1 = [1,2,3,4];
// const arra2 = new Array(1,2,3,4);

// // Regular Expressions
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+')








//////////////////////////////////////////////////////////////////////////
// Prototypal Inheritance


// // Person constructor
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// // Greeting
// Person.prototype.greeting = function() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('Alan','Acosta');
// console.log(person1.greeting());


// // Customer constructor
// function Customer(firstName, lastName, phone, membership) {
//     Person.call(this, firstName, lastName);

//     this.phone = phone;
//     this.membership = membership;
// }

// // Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// // Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// // Create customer
// const customer1 = new Customer('Hayley','Williams','555-555-5555','Premium');
// console.log(customer1);

// // Customer greeting
// Customer.prototype.greeting = function() {
//     return `Hello there ${this.firstName} ${this.lastName}, welcome to our company`;
// }

// console.log(customer1.greeting());







/////////////////////////////////////////////////////////////////////////////////////
// Object.create
// const personPrototypes = {
//     greeting: function() {
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     },
//     getsMarried: function(newLastName) {
//         this.lastName = newLastName;
//     }
// }



// const barbara = Object.create(personPrototypes);
// barbara.firstName = 'Barbara';
// barbara.lastName = 'Palvin';
// barbara.age = 26;

// barbara.getsMarried('Acosta');

// console.log(barbara.greeting());

// const jayden = Object.create(personPrototypes, { 
//     firstName: {value:'Jayden'},
//     lastName: {value: 'Jaymes'},
//     age: {value: 30}
// });
// console.log(jayden);
// console.log(jayden.greeting());







/////////////////////////////////////////////////////////////////////////////////
// Classes

// class Person {
//     constructor(firstName, LastName, dateOfBirth) {
//         this.firstName = firstName;
//         this.LastName = LastName;
//         this.birthday = new Date(dateOfBirth);
//     }

//     greeting() {
//         return `Hello there ${this.firstName} ${this.LastName}`;
//     }

//     calculateAge() {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff); 
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }

//     getsMarried(newLastName) {
//         this.LastName = newLastName;
//     }

//     static addNumbers(x,y) {
//         return x + y;
//     }
// }

// const mary = new Person('Mary','Williams','4-25-95');



// mary.getsMarried('Acosta');

// console.log(mary);

// console.log(mary.calculateAge());
// console.log(Person.addNumbers(1,2));











////////////////////////////////////////////////////////////////////////////////////
// Sub classes

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

const barbara =  new Customer('Barbara','Palvin','555 555 5555', 'Standard');

console.log(barbara.greeting());
console.log(Customer.getMembershipCost());



































































































































































