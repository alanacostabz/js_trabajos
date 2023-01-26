// const s1 = 'hello';
// console.log(typeof s1);

// const s2 = new String('hello');
// console.log(typeof s2);

// console.log(window);
// window.alert(1);
// alert(1);
// console.log(navigator.appVersion);


/* OBJECTS LITERALS */
const book1 = {
  title: 'Book One',
  author: 'Alan Acosta',
  year: '2010',
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
  }
};

const book2 = {
  title: 'Book Two',
  author: 'Fernanda Slaughter',
  year: '2011',
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
  }
};

// console.log(book1);
// console.log(book1.title);
// console.log(book1.getSummary());
console.log(Object.values(book2));
console.log(Object.keys(book2));