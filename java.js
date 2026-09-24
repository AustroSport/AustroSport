// Mobile Navigation Toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  
  // Icon wechseln
  const icon = menuToggle.querySelector('i');
  if (nav.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Smooth Scroll für Anker-Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Mobile Menü schließen nach Klick
      if (window.innerWidth <= 768) {
        nav.classList.remove('active');
        menuToggle.querySelector('i').classList.remove('fa-times');
        menuToggle.querySelector('i').classList.add('fa-bars');
      }
    }
  });
});

// Kontaktformular Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.');
    contactForm.reset();
  });
}

// Scroll Animation für Sections
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});