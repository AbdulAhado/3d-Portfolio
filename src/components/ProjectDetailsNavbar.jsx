'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import "./style.css";

const ProjectDetailsNavbar = ({ projectTitle }) => {
  const router = useRouter();

  return (
    <nav className="glass-navbar fixed w-full top-0 z-50" aria-label="Project Details Navigation">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-6">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          className="text-[var(--primary)] font-bold text-lg flex items-center gap-2"
          onClick={() => router.back()}
        >
          ← Back
        </motion.button>
        <span className="text-xl md:text-2xl font-bold gradient-text text-center flex-1">
          {projectTitle}
        </span>
        <span className="w-24" /> {/* Spacer for symmetry */}
      </div>
    </nav>
  );
};

export default ProjectDetailsNavbar;