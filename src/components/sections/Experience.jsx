'use client';

/**
 * Experience.jsx — Interactive Tabs / Split Layout for Professional Experience.
 * Features:
 * - Left Panel (34%): Slim interactive tabs list with role, company, period, and active indicator
 * - Right Panel (66%): Focused Content Showcase with description, key responsibilities, and tech stack
 * - Zero visual noise, 100vh viewport locked, fits cleanly above the bottom navbar
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBuilding, FaCalendarAlt, FaMapMarkerAlt,
  FaCheckCircle, FaStar, FaCode, FaBriefcase, FaArrowRight
} from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const experiences = [
  {
    id: 'terapage',
    num: '01',
    role: 'Full Stack Developer',
    company: 'Terapage.ai',
    period: '2025 – 2026',
    location: 'Remote',
    type: 'Full-time',
    icon: <FaBuilding />,
    tagline: 'AI Research Platform & Voice Synthetic Data',
    description:
      'Worked at Terapage.ai — a cutting-edge AI research platform enabling researchers to conduct studies, gather deep insights, and synthesize large-scale demographic data through automated AI systems.',
    responsibilities: [
      'Developed AI-powered synthetic data generation system with OpenAI integration',
      'Built automated voice interview system with real-time audio transcription',
      'Implemented insights publishing feature with granular security and SEO controls',
      'Created complex demographic distribution algorithms (gender, age, location)',
      'Designed responsive UI components with Material-UI & Tailwind CSS',
      'Optimized MongoDB database queries and REST API endpoint latency',
    ],
    technologies: [
      'React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API',
      'WebRTC', 'Material-UI', 'Tailwind CSS', 'Socket.io', 'JWT Auth',
    ],
  },
  {
    id: 'upwork',
    num: '02',
    role: 'Freelance Full Stack Developer',
    company: 'Upwork',
    period: '2023 – Present',
    location: 'Remote',
    type: '⭐ Top Rated',
    icon: <FaStar />,
    tagline: 'Top Rated Freelancer with 10+ 5-Star Completed Contracts',
    description:
      'Top Rated freelancer on Upwork delivering high-performance MERN stack web applications and bespoke AI integrations for international clients across US, UK, and Europe.',
    responsibilities: [
      'Built custom full-stack MERN web applications tailored to client requirements',
      'Delivered 10+ end-to-end projects with 100% 5-star feedback on Upwork',
      'Implemented real-time features using WebSockets, Firebase, and Socket.io',
      'Integrated third-party APIs including Stripe payments, OpenAI, and cloud storages',
      'Wrote clean, well-documented, testable, and production-ready code',
      'Maintained consistent communication and always delivered before deadlines',
    ],
    technologies: [
      'React.js', 'Node.js', 'Express.js', 'MongoDB',
      'Firebase', 'Tailwind CSS', 'REST APIs', 'Git', 'Next.js',
    ],
  },
];

const Experience = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeExp = experiences[activeIdx];

  return (
    <section
      id="experience"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, #242933 0%, #151921 55%, #0d1015 100%)',
        position: 'relative',
        height: '100vh',
        maxHeight: '100vh',
        boxSizing: 'border-box',
        overflow: 'hidden',
        paddingTop: '16px',
        paddingBottom: '85px', // Space for bottom floating navbar
        paddingLeft: '24px',
        paddingRight: '24px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          top: '10%',
          right: '5%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(226, 232, 240, 0.05), transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Compact Header Bar ── */}
      <div
        style={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto 12px auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '10px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="section-label" style={{ marginBottom: 0 }}>Career & Roles</span>
          <h2
            className="silver-text-gradient"
            style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)', fontWeight: 800, margin: 0 }}
          >
            Professional Experience
          </h2>
        </div>

        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'var(--font-mono, monospace)' }}>
          <span style={{ color: '#ffffff' }}>0{activeIdx + 1}</span> / 0{experiences.length}
        </div>
      </div>

      {/* ── Main Split View ── */}
      <div
        style={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          flex: 1,
          display: 'flex',
          gap: '20px',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 2,
        }}
        className="experience-split-container"
      >
        {/* LEFT: Slim Vertical Tabs List (34%) */}
        <div
          style={{
            width: '34%',
            height: '100%',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            paddingRight: '6px',
          }}
          className="custom-scrollbar experience-left-list"
        >
          {experiences.map((exp, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={exp.id}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
                style={{
                  padding: '14px 18px',
                  borderRadius: '16px',
                  background: isActive ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                  border: isActive ? '1px solid rgba(255, 255, 255, 0.22)' : '1px solid rgba(255, 255, 255, 0.05)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeExpBar"
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '15%',
                      bottom: '15%',
                      width: 3.5,
                      borderRadius: '4px',
                      background: 'linear-gradient(180deg, #ffffff 0%, #94a3b8 100%)',
                      boxShadow: '0 0 10px rgba(255, 255, 255, 0.6)',
                    }}
                  />
                )}

                {/* Company Icon Capsule */}
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: isActive ? 'linear-gradient(135deg, #ffffff, #cbd5e1)' : 'rgba(255, 255, 255, 0.05)',
                    color: isActive ? '#0f172a' : '#cbd5e1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    flexShrink: 0,
                    transition: 'all 0.25s ease',
                  }}
                >
                  {exp.icon}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: isActive ? '0.98rem' : '0.9rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? '#ffffff' : '#94a3b8',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {exp.company}
                  </div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: isActive ? '#e2e8f0' : '#64748b',
                      marginTop: '2px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {exp.role}
                  </div>
                  <div
                    style={{
                      fontSize: '0.68rem',
                      color: '#64748b',
                      fontFamily: 'var(--font-mono, monospace)',
                      marginTop: '2px',
                    }}
                  >
                    {exp.period}
                  </div>
                </div>

                <FaArrowRight
                  style={{
                    fontSize: '0.75rem',
                    color: isActive ? '#ffffff' : '#475569',
                    transform: isActive ? 'translateX(2px)' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* RIGHT: Focused Content Showcase Card (66%) */}
        <div
          style={{
            width: '66%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
          className="experience-right-panel"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExp.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.16, ease: 'easeOut' }}
              style={{
                background: 'rgba(26, 31, 40, 0.85)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                borderRadius: '20px',
                padding: '24px 26px',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.18)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box',
                position: 'relative',
                overflowY: 'auto',
              }}
              className="custom-scrollbar"
            >
              {/* Top Accent Line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #ffffff, rgba(255,255,255,0.2), transparent)',
                }}
              />

              {/* Header Info */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '16px',
                  paddingBottom: '14px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {activeExp.company}
                    </span>
                    <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '100px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.12)', color: '#e2e8f0', fontWeight: 600 }}>
                      {activeExp.type}
                    </span>
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)', fontWeight: 800, color: '#ffffff', margin: '0 0 6px 0' }}>
                    {activeExp.role}
                  </h3>
                  <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', color: '#cbd5e1' }}>
                      <FaCalendarAlt style={{ color: '#94a3b8', fontSize: '0.7rem' }} /> {activeExp.period}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', color: '#cbd5e1' }}>
                      <FaMapMarkerAlt style={{ color: '#94a3b8', fontSize: '0.7rem' }} /> {activeExp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#94a3b8', margin: '14px 0 16px 0' }}>
                {activeExp.description}
              </p>

              {/* Key Responsibilities */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
                  <FaBriefcase style={{ color: '#cbd5e1', fontSize: '0.72rem' }} />
                  Key Responsibilities & Deliverables
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '8px',
                  }}
                  className="experience-resp-grid"
                >
                  {activeExp.responsibilities.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        padding: '8px 12px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                      }}
                    >
                      <FaCheckCircle style={{ color: '#cbd5e1', flexShrink: 0, marginTop: '3px', fontSize: '0.7rem' }} />
                      <span style={{ fontSize: '0.78rem', color: '#e2e8f0', lineHeight: 1.45 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  <FaCode style={{ fontSize: '0.7rem' }} /> Technologies Used
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {activeExp.technologies.map((t) => (
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
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
};

export default Experience;
