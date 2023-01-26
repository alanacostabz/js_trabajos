const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target / speed;
    setTimeout(updateCount, 1);
    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
    } else {
      count.innerText = target;
    }

  }

  updateCount();
})