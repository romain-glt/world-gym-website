// ===== PRELOADER =====
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = 0;
    setTimeout(() => preloader.style.display = "none", 500);
  }
});

// ===== FORM CONFIRMATION =====
const form = document.querySelector('.contact-form');
const success = document.getElementById('form-success');

if (form && success) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    success.style.display = 'block';

    setTimeout(() => {
      form.submit();
    }, 2000);
  });
}

// ===== MENU BURGER TOGGLE =====
const burger = document.getElementById('burger');
const nav = document.getElementById('nav-menu');

if (burger && nav) {
  // Toggle menu open/close on burger click
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Ferme le menu quand un lien est cliqué
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
}


// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
