/**
 * Footer.jsx — Minimal dark footer with social links.
 */
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const switchSection = (section) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('switchSection', { detail: section }));
  }
};

const links = [
  { href: 'https://github.com/ahadsaeed', icon: <FaGithub />, label: 'GitHub' },
  { href: 'https://linkedin.com/in/ahadsaeed', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'mailto:ahadrana0125@gmail.com', icon: <FaEnvelope />, label: 'Email' },
];

const Footer = () => (
  <footer style={{
    background: 'var(--bg-void)',
    borderTop: '1px solid var(--glass-border)',
    padding: '2.5rem 0',
  }}>
    <div style={{
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 clamp(1.5rem, 5vw, 4rem)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.5rem',
      textAlign: 'center',
    }}>
      {/* Logo */}
      <button
        onClick={() => switchSection('home')}
        style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.3rem', fontWeight: 800 }}
      >
        <span className="gradient-text">Abdul Ahad Saeed</span>
      </button>

      {/* Tagline */}
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: 360 }}>
        Building modern web experiences with clean code and great design.
      </p>

      {/* Social icons */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        {links.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              width: 44, height: 44, borderRadius: '12px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
              color: 'var(--text-secondary)', fontSize: '1.1rem', textDecoration: 'none',
              transition: 'color 0.3s, border-color 0.3s, background 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--glow-cyan-lt)'; e.currentTarget.style.borderColor = 'var(--glow-cyan)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
        © {new Date().getFullYear()} Abdul Ahad Saeed. Built with React + Three.js.
      </p>
    </div>
  </footer>
);

export default Footer;
