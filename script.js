// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('open');
});

// Close menu when a nav link is clicked (on mobile)
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('open');
        
        // Get the target section
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Add a small delay to allow the mobile menu to close first
            setTimeout(() => {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }, 300);
        }
        
        // Prevent default behavior
        e.preventDefault();
    });
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
        }
    });
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

// Dark/Light mode toggle - Improved version
document.addEventListener('DOMContentLoaded', function() {
  // Get the theme switch element
  const themeSwitch = document.querySelector('.switch .input');
  const rootElement = document.documentElement;
  
  // Function to set theme
  function setTheme(theme) {
    rootElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update the switch state
    if (themeSwitch) {
      themeSwitch.checked = (theme === 'dark');
    }
    
    // Log for debugging
    console.log('Theme set to:', theme);
  }
  
  // Load theme from localStorage
  let savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
  
  // Add event listener to the switch
  if (themeSwitch) {
    themeSwitch.addEventListener('change', function() {
      const newTheme = this.checked ? 'dark' : 'light';
      setTheme(newTheme);
    });
    
    // Log for debugging
    console.log('Theme switch event listener added');
  } else {
    console.error('Theme switch element not found');
  }
  
  // Add a manual toggle function for testing
  window.toggleTheme = function() {
    const currentTheme = rootElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };
}); 