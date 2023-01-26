/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** OBJECTS LITERALS ********************************/
//////////////////////////////////////////////////////////////////////

// object literals

// let user = {
//   name: 'crystal',
//   age: 30,
//   email: 'crystal@thenetnitnja.co.uk',
//   location: 'berlin',
//   blogs: ['why mac & cheese rules', '10 things to make with marmite']
// };

// access to objects

// console.log(user);
// console.log(user.name);

// user.age = 35;
// console.log(user.age);

// const key = 'location';
// console.log(user[key]);

// console.log(user['name']);
// user['name'] = 'aloy';
// console.log(user['name']);

// console.log(typeof user);





// /*************************************************************/


// ///////////////////////////////////////////////////////////////////////
// /************** ADDING METHODS ********************************/
// //////////////////////////////////////////////////////////////////////

// // adding methods

// let user = {
//   name: 'crystal',
//   age: 30,
//   email: 'crystal@thenetnitnja.co.uk',
//   location: 'berlin',
//   blogs: ['why mac & cheese rules', '10 things to make with marmite'],
//   login: function () {
//     console.log('the user logged in');
//   },
//   logout() {
//     console.log('this user log out');
//   },
//   logBlogs() {
//     //console.log(this.blogs);
//     console.log('this user has written the following blogs');
//     this.blogs.forEach(blog => {
//       console.log(blog);
//     })
//   }
// };

// user.logBlogs();
// console.log(this);






/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** OBJECTS IN ARRAYS ********************************/
//////////////////////////////////////////////////////////////////////

// objects in arrays

// const blogs = [
//   { title: 'why mac & cheese rules', likes: 30 },
//   { title: '10 things to make with marmite', likes: 50 }
// ];

//console.log(blogs);

// let user = {
//   name: 'crystal',
//   age: 30,
//   email: 'crystal@thenetnitnja.co.uk',
//   location: 'berlin',
//   blogs: [{ title: 'why mac & cheese rules', likes: 30 },
//   { title: '10 things to make with marmite', likes: 50 }],
//   login: function () {
//     console.log('the user logged in');
//   },
//   logout() {
//     console.log('this user log out');
//   },
//   logBlogs() {
//     //console.log(this.blogs);
//     console.log('this user has written the following blogs:');
//     this.blogs.forEach(blog => {
//       console.log(blog.title, blog.likes);
//     })
//   }
// };

// user.logBlogs();
// console.log(this);




/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** MATH OBJECT ********************************/
//////////////////////////////////////////////////////////////////////

// math object

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // random numbers

// const random = Math.random();

// console.log(random);
// console.log(Math.round(random * 100));




/*************************************************************/


///////////////////////////////////////////////////////////////////////
/************** PRIMITIVE VALUES VS REFERENCE TYPES ********************************/
//////////////////////////////////////////////////////////////////////

// primitive values 

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

// userOne = { name: 'link', age: 19 };
// userTwo = userOne;

// console.log(userOne, userTwo);

// userOne.name = 'zelda';
// userOne.age = 21;

// console.log(userOne, userTwo);