/*
  ASYNCHRONOUS CODE
    - js is single threaded
    - only one action at a time can be performed, js can't keep a timer running and do something else at the same time
    - but the browser is able to do that
*/

// example 1
setTimeout(sayHello, 5000); // handed off the browser

function sayHello() {
  console.log("Hi!");
}

// example 2
fetch("some-url.com/some-data")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("An error!");
    console.log(err);
  });
