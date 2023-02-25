let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
setTimeout(function(){
    $('.loader-bg').fadeToggle();
}, 2050);

const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

dropdown.addEventListener("click", () => {
    dropdownContent.classList.toggle("show");
  });