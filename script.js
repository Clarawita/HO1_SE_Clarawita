function changeBg(){
  var navbar = document.querySelector('.navbar');
  var scrollValue = window.scrollY;
  // console.log(scrollValue);
  if (scrollValue < 100){
    navbar.classList.remove('bgColor');
  }else {
    navbar.classList.add('bgColor');
  }
}

window.addEventListener('scroll', changeBg);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}