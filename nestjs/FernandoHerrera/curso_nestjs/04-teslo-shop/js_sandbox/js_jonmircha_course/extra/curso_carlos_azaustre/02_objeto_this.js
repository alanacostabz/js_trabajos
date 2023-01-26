/**
 * THIS: es un objeto especial de javascript que hace referencia, al contexto en el que se está ejecutando la función
 */
// ES3
// var obj = {
//   foo: function () {
//     return "foo";
//   },
//   bar: function () {
//     var that = this;
//     document.addEventListener("click", function (event) {
//       that.foo;
//     });
//   },
// };

// ES5
// var obj = {
//   foo: function () {
//     return "foo";
//   },
//   bar: function () {
//     document
//       .addEventListener("click", function (event) {
//         this.foo;
//       })
//       .bind(this);
//   },
// };

// ES6
var obj = {
  foo: function () {
    return "foo";
  },
  bar: function () {
    document.addEventListener("click", (event) => this.foo());
  },
};
