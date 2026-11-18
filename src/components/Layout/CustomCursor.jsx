import { useEffect, useRef } from 'react';
import './CustomCursor.css';

// only where a real mouse is in use and motion is welcome
const QUERY = '(hover: hover) and (pointer: fine) and (min-width: 901px) and (prefers-reduced-motion: no-preference)';
const INTERACTIVE = 'a, button, input, textarea, label, [data-cursor]';

// The ring says what a click will do. Elements opt in with data-cursor="View"
// (or Open, Copy, Chat); everything else interactive gets the plain hover ring.
const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    let teardown = null;

    const start = () => {
      const dot = dotRef.current;
      const ring = ringRef.current;
      const label = labelRef.current;
      const root = document.documentElement;
      const mouse = { x: -100, y: -100 };
      const dotPos = { ...mouse };
      const ringPos = { ...mouse };
      let frame = 0;

      const tick = () => {
        dotPos.x += (mouse.x - dotPos.x) * 0.35;
        dotPos.y += (mouse.y - dotPos.y) * 0.35;
        ringPos.x += (mouse.x - ringPos.x) * 0.15;
        ringPos.y += (mouse.y - ringPos.y) * 0.15;
        dot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0)`;
        ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;

        // stop the loop once the ring has caught up — no idle rAF
        const settled = Math.abs(mouse.x - ringPos.x) < 0.1 && Math.abs(mouse.y - ringPos.y) < 0.1;
        frame = settled ? 0 : requestAnimationFrame(tick);
      };

      const onMove = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        root.classList.add('cursor-visible');
        if (!frame) frame = requestAnimationFrame(tick);
      };

      // delegated, so elements rendered later are covered too
      const onOver = (e) => {
        const labelled = e.target.closest?.('[data-cursor]');
        ring.classList.toggle('hover', !!e.target.closest?.(INTERACTIVE));
        ring.classList.toggle('has-label', !!labelled);
        root.classList.toggle('cursor-labelled', !!labelled);
        if (labelled) label.textContent = labelled.dataset.cursor;
      };

      const onDown = () => ring.classList.add('down');
      const onUp = () => ring.classList.remove('down');
      const onLeave = () => root.classList.remove('cursor-visible');

      root.classList.add('has-custom-cursor');
      window.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('pointerover', onOver, { passive: true });
      window.addEventListener('pointerdown', onDown, { passive: true });
      window.addEventListener('pointerup', onUp, { passive: true });
      root.addEventListener('pointerleave', onLeave);

      return () => {
        cancelAnimationFrame(frame);
        window.removeEventListener('pointermove', onMove);
        document.removeEventListener('pointerover', onOver);
        window.removeEventListener('pointerdown', onDown);
        window.removeEventListener('pointerup', onUp);
        root.removeEventListener('pointerleave', onLeave);
        root.classList.remove('has-custom-cursor', 'cursor-visible', 'cursor-labelled');
      };
    };

    const sync = () => {
      teardown?.();
      teardown = mq.matches ? start() : null;
    };

    sync();
    mq.addEventListener('change', sync);
    return () => {
      mq.removeEventListener('change', sync);
      teardown?.();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span className="cursor-ring-shape" />
        <span ref={labelRef} className="cursor-label" />
      </div>
    </>
  );
};

export default CustomCursor;
