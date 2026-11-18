import { useEffect, useState } from 'react';
import { site } from '../../data/site';
import './Hero.css';

const HEADLINE = 'One developer, from the first sketch to the deployed server.';

// Small project screenshots sitting inside the headline. They are
// decorative: the h1 carries its own aria-label, so they stay out of the
// accessibility tree.
const Thumb = ({ name }) => (
  <img
    className="hero-thumb"
    src={`/img/${name}-thumb.webp`}
    width="480"
    height="300"
    alt=""
    decoding="async"
  />
);

// Local time where the work is done. Updates once a minute, which is all a
// HH:MM readout needs, so it never causes more than one render per minute.
const LiveClock = () => {
  const format = () =>
    new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: site.timeZone,
    }).format(new Date());

  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="hero-clock">
      {site.location}, <time dateTime={time}>{time}</time> {site.timeZoneLabel}
    </p>
  );
};

const Hero = () => (
  <section id="hero" aria-labelledby="hero-title">
    <div className="hero-status">
      <p className="hero-available">
        <span className="status-dot" aria-hidden="true"></span>
        Available for work
      </p>
      <LiveClock />
    </div>

    {/* aria-label carries the real headline; the visual lines are hidden
        from assistive tech so it is read once, as a sentence */}
    <h1 id="hero-title" className="hero-title" aria-label={HEADLINE}>
      <span className="hero-line" style={{ '--i': 0 }} aria-hidden="true">
        <span className="hero-line-inner">
          One developer,
          <Thumb name="weddesy" />
        </span>
      </span>
      <span className="hero-line" style={{ '--i': 1 }} aria-hidden="true">
        <span className="hero-line-inner">
          from the first sketch
          <Thumb name="rootsbusiness" />
        </span>
      </span>
      <span className="hero-line hero-line-build" style={{ '--i': 2 }} aria-hidden="true">
        <span className="hero-line-inner">
          to the deployed server.
          <Thumb name="trustcore" />
        </span>
      </span>
    </h1>

    <div className="hero-foot">
      <p className="hero-desc">
        I'm Muhammed Midlaj, a MERN stack developer. I design and build websites and web
        apps for clients in India and the UAE, from the interface to the database.
      </p>
      <div className="hero-cta" data-hide-fab>
        <a href="#contact" className="btn-primary">Start a project</a>
        <a href="#projects" className="hero-mail">See the work</a>
      </div>
    </div>
  </section>
);

export default Hero;
