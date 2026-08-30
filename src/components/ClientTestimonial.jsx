import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaUser, FaBuilding, FaLinkedin, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaAward, FaHeart } from "react-icons/fa";
import "./style.css";

const ClientTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      clientName: "Anietie Godswill",
      company: "Terapage.ai",
      role: "Client",
      rating: 4,
      review: `Abdul started well. He is a very brilliant young mind with a good attitude towards his work. However, during his interview, he did not tell me that his educational commitment would affect his work and my project. This came out from nowhere and despite making several adjustments to accommodate him, it kept escalating. This is the main reason why I would not recommend him at this stage of his career yet. Regardless, it was a good 4 months plus spent working with him.\n\nHe is hardworking, however, bright and has a good attitude, however, there are some aspects of his abilities that are not fully developed to the stage of being trusted with enterprise-grade application development tasks. I would recommend him as a very talented intern where there is a structured technical leadership focused on helping him grow and learn how to work with others.\n\nThanks for your contribution, Abdul.`,
      highlights: [
        "Committed to Quality",
        "Professional Attitude",
        "Hardworking & Bright",
        "Good Team Member",
      ],
      linkedinUrl: "https://www.linkedin.com/company/terapage/",
      upworkUrl: "https://www.upwork.com/freelancers/~015b2fd60746978b56",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      clientName: "Wanthanus Damrongsuntipitak",
      company: "Wanthanus Damrongsuntipitak",
      role: "AI API Integration Specialist",
      rating: 5,
      review: `An exceptional MERN stack developer with strong expertise in React.js, Node.js, and full-stack web development. He also demonstrated excellent capability in integrating AI APIs and implementing intelligent features that enhanced the functionality and user experience of the project. He delivered a scalable, high-quality solution with clean, well-structured code and great attention to detail. Communication was smooth, deadlines were respected, and the overall experience was outstanding. I highly recommend him to anyone looking for a reliable, skilled, and forward-thinking developer.`,
      highlights: [
        "Reliable",
        "Committed to Quality",
        "Solution Oriented",
        "Clear Communicator",
        "Accountable for Outcomes",
        "Detail Oriented",
      ],
      linkedinUrl: "https://linkedin.com/in/abdul-ahad-0125ahad",
      upworkUrl: "https://www.upwork.com/freelancers/~015b2fd60746978b56",
      gradient: "from-blue-500 to-cyan-500",
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
    const newIndex = currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1;
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
    scrollToCard(newIndex);
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (container) {
      const index = Math.round(container.scrollLeft / container.offsetWidth);
      setCurrentIndex(index);
    }
  };

  return (
    <section id="testimonial" className="py-16 bg-[var(--background)] scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12 px-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Client Testimonials</h2>
        <p className="text-lg md:text-xl text-[var(--text)] opacity-80 max-w-3xl mx-auto">
          Feedback from clients I've worked with on various projects, showcasing collaboration,
          technical excellence, and professional growth
        </p>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 md:left-4"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft className="text-xl" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 md:right-4"
          aria-label="Next testimonial"
        >
          <FaChevronRight className="text-xl" />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4 px-2"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-full md:w-[85%] lg:w-[75%] snap-center"
            >
              <div className="card border-2 border-[var(--primary)] bg-gradient-to-br from-[var(--glass-bg)] to-[var(--background)] shadow-xl hover:shadow-2xl h-full relative overflow-hidden">
                {/* Decorative Quote */}
                <div className="absolute top-6 right-6 opacity-5 pointer-events-none">
                  <FaQuoteLeft className="text-9xl text-[var(--primary)]" />
                </div>

                {/* Header */}
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6 pb-6 border-b border-[var(--primary)] border-opacity-30 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                  >
                    <FaUser className="text-5xl" />
                  </motion.div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">
                      {testimonial.clientName}
                    </h3>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-[var(--secondary)] mb-2">
                      <FaBuilding className="text-lg" />
                      <span className="font-semibold text-lg">{testimonial.company}</span>
                    </div>
                    <p className="text-[var(--text)] opacity-70 text-base">{testimonial.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center justify-center md:justify-start gap-2 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <FaStar key={idx} className="text-3xl text-[var(--highlight)]" />
                  ))}
                  <span className="ml-2 text-[var(--text)] font-bold text-xl">
                    {testimonial.rating}.0 / 5.0
                  </span>
                </div>

                {/* Review Text */}
                <div className="mb-6 relative z-10">
                  <p className="text-[var(--text)] text-base md:text-lg leading-relaxed italic whitespace-pre-line">
                    "{testimonial.review}"
                  </p>
                </div>

                {/* Key Highlights — static layout, no whileInView inside carousel */}
                <div className="mb-6">
                  <h4 className="text-lg md:text-xl font-bold text-[var(--secondary)] mb-4 flex items-center gap-2">
                    <FaAward className="text-[var(--highlight)]" />
                    Client Satisfaction Highlights
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {testimonial.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-lg bg-[var(--glass-bg)] border border-[var(--primary)] border-opacity-20 hover:border-opacity-40 transition-colors duration-200"
                      >
                        <FaHeart className="text-[var(--highlight)] mt-0.5 flex-shrink-0 text-sm" />
                        <p className="text-[var(--text)] text-sm md:text-base leading-relaxed font-medium">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-[var(--primary)] border-opacity-30">
                  <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 flex-wrap">
                    <motion.a
                      href={testimonial.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex items-center gap-2 px-4 py-2.5 md:px-5 md:py-3 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold hover:shadow-lg transition-shadow duration-200"
                    >
                      <FaLinkedin className="text-lg" />
                      <span>LinkedIn Profile</span>
                      <FaExternalLinkAlt className="text-xs" />
                    </motion.a>
                    {testimonial.upworkUrl && (
                      <motion.a
                        href={testimonial.upworkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center gap-2 px-4 py-2.5 md:px-5 md:py-3 rounded-lg bg-[var(--highlight)] text-white font-semibold hover:opacity-90 transition-opacity duration-200"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        <span>View on Upwork</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'w-10 h-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]'
                  : 'w-3 h-3 bg-[var(--text)] opacity-30 hover:opacity-60'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonial;