import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <nav className="pill-nav">
        <div className="logo">Midlaj<span>.</span></div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-cta">
          <a href="#contact" className="btn-hire">Let's Talk</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
