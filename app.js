const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIconMenu = document.querySelector('.menu');
const CarIconMenu = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIconMenu.addEventListener('click', toggleMobileMenu);
CarIconMenu.addEventListener('click', toggleCarAside);

function toggleDesktopMenu(){
  const isAsideClosed = aside.classList.contains('inactive');
  
  if(!isAsideClosed){
    aside.classList.add('inactive');
  }
  //Poniendo o quitando clase .inactive cada vez que se haga click
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  const isAsideClosed = aside.classList.contains('inactive');
  
  if(!isAsideClosed){
    aside.classList.add('inactive');
  }
  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarAside(){
  const isMobileClosed = mobileMenu.classList.contains('inactive');
  
  if(!isMobileClosed){
    mobileMenu.classList.add('inactive');
  }
  
  aside.classList.toggle('inactive');
}