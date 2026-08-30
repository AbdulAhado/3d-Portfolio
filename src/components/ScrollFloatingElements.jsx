import React, { useRef, useEffect } from 'react';

// Floating element that moves with scroll — direct DOM, no React state
export const ScrollFloatingElement = ({ children, speed = 0.3, direction = 'vertical' }) => {
  const ref = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;

    const handleScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        const offset = window.scrollY * speed;
        if (direction === 'vertical') {
          element.style.transform = `translateY(${offset}px) translateZ(0)`;
        } else {
          element.style.transform = `translateX(${offset}px) translateZ(0)`;
        }
        rafId.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [speed, direction]);

  return (
    <div ref={ref} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
};

// Parallax background layer — direct DOM, no React state
export const ParallaxLayer = ({ children, speed = 0.5, className = '' }) => {
  const ref = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;

    const handleScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        const offset = window.scrollY * speed;
        element.style.transform = `translateY(${offset}px) translateZ(0)`;
        rafId.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
};

// Scroll progress bar — pure DOM, zero React re-renders, 60fps smooth
export const ScrollProgress = () => {
  const barRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    if (!barRef.current) return;
    const bar = barRef.current;

    const handleScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;
        bar.style.transform = `scaleX(${progress})`;
        rafId.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        zIndex: 9999,
        background: 'transparent',
      }}
    >
      <div
        ref={barRef}
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, var(--primary), var(--secondary), var(--highlight))',
          transformOrigin: 'left center',
          transform: 'scaleX(0)',
          willChange: 'transform',
        }}
      />
    </div>
  );
};
