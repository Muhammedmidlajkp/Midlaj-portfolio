import React from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import CustomCursor from './components/Layout/CustomCursor';
import WhatsAppButton from './components/UI/WhatsAppButton';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import { useScrollReveal } from './hooks/useScrollReveal';
import './index.css';

function App() {
  useScrollReveal();

  return (
    <div className="app">
      <CustomCursor />
      <WhatsAppButton />
      <Navbar />
      <main>
        <Hero />
        <div className="divider"></div>
        <About />
        <div className="divider"></div>
        <Skills />
        <div className="divider"></div>
        <Projects />
        <div className="divider"></div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
