import { skillGroups } from '../../data/skillsData';
import { projects } from '../../data/projectsData';
import './About.css';

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
              sizes="(max-width: 900px) 70vw, 480px"
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
                <dd className="stat-number">{s.value}</dd>
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
