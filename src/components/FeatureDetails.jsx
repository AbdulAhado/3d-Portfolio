'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaRobot, FaFileAlt, FaMicrophone, FaPlay } from 'react-icons/fa';
import ProjectDetailsNavbar from './ProjectDetailsNavbar';
import Footer from './Footer';
import './style.css';

const FeatureDetails = () => {
  const { id } = useParams();
  const [feature, setFeature] = useState(null);

  const features = [
    {
      id: 1,
      title: "AI-Powered Synthetic Data Generation",
      icon: <FaRobot className="text-4xl" />,
      description: "Built an advanced AI-powered synthetic data generation platform that creates diverse AI personas with customizable demographic distributions. The system enables researchers to generate realistic synthetic participants for various research activities.",
      fullDescription: "This comprehensive system revolutionizes how researchers conduct studies by generating diverse AI personas that simulate real-world participants. The platform integrates OpenAI's advanced language models to create personas with realistic demographics, behaviors, and responses. Researchers can specify complex criteria including age, gender, location, occupation, disability status, ethnicity, and education level. The system supports multiple activity types including surveys, interviews, journal entries, media reviews, and more.",
      highlights: [
        "OpenAI integration for intelligent persona creation",
        "Advanced criteria selection supporting 7+ categories and 50+ attributes",
        "Precise demographic distribution (gender, age, location, occupation, disability status)",
        "Location-based distribution with country and city-level granularity",
        "Workspace-specific custom inclusion criteria",
        "Support for multiple activity types (surveys, interviews, media reviews)"
      ],
      technologies: ["OpenAI API", "React", "Node.js", "MongoDB", "Complex Algorithms"],
      gradient: "from-purple-500 to-pink-500",
      details: [
        {
          text: "The AI Persona Criteria Selector interface allows researchers to select from 7+ categories and 50+ attributes. Users can specify gender distribution, location preferences, and custom inclusion criteria with an intuitive, searchable interface.",
          image: "https://via.placeholder.com/800x500/6366F1/FFFFFF?text=Synthetic+Data+Criteria+Selector",
          type: "image"
        },
        {
          text: "Real-time persona generation dashboard showing demographic distributions. The system creates personas based on selected criteria and displays them in an organized, filterable view with detailed attributes.",
          image: "https://via.placeholder.com/800x500/06B6D4/FFFFFF?text=Persona+Generation+Dashboard",
          type: "image"
        },
        {
          text: "Distribution visualization showing how personas are allocated across different demographics. The system ensures balanced representation while respecting researcher-defined constraints.",
          image: "https://via.placeholder.com/800x500/F59E42/FFFFFF?text=Demographic+Distribution+View",
          type: "image"
        },
        {
          text: "Workspace-specific criteria management allows organizations to customize their persona generation settings. Admins can define custom inclusion criteria that align with their research needs.",
          image: "https://via.placeholder.com/800x500/6366F1/FFFFFF?text=Workspace+Criteria+Management",
          type: "image"
        }
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual demo video
    },
    {
      id: 2,
      title: "Insights Publishing System",
      icon: <FaFileAlt className="text-4xl" />,
      description: "Developed a comprehensive insights publishing system that allows researchers to share their findings publicly or privately with advanced security and SEO controls.",
      fullDescription: "The Insights Publishing System empowers researchers to share their findings with the world through a flexible, secure publishing platform. Researchers can choose between public and private publishing modes, with optional password protection for sensitive content. The system includes a rich HTML content editor with live preview, allowing for beautifully formatted research reports. SEO controls enable researchers to make their insights discoverable through search engines, while private mode ensures confidentiality when needed.",
      highlights: [
        "Public and private publishing modes with password protection",
        "SEO indexing controls for search engine visibility",
        "Rich HTML content editor with live preview",
        "Secure shareable link generation with unique URLs",
        "Real-time content preview functionality",
        "Easy unpublish capability with confirmation dialogs"
      ],
      technologies: ["Material-UI", "React", "Node.js", "MongoDB", "Security Best Practices"],
      gradient: "from-blue-500 to-cyan-500",
      details: [
        {
          text: "Publishing interface with visibility controls. Researchers can toggle between public and private modes, set passwords, and control search engine indexing with intuitive switches and options.",
          image: "https://via.placeholder.com/800x500/06B6D4/FFFFFF?text=Publishing+Interface",
          type: "image"
        },
        {
          text: "HTML content editor with live preview. The rich text editor allows researchers to format their insights with HTML tags, links, and styling while seeing real-time previews of how the content will appear to viewers.",
          image: "https://via.placeholder.com/800x500/6366F1/FFFFFF?text=HTML+Content+Editor",
          type: "image"
        },
        {
          text: "Shareable link generation with copy functionality. Once published, researchers receive a unique, secure URL that can be shared with collaborators, stakeholders, or made public depending on visibility settings.",
          image: "https://via.placeholder.com/800x500/F59E42/FFFFFF?text=Shareable+Link+Generation",
          type: "image"
        },
        {
          text: "Published insight view showing how insights appear to viewers. The public-facing view maintains professional formatting while respecting privacy settings and access controls.",
          image: "https://via.placeholder.com/800x500/06B6D4/FFFFFF?text=Published+Insight+View",
          type: "image"
        }
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual demo video
    },
    {
      id: 3,
      title: "Automated Voice Interview System",
      icon: <FaMicrophone className="text-4xl" />,
      description: "Engineered an automated voice interview system powered by AI that conducts real-time conversations with participants.",
      fullDescription: "The Automated Voice Interview System represents a breakthrough in research data collection, enabling natural, conversational interviews through AI-powered voice agents. The system uses OpenAI's text-to-speech and Whisper APIs to create seamless two-way conversations. Participants can speak naturally, and the AI agent responds with appropriate follow-up questions based on previous answers. The system includes smart silence detection, automatic transcription, and session recovery capabilities. Multiple voice options allow researchers to customize the interview experience.",
      highlights: [
        "Real-time two-way voice conversation with AI agents",
        "OpenAI TTS integration with multiple voice options (6 voices)",
        "Automatic speech recognition with real-time transcription",
        "Smart silence detection for automatic recording control",
        "Live conversation transcripts with speaker identification",
        "Session persistence and recovery with localStorage",
        "Multi-device audio output support (speaker, headphones)",
        "Robust error handling and automatic reconnection"
      ],
      technologies: ["WebRTC", "OpenAI TTS/Whisper", "Web Audio API", "React", "Node.js"],
      gradient: "from-green-500 to-emerald-500",
      details: [
        {
          text: "Voice interview interface showing real-time conversation. The system displays live transcripts, audio controls, and interview status. Participants can see both their responses and AI agent questions in real-time.",
          image: "https://via.placeholder.com/800x500/10B981/FFFFFF?text=Voice+Interview+Interface",
          type: "image"
        },
        {
          text: "Audio device selection and controls. Users can choose between speaker and headphone output, adjust volume, and control recording. The system automatically detects available audio devices.",
          image: "https://via.placeholder.com/800x500/6366F1/FFFFFF?text=Audio+Device+Controls",
          type: "image"
        },
        {
          text: "Live transcript view with speaker identification. The conversation is transcribed in real-time with clear distinction between participant and AI agent messages, timestamps, and conversation flow.",
          image: "https://via.placeholder.com/800x500/06B6D4/FFFFFF?text=Live+Transcript+View",
          type: "image"
        },
        {
          text: "Session management and recovery. If a session is interrupted, users can resume from where they left off. The system saves progress automatically and provides recovery options.",
          image: "https://via.placeholder.com/800x500/F59E42/FFFFFF?text=Session+Recovery",
          type: "image"
        }
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual demo video
    }
  ];

  useEffect(() => {
    const selectedFeature = features.find((feat) => feat.id === parseInt(id));
    setFeature(selectedFeature);
  }, [id]);

  if (!feature) {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--text)] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Feature not found</h2>
          <Link href="/" className="text-[var(--primary)] hover:underline">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)] relative overflow-x-hidden">
      <ProjectDetailsNavbar projectTitle={feature.title} />
      
      {/* Animated Gradient Background */}
      {/* Animated Gradient Background */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[var(--primary)] via-[var(--secondary)] to-[var(--highlight)] opacity-20 blur-3xl rounded-full z-0 animate-gradient-move" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[400px] bg-gradient-to-bl from-[var(--highlight)] via-[var(--secondary)] to-[var(--primary)] opacity-15 blur-3xl rounded-full z-0 animate-gradient-move-delayed" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-24 relative z-10">
        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-full bg-gradient-to-br from-[var(--glass-bg)] via-[var(--background)] to-[var(--glass-bg)] rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-8 mb-12 border-2 border-[var(--primary)] overflow-hidden"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--secondary)] rounded-full blur-3xl"></div>
          </div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-2xl mb-4 md:mb-0 ring-4 ring-[var(--primary)] ring-opacity-30`}
          >
            {feature.icon}
          </motion.div>
          <div className="flex-1 text-center md:text-left relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold gradient-text mb-4">
              {feature.title}
            </h1>
            <p className="text-lg md:text-xl text-[var(--text)] opacity-90 font-medium leading-relaxed">
              {feature.description}
            </p>
          </div>
        </motion.div>

        {/* Full Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full mb-12"
        >
          <div className="w-full bg-gradient-to-br from-[var(--glass-bg)] to-[var(--background)] rounded-2xl shadow-xl p-6 md:p-10 border-2 border-[var(--primary)] border-opacity-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--highlight)]"></div>
            <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] rounded"></span>
              Overview
            </h2>
            <p className="text-[var(--text)] text-base md:text-lg leading-relaxed opacity-90">
              {feature.fullDescription}
            </p>
          </div>
        </motion.div>

        {/* Video Section */}
        {feature.videoUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full mb-12"
          >
            <div className="w-full bg-gradient-to-br from-[var(--glass-bg)] to-[var(--background)] rounded-2xl shadow-xl p-6 md:p-8 border-2 border-[var(--primary)] border-opacity-50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--highlight)]"></div>
              <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6 flex items-center gap-3">
                <FaPlay className="text-[var(--highlight)] text-2xl" />
                Demo Video
              </h2>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-[var(--primary)] shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <iframe
                  src={feature.videoUrl}
                  title={`${feature.title} Demo`}
                  className="w-full h-full relative z-10"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Details Timeline */}
        <div className="relative w-full mb-12">
          <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-8 text-center">
            Feature Walkthrough
          </h2>
          <div className="relative flex flex-col gap-8 md:gap-12">
            {feature.details.map((detail, index) => (
              <motion.div
                key={index}
                className="relative w-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Content Card */}
                <div className="w-full bg-gradient-to-br from-[var(--glass-bg)] to-[var(--background)] rounded-2xl shadow-xl p-6 md:p-8 border-2 border-[var(--primary)] border-opacity-50 hover:border-opacity-100 transition-all duration-300 relative overflow-hidden group">
                  {/* Animated border gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--highlight)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                    {index + 1}
                  </div>
                  
                  <div className="relative z-10">
                    {detail.type === 'image' ? (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="mb-6 rounded-xl overflow-hidden border-2 border-[var(--primary)] shadow-lg"
                      >
                        <img
                          src={detail.image}
                          alt={`${feature.title} - Step ${index + 1}`}
                          className="w-full h-auto object-cover"
                        />
                      </motion.div>
                    ) : (
                      <div className="mb-6 rounded-xl overflow-hidden border-2 border-[var(--primary)] aspect-video shadow-lg">
                        <iframe
                          src={detail.videoUrl}
                          title={`${feature.title} - Step ${index + 1}`}
                          className="w-full h-full"
                          allowFullScreen
                        />
                      </div>
                    )}
                    <p className="text-base md:text-lg text-[var(--text)] opacity-90 font-medium leading-relaxed">
                      {detail.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full mt-12"
        >
          <div className="w-full bg-gradient-to-br from-[var(--glass-bg)] to-[var(--background)] rounded-2xl shadow-xl p-6 md:p-10 border-2 border-[var(--primary)] border-opacity-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--highlight)]"></div>
            <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] rounded"></span>
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {feature.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="px-5 py-3 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient-move {
          0% { transform: translate(-50%, 0) scale(1); }
          50% { transform: translate(-50%, 20px) scale(1.1); }
          100% { transform: translate(-50%, 0) scale(1); }
        }
        @keyframes gradient-move-delayed {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, -20px) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-gradient-move {
          animation: gradient-move 8s ease-in-out infinite;
        }
        .animate-gradient-move-delayed {
          animation: gradient-move-delayed 10s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
      
      <Footer />
    </div>
  );
};

export default FeatureDetails;

