// const sayHello = function() {
//     console.log('XBOX ONE');
// }

// const sayHello = () =>{
//     console.log('XBOX ONE');
// }

// // One line function does not need braces
// const sayXBAX = () => console.log('XBAX');

// // One line returns
// const sayHalo = () => 'HALO';
// //sames as above
// const sayHalo = function() {
//     return 'HALO';
// }

// sayHello();
// sayXBAX();

// Return object
//const sayHalo = () => ({msg: 'HALO'});

// Single param does not need parenthesis
//const sayHalo = (name) => console.log(`Videogame: ${name}`)

// Multiple params need parenthesis
// const sayHalo = (name, consola) => console.log(`Videogame: ${name} ${consola}`);
// sayHalo('HALO','XBOX');

const users = ['Drake', 'John', 'Ellie'];

//Shorter
// const nameLengths = users.map((name) => {
//     return name.length;
// });

//Shortest
const nameLengths = users.map(name => name.length);

// const nameLengths = users.map(function(name) {
//     return name.length;
// });

console.log(nameLengths);

