const carousel = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".project-slide");
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");
const dotsContainer = document.querySelector(".carousel-dots");

let index = 0;

function showSlide(i) {
  const containerWidth = carousel.clientWidth;
  const slideWidth = slides[i].offsetWidth + 40;
  const offset = slideWidth * i - (containerWidth - slides[i].offsetWidth) / 2;
  carousel.style.transform = `translateX(${-offset}px)`;
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll(".carousel-dots span");
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}

// Flèches
nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

slides.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === index) dot.classList.add("active");
  dot.addEventListener("click", () => {
    index = i;
    showSlide(index);
  });
  dotsContainer.appendChild(dot);
});

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 6000);

showSlide(index);