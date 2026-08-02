// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Simple fade-in animation on page load
window.addEventListener('load', () => {
  document.body.style.opacity = "1";
});

// Set initial opacity
document.body.style.opacity = "0";
document.body.style.transition = "opacity 0.8s ease";