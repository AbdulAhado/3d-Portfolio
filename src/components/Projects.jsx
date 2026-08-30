'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaExternalLinkAlt, FaInfoCircle, FaCode, FaLaptopCode, FaPalette, FaServer, FaRocket } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import "./style.css";
import youtube from '../assets/Y_V3.jpg';
import gemini from '../assets/Gemini.png';
import chat from '../assets/chat-1.png';
import contact from '../assets/contact-2.png';
import doctor from '../assets/doctor.png';
import spotify from '../assets/spotify-3.png';
import dice from '../assets/dice.png';
import notes from '../assets/notes.png';
import careerHero from '../assets/careeros/hero.png';
import ecomHero from '../assets/Ecomhut/hero.jpg';

const fullStackProjects = [
  {
    title: "CareerOS — AI Career Suite",
    image: careerHero,
    description: "An enterprise-grade, recruiter-focused AI Career Co-Pilot engineered to optimize developer resumes, GitHub profiles, portfolios, and LinkedIn personal branding for maximum interview conversion.",
    link: "https://careeros.app",
    id: "careeros",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "OpenRouter AI", "MongoDB"],
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    category: "Full Stack",
    features: ["AI Resume Audit", "ATS Simulator", "GitHub & Portfolio Optimizer", "Mock Interview Coach"],
  },
  {
    title: "EcomHutt — E-Commerce Platform",
    image: ecomHero,
    description: "A production-ready, full-stack modern e-commerce platform with customer storefront, admin dashboard, PayPal checkout, Cloudinary media handling, and real-time order tracking.",
    link: "https://github.com/ahadsaeed",
    id: "ecomhutt",
    stack: ["Next.js", "React 19", "Node.js", "Express", "MongoDB", "PayPal SDK"],
    gradient: "from-emerald-500 to-teal-500",
    category: "Full Stack",
    features: ["Storefront & Catalog", "PayPal Checkout", "Admin CMS & Analytics", "Order Tracking"],
  },
  {
    title: "Doctor Appointment Web App",
    image: doctor,
    description: "Built a full-stack doctor appointment system with user, doctor, and admin roles. Features include secure authentication, appointment booking/cancellation, profile management, and admin-controlled doctor verification.",
    link: "https://ahad-mern-projects-1001816.netlify.app/",
    id: "doctor",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    gradient: "from-blue-500 to-cyan-500",
    category: "Full Stack",
    features: ["User Authentication", "Role-Based Access", "Admin Dashboard", "Real-time Updates"],
  },
  {
    title: "Chat App",
    image: chat,
    description: "A full-stack real-time chat application with features like user authentication (login/signup), message seen status, user bio, last seen indicator, and more",
    link: "https://ahad-projects-100014.netlify.app/",
    id: "chat-app",
    stack: ["React", "Firebase", "Tailwind CSS"],
    gradient: "from-purple-500 to-pink-500",
    category: "Full Stack",
    features: ["Real-time Messaging", "User Presence", "Message Status", "User Profiles"],
  },
  {
    title: "Notes Web App",
    image: notes,
    description: "CRUD-based notes manager with user auth, search functionality (by name/content), and MongoDB Atlas integration",
    link: "https://ahad-projects-6.netlify.app/",
    id: "notes",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    gradient: "from-green-500 to-emerald-500",
    category: "Full Stack",
    features: ["CRUD Operations", "Search Functionality", "User Authentication", "Cloud Storage"],
  },
  {
    title: "Contact Manager",
    image: contact,
    description: "A contact manager web app using Firebase for real-time database management. You can save, update, and delete contact information.",
    link: "https://ahad-projects-6.netlify.app/",
    id: "contact-manager",
    stack: ["React", "Firebase", "Tailwind CSS"],
    gradient: "from-orange-500 to-red-500",
    category: "Full Stack",
    features: ["Real-time Database", "CRUD Operations", "Firebase Integration", "Responsive Design"],
  },
];

