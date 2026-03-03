/* ========== Lady Jane Life & Legacy Planning — Shared JS ========== */

/* --- Intersection Observer: Section Lift-Forward Animations --- */
(function () {
  var sections = document.querySelectorAll('.section');

  // Progressive scroll-driven lift: sections scale/translate based on scroll position
  function updateSectionDepth() {
    sections.forEach(function (s) {
      if (s.classList.contains('is-visible')) return; // already revealed, CSS handles it
      var rect = s.getBoundingClientRect();
      var windowH = window.innerHeight;
      // How far the section top is from the bottom of the viewport (0 = at bottom edge, 1 = off screen below)
      var distRatio = Math.max(0, Math.min(1, (rect.top - windowH) / windowH));
      // Pre-animate: deeper starting position for heavier, more dramatic reveal
      var preScale = 0.92 + (0.03 * (1 - distRatio)); // 0.92 → 0.95
      var preY = 100 - (20 * (1 - distRatio)); // 100 → 80
      var preOpacity = 0.12 * (1 - distRatio); // 0 → 0.12
      s.style.transform = 'translateY(' + preY + 'px) scale(' + preScale + ')';
      s.style.opacity = preOpacity;
    });
    requestAnimationFrame(updateSectionDepth);
  }
  requestAnimationFrame(updateSectionDepth);

  // Trigger full reveal when section enters viewport
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Clear inline pre-animation styles so CSS .is-visible transition takes over
        entry.target.style.transform = '';
        entry.target.style.opacity = '';
        entry.target.classList.add('is-visible');
      }
    });
  }, { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  sections.forEach(function (s) { observer.observe(s); });
})();

/* --- Nav Scroll Watcher --- */
(function () {
  var nav = document.querySelector('.site-nav');
  if (!nav) return;

  function onScroll() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // check initial state
})();

/* --- Mobile Hamburger Toggle --- */
(function () {
  var hamburger = document.querySelector('.nav-hamburger');
  var mobileMenu = document.querySelector('.nav-mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('menu-open', mobileMenu.classList.contains('is-open'));
    document.body.style.overflow = mobileMenu.classList.contains('is-open') ? 'hidden' : '';
  });

  // Close on link click
  var links = mobileMenu.querySelectorAll('a');
  links.forEach(function (a) {
    a.addEventListener('click', function () {
      hamburger.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    });
  });
})();

/* --- Active Page Highlighting --- */
(function () {
  var page = document.body.getAttribute('data-page');
  if (!page) return;

  var map = {
    home: 'index.html',
    about: 'about.html',
    stories: 'stories.html',
    services: 'services.html',
    blog: 'blog.html',
    contact: 'contact.html'
  };

  var target = map[page];
  if (!target) return;

  var links = document.querySelectorAll('.site-nav .nav-links a');
  links.forEach(function (a) {
    if (a.getAttribute('href') === target) {
      a.classList.add('active');
    }
  });
})();

/* --- FAQ Accordion Toggle (all pages) --- */
(function () {
  var faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(function (item) {
    // Skip items already handled by the .faq-list scoped handler
    if (item.closest('.faq-list')) return;

    item.addEventListener('click', function () {
      var answer = item.querySelector('.faq-answer');
      var chevron = item.querySelector('.faq-chevron');
      if (!answer) return;

      var isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

      // Close all siblings in same section
      var parent = item.closest('section') || item.parentElement;
      parent.querySelectorAll('.faq-item').forEach(function (other) {
        if (other !== item) {
          var a = other.querySelector('.faq-answer');
          var c = other.querySelector('.faq-chevron');
          if (a) { a.style.maxHeight = '0'; a.style.paddingTop = '0'; }
          if (c) c.style.transform = 'rotate(0deg)';
        }
      });

      // Toggle clicked
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.paddingTop = '16px';
        if (chevron) chevron.style.transform = 'rotate(180deg)';
      } else {
        answer.style.maxHeight = '0';
        answer.style.paddingTop = '0';
        if (chevron) chevron.style.transform = 'rotate(0deg)';
      }
    });
  });
})();

/* --- Pill Selector Toggle --- */
(function () {
  var pillGroups = document.querySelectorAll('.pill-group');
  if (!pillGroups.length) return;

  pillGroups.forEach(function (group) {
    var pills = group.querySelectorAll('.pill-option');
    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        // Deselect siblings
        pills.forEach(function (p) { p.classList.remove('selected'); });
        // Select this one
        pill.classList.add('selected');
      });
    });
  });
})();

/* --- Inline Pill Selector (data-field) --- */
(function () {
  var pillContainers = document.querySelectorAll('[data-field]');
  if (!pillContainers.length) return;

  pillContainers.forEach(function (container) {
    var buttons = container.querySelectorAll('button');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        // Deselect all siblings
        buttons.forEach(function (b) {
          b.style.background = 'transparent';
          var span = b.querySelector('span');
          if (span) span.style.color = 'var(--color-grey-7, #111111)';
        });
        // Select this one
        btn.style.background = 'var(--color-grey-7, #111111)';
        var span = btn.querySelector('span');
        if (span) span.style.color = '#FFFFFF';
      });
    });
  });
})();

