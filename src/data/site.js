// Single source of truth for contact details and social links
// (index.html's JSON-LD mirrors these — keep them in sync).
export const site = {
  name: 'Muhammed Midlaj',
  role: 'MERN Stack Developer',
  email: 'midlaj2636@gmail.com',
  whatsapp: '919746927146',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Muhammedmidlajkp' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammed-midlaj-kp/' },
    { label: 'Instagram', href: 'https://www.instagram.com/__.midlaj.___/' },
  ],
};

export const whatsappUrl = `https://wa.me/${site.whatsapp}`;
