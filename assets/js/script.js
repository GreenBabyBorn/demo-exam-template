// Скрипт для работы кнопки меню
const menuBtn = document.querySelector(".header__btn");
const menu = document.querySelector(".header__menu");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});
