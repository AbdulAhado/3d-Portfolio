'use client';

/**
 * Navbar.jsx — Clean bottom pill dock. All 7 nav items visible on mobile with icons only.
 */
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHouse, FaUser, FaCode, FaBriefcase,
  FaBuilding, FaGears, FaEnvelope,
} from 'react-icons/fa6';

const navLinks = [
  { label: 'Home',       section: 'home',       icon: <FaHouse /> },
  { label: 'About',      section: 'about',      icon: <FaUser /> },
  { label: 'Skills',     section: 'skills',     icon: <FaCode /> },
  { label: 'Works',      section: 'projects',   icon: <FaBriefcase /> },
  { label: 'Experience', section: 'experience', icon: <FaBuilding /> },
  { label: 'Features',   section: 'features',   icon: <FaGears /> },
  { label: 'Contact',    section: 'contact',    icon: <FaEnvelope /> },
];

const Navbar = ({ activeSection, setActiveSection }) => {
  const pathname = usePathname();
  const router   = useRouter();
  const isHome   = pathname === '/';

  const handleNavClick = (section) => {
    if (!isHome) {
      router.push('/');
      setTimeout(() => { if (setActiveSection) setActiveSection(section); }, 100);
    } else {
      if (setActiveSection) setActiveSection(section);
    }
  };

  /* ── shared pill container style ── */
  const pillWrap = {
    position: 'fixed',
    bottom: '16px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 9000,
    display: 'inline-flex',
    alignItems: 'center',
    padding: '6px 8px',
    borderRadius: '9999px',
    background: 'rgba(14, 18, 28, 0.90)',
    backdropFilter: 'blur(22px)',
    WebkitBackdropFilter: 'blur(22px)',
    border: '1px solid rgba(255,255,255,0.15)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.18)',
    gap: '4px',
  };

  return (
    <>
      {/* ── DESKTOP PILL (≥ 800 px) — icon + text ── */}
      <nav
        aria-label="Main Navigation Desktop"
        className="nav-dock-desktop"
        style={pillWrap}
      >
        {navLinks.map(({ label, section, icon }) => {
          const isActive = activeSection === section;
          return (
            <div key={section} style={{ position: 'relative' }}>
              <button
                onClick={() => handleNavClick(section)}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.84rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#fff' : '#94a3b8',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s',
                  fontFamily: 'inherit',
                }}
                aria-label={label}
              >
                <span style={{ fontSize: '0.88rem', color: isActive ? '#38bdf8' : '#64748b', display: 'flex' }}>{icon}</span>
                {label}
              </button>
              {isActive && (
                <motion.div
                  layoutId="activeDesktopPill"
                  style={{
                    position: 'absolute', inset: 0, borderRadius: '9999px',
                    background: 'linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.07))',
                    border: '1px solid rgba(255,255,255,0.24)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)',
                    zIndex: 1,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </div>
          );
        })}
      </nav>

      {/* ── MOBILE PILL (< 800 px) — icons only, all 7 items ── */}
      <nav
        aria-label="Main Navigation Mobile"
        className="nav-dock-mobile"
        style={{ ...pillWrap, gap: '2px' }}
      >
        {navLinks.map(({ label, section, icon }) => {
          const isActive = activeSection === section;
          return (
            <div key={section} style={{ position: 'relative' }}>
              <button
                onClick={() => handleNavClick(section)}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: '40px',
                  height: '40px',
                  borderRadius: '9999px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  color: isActive ? '#38bdf8' : '#64748b',
                  transition: 'color 0.2s',
                }}
                aria-label={label}
              >
                {icon}
              </button>
              {isActive && (
                <motion.div
                  layoutId="activeMobilePill"
                  style={{
                    position: 'absolute', inset: 0, borderRadius: '9999px',
                    background: 'rgba(56,189,248,0.15)',
                    border: '1px solid rgba(56,189,248,0.35)',
                    zIndex: 1,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </div>
          );
        })}
      </nav>

    </>
  );
};

export default Navbar;
