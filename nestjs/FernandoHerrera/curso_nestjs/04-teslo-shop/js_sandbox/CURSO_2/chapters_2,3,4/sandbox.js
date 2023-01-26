//////////////////////////////////////////////////
/******************* STRINGS ********************/
/////////////////////////////////////////////////

// Strings
// console.log('que pex morro');

// let email = 'xbox117@gmail.com';
// console.log(email);

// // Strings concatenation
// let firstName = 'John';
// let lastName = '117';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// // Getting characters
// console.log(fullName[0]);

// // String length
// console.log(fullName.length);

// // String Methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf('@');
// console.log(index);


/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** COMMON STRING METHODS ********************************/
//////////////////////////////////////////////////////////////////////

// let email = 'john117@xbox.com';

// let result = email.lastIndexOf('x');

// let result = email.slice(0, 4);

// let result = email.substr(4, 12);

// let result = email.replace('j', 's');

// let result = email.replace('x', 'n');

// console.log(result);


/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** NUMBERS ********************************/
//////////////////////////////////////////////////////////////////////

// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// math operators +, -, *, **, %

// console.log(10 / 2);
// let result = radius % 3;
//let result = pi * radius ** 2;

// ORDER OF OPERATION - B I D M A S

// let result = 5 * (10 - 3) ** 2;
// console.log(result);

//let likes = 10;
//likes++;
//likes--;
// likes += 10;
//likes -= 5;
//likes *= 5;
//likes /= 2;

//console.log(likes);

// NaN - NOT A NUMBER
// console.log(5 / 'hello');
// console.log(5 * 'hello');

// let result = 'the blog has ' + likes + ' likes';
// console.log(result);



/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** TEMPLATE STRINGS ********************************/
//////////////////////////////////////////////////////////////////////

// template strings
// const title = 'Death Stranding';
// const author = 'Hideo Kojima';
// const likes = 30;

// // concatenation way
// // let result = 'The videogame called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// // console.log(result);

// // templeate string way
// let result = `The videogame called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// // creating html templates
// let html = `
// <h2>${title}</h2>
// <p>${author}</p>
// <span>This blog has ${likes} likes</span>
// `;

// console.log(html);



/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** ARRAYS ********************************/
//////////////////////////////////////////////////////////////////////

// let ninjas = ['hazard', 'messi', 'dybala'];

// ninjas[1] = 'ronaldo';
// console.log(ninjas[1]);

// let ages = [20, 24, 25, 17];
// console.log(ages[2]);

// let random = ['alan', 'acosta', 24, 25];
// console.log(random);

//console.log(ninjas.length);
// let result = ninjas.join(',');
//let result = ninjas.indexOf('dybala');
// let result = ninjas.concat(['ronaldo', 'benzema']);



/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** NULL & UNDEFINED ********************************/
//////////////////////////////////////////////////////////////////////

// let age = null;

// console.log(age, age + 3, `the age is ${age}`);



/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** BOOLEANS & COMPARISIONS ********************************/
//////////////////////////////////////////////////////////////////////

// booleans & comparisions
//console.log(true, false, "true", "false");

// methods can return booleans
// let email = 'masterchief@xbox.us'
// let games = ['halo', 'gta', 'fifa'];

// let result = email.includes('@');
//let result = games.includes('gta');

//console.log(result);


// comparisions operators
// let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

// let name = 'messi';

// console.log(name == 'messi');
// console.log(name == 'Messi');
// console.log(name > 'bryan');
// console.log(name > 'Messi');
// console.log(name > 'Bryan');



/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** LOOSE VS STRICT COMPARISION ********************************/
//////////////////////////////////////////////////////////////////////

// let age = 25;

// loose comparision (difrent types can be equal)
// console.log(age == 25);
// // console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

// strict comparision (different types cannot be equal)
// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');






/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** TYPE CONVERSION ********************************/
//////////////////////////////////////////////////////////////////////

// type conversion
//let score = '100';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello');
//let result = String(50);
//let result = Boolean(100);
// let result = Boolean('0');

//console.log(result, typeof result);



/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** FOR LOOPS ********************************/
//////////////////////////////////////////////////////////////////////

// for loops

// for (let i = 0; i < 5; i++) {
//   console.log('in loop:' + i);
// }

// console.log('loop finished');

// const names = ['john', 'arthur', 'peter'];

// for (let i = 0; i < names.length; i++) {
//console.log(names[i]);
//   let html = `<div>${names[i]}</div>`;

//   console.log(html);
// }




/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** WHILE LOOP ********************************/
//////////////////////////////////////////////////////////////////////

// while loop
// const names = ['fifa', 'gta', 'cyberpunk']
// let i = 0;

// while (i < 5) {
//   console.log('in loop ', i);
//   i++;
// }

// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }





/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** DO WHILE LOOPS ********************************/
//////////////////////////////////////////////////////////////////////

// do while loops

// let i = 0;

// do {
//   console.log('val of i is: ', i);
//   i++;
// } while (i < 5);




/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** IF, IF ELSE, ELSE STATEMENTS ********************************/
//////////////////////////////////////////////////////////////////////

// if statements
// const age = 20;

