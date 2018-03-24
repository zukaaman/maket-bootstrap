var buttonAdmin = document.querySelector(".button-admin"),
    admin = document.querySelector(".admin"),
    adminButtonClose = document.querySelector(".admin-button-close");

buttonAdmin.addEventListener("click", function() {
  admin.classList.toggle("admin-active");
});

adminButtonClose.addEventListener("click", function() {
  admin.classList.remove("admin-active");
});
