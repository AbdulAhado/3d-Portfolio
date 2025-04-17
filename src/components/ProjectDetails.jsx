import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  // Sample project data (replace with your actual data fetching logic)
  const projects = [
    {
      id: "gemini-clone",
      title: "Gemini Clone",
      description: "A Google Gemini Clone made with React JS and API.",
      details: [
        {
          text: "This project is a fully responsive Google Gemini clone. It uses React JS for the frontend and integrates with the Gemini API for real-time responses.",
          image:"/Gemini.png",
        },
        {
          text: "Here is the animation, if the response take time to render.",
          image: "/gemini-2.png",
        },
        {
          text: " The result of the question or input from user will be show in this type of formatting, which looks amazing and good user experience.",
          image: "/gemini-3.png",
        },
        {
          text: "This Project also saves the user recent history but until hte page will not be refresh because there I have note used any extenal history or backend.",
          image: "/gemini-4.png",
        },
      ],
    },
    {
      id: "chat-app",
      title: "Chat App",
      description: "A realtime chat app where you can chat with your friends.",
      details: [
        {
          text: "First You have to create account here by which we can recognize you and then you can chat with your friends. Whenever you sign up, you can continue your chat from where you left.",
          image:"/Chat.png",
        },
        {
          text: "Here is the look of your chat app after creating your accoount. Now you can chat with your friend and enjoy it. ",
          image: "/chat-1.png",
        },
        {
          text: " If your friend send a new massage to you than its profile will colored witha border which show that you have a new massage from your friend after seeing this the border will be disappear.",
          image: "/chat-3.png",
        },
        {
          text: "Here is the option if you want to cahnge your name , profile pic and your bio that will be shown to your friends.",
          image: "/chat-4.png",
        },
      ],
    },
    {
      id: "video-tube",
      title: "Coder Tube",
      description: "A video streaming web appliction like youtube.",
      details: [
        {
          text: "Here is the first look of video tube here is simply a sidebar on left side and suggested videos on right side a search bar on top with a logo of site.",
          image:"/video.png",
        },
        {
          text: "When you search for anything there in searxh bar the result will be appear here as shown in picture.",
          image: "/video-2.png",
        },
        {
          text: " When you click on any video to play it so there is a page like that where you can see the subscribers of channel and views with likes on this video. There are some videos suggested on right side for you.",
          image: "/video-3.png",
        },
        {
          text: "When you open a channel of the creator if you wanted to see the all videos of creator then it looks like this as shown in picture. Here you can watch all the videos of the creator. And the whole website is fully responsive .",
          image: "/video-4.png",
        },
      ],
    },
    {
      id: "contact-manager",
      title: "Contact Manager",
      description: "A very simple and small web app for managing contacts.",
      details: [
        {
          text: "Here you add your contact with the name and email address of the one that you want to save..",
          image:"/contact-1.png",
        },
        {
          text: "The pop up appear when you click on plus button and now you can add a new contact with his details.",
          image: "/contact-2.png",
        },
        {
          text: " There is the search ability where you can search for the contact by name or email address. Or you can also delete a contact.",
          image: "/contact-3.png",
        },
        {
          text: "It is fully responsive and you can update the contact by clicking the delete button.",
          image: "/contact-4.png",
        },
      ],
    },
    {
      id: "spotify-clone",
      title: "Spotify Clone",
      description: "A music player like spotify clones",
      details: [
        {
          text: "A spotify clone where you can listen music with the name and some more details of the music you are listening",
          image:"/spotify.png",
        },
        {
          text: "THe playlost of song that you have added to your playlist will be shown here and you can play the song by clicking on the song.",
          image: "/spotify-2.png",
        },
        {
          text: " Song player , where you can go to previous song, next song, play and pause the song and also you can see the song details.",
          image: "/spotify-3.png",
        },
       
      ],
    },
    {
      id: "dice-game",
      title: "Dice Game",
      description: "A dice game to play and enjoy. ",
      details: [
        {
          text: "The first page when you open the web application and by clickking the start game button you will be redirect to the main game page.",
          image:"/dice.png",
        },
        {
          text: "Here first you have to choose or guess the number and after guessing you have to click on dice, if your guess is correct, your score will be increased with 2 and if wrong then decrease by 2.",
          image: "/dice-2.png",
        },
        {
          text: " WHen you think that now it is the time to play a new game then yuo can reset tthe score bu clicking on reset score button and then play a new game with starting score 0.",
          image: "/dice-3.png",
        },
        {
          text: " If you dont know how to play the game and what have to be done, then click on show rules and you can see the rules of the game.",
          image: "/dice-4.png",
        },
       
      ],
    },
  ];

  useEffect(() => {
    const selectedProject = projects.find((proj) => proj.id === id);
    setProject(selectedProject);
  }, [id]);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="bg-black text-[#80E0D0]">
     
      <div className="container mx-auto px-8 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-10 neon-text"
        >
          {project.title}
        </motion.h1>

        {project.details.map((detail, index) => (
          <motion.div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-16`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <p className="text-gray-400 text-lg">{detail.text}</p>
            </div>
            <div className="flex-1">
              <img
                src={detail.image}
                alt={project.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;