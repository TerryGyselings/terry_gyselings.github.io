const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document
  .querySelectorAll("section, .project-card, .skill, .timeline-item")
  .forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});