/* =========================================================
   LINA CASTELLANOS — PORTFOLIO v2
   nav scroll · dark nav over dark sections · mobile menu
   smooth scroll · reveal on scroll · count-up metrics
   ========================================================= */

(() => {
  'use strict';

  const nav = document.getElementById('nav');

  /* ---------- 1. NAV: estado scrolled + variante oscura ---------- */
  const darkSections = document.querySelectorAll('.research, .contact');
  const updateNav = () => {
    if (window.scrollY > 24) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');

    const overDark = Array.from(darkSections).some((sec) => {
      const r = sec.getBoundingClientRect();
      return r.top < 72 && r.bottom > 0;
    });
    nav.classList.toggle('is-dark', overDark);
  };
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ---------- 2. Mobile menu ---------- */
  const menuBtn = document.getElementById('menuToggle');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => nav.classList.toggle('is-menu-open'));
    document.querySelectorAll('.nav__links a').forEach((a) =>
      a.addEventListener('click', () => nav.classList.remove('is-menu-open'))
    );
  }

  /* ---------- 3. Smooth scroll con offset ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- 4. Reveal on scroll ---------- */
  document.querySelectorAll(
    '.section-head, .about__grid, .case, .research__grid, ' +
    '.routes, .ai__role, .archive__grid, .stack__grid, ' +
    '.contact__title, .contact__grid, .hero__inner'
  ).forEach((el) => {
    if (el.classList.contains('routes') ||
        el.classList.contains('archive__grid') ||
        el.classList.contains('research__grid')) {
      el.classList.add('reveal-stagger');
    } else {
      el.classList.add('reveal');
    }
  });

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.1 }
  );
  document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => io.observe(el));

  /* ---------- 5. Count-up de métricas ---------- */
  // Separador de miles manual (".") para no depender de soporte de locale
  const formatNum = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const animateCount = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const dur = 1400;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      const val = Math.floor(eased * target);
      el.textContent = formatNum(val) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = formatNum(target) + suffix;
    };
    requestAnimationFrame(step);
  };
  const countIO = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  document.querySelectorAll('.impact__num[data-count]').forEach((el) => countIO.observe(el));

  /* ---------- 6. Año dinámico ---------- */
  document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));
})();
