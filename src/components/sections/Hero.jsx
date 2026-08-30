'use client';

/**
 * Hero.jsx — Dual-layout hero with zero excess top space.
 * DESKTOP (≥960px): 3-column grid (Left text & CTAs, Center 3D character, Right full stats card).
 * MOBILE  (<960px): Background character + Text/CTA glass card + Full PC-style stats card.
 *
 * PERFORMANCE NOTES:
 * - All inline <style> moved to sections.css (no repeated DOM injection)
 * - Hero image uses Next.js <Image> for auto WebP/AVIF + responsive sizing
 * - Character bounce uses CSS @keyframes (GPU composited) instead of Framer Motion JS
 * - backdrop-filter reduced from 25px → 14px (visually identical on dark bg)
 * - Entrance animations kept minimal and fast
 */
import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { SiUpwork } from 'react-icons/si';
import Image from 'next/image';
import meImage from '../../assets/me.png';

const switchSection = (section) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('switchSection', { detail: section }));
  }
};

const keyHighlights = [
  { icon: '🚀', text: 'AI Synthetic Data & Voice Platforms' },
  { icon: '⚡', text: 'Scalable MERN Stack & Next.js Architecture' },
  { icon: '🎨', text: 'High-Performance Responsive UX Design' },
];

const statsData = [
  { l: 'Role', v: 'Full Stack Dev' },
  { l: 'Company', v: 'Terapage.ai' },
  { l: 'Experience', v: '2+ Years' },
  { l: 'Projects Built', v: '15+ Apps' },
];

const socialLinks = [
  { href: 'https://github.com', icon: <FaGithub />, label: 'GitHub', cls: '' },
  { href: 'https://linkedin.com', icon: <FaLinkedin />, label: 'LinkedIn', cls: '' },
  { href: 'https://www.upwork.com/freelancers/~015b2fd60746978b56', icon: <SiUpwork />, label: 'Upwork', cls: 'upwork' },
];

