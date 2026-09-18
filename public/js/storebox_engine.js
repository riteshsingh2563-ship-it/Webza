window.initStoreboxEngine = function() {
  if (typeof window === 'undefined' || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    return;
  }

  /* Clean up prior ScrollTrigger instances & tweens before re-binding to current live DOM */
  try {
    ScrollTrigger.getAll().forEach((t) => t.kill());
    gsap.killTweensOf('*');
  } catch (e) {}

  /* Clean up prior Lenis instance & ticker */
  if (window.__lenis) {
    try {
      window.__lenis.destroy();
    } catch (e) {}
    window.__lenis = null;
  }
  if (window.__lenisTicker) {
    gsap.ticker.remove(window.__lenisTicker);
    window.__lenisTicker = null;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* Force 3D hardware acceleration for tear-free, 120fps compositor transforms */
  gsap.config({ force3D: true });

  /* Make sure resting elements are visible */
  gsap.set(['#phoneWrap', '.hline > span', '#fb1 .eyebrow', '#fb1 .hero-proofline'], { visibility: 'visible' });

  /* Ticker lag smoothing to prevent stutter on heavy frames */
  gsap.ticker.lagSmoothing(500, 33);
  ScrollTrigger.config({ ignoreMobileResize: true });

  const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const IS_MOBILE = window.matchMedia('(max-width:920px)').matches || ('ontouchstart' in window);

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => gsap.utils.toArray(s);

  /* Continuous gradient sweep alignment for ₹9,999 */
  function alignPriceGradient() {
    const chars = [...document.querySelectorAll('.big-price .pchar:not(.mo)')];
    if (!chars.length) return;
    const lefts = chars.map((c) => c.getBoundingClientRect().left);
    const groupLeft = Math.min(...lefts);
    const groupRight = Math.max(...chars.map((c) => c.getBoundingClientRect().right));
    const groupWidth = groupRight - groupLeft;
    if (groupWidth > 10) {
      chars.forEach((c) => {
        const left = c.getBoundingClientRect().left;
        c.style.backgroundSize = groupWidth + 'px 100%';
        c.style.backgroundPosition = -(left - groupLeft) + 'px 0';
      });
    }
  }
  alignPriceGradient();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(alignPriceGradient);
  window.addEventListener('resize', () => {
    clearTimeout(window.__pgT);
    window.__pgT = setTimeout(alignPriceGradient, 150);
  });

  /* Whole-page scroll progress */
  const pageProgressFill = $('#pageProgressFill');
  if (pageProgressFill) {
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => gsap.set(pageProgressFill, { scaleX: self.progress }),
    });
  }

  /* Math card dots grid */
  const yearGrid = $('#yearGrid');
  if (yearGrid && yearGrid.children.length === 0) {
    for (let i = 0; i < 15; i++) {
      const d = document.createElement('span');
      d.className = 'ydot';
      yearGrid.appendChild(d);
    }
  }

  /* Infinite client logos / sites marquee */
  (function marquee() {
    const track = $('#mqTrack');
    if (!track) return;
    if (!track.dataset.cloned) {
      track.dataset.cloned = 'true';
      track.innerHTML += track.innerHTML;
    }
    if (RM) return;
    gsap.to(track, { xPercent: -50, ease: 'none', duration: 28, repeat: -1 });
  })();

  if (!RM) {
    /* Buttery smooth Lenis scroll — Desktop pointer only, preserving 120Hz native touch on mobile */
    if (!IS_MOBILE && window.Lenis) {
      try {
        const lenis = new Lenis({
          duration: 1.15,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          syncTouch: false,
          wheelMultiplier: 0.95,
        });
        window.__lenis = lenis;
        lenis.on('scroll', ScrollTrigger.update);
        window.__lenisTicker = (time) => {
          lenis.raf(time * 1000);
        };
        gsap.ticker.add(window.__lenisTicker);
      } catch (e) {
        console.warn('Lenis init notice:', e);
      }
    }

    /* Scroll reveals */
    gsap.set('.rv', { opacity: 0, y: 26 });
    ScrollTrigger.batch('.rv', {
      start: 'top 88%',
      onEnter: (b) =>
        gsap.to(b, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.08,
          overwrite: true,
        }),
    });

    const fireMissed = () => {
      const limit = window.innerHeight * 0.95;
      $$('.rv').forEach((el) => {
        if (
          el.getBoundingClientRect().top < limit &&
          (getComputedStyle(el).opacity === '0' || el.style.opacity === '0') &&
          !gsap.isTweening(el)
        ) {
          gsap.to(el, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', overwrite: true });
        }
      });
      [$('#fb3'), $('#fb4')].filter(Boolean).forEach((el) => {
        if (
          el.getBoundingClientRect().top < limit &&
          (getComputedStyle(el).opacity === '0' || el.style.opacity === '0')
        ) {
          gsap.to(el, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', overwrite: true });
        }
      });
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.once && st.vars.onEnter && st.progress === 1) {
          const f = st.vars.onEnter;
          st.kill();
          f(st);
        }
      });
    };
    ScrollTrigger.addEventListener('refresh', () => setTimeout(fireMissed, 60));
    setTimeout(fireMissed, 150);
    setTimeout(fireMissed, 600);

    /* How it works 5 steps */
    (function steps5() {
      const fill = $('#s5fill'),
        steps = $$('.s5');
      if (!fill || !steps.length) return;
      ScrollTrigger.create({
        trigger: '#steps5',
        start: 'top 72%',
        end: 'bottom 55%',
        scrub: 0.5,
        onUpdate: (self) => {
          const p = self.progress;
          const vert = window.innerWidth < 900;
          gsap.set(fill, vert ? { scaleY: p, scaleX: 1 } : { scaleX: p, scaleY: 1 });
          steps.forEach((s, i) => s.classList.toggle('on', p >= (i + 0.35) / steps.length));
        },
      });
    })();

    /* Shredded Invoice & DIY Hours */
    (function rip() {
      const ripStage = $('#ripStage');
      if (!ripStage) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#ripStage',
          start: 'top 78%',
          end: 'top 22%',
          scrub: 0.75,
        },
      });
      tl.to('.inv-top', { x: '-=30', y: '-=38', rotate: -7, ease: 'power1.in' }, 0)
        .to('.inv-bot', { x: '+=22', y: '+=112', rotate: 8, ease: 'power1.in' }, 0)
        .to('.invoice', { opacity: 0.16 }, 0.55)
        .fromTo(
          '.price-reveal',
          { scale: 0.75, opacity: 0, y: 20 },
          { scale: 1, opacity: 1, y: 0, ease: 'back.out(1.6)' },
          0.3
        )
        .to(
          '.shred',
          {
            y: (i) => 130 + i * 38,
            x: (i) => (i % 2 ? 40 + i * 14 : -30 - i * 16),
            rotation: (i) => (i % 2 ? 70 : -60),
            opacity: 0,
            stagger: 0.02,
            ease: 'power1.in',
          },
          0.05
        );

      const hrs = { v: 0 };
      ScrollTrigger.create({
        trigger: '#diyCard',
        start: 'top 75%',
        once: true,
        onEnter: () => {
          gsap.to(hrs, {
            v: 43,
            duration: 1.8,
            ease: 'power2.out',
            onUpdate: () => {
              const el = $('#diyHours');
              if (el) el.textContent = Math.round(hrs.v);
            },
          });
          gsap.to('.dx', {
            opacity: 1,
            scale: 1,
            rotate: -8,
            duration: 0.32,
            ease: 'back.out(2.2)',
            stagger: 0.28,
            delay: 0.3,
          });
        },
      });
    })();

    /* Interactive Shopfront Checkout Animation */
    (function sellFlow() {
      const stage = $('#sfBody'),
        cursor = $('#custCursor'),
        dot = $('#flyDot');
      if (!stage || !cursor || !dot) return;

      const pos = (el) => {
        const r = el.getBoundingClientRect(),
          s = stage.getBoundingClientRect();
        return { x: r.left - s.left + r.width / 2, y: r.top - s.top + r.height / 2 };
      };
      const fpos = (sel) => ({ x: () => pos($(sel)).x, y: () => pos($(sel)).y });

      const confetti = () => {
        const c = pos($('.sf-check'));
        const colors = ['#6B7D50', '#829762', '#4E5B38', '#0FA88F', '#2BD4BD'];
        for (let i = 0; i < 14; i++) {
          const p = document.createElement('i');
          p.className = 'confetti';
          p.style.background = colors[i % colors.length];
          stage.appendChild(p);
          gsap.set(p, { x: c.x, y: c.y, opacity: 1, scale: 0.6 + Math.random() * 0.7 });
          gsap.to(p, {
            x: c.x + (Math.random() * 180 - 90),
            y: c.y - 30 - Math.random() * 90,
            rotation: Math.random() * 300 - 150,
            duration: 0.5,
            ease: 'power2.out',
          });
          gsap.to(p, {
            y: '+=130',
            opacity: 0,
            duration: 0.7,
            delay: 0.45,
            ease: 'power1.in',
            onComplete: () => p.remove(),
          });
        }
      };

      const play = () => {
        gsap.set(['#sfPay', '#sfDone'], { opacity: 0, x: 40 });
        gsap.set('#sfCatalog', { opacity: 1, x: 0 });
        gsap.set('#sfBadge', { scale: 0 });
        gsap.set(cursor, { x: stage.offsetWidth - 70, y: stage.offsetHeight - 40, opacity: 0 });
        const tl = gsap.timeline({ onComplete: () => gsap.delayedCall(2.4, play) });
        tl.to(cursor, { opacity: 1, duration: 0.25 })
          .to(cursor, { ...fpos('#sfAdd'), duration: 0.9, ease: 'power2.inOut' })
          .to('#sfAdd', { scale: 0.92, duration: 0.1, yoyo: true, repeat: 1 })
          .add(() => {
            gsap.set(dot, { ...pos($('#sfAdd')), opacity: 1 });
            gsap.to(dot, {
              ...pos($('#sfCart')),
              duration: 0.55,
              ease: 'power2.inOut',
              onComplete: () => {
                gsap.set(dot, { opacity: 0 });
                gsap.to('#sfBadge', { scale: 1, duration: 0.35, ease: 'back.out(3)' });
              },
            });
          })
          .to({}, { duration: 0.75 })
          .to(cursor, { ...fpos('#sfCheckout'), duration: 0.7, ease: 'power2.inOut' })
          .to('#sfCheckout', { scale: 0.96, duration: 0.1, yoyo: true, repeat: 1 })
          .to('#sfCatalog', { opacity: 0, x: -40, duration: 0.4, ease: 'power2.in' })
          .to('#sfPay', { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' }, '-=.05')
          .to(cursor, { ...fpos('#sfPayBtn'), duration: 0.8, ease: 'power2.inOut' })
          .to('#sfPayBtn', { scale: 0.96, duration: 0.1, yoyo: true, repeat: 1 })
          .to('#sfPay', { opacity: 0, x: -40, duration: 0.35, ease: 'power2.in' }, '+=.15')
          .fromTo('#sfDone', { opacity: 0, x: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' })
          .add(confetti, '-=.1')
          .to(cursor, { opacity: 0, x: '+=60', duration: 0.4 }, '<')
          .to({}, { duration: 1.6 });
      };

      ScrollTrigger.create({
        trigger: '#shopStage',
        start: 'top 70%',
        once: true,
        onEnter: () => setTimeout(play, 400),
      });
    })();

    /* Search & AEO Simulation */
    gsap.set(['#osG', '#osC'], { opacity: 0, y: 26 });
    ScrollTrigger.create({
      trigger: '#oneSearch',
      start: 'top 72%',
      once: true,
      onEnter: () => {
        const qEl = $('#osQ');
        if (!qEl) return;
        const q = qEl.textContent;
        qEl.textContent = '';
        const o = { n: 0 };
        gsap.to(o, {
          n: q.length,
          duration: 1,
          ease: 'none',
          delay: 0.2,
          onUpdate: () => (qEl.textContent = q.slice(0, Math.round(o.n))),
        });
        const tl = gsap.timeline({ delay: 1.4 });
        tl.to(['#osG', '#osC'], { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out', stagger: 0.15 })
          .add(() => {
            const rows = $$('#serpList .srow');
            if (rows.length < 2) return;
            const you = rows[0],
              others = rows.slice(1);
            const h = you.offsetHeight + 8;
            gsap.set(you, { y: 2 * h });
            gsap.set(others, { y: -h });
            const t2 = gsap.timeline();
            t2.to(you, { y: 0, duration: 0.6, ease: 'power3.inOut' })
              .to(others, { y: 0, duration: 0.6, ease: 'power3.inOut' }, '<')
              .add(() => {
                const rk = you.querySelector('.rk');
                if (rk) rk.textContent = '1';
                if (others[0]) others[0].querySelector('.rk').textContent = '2';
                if (others[1]) others[1].querySelector('.rk').textContent = '3';
              }, '<+0.3')
              .to('#rank1', { scale: 1, duration: 0.45, ease: 'back.out(2.6)' });
          }, '+=.15')
          .add(() => {
            const aiEl = $('#aiTxt1');
            if (!aiEl) return;
            const txt = aiEl.textContent;
            aiEl.textContent = '';
            const o2 = { n: 0 };
            gsap.to(o2, {
              n: txt.length,
              duration: txt.length * 0.022,
              ease: 'none',
              onUpdate: () => (aiEl.textContent = txt.slice(0, Math.round(o2.n))),
            });
          }, '+=.3');
      },
    });

    /* Growth Lead Graph */
    ScrollTrigger.create({
      trigger: '#graphCard',
      start: 'top 75%',
      once: true,
      onEnter: () => {
        const line = $('#leadLine');
        if (!line) return;
        const L = line.getTotalLength();
        gsap.set(line, { strokeDasharray: L, strokeDashoffset: L });
        const tl = gsap.timeline({ delay: 0.2 });
        tl.to(line, { strokeDashoffset: 0, duration: 2, ease: 'power1.inOut' })
          .to('#leadArea', { opacity: 1, duration: 0.8 }, '-=1.2')
          .to('#ping1', { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2.4)' }, 0.7)
          .to('#ping2', { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2.4)' }, 1.5);
      },
    });

    /* Office Backoffice Tiles */
    ScrollTrigger.create({
      trigger: '#officeBx .office-tiles',
      start: 'top 78%',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          '#officeBx .otile',
          { y: 44, scale: 0.7, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 0.55, ease: 'back.out(1.9)', stagger: 0.07, delay: 0.1 }
        );
      },
    });

    /* Bring Anything Converging Animation - Smooth entrance without scroll hijacking */
    (function bring() {
      const box = $('#bringBox');
      if (!box) return;
      const center = (el) => {
        const r = el.getBoundingClientRect();
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      };

      let animated = false;
      const playBring = () => {
        if (animated) return;
        animated = true;
        const tl = gsap.timeline();
        $$('.src-chip').forEach((chip, i) => {
          tl.to(
            chip,
            {
              x: () => center(box).x - center(chip).x + Number(gsap.getProperty(chip, 'x')),
              y: () => center(box).y - center(chip).y + Number(gsap.getProperty(chip, 'y')),
              scale: 0.25,
              opacity: 0,
              ease: 'power2.in',
              duration: 0.5,
            },
            i * 0.12
          );
        });
        tl.fromTo(box, { scale: 1 }, { scale: 1.08, duration: 0.15, yoyo: true, repeat: 1, ease: 'power2.out' }, '>-0.1')
          .fromTo('#siteOut', { y: 40, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.55, ease: 'back.out(1.5)' }, '>');
      };

      ScrollTrigger.create({
        trigger: '#bring',
        start: 'top 75%',
        once: true,
        onEnter: playBring,
      });

      const bEl = $('#bring');
      if (bEl && bEl.getBoundingClientRect().top < window.innerHeight * 0.85) {
        playBring();
      }
    })();

    /* Pricing Cards Fan-In */
    gsap.set('#pricingGrid .pcard', { opacity: 0 });
    ScrollTrigger.create({
      trigger: '#pricingGrid',
      start: 'top 78%',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          '#pricingGrid .pcard',
          { y: 70, opacity: 0, rotation: (i) => (i % 2 ? 4 : -4) },
          { y: 0, opacity: 1, rotation: 0, duration: 0.8, ease: 'back.out(1.4)', stagger: 0.12 }
        );
      },
    });

    /* Math Card Countup & 15 Dots */
    ScrollTrigger.create({
      trigger: '#mathCard',
      start: 'top 72%',
      once: true,
      onEnter: () => {
        const yearCountEl = $('#yearCount');
        if (!yearCountEl) return;
        const years = parseInt(yearCountEl.textContent, 10) || 15;
        yearCountEl.textContent = '0';
        const cnt = { v: 0 };
        gsap.to(cnt, {
          v: years,
          duration: 1.8,
          ease: 'power1.inOut',
          delay: 0.2,
          onUpdate: () => (yearCountEl.textContent = Math.round(cnt.v)),
        });
        gsap.to($$('#yearGrid .ydot').slice(0, years), {
          backgroundColor: '#6B7D50',
          borderColor: 'rgba(107,125,80,.7)',
          duration: 0.25,
          stagger: { each: 0.026 },
          delay: 0.2,
          ease: 'none',
        });
      },
    });

    const heal = () => (window.__filmFix ? window.__filmFix() : ScrollTrigger.refresh());
    window.addEventListener('load', () => gsap.delayedCall(0.4, heal));
    let __lastResizeW = window.innerWidth || document.documentElement.clientWidth;
    window.addEventListener('resize', () => {
      const w = window.innerWidth || document.documentElement.clientWidth;
      if (Math.abs(w - __lastResizeW) < 10) return;
      __lastResizeW = w;
      clearTimeout(window.__rzT);
      window.__rzT = setTimeout(heal, 200);
    });

    if (window.matchMedia('(pointer:fine)').matches) {
      $$('.btn').forEach((b) => {
        b.addEventListener('mousemove', (e) => {
          const r = b.getBoundingClientRect();
          gsap.to(b, {
            x: (e.clientX - r.left - r.width / 2) * 0.25,
            y: (e.clientY - r.top - r.height / 2) * 0.35,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
        b.addEventListener('mouseleave', () =>
          gsap.to(b, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,.4)' })
        );
      });
    }

    /* Hero Film Pinned / Morphing Section */
    (function heroFilm() {
      const body = $('#mbody'),
        cursor = $('#heroCursor');
      if (body && cursor) {
        const at = (el) => ({
          x: el.offsetLeft + el.offsetWidth / 2,
          y: el.offsetTop + el.offsetHeight / 2,
        });
        gsap.set(cursor, { opacity: 1, x: 44, y: 64 });
        const startIdle = () => {
          const spots = ['.m-btn', '.m-img', '.m-card', '.m-logo']
            .map((s) => body.querySelector(s))
            .filter(Boolean);
          const idle = gsap.timeline({ repeat: -1, repeatDelay: 0.5, delay: 1.2, paused: true });
          spots.forEach((el) =>
            idle.to(cursor, { ...at(el), duration: 1.15, ease: 'power2.inOut', delay: 0.4 })
          );
          ScrollTrigger.create({
            trigger: '#phoneWrap',
            start: 'top bottom',
            end: 'bottom top',
            onToggle: (self) => (self.isActive ? idle.play() : idle.pause()),
          });
        };
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(startIdle);
        else startIdle();
      }

      const hf = document.getElementById('heroFilm');
      if (hf) hf.classList.add('flat');

      const blocks = [$('#fb1'), $('#phoneWrap'), $('#fb3'), $('#fb4')].filter(Boolean);
      gsap.set(blocks, { opacity: 0, y: 20 });
      gsap.set('.hline > span', { yPercent: 115 });
      gsap.set('.pchar', { opacity: 0, y: -30 });
      gsap.set('.serious', { opacity: 0 });
      gsap.set('#fb4 .chip', { opacity: 0, y: 12, scale: 0.8 });
      gsap.set('.fb4-btn', { opacity: 0, y: 12 });

      // Immediate entrance for above-the-fold hero elements
      requestAnimationFrame(() => {
        const fb1 = $('#fb1');
        if (fb1) {
          gsap.to(fb1, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' });
          gsap.to('.hline > span', { yPercent: 0, duration: 0.75, ease: 'power3.out', stagger: 0.1, delay: 0.1 });
          gsap.to(['#fb1 .eyebrow', '#fb1 .hero-proofline'], { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1, delay: 0.3 });
        }
        const pw = $('#phoneWrap');
        if (pw) {
          gsap.to(pw, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.35 });
        }
      });

      // Smooth and reliable scroll reveals for hero blocks fb3 and fb4
      const revealHeroBlock = (el) => {
        if (!el || el.dataset.revealed === 'true') return;
        el.dataset.revealed = 'true';
        gsap.to(el, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', overwrite: true });
        if (el.id === 'fb3') {
          gsap.to('#buildSent .w', {
            color: (i, t) => (t.classList.contains('hl') ? '#6B7D50' : '#221D15'),
            stagger: 0.06,
            duration: 0.15,
            ease: 'none',
            delay: 0.1,
          });
        }
        if (el.id === 'fb4') {
          gsap.timeline({ delay: 0.1 })
            .to('.pchar', { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'back.out(1.6)' })
            .to('.serious', { opacity: 1, duration: 0.2 }, '-=.1')
            .to('#fb4 .chip', { opacity: 1, y: 0, scale: 1, duration: 0.25, stagger: 0.06, ease: 'back.out(2)' }, '-=.05')
            .to('.fb4-btn', { opacity: 1, y: 0, duration: 0.25 }, '-=.05')
            .add(alignPriceGradient);
        }
      };

      [$('#fb3'), $('#fb4')].filter(Boolean).forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 88%',
          once: true,
          onEnter: () => revealHeroBlock(el),
        });
        if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
          revealHeroBlock(el);
        }
      });

      window.__filmFix = () => {
        ScrollTrigger.refresh();
      };
    })();
  } else {
    /* Reduced Motion fallback */
    const hf = document.getElementById('heroFilm');
    if (hf) hf.classList.add('flat');
    document.querySelectorAll('.rv').forEach((el) => (el.style.opacity = '1'));
    document.querySelectorAll('.s5').forEach((el) => el.classList.add('on'));
    const f = document.getElementById('s5fill');
    if (f) f.style.transform = 'none';
    document.querySelectorAll('.dx').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    document.querySelectorAll('#pricingGrid .pcard').forEach((el) => (el.style.opacity = '1'));
    const years = parseInt(document.getElementById('yearCount')?.textContent || '15', 10) || 15;
    document.querySelectorAll('#yearGrid .ydot').forEach((el, i) => {
      if (i < years) el.style.background = '#6B7D50';
    });
    const sfb = document.getElementById('sfBadge');
    if (sfb) sfb.style.transform = 'scale(1)';
    const la = document.getElementById('leadArea');
    if (la) la.style.opacity = '1';
    document.querySelectorAll('.ping').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    const rk = document.querySelector('#serpList .you .rk');
    if (rk) rk.textContent = '1';
    const b1 = document.getElementById('rank1');
    if (b1) b1.style.transform = 'scale(1)';
  }

  /* Force fresh calculations across all active pins and triggers */
  requestAnimationFrame(() => {
    try {
      ScrollTrigger.refresh();
    } catch (e) {}
  });
};

/* Self-invoke safely if loaded directly */
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      if (typeof window.initStoreboxEngine === 'function') {
        window.initStoreboxEngine();
      }
    });
  } else {
    window.initStoreboxEngine();
  }
}
