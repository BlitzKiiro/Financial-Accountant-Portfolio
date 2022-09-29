//modules
import { splashAnimation, showMenu, hideMenu } from "./animations.js";

//splash screen animation
splashAnimation();

//smooth scroll

const smoothScroll = new scrollToSmooth("a", {
  easing: "easeInOutBack",
  duration: 800,
  durationRelative: true,
});
if (window.innerWidth > 768) smoothScroll.init();
//query selectors
const toggleMenu = document.querySelector(".toggle-menu");
const navMenu = document.querySelector(".nav-menu");

let menuVisibile = false;

//toggle navmenu menu
toggleMenu.addEventListener("click", () => {
  if (!menuVisibile) {
    showMenu();
  } else {
    hideMenu();
  }
  menuVisibile = !menuVisibile;
});
