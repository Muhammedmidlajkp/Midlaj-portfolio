// Decorative hero atmosphere: a "skyline of code" — two layers of stepped
// bars, like a commit graph seen from the side — under a lime glow and the
// masked grid. Pure SVG + CSS: no images, no runtime cost beyond paint.

const W = 1440;
const H = 320;

// tiny deterministic PRNG so the skyline is identical on every render
const rng = (seed) => () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};

// heights rise toward the edges and dip in the middle, leaving the
// centered headline and CTAs a clear valley to sit in
const buildRidge = ({ seed, bar, min, max }) => {
  const rand = rng(seed);
  const bars = [];
  for (let x = 0; x < W; x += bar) {
    const edge = Math.abs((x + bar / 2) / W - 0.5) * 2; // 0 center → 1 edge
    const envelope = 0.25 + 0.75 * edge ** 1.4;
    const h = min + (max - min) * envelope * (0.55 + 0.45 * rand());
    bars.push({ x, y: Math.round(H - h), lit: rand() > 0.86 });
  }
  const d = `M0 ${H} ` + bars.map((b) => `V${b.y} H${b.x + bar}`).join(' ') + ` V${H} Z`;
  return { d, bars };
};

const back = buildRidge({ seed: 7, bar: 32, min: 60, max: 290 });
const front = buildRidge({ seed: 42, bar: 20, min: 24, max: 170 });

const HeroBackdrop = () => (
  <div className="hero-backdrop" aria-hidden="true">
    <div className="hero-sky" />
    <div className="hero-grid" />
    <svg
      className="hero-ridge hero-ridge--back"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMax slice"
    >
      <path d={back.d} />
    </svg>
    <svg
      className="hero-ridge hero-ridge--front"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMax slice"
    >
      <path d={front.d} />
      {/* a few "commits" catch the light along the front ridge */}
      {front.bars.filter((b) => b.lit).map((b) => (
        <rect key={b.x} className="hero-ridge-lit" x={b.x + 3} y={b.y} width={14} height={2} />
      ))}
    </svg>
  </div>
);

export default HeroBackdrop;
