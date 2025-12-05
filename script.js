// Переключение экранов
const navButtons = document.querySelectorAll(".nav-btn");
const screens = document.querySelectorAll(".screen");

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.screen;

    navButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    screens.forEach((screen) => {
      screen.classList.toggle("active", screen.id === `screen-${target}`);
    });
  });
});

// Переключатель темы (Sun / Moon)
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

function setTheme(theme) {
  body.setAttribute("data-theme", theme);
  localStorage.setItem("catalyst-theme", theme);
}

// загружаем сохранённую тему
const savedTheme = localStorage.getItem("catalyst-theme");
if (savedTheme === "light" || savedTheme === "dark") {
  setTheme(savedTheme);
} else {
  setTheme("dark");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = body.getAttribute("data-theme") || "dark";
    setTheme(current === "dark" ? "light" : "dark");
  });
}

// Кнопки "Очистить" в блоках ввода
document.querySelectorAll(".card-io .btn.ghost").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card-io");
    const textarea = card.querySelector("textarea");
    if (textarea) textarea.value = "";
  });
});
