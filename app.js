const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIconMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
  //Poniendo o quitando clase .inactive cada vez que se haga click
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  mobileMenu.classList.toggle('inactive');
}