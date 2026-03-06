const toggleBtn = document.querySelector('.menu-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const overlay = document.querySelector('.overlay');

toggleBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
  overlay.classList.toggle('active');
});


// closes menu when clicking overlay 

overlay.addEventListener('click', () => {
  dropdownMenu.classList.remove('active');
  overlay.classList.remove('active');
});


// cloes menu when a nav link is clicked in mobile mode

const dropdownLinks = document.querySelectorAll('.dropdown-menu a');

dropdownLinks.forEach(link => {
  link.addEventListener('click', () => {
    dropdownMenu.classList.remove('active');
    overlay.classList.remove('active');
  });
});


// Highlight nav links

const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});