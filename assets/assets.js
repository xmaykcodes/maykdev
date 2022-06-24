


const openMenu = document.getElementById("open-menu");
const menu = document.getElementById("menu");

openMenu.onclick = function() {

  document.onclick = function(e) {
    if(e.target.id ==! 'menu' && e.target.id ==! 'open') {
      openMenu.classList.remove("active");
      menu.classList.remove("active");
    }
  }

  openMenu.classList.toggle("active");
  menu.classList.toggle("active");
}