const navIcon = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navIcon.addEventListener("click", function () {
  links.classList.toggle("show-link");
});
