// ----------------------
// MOBILE MENU TOGGLE
// ----------------------
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ----------------------
// SMOOTH SCROLLING FOR INTERNAL LINKS
// ----------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after click
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// ----------------------
// WHATSAPP FLOATING BUTTON CLICK
// ----------------------
const whatsappBtn = document.querySelector('.whatsapp-float');

if (whatsappBtn) {
  whatsappBtn.addEventListener('click', () => {
    window.open('https://wa.me/YOUR_NUMBER_HERE', '_blank');
  });
}

// ----------------------
// OPTIONAL: ADD ACTIVE LINK BASED ON SCROLL
// ----------------------
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) {
      a.classList.add('active');
    }
  });
});
