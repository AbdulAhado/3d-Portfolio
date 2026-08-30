/**
 * useScrollTrigger.js — TRUE 3D GSAP ScrollTrigger presets.
 * All animations use rotateX + rotateY + z-depth for genuine 3D float-in.
 * Only transform + opacity — zero layout reflow.
 */
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Helper: ensure parent has perspective for true 3D depth */
function ensurePerspective(el, px = 1000) {
  const parent = el.parentElement;
  if (parent) {
    parent.style.perspective = `${px}px`;
    parent.style.perspectiveOrigin = '50% 50%';
  }
}

/**
 * True 3D float-in from depth — the primary reveal preset.
 * Elements come forward from Z=-200, with subtle rotateX + rotateY.
 */
export function useRevealUp(ref, opts = {}) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    ensurePerspective(el, opts.perspective ?? 1000);
    gsap.set(el, { rotateX: opts.rotateX ?? 20, rotateY: opts.rotateY ?? -10, z: opts.z ?? -180, opacity: 0, transformOrigin: 'center bottom' });
    const tween = gsap.to(el, {
      rotateX: 0, rotateY: 0, z: 0, opacity: 1,
      duration: opts.duration ?? 1.1,
      ease: opts.ease ?? 'power3.out',
      delay: opts.delay ?? 0,
      scrollTrigger: { trigger: el, start: opts.start ?? 'top 88%', once: true },
    });
    return () => tween.kill();
  }, []);
}

/**
 * 3D float-in from left depth.
 */
export function useRevealLeft(ref, opts = {}) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    ensurePerspective(el, 1000);
    gsap.set(el, { rotateY: -20, rotateX: 8, z: -150, x: -40, opacity: 0, transformOrigin: 'right center' });
    const tween = gsap.to(el, {
      rotateY: 0, rotateX: 0, z: 0, x: 0, opacity: 1,
      duration: opts.duration ?? 1.1,
      ease: opts.ease ?? 'power3.out',
      delay: opts.delay ?? 0,
      scrollTrigger: { trigger: el, start: opts.start ?? 'top 88%', once: true },
    });
    return () => tween.kill();
  }, []);
}

/**
 * 3D float-in from right depth.
 */
export function useRevealRight(ref, opts = {}) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    ensurePerspective(el, 1000);
    gsap.set(el, { rotateY: 20, rotateX: 8, z: -150, x: 40, opacity: 0, transformOrigin: 'left center' });
    const tween = gsap.to(el, {
      rotateY: 0, rotateX: 0, z: 0, x: 0, opacity: 1,
      duration: opts.duration ?? 1.1,
      ease: opts.ease ?? 'power3.out',
      delay: opts.delay ?? 0,
      scrollTrigger: { trigger: el, start: opts.start ?? 'top 88%', once: true },
    });
    return () => tween.kill();
  }, []);
}

/**
 * 3D stagger reveal — all children float in from Z depth with rotation.
 */
export function useStaggerReveal(containerRef, childSelector = ':scope > *', opts = {}) {
  useEffect(() => {
    if (!containerRef.current) return;
    const items = containerRef.current.querySelectorAll(childSelector);
    if (!items.length) return;

    // Add perspective to container
    containerRef.current.style.perspective = `${opts.perspective ?? 1200}px`;
    containerRef.current.style.perspectiveOrigin = '50% 50%';

    gsap.set(items, {
      rotateX: opts.rotateX ?? 25,
      rotateY: opts.rotateY ?? -15,
      z: opts.z ?? -200,
      opacity: 0,
      transformOrigin: 'center bottom',
    });

    const tween = gsap.to(items, {
      rotateX: 0, rotateY: 0, z: 0, opacity: 1,
      duration: opts.duration ?? 1.0,
      ease: opts.ease ?? 'power3.out',
      stagger: opts.stagger ?? 0.12,
      delay: opts.delay ?? 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: opts.start ?? 'top 82%',
        once: true,
      },
    });

    return () => tween.kill();
  }, []);
}

/**
 * Draw a vertical line from top to bottom as user scrolls.
 */
export function useTimelineLine(lineRef) {
  useEffect(() => {
    if (!lineRef.current) return;
    gsap.set(lineRef.current, { scaleY: 0, transformOrigin: 'top center' });
    const tween = gsap.to(lineRef.current, {
      scaleY: 1, ease: 'none',
      scrollTrigger: {
        trigger: lineRef.current,
        start: 'top 70%', end: 'bottom 30%',
        scrub: 1,
      },
    });
    return () => tween.kill();
  }, []);
}

/**
 * Animate a counter from 0 → target value.
 */
export function useCountUp(ref, target, suffix = '', opts = {}) {
  useEffect(() => {
    if (!ref.current) return;
    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: target,
      duration: opts.duration ?? 2,
      ease: 'power2.out',
      onUpdate: () => { if (ref.current) ref.current.textContent = Math.round(obj.val) + suffix; },
      scrollTrigger: { trigger: ref.current, start: opts.start ?? 'top 85%', once: true },
    });
    return () => tween.kill();
  }, [target, suffix]);
}
