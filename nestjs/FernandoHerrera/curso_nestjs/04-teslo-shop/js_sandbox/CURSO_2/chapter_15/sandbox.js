//------------------------------- OBJECT LITERAL RECAP ----------------------------------
// const userOne = {
//   username: 'kratos',
//   email: 'kratos@gow.sony.us',
//   login() {
//     console.log('the user logged in');
//   },
//   logout() {
//     console.log('the user logged out');
//   }
// };

// console.log(userOne.email, userOne.username);
// userOne.login();

// const userTwo = {
//   username: 'kratos',
//   email: 'aloy@hzd.sony.us',
//   login() {
//     console.log('the user logged in');
//   },
//   logout() {
//     console.log('the user logged out');
//   }
// };

// console.log(userTwo.email, userTwo.username);
// userTwo.login();

// const userThree = new userOne('alan@gmail.com', 'alan');




//------------------------------- CLASSES ----------------------------------

// class User {
//   constructor(username, email) {
//     // set up properties
//     this.username = username;
//     this.email = email;
//   }
// }

// const userOne = new User('alan', 'alansito_95@gmail.com');
// const userTwo = new User('bryan', 'bryanbaez2504@gmail.com');
// console.log(userOne, userTwo);

// the 'new' keyword
// 1 - creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object



//-------------------- CLASS METHODS & METHOD CHAINING ------------------------------

// class User {
//   constructor(username, email) {
//     // set up properties
//     this.username = username;
//     this.email = email;
//     this.score = 0;
//   }
//   login() {
//     console.log(`${this.username} just logged in`);
//     return this;
//   }
//   logout() {
//     console.log(`${this.username} just logged out`);
//     return this;
//   }
//   incScore() {
//     this.score += 1;
//     console.log(`${this.username} has a score of ${this.score}`);
//     return this;
//   }
// }

// const userOne = new User('alan', 'alansito_95@gmail.com');
// const userTwo = new User('bryan', 'bryanbaez2504@gmail.com');

// console.log(userOne, userTwo);

// userOne.login().incScore().logout();




//-------------------- CLASS INHERITANCE (SUBCLASES) ------------------------------

// class User {
//   constructor(username, email) {
//     // set up properties
//     this.username = username;
//     this.email = email;
//     this.score = 0;
//   }
//   login() {
//     console.log(`${this.username} just logged in`);
//     return this;
//   }
//   logout() {
//     console.log(`${this.username} just logged out`);
//     return this;
//   }
//   incScore() {
//     this.score += 1;
//     console.log(`${this.username} has a score of ${this.score}`);
//     return this;
//   }
// }

// class Admin extends User {
//   deleteUser(user) {
//     users = users.filter((u) => {
//       return u.username !== user.username;
//     });
//   }
// };

// const userOne = new User('alan', 'alansito_95@gmail.com');
// const userTwo = new User('bryan', 'bryanbaez2504@gmail.com');
// const userThree = new Admin('ronaldo', 'cr7@gmail.com');

// console.log(userOne, userTwo, userThree);

// // userOne.login().incScore().logout();

// let users = [userOne, userTwo, userThree];
// console.log(users);

// userThree.deleteUser(userTwo);
// console.log(users);





// //-------------------- SUPER() ------------------------------

// class User {
//   constructor(username, email) {
//     // set up properties
//     this.username = username;
//     this.email = email;
//     this.score = 0;
//   }
//   login() {
//     console.log(`${this.username} just logged in`);
//     return this;
//   }
//   logout() {
//     console.log(`${this.username} just logged out`);
//     return this;
//   }
//   incScore() {
//     this.score += 1;
//     console.log(`${this.username} has a score of ${this.score}`);
//     return this;
//   }
// }

// class Admin extends User {

//   constructor(username, email, title) {
//     super(username, email);
//     this.title = title;
//   }

//   deleteUser(user) {
//     users = users.filter((u) => {
//       return u.username !== user.username;
//     });
//   }
// };

// const userOne = new User('alan', 'alansito_95@gmail.com');
// const userTwo = new User('bryan', 'bryanbaez2504@gmail.com');
// const userThree = new Admin('ronaldo', 'cr7@gmail.com', 'golden bal');

// console.log(userOne, userTwo, userThree);

// // userOne.login().incScore().logout();

// let users = [userOne, userTwo, userThree];
// console.log(users);

// userThree.deleteUser(userTwo);
// console.log(users);




//-------------------- CONSTRUCTORS (UNDER THE HOOD) AND PROTOYPE MODEL ------------------------------

// constructors function

// function User(username, email) {
//   this.username = username;
//   this.email = email;
// }

// User.prototype.login = function () {
//   console.log(`${this.username} has logged in`);
//   return this;
// }

// User.prototype.logout = function () {
//   console.log(`${this.username} has logged out`);
//   return this;
// }

// function Admin(username, email, title) {
//   User.call(this, username, email);
//   this.title = title;
// }

// Admin.prototype = Object.create(User.prototype);

// Admin.prototype.deleteUser = function () {
//   // delete a user
// }

// // class User {
// //   constructor(username, email) {
// //     // set up properties
// //     this.username = username;
// //     this.email = email;
// //   }
// // }

// const userOne = new User('alan', 'alansito_95@gmail.com');
// const userTwo = new User('bryan', 'bryanbaez2504@gmail.com');
// const userThree = new Admin('ronaldo', 'cr7@gmail.com', 'batipibe')

// console.log(userOne, userTwo, userThree);
// userOne.login().logout();




