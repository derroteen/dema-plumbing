/* =============================================================
   Dema Plumbing — main.js
   Handles: loader, nav scroll, mobile menu (with ARIA),
            dropdown keyboard nav, smooth scroll, back-to-top,
            scroll-triggered entrance animations, active nav links
   ============================================================= */
'use strict';

document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------------------------
     1. PAGE LOADER
  ---------------------------------------------------------- */
  const loader = document.getElementById('page-loader');
  if (loader) {
    window.addEventListener('load', function () {
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.4s ease';
      setTimeout(() => { loader.style.display = 'none'; }, 400);
    });
  }

  /* ----------------------------------------------------------
     2. NAV — SCROLL SHADOW
  ---------------------------------------------------------- */
  const nav = document.querySelector('nav');
  if (nav) {
    const onNavScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onNavScroll, { passive: true });
  }

  /* ----------------------------------------------------------
     3. MOBILE MENU — with full ARIA support
  ---------------------------------------------------------- */
  (function buildMobileMenu() {
    if (!nav) return;
    if (nav.querySelector('.mobile-menu-btn')) return;

    const navLinks = nav.querySelector('.nav-links');
    if (!navLinks) return;

    // Create toggle button
    const btn = document.createElement('button');
    btn.className = 'mobile-menu-btn';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'mobile-nav-links');
    btn.setAttribute('aria-label', 'Open navigation menu');
    btn.innerHTML = '<span class="hamburger-bar"></span><span class="hamburger-bar"></span><span class="hamburger-bar"></span>';
    nav.insertBefore(btn, navLinks);

    navLinks.id = 'mobile-nav-links';

    let open = false;

    function openMenu() {
      open = true;
      navLinks.classList.add('mobile-open');
      btn.setAttribute('aria-expanded', 'true');
      btn.setAttribute('aria-label', 'Close navigation menu');
      btn.classList.add('is-open');
    }

    function closeMenu() {
      open = false;
      navLinks.classList.remove('mobile-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Open navigation menu');
      btn.classList.remove('is-open');
    }

    btn.addEventListener('click', () => open ? closeMenu() : openMenu());

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (open && !nav.contains(e.target)) closeMenu();
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (open && e.key === 'Escape') { closeMenu(); btn.focus(); }
    });

    // Media query — hide button on desktop
    const mq = window.matchMedia('(min-width: 901px)');
    const toggleBtn = () => {
      btn.style.display = mq.matches ? 'none' : 'flex';
      if (mq.matches) closeMenu();
    };
    mq.addEventListener('change', toggleBtn);
    toggleBtn();

    // Close menu when a link is clicked (SPA-style nav)
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => { if (!mq.matches) closeMenu(); });
    });
  })();

  /* ----------------------------------------------------------
     4. DROPDOWN — keyboard accessibility
  ---------------------------------------------------------- */
  document.querySelectorAll('.nav-dropdown').forEach(function (dropdown) {
    const trigger = dropdown.querySelector('a');
    const menu = dropdown.querySelector('.dropdown-menu');
    if (!trigger || !menu) return;

    // Give the dropdown menu an id for aria-controls
    if (!menu.id) menu.id = 'dropdown-' + Math.random().toString(36).slice(2, 7);
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', menu.id);

    let isOpen = false;

    function openDropdown() {
      isOpen = true;
      menu.classList.add('dropdown-open');
      trigger.setAttribute('aria-expanded', 'true');
    }

    function closeDropdown() {
      isOpen = false;
      menu.classList.remove('dropdown-open');
      trigger.setAttribute('aria-expanded', 'false');
    }

    // Keyboard: Enter / Space opens; Escape closes
    trigger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        isOpen ? closeDropdown() : openDropdown();
      }
      if (e.key === 'Escape') closeDropdown();
    });

    // Move focus through items with arrow keys
    menu.addEventListener('keydown', function (e) {
      const items = Array.from(menu.querySelectorAll('a'));
      const idx = items.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') { e.preventDefault(); items[Math.min(idx + 1, items.length - 1)]?.focus(); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); items[Math.max(idx - 1, 0)]?.focus(); }
      if (e.key === 'Escape')    { closeDropdown(); trigger.focus(); }
      if (e.key === 'Tab' && idx === items.length - 1) closeDropdown();
    });

    // Close when focus leaves the dropdown
    dropdown.addEventListener('focusout', function (e) {
      if (!dropdown.contains(e.relatedTarget)) closeDropdown();
    });
  });

  /* ----------------------------------------------------------
     5. SMOOTH SCROLL — internal anchor links
  ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Move focus to section for screen readers
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  /* ----------------------------------------------------------
     6. ACTIVE NAV LINK — IntersectionObserver
  ---------------------------------------------------------- */
  const navAnchors = document.querySelectorAll('.nav-links a');
  const sections   = document.querySelectorAll('section[id]');

  if (sections.length && navAnchors.length) {
    const sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navAnchors.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + id || a.getAttribute('href') === '/#' + id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => sectionObserver.observe(s));
  }

  /* ----------------------------------------------------------
     7. BACK TO TOP BUTTON
  ---------------------------------------------------------- */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('show', window.scrollY > 400);
    }, { passive: true });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ----------------------------------------------------------
     8. SCROLL-TRIGGERED ENTRANCE ANIMATIONS
        Elements with [data-animate] fade+slide in when visible
  ---------------------------------------------------------- */
  const animateEls = document.querySelectorAll('[data-animate]');

  if (animateEls.length && 'IntersectionObserver' in window) {
    const animObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

    animateEls.forEach(function (el, i) {
      // Stagger children of grids
      if (el.closest('.services-grid, .why-grid, .testimonials-grid, .projects-grid, .quick-contact-grid, .why-grid')) {
        el.style.transitionDelay = (i % 6) * 80 + 'ms';
      }
      animObserver.observe(el);
    });
  } else {
    // Fallback: just show everything
    animateEls.forEach(el => el.classList.add('animated'));
  }

  /* ----------------------------------------------------------
     9. ADD [data-animate] TO MAJOR SECTION ELEMENTS
        (for pages that don't have it in HTML)
  ---------------------------------------------------------- */
  const autoAnimateSelectors = [
    '.service-card',
    '.why-item',
    '.testimonial',
    '.stat-box',
    '.project-card',
    '.quick-contact-card',
    '.county-item',
    '.process-step',
    '.contact-card',
    '.about-grid > *',
    '.region-section'
  ];

  autoAnimateSelectors.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      if (!el.hasAttribute('data-animate')) {
        el.setAttribute('data-animate', '');
      }
    });
  });

  // Re-run observer on newly tagged elements
  if ('IntersectionObserver' in window) {
    const allAnimatable = document.querySelectorAll('[data-animate]');
    const animObserver2 = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

    allAnimatable.forEach(function (el, i) {
      if (!el.classList.contains('animated')) {
        // Group-stagger
        const parent = el.parentElement;
        if (parent) {
          const siblings = Array.from(parent.querySelectorAll('[data-animate]'));
          const idx = siblings.indexOf(el);
          el.style.transitionDelay = idx * 70 + 'ms';
        }
        animObserver2.observe(el);
      }
    });
  }

});
