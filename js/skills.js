const skillBars = document.querySelectorAll(".skill-level");

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const level = bar.getAttribute("data-level");
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.width = level + "%";
      }, 200);
    }
  });
});

skillBars.forEach((bar) => skillObserver.observe(bar));