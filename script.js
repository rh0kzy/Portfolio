// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Add scroll event listener for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const cardBg = getComputedStyle(document.documentElement).getPropertyValue('--card-bg');
    navbar.style.backgroundColor = cardBg;
});

// Add animation to skill cards when they come into view
const skillCards = document.querySelectorAll('.skill-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(card);
});

// Dark/Light mode toggle
document.addEventListener('DOMContentLoaded', function() {
  const themeSwitch = document.querySelector('.switch .input');
  const rootElement = document.documentElement;

  // Load theme from localStorage
  let savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    rootElement.setAttribute('data-theme', 'dark');
    if (themeSwitch) themeSwitch.checked = true;
  } else {
    rootElement.setAttribute('data-theme', 'light');
    if (themeSwitch) themeSwitch.checked = false;
  }

  if (themeSwitch) {
    themeSwitch.addEventListener('change', function() {
      if (this.checked) {
        rootElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        rootElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    });
  }
}); 