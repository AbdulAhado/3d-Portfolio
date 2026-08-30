'use client';

/**
 * ProjectDetails.jsx — Split-Screen Mockup Showcase (100% Viewport Locked, Zero Scroll).
 *
 * Left Side (35% Width):
 * - Project Title, Category Tag, Short Summary
 * - Key Stats / Metrics Grid (⚡ Realtime Sync, 🔒 Role Auth, 🎨 Responsive UI, 🚀 Cloud Database)
 * - Tech Stack Badges
 * - Prominent Live Demo & GitHub Code Buttons
 *
 * Right Side (65% Width):
 * - High-end Browser / Laptop Mockup Container
 * - Top Feature Tabs (01 Landing Page, 02 Feature Two, 03 Feature Three...)
 * - Smooth image & caption transition on tab switch with zero page scroll
 */
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaArrowLeft, FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight,
  FaBolt, FaLock, FaMobileAlt, FaDatabase, FaCheckCircle
} from 'react-icons/fa';

import doctorImg from '../assets/doc-3.png';
import doctor2Img from '../assets/doctor.png';
import doctor3Img from '../assets/doc-login.png';
import doctor4Img from '../assets/doc-11.png';
import doctor5Img from '../assets/doc-8.png';
import notesImg from '../assets/notes.png';
import notes2Img from '../assets/notes2.png';
import notes3Img from '../assets/notes3.png';
import notes4Img from '../assets/notes4.png';
import chatImg from '../assets/chat-1.png';
import geminiImg from '../assets/Gemini.png';
import contactImg from '../assets/contact-2.png';
import spotifyImg from '../assets/spotify-3.png';
import diceImg from '../assets/dice.png';
import youtubeImg from '../assets/Y_V3.jpg';

import ecomHero from '../assets/Ecomhut/hero.jpg';
import ecomAdmin from '../assets/Ecomhut/admin.jpg';
import ecomInventory from '../assets/Ecomhut/inventory.jpg';
import ecomUser from '../assets/Ecomhut/user.jpg';

import careerHero from '../assets/careeros/hero.png';
import careerCoach from '../assets/careeros/coach.jpg';
import careerPortfolio from '../assets/careeros/portfolio-analyzer.png';
import careerSkillgap from '../assets/careeros/skillgap.png';

