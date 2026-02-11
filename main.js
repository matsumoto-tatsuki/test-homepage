

document.addEventListener('DOMContentLoaded', () => {
  setupScrollAnimation();
  setupHeaderScroll();
  setupMobileMenu();
});

/**
 * Scroll Animation with Intersection Observer
 */
function setupScrollAnimation() {
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -100px 0px', // Trigger when 100px above bottom
    threshold: 0.1
  });

  animatedElements.forEach(el => observer.observe(el));
}

/**
 * Header Background Change on Scroll
 */
function setupHeaderScroll() {
  const header = document.getElementById('header');
  const scrollThreshold = 50;

  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/**
 * Mobile Menu Toggle
 */
function setupMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav-links');

  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    // Toggle menu visibility
    // Note: Simple toggle for now. 
    // In a real app, you might want a sliding drawer.
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !isExpanded);

    // Toggle a class to show/hide
    nav.style.display = isExpanded ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '100%';
    nav.style.right = '0';
    nav.style.backgroundColor = '#1e1e1e';
    nav.style.width = '200px';
    nav.style.padding = '1rem';
    nav.style.boxShadow = '-5px 5px 10px rgba(0,0,0,0.5)';
  });
}
