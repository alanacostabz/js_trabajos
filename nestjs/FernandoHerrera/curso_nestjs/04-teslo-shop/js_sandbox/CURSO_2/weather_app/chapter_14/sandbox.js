// // store data in local storage
// localStorage.setItem('name', 'aloy');
// localStorage.setItem('age', 16);


// // get data from local storage
// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');
// console.log(name, age);


// // updating data
// // localStorage.setItem('name', 'john');
// // localStorage.age = '35';

// // name = localStorage.getItem('name');
// // age = localStorage.getItem('age');
// // console.log(name, age);

// // deleting data form local storage
// //localStorage.removeItem('name');
// localStorage.clear();

// name = localStorage.getItem('name');
// name = localStorage.getItem('age');

// console.log(name, name);



//-------------------------- STRINGIFYING & PARSING DATA -------------------------------

const todos = [
  { text: 'play overwatch', author: 'alan' },
  { text: 'buy dark souls remastered', author: 'bryan' },
  { text: 'go to run in the morning', author: 'wicho' }
];

// console.log(JSON.stringify(todos));
localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored));