import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from './tokens';

// Loaded dynamically after the page is idle (see main.jsx), so none of this
// is in the initial bundle. Content is fully visible without it; every state
// set here is applied below the fold or on hover only.
gsap.registerPlugin(ScrollTrigger);

export default function initMotion() {
  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const html = document.documentElement;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    // ---- smooth scroll: Lenis, driven by the GSAP ticker ----
    const lenis = new Lenis({
      ...motion.scroll,
      autoRaf: false,
      syncTouch: false, // native momentum on touch screens
      anchors: false,
    });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    html.classList.add('has-lenis');

    // the menu overlay locks the page; Navbar announces it
    const onLock = (e) => (e.detail ? lenis.stop() : lenis.start());
    window.addEventListener('scroll-lock', onLock);

    // in-page links glide, clear of the fixed header
    const onClick = (e) => {
      const a = e.target.closest?.('a[href^="#"]');
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
      const id = a.getAttribute('href').slice(1);
      const el = id ? document.getElementById(id) : document.body;
      if (!el) return;
      e.preventDefault();
      lenis.start();
      lenis.scrollTo(id === 'hero' || !id ? 0 : el, { offset: motion.headerOffset });
      history.replaceState(null, '', id ? `#${id}` : location.pathname);
    };
    document.addEventListener('click', onClick);

    // ---- reveals ----
    // native scroll-timeline reveals in index.css step aside once this runs
    html.classList.add('motion-js');

    gsap.utils.toArray(
      '.section-title, .contact-title, .contact-sub, .stat, .ledger-row, .feature-body, .index-title'
    ).forEach((el) => {
      gsap.from(el, {
        y: motion.rise,
        opacity: 0,
        duration: motion.d.base,
        ease: motion.ease,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });

    gsap.utils.toArray('.feature-media, .about-photo').forEach((el) => {
      gsap.from(el, {
        clipPath: 'inset(10% 0% 0% 0% round 6px)',
        opacity: 0,
        duration: motion.d.slow,
        ease: motion.ease,
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      });
    });

    // gentle parallax: the screenshot drifts inside its frame
    gsap.utils.toArray('.feature-media').forEach((frame) => {
      const img = frame.querySelector('img');
      if (!img) return;
      gsap.fromTo(
        img,
        { yPercent: -motion.parallax / 2 },
        {
          yPercent: motion.parallax / 2,
          ease: 'none',
          scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true },
        }
      );
    });

    // ---- magnetic buttons, fine pointers only ----
    const cleanups = [];
    if (finePointer) {
      document.querySelectorAll('.btn-primary').forEach((btn) => {
        const x = gsap.quickTo(btn, 'x', { duration: 0.5, ease: motion.ease });
        const y = gsap.quickTo(btn, 'y', { duration: 0.5, ease: motion.ease });
        const move = (e) => {
          const r = btn.getBoundingClientRect();
          x((e.clientX - (r.left + r.width / 2)) * motion.magnet);
          y((e.clientY - (r.top + r.height / 2)) * motion.magnet);
        };
        const leave = () => {
          x(0);
          y(0);
        };
        btn.addEventListener('pointermove', move);
        btn.addEventListener('pointerleave', leave);
        cleanups.push(() => {
          btn.removeEventListener('pointermove', move);
          btn.removeEventListener('pointerleave', leave);
        });
      });
    }

    // layout moves once fonts and images arrive
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener('load', refresh);

    return () => {
      cleanups.forEach((fn) => fn());
      document.removeEventListener('click', onClick);
      window.removeEventListener('scroll-lock', onLock);
      window.removeEventListener('load', refresh);
      gsap.ticker.remove(tick);
      lenis.destroy();
      html.classList.remove('has-lenis', 'motion-js');
    };
  });
}
