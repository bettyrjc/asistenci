const close_document = document.getElementById("close");
const menu = document.getElementById("menu");
const sideNav = document.querySelector(".nav-bar");

menu.addEventListener("click", (e) => {
  console.log("Hola");
  sideNav.classList.add("active");
  e.preventDefault();
});

close_document.addEventListener("click", (e) => {
  console.log("chao");
  sideNav.classList.remove("active");
  e.preventDefault();
});
