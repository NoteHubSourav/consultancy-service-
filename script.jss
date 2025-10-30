// ==========================
// MOBILE MENU TOGGLE
// ==========================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// ==========================
// SMOOTH SCROLLING FOR INTERNAL LINKS
// ==========================
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

// ==========================
// WHATSAPP FLOATING BUTTON
// ==========================
const whatsappBtn = document.querySelector('.whatsapp-float');

if (whatsappBtn) {
  whatsappBtn.addEventListener('click', () => {
    window.open('https://wa.me/YOUR_NUMBER_HERE', '_blank');
  });
}

// ==========================
// ACTIVE LINK BASED ON SCROLL
// ==========================
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentSectionId = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // offset for navbar height
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
});
