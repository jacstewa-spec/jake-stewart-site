// ============================================
// JAKE STEWART — Site JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Active nav link ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
    if (currentPage.includes('case-studies') && href && href.includes('case-studies')) {
      link.classList.add('active');
    }
  });

  // ---- Scroll fade-up animations ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, entry.target.dataset.delay || 0);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach((el, i) => {
    el.dataset.delay = (i % 4) * 80;
    observer.observe(el);
  });

  // ---- Nav scroll behavior ----
  const nav = document.querySelector('nav');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 80) {
      nav.style.borderBottomColor = 'rgba(226,224,219,0.8)';
    } else {
      nav.style.borderBottomColor = 'var(--border)';
    }
    lastScroll = currentScroll;
  });

});
