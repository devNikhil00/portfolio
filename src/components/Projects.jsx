import React from 'react';
import './css/Projects.css'; // optional for extra styling

const projects = [
  {
    title: 'Student Management System',
    desc: 'Manage student data with add, update, delete features using MERN stack.',
    img: '/images/student-management.png',
    link: '#',
  },
  {
    title: 'ClipSavior Downloader',
    desc: 'Download YouTube videos and Instagram reels with Node.js backend.',
    img: '/images/clipsavior.png',
    link: '#',
  },
  {
    title: 'Notes App',
    desc: 'Create, edit and delete notes with a beautiful UI and MongoDB backend.',
    img: '/images/notes-app.png',
    link: '#',
  },
  {
    title: 'Rock Paper Scissors',
    desc: 'A fun game with score tracking built using HTML, CSS, JS.',
    img: '/projects/rps.jpg',
    link: '#',
  },
  {
    title: 'Music Player',
    desc: 'A stylish music player with playlist support and audio visualization.',
    img: '/images/music-player.png',
    link: '#',
  },
  {
    title: 'Web3 Aggregator',
    desc: 'Showcase dApps, wallets and NFTs using React and Web3.js.',
    img: '/images/web3-aggregator.png',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20 bg-gradient-to-br from-black via-[#0a0f1c] to-[#0f0f0f] text-white relative">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <p className="text-sm text-orange-500 font-semibold mb-2">My Work</p>
        <h2 className="text-4xl font-bold mb-4">
          Highlighted <span className="text-orange-500">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Some projects that reflect my skills in full-stack development with React, Node.js, MongoDB, and more.
        </p>
      </div>

      {/* Horizontal Scrollable Projects */}
      <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 rounded-2xl shadow-lg hover:shadow-[0_0_15px_#1e90ff80] transition-shadow duration-500 border border-[#1e90ff30] hover:border-[#1e90ff] bg-gray-900"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline font-medium"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
