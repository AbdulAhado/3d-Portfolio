/**
 * App.jsx — Mobile App-style Single-Screen Portfolio.
 * - One section is visible at a time (no page scrolling)
 * - Bottom floating navbar switches between sections
 * - Each section fills 100vh exactly
 */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Design system
import './styles/globals.css';

// Layout
import Navbar from './components/layout/Navbar';

// Sections
import Hero       from './components/sections/Hero';
import About      from './components/sections/About';
import Experience from './components/sections/Experience';
import KeyTasks   from './components/sections/KeyTasks';
import Skills     from './components/sections/Skills';
import Projects   from './components/sections/Projects';
import Contact    from './components/sections/Contact';

// Detail pages
import ProjectDetails from './components/ProjectDetails';

const sectionOrder = ['home', 'about', 'skills', 'projects', 'experience', 'features', 'contact'];

const sectionComponents = {
  home:       <Hero />,
  about:      <About />,
  skills:     <Skills />,
  projects:   <Projects />,
  experience: <Experience />,
  features:   <KeyTasks />,
  contact:    <Contact />,
};

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -18 },
};

function MainPage() {
  const [activeSection, setActiveSection] = useState('home');

  // Listen for section-switch events dispatched by CTAs inside sections (e.g. Hero buttons)
  useEffect(() => {
    const handler = (e) => setActiveSection(e.detail);
    window.addEventListener('switchSection', handler);
    return () => window.removeEventListener('switchSection', handler);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        background: '#0d1015',
      }}
    >
      {/* Section content — only active section shown */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
        >
          {sectionComponents[activeSection]}
        </motion.div>
      </AnimatePresence>

      {/* Bottom Navbar always on top */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}

function AppRoot() {
  return (
    <Routes>
      <Route path="/"                    element={<MainPage />} />
      <Route path="/project-details/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoot />
    </Router>
  );
}

export default App;