const frontendProjects = [
  {
    title: "Google Gemini Clone",
    image: gemini,
    description: "Gemini AI-inspired frontend with recent history, responsive UI, and interactive layout.",
    link: "https://ahad-projects-100011.netlify.app/",
    id: "gemini-clone",
    stack: ["React", "API", "Tailwind CSS"],
    gradient: "from-indigo-500 to-purple-500",
    category: "Frontend",
    features: ["AI Interface", "Chat History", "Responsive Design", "API Integration"],
  },
  {
    title: "Spotify Clone",
    image: spotify,
    description: "A Spotify clone frontend project using React JS. Users can hear songs and control music playback with forward, backward, and stop functions.",
    link: "https://ahad-projects-7.netlify.app/",
    id: "spotify-clone",
    stack: ["React", "API", "CSS"],
    gradient: "from-green-500 to-teal-500",
    category: "Frontend",
    features: ["Music Player", "Playback Controls", "Song Library", "Responsive UI"],
  },
  {
    title: "Dice Game",
    image: dice,
    description: "An interactive dice game made with React.js with smooth animations and fully responsive design",
    link: "https://ahad-projects-100018.netlify.app/",
    id: "dice-game",
    stack: ["React", "CSS"],
    gradient: "from-yellow-500 to-orange-500",
    category: "Frontend",
    features: ["Interactive Gameplay", "Animations", "Score Tracking", "Responsive Design"],
  },
  {
    title: "Video Tube",
    image: youtube,
    description: "I have made this using React JS and API. Users can watch videos, search for new videos, view suggestions, like count, subscribers count, etc.",
    link: "https://ahad-projects-100012.netlify.app/",
    id: "video-tube",
    stack: ["React", "API", "CSS"],
    gradient: "from-red-500 to-pink-500",
    category: "Frontend",
    features: ["Video Streaming", "Search Functionality", "Suggestions", "Video Stats"],
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      // Capped stagger: max 300ms for any card
      transition={{ duration: 0.45, delay: Math.min(index * 0.08, 0.3), ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="card border-2 border-[var(--primary)] bg-gradient-to-br from-[var(--glass-bg)] to-[var(--background)] shadow-xl hover:shadow-2xl h-full flex flex-col overflow-hidden">
        {/* Project Image */}
        <div className="relative w-full h-52 overflow-hidden bg-[var(--background)] rounded-t-xl">
          <motion.div
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src={project.image?.src || project.image}
              alt={project.title}
              className="w-full h-full object-contain p-2"
              loading="lazy"
            />
          </motion.div>

          {/* Overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90 flex items-center justify-center`}
              >
                <div className="text-center text-white p-4">
                  <FaRocket className="text-4xl mx-auto mb-2" />
                  <p className="text-base font-semibold">View Project</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Category Badge */}
          <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-xs font-bold shadow-lg flex items-center gap-1.5`}>
            {project.category === "Full Stack" ? <FaServer className="text-xs" /> : <FaPalette className="text-xs" />}
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-[var(--primary)] mb-3 group-hover:text-[var(--secondary)] transition-colors duration-200 leading-tight">
            {project.title}
          </h3>

          {/* Tech Stack — static badges, no per-badge whileInView */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className={`px-2.5 py-1 text-xs rounded-lg bg-gradient-to-r ${project.gradient} text-white font-semibold shadow-md`}
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-[var(--text)] opacity-80 mb-3 flex-1 leading-relaxed text-sm md:text-base line-clamp-3">
            {project.description}
          </p>

          {/* Features */}
          <div className="mb-3 pb-3 border-b border-[var(--primary)] border-opacity-20">
            <h4 className="text-xs md:text-sm font-bold text-[var(--secondary)] mb-2 flex items-center gap-2">
              <FaCode className="text-[var(--highlight)] text-xs" />
              Key Features
            </h4>
            <div className="grid grid-cols-2 gap-1.5">
              {project.features.slice(0, 4).map((feature, idx) => (
                <div key={idx} className="flex items-start gap-1.5">
                  <span className="text-[var(--highlight)] text-xs mt-0.5">▪</span>
                  <span className="text-[var(--text)] text-xs opacity-70 leading-tight">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-auto">
            <Link
              href={`/project-details/${project.id}`}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-sm font-semibold hover:shadow-lg transition-shadow duration-200 hover:scale-105 transition-transform"
            >
              <FaInfoCircle className="text-sm" />
              <span>Details</span>
            </Link>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border-2 border-[var(--primary)] text-[var(--primary)] text-sm font-semibold hover:bg-[var(--primary)] hover:text-white transition-colors duration-200 hover:scale-105 transition-transform"
            >
              <FaExternalLinkAlt className="text-sm" />
              <span>Live</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const allProjects = [...fullStackProjects, ...frontendProjects];

  const filteredProjects = activeTab === "all"
    ? allProjects
    : activeTab === "fullstack"
    ? fullStackProjects
    : frontendProjects;

  return (
    <section id="projects" className="py-16 bg-[var(--background)] scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">My Projects</h2>
          <p className="text-lg md:text-xl text-[var(--text)] opacity-80 max-w-3xl mx-auto mb-8">
            A showcase of full-stack and frontend projects demonstrating modern web development
            skills, from real-time applications to interactive user interfaces
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {[
              { id: "all", label: `All Projects (${allProjects.length})`, icon: <FaLaptopCode /> },
              { id: "fullstack", label: `Full Stack (${fullStackProjects.length})`, icon: <FaServer /> },
              { id: "frontend", label: `Frontend (${frontendProjects.length})`, icon: <FaPalette /> },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white shadow-lg"
                    : "bg-[var(--glass-bg)] text-[var(--text)] border-2 border-[var(--primary)] border-opacity-30 hover:border-opacity-60"
                }`}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Total Projects", value: allProjects.length, icon: <FaLaptopCode /> },
            { label: "Full Stack", value: fullStackProjects.length, icon: <FaServer /> },
            { label: "Frontend", value: frontendProjects.length, icon: <FaPalette /> },
            { label: "Technologies", value: "15+", icon: <FaCode /> },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="card border-2 border-[var(--primary)] bg-gradient-to-br from-[var(--glass-bg)] to-[var(--background)] p-6 text-center"
            >
              <div className="text-4xl text-[var(--primary)] mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold text-[var(--secondary)] mb-2">{stat.value}</div>
              <div className="text-[var(--text)] opacity-70 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;