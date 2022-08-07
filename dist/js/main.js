// TOGGLE MENU

const hamburgerBtn = document.querySelector(`.hamburger-btn`);
const menuBtn = document.querySelector(`.hamburger`);
const navItems = document.querySelector(`.nav-items`);

hamburgerBtn.addEventListener(`click`, () => {
  console.log(`clicked`);
  hamburgerBtn.classList.toggle(`open`);
  navItems.classList.toggle(`open`);
});