const projects = [
  {
    id: 'careeros',
    title: 'CareerOS — AI Career Intelligence Suite',
    category: 'Full Stack',
    tagline: 'Enterprise-grade AI Career Co-Pilot optimizing resumes, GitHub, and portfolios for interview conversion.',
    description: 'An enterprise-grade, recruiter-focused AI Career Co-Pilot engineered to optimize developer resumes, GitHub profiles, portfolios, and LinkedIn personal branding for maximum interview conversion. Built with Next.js 16, React 19, TypeScript, TipTap Editor, and OpenRouter AI pipelines.',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'TipTap Editor', 'OpenRouter AI', 'MongoDB', 'NextAuth'],
    liveUrl: 'https://careeros.app',
    githubUrl: 'https://github.com/ahadsaeed',
    metrics: [
      { label: 'OpenRouter AI', icon: <FaBolt />, desc: 'Multi-Model Core' },
      { label: 'ATS Simulator', icon: <FaLock />, desc: '11-D Scoring' },
      { label: 'MongoDB', icon: <FaDatabase />, desc: 'Mongoose ORM' },
      { label: 'TipTap Editor', icon: <FaMobileAlt />, desc: 'WYSIWYG Builder' },
    ],
    features: [
      {
        tab: '01 AI Resume Suite',
        title: 'AI Resume Analyzer & Executive Scoring',
        text: '11-dimensional executive resume scoring based on FAANG hiring standards with salary readiness checks and actionable quick wins.',
        image: careerHero,
      },
      {
        tab: '02 ATS Simulator',
        title: 'Enterprise ATS & Skill Gap Analyzer',
        text: 'Semantic and graph matcher simulating Workday, Lever, and Greenhouse ATS engines to detect hidden filters and missing keywords.',
        image: careerSkillgap,
      },
      {
        tab: '03 Profile Optimizer',
        title: 'GitHub & Portfolio Website Auditor',
        text: 'Live GitHub API audit, recruiter 30-second first impression tests, and STAR framework case study restructuring with one-click copy.',
        image: careerPortfolio,
      },
      {
        tab: '04 Mock Interview Coach',
        title: 'Adaptive Interview Coach & Proposal Engine',
        text: 'Dynamic difficulty scaling with recruiter secret notes, STAR method ideal answers, and client intent proposal generation.',
        image: careerCoach,
      },
    ],
  },
  {
    id: 'ecomhutt',
    title: 'EcomHutt — Full-Stack E-Commerce',
    category: 'Full Stack',
    tagline: 'Production-ready modern e-commerce platform with customer storefront and advanced admin CMS.',
    description: 'A production-ready, full-stack modern e-commerce web application featuring a high-performance customer storefront and a powerful admin dashboard. Built with Next.js App Router (React 19), Node.js/Express, and MongoDB, featuring PayPal checkout, Cloudinary media handling, OTP verification, and real-time order tracking.',
    stack: ['Next.js', 'React 19', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'PayPal SDK', 'Cloudinary'],
    liveUrl: 'https://github.com/ahadsaeed',
    githubUrl: 'https://github.com/ahadsaeed',
    metrics: [
      { label: 'PayPal SDK', icon: <FaBolt />, desc: 'Secure Checkout' },
      { label: 'JWT & OTP', icon: <FaLock />, desc: 'Auth Security' },
      { label: 'MongoDB', icon: <FaDatabase />, desc: 'Mongoose ODM' },
      { label: 'Admin CMS', icon: <FaMobileAlt />, desc: 'Realtime Control' },
    ],
    features: [
      {
        tab: '01 Storefront & Catalog',
        title: 'Dynamic Storefront & Product Filtering',
        text: 'Hero banner carousel, slug-based routing, real-time search, category filtering, high-res image galleries, customer reviews, and ratings.',
        image: ecomHero,
      },
      {
        tab: '02 Cart & Checkout',
        title: 'Stateful Cart & PayPal Gateway',
        text: 'Cart state management, persistent wishlist, multi-step address checkout with PayPal online transactions and Cash on Delivery (COD).',
        image: ecomUser,
      },
      {
        tab: '03 Admin Dashboard',
        title: 'Analytics & Order Fulfillment CMS',
        text: 'Real-time sales and revenue charts, dynamic order status management (Pending to Delivered), and dynamic hero banner CMS controls.',
        image: ecomAdmin,
      },
      {
        tab: '04 Inventory Control',
        title: 'Product CRUD & Cloudinary Media',
        text: 'Comprehensive product management with multi-image Cloudinary uploads via Multer, discount pricing, SKU tracking, and low-stock alerts.',
        image: ecomInventory,
      },
    ],
  },
  {
    id: 'doctor',
    title: 'Doctor Appointment Web App',
    category: 'Full Stack',
    tagline: 'End-to-end medical scheduling platform with 3-tier role authorization.',
    description: 'A full-stack doctor appointment booking platform featuring multi-role authentication (User, Doctor, Admin), appointment scheduling and cancellations, profile verification, and admin moderation.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Tailwind CSS'],
    liveUrl: 'https://ahad-mern-projects-1001816.netlify.app/',
    githubUrl: 'https://github.com/ahadsaeed',
    metrics: [
      { label: 'Role Auth', icon: <FaLock />, desc: '3-Tier RBAC' },
      { label: 'Realtime', icon: <FaBolt />, desc: 'Instant Updates' },
      { label: 'Cloud DB', icon: <FaDatabase />, desc: 'MongoDB Atlas' },
      { label: 'Mobile-First', icon: <FaMobileAlt />, desc: '100% Responsive' },
    ],
    features: [
      {
        tab: '01 Landing Page',
        title: 'Landing Page & Doctor Showcase',
        text: 'Users can browse top-rated doctors by medical specialty, view credentials, and book instant consultations.',
        image: doctor2Img,
      },
      {
        tab: '02 Doctor Directory',
        title: 'Specialist Directory & Filtering',
        text: 'Filter medical professionals by department, availability, and consultation fees with live booking slots.',
        image: doctorImg,
      },
      {
        tab: '03 Authentication',
        title: 'Secure JWT Authentication',
        text: 'Protected portal for patients and doctors with encrypted session storage and role-based access control.',
        image: doctor3Img,
      },
      {
        tab: '04 Profile Portal',
        title: 'Patient & Doctor Profile Manager',
        text: 'Manage appointment schedules, patient medical records, profile pictures, and upcoming visit histories.',
        image: doctor4Img,
      },
      {
        tab: '05 Admin Dashboard',
        title: 'Administrative Control Center',
        text: 'Admins verify new doctor registrations, manage active appointments, and oversee platform analytics.',
        image: doctor5Img,
      },
    ],
  },
  {
    id: 'chat-app',
    title: 'Real-time Chat App',
    category: 'Full Stack',
    tagline: 'High-speed messaging system with live status and media sharing.',
    description: 'A full-stack real-time messaging application powered by Socket.io and Firebase with instant typing indicators, unread message badges, bio customizer, and persistent chat histories.',
    stack: ['React.js', 'Firebase', 'Tailwind CSS', 'WebSockets', 'Node.js'],
    liveUrl: 'https://ahad-projects-100014.netlify.app/',
    githubUrl: 'https://github.com/ahadsaeed',
    metrics: [
      { label: 'WebSockets', icon: <FaBolt />, desc: 'Instant Chat' },
      { label: 'Presence', icon: <FaLock />, desc: 'Seen Badges' },
      { label: 'Cloud Store', icon: <FaDatabase />, desc: 'Firebase Firestore' },
      { label: 'UI Motion', icon: <FaMobileAlt />, desc: 'Framer Motion' },
    ],
    features: [
      {
        tab: '01 Auth & Onboarding',
        title: 'User Profile & Onboarding',
        text: 'Quick authentication flow with bio, avatar customization, and persistent session recovery.',
        image: chatImg,
      },
      {
        tab: '02 Live Messaging',
        title: 'Real-time Direct Messages',
        text: 'Bidirectional chat with instant message delivery, seen badges, and unread notification alerts.',
        image: chatImg,
      },
    ],
  },
  {
    id: 'notes',
    title: 'Notes Cloud Manager',
    category: 'Full Stack',
    tagline: 'Productivity notes app with keyword indexing and cloud synchronization.',
    description: 'A clean notes management web app featuring rich markdown support, cloud database synchronization, user security, and full-text instant keyword search.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://ahad-projects-6.netlify.app/',
    githubUrl: 'https://github.com/ahadsaeed',
    metrics: [
      { label: 'Full Text', icon: <FaBolt />, desc: 'Live Search' },
      { label: 'Cloud Auth', icon: <FaLock />, desc: 'User Privacy' },
      { label: 'MongoDB', icon: <FaDatabase />, desc: 'Atlas Cluster' },
      { label: 'Fast Sync', icon: <FaMobileAlt />, desc: 'Instant Save' },
    ],
    features: [
      {
        tab: '01 Notes Dashboard',
        title: 'Organized Notes Grid',
        text: 'View and organize your notes in a modern, dark-mode card layout with timestamps and quick actions.',
        image: notesImg,
      },
      {
        tab: '02 Note Editor',
        title: 'Create & Edit Notes',
        text: 'Rich note editor with real-time saving and instant database synchronization.',
        image: notes2Img,
      },
      {
        tab: '03 Cloud Sync & Auth',
        title: 'Cloud Authentication',
        text: 'Sign up to safely back up your notes across all your devices and browsers.',
        image: notes3Img,
      },
      {
        tab: '04 Live Search',
        title: 'Instant Search by Keyword',
        text: 'Find notes instantly by matching keywords in both the title and body text.',
        image: notes4Img,
      },
    ],
  },
  {
    id: 'contact-manager',
    title: 'Contact Manager System',
    category: 'Full Stack',
    tagline: 'Realtime database contact book with CRUD operations.',
    description: 'A streamlined contact management application built with Firebase real-time database, supporting instant contact creation, search filtering, inline editing, and deletion.',
    stack: ['React.js', 'Firebase', 'Tailwind CSS', 'REST API'],
    liveUrl: 'https://ahad-projects-6.netlify.app/',
    githubUrl: 'https://github.com/ahadsaeed',
    metrics: [
      { label: 'Firebase DB', icon: <FaDatabase />, desc: 'Realtime Sync' },
      { label: 'Instant Filter', icon: <FaBolt />, desc: 'Live Search' },
      { label: 'CRUD Ops', icon: <FaLock />, desc: 'Create/Edit/Del' },
      { label: 'Lightweight', icon: <FaMobileAlt />, desc: 'Zero Lag' },
    ],
    features: [
      {
        tab: '01 Contact Book',
        title: 'Contact Directory',
        text: 'Store and view phone numbers and emails in a clean, categorized contact list.',
        image: contactImg,
      },
      {
        tab: '02 Add & Edit',
        title: 'Create & Update Modal',
        text: 'Pop-up modal for quickly creating new contacts or updating existing information in real time.',
        image: contactImg,
      },
    ],
  },
  {
    id: 'gemini-clone',
    title: 'Google Gemini AI Clone',
    category: 'Frontend',
    tagline: 'AI chat interface powered by the official Gemini API.',
    description: 'An interactive frontend clone of Google Gemini AI featuring streaming message responses, formatted markdown output, prompt suggestion chips, and responsive side navigation.',
    stack: ['React.js', 'Gemini API', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://ahad-projects-100011.netlify.app/',
    githubUrl: 'https://github.com/ahadsaeed',
    metrics: [
      { label: 'Gemini API', icon: <FaBolt />, desc: 'AI LLM Core' },
      { label: 'Markdown', icon: <FaLock />, desc: 'Rich Output' },
      { label: 'History', icon: <FaDatabase />, desc: 'Recent Prompts' },
      { label: 'Fluid UI', icon: <FaMobileAlt />, desc: 'Clean Layout' },
    ],
    features: [
      {
        tab: '01 Gemini Chat',
        title: 'Gemini AI Prompt Interface',
        text: 'Ask questions, brainstorm ideas, and receive structured AI responses in real time.',
        image: geminiImg,
      },
      {
        tab: '02 Response Formatter',
        title: 'Formatted Markdown Output',
        text: 'Syntax-highlighted code snippets and clean typography formatted for effortless readability.',
        image: geminiImg,
      },
    ],
  },
  {
    id: 'spotify-clone',
    title: 'Spotify Web Player',
    category: 'Frontend',
    tagline: 'Audio streaming UI with dynamic playlist controls.',
    description: 'A responsive Spotify clone featuring full music player controls (Play/Pause, Next/Previous track, timeline scrubber), curated playlists, and a sleek dark media layout.',
    stack: ['React.js', 'CSS3', 'Web Audio API', 'JavaScript'],
    liveUrl: 'https://ahad-projects-7.netlify.app/',
    githubUrl: 'https://github.com/ahadsaeed',
    metrics: [
      { label: 'Audio API', icon: <FaBolt />, desc: 'Live Stream' },
      { label: 'Playlists', icon: <FaDatabase />, desc: 'Track Library' },
      { label: 'Controls', icon: <FaLock />, desc: 'Next/Prev/Seek' },
      { label: 'Dark UI', icon: <FaMobileAlt />, desc: 'Spotify Theme' },
    ],
    features: [
      {
        tab: '01 Player Controls',
        title: 'Interactive Music Player',
        text: 'Browse the song catalog, manage playlists, and stream audio with dedicated playback controls.',
        image: spotifyImg,
      },
    ],
  },
  {
    id: 'dice-game',
    title: 'Interactive Dice Game',
    category: 'Frontend',
    tagline: 'Interactive dice rolling game with animated score counters.',
    description: 'An interactive browser game where players choose numbers, roll 3D animated dice, and test their luck with real-time scoring rules and score reset controls.',
    stack: ['React.js', 'CSS3 Animations', 'JavaScript'],
    liveUrl: 'https://ahad-projects-100018.netlify.app/',
    githubUrl: 'https://github.com/ahadsaeed',
    metrics: [
      { label: 'Physics/Anim', icon: <FaBolt />, desc: 'Dice Roll' },
      { label: 'Scoring', icon: <FaLock />, desc: 'Live Counters' },
      { label: 'Game Rules', icon: <FaDatabase />, desc: 'Rule Modals' },
      { label: 'Responsive', icon: <FaMobileAlt />, desc: 'Touch Friendly' },
    ],
    features: [
      {
        tab: '01 Game Board',
        title: 'Dice Rolling & Score Board',
        text: 'Select your prediction, tap the dice to roll, and build up your consecutive win streak.',
        image: diceImg,
      },
    ],
  },
  {
    id: 'video-tube',
    title: 'Video Tube Platform',
    category: 'Frontend',
    tagline: 'YouTube API video player with channel stats and search.',
    description: 'A YouTube-inspired streaming client built on top of the YouTube v3 Data API with search autocomplete, sidebar categories, video player, and related video recommendation feeds.',
    stack: ['React.js', 'YouTube API', 'CSS3', 'REST API'],
    liveUrl: 'https://ahad-projects-100012.netlify.app/',
    githubUrl: 'https://github.com/ahadsaeed',
    metrics: [
      { label: 'YouTube API', icon: <FaBolt />, desc: 'v3 Data Feed' },
      { label: 'Search', icon: <FaLock />, desc: 'Live Autocomplete' },
      { label: 'Video Feed', icon: <FaDatabase />, desc: 'Related Videos' },
      { label: 'Responsive', icon: <FaMobileAlt />, desc: 'Sidebar Drawer' },
    ],
    features: [
      {
        tab: '01 Video Stream',
        title: 'Video Player & Channel Details',
        text: 'Watch high-definition videos, browse suggested recommendations, and view channel subscriber stats.',
        image: youtubeImg,
      },
    ],
  },
];

