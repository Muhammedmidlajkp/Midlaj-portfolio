// image: basename of the responsive set in public/img (see scripts/img.mjs).
// widths lists the generated WebP sizes; the largest also exists as JPEG.
export const projects = [
  {
    id: 'traveezy',
    num: "01 — Featured",
    title: "Traveezy",
    desc: "A full-stack travel platform featuring AI-powered itineraries, seamless Google OAuth authentication, secure Razorpay integration, and real-time interactions.",
    tags: ["Node.js", "Express", "MongoDB", "EJS", "Razorpay", "REST APIs"],
    image: { name: 'traveezy', widths: [640, 1024], width: 1024, height: 459 },
    link: "https://www.traveezy.online/",
  },
  {
    id: 'trustcore',
    num: "02",
    title: "TrustCore Contracting",
    desc: "A professional corporate website for a UAE-based facility management company, featuring service showcases, industry pages, civil defense compliance highlights, and 24/7 emergency response information.",
    tags: ["React", "Vite", "CSS", "Responsive Design"],
    image: { name: 'trustcore', widths: [640, 1280], width: 1280, height: 608 },
    link: "https://www.trustcorecontracting.ae/",
  },
  {
    id: 'makeovers',
    num: "03",
    title: "Team N Makeovers",
    desc: "A luxury bridal beauty website for a South Asian makeup and hairstyling studio, featuring service packages, portfolio galleries, and online booking for weddings and events.",
    tags: ["React", "Vite", "CSS", "Responsive Design"],
    image: { name: 'makeovers', widths: [640, 1280], width: 1280, height: 608 },
    link: "https://team-n-makeovers.vercel.app/",
  },
  {
    id: 'nizan-tech',
    num: "04",
    title: "Nizan Tech",
    desc: "A real-time project tracking application featuring sprint management, daily task planning, employee productivity monitoring, and WebSocket-based activity logging.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    image: null,
    link: "https://nizan-tech.vercel.app/",
  },
  {
    id: 'voice-agent',
    num: "05",
    title: "AI Voice Calling Agent",
    desc: "An automated conversational AI assistant capable of handling interactive phone calls, executing custom backend workflows, and processing real-time responses.",
    tags: ["n8n", "Node.js", "AI APIs", "Webhooks"],
    image: null,
    link: "https://www.linkedin.com/posts/muhammed-midlaj-kp_ai-n8n-automation-ugcPost-7455562621023358976--rnC",
  }
];
