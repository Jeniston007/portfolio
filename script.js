src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"

// Navigation Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Loading Screen
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.opacity = '0';
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 500);
});

// Cursor Trail
const cursorTrail = document.getElementById('cursor-trail');

document.addEventListener('mousemove', (e) => {
  cursorTrail.style.left = e.pageX - 10 + 'px';
  cursorTrail.style.top = e.pageY - 10 + 'px';
  cursorTrail.style.opacity = 1;
});

document.addEventListener('mouseleave', () => {
  cursorTrail.style.opacity = 0;
});

// Floating Particles
function createParticles(count) {
  const particlesContainer = document.getElementById('particles-container');
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = Math.random() * 5 + 5 + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particlesContainer.appendChild(particle);
  }
}

createParticles(50);

// Skill Progress Bars
document.addEventListener('DOMContentLoaded', () => {
  const skillProgress = document.querySelectorAll('.skill-progress');
  skillProgress.forEach(progress => {
    const width = progress.getAttribute('data-width');
    progress.style.width = width;
  });
});

// AOS Initialization
AOS.init({
  duration: 1000,
  once: true
});


// EmailJS Initialization and Contact Form Submission
emailjs.init('cyx4XDfI6-8MX6it9'); // Replace with your EmailJS User ID

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_sfjrh9t', 'template_pm9kiax', this)
    .then(function(response) {
      alert('Message sent successfully!');
      this.reset();
    }, function(error) {
      alert('Failed to send message: ' + error.text);
    });
});