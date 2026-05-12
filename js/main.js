/* ═══════════════════════════════════════════════════════
   NILZ — Architecture & Interior Design Group
   Main JavaScript
   ═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    // ─── Sticky header ──────────────────────────────────
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });


    // ─── Fade-in on scroll ──────────────────────────────
    const faders = document.querySelectorAll('.fade-in');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target); // fire once
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    });

    faders.forEach(el => fadeObserver.observe(el));


    // ─── Smooth scroll for anchor links ─────────────────
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            const headerH = header.offsetHeight;
            const top = target.getBoundingClientRect().top + window.scrollY - headerH;

            window.scrollTo({ top, behavior: 'smooth' });
        });
    });


    // ─── Active nav highlight on scroll ─────────────────
    const sections  = document.querySelectorAll('section[id]');
    const navLinks  = document.querySelectorAll('nav a');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(a => a.classList.remove('active'));
                const active = document.querySelector(`nav a[href="#${entry.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, {
        threshold: 0.4
    });

    sections.forEach(s => sectionObserver.observe(s));

});
