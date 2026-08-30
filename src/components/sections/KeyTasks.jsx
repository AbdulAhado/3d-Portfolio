'use client';

/**
 * KeyTasks.jsx — Interactive Tabs / Split Layout for Major Features Developed.
 * Features:
 * - Left Panel (34%): Slim interactive tabs list with feature names, icons, and active indicator
 * - Right Panel (66%): Focused Content Showcase with description, key highlights, and tech stack
 * - Zero visual noise, 100vh viewport locked, fits cleanly above the bottom navbar
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaRobot, FaMicrophone, FaCheckCircle, FaBrain,
  FaArrowRight, FaCode
} from 'react-icons/fa';
import { FaFileLines } from 'react-icons/fa6';

const tasks = [
  {
    id: 'synthetic-data',
    num: '01',
    title: 'AI-Powered Synthetic Data Generation',
    subtitle: 'OpenAI Personas & Demographics',
    icon: <FaRobot />,
    tagline: 'Customizable Large-Scale AI Personas Generation',
    description:
      'Engineered an advanced AI-powered synthetic data generation engine at Terapage.ai that dynamically creates diverse, scientifically distributed AI personas for user research and market simulation.',
    highlights: [
      'OpenAI API integration for intelligent persona and background creation',
      'Advanced multi-criteria selection with 7+ categories and 50+ custom attributes',
      'Precise demographic distribution algorithms (gender, age, location, occupation)',
      'Location-based distribution supporting country & city-level granularity',
      'Workspace-specific custom inclusion/exclusion criteria',
      'Multi-activity generation workflows with real-time progress updates',
    ],
    technologies: ['OpenAI API', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Complex Algorithms'],
  },
  {
    id: 'insights-publishing',
    num: '02',
    title: 'Insights Publishing System',
    subtitle: 'SEO & Research Sharing Engine',
    icon: <FaFileLines />,
    tagline: 'Public & Password-Protected Research Sharing',
    description:
      'Developed a comprehensive research insights publishing platform allowing data analysts to share research findings publicly with automated SEO indexing or privately via encrypted links.',
    highlights: [
      'Public & private publishing modes with password-protected secure access',
      'Automated SEO meta indexing controls for search engine visibility',
      'Rich interactive content editor with live markdown & HTML preview',
      'Secure shareable link generation with unique cryptographic URLs',
      'Real-time content preview and draft saving functionality',
      'One-click unpublish capabilities with confirmational safeguards',
    ],
    technologies: ['React.js', 'Material-UI', 'Node.js', 'MongoDB', 'SEO Architecture', 'REST APIs'],
  },
  {
    id: 'voice-interview',
    num: '03',
    title: 'Automated Voice Interview System',
    subtitle: 'Real-time AI Audio Dialogues',
    icon: <FaMicrophone />,
    tagline: 'Conversational Voice AI with Live Transcription',
    description:
      'Built an automated voice interview system that conducts dynamic, bidirectional conversational interviews with participants using OpenAI TTS voice synthesis and real-time speech recognition.',
    highlights: [
      'Real-time two-way voice conversations powered by AI research agents',
      'OpenAI TTS integration with 6 dynamic voice personas and accents',
      'Automatic speech recognition (ASR) with live streaming transcription',
      'Smart silence & pause detection for automatic recording and turn-taking',
      'Live conversation transcripts with multi-speaker identification',
      'Session resilience, offline audio buffering, and instant audio playback',
    ],
    technologies: ['WebRTC', 'OpenAI TTS / Whisper', 'Web Audio API', 'React.js', 'Node.js', 'Socket.io'],
  },
];

const KeyTasks = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeTask = tasks[activeIdx];

  return (
    <section
      id="features"
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
          left: '5%',
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
          <span className="section-label" style={{ marginBottom: 0 }}>Featured Work</span>
          <h2
            className="silver-text-gradient"
            style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)', fontWeight: 800, margin: 0 }}
          >
            Major Features Developed
          </h2>
        </div>

        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94a3b8', fontFamily: 'var(--font-mono, monospace)' }}>
          <span style={{ color: '#ffffff' }}>0{activeIdx + 1}</span> / 0{tasks.length}
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
        className="tasks-split-container"
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
          className="custom-scrollbar tasks-left-list"
        >
          {tasks.map((t, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={t.id}
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
                    layoutId="activeTaskBar"
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

                {/* Feature Icon Capsule */}
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
                  {t.icon}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: isActive ? '0.96rem' : '0.88rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? '#ffffff' : '#94a3b8',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {t.title}
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: isActive ? '#e2e8f0' : '#64748b',
                      marginTop: '2px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {t.subtitle}
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
          className="tasks-right-panel"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTask.id}
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
                  alignItems: 'center',
                  gap: '14px',
                  paddingBottom: '14px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
                    color: '#0f172a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0,
                    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.15)',
                  }}
                >
                  {activeTask.icon}
                </div>

                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Terapage.ai Core System
                  </span>
                  <h3 style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)', fontWeight: 800, color: '#ffffff', margin: '2px 0 0 0' }}>
                    {activeTask.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#94a3b8', margin: '14px 0 16px 0' }}>
                {activeTask.description}
              </p>

              {/* Key Highlights */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
                  <FaBrain style={{ color: '#cbd5e1', fontSize: '0.72rem' }} />
                  Key System Highlights & Capabilities
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '8px',
                  }}
                  className="tasks-resp-grid"
                >
                  {activeTask.highlights.map((item, i) => (
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
                  <FaCode style={{ fontSize: '0.7rem' }} /> Architecture & Tech Stack
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {activeTask.technologies.map((t) => (
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

export default KeyTasks;
