'use client';

/**
 * Contact.jsx — Direct Connect Hub (No Forms, Pure Interactive Glassmorphism Cards).
 * Features:
 * - 4 Interactive Direct Channel Cards (Upwork, LinkedIn, Email with 1-Click Copy, GitHub/WhatsApp)
 * - Glowing glassmorphism hover auras matching the Silver-Grey theme
 * - 100% viewport locked (100vh), fits cleanly above the bottom navbar
 * - No page scrolling required
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaLinkedin, FaEnvelope, FaGithub, FaWhatsapp,
  FaCheck, FaCopy, FaStar, FaExternalLinkAlt
} from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ahadrana0125@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
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
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Ambient background glow orbs */}
      <div
        style={{
          position: 'absolute',
          width: '550px',
          height: '550px',
          top: '-10%',
          right: '15%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05), transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          bottom: '5%',
          left: '10%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05), transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4px' }}>
          <span className="section-label" style={{ marginBottom: '4px' }}>— GET IN TOUCH —</span>
        </div>
        <h2
          className="silver-text-gradient"
          style={{
            textAlign: 'center',
            fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
            fontWeight: 800,
            marginBottom: '6px',
          }}
        >
          Direct Connect Hub
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: '#94a3b8',
            maxWidth: '560px',
            margin: '0 auto 20px auto',
            fontSize: '0.88rem',
            lineHeight: 1.5,
          }}
        >
          Choose your preferred direct communication channel for collaborations, freelance contracts, or engineering discussions.
        </p>

        {/* 4 Direct Connect Cards Grid */}
        <div
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '18px',
          }}
          className="connect-cards-grid"
        >
          {/* ── CARD 1: UPWORK (Top Rated) ── */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="connect-hub-card upwork-card"
            style={{
              background: 'rgba(22, 27, 36, 0.78)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '22px',
              padding: '22px 24px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.16)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Shine Bar */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #10b981, transparent)' }} />

            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#10b981', fontSize: '1.4rem',
                  boxShadow: '0 0 15px rgba(16, 185, 129, 0.2)',
                }}>
                  <SiUpwork />
                </div>

                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  padding: '4px 10px', borderRadius: '100px',
                  background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)',
                  color: '#10b981', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.04em',
                }}>
                  <FaStar style={{ fontSize: '0.68rem' }} /> TOP RATED
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', margin: '0 0 6px 0' }}>
                Hire Me on Upwork
              </h3>
              <p style={{ fontSize: '0.82rem', lineHeight: 1.55, color: '#94a3b8', margin: '0 0 14px 0' }}>
                Available for full-stack MERN development, Next.js applications, AI integrations, and responsive frontend systems.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                Available for Hire
              </span>

              <a
                href="https://www.upwork.com/freelancers/~015b2fd60746978b56"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '7px 16px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#ffffff', fontSize: '0.78rem', fontWeight: 700,
                  textDecoration: 'none', transition: 'all 0.2s ease',
                  boxShadow: '0 4px 15px rgba(16, 185, 129, 0.25)',
                }}
                className="upwork-action-btn"
              >
                Hire on Upwork <FaExternalLinkAlt style={{ fontSize: '0.65rem' }} />
              </a>
            </div>
          </motion.div>

          {/* ── CARD 2: LINKEDIN ── */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="connect-hub-card linkedin-card"
            style={{
              background: 'rgba(22, 27, 36, 0.78)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '22px',
              padding: '22px 24px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.16)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Shine Bar */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #0ea5e9, transparent)' }} />

            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'rgba(14, 165, 233, 0.12)',
                  border: '1px solid rgba(14, 165, 233, 0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#0ea5e9', fontSize: '1.4rem',
                  boxShadow: '0 0 15px rgba(14, 165, 233, 0.2)',
                }}>
                  <FaLinkedin />
                </div>

                <span style={{
                  padding: '4px 10px', borderRadius: '100px',
                  background: 'rgba(14, 165, 233, 0.1)', border: '1px solid rgba(14, 165, 233, 0.25)',
                  color: '#38bdf8', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.04em',
                }}>
                  NETWORK
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', margin: '0 0 6px 0' }}>
                Connect Professionally
              </h3>
              <p style={{ fontSize: '0.82rem', lineHeight: 1.55, color: '#94a3b8', margin: '0 0 14px 0' }}>
                Connect on LinkedIn for engineering discussions, full-time opportunities, or project collaborations.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <span style={{ fontSize: '0.75rem', color: '#cbd5e1', fontWeight: 600 }}>
                Abdul Ahad Saeed
              </span>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '7px 16px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                  color: '#ffffff', fontSize: '0.78rem', fontWeight: 700,
                  textDecoration: 'none', transition: 'all 0.2s ease',
                  boxShadow: '0 4px 15px rgba(14, 165, 233, 0.25)',
                }}
                className="linkedin-action-btn"
              >
                View Profile <FaExternalLinkAlt style={{ fontSize: '0.65rem' }} />
              </a>
            </div>
          </motion.div>

          {/* ── CARD 3: EMAIL (1-Click Copy + Direct Compose) ── */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="connect-hub-card email-card"
            style={{
              background: 'rgba(22, 27, 36, 0.78)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '22px',
              padding: '22px 24px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.16)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Shine Bar */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #a855f7, transparent)' }} />

            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'rgba(168, 85, 247, 0.12)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#c084fc', fontSize: '1.4rem',
                  boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)',
                }}>
                  <FaEnvelope />
                </div>

                <span style={{
                  padding: '4px 10px', borderRadius: '100px',
                  background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.25)',
                  color: '#c084fc', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.04em',
                }}>
                  DIRECT INBOX
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', margin: '0 0 6px 0' }}>
                Direct Email Inquiry
              </h3>
              <p style={{ fontSize: '0.82rem', lineHeight: 1.55, color: '#94a3b8', margin: '0 0 14px 0' }}>
                For detailed project briefs, architectural discussions, or consulting inquiries.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', flexWrap: 'wrap' }}>
              <button
                onClick={handleCopyEmail}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '7px 14px', borderRadius: '10px',
                  background: copied ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                  border: copied ? '1px solid rgba(16, 185, 129, 0.5)' : '1px solid rgba(255, 255, 255, 0.12)',
                  color: copied ? '#10b981' : '#cbd5e1', fontSize: '0.78rem', fontWeight: 600,
                  cursor: 'pointer', transition: 'all 0.2s ease',
                }}
              >
                {copied ? <><FaCheck /> Copied!</> : <><FaCopy /> Copy Email</>}
              </button>

              <a
                href="mailto:ahadrana0125@gmail.com"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '7px 16px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
                  color: '#0f172a', fontSize: '0.78rem', fontWeight: 700,
                  textDecoration: 'none', transition: 'all 0.2s ease',
                  boxShadow: '0 4px 15px rgba(255, 255, 255, 0.12)',
                }}
                className="email-action-btn"
              >
                Send Email <FaExternalLinkAlt style={{ fontSize: '0.65rem' }} />
              </a>
            </div>
          </motion.div>

          {/* ── CARD 4: GITHUB & WHATSAPP / DIRECT CHAT ── */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="connect-hub-card code-card"
            style={{
              background: 'rgba(22, 27, 36, 0.78)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '22px',
              padding: '22px 24px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.16)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Shine Bar */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #64748b, transparent)' }} />

            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#ffffff', fontSize: '1.4rem',
                    boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)',
                  }}>
                    <FaGithub />
                  </div>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: 'rgba(34, 197, 94, 0.12)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#22c55e', fontSize: '1.4rem',
                    boxShadow: '0 0 15px rgba(34, 197, 94, 0.2)',
                  }}>
                    <FaWhatsapp />
                  </div>
                </div>

                <span style={{
                  padding: '4px 10px', borderRadius: '100px',
                  background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#e2e8f0', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.04em',
                }}>
                  CODE & CHAT
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', margin: '0 0 6px 0' }}>
                GitHub & WhatsApp
              </h3>
              <p style={{ fontSize: '0.82rem', lineHeight: 1.55, color: '#94a3b8', margin: '0 0 14px 0' }}>
                Explore open-source repositories or connect on WhatsApp for quick messages and urgent consultations.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', flexWrap: 'wrap' }}>
              <a
                href="https://github.com/ahadsaeed"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '7px 14px', borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff', fontSize: '0.78rem', fontWeight: 600,
                  textDecoration: 'none', transition: 'all 0.2s ease',
                }}
                className="github-action-btn"
              >
                <FaGithub /> GitHub Repos
              </a>

              <a
                href="https://wa.me/923297374500"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '7px 16px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  color: '#ffffff', fontSize: '0.78rem', fontWeight: 700,
                  textDecoration: 'none', transition: 'all 0.2s ease',
                  boxShadow: '0 4px 15px rgba(34, 197, 94, 0.25)',
                }}
                className="whatsapp-action-btn"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
