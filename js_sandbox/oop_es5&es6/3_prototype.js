// Constructor 
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// getAge
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

// Instatitate an Object
const book1 = new Book('Book One', 'Alan Acosta', '2011');
const book2 = new Book('Book Two', 'Fernanda Slaughter', '2010');

// Revise / Change Year
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
}


console.log(book2.getSummary());
console.log(book2.getAge());
console.log(book2);
book2.revise('2019');
console.log(book2);