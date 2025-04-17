
import React from "react";
import { motion } from "framer-motion";
import './hero.css'
const Navbar = () => {
  return (
    <nav className="bg-black  text-yellow-300 p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-around items-center">
        {/* Name with Animation */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl font-bold gradient-text"
        >
          Portfolio
        </motion.h1>

        {/* Navbar Links with Animations */}
        <ul className="flex space-x-6">
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#about" className="nav-link">
              About
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
