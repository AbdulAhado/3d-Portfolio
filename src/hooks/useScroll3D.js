import { useEffect, useRef } from 'react';

// Ref-based scroll tracking — zero React re-renders on scroll
export const useScroll3D = () => {
  const scrollYRef = useRef(0);
  const scrollProgressRef = useRef(0);
  const listenersRef = useRef(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;

      scrollYRef.current = currentScrollY;
      scrollProgressRef.current = maxScroll > 0 ? Math.min(currentScrollY / maxScroll, 1) : 0;

      // Notify any direct subscribers (used by ScrollProgress)
      listenersRef.current.forEach(fn => fn(scrollYRef.current, scrollProgressRef.current));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const subscribe = (fn) => {
    listenersRef.current.add(fn);
    return () => listenersRef.current.delete(fn);
  };

  return { scrollYRef, scrollProgressRef, subscribe };
};

export const useParallax = (speed = 0.5) => {
  const { scrollYRef } = useScroll3D();
  return scrollYRef.current * speed;
};
