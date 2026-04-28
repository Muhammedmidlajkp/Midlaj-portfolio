import React from 'react';
import './About.css';
import ProfileCard from '../UI/ProfileCard';

const About = () => {
  return (
    <section id="about">
      <div className="about-left">
        <p className="section-label reveal">// About Me</p>
        <h2 className="section-title reveal reveal-delay-1">Crafting code<br />with purpose.</h2>
        <p className="about-text reveal reveal-delay-2">
          I'm Muhammed midlaj, a web developer with a passion for clean code and thoughtful design. I specialize in          building fast, modern web applications that balance function and beauty.
        </p>
        <p className="about-text reveal reveal-delay-2">
          When I'm not coding, I'm exploring design systems, contributing to open source, or brewing the perfect cup of coffee.
        </p>
        <div className="about-stats reveal reveal-delay-3">
          <div className="stat-item">
            <div className="stat-number">1.5</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">32</div>
            <div className="stat-label">Projects Shipped</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">∞</div>
            <div className="stat-label">Lines of Code</div>
          </div>
        </div>
      </div>
      <div className="about-right reveal reveal-delay-2">
        <ProfileCard name="Muhammed Midlaj" role="Web Developer" />
      </div>
    </section>
  );
};

export default About;
