import './index.css';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import CustomCursor from './components/Layout/CustomCursor';
import WhatsAppButton from './components/UI/WhatsAppButton';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import Preloader from './components/UI/Preloader';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <>
      {/* decorative intro curtain — renders over the page, never gates it */}
      <Preloader />

      <div className="app">
        <a className="skip-link" href="#main">Skip to main content</a>
        <CustomCursor />
        <WhatsAppButton />
        <Navbar />
        <main id="main">
          <Hero />
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
    </>
  );
}

export default App;
