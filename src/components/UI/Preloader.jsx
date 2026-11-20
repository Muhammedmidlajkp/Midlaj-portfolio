import { useState } from 'react';
import './Preloader.css';

const KEY = 'midlaj-intro-seen';

// A short branded curtain that lifts off the already-rendered page. It never
// gates mounting and plays once per browser session. Repeat visits are
// hidden before first paint by a tiny inline script in index.html (class
// "intro-seen on <html>"; see Preloader.css), so the server-rendered HTML and
// the first client render are identical. Reduced-motion users never see it.
const Preloader = () => {
  const [done, setDone] = useState(false);
  if (done) return null;

  return (
    <div
      className="preloader"
      aria-hidden="true"
      onAnimationEnd={(e) => {
        if (e.target !== e.currentTarget) return;
        try {
          sessionStorage.setItem(KEY, '1');
        } catch {
          /* private mode: it simply plays again next time */
        }
        setDone(true);
      }}
    >
      <span className="preloader-mark">
        Midlaj<span>.</span>
      </span>
    </div>
  );
};

export default Preloader;
