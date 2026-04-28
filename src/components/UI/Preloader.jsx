import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Preloader.css';

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Slower, more realistic loading increments (1 to 3%)
      currentProgress += Math.floor(Math.random() * 3) + 1;
      
      // Simulate a slight "hang" when loading heavy assets near the end
      if (currentProgress > 85 && currentProgress < 98 && Math.random() > 0.7) {
        currentProgress -= 2; // Pause progress slightly
      }

      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        
        // Slightly longer dramatic pause at 100% before triggering exit
        setTimeout(() => {
          onFinish();
        }, 600);
      }
      setProgress(currentProgress);
    }, 50); // Increased interval time for a slower load

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <motion.div
      className="preloader-container"
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
        <motion.div 
          className="preloader-counter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {progress}%
        </motion.div>
        <div className="preloader-bar-container">
          <motion.div 
            className="preloader-bar"
            style={{ width: `${progress}%` }}
            layout
          ></motion.div>
        </div>
        <div className="preloader-label">SYSTEM_BOOT_SEQUENCE</div>
      </div>
    </motion.div>
  );
};

export default Preloader;
