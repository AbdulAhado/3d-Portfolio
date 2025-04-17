
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./style.css"; 
import "./hero.css";// Import CSS for special effects
import ahad from "../assets/Ahad_Image.png";
const Hero = () => {
  const skills = [
    "HTML, CSS, JavaScript",
    "Tailwind CSS",
    "React",
    "Express JS",
    "Mongo DB",
    "Node JS",
  ];

  const [text, setText] = useState("");
  const fullText = "Professional React Developer";
  const typingSpeed = 100; // Speed of typing effect (in ms)

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen flex items-center justify-center bg-black text-[#80E0D0] p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Name and Skills */}
        <div className="text-left mb-8 md:mb-0">
          {/* Animated Name with Gradient Effect */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold gradient-text"
            whileHover={{ scale: 1.1 }} // Subtle hover effect
          >
            Abdul Ahad Saeed
          </motion.h1>

          {/* Typing Effect for Job Title */}
          <p className="text-xl mb-6 typing">{text}</p>

          {/* Animated Skill List */}
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { staggerChildren: 0.3 } 
              }
            }}
            className="space-y-2"
          >
            {skills.map((skill, index) => (
              <motion.li 
                key={index} 
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                className="text-lg flex items-center"
              >
                <span className="mr-2">✔️</span> {skill}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Right Side: Animated Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.img
            src={ahad} // Replace with your actual image
            alt="Abdul Ahad Saeed"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full glowing-border gradient-background"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
