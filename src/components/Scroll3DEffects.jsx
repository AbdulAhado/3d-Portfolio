import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

// Optimized Parallax Container with requestAnimationFrame
// NOTE: throttle() removed — rAF guard already limits to 60fps
export const ParallaxContainer = ({ children, speed = 0.5, direction = 'up' }) => {
  const ref = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    let elementTop = 0;
    let elementHeight = 0;
    let windowHeight = window.innerHeight;

    const updatePosition = () => {
      if (!ref.current) return;
      const rect = element.getBoundingClientRect();
      elementTop = rect.top + window.scrollY;
      elementHeight = rect.height;
      windowHeight = window.innerHeight;
    };

    updatePosition();

    const handleScroll = () => {
      if (rafId.current) return; // rAF guard = exactly 60fps, no extra throttle needed

      rafId.current = requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const elementCenter = elementTop + elementHeight / 2;
        const viewportCenter = scrolled + windowHeight / 2;
        const distance = viewportCenter - elementCenter;
        const offset = distance * speed;

        if (direction === 'up') {
          element.style.transform = `translateY(${offset}px) translateZ(0)`;
        } else if (direction === 'down') {
          element.style.transform = `translateY(${-offset}px) translateZ(0)`;
        } else if (direction === 'left') {
          element.style.transform = `translateX(${offset}px) translateZ(0)`;
        } else if (direction === 'right') {
          element.style.transform = `translateX(${-offset}px) translateZ(0)`;
        }

        rafId.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updatePosition, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updatePosition);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [speed, direction]);

  return (
    <div ref={ref} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
};

// 3D Rotate on Scroll — rAF only, no extra throttle
export const ScrollRotate3D = ({ children, intensity = 10 }) => {
  const ref = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    let elementTop = 0;
    let elementHeight = 0;
    let windowHeight = window.innerHeight;

    const updatePosition = () => {
      if (!ref.current) return;
      const rect = element.getBoundingClientRect();
      elementTop = rect.top + window.scrollY;
      elementHeight = rect.height;
      windowHeight = window.innerHeight;
    };

    updatePosition();

    const handleScroll = () => {
      if (rafId.current) return;

      rafId.current = requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const elementCenter = elementTop + elementHeight / 2;
        const viewportCenter = scrolled + windowHeight / 2;
        const distance = (viewportCenter - elementCenter) / windowHeight;
        const rotation = distance * intensity;

        element.style.transform = `perspective(1000px) rotateX(${rotation}deg) rotateY(${rotation * 0.5}deg) translateZ(0)`;
        rafId.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updatePosition, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updatePosition);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [intensity]);

  return (
    <div ref={ref} style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}>
      {children}
    </div>
  );
};

// Scale on Scroll — rAF only
export const ScrollScale = ({ children, minScale = 0.8, maxScale = 1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const rafId = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    let elementTop = 0;
    let elementHeight = 0;
    let windowHeight = window.innerHeight;

    const updatePosition = () => {
      if (!ref.current) return;
      const rect = element.getBoundingClientRect();
      elementTop = rect.top + window.scrollY;
      elementHeight = rect.height;
      windowHeight = window.innerHeight;
    };

    updatePosition();

    const handleScroll = () => {
      if (rafId.current) return;

      rafId.current = requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const elementCenter = elementTop + elementHeight / 2;
        const viewportCenter = scrolled + windowHeight / 2;
        const distance = Math.abs(viewportCenter - elementCenter);
        const maxDistance = windowHeight;
        const progress = Math.min(distance / maxDistance, 1);
        const scale = maxScale - (maxScale - minScale) * progress;

        element.style.transform = `scale(${scale}) translateZ(0)`;
        element.style.opacity = isInView ? Math.max(0.7, 1 - progress * 0.3) : '0.3';
        rafId.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updatePosition, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updatePosition);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [minScale, maxScale, isInView]);

  return (
    <div ref={ref} style={{ willChange: 'transform, opacity' }}>
      {children}
    </div>
  );
};

// Fade and Slide on Scroll — rAF only, no extra throttle
export const ScrollFadeSlide = ({ children, direction = 'up', distance = 50 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const rafId = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    let elementTop = 0;
    let elementHeight = 0;
    let windowHeight = window.innerHeight;

    const updatePosition = () => {
      if (!ref.current) return;
      const rect = element.getBoundingClientRect();
      elementTop = rect.top + window.scrollY;
      elementHeight = rect.height;
      windowHeight = window.innerHeight;
    };

    updatePosition();

    const handleScroll = () => {
      if (rafId.current) return;

      rafId.current = requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const elementCenter = elementTop + elementHeight / 2;
        const viewportCenter = scrolled + windowHeight / 2;
        const distanceFromCenter = Math.abs(viewportCenter - elementCenter);
        const maxDistance = windowHeight * 1.5;
        const progress = Math.min(distanceFromCenter / maxDistance, 1);

        let translate = '';
        if (direction === 'up')    translate = `translateY(${distance * progress}px)`;
        else if (direction === 'down')  translate = `translateY(${-distance * progress}px)`;
        else if (direction === 'left')  translate = `translateX(${distance * progress}px)`;
        else if (direction === 'right') translate = `translateX(${-distance * progress}px)`;

        element.style.transform = `${translate} translateZ(0)`;
        element.style.opacity = isInView ? String(Math.max(0.3, 1 - progress * 0.7)) : '0.3';
        rafId.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updatePosition, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updatePosition);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [direction, distance, isInView]);

  return (
    <div ref={ref} style={{ willChange: 'transform, opacity' }}>
      {children}
    </div>
  );
};

// 3D Tilt on Scroll — rAF only
export const ScrollTilt3D = ({ children, intensity = 15 }) => {
  const ref = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    let elementTop = 0;
    let elementHeight = 0;
    let windowHeight = window.innerHeight;

    const updatePosition = () => {
      if (!ref.current) return;
      const rect = element.getBoundingClientRect();
      elementTop = rect.top + window.scrollY;
      elementHeight = rect.height;
      windowHeight = window.innerHeight;
    };

    updatePosition();

    const handleScroll = () => {
      if (rafId.current) return;

      rafId.current = requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const elementCenter = elementTop + elementHeight / 2;
        const viewportCenter = scrolled + windowHeight / 2;
        const distance = (viewportCenter - elementCenter) / windowHeight;

        const rotateX = distance * intensity;
        const rotateY = distance * intensity * 0.3;

        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
        rafId.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updatePosition, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updatePosition);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [intensity]);

  return (
    <div ref={ref} style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}>
      {children}
    </div>
  );
};
