let menu = document.querySelector(".menu");
let links = document.querySelector(".links");
let lis = document.querySelectorAll(".links li a");
menu.addEventListener("click", () => {
  links.classList.toggle("active");
});

lis.forEach((c) => {
  c.onclick = function () {
    links.classList.remove("active");
  };
});
