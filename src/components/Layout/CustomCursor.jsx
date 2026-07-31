import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationId;
    const animate = () => {
      // Smooth interpolation (lerp)
      // The smaller the multiplier (e.g., 0.1), the smoother/slower the delay
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.15;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.15;

      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.08;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.08;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }

      // store the id each frame so cleanup cancels the CURRENT frame,
      // not just the first one (otherwise the loop outlives the component)
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Hide default cursor on links and interactables
    const handleHover = () => {
      if (ringRef.current) ringRef.current.classList.add('hover');
    };
    const handleUnhover = () => {
      if (ringRef.current) ringRef.current.classList.remove('hover');
    };

    const interactables = document.querySelectorAll('a, button, .skill-card, .project-card');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default CustomCursor;
