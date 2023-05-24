const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const links=Array.from(document.querySelectorAll(".mobile-nav-link"));
const links2 = document.querySelectorAll('a[href^="#section-"]');
const logo = document.querySelector(".logo")

menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
  });
}

links2.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({behavior: "smooth"});
  });
});


logo.addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('body').scrollIntoView({ behavior: 'smooth' });// merge sa folosesc si hero in loc de body, bo
});