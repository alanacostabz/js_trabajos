const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideIntervak;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for previous slide
  if (current.previousElementSibling) {
    // Add current to previous sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Buttons envents
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    // Auto slide
    if (auto) {
      // Run next slide at interval time
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  }
})
prev.addEventListener('click', e => {
  nextSlide();
  clearInterval(slideInterval);
  // Auto slide
  if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
  }
})

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}