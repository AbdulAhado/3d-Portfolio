/**
 * useLenis.js
 * Singleton Lenis smooth scroll setup, synced with GSAP's RAF ticker
 * so ScrollTrigger + Lenis never fight each other.
 */
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Module-level singleton so it's shared across the whole app
let lenisInstance = null;

/**
 * Initialize and return the Lenis instance.
 * Call once at the App root level.
 */
export function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Create Lenis once
    if (!lenisInstance) {
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo easing
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        infinite: false,
      });
    }

    lenisRef.current = lenisInstance;

    // Sync Lenis RAF with GSAP's ticker for perfect frame alignment
    gsap.ticker.lagSmoothing(0); // Prevent GSAP from skipping frames to catch up

    function onTick(time) {
      lenisInstance.raf(time * 1000);
    }

    gsap.ticker.add(onTick);

    // Keep ScrollTrigger in sync with Lenis scroll position
    lenisInstance.on('scroll', ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(onTick);
      // Don't destroy — singleton lives for app lifetime
    };
  }, []);

  return lenisRef;
}

/**
 * Imperatively scroll to a target element or y-position.
 * @param {string|number|HTMLElement} target
 * @param {object} options — Lenis scrollTo options
 */
export function scrollTo(target, options = {}) {
  if (!lenisInstance) return;
  lenisInstance.scrollTo(target, {
    offset: -80, // account for navbar height
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    ...options,
  });
}
