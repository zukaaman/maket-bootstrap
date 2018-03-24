var menuButtonOpen = document.querySelector(".menu-button-open"),
    menuButtonClose = document.querySelector(".menu-button-close"),
    menu = document.querySelector(".header-menu");

menuButtonOpen.addEventListener("click", function() {
  menu.classList.add("menu-active");
});

menuButtonClose.addEventListener("click", function() {
  menu.classList.remove("menu-active");
});

menu.addEventListener("click", function() {
  menu.classList.remove("menu-active");
});
