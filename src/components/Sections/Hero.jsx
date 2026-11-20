import { useSyncExternalStore } from 'react';
import { site } from '../../data/site';
import './Hero.css';

const HEADLINE = 'One developer, from the first sketch to the deployed server.';

// Small project screenshots sitting inside the headline. They are
// decorative: the h1 carries its own aria-label, so they stay out of the
// accessibility tree.
const Thumb = ({ name }) => (
  <img
    className="hero-thumb"
    src={`/img/${name}-thumb-320.webp`}
    srcSet={`/img/${name}-thumb-160.webp 160w, /img/${name}-thumb-320.webp 320w`}
    sizes="(min-width: 1200px) 190px, 90px"
    width="320"
    height="200"
    alt=""
    decoding="async"
  />
);

const formatTime = () =>
  new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: site.timeZone,
  }).format(new Date());

// re-read the time every 15 seconds; React only re-renders when HH:MM changes
const subscribe = (notify) => {
  const id = setInterval(notify, 15000);
  return () => clearInterval(id);
};

// Local time where the work is done. The server (prerender) snapshot is empty,
// so the prerendered HTML and the first client render match exactly; the real
// time appears right after hydration. Until then the line is hidden, so there
// is no layout shift and no stale build-time hour.
const LiveClock = () => {
  const time = useSyncExternalStore(subscribe, formatTime, () => '');

  return (
    <p className={`hero-clock${time ? '' : ' is-pending'}`}>
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
