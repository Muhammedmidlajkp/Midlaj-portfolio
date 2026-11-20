// The single source of motion values for the scripted layer (GSAP and Lenis).
// The CSS twins live in src/index.css (--d-1..4, --ease-out). Change them together.
export const motion = {
  // durations in seconds: quick, standard, slow
  d: { quick: 0.4, base: 0.8, slow: 1.2 },
  // gsap's power3.out is the same curve family as cubic-bezier(0.22, 1, 0.36, 1)
  ease: 'power3.out',
  stagger: 0.06,
  rise: 28, // px a block travels while it fades in
  parallax: 8, // % of an image's own height, never more than 10 to 15
  scroll: {
    duration: 1.15,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // expo out
    wheelMultiplier: 1,
  },
  headerOffset: -96, // matches scroll-padding-top in index.css
  magnet: 0.25, // how far a button follows the pointer, as a fraction
};
