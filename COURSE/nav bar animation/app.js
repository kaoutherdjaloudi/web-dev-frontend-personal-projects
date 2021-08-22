var humberger = document.querySelector('.humberger');
var navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');

humberger.addEventListener('click', ()=> {
    navLinks.classList.toggle('open');

})
