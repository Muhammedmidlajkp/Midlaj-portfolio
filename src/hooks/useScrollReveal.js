import { useEffect } from 'react';

export const useScrollReveal = (dependencies = []) => {
  useEffect(() => {
    const setupObserver = () => {
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
            
            // Unobserve after animating to prevent repeated triggers
            observer.unobserve(entry.target);
          }
        });
      }, { 
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      });

      reveals.forEach(el => observer.observe(el));

      return () => {
        reveals.forEach(el => observer.unobserve(el));
      };
    };

    // Small delay to ensure DOM is fully rendered before observing
    const timer = setTimeout(setupObserver, 100);
    return () => clearTimeout(timer);
  }, dependencies);
};
