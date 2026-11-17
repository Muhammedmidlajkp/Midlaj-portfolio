import { useEffect, useRef } from 'react';
import './CustomCursor.css';

// only where a real mouse is in use and motion is welcome
const QUERY = '(hover: hover) and (pointer: fine) and (min-width: 901px) and (prefers-reduced-motion: no-preference)';
const INTERACTIVE = 'a, button, input, textarea, label, .skill-card, .project-card, [data-cursor]';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    let teardown = null;

    const start = () => {
      const dot = dotRef.current;
      const ring = ringRef.current;
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
        document.documentElement.classList.add('cursor-visible');
        if (!frame) frame = requestAnimationFrame(tick);
      };

      // delegated, so elements rendered later are covered too
      const onOver = (e) => {
        ring.classList.toggle('hover', !!e.target.closest?.(INTERACTIVE));
      };

      const onLeave = () => document.documentElement.classList.remove('cursor-visible');

      document.documentElement.classList.add('has-custom-cursor');
      window.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('pointerover', onOver, { passive: true });
      document.documentElement.addEventListener('pointerleave', onLeave);

      return () => {
        cancelAnimationFrame(frame);
        window.removeEventListener('pointermove', onMove);
        document.removeEventListener('pointerover', onOver);
        document.documentElement.removeEventListener('pointerleave', onLeave);
        document.documentElement.classList.remove('has-custom-cursor', 'cursor-visible');
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
      </div>
    </>
  );
};

export default CustomCursor;