/* ── Shared stats card content (used in both desktop and mobile) ── */
const StatsCardContent = ({ fontSize = 'desktop' }) => {
  const isSmall = fontSize === 'mobile';
  const labelSize = isSmall ? '0.82rem' : '0.88rem';
  const valueSize = isSmall ? '0.86rem' : '0.92rem';
  const pb = isSmall ? '6px' : '8px';

  return (
    <>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1.5px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), rgba(203,213,225,0.6), transparent)' }} />

      {statsData.map(({ l, v }) => (
        <div key={l} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: pb, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <span style={{ fontSize: labelSize, color: '#94a3b8', fontWeight: 500 }}>{l}</span>
          <span style={{ fontSize: valueSize, color: '#fff', fontWeight: 700 }}>{v}</span>
        </div>
      ))}

      <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: pb, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <span style={{ fontSize: labelSize, color: '#94a3b8', fontWeight: 500 }}>Upwork Status</span>
        <span style={{ fontSize: valueSize, color: '#e2e8f0', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
          <FaStar style={{ fontSize: '0.78rem', color: '#f59e0b' }} /> Top Rated
        </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: labelSize, color: '#94a3b8', fontWeight: 500 }}>Availability :</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#e2e8f0', fontWeight: 700, fontSize: labelSize }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981', animation: 'pulse-dot 2s infinite' }} />
          Available for Work
        </span>
      </div>

      <div style={{ marginTop: '4px', paddingTop: isSmall ? '8px' : '10px', borderTop: '1px solid rgba(255,255,255,0.09)', display: 'flex', gap: '6px' }}>
        {socialLinks.map(({ href, icon, label, cls }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
            className={`card-social-btn ${cls}`}
            aria-label={label}>
            {icon} {label}
          </a>
        ))}
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        maxHeight: '100vh',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 35%, #242933 0%, #151921 55%, #0d1015 100%)',
        boxSizing: 'border-box',
        padding: 0,
      }}
    >
      {/* ═══ DESKTOP LAYOUT (≥960px) — 3-column grid ═══ */}
      <div
        className="hero-desktop"
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '8px',
          paddingBottom: '80px',
          paddingLeft: '24px',
          paddingRight: '24px',
          boxSizing: 'border-box',
        }}
      >
        {/* Ambient glows — static, no animation */}
        <div style={{ position: 'absolute', width: '650px', height: '650px', top: '-15%', left: '10%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(226,232,240,0.08), transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '550px', height: '550px', bottom: '0%', right: '8%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(148,163,184,0.09), transparent 70%)', filter: 'blur(90px)', pointerEvents: 'none' }} />

        <div
          className="hero-desktop-grid"
          style={{
            width: '100%',
            maxWidth: '1360px',
            height: '100%',
            display: 'grid',
            gridTemplateColumns: '1.05fr 1.35fr 0.95fr',
            gap: '1.5rem',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* ── LEFT: Text & CTAs ── */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{ position: 'relative', zIndex: 3 }}
          >
            {/* Top Rated */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '5px 14px', borderRadius: '100px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.15)',
              marginBottom: '0.75rem',
              boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}>
              <FaStar style={{ color: '#f59e0b', fontSize: '0.8rem' }} />
              <span style={{ fontSize: '0.75rem', color: '#e2e8f0', fontWeight: 700, letterSpacing: '0.04em' }}>TOP RATED on Upwork</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 3.2vw, 3.1rem)',
              fontWeight: 800, lineHeight: 1.15, color: '#ffffff',
              marginBottom: '0.3rem', letterSpacing: '-0.03em',
            }}>
              Hello I'm{' '}
              <span className="silver-gradient-text">Abdul Ahad Saeed</span>
            </h1>

            <h2 className="silver-gradient-text" style={{
              fontSize: 'clamp(1.2rem, 1.8vw, 1.65rem)',
              fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '-0.01em',
            }}>
              Frontend & MERN Stack Developer
            </h2>

            <p style={{
              fontSize: '0.95rem', lineHeight: 1.6, color: '#94a3b8',
              marginBottom: '1rem', maxWidth: '430px',
            }}>
              Building modern, responsive, and AI-powered web applications with React.js, Next.js, Node.js, and Tailwind CSS at Terapage.ai.
            </p>

            {/* Highlights — removed backdrop-filter (too small to notice) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '1.2rem' }}>
              {keyHighlights.map((item) => (
                <div key={item.text} style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '6px 12px', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#cbd5e1', fontSize: '0.82rem', fontWeight: 600,
                }}>
                  <span style={{ fontSize: '0.9rem' }}>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap', position: 'relative', zIndex: 10 }}>
              <button onClick={() => switchSection('projects')} className="hero-btn-primary" aria-label="View Projects">View Projects</button>
              <button onClick={() => switchSection('contact')} className="hero-btn-secondary" aria-label="Contact Me">Contact Me</button>
            </div>
          </motion.div>

          {/* ── CENTER: Character ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 1 }}
          >
            <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(226,232,240,0.14), rgba(148,163,184,0.06) 50%, transparent 70%)', filter: 'blur(50px)', zIndex: 0 }} />
            {/* CSS animation instead of Framer Motion infinite loop */}
            <div
              className="hero-character-float"
              style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', maxHeight: 'min(76vh, 640px)', zIndex: 1 }}
            >
              <Image
                src={meImage}
                alt="Abdul Ahad Saeed"
                priority
                quality={85}
                sizes="(max-width: 960px) 100vw, 45vw"
                style={{ width: '100%', height: '100%', maxHeight: 'min(76vh, 640px)', objectFit: 'contain', filter: 'drop-shadow(0 25px 45px rgba(0,0,0,0.75))' }}
              />
            </div>
          </motion.div>

          {/* ── RIGHT: Full PC Stats Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{ position: 'relative', zIndex: 3 }}
          >
            <div className="stats-card-glass" style={{
              background: 'rgba(26,31,40,0.78)',
              backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
              border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: '20px', padding: '20px 22px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.18)',
              display: 'flex', flexDirection: 'column', gap: '10px',
              width: '100%', maxWidth: '340px', margin: '0 auto',
              position: 'relative', overflow: 'hidden',
            }}>
              <StatsCardContent fontSize="desktop" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══ MOBILE LAYOUT (<960px) ═══ */}
      <div className="hero-mobile" style={{
        position: 'absolute',
        inset: 0,
        display: 'none',
        flexDirection: 'column',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
      }}>
        {/* BG character — using img for background-cover effect (Image component doesn't support this well) */}
        <img src={typeof meImage === 'object' ? meImage.src : meImage} alt="" aria-hidden="true" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 10%', zIndex: 0,
        }} />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(180deg, rgba(8,11,18,0.55) 0%, rgba(8,11,18,0.40) 35%, rgba(8,11,18,0.85) 85%, #080b12 100%)',
        }} />

        <div style={{
          position: 'relative',
          zIndex: 10,
          padding: '16px 14px 85px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          minHeight: '100%',
          gap: '10px',
          maxWidth: '480px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
        }}>
          {/* Card 1: Text + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              background: 'rgba(14, 18, 28, 0.78)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              border: '1px solid rgba(255,255,255,0.16)',
              borderRadius: '20px',
              padding: '16px 18px',
              boxShadow: '0 15px 40px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.18)',
            }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              padding: '3px 10px', borderRadius: '100px',
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)',
              marginBottom: '8px',
            }}>
              <FaStar style={{ color: '#f59e0b', fontSize: '0.72rem' }} />
              <span style={{ fontSize: '0.68rem', color: '#e2e8f0', fontWeight: 700, letterSpacing: '0.04em' }}>TOP RATED on Upwork</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(1.45rem, 5vw, 2.1rem)',
              fontWeight: 800, lineHeight: 1.15, color: '#fff',
              marginBottom: '3px', letterSpacing: '-0.02em',
            }}>
              Hello I'm{' '}
              <span className="silver-gradient-text">Abdul Ahad Saeed</span>
            </h1>

            <h2 style={{
              fontSize: 'clamp(0.88rem, 2.2vw, 1.1rem)',
              fontWeight: 700, color: '#cbd5e1',
              marginBottom: '6px',
            }}>
              Frontend & MERN Stack Developer
            </h2>

            <p style={{
              fontSize: '0.8rem', lineHeight: 1.55, color: '#94a3b8',
              marginBottom: '12px',
            }}>
              Building modern, responsive, and AI-powered web applications with React.js, Next.js, Node.js, and Tailwind CSS at Terapage.ai.
            </p>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button onClick={() => switchSection('projects')} className="hero-btn-primary" style={{ padding: '9px 20px', fontSize: '0.84rem' }} aria-label="View Projects">
                View Projects
              </button>
              <button onClick={() => switchSection('contact')} className="hero-btn-secondary" style={{ padding: '9px 20px', fontSize: '0.84rem' }} aria-label="Contact Me">
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* Card 2: FULL PC-Style Stats Card on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              background: 'rgba(14, 18, 28, 0.82)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              border: '1px solid rgba(255,255,255,0.16)',
              borderRadius: '20px',
              padding: '14px 18px',
              boxShadow: '0 15px 40px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.18)',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <StatsCardContent fontSize="mobile" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
