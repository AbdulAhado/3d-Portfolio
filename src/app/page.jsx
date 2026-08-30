'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Layout
import Navbar from '../components/layout/Navbar';

// Sections (imported eagerly into memory for instantaneous 0ms tab transitions)
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import KeyTasks from '../components/sections/KeyTasks';
import Contact from '../components/sections/Contact';

const sectionMap = {
  home: Hero,
  about: About,
  skills: Skills,
  projects: Projects,
  experience: Experience,
  features: KeyTasks,
  contact: Contact,
};

const pageVariants = {
  initial: { opacity: 0, scale: 0.99 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.99 },
};

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionSwitch = useCallback((e) => {
    if (e.detail && sectionMap[e.detail]) {
      setActiveSection(e.detail);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('switchSection', handleSectionSwitch);
    return () => window.removeEventListener('switchSection', handleSectionSwitch);
  }, [handleSectionSwitch]);

  const ActiveComponent = sectionMap[activeSection];

  return (
    <main className="fixed inset-0 overflow-hidden bg-[#0d1015] w-full h-[100dvh]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.14, ease: 'easeOut' }}
          className="absolute inset-0 overflow-hidden w-full h-full"
        >
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>

      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
    </main>
  );
}
