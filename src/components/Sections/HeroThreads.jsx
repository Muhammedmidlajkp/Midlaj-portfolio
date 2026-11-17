import { lazy, Suspense, useEffect, useState } from 'react';

const Threads = lazy(() => import('../ReactBits/Threads/Threads'));

// Decide once, on the client, whether this device should run the WebGL
// layer at all. Anyone who opts out keeps the static CSS/SVG hero, which
// is the designed look on its own.
const pickMode = () => {
  const mq = (q) => window.matchMedia?.(q).matches ?? false;
  if (mq('(prefers-reduced-motion: reduce)')) return null;
  if (navigator.connection?.saveData) return null;
  if ((navigator.deviceMemory ?? 8) <= 4) return null;
  if ((navigator.hardwareConcurrency ?? 8) <= 4) return null;
  if (!window.WebGL2RenderingContext) return null;
  return mq('(pointer: coarse), (max-width: 768px)') ? 'mobile' : 'desktop';
};

const PROPS = {
  desktop: { lineCount: 48, speed: 0.3, opacity: 0.8 },
  mobile: { lineCount: 30, speed: 0.2, opacity: 0.6 },
};

// Slow ink-and-lime threads drifting in the lower half of the hero,
// behind the SVG skyline. Mounted only after the page is idle so the
// headline (LCP) never waits on it; fades in once its first frame exists.
const HeroThreads = () => {
  const [mode, setMode] = useState(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const next = pickMode();
    if (!next) return undefined;
    const start = () => setMode(next);
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(start, { timeout: 1500 });
      return () => cancelIdleCallback(id);
    }
    const t = setTimeout(start, 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!mode) return undefined;
    const raf = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(raf);
  }, [mode]);

  if (!mode) return null;

  return (
    <div className={`hero-threads hero-threads--${mode}${shown ? ' is-shown' : ''}`}>
      <Suspense fallback={null}>
        <Threads
          color="#7a7f6a"
          accentColor="#c8f250"
          thickness={0.6}
          amplitude={1.5}
          angle={8}
          brightness={1.4}
          fade={0.35}
          enableMouseInteraction={false}
          {...PROPS[mode]}
        />
      </Suspense>
    </div>
  );
};

export default HeroThreads;