// if (age > 19) {
//   console.log('you are over 20 years old');
// }

// const ninjas = ['peter', 'kratos', 'john', 'gerald'];

// if (ninjas.length > 3) {
//   console.log("that's a lot of ninjas");
// }

// const password = 'passwordagghh';

// if (password.length >= 12) {
//   console.log('that password is mighty strong');
// } else if (password.length >= 8) {
//   console.log('that password is long enough!');
// } else {
//   console.log('password is not long enough!');
// }




/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** LOGICAL OPERATORS - OR || - AND && ********************************/
//////////////////////////////////////////////////////////////////////

//logical operators - OR || and AND &&

// const password = 'p@ss10';

// if (password.length >= 12 && password.includes('@')) {
//   console.log('that password is mighty strong');
// } else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
//   console.log('that password is strong enough!');
// } else {
//   console.log('password is not strong enough!');
// }




/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** LOGICAL NOT (!) ********************************/
//////////////////////////////////////////////////////////////////////

// logical not (!)

// let user = false;

// if (!user) {
//   console.log('you must be logged in to continue');
// }

// console.log(!true);
// console.log(!false);





/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** BREAK & CONTINUE ********************************/
//////////////////////////////////////////////////////////////////////

// break and continue

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++) {

//   if (scores[i] === 0) {
//     continue;
//   }

//   console.log('you score: ', scores[i]);

//   if (scores[i] === 100) {
//     console.log('congrats, you got the top score');
//     break;
//   }
// }




/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** BREAK & CONTINUE ********************************/
//////////////////////////////////////////////////////////////////////

// switch statements
// const grade = 'D';

// switch (grade) {
//   case 'A':
//     console.log('you got an A!');
//     break;
//   case 'B':
//     console.log('you got an B!');
//     break;
//   case 'C':
//     console.log('you got an C!');
//     break;
//   case 'D':
//     console.log('you got an D!');
//     break;
//   case 'E':
//     console.log('you got an E!');
//     break;
//   default:
//     console.log('no a valid grade!')
// }




/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** VARIABLES & BLOCK SCOPE ********************************/
//////////////////////////////////////////////////////////////////////

// variables & block scope
// let age = 30; // global scope

// if (true) {
//   let age = 40;
//   let name = 'aloy';
//   console.log('inside 1st code block: ', age, name);

//   if (true) {
//     let age = 50;
//     console.log('inside 2nd code block: ', age);
//   }
// }

// console.log('outside code block: ', age, name);







/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** FUNCTIONS ********************************/
//////////////////////////////////////////////////////////////////////

// function declaration
// function greet() {
//   console.log('que pex morro');
// }

// // function expression
// const speak = function () {
//   console.log('good day!');
// };

// greet();
// speak();



/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** ARGUMENTS & PARAMETERS ********************************/
//////////////////////////////////////////////////////////////////////

// arguments & parameters

// const speak = function (name = 'aloy', time = 'night') {
//   console.log(`good ${time} ${name}`);
// };

// speak();
// speak('chris');
// speak('alan', 'morning');






/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** RETURNING VALUES ********************************/
//////////////////////////////////////////////////////////////////////

// returning values

// const speak = function (name = 'aloy', time = 'night') {
//   console.log(`good ${time} ${name}`);
// };

// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// }

// const area = calcArea(5);
// console.log(area);








/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** ARROW FUNCTIONS ********************************/
//////////////////////////////////////////////////////////////////////


// regular functions
// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };


// arrow function
// const calcArea = (radius) => 3.14 * radius ** 2;

// const area = calcArea(5);
// console.log(area);

// practice arrow functions

// a) regular function
// const greet = function () {
//   return 'hello world';
// }

// a) arrow function
// const greet = () => 'hello, world';
// const result = greet();
// console.log(result);


// b) regular function
// const bill = function (products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

// b) arrow function
// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }
// const result = bill([59.99, 59.99], 0.10);
// console.log(result);




/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** FUNCTIONS VS METHODS ********************************/
//////////////////////////////////////////////////////////////////////

// const name = 'aloy';

// // functions
// const greet = () => 'que pex';

// let resultOne = greet();
// console.log(resultOne);

// // methods
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);



/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** FOREACH METHOD & CALLBACKS ********************************/
//////////////////////////////////////////////////////////////////////

// callbacks & foreach

// const myFunc = (callbackFunc) => {
//   // do something
//   let value = 50;
//   callbackFunc(value);
// };

// myFunc((value) => {
//   // do something
//   console.log(value);
// });

// let player = ['messi', 'ronaldo', 'zidane', 'batistuta', 'rooney'];

// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`)
// }

// player.forEach(logPerson);





/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** CALLBACK FUNCTION IN ACTION ********************************/
//////////////////////////////////////////////////////////////////////

// get a reference to the 'ul'
// const ul = document.querySelector('.people');

// let player = ['messi', 'ronaldo', 'zidane', 'batistuta', 'rooney'];

// let html = ``;

// player.forEach(person => {
//   // create html template
//   html += `<li style="color: purple">${person}</li>`;
// });

// console.log(html);
// ul.innerHTML = html;






