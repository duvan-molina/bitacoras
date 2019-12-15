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
	speed: 2500,
  speedAsDuration: true,
  header: '[data-scroll-header]'
});
window.onscroll = function (){
  var tarjetas = document.querySelector('.tarjetas');
  var scroll = document.documentElement.scrollTop || document.body.scrollTop;
  if(scroll >= 307){
    tarjetas.classList.add('animated', 'fadeInDownBig', 'slow');
    document.getElementById('tarjetas-olcultar').classList.remove('tarjetas-olcultar');
    document.getElementById('blog').style.height = 'auto';
  }
}