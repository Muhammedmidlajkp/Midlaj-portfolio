import React, { useState, useEffect } from 'react';
import { motion as Motion, MotionConfig } from 'framer-motion';
import './Preloader.css';

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Brisk increments — the counter is decorative, and every tick delays
      // LCP because the app mounts only after it finishes.
      currentProgress += Math.floor(Math.random() * 4) + 4;

      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);

        // Short beat at 100% before the exit slide
        setTimeout(() => {
          onFinish();
        }, 250);
      }
      setProgress(currentProgress);
    }, 30);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <MotionConfig reducedMotion="user">
    <Motion.div
      className="preloader-container"
      role="progressbar"
      aria-label="Loading portfolio"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      initial={{ y: 0 }}
      exit={{ 
        y: "-100%",
        transition: { 
          duration: 1.2, 
          ease: [0.76, 0, 0.24, 1] // Snappy apple-like slide out
        } 
      }}
    >
      <div className="preloader-content">
        <Motion.div 
          className="preloader-counter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {progress}%
        </Motion.div>
        <div className="preloader-bar-container">
          <Motion.div 
            className="preloader-bar"
            style={{ width: `${progress}%` }}
            layout
          ></Motion.div>
        </div>
        <div className="preloader-label">SYSTEM_BOOT_SEQUENCE</div>
      </div>
    </Motion.div>
    </MotionConfig>
  );
};

export default Preloader;
