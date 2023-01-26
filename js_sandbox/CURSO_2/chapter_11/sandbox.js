//------------------------------- TIMESTAMPS ------------------------------------

// const before = new Date('April 25 2019 7:30:59');
// const now = new Date();

// // console.log(now.getTime(), before.getTime());

// const diff = now.getTime() - before.getTime();
// console.log(diff);

// const mins = Math.round(diff / 1000 / 60);
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 24);
// console.log(mins, hours, days);

// console.log(`the blog was written ${days} days ago`);

// // converting timestamps into date objects
// const timestamp = 1675938474990;
// const timestamp = now;
// console.log(new Date(timestamp));




//------------------------------- BUILDING A DIGITAL CLOCK ----------------------
// const clock = document.querySelector('.clock');

// const tick = () => {
//   const now = new Date();

//   const h = now.getHours();
//   const m = now.getMinutes();
//   const s = now.getSeconds();

//   // console.log(h, m, s);

//   const html = `
//   <span>${h}</span> :
//   <span>${m}</span> :
//   <span>${s}</span> 
//   `;

//   clock.innerHTML = html;
// }

// setInterval(tick, 1000);





//------------------------------- DATE-FNS --------------------------------------
// PAGINA DE REFERENCIA: https://date-fns.org/v1.30.1/docs/format
// LINK DE REFERENCIA: http://cdn.date-fns.org/v1.9.0/date_fns.min.js
// const now = new Date();

// //console.log(dateFns.isToday(now));

// // formating options
// console.log(dateFns.format(now, 'YYYY'));
// console.log(dateFns.format(now, 'MMM'));
// console.log(dateFns.format(now, 'dddd'));
// console.log(dateFns.format(now, 'Do'));
// console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));

// // comparing dates
// const before = new Date('April 25 2019 12:00:00');
// console.log(dateFns.distanceInWords(now, before, { addSuffix: true }));




//------------------------------- TIMESTAMPS ------------------------------------