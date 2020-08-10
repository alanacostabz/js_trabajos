const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnsers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check answers
  userAnsers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // show results on page
  scrollTo(0, 0);

  result.classList.remove('d-none');

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);


});

// window object (global object)
// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form'));

//alert('aggh');
//window.alert('aggh');

// setTimeout(() => {
//   // do something
// }, 3000);

// let i = 0;

// const timer = setInterval(() => {
//   console.log('aggh');
//   i++;
//   if (i === 5) {
//     clearInterval(timer);
//   }
// }, 1000);