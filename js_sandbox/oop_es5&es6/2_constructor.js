// Constructor 
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// getSummary
Book.prototype.getSummary = function () {

}

// Instatitate an Object
const book1 = new Book('Book One', 'Alan Acosta', '2011');
const book2 = new Book('Book Two', 'Fernanda Slaughter', '2010');

console.log(book2.getSummary());