// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// Dropdown click-to-toggle (replaces CSS hover — prevents stuck-open dropdowns)
document.querySelectorAll('.has-dropdown > a').forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const parent = trigger.parentElement;
    const isOpen = parent.classList.contains('open');
    // Close all dropdowns first
    document.querySelectorAll('.has-dropdown').forEach(el => el.classList.remove('open'));
    // Toggle clicked one
    if (!isOpen) parent.classList.add('open');
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
  document.querySelectorAll('.has-dropdown').forEach(el => el.classList.remove('open'));
});

// Close mobile menu when a non-dropdown link is clicked
document.querySelectorAll('#main-nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    if (!link.parentElement.classList.contains('has-dropdown')) {
      mainNav.classList.remove('open');
      document.querySelectorAll('.has-dropdown').forEach(el => el.classList.remove('open'));
    }
  });
});

// Highlight active nav link based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('#main-nav > ul > li > a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) link.classList.add('active');
});

// Contact form submission (basic)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    // Replace this with your actual form handler / mailto / API call
    setTimeout(() => {
      contactForm.innerHTML = '<p style="color:green;font-weight:600;font-size:1.1rem;">Thank you! Your message has been received. We will be in touch shortly.</p>';
    }, 1200);
  });
}
