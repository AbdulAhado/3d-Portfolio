
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import './project.css';
import youtube from '../assets/Y_V3.jpg';
import gemini from '../assets/Gemini.png'
import chat from '../assets/chat-1.png'
import contact from  '../assets/contact-2.png'
import spotify from '../assets/spotify-3.png'
import dice from '../assets/dice.png'


const projects = [
  {
    title: "Gemini Clone",
    image: gemini,
    description: "A Google Gemini Clone made with React JS and API. It is fully responsive for mobile, tablet devices, and desktop devices. It saves the recent history.",
    link: "https://ahad-projects-100011.netlify.app/",
    id: "gemini-clone"
  },
  {
    title: "Chat App",
    image: chat,
    description: "A full stack chat application with functionality like Login, Signup, User last seen, message seen, user’s bio, and much more.",
    link: "https://ahad-projects-100014.netlify.app/",
    id: "chat-app"
  },
  {
    title: "Video Tube",
    image: youtube,
    description: "I have made this using React JS and API. Users can watch videos, search for new videos, view suggestions, like count, subscribers count, etc.",
    link: "https://ahad-projects-100012.netlify.app/",
    id: "video-tube"
  },
  {
    title: "Contact Manager",
    image : contact,
    description: "A contact manager web app using Firebase for real-time database management. You can save, update, and delete contact information.",
    link: "https://ahad-projects-6.netlify.app/",
    id: "contact-manager"
  },
  {
    title: "Spotify Clone",
    image: spotify,
    description: "A Spotify clone frontend project using React JS. Users can hear songs and control music playback with forward, backward, and stop functions.",
    link: "https://ahad-projects-7.netlify.app/",
    id: "spotify-clone"
  },
  {
    title: "Dice Game",
    image: dice,
    description: "A dice made with React.Js and fully responsive ",
    link: "https://ahad-projects-2024-3.netlify.app/",
    id: "dice-game"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-[#80E0D0] py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-10 neon-text">Projects</h2>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#101820] rounded-xl overflow-hidden shadow-md transform hover:scale-105 transition duration-300 border border-[#80E0D0] glowing-border"
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-56 overflow-hidden">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full p-2 h-full object-cover  rounded-t-lg"
                />
              )}
            </div>
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-teal-300">{project.title}</h3>
              <p className="text-gray-400 mt-2 h-15">{project.description}</p>
              <div className="flex justify-between mt-4">
                <Link
                  to={`/project-details/${project.id}`}
                  className="text-teal-400 hover:text-[#00ffff] font-medium"
                >
                  Full Details
                </Link>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-[#00ffff]  font-medium"
                >
                  Live Preview
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
