'use client';

/**
 * Projects.jsx — Split-Screen Interactive Project Showcase.
 * Fixes:
 * - Eliminates giant top empty space
 * - Displays large, crystal-clear project preview images without squishing
 * - Left 38% list / Right 62% preview & details
 * - Hover / click project switching
 * - Fixed height viewport locking (fits 100vh above bottom navbar)
 */
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { FaExternalLinkAlt, FaInfoCircle, FaChevronUp, FaChevronDown } from 'react-icons/fa';

import youtube from '../../assets/Y_V3.jpg';
import gemini from '../../assets/Gemini.png';
import chat from '../../assets/chat-1.png';
import contact from '../../assets/contact-2.png';
import doctor from '../../assets/doctor.png';
import spotify from '../../assets/spotify-3.png';
import dice from '../../assets/dice.png';
import notes from '../../assets/notes.png';
import careerHero from '../../assets/careeros/hero.png';
import ecomHero from '../../assets/Ecomhut/hero.jpg';

/* ─── Project Data ─────────────────────────────────────── */
const allProjects = [
  {
    id: 'careeros',
    num: '01',
    title: 'CareerOS — AI Career Intelligence',
    category: 'Full Stack',
    image: careerHero,
    description: 'Enterprise-grade, recruiter-focused AI Career Co-Pilot engineered to optimize developer resumes, GitHub profiles, portfolios, and LinkedIn personal branding for maximum interview conversion.',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'MongoDB'],
    liveUrl: 'https://career-os-new-six.vercel.app/',
  },
  {
    id: 'ecomhutt',
    num: '02',
    title: 'EcomHutt — Full-Stack E-Commerce',
    category: 'Full Stack',
    image: ecomHero,
    description: 'Production-ready, full-stack modern e-commerce platform with customer storefront, admin dashboard, PayPal checkout, Cloudinary media handling, and real-time order tracking.',
    stack: ['Next.js', 'React 19', 'Node.js', 'Express', 'MongoDB', 'PayPal SDK'],
    liveUrl: 'https://ecomhutt.com/',
  },
  {
    id: 'doctor',
    num: '03',
    title: 'Doctor Appointment App',
    category: 'Full Stack',
    image: doctor,
    description: 'Full-stack doctor appointment system with user, doctor, and admin roles. Features secure authentication, appointment booking, profile management, and admin-controlled verification.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://doctor-frontend-ruby.vercel.app/',
  },
  {
    id: 'chat-app',
    num: '04',
    title: 'Real-time Chat App',
    category: 'Full Stack',
    image: chat,
    description: 'Full-stack real-time chat with user auth, message seen status, bio, last seen indicator and live messaging using Socket.io.',
    stack: ['React', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://ahad-projects-100014.netlify.app/',
  },
  {
    id: 'notes',
    num: '05',
    title: 'Notes Web App',
    category: 'Full Stack',
    image: notes,
    description: 'CRUD-based notes manager with user authentication, search by name or content, and MongoDB Atlas cloud integration.',
    stack: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://ahad-projects-6.netlify.app/',
  },
  {
    id: 'gemini-clone',
    num: '06',
    title: 'Google Gemini Clone',
    category: 'Frontend',
    image: gemini,
    description: 'Gemini AI-inspired frontend with recent history, responsive UI, and interactive layout powered by the Gemini API.',
    stack: ['React', 'Gemini API', 'Tailwind CSS'],
    liveUrl: 'https://ahad-projects-100011.netlify.app/',
  },
  {
    id: 'contact-manager',
    num: '07',
    title: 'Contact Manager',
    category: 'Full Stack',
    image: contact,
    description: 'Contact manager using Firebase for real-time database management with save, update, search, and delete capabilities.',
    stack: ['React', 'Firebase'],
    liveUrl: 'https://ahad-projects-6.netlify.app/',
  },
  {
    id: 'spotify-clone',
    num: '08',
    title: 'Spotify Clone',
    category: 'Frontend',
    image: spotify,
    description: 'Spotify clone with music playback controls — forward, backward, stop, and a full song library browser.',
    stack: ['React', 'CSS'],
    liveUrl: 'https://ahad-projects-7.netlify.app/',
  },
  {
    id: 'dice-game',
    num: '09',
    title: 'Dice Game',
    category: 'Frontend',
    image: dice,
    description: 'Interactive dice game with smooth animations, score tracking, guessing mechanics, and fully responsive design.',
    stack: ['React', 'CSS'],
    liveUrl: 'https://ahad-projects-100018.netlify.app/',
  },
  {
    id: 'video-tube',
    num: '10',
    title: 'Video Tube',
    category: 'Frontend',
    image: youtube,
    description: 'YouTube-like video streaming app using YouTube API. Watch videos, search, view channel suggestions and stats.',
    stack: ['React', 'YouTube API', 'CSS'],
    liveUrl: 'https://ahad-projects-100012.netlify.app/',
  },
];

