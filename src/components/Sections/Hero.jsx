import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div id="hero">
      <div className="grid-bg"></div>
      <div className="hero-glow"></div>
      <p className="hero-tag">● Available for work</p>
      <h1 className="hero-title">
        Building the<br />
        <span className="line2">web of</span><br />
        tomorrow.
      </h1>
      <p className="hero-desc">
        I'm a web  developer crafting performant, accessible, and beautiful digital experiences — from pixel to production.
      </p>
      <div className="hero-cta">
        <a href="#projects" className="btn-primary">View My Work</a>
        <a href="#contact" className="btn-secondary">Get In Touch</a>
      </div>
    </div>
  );
};

export default Hero;
