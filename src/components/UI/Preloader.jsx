import { useState } from 'react';
import './Preloader.css';

const KEY = 'midlaj-intro-seen';

// A short branded curtain that lifts off the already-rendered page. It never
// gates mounting, plays once per browser session, and reduced-motion users
// never see it (see Preloader.css).
const seenBefore = () => {
  try {
    return sessionStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
};

const Preloader = () => {
  const [done, setDone] = useState(seenBefore);
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