const Projects = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const sectionRef = null;

  const project = allProjects[selectedIdx];

  // Keyboard navigation
  const handleKey = useCallback((e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIdx((i) => Math.min(i + 1, allProjects.length - 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIdx((i) => Math.max(i - 1, 0));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      tabIndex={0}
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, #242933 0%, #151921 55%, #0d1015 100%)',
        position: 'relative',
        height: '100vh',
        maxHeight: '100vh',
        boxSizing: 'border-box',
        overflow: 'hidden',
        paddingTop: '16px',
        paddingBottom: '85px', // Keeps strictly above bottom floating navbar
        paddingLeft: '24px',
        paddingRight: '24px',
        display: 'flex',
        flexDirection: 'column',
        outline: 'none',
      }}
    >
      {/* Background ambient lighting */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        top: '5%',
        right: '5%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(226, 232, 240, 0.05), transparent 70%)',
        filter: 'blur(90px)',
        pointerEvents: 'none',
      }} />

      {/* ── Compact Header Bar ── */}
      <div style={{
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto 12px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '10px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="section-label" style={{ marginBottom: 0 }}>Featured Work</span>
          <h2
            className="silver-text-gradient"
            style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)', fontWeight: 800, margin: 0 }}
          >
            Project Explorer
          </h2>
        </div>

        {/* Counter & Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'var(--font-mono, monospace)' }}>
            <span style={{ color: '#ffffff' }}>{String(selectedIdx + 1).padStart(2, '0')}</span>
            {' / '}
            {String(allProjects.length).padStart(2, '0')}
          </span>

          <div style={{ display: 'flex', gap: '4px' }}>
            <button
              onClick={() => setSelectedIdx((i) => Math.max(i - 1, 0))}
              disabled={selectedIdx === 0}
              style={{
                width: 28, height: 28, borderRadius: 8,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: selectedIdx === 0 ? '#475569' : '#ffffff',
                cursor: selectedIdx === 0 ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.75rem',
              }}
              aria-label="Previous project"
            >
              <FaChevronUp />
            </button>
            <button
              onClick={() => setSelectedIdx((i) => Math.min(i + 1, allProjects.length - 1))}
              disabled={selectedIdx === allProjects.length - 1}
              style={{
                width: 28, height: 28, borderRadius: 8,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: selectedIdx === allProjects.length - 1 ? '#475569' : '#ffffff',
                cursor: selectedIdx === allProjects.length - 1 ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.75rem',
              }}
              aria-label="Next project"
            >
              <FaChevronDown />
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Split View ── */}
      <div style={{
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        flex: 1,
        display: 'flex',
        gap: '24px',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 2,
      }}
        className="projects-split-container"
      >
        {/* LEFT: Interactive Project List (36%) */}
        <div style={{
          width: '36%',
          height: '100%',
          overflowY: 'auto',
          paddingRight: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
        }}
          className="custom-scrollbar projects-left-list"
        >
          {allProjects.map((p, idx) => {
            const isActive = selectedIdx === idx;
            return (
              <div
                key={p.id}
                onMouseEnter={() => setSelectedIdx(idx)}
                onClick={() => setSelectedIdx(idx)}
                style={{
                  padding: '12px 16px',
                  borderRadius: '14px',
                  background: isActive ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                  border: isActive ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.04)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                {/* Active Bar Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeProjBar"
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '15%',
                      bottom: '15%',
                      width: 3.5,
                      borderRadius: '4px',
                      background: 'linear-gradient(180deg, #ffffff 0%, #94a3b8 100%)',
                      boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                    }}
                  />
                )}

                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono, monospace)',
                  color: isActive ? '#ffffff' : '#64748b',
                  width: '24px',
                }}>
                  {p.num}
                </span>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: isActive ? '0.95rem' : '0.88rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#ffffff' : '#94a3b8',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    transition: 'all 0.2s ease',
                  }}>
                    {p.title}
                  </div>
                  <div style={{
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    color: isActive ? '#cbd5e1' : '#475569',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginTop: '2px',
                  }}>
                    {p.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT: Large Image Showcase & Details (64%) */}
        <div style={{
          width: '64%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          overflowY: 'auto',
          paddingRight: '6px',
        }}
          className="custom-scrollbar projects-right-showcase"
        >
          {/* Header row with Title & Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {project.category}
              </span>
              <h3 style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                {project.title}
              </h3>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn-primary"
                  style={{
                    padding: '8px 18px',
                    fontSize: '0.8rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    textDecoration: 'none',
                  }}
                >
                  <FaExternalLinkAlt style={{ fontSize: '0.7rem' }} /> Live Demo
                </a>
              )}
              <Link
                href={`/project-details/${project.id}`}
                className="hero-btn-secondary"
                style={{
                  padding: '8px 18px',
                  fontSize: '0.8rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                }}
              >
                <FaInfoCircle style={{ fontSize: '0.7rem' }} /> View Details
              </Link>
            </div>
          </div>

          {/* Large Browser Showcase Box */}
          <div style={{
            background: 'rgba(26, 31, 40, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.18)',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            minHeight: '260px',
            maxHeight: '340px',
          }}>
            {/* Top Browser Bar */}
            <div style={{
              padding: '8px 14px',
              background: 'rgba(15, 18, 24, 0.95)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <div style={{ display: 'flex', gap: '5px' }}>
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#eab308' }} />
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#22c55e' }} />
              </div>
              <div style={{
                flex: 1,
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                padding: '3px 12px',
                fontSize: '0.7rem',
                color: '#94a3b8',
                fontFamily: 'var(--font-mono, monospace)',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}>
                {project.liveUrl}
              </div>
            </div>

            {/* Image Preview Container */}
            <div style={{ flex: 1, position: 'relative', background: '#0a0c10', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  style={{ width: '100%', height: '100%', position: 'relative' }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 60vw"
                    quality={80}
                    style={{ objectFit: 'contain', padding: '8px' }}
                    priority={selectedIdx === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {project.stack.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  padding: '4px 12px',
                  borderRadius: '100px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#cbd5e1',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Description */}
          <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#94a3b8', margin: 0 }}>
            {project.description}
          </p>
        </div>
      </div>

    </section>
  );
};

export default Projects;
