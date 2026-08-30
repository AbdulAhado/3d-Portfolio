'use client';

/**
 * Skills.jsx — Interactive Tech Grid (Official Logos + Glowing Hover Badges).
 * Optimized to fit 100% in viewport on desktop without cutting off bottom tiles,
 * and responsive scrollable stack on mobile.
 */
import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaGithub, FaLock, FaServer
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiTypescript,
  SiPython, SiRedis, SiGraphql, SiFirebase, SiSocketdotio, SiVercel, SiNetlify, SiRender,
  SiFramer, SiRedux, SiPostman
} from 'react-icons/si';

const categories = [
  {
    name: 'Frontend',
    dotColor: '#38bdf8',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'Redux', icon: <SiRedux /> },
      { name: 'Framer Motion', icon: <SiFramer /> },
    ],
  },
  {
    name: 'Backend',
    dotColor: '#38bdf8',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'Socket.io', icon: <SiSocketdotio /> },
      { name: 'REST APIs', icon: <FaServer /> },
      { name: 'GraphQL', icon: <SiGraphql /> },
      { name: 'Redis', icon: <SiRedis /> },
      { name: 'JWT Auth', icon: <FaLock /> },
    ],
  },
  {
    name: 'Tools & Cloud',
    dotColor: '#38bdf8',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'AWS', icon: <FaAws /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Netlify', icon: <SiNetlify /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Render', icon: <SiRender /> },
      { name: 'Postman', icon: <SiPostman /> },
    ],
  },
];

const SkillTile = ({ skill }) => {
  return (
    <div
      className="tech-grid-tile"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
        padding: '8px 4px',
        borderRadius: '12px',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.07)',
        cursor: 'pointer',
        position: 'relative',
        userSelect: 'none',
        transition: 'transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      <div className="tile-icon" style={{ fontSize: 'clamp(1.3rem, 2.2vh, 1.65rem)', color: '#ffffff', transition: 'color 0.2s ease, filter 0.2s ease' }}>
        {skill.icon}
      </div>
      <span
        style={{
          fontSize: '0.7rem',
          fontWeight: 600,
          color: '#cbd5e1',
          textAlign: 'center',
          letterSpacing: '0.01em',
          lineHeight: 1.15,
          maxWidth: '92%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {skill.name}
      </span>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, #242933 0%, #151921 55%, #0d1015 100%)',
        position: 'relative',
        height: '100vh',
        maxHeight: '100vh',
        boxSizing: 'border-box',
        overflow: 'hidden',
        paddingTop: '8px',
        paddingBottom: '85px', // Space for bottom floating navbar
        paddingLeft: '20px',
        paddingRight: '20px',
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
          right: '10%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.06), transparent 70%)',
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
          background: 'radial-gradient(circle, rgba(226, 232, 240, 0.04), transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: '1240px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2px' }}>
          <span className="section-label" style={{ marginBottom: '2px', fontSize: '0.72rem' }}>— WHAT I KNOW —</span>
        </div>
        <h2
          className="silver-text-gradient"
          style={{
            textAlign: 'center',
            fontSize: 'clamp(1.4rem, 2.2vw, 1.95rem)',
            fontWeight: 800,
            marginBottom: '12px',
          }}
        >
          Skills & Technologies
        </h2>

        {/* 3 Categories Grid */}
        <div
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '14px',
          }}
          className="skills-categories-grid"
        >
          {categories.map((cat) => (
            <div
              key={cat.name}
              style={{
                background: 'rgba(22, 27, 36, 0.78)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '20px',
                padding: '14px 16px',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.16)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              {/* Category Header with glowing cyan dot */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '2px' }}>
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: cat.dotColor,
                    boxShadow: `0 0 10px ${cat.dotColor}`,
                  }}
                />
                <h3
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#e2e8f0',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    margin: 0,
                  }}
                >
                  {cat.name}
                </h3>
              </div>

              {/* 3x3 Tiles Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '7px',
                }}
              >
                {cat.skills.map((skill) => (
                  <SkillTile key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;