/* --- Stats Counter Animation (About page only — home stats handled by text-banner scroll) --- */
(function () {
  var statsSection = document.querySelector('.about-stats');
  if (!statsSection) return;

  var statNumbers = statsSection.querySelectorAll('.stat-number[data-target]');
  if (!statNumbers.length) return;

  var animated = false;

  function animateCounters() {
    if (animated) return;
    animated = true;

    statNumbers.forEach(function (el) {
      var target = parseFloat(el.getAttribute('data-target'));
      var suffix = el.getAttribute('data-suffix') || '';
      var prefix = el.getAttribute('data-prefix') || '';
      var duration = 3000;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        // Ease out quad
        var eased = 1 - (1 - progress) * (1 - progress);
        var current = Math.floor(eased * target);
        el.textContent = prefix + current + suffix;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = prefix + target + suffix;
        }
      }

      requestAnimationFrame(step);
    });
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  observer.observe(statsSection);
})();

/* --- Marquee Clone (double content for seamless loop) --- */
(function () {
  var tracks = document.querySelectorAll('.marquee-track');
  tracks.forEach(function (track) {
    var items = track.innerHTML;
    track.innerHTML = items + items;
  });
})();

/* --- Testimonials Clone (triple content for seamless loop) --- */
(function () {
  var tracks = document.querySelectorAll('.testimonials-track');
  tracks.forEach(function (track) {
    var items = track.innerHTML;
    track.innerHTML = items + items + items;
  });
})();

/* --- Testimonials Carousel Navigation (prev/next buttons) --- */
(function () {
  var section = document.querySelector('.testimonials');
  if (!section) return;

  var track = section.querySelector('.testi-carousel-track');
  var slides = section.querySelectorAll('.testimonial-slide');
  var prevBtn = section.querySelector('.testimonial-prev');
  var nextBtn = section.querySelector('.testimonial-next');
  if (!track || !slides.length || !prevBtn || !nextBtn) return;

  var currentIndex = 0;
  var totalSlides = slides.length;

  function getSlideWidth() {
    // Measure first slide's actual width including gap
    var slide = slides[0];
    var rect = slide.getBoundingClientRect();
    var style = window.getComputedStyle(track);
    var gap = parseFloat(style.gap) || 10;
    return rect.width + gap;
  }

  function goTo(index) {
    currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
    var offset = -(currentIndex * getSlideWidth());
    track.style.transform = 'translateX(' + offset + 'px)';
  }

  prevBtn.addEventListener('click', function () {
    goTo(currentIndex - 1);
  });

  nextBtn.addEventListener('click', function () {
    goTo(currentIndex + 1);
  });

  // Touch swipe support for mobile
  var touchStartX = 0;
  var touchDeltaX = 0;

  track.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
    track.style.transition = 'none';
  }, { passive: true });

  track.addEventListener('touchmove', function (e) {
    touchDeltaX = e.touches[0].clientX - touchStartX;
    var currentOffset = -(currentIndex * getSlideWidth());
    track.style.transform = 'translateX(' + (currentOffset + touchDeltaX) + 'px)';
  }, { passive: true });

  track.addEventListener('touchend', function () {
    track.style.transition = 'transform 0.5s ease';
    if (touchDeltaX > 50) {
      goTo(currentIndex - 1);
    } else if (touchDeltaX < -50) {
      goTo(currentIndex + 1);
    } else {
      goTo(currentIndex); // snap back
    }
    touchDeltaX = 0;
  });
})();

