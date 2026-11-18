import { useEffect, useRef, useState } from 'react';
import { skillGroups } from '../../data/skillsData';
import { projects } from '../../data/projectsData';
import './About.css';

// Counts up to its value once, the first time it is mostly on screen.
// The real value is always in the markup, so with reduced motion, no
// IntersectionObserver, or before it runs, the final figure is what shows.
const CountUp = ({ value }) => {
  const ref = useRef(null);
  const [text, setText] = useState(value);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (!('IntersectionObserver' in window)) return undefined;
    const match = /^(\d+(?:\.\d+)?)(.*)$/.exec(value);
    if (!match) return undefined;
    const target = parseFloat(match[1]);
    const decimals = (match[1].split('.')[1] || '').length;
    const suffix = match[2];
    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - start) / 1200);
          const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
          setText(p < 1 ? (target * eased).toFixed(decimals) + suffix : value);
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <dd ref={ref} className="stat-number">
      {text}
    </dd>
  );
};

const STATS = [
  { value: '1.5', label: 'Years of experience' },
  { value: String(projects.filter((p) => p.featured).length), label: 'Featured projects' },
  { value: '10+', label: 'Happy clients' },
  { value: '3', label: 'Live client sites' },
];

const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="about-grid">
        <figure className="about-photo">
          <picture>
            <source
              type="image/webp"
              srcSet="/img/profile-480.webp 480w, /img/profile-800.webp 800w"
              sizes="(min-width: 900px) 480px, (min-width: 700px) 42vw, min(320px, 100vw)"
            />
            <img
              src="/img/profile-800.jpg"
              alt="Portrait of Muhammed Midlaj"
              width="800"
              height="1067"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </figure>

        <div className="about-copy">
          <h2 id="about-heading" className="section-title">
            Crafting code with purpose.
          </h2>
          <p className="about-text">
            I'm Muhammed Midlaj, a web developer with a passion for clean code and thoughtful
            design. I specialize in building fast, modern web applications that balance function
            and beauty.
          </p>
          <p className="about-text">
            When I'm not coding, I'm exploring design systems, contributing to open source, or
            brewing the perfect cup of coffee.
          </p>

          <dl className="about-stats">
            {STATS.map((s) => (
              <div key={s.label} className="stat">
                <dt className="stat-label">{s.label}</dt>
                <CountUp value={s.value} />
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="capabilities">
        <h3 className="capabilities-title">What I work with</h3>
        <dl className="ledger">
          {skillGroups.map((group) => (
            <div key={group.id} className="ledger-row">
              <dt>{group.title}</dt>
              <dd>{group.skills.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default About;
