let currentLang = "fr";
const langToggle = document.getElementById("langToggle");
const langFlag = document.getElementById("langFlag");

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  langFlag.src =
    currentLang === "fr" ? "images/flags/fr.png" : "images/flags/en.png";

  document.querySelectorAll("[data-fr]").forEach((el) => {
    el.textContent = el.getAttribute("data-" + currentLang);
  });
});