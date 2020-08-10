// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log('callback function fire')
// }, 2000);

// console.log(3);
// console.log(4);


// PAGINA DE REFERENCIA: https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/readystate


//--------------------------------- MAKING HTTP REQUESTS -----------------------------------
//--------------------------------- CALLBACK FUNCTIONS -------------------------------------
//--------------------------------- JSON DATA ----------------------------------------------
//--------------------------------- CALLBACK HELL ------------------------------------------
//--------------------------------- PROMISES -----------------------------------------------
//--------------------------------- CHAINING PROMISES --------------------------------------

// const getTodos = (resource) => {

//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//       // console.log(request, request.readyState);
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         // callback(undefined, data);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         // callback('cout not fetch data', undefined);
//         reject('cout not fetch data');
//       }
//     });

//     // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//     // request.open('GET', 'todos.json');
//     request.open('GET', resource);
//     request.send();
//   });
// };

// getTodos('todos/alan.json').then((data) => {
//   console.log('promise 1 reolved: ', data);
//   return getTodos('todos/bryan.json');
// }).then((data) => {
//   console.log('promise 2 resolved', data);
//   return getTodos('todos/wicho.json');
// }).then((data) => {
//   console.log('promise 3 resolved', data);
// }).catch((err) => {
//   console.log('primserejected', err);
// });


// getTodos('todos/alan.json', (err, data) => {
//   console.log('callback fired');
//   console.log(data);
//   getTodos('todos/bryan.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/bryan.json', (err, data) => {
//       console.log(data);
//     });
//   });
//   // if (err) {
//   //   console.log(err);
//   // } else {
//   //   console.log(data);
//   // }
// });



// promise example

// const getSomething = () => {

//   return new Promise((resolve, reject) => {
//     // fetch something
//     resolve('some data');
//     reject('some error');
//   });

// };

// getSomething().then((data) => {
//   console.log(data);
// }, (err) => {
//   console.log(err);
// });

// getSomething().then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// });





//--------------------------------- FETCH API --------------------------------------

// fetch('todos/alan.json')
//   .then((response) => {
//     console.log('resolved', response);
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log('rejected', err);
//   });





//--------------------------------- TROWING & CATCHING ERRORS ------------------------
//--------------------------------- ASYNC & AWAIT ------------------------------------

const getTodos = async () => {

  const response = await fetch('todos/alans.json');

  if (response.status !== 200) {
    throw new Error('cannot fetch the data');
  }
  const data = await response.json();

  return data;
};

getTodos()
  .then(data => console.log('resolved:', data))
  .catch(err => console.log('rejected', err.message));