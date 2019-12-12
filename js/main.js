/* nav responsive  */
const nav = document.getElementById('nav');
const barra = document.getElementById('nav-barra');
const tablet = window.matchMedia('screen and (max-width: 767px)');

tablet.addListener(validation);

function validation(event){
  if(event.matches){
    barra.addEventListener('click', hideShow);
  }else{
    barra.removeEventListener('click', hideShow);
  }
} 
validation(tablet);

function hideShow () {
  if(nav.classList.contains('Header-active')){
    nav.classList.remove('Header-active');
  }else {
    nav.classList.add('Header-active');
  }
}
/* fin del nav */
function remove(){
  nav.classList.remove('Header-active');
}

var scroll = new SmoothScroll('a[href*="#"]',{
	speed: 1300,
  speedAsDuration: true,
  header: '[data-scroll-header]'
});