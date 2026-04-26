import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Special handling for skill bars if they exist in the element
          const bar = entry.target.querySelector('.skill-bar');
          if (bar) {
            const level = entry.target.getAttribute('data-level');
            setTimeout(() => {
              bar.style.width = level + '%';
            }, 200);
          }
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));

    return () => {
      reveals.forEach(el => observer.unobserve(el));
    };
  }, []);
};