const ProjectDetails = ({ projectId }) => {
  const params = useParams();
  const id = projectId || params?.id;
  const router = useRouter();
  const initialProject = projects.find((p) => p.id === id) || projects[0];
  const [project, setProject] = useState(initialProject);
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  useEffect(() => {
    if (id) {
      const found = projects.find((p) => p.id === id);
      if (found) {
        setProject(found);
        setActiveTabIdx(0);
      }
    }
  }, [id]);

  const activeFeature = project.features[activeTabIdx] || project.features[0];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999990,
        background: 'radial-gradient(ellipse at 50% 20%, #242933 0%, #151921 55%, #0d1015 100%)',
        color: '#ffffff',
        fontFamily: 'var(--font-primary, sans-serif)',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        maxHeight: '100vh',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* ── Top Header Navigation Bar ── */}
      <header
        style={{
          minHeight: '56px',
          background: 'rgba(15, 18, 24, 0.94)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
          gap: '8px',
          zIndex: 50,
        }}
      >
        {/* Left: Back Button */}
        <button
          onClick={() => router.push('/')}
          className="hero-btn-secondary"
          style={{
            padding: '6px 14px',
            fontSize: '0.78rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            flexShrink: 0,
            whiteSpace: 'nowrap',
          }}
          aria-label="Back to portfolio"
        >
          <FaArrowLeft style={{ fontSize: '0.7rem' }} />
          <span>Back</span>
        </button>

        {/* Center: Title + Category badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            minWidth: 0,
            overflow: 'hidden',
            flex: 1,
            justifyContent: 'center',
            padding: '0 6px',
          }}
        >
          <span
            style={{
              fontSize: '0.64rem',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '100px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              color: '#cbd5e1',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              flexShrink: 0,
            }}
          >
            {project.category}
          </span>
          <span
            style={{
              fontSize: '0.84rem',
              fontWeight: 700,
              color: '#ffffff',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {project.title}
          </span>
        </div>

        {/* Right: GitHub & Live Demo Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 10px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#cbd5e1',
                fontSize: '0.74rem',
                fontWeight: 600,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
              aria-label="View GitHub Repository"
            >
              <FaGithub /> <span className="pd-btn-label">GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-primary"
              style={{
                padding: '6px 12px',
                fontSize: '0.74rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
              aria-label="Open Live Demo"
            >
              <FaExternalLinkAlt style={{ fontSize: '0.62rem' }} /> <span>Live Demo</span>
            </a>
          )}
        </div>
      </header>

      {/* ── Main Split-Screen Mockup Body (100% Height, No Scroll) ── */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          gap: '20px',
          padding: '16px 24px',
          overflow: 'hidden',
          maxWidth: '1380px',
          width: '100%',
          margin: '0 auto',
          boxSizing: 'border-box',
        }}
        className="project-details-split-container"
      >
        {/* ── LEFT PANEL (35% Width) — Fixed Info & Metrics ── */}
        <div
          style={{
            width: '35%',
            height: '100%',
            background: 'rgba(22, 27, 36, 0.75)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '20px',
            padding: '22px 24px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.16)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            overflowY: 'auto',
          }}
          className="custom-scrollbar project-details-left-panel"
        >
          <div>
            {/* Category tag */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 10px', borderRadius: '100px', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.14)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#cbd5e1', marginBottom: '10px' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 8px #38bdf8' }} />
              {project.category}
            </div>

            {/* Project Title */}
            <h1
              className="silver-text-gradient"
              style={{
                fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                fontWeight: 800,
                margin: '0 0 8px 0',
                lineHeight: 1.2,
              }}
            >
              {project.title}
            </h1>

            {/* Summary */}
            <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#94a3b8', margin: '0 0 18px 0' }}>
              {project.description}
            </p>

            {/* Key Stats / Metrics Grid */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#cbd5e1', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Key Architecture & Features
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {project.metrics.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.07)',
                      borderRadius: '12px',
                      padding: '8px 10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <div style={{ color: '#38bdf8', fontSize: '0.85rem', flexShrink: 0 }}>
                      {m.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
                        {m.label}
                      </div>
                      <div style={{ fontSize: '0.66rem', color: '#94a3b8' }}>
                        {m.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#cbd5e1', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Tech Stack
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.stack.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '100px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#e2e8f0',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '10px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', marginTop: '16px' }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-primary"
                style={{
                  flex: 1,
                  padding: '9px 14px',
                  fontSize: '0.82rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                }}
              >
                <FaExternalLinkAlt style={{ fontSize: '0.7rem' }} /> Live Demo
              </a>
            )}
            <button
              onClick={() => router.push('/')}
              className="hero-btn-secondary"
              style={{
                flex: 1,
                padding: '9px 14px',
                fontSize: '0.82rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              Explore Other Works
            </button>
          </div>
        </div>

        {/* ── RIGHT PANEL (65% Width) — Interactive Laptop / Browser Mockup Showcase ── */}
        <div
          style={{
            width: '65%',
            height: '100%',
            background: 'rgba(22, 27, 36, 0.75)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '20px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.16)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxSizing: 'border-box',
          }}
          className="project-details-right-panel"
        >
          {/* Top Browser Header with traffic lights & Live Feature Tabs */}
          <div
            style={{
              background: 'rgba(15, 18, 24, 0.95)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              flexShrink: 0,
            }}
          >
            {/* Traffic lights */}
            <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ef4444' }} />
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#eab308' }} />
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#22c55e' }} />
            </div>

            {/* Feature Tabs Bar */}
            <div
              style={{
                display: 'flex',
                gap: '6px',
                overflowX: 'auto',
                padding: '2px',
              }}
              className="custom-scrollbar"
            >
              {project.features.map((f, idx) => {
                const isActive = activeTabIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTabIdx(idx)}
                    style={{
                      padding: '5px 12px',
                      borderRadius: '8px',
                      background: isActive ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                      border: isActive ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid rgba(255, 255, 255, 0.06)',
                      color: isActive ? '#ffffff' : '#94a3b8',
                      fontSize: '0.74rem',
                      fontWeight: isActive ? 700 : 500,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s ease',
                      fontFamily: 'inherit',
                    }}
                  >
                    {f.tab}
                  </button>
                );
              })}
            </div>

            {/* Quick Tab Arrows */}
            <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
              <button
                onClick={() => setActiveTabIdx((i) => Math.max(i - 1, 0))}
                disabled={activeTabIdx === 0}
                style={{
                  width: 24, height: 24, borderRadius: 6,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: activeTabIdx === 0 ? '#475569' : '#ffffff',
                  cursor: activeTabIdx === 0 ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.68rem',
                }}
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() => setActiveTabIdx((i) => Math.min(i + 1, project.features.length - 1))}
                disabled={activeTabIdx === project.features.length - 1}
                style={{
                  width: 24, height: 24, borderRadius: 6,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: activeTabIdx === project.features.length - 1 ? '#475569' : '#ffffff',
                  cursor: activeTabIdx === project.features.length - 1 ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.68rem',
                }}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Screenshot Display Frame */}
          <div
            style={{
              flex: 1,
              background: '#090b10',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTabIdx}
                src={activeFeature.image?.src || activeFeature.image}
                alt={activeFeature.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '10px',
                  display: 'block',
                }}
              />
            </AnimatePresence>
          </div>

          {/* Bottom Feature Description Bar */}
          <div
            style={{
              background: 'rgba(18, 22, 30, 0.95)',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '14px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                fontFamily: 'var(--font-mono, monospace)',
                color: '#38bdf8',
                background: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                padding: '3px 8px',
                borderRadius: '6px',
                flexShrink: 0,
              }}
            >
              0{activeTabIdx + 1}
            </span>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
                {activeFeature.title}
              </div>
              <div style={{ fontSize: '0.76rem', color: '#94a3b8', lineHeight: 1.45, marginTop: '2px' }}>
                {activeFeature.text}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Styled Scoped CSS */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.12);
          border-radius: 100px;
        }

        @media (max-width: 960px) {
          .project-details-split-container {
            flex-direction: column !important;
            overflow-y: auto !important;
            height: auto !important;
          }
          .project-details-left-panel {
            width: 100% !important;
            height: auto !important;
          }
          .project-details-right-panel {
            width: 100% !important;
            min-height: 420px !important;
          }
        }

        @media (max-width: 520px) {
          .pd-btn-label {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetails;