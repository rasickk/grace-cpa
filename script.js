// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// ===== DROPDOWN CLICK TOGGLE =====
document.querySelectorAll('.has-dropdown > a').forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const parent = trigger.parentElement;
    const isOpen = parent.classList.contains('open');
    document.querySelectorAll('.has-dropdown').forEach(el => el.classList.remove('open'));
    if (!isOpen) parent.classList.add('open');
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
  document.querySelectorAll('.has-dropdown').forEach(el => el.classList.remove('open'));
});

// Close mobile menu when a non-dropdown link is clicked
document.querySelectorAll('#main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (!link.parentElement.classList.contains('has-dropdown')) {
      mainNav && mainNav.classList.remove('open');
      document.querySelectorAll('.has-dropdown').forEach(el => el.classList.remove('open'));
    }
  });
});

// ===== HEADER SCROLL SHADOW =====
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  if (header) header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ===== SCROLL TO TOP =====
const scrollTopBtn = document.getElementById('scroll-top');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== FADE IN ON SCROLL =====
const fadeEls = document.querySelectorAll('.fade-in');
if (fadeEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => observer.observe(el));
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    // Replace with your actual form handler (Formspree, EmailJS, etc.)
    setTimeout(() => {
      contactForm.innerHTML = `
        <div style="text-align:center;padding:40px 20px;">
          <div style="font-size:3rem;margin-bottom:16px;">✅</div>
          <h3 style="color:#0d2340;font-size:1.3rem;margin-bottom:10px;">Message Received!</h3>
          <p style="color:#5e6a80;">Thank you for reaching out. We will be in touch within 24 hours.</p>
        </div>`;
    }, 1200);
  });
}
