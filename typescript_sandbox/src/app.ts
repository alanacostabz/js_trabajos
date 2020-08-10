//---------------------- THE DOM & TYPE CASTING --------------------------
// const anchor = document.querySelector('a')!;


// // if (anchor) {
// //   console.log(anchor.href);
// // }

// console.log(anchor.href);

//const form = document.querySelector('form')!;
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);


//---------------------------------------------------------------------------------


// Interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'alan',
  age: 25,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent', amount);
    return amount;
  }
};

//let someone: IsPerson;
const greetPerson = (person: IsPerson) => {
  console.log('hello', person.name);
}

greetPerson(me);

console.log(me);






// // Classes
// class Invoice {
//   // readonly client: string;
//   // private details: string;
//   // public amount: number;

//   constructor(
//     readonly client: string,
//     private details: string,
//     public amount: number
//   ) {
//     // this.client = c;
//     // this.details = d;
//     // this.amount = a;
//   }

//   format() {
//     return `${this.client} owes $${this.amount} for ${this.details}`;
//   }
// }

import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('alan', 'web work', 250);
// docTwo = new Payment('luigi', 'plumbing work', 250);

// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);


// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);

// invoices.forEach(inv => {
//   console.log(inv.client, inv.amount, inv.format());
// });


// invOne.client = 'Yoshi';
// invOne.amount = 200;

// console.log(invOne);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let values: [string, string, number];
  values = [toFrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, 'end');

});

// TUPLES

let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'Yoshi';
arr = [10, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 0;

let student: [string, number];
student = ['aggh', 2222];





// GENERICS

// const addUID = <T extends { name: string }>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// }

// let docOne = addUID({ name: 'alan', age: 40 });
// // let docTwo = addUID('yoshi');
// console.log(docOne.name);


// with interfaces
// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }

// const docThree: Resource<object> = {
//   uid: 1,
//   resourceName: 'person',
//   data: { name: 'shaun' }
// }

// const docFour: Resource<string[]> = {
//   uid: 2,
//   resourceName: 'shoppingList',
//   data: ['test', 'aggh']
// }

// //console.log(docThree, docFour);



// // ENUMS
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }


// interface Resources<T> {
//   uid: number;
//   resourceType: ResourceType;
//   data: T;
// }

// const docFive: Resources<object> = {
//   uid: 1,
//   resourceType: ResourceType.BOOK,
//   data: { name: 'shaun' }
// }

// const docSix: Resources<object> = {
//   uid: 2,
//   resourceType: ResourceType.PERSON,
//   data: { name: 'yoshi' }
// }

// console.log(docFive, docSix);
