import './index.css';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import CustomCursor from './components/Layout/CustomCursor';
import WhatsAppButton from './components/UI/WhatsAppButton';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import Preloader from './components/UI/Preloader';

function App() {

  return (
    <>
      {/* decorative intro curtain — renders over the page, never gates it */}
      <Preloader />

      <div className="app">
        <a className="skip-link" href="#main">Skip to main content</a>
        <CustomCursor />
        <Navbar />
        <main id="main">
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
        {/* fixed-position, so it sits last in the DOM and in tab order */}
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;
