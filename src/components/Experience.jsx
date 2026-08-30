import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaBuilding, FaCode, FaCheckCircle } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import "./style.css";

const Experience = () => {
  const responsibilities = [
    "Developed AI-powered synthetic data generation system with OpenAI integration",
    "Built automated voice interview system with real-time transcription",
    "Implemented insights publishing feature with SEO optimization",
    "Created complex demographic distribution algorithms",
    "Designed and developed responsive UI components with Material-UI",
    "Optimized database queries and API performance",
    "Collaborated with cross-functional teams on feature planning",
    "Maintained code quality and implemented best practices",
  ];

  const technologies = [
    "React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API",
    "WebRTC", "Material-UI", "Tailwind CSS", "Socket.io",
    "JWT Authentication", "RESTful APIs", "Git",
  ];

  return (
    <section id="experience" className="py-20 bg-[var(--background)] scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text"
      >
        Professional Experience
      </motion.h2>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
          className="card max-w-8xl mx-auto border-2 border-[var(--primary)] bg-gradient-to-br from-[var(--glass-bg)] to-[var(--background)] shadow-xl"
        >
          {/* Company Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 pb-6 border-b border-[var(--primary)] border-opacity-30">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center shadow-lg">
                <FaBuilding className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)]">Full Stack Developer</h3>
                <p className="text-lg md:text-xl text-[var(--secondary)] font-semibold">Terapage.ai</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm md:text-base text-[var(--text)] opacity-80">
              <div className="flex items-center gap-2">
                <FaCalendarDays className="text-[var(--highlight)]" />
                <span>2024 - Present</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[var(--highlight)]" />
                <span>Remote</span>
              </div>
            </div>
          </div>

          {/* Company Description */}
          <div className="mb-6">
            <p className="text-[var(--text)] text-base md:text-lg leading-relaxed mb-4">
              Working as a <span className="font-bold text-[var(--secondary)]">Full Stack Developer</span> at
              <span className="font-bold text-[var(--primary)]"> Terapage.ai</span>, a cutting-edge research platform
              that enables researchers to conduct studies, gather insights, and analyze data through AI-powered tools.
            </p>
            <p className="text-[var(--text)] text-base md:text-lg leading-relaxed opacity-90">
              I'm responsible for developing and maintaining complex features including AI-driven synthetic data generation,
              automated voice interview systems, and insights publishing capabilities. The platform serves researchers
              worldwide, helping them conduct more efficient and scalable research studies.
            </p>
          </div>

          {/* Key Responsibilities */}
          <div className="mb-6">
            <h4 className="text-lg md:text-xl font-bold text-[var(--primary)] mb-4 flex items-center gap-2">
              <FaBriefcase className="text-[var(--highlight)]" />
              Key Responsibilities
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {responsibilities.map((responsibility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  // Capped stagger: max 0.25s delay for last item
                  transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.25) }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[var(--glass-bg)] border border-[var(--primary)] border-opacity-20 hover:border-opacity-40 transition-colors duration-200"
                >
                  <FaCheckCircle className="text-[var(--highlight)] mt-0.5 flex-shrink-0 text-sm" />
                  <p className="text-[var(--text)] text-sm md:text-base leading-relaxed">{responsibility}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-lg md:text-xl font-bold text-[var(--primary)] mb-4 flex items-center gap-2">
              <FaCode className="text-[var(--highlight)]" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: Math.min(index * 0.03, 0.2) }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold text-xs md:text-sm shadow-md"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
