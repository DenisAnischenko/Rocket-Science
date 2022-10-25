const openBurgerBtn = document.querySelector("#open-burger-btn");
const closeBurgerBtn = document.querySelector("#close-burger-btn");
const menuBurger = document.querySelector(".menu__burger");
const content = document.querySelector(".content");
const links = document.querySelectorAll(".burger__link");

function openBurger() {
  menuBurger.classList.add("menu__burger-opened");
}

function closeBurger() {
  menuBurger.classList.remove("menu__burger-opened");
}

openBurgerBtn.addEventListener("click", openBurger);

closeBurgerBtn.addEventListener("click", closeBurger);

content.addEventListener("click", closeBurger);
window.addEventListener("scroll", (e) => {
  if (window.innerHeight > 567) {
    closeBurger();
  }
});

links.forEach((el) => {
  el.addEventListener("click", closeBurger);
});
