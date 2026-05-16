// W2/js/components/header.js
// Injects the site header into every page and handles:
// - Transparent → solid on scroll
// - Active nav link highlighting
// - Mobile hamburger toggle

export function initHeader() {
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const pages = [
    { href: 'index.html',    label: 'Home' },
    { href: 'services.html', label: 'Services' },
    { href: 'projects.html', label: 'Projects' },
    { href: 'about.html',    label: 'About' },
    { href: 'contact.html',  label: 'Contact' },
  ];

  const navLinks = pages.map(p => {
    const active = currentPage === p.href ? 'class="active"' : '';
    return `<li><a href="${p.href}" ${active}>${p.label}</a></li>`;
  }).join('');

  const html = `
<header id="site-header">
  <div class="header-inner container">
    <a href="index.html" class="header-logo">
      <img src="assets/images/logo.png" alt="NILZ" class="header-logo__img">
    </a>
    <nav class="header-nav" id="header-nav">
      <ul>${navLinks}</ul>
    </nav>
    <a href="contact.html" class="btn btn--outline header-cta">Start a Project</a>
    <button class="header-burger" id="header-burger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>`;

  document.body.insertAdjacentHTML('afterbegin', html);

  // Scroll: add .scrolled class when past 60px
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Burger toggle
  const burger = document.getElementById('header-burger');
  const nav    = document.getElementById('header-nav');
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    burger.classList.toggle('open');
  });
}
