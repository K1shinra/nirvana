const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const contactLink = document.getElementById('contact-link');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});


btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'index.html';
});

aboutLink.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'about.html';
});

contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'contact.html';
});