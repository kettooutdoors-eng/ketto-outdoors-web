(function () {
  'use strict';

  function store(action, key, value) {
    try {
      if (action === 'get') return window.localStorage.getItem(key);
      window.localStorage.setItem(key, value);
    } catch {
      /* storage blocked: the site still works, the pop-up just may show again */
    }
    return null;
  }

  // --- Search toggle ---
  var searchToggle = document.querySelector('[data-search-toggle]');
  var searchForm = document.getElementById('HeaderSearch');
  if (searchToggle && searchForm) {
    searchToggle.addEventListener('click', function () {
      var open = searchForm.classList.toggle('is-open');
      searchToggle.setAttribute('aria-expanded', String(open));
      if (open) searchForm.querySelector('input[type="search"]').focus();
    });
  }

  // --- Mobile menu ---
  var menu = document.getElementById('MobileMenu');
  var backdrop = document.querySelector('.drawer-backdrop');
  var menuOpener = document.querySelector('[data-menu-open]');
  function setMenu(open) {
    if (!menu) return;
    menu.hidden = !open;
    if (backdrop) backdrop.hidden = !open;
    if (menuOpener) menuOpener.setAttribute('aria-expanded', String(open));
    if (open) {
      var first = menu.querySelector('a, button');
      if (first) first.focus();
    } else if (menuOpener) {
      menuOpener.focus();
    }
  }
  if (menuOpener) menuOpener.addEventListener('click', function () { setMenu(true); });
  document.querySelectorAll('[data-menu-close]').forEach(function (el) {
    el.addEventListener('click', function () { setMenu(false); });
  });

  // --- Welcome pop-up ---
  var CLAIMED = 'ketto-welcome-claimed';
  var SNOOZED = 'ketto-welcome-snoozed';
  var SNOOZE_DAYS = 30;
  var welcome = document.querySelector('[data-welcome]');
  function closeWelcome() {
    if (!welcome) return;
    if (!welcome.hasAttribute('data-claimed')) store('set', SNOOZED, String(Date.now()));
    welcome.hidden = true;
  }
  if (welcome) {
    if (welcome.hasAttribute('data-claimed')) {
      store('set', CLAIMED, '1');
    } else {
      var snoozedAt = Number(store('get', SNOOZED) || 0);
      var skip = store('get', CLAIMED) || (snoozedAt && Date.now() - snoozedAt < SNOOZE_DAYS * 86400000);
      if (!skip) {
        window.setTimeout(function () {
          welcome.hidden = false;
          var input = welcome.querySelector('input[type="email"]');
          if (input) input.focus();
        }, Number(welcome.getAttribute('data-delay')) || 8000);
      }
    }
    welcome.addEventListener('click', function (e) {
      if (e.target === welcome) closeWelcome();
    });
    welcome.querySelectorAll('[data-welcome-close]').forEach(function (el) {
      el.addEventListener('click', closeWelcome);
    });
  }

  // --- Escape closes whatever is open ---
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (menu && !menu.hidden) setMenu(false);
    if (welcome && !welcome.hidden) closeWelcome();
  });

  // --- Product photo thumbnails ---
  document.querySelectorAll('[data-gallery]').forEach(function (gallery) {
    var main = gallery.querySelector('.gallery-main');
    if (!main) return;
    gallery.querySelectorAll('[data-gallery-thumb]').forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        main.src = thumb.getAttribute('data-src');
        main.alt = thumb.getAttribute('data-alt') || '';
        gallery.querySelectorAll('[data-gallery-thumb]').forEach(function (t) {
          t.setAttribute('aria-current', String(t === thumb));
        });
      });
    });
  });

  // --- Smooth scroll for links to a spot on the current page (e.g. "Shop Kits" -> /#kits on the home page) ---
  document.querySelectorAll('a[href*="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (link.pathname !== window.location.pathname || !link.hash) return;
      var target = document.getElementById(link.hash.slice(1));
      if (!target) return;
      e.preventDefault();
      if (menu && !menu.hidden) setMenu(false);
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', link.hash);
    });
  });

  // --- Reserve form: Shopify's contact form takes one name, so join first + last on submit ---
  document.querySelectorAll('#ReserveForm').forEach(function (form) {
    form.addEventListener('submit', function () {
      var first = form.querySelector('[data-reserve-first]');
      var last = form.querySelector('[data-reserve-last]');
      var full = form.querySelector('[data-reserve-name]');
      if (first && last && full) full.value = (first.value + ' ' + last.value).trim();
    });
  });

  // --- Scroll reveal ---
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // --- All Gear: search, filters, and sort (sections/gear-collection.liquid) ---
  var gear = document.querySelector('[data-gear-filters]');
  if (gear) {
    var grid = gear.querySelector('[data-gear-grid]');
    var empty = gear.querySelector('[data-gear-empty]');
    var cards = grid ? Array.prototype.slice.call(grid.querySelectorAll('[data-gear-card]')) : [];
    var controls = {};
    gear.querySelectorAll('[data-filter]').forEach(function (el) { controls[el.getAttribute('data-filter')] = el; });

    // Start from the address, e.g. /collections/all-gear?fish=Catfish (old /shop?fish= links).
    var params = new URLSearchParams(window.location.search);
    Object.keys(controls).forEach(function (key) {
      var value = params.get(key);
      if (value) controls[key].value = value;
    });

    var sorters = {
      'price-asc': function (a, b) { return a.dataset.price - b.dataset.price; },
      'price-desc': function (a, b) { return b.dataset.price - a.dataset.price; },
      easy: function (a, b) { return a.dataset.score - b.dataset.score; },
      hard: function (a, b) { return b.dataset.score - a.dataset.score; },
      name: function (a, b) { return a.dataset.name.localeCompare(b.dataset.name); },
      '': function (a, b) { return a.dataset.index - b.dataset.index; },
    };

    var applyGear = function () {
      var q = (controls.q.value || '').trim().toLowerCase();
      var difficulty = controls.difficulty.value;
      var type = controls.type.value;
      var fish = controls.fish.value;
      var shown = 0;
      cards.forEach(function (card) {
        var d = card.dataset;
        // Gear with no fish listed (hooks, weights) works for any fish, so it always matches.
        var ok = (!q || d.search.indexOf(q) !== -1) &&
          (!difficulty || d.difficulty === difficulty) &&
          (!type || d.type === type) &&
          (!fish || !d.fish || d.fish.split('|').indexOf(fish) !== -1);
        card.hidden = !ok;
        if (ok) shown++;
      });
      cards.slice().sort(sorters[controls.sort.value] || sorters['']).forEach(function (card) { grid.appendChild(card); });
      if (empty) empty.hidden = shown > 0;
      if (grid) grid.hidden = shown === 0;
    };

    Object.keys(controls).forEach(function (key) {
      controls[key].addEventListener(key === 'q' ? 'input' : 'change', applyGear);
    });
    applyGear();
  }
})();
