'use client';

/**
 * About.jsx — Styled exactly like the user's reference.
 * Features:
 * - Standing developer character on the left (using `about1.png`)
 * - Overlapping light silver-grey card on the right
 * - Clean typography and "Learn More" button
 */
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
const switchSection = (section) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('switchSection', { detail: section }));
  }
};
import aboutImg from '../../assets/about1.png';

const About = () => {
  return (
    <section
      id="about"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, #1e222a 0%, #12151b 60%, #0a0c10 100%)',
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
        maxHeight: '100vh',
        boxSizing: 'border-box',
        paddingTop: '2.5rem',
        paddingBottom: '85px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Ambient glowing background orbs */}
      <div
        className="orb"
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          top: '10%',
          left: '-10%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(226, 232, 240, 0.05), transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="orb"
        style={{
          position: 'absolute',
          width: '450px',
          height: '450px',
          bottom: '10%',
          right: '-10%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(148, 163, 184, 0.05), transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="section-container"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1050px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            position: 'relative',
          }}
          className="about-wrapper-flex"
        >
          {/* Left Side: Standing Developer Character */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{
              position: 'relative',
              zIndex: 3,
              marginRight: '-40px', // Creates the signature overlapping effect
              flexShrink: 0,
            }}
            className="about-character-container"
          >
            <Image
              src={aboutImg}
              alt="Abdul Ahad Saeed – Standing Character Illustration"
              quality={80}
              sizes="(max-width: 768px) 320px, 380px"
              style={{
                height: '380px',
                width: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.5))',
              }}
            />
          </motion.div>

          {/* Right Side: Clean Silver-Grey Card */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{
              background: '#e9ecef', // Match the silver-grey card color in reference
              border: '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '20px',
              padding: '42px 42px 42px 70px', // Extra left padding to handle the overlap
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
              width: '100%',
              maxWidth: '780px',
              zIndex: 2,
            }}
            className="about-card-container"
          >
            <h3
              style={{
                fontSize: 'clamp(1.8rem, 2.8vw, 2.2rem)',
                fontWeight: 800,
                color: '#0f172a',
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              About Me
            </h3>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#334155',
                marginBottom: '1.75rem',
                fontWeight: 500,
              }}
            >
              I'm a passionate developer who enjoys building modern web applications using React and clean UI designs. I focus on writing simple, efficient code and creating user-friendly experiences.
            </p>

            <button
              onClick={() => switchSection('skills')}
              style={{
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '10px',
                padding: '10px 24px',
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#0f172a',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
              }}
              className="about-learn-more-btn"
              aria-label="Learn More about skills"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default About;
