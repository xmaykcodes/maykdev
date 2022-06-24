const openMenu = document.getElementById("open-menu");
const menu = document.getElementById("menu");

openMenu.onclick = function() {

  openMenu.classList.toggle("active");
  menu.classList.toggle("active");
}


var typed = new Typed('.typed', {

    strings: ['', 'Welcome To my personal Portfolio.'],

    typeSpeed: 75,
    startDelay: 1,
    backSpeed: 0,
    loop: false,
  });