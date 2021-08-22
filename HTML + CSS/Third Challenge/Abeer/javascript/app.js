const humberger = document.querySelector(
  ".header .nav-bar .nav-list .humberger"
);
const mobilemenu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header.container");

humberger.addEventListener("click", () => {
  humberger.classList.toggle("active");
  mobilemenu.classList.toggle("active");
});
document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323C";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
