/* ============================================================
   SHIVANSH MEHTA — PORTFOLIO SCRIPTS
   Scroll reveals, nav behaviour, cursor glow, smooth UX
   ============================================================ */

(() => {
  'use strict';

  // ── Cursor glow follow ──────────────────────────────────────
  const glow = document.getElementById('cursorGlow');
  if (glow && window.matchMedia('(pointer: fine)').matches) {
    let mx = -300, my = -300;
    document.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
    });
    (function updateGlow() {
      glow.style.left = mx + 'px';
      glow.style.top  = my + 'px';
      requestAnimationFrame(updateGlow);
    })();
  }

  // ── Nav scroll state ────────────────────────────────────────
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Active nav link tracking ────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerNav = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach((s) => observerNav.observe(s));

  // ── Mobile menu toggle ──────────────────────────────────────
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
  });
  // Close on link click
  links.querySelectorAll('.nav-link').forEach((l) => {
    l.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('open');
    });
  });

  // ── Scroll reveal (Intersection Observer) ───────────────────
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((el) => revealObserver.observe(el));

  // ── Smooth anchor scroll (fallback for browsers) ────────────
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Parallax-lite on hero elements ──────────────────────────
  const heroPhoto = document.querySelector('.hero-photo-wrapper');
  const heroText  = document.querySelector('.hero-text');
  if (heroPhoto && heroText && window.matchMedia('(min-width: 901px)').matches) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      heroPhoto.style.transform = `translateY(${y * 0.08}px)`;
      heroText.style.transform  = `translateY(${y * 0.04}px)`;
    }, { passive: true });
  }
})();
