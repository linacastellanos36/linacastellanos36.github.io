/* =========================================================
   LINA CASTELLANOS — PORTFOLIO
   Interactions: nav scroll · mobile menu · reveal on scroll
   ========================================================= */

(() => {
  'use strict';

  /* ---------- 1. NAV: borde inferior cuando scrolleamos ---------- */
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (window.scrollY > 24) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 1b. NAV: variante oscura sobre secciones oscuras ---------- */
  const darkSections = document.querySelectorAll('.ai, .contact');
  const navIO = new IntersectionObserver(
    (entries) => {
      // Si alguna sección oscura cruza el área de la nav (top 80px), nav -> dark
      const anyIntersecting = Array.from(darkSections).some((sec) => {
        const r = sec.getBoundingClientRect();
        return r.top < 80 && r.bottom > 0;
      });
      if (anyIntersecting) nav.classList.add('is-dark');
      else nav.classList.remove('is-dark');
    },
    { rootMargin: '-80px 0px 0px 0px', threshold: [0, 1] }
  );
  darkSections.forEach((sec) => navIO.observe(sec));
  // También ejecutar en scroll para responder más rápido
  window.addEventListener('scroll', () => {
    const anyIntersecting = Array.from(darkSections).some((sec) => {
      const r = sec.getBoundingClientRect();
      return r.top < 80 && r.bottom > 0;
    });
    if (anyIntersecting) nav.classList.add('is-dark');
    else nav.classList.remove('is-dark');
  }, { passive: true });

  /* ---------- 2. NAV mobile menu ---------- */
  const menuBtn = document.getElementById('menuToggle');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('is-menu-open');
    });
    // cerrar al hacer clic en un link
    document.querySelectorAll('.nav__links a').forEach((a) => {
      a.addEventListener('click', () => nav.classList.remove('is-menu-open'));
    });
  }

  /* ---------- 3. SMOOTH SCROLL con offset por nav fija ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- 4. INTERSECTION OBSERVER: reveal en scroll ---------- */
  // Marcamos automáticamente lo que queremos animar
  const candidates = document.querySelectorAll(
    '.section-header, .about__body, .case, .ai-feature, .demos, ' +
    '.archive__grid, .toolkit__columns, .contact__title, .contact__grid, ' +
    '.hero__grid > *'
  );
  candidates.forEach((el) => {
    if (el.classList.contains('demos__grid') ||
        el.classList.contains('archive__grid') ||
        el.classList.contains('toolkit__columns') ||
        el.classList.contains('contact__grid')) {
      el.classList.add('reveal-stagger');
    } else {
      el.classList.add('reveal');
    }
  });

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
  );
  document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => io.observe(el));

  /* ---------- 5. Año dinámico en footer (si quieres) ---------- */
  const yearEls = document.querySelectorAll('[data-year]');
  yearEls.forEach((el) => (el.textContent = new Date().getFullYear()));

  /* ---------- 6. Manejo de demo cards sin link real ---------- */
  // Evita que los <a href="#"> hagan scroll al top
  document.querySelectorAll('a.demo-card[href="#"]').forEach((card) => {
    card.addEventListener('click', (e) => e.preventDefault());
  });
})();