/* --- Text Banner Scroll Animation (scatter→gather, spring physics) --- */
(function () {
  var section = document.querySelector('.text-banner-section');
  if (!section) return;

  var letters = section.querySelectorAll('.banner-letter');
  var bg = section.querySelector('.text-banner-bg');
  var hint = section.querySelector('.text-banner-hint');

  // Spring physics — matches Framer Motion { stiffness: 60, damping: 20 }
  var STIFFNESS = 60;
  var DAMPING = 20;
  var DT = 0.016;
  var REST = 0.01;

  function stepSpring(s) {
    var d = s.value - s.target;
    var a = (-STIFFNESS * d) + (-DAMPING * s.velocity);
    s.velocity += a * DT;
    s.value += s.velocity * DT;
    if (Math.abs(d) < REST && Math.abs(s.velocity) < REST) {
      s.value = s.target;
      s.velocity = 0;
    }
  }

  // Per-letter spring state
  var springs = [];
  letters.forEach(function () {
    springs.push({
      y:       { value: 0, velocity: 0, target: 0 },
      opacity: { value: 0, velocity: 0, target: 0 },
      scale:   { value: 0.8, velocity: 0, target: 0.8 }
    });
  });

  // Background scale spring
  var bgSpring = { value: 1.1, velocity: 0, target: 1.1 };

  // Stats element, springs & counter flag (declared here so update() can reference them)
  var statsEl = section.querySelector('.text-banner-stats');
  var statsOpSpring = { value: 0, velocity: 0, target: 0 };
  var statsYSpring  = { value: 30, velocity: 0, target: 30 };
  var countersTriggered = false;

  function getProgress() {
    var rect = section.getBoundingClientRect();
    var total = section.offsetHeight - window.innerHeight;
    return Math.max(0, Math.min(1, -rect.top / total));
  }

  function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

  function update() {
    var p = getProgress();

    // === Letters: scatter → gather ===
    letters.forEach(function (letter, i) {
      var startY = parseFloat(letter.getAttribute('data-start-y')) || 0;

      // Y: scattered → centered (0 → 0.6 of scroll)
      var yEased = easeOutQuart(Math.min(p / 0.6, 1));
      springs[i].y.target = startY * (1 - yEased);

      // Opacity: 0 → 1 (0 → 0.4 of scroll)
      springs[i].opacity.target = Math.min(p / 0.4, 1);

      // Scale: 0.8 → 1 (0 → 0.6 of scroll)
      springs[i].scale.target = 0.8 + (0.2 * yEased);

      // Step springs
      stepSpring(springs[i].y);
      stepSpring(springs[i].opacity);
      stepSpring(springs[i].scale);

      var op = Math.max(0, Math.min(1, springs[i].opacity.value));
      letter.style.transform = 'translateY(' + springs[i].y.value.toFixed(2) + 'px) scale(' + springs[i].scale.value.toFixed(4) + ')';
      letter.style.opacity = op.toFixed(3);
    });

    // === Background: zoom out 1.1 → 1 ===
    bgSpring.target = 1.1 - (0.1 * p);
    stepSpring(bgSpring);
    if (bg) {
      bg.style.transform = 'scale(' + bgSpring.value.toFixed(4) + ')';
    }

    // === Hint: fade at 10% scroll ===
    if (hint) {
      if (p > 0.1) {
        hint.classList.add('is-hidden');
      } else {
        hint.classList.remove('is-hidden');
      }
    }

    // === Stats: reveal after letters gather (p > 0.55) — spring-driven ===
    if (statsEl) {
      var showStats = p > 0.55;
      statsOpSpring.target = showStats ? 1 : 0;
      statsYSpring.target  = showStats ? 0 : 30;
      stepSpring(statsOpSpring);
      stepSpring(statsYSpring);
      statsEl.style.opacity   = Math.max(0, Math.min(1, statsOpSpring.value)).toFixed(3);
      statsEl.style.transform = 'translateY(' + statsYSpring.value.toFixed(2) + 'px)';

      if (showStats) {
        if (!statsEl.classList.contains('is-visible')) statsEl.classList.add('is-visible');
        if (!countersTriggered) triggerBannerCounters();
      } else {
        statsEl.classList.remove('is-visible');
      }
    }

    requestAnimationFrame(update);
  }

  function triggerBannerCounters() {
    if (countersTriggered) return;
    countersTriggered = true;

    var nums = section.querySelectorAll('.stat-number[data-target]');
    nums.forEach(function (el) {
      var target = parseFloat(el.getAttribute('data-target'));
      var suffix = el.getAttribute('data-suffix') || '';
      var prefix = el.getAttribute('data-prefix') || '';
      var duration = 2500;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - (1 - progress) * (1 - progress);
        var current = Math.floor(eased * target);
        el.textContent = prefix + current + suffix;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = prefix + target + suffix;
        }
      }

      requestAnimationFrame(step);
    });
  }

  requestAnimationFrame(update);
})();

/* ── FAQ Accordion + Sliding Highlight ── */
(function () {
  var faqList = document.querySelector('.faq-list');
  var highlight = document.querySelector('.faq-highlight');
  var items = document.querySelectorAll('.faq-list .faq-item');
  if (!faqList || !highlight || !items.length) return;

  // Sliding highlight — follows hovered item
  function moveHighlight(item) {
    var listRect = faqList.getBoundingClientRect();
    var itemRect = item.getBoundingClientRect();
    highlight.style.top = (itemRect.top - listRect.top) + 'px';
    highlight.style.height = itemRect.height + 'px';
    highlight.classList.add('is-active');
  }

  items.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      moveHighlight(item);
    });
  });

  faqList.addEventListener('mouseleave', function () {
    highlight.classList.remove('is-active');
  });

  // Accordion click
  items.forEach(function (item) {
    item.addEventListener('click', function () {
      var answer = item.querySelector('.faq-answer');
      var chevron = item.querySelector('.faq-chevron');
      var isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

      // Close all
      items.forEach(function (other) {
        other.querySelector('.faq-answer').style.maxHeight = '0';
        other.querySelector('.faq-answer').style.paddingTop = '0';
        other.querySelector('.faq-chevron').style.transform = 'rotate(0deg)';
      });

      // Open clicked (if it was closed)
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.paddingTop = '16px';
        chevron.style.transform = 'rotate(180deg)';
      }

      // Update highlight position after accordion expands/collapses
      requestAnimationFrame(function () {
        setTimeout(function () { moveHighlight(item); }, 420);
      });
    });
  });
})();
