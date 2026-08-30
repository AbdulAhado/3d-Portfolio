import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] shadow-2xl flex items-center justify-center text-white text-xl hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300 border-2 border-[var(--primary)]"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        {theme === 'dark' ? <FaMoon /> : <FaSun />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;






