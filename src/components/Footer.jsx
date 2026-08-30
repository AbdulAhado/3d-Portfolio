import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode, FaRocket } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-gradient-to-b from-[var(--background)] to-[var(--glass-bg)] border-t-2 border-[var(--primary)] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[var(--primary)] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[var(--secondary)] rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Animated Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--highlight)] animate-gradient-move" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl font-bold mb-3 gradient-text flex items-center justify-center md:justify-start gap-2">
                <FaCode className="text-[var(--primary)]" />
                Abdul Ahad Saeed
              </h3>
              <p className="text-[var(--text)] opacity-70 text-sm leading-relaxed mb-4">
                Full-stack developer passionate about creating beautiful and functional web applications. 
                Specializing in React, Node.js, and modern web technologies.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-[var(--secondary)]">
                <span>Crafted with</span>
                <FaHeart className="text-red-500 animate-pulse" />
                <span>and</span>
                <FaRocket className="text-[var(--highlight)]" />
              </div>
            </motion.div>

            {/* Contact & Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <h3 className="text-lg font-bold mb-4 text-[var(--primary)]">Get In Touch</h3>
              <div className="space-y-2 mb-4">
                <p className="text-[var(--text)] opacity-70 text-sm">
                  <a href="mailto:ahadrana0125@gmail.com" className="hover:text-[var(--primary)] transition-colors">
                    ahadrana0125@gmail.com
                  </a>
                </p>
                <p className="text-[var(--text)] opacity-70 text-sm">
                  <a href="tel:+923297374500" className="hover:text-[var(--primary)] transition-colors">
                    +92 329 7374500
                  </a>
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--glass-bg)] border border-[var(--primary)] border-opacity-30">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[var(--text)] text-sm font-medium">Available for Freelance</span>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent mb-6"
          />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-[var(--text)] opacity-70 text-sm font-medium">
              &copy; {currentYear} Abdul Ahad Saeed. All rights reserved.
            </p>
          </motion.div>

          {/* Back to Top Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-6"
          >
            <motion.a
              href="#home"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              Back to Top
            </motion.a>
          </motion.div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;