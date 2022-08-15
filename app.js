const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
  //Poniendo o quitando clase .inactive cada vez que se haga click
  desktopMenu.classList.toggle('inactive');
}