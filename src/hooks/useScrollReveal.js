import { useEffect } from 'react';

export const useScrollReveal = (dependencies = []) => {
  useEffect(() => {
    let observer;

    const setupObserver = () => {
      const reveals = document.querySelectorAll('.reveal');

      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Unobserve after animating to prevent repeated triggers
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      });

      reveals.forEach(el => observer.observe(el));
    };

    // Small delay to ensure DOM is fully rendered before observing
    const timer = setTimeout(setupObserver, 100);

    return () => {
      clearTimeout(timer);
      // disconnect the observer too — previously only the timer was
      // cleared, leaking the observer on re-runs/unmount
      if (observer) observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
