import React from 'react';
import { motion as Motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const charVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1], // Apple-style ultra smooth easing
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1], // Apple-style ultra smooth easing
      },
    },
  };

  const splitText = (text, staggerDelay = 0.03) => {
    return (
      <Motion.span
        variants={{
          visible: { transition: { staggerChildren: staggerDelay } }
        }}
        style={{ display: 'inline-block' }}
      >
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap', overflow: 'hidden', verticalAlign: 'top' }}>
            {word.split("").map((char, charIndex) => (
              <Motion.span
                key={charIndex}
                variants={charVariants}
                style={{ display: 'inline-block' }}
              >
                {char}
              </Motion.span>
            ))}
            <span style={{ display: 'inline-block' }}>&nbsp;</span>
          </span>
        ))}
      </Motion.span>
    );
  };

  const alternatingSplitText = (text, staggerDelay = 0.04, initialDelay = 0) => {
    let globalCharIndex = 0;

    const alternatingCharVariants = {
      hidden: (i) => ({
        x: i % 2 === 0 ? -60 : 60, 
        opacity: 0,
      }),
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1], // Apple-style ultra smooth easing
        },
      },
    };

    return (
      <Motion.span
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: staggerDelay, delayChildren: initialDelay } }
        }}
        style={{ display: 'inline-block' }}
      >
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap', verticalAlign: 'top' }}>
            {word.split("").map((char, charIndex) => {
              const currentGlobalIndex = globalCharIndex++;
              return (
                <Motion.span
                  custom={currentGlobalIndex}
                  key={charIndex}
                  variants={alternatingCharVariants}
                  style={{ display: 'inline-block' }}
                >
                  {char}
                </Motion.span>
              );
            })}
            <span style={{ display: 'inline-block' }}>&nbsp;</span>
          </span>
        ))}
      </Motion.span>
    );
  };

  const typingSplitText = (text, staggerDelay = 0.08, initialDelay = 0) => {
    const typingCharVariants = {
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], // Smooth subtle slide-fade
        },
      },
    };

    return (
      <Motion.span
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: staggerDelay, delayChildren: initialDelay } }
        }}
        style={{ display: 'inline-block' }}
      >
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap', verticalAlign: 'top' }}>
            {word.split("").map((char, charIndex) => (
              <Motion.span
                key={charIndex}
                variants={typingCharVariants}
                style={{ display: 'inline-block' }}
              >
                {char}
              </Motion.span>
            ))}
            {wordIndex < text.split(" ").length - 1 && (
              <span style={{ display: 'inline-block' }}>&nbsp;</span>
            )}
          </span>
        ))}
      </Motion.span>
    );
  };

  return (
    <Motion.div
      id="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="grid-bg"></div>
      <div className="hero-glow"></div>

      <Motion.p className="hero-tag" variants={itemVariants}>
        ● Available for work
      </Motion.p>

      <h1 className="hero-title">
        <span style={{ display: 'block' }}>
          {alternatingSplitText("Building the", 0.04, 0.8)}
        </span>
        <span className="line2" style={{ display: 'block' }}>
          {alternatingSplitText("web of", 0.04, 0.8)}
        </span>
        <span style={{ display: 'block' }}>
          {typingSplitText("tomorrow.", 0.08, 2.4)}
        </span>
      </h1>

      <Motion.p
        className="hero-desc"
        variants={itemVariants}
      >
        {splitText("I'm a web developer crafting performant, accessible, and beautiful digital experiences — from pixel to production.", 0.015)}
      </Motion.p>

      <Motion.div className="hero-cta" variants={itemVariants}>
        <a href="#projects" className="btn-primary">View My Work</a>
        <a href="#contact" className="btn-secondary">Get In Touch</a>
      </Motion.div>
    </Motion.div>
  );

};

export default Hero;
