import { projects } from '../../data/projectsData';
import ProjectImage from '../UI/ProjectImage';
import HeroBackdrop from './HeroBackdrop';
import './Hero.css';

// the proof strip shows only projects that have a real screenshot
const featured = projects.filter((p) => p.image).slice(0, 3);

// Entrance motion is pure CSS (.h-in + --d stagger in Hero.css), so the
// headline paints with the first frame instead of waiting on JS.
const Hero = () => {
  return (
    <section id="hero" aria-labelledby="hero-title">
      <HeroBackdrop />

      <div className="hero-inner">
        <p className="hero-badge h-in" style={{ '--d': 0 }}>
          <picture>
            <source type="image/webp" srcSet="/img/avatar-96.webp 1x, /img/avatar-192.webp 2x" />
            <img
              className="hero-avatar"
              src="/img/avatar-192.jpg"
              alt="Portrait of Muhammed Midlaj"
              width="32"
              height="32"
              fetchPriority="high"
            />
          </picture>
          <span className="hero-badge-dot" aria-hidden="true" />
          Available for work · India &amp; UAE
        </p>

        <h1 id="hero-title" className="hero-title">
          <span className="hero-kicker h-in" style={{ '--d': 1 }}>
            Hi, I&rsquo;m Muhammed Midlaj&nbsp;&mdash;
          </span>{' '}
          <span className="hero-role h-in" style={{ '--d': 2 }}>
            MERN Stack <em>Developer</em>
          </span>
        </h1>

        <p className="hero-sub h-in" style={{ '--d': 4 }}>
          I build fast, accessible web apps for clients in India and the
          UAE&nbsp;&mdash; from database to deployed UI.
        </p>

        <div className="hero-cta h-in" style={{ '--d': 5 }}>
          <a href="#projects" className="btn-primary">
            View my work <span aria-hidden="true">→</span>
          </a>
          <a href="#contact" className="btn-secondary">Let&rsquo;s talk</a>
        </div>
      </div>

      <div className="hero-work h-in" style={{ '--d': 7 }}>
        <ul className="hero-strip" aria-label="Selected client work">
          {featured.map((p) => (
            <li key={p.id} className="hero-card">
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                <ProjectImage
                  image={p.image}
                  alt={`Screenshot of the ${p.title} website`}
                  sizes="(max-width: 700px) 78vw, 380px"
                />
                <span className="hero-card-label">
                  {p.title} <span aria-hidden="true">↗</span>
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="hero-proof">
          <span>1.5 yrs experience</span>
          <span>10+ clients</span>
          <span>{featured.length} live client sites</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
