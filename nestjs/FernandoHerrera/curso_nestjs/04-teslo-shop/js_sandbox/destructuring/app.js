// Destructuring Assignment

// let a,b;

// [a,b] = [100,200];
// // Rest pattern
// [a,b,c, ...rest] = [100,200,300,400,500];

// //console.log(rest);


// ({a,b} = {a:100,b:200,c:300,d:400});
// ({a,b, ...rest} = {a:100,b:200,c:300,d:400});

// console.log(a,b);
// console.log(rest);


// Array Destructuring
// const people = ['Alan','Alejandra','Yazbeck'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);



// Parse array returned from function
// function getPeople() {
//     return ['Alan','Alejandra','Yazbeck'];
// }

// let person1, person2, person3;
// [person1,person2,person3] = getPeople();
// console.log(person1, person2, person3);



// Object destructuring
const person = {
    name: 'Yazbeck Alejandra',
    age: 23,
    city: 'Hermosillo',
    gender: 'Female',
    sayHello: function() {
        console.log('Hello');
    }
}


// Old ES5
// const name = person.name,
//     age = person.age,
//     city = person.city;


// New ES6 Destructuring
const {name, age, city, sayHello} = person;

console.log( name, age, city);

sayHello();