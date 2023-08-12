const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const sliderChecks = document.querySelectorAll('.check');

let currentSlide = 0;

sliderChecks.forEach((check, index) => {
  check.addEventListener('click', () => {
    goToSlide(index);
  });
});

function goToSlide(index) {
  if (index >= 0 && index < slides.length) {
    currentSlide = index;
    const translateX = -index * 100;
    slider.style.transform = `translateX(${translateX}%)`;
    updateActiveCheck(index);
  }
}

function updateActiveCheck(index) {
  sliderChecks.forEach((check, checkIndex) => {
    if (checkIndex === index) {
      check.classList.add('active');
    } else {
      check.classList.remove('active');
    }
  });
}

function autoSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  goToSlide(currentSlide);
}

setInterval(autoSlide, 3000); // Change the duration as needed (in milliseconds)
