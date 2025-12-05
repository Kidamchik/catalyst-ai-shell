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

// ТЕМА: кладём data-theme на <html>, а не на body
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("catalyst-theme", theme);
}

// загружаем сохранённую тему или по умолчанию dark
const savedTheme = localStorage.getItem("catalyst-theme");
if (savedTheme === "light" || savedTheme === "dark") {
  setTheme(savedTheme);
} else {
  setTheme("dark");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "dark";
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
