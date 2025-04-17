import React from "react";
import { motion } from "framer-motion";
import "./about.css"; // Reuse your existing CSS file
import frontend from '../assets/frontend.png'
const About = () => {
    return (
        <section id="about"><motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-5 neon-text ">About Me</motion.h2>
            <section className="min-h-screen flex items-center justify-center bg-black text-[#80E0D0] p-8">

                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    {/* Left Side: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
                    >
                        <motion.img
                            src={frontend}// Replace with your image
                            alt="Abdul Ahad Saeed"
                            className="w-64 h-64 md:w-80 md:h-80 rounded-full glowing-border gradient-background"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    </motion.div>

                    {/* Right Side: About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-left w-full md:w-1/2"
                    >
                       

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            viewport={{ once: true }}
                            className="text-lg mb-4"
                        >
                            👋 Hi there! I’m <span className="font-bold">Abdul Ahad Saeed</span>, a passionate Front-End Developer and BS-IT student at BZU Multan, where I’m diving deep into the world of technology and innovation. With a knack for crafting seamless digital experiences, I specialize in turning ideas into dynamic, user-centric applications using modern tools like <span className="font-bold">React</span>, <span className="font-bold">JavaScript</span>, and <span className="font-bold">Tailwind CSS</span>.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.9 }}
                            viewport={{ once: true }}
                            className="text-lg mb-4"
                        >
                            My journey doesn’t stop at the front-end—I’m also exploring the full-stack realm with <span className="font-bold">Node.js</span>, <span className="font-bold">Express</span>, and <span className="font-bold">MongoDB</span>, building everything from real-time chat apps to AI-powered tools. Whether it’s a Spotify-inspired music player or a contact manager with Firebase, I thrive on solving problems through clean code and creative solutions.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.1 }}
                            viewport={{ once: true }}
                            className="text-lg mb-4"
                        >
                            Beyond the screen, you’ll find me strategizing over a chessboard, swinging a cricket bat, or freelancing as a Shopify and Amazon Virtual Assistant. I believe in continuous learning, collaboration, and pushing boundaries—both in tech and life.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.3 }}
                            viewport={{ once: true }}
                            className="text-lg font-bold gradient-text"
                        >
                            Let’s build something amazing together! 💡
                        </motion.p>
                    </motion.div>
                </div>
            </section>
        </section>
    );
};

export default About;