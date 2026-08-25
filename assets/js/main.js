/* ============================================================
   main.js — theme toggle, mobile nav, scroll-spy, reveal
   No dependencies. Degrades gracefully without JS.
   ============================================================ */
(function () {
    'use strict';

    var root = document.documentElement;
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Theme ---------------------------------------- */
    var mediaDark = window.matchMedia('(prefers-color-scheme: dark)');

    function activeTheme() {
        return root.getAttribute('data-theme') || (mediaDark.matches ? 'dark' : 'light');
    }

    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        try { localStorage.setItem('theme', theme); } catch (e) { /* private mode */ }
        var btn = document.querySelector('.theme-toggle');
        if (btn) {
            var next = theme === 'dark' ? 'light' : 'dark';
            btn.setAttribute('aria-label', 'Switch to ' + next + ' theme');
            btn.setAttribute('title', 'Switch to ' + next + ' theme');
        }
    }

    var themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        applyTheme(activeTheme());
        themeToggle.addEventListener('click', function () {
            applyTheme(activeTheme() === 'dark' ? 'light' : 'dark');
        });
    }

    // Follow the OS only while the user has not made an explicit choice.
    var listener = function () {
        var stored = null;
        try { stored = localStorage.getItem('theme'); } catch (e) { /* ignore */ }
        if (!stored) { root.setAttribute('data-theme', mediaDark.matches ? 'dark' : 'light'); }
    };
    if (mediaDark.addEventListener) { mediaDark.addEventListener('change', listener); }
    else if (mediaDark.addListener) { mediaDark.addListener(listener); }

    /* ---------- Mobile navigation ---------------------------- */
    var navToggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');

    function closeNav() {
        if (!navToggle || !navLinks) return;
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open navigation menu');
        navLinks.classList.remove('is-open');
    }

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            var open = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!open));
            navToggle.setAttribute('aria-label', open ? 'Open navigation menu' : 'Close navigation menu');
            navLinks.classList.toggle('is-open', !open);
        });

        navLinks.addEventListener('click', function (e) {
            if (e.target.closest('.nav-link')) { closeNav(); }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') { closeNav(); }
        });
    }

    /* ---------- Smooth scroll with sticky-nav offset ---------- */
    document.addEventListener('click', function (e) {
        var anchor = e.target.closest('a[href^="#"]');
        if (!anchor) return;

        var id = anchor.getAttribute('href');
        if (id === '#' || id.length < 2) return;

        var target = document.querySelector(id);
        if (!target) return;

        e.preventDefault();
        var nav = document.querySelector('.site-nav');
        var offset = nav ? nav.offsetHeight + 16 : 16;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({ top: top, behavior: reduceMotion ? 'auto' : 'smooth' });

        // Keep the URL and keyboard focus in sync with the visual jump.
        history.replaceState(null, '', id);
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
    });

    /* ---------- Scroll-spy: highlight the current section ----- */
    var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
    var linkFor = {};
    document.querySelectorAll('.nav-link').forEach(function (link) {
        linkFor[link.getAttribute('href').slice(1)] = link;
    });

    if (sections.length && 'IntersectionObserver' in window) {
        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var link = linkFor[entry.target.id];
                if (!link) return;
                if (entry.isIntersecting) {
                    Object.keys(linkFor).forEach(function (k) {
                        linkFor[k].classList.remove('is-active');
                        linkFor[k].removeAttribute('aria-current');
                    });
                    link.classList.add('is-active');
                    link.setAttribute('aria-current', 'true');
                }
            });
        }, { rootMargin: '-45% 0px -50% 0px' });

        sections.forEach(function (section) { spy.observe(section); });
    }

    /* ---------- Reveal on scroll ----------------------------- */
    var revealables = document.querySelectorAll('.card, .timeline-item, .skill-group');

    if (reduceMotion || !('IntersectionObserver' in window)) {
        revealables.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
        var reveal = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -10% 0px' });

        revealables.forEach(function (el) {
            el.classList.add('will-reveal');
            reveal.observe(el);
        });
    }
})();
