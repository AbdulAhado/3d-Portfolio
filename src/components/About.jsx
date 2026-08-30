import React from "react";
import { motion } from "framer-motion";
import "./style.css";
import mern from "../assets/mern.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[var(--background)] scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text"
      >
        About Me
      </motion.h2>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT: IMAGE SECTION — single animation system */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex justify-center"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full">
                {/* Glow */}
                <div className="absolute inset-0 rounded-full
                  bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--highlight)]
                  blur-2xl opacity-30">
                </div>

                {/* Image */}
                <motion.img
                  src={mern}
                  alt="Abdul Ahad Saeed - MERN Stack Developer"
                  className="relative w-full h-full rounded-full object-cover
                             border-4 border-[var(--primary)]
                             shadow-2xl bg-[var(--background)] z-10"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                  loading="lazy"
                />

                {/* Ring */}
                <div className="absolute inset-0 rounded-full
                  border-2 border-[var(--secondary)] opacity-30">
                </div>
              </div>
            </motion.div>

            {/* RIGHT: TEXT SECTION — single animation system */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-[var(--text)] space-y-6"
            >
              <p className="text-lg md:text-xl leading-relaxed">
                Hi, I'm <strong className="text-[var(--secondary)]">Abdul Ahad Saeed</strong>,
                a <strong>Full Stack Developer</strong> currently working at
                <strong className="text-[var(--primary)]"> Terapage.ai</strong> and a
                BS-IT student at BZU Multan.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                I specialize in building scalable, AI-powered web applications using
                modern technologies like React, Node.js, Express, MongoDB, and OpenAI APIs.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                At Terapage.ai, I've worked on AI-driven synthetic data systems, automated
                voice interview platforms, and research insight tools—focusing on clean
                architecture and seamless user experience.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                I'm passionate about clean code, problem-solving, and building products
                that make a real-world impact. Outside of coding, I enjoy chess, cricket,
                and exploring new technologies.
              </p>

              <p className="text-xl md:text-2xl font-bold gradient-text pt-4">
                Let's create something awesome together 🚀
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;