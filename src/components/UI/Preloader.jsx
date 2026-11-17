import { useState } from 'react';
import './Preloader.css';

// A ~0.6s branded curtain that lifts off the already-rendered page.
// It no longer gates mounting, so the hero paints (and LCP fires) with
// the first frame; reduced-motion users never see it (see Preloader.css).
const Preloader = () => {
  const [done, setDone] = useState(false);
  if (done) return null;

  return (
    <div
      className="preloader"
      aria-hidden="true"
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget) setDone(true);
      }}
    >
      <span className="preloader-mark">
        Midlaj<span>.</span>
      </span>
    </div>
  );
};

export default Preloader;
