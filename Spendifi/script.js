const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

function updateCarousel() {
  items.forEach(item => item.classList.remove('center'));
  items[currentIndex].classList.add('center');

  const centerOffset = carousel.offsetWidth / 2 - items[currentIndex].offsetLeft - items[currentIndex].offsetWidth / 2;
  carousel.style.transform = `translateX(${centerOffset}px)`;
}

// setInterval(updateCarousel,2000)

updateCarousel();

// Example: Next button listener
document.getElementById('nextButton').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

// Example: Previous button listener
document.getElementById('prevButton').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

