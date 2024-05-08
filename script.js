const hamburger = document.querySelector(".menu-bar");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function(){
    menu.classList.toggle("active")
})