import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaFileAlt, FaMicrophone, FaBrain, FaCheckCircle, FaCode, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./style.css";

const MajorFeatures = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const features = [
    {
      id: 1,
      title: "AI-Powered Synthetic Data Generation",
      icon: <FaRobot className="text-5xl" />,
      description: "Built an advanced AI-powered synthetic data generation platform that creates diverse AI personas with customizable demographic distributions.",
      highlights: [
        "OpenAI integration for intelligent persona creation",
        "Advanced criteria selection supporting 7+ categories and 50+ attributes",
        "Precise demographic distribution (gender, age, location, occupation)",
        "Location-based distribution with country and city-level granularity",
        "Workspace-specific custom inclusion criteria",
        "Support for multiple activity types",
      ],
      technologies: ["OpenAI API", "React", "Node.js", "MongoDB", "Complex Algorithms"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Insights Publishing System",
      icon: <FaFileAlt className="text-5xl" />,
      description: "Developed a comprehensive insights publishing system that allows researchers to share their findings publicly or privately with advanced security and SEO controls.",
      highlights: [
        "Public and private publishing modes with password protection",
        "SEO indexing controls for search engine visibility",
        "Rich HTML content editor with live preview",
        "Secure shareable link generation with unique URLs",
        "Real-time content preview functionality",
        "Easy unpublish capability with confirmation dialogs",
      ],
      technologies: ["Material-UI", "React", "Node.js", "MongoDB", "Security Best Practices"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Automated Voice Interview System",
      icon: <FaMicrophone className="text-5xl" />,
      description: "Engineered an automated voice interview system powered by AI that conducts real-time conversations with participants. Features advanced speech recognition and text-to-speech synthesis.",
      highlights: [
        "Real-time two-way voice conversation with AI agents",
        "OpenAI TTS integration with multiple voice options (6 voices)",
        "Automatic speech recognition with real-time transcription",
        "Smart silence detection for automatic recording control",
        "Live conversation transcripts with speaker identification",
        "Session persistence and recovery with localStorage",
      ],
      technologies: ["WebRTC", "OpenAI TTS/Whisper", "Web Audio API", "React", "Node.js"],
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const scrollToCard = (index) => {
    setCurrentIndex(index);
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.offsetWidth;
      container.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : features.length - 1;
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < features.length - 1 ? currentIndex + 1 : 0;
    scrollToCard(newIndex);
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (container) {
      const scrollPosition = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const index = Math.round(scrollPosition / cardWidth);
      setCurrentIndex(index);
    }
  };

  return (
    <section id="features" className="py-16 bg-[var(--background)] scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12 px-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Major Features Developed</h2>
        <p className="text-lg md:text-xl text-[var(--text)] opacity-80 max-w-3xl mx-auto">
          Three cutting-edge features I developed at Terapage.ai that showcase advanced AI integration,
          real-time processing, and user-centric design
        </p>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 md:left-4"
          aria-label="Previous feature"
        >
          <FaChevronLeft className="text-xl" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 md:right-4"
          aria-label="Next feature"
        >
          <FaChevronRight className="text-xl" />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4 px-2"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-full md:w-[85%] lg:w-[75%] snap-center"
            >
              <div className="card border-2 border-[var(--primary)] bg-gradient-to-br from-[var(--glass-bg)] to-[var(--background)] shadow-xl hover:shadow-2xl h-full">
                {/* Feature Header */}
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6 pb-6 border-b border-[var(--primary)] border-opacity-30">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                  >
                    {feature.icon}
                  </motion.div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-3">{feature.title}</h3>
                    <p className="text-[var(--text)] text-base md:text-lg leading-relaxed opacity-90">{feature.description}</p>
                  </div>
                </div>

                {/* Key Highlights — no whileInView inside carousel (items are off-screen) */}
                <div className="mb-6">
                  <h4 className="text-lg md:text-xl font-bold text-[var(--secondary)] mb-4 flex items-center gap-2">
                    <FaBrain className="text-[var(--highlight)]" />
                    Key Highlights
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {feature.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-lg bg-[var(--glass-bg)] border border-[var(--primary)] border-opacity-20 hover:border-opacity-40 transition-colors duration-200"
                      >
                        <FaCheckCircle className="text-[var(--highlight)] mt-0.5 flex-shrink-0 text-sm" />
                        <p className="text-[var(--text)] text-sm md:text-base leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies — static, no whileInView inside carousel */}
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-[var(--secondary)] mb-4 flex items-center gap-2">
                    <FaCode className="text-[var(--highlight)]" />
                    Technologies &amp; Tools
                  </h4>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {feature.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold text-xs md:text-sm shadow-md"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'w-10 h-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]'
                  : 'w-3 h-3 bg-[var(--text)] opacity-30 hover:opacity-60'
              }`}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MajorFeatures;