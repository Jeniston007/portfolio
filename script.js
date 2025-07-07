// ===== LOADING SCREEN =====
document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.getElementById('loading-screen');
  
  // Hide loading screen after page loads
  window.addEventListener('load', function() {
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }, 1000);
  });
});

// ===== CURSOR TRAIL =====
document.addEventListener('DOMContentLoaded', function() {
  const cursorTrail = document.getElementById('cursor-trail');
  let mouseX = 0;
  let mouseY = 0;
  let trailX = 0;
  let trailY = 0;

  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorTrail.style.opacity = '0.7';
  });

  document.addEventListener('mouseleave', function() {
    cursorTrail.style.opacity = '0';
  });

  function updateTrail() {
    trailX += (mouseX - trailX) * 0.1;
    trailY += (mouseY - trailY) * 0.1;
    
    cursorTrail.style.left = trailX + 'px';
    cursorTrail.style.top = trailY + 'px';
    
    requestAnimationFrame(updateTrail);
  }
  
  updateTrail();
});

// ===== FLOATING PARTICLES =====
document.addEventListener('DOMContentLoaded', function() {
  const particlesContainer = document.getElementById('particles-container');
  const particleCount = 50;

  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
    particlesContainer.appendChild(particle);
  }

  for (let i = 0; i < particleCount; i++) {
    createParticle();
  }
});

// ===== NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
      
      // Close mobile menu after clicking
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

  // Active link highlighting
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});

// ===== SKILL PROGRESS BARS =====
document.addEventListener('DOMContentLoaded', function() {
  const skillProgressBars = document.querySelectorAll('.skill-progress');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progress = entry.target;
        const width = progress.getAttribute('data-width');
        progress.style.width = width;
        observer.unobserve(progress);
      }
    });
  }, { threshold: 0.5 });

  skillProgressBars.forEach(bar => {
    observer.observe(bar);
  });
});

// ===== STATS COUNTER ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const stat = entry.target;
        const targetCount = parseInt(stat.getAttribute('data-count'));
        let currentCount = 0;
        const increment = Math.ceil(targetCount / 50); // Adjust speed of counting
        const interval = setInterval(() => {
          if (currentCount < targetCount) {
            currentCount += increment;
            if (currentCount > targetCount) currentCount = targetCount;
            stat.textContent = currentCount;
          } else {
            clearInterval(interval);
          }
        }, 50);
        observer.unobserve(stat);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(stat => {
    observer.observe(stat);
  });
});

// ===== CONTACT FORM =====
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // For demonstration, we'll just log the form data
    // In a real application, you would send this to a server
    console.log('Form submitted:', { name, email, subject, message });

    // Show a simple success message
    alert('Thank you for your message! I will get back to you soon.');

    // Reset form
    contactForm.reset();
  });
});

// ===== SCROLL TO TOP BUTTON =====
document.addEventListener('DOMContentLoaded', function() {
  const scrollTopBtn = document.getElementById('scroll-top');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// ===== AOS INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true,
    offset: 100
  });
});


// ===== GITHUB PROJECT COUNT =====
document.addEventListener('DOMContentLoaded', function() {
  const projectCountElement = document.getElementById('project-count');
  const projectCountLink = document.getElementById('project-count-link');

  // Fetch public repository count from GitHub API
  fetch('https://api.github.com/users/Jeniston007')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub data');
      }
      return response.json();
    })
    .then(data => {
      const repoCount = data.public_repos || 0;
      projectCountElement.textContent = repoCount;
    })
    .catch(error => {
      console.error('Error fetching GitHub data:', error);
      projectCountElement.textContent = '10'; // Fallback count
    });

  // Ensure project count link navigates to GitHub profile
  projectCountLink.addEventListener('click', function(e) {
    e.preventDefault();
    window.open('https://github.com/Jeniston007', '_blank');
  });

  // Verify project links (optional: for debugging)
  const projectLinks = document.querySelectorAll('.project-link[href*="github.com"]');
  projectLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (!href.startsWith('https://github.com/Jeniston007/')) {
        console.warn('Invalid GitHub link detected:', href);
      }
    });
  });
});