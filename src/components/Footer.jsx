import React from 'react';
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaNpm,
  FaBootstrap,
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-[#0a0f1c] to-[#0f0f0f] text-white pt-16 pb-8 border-t border-[#1e90ff30]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-sm">

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-orange-300">Home</a></li>
            <li><a href="#about" className="hover:text-orange-300">About</a></li>
            <li><a href="#projects" className="hover:text-orange-300">Projects</a></li>
            <li><a href="#skills" className="hover:text-orange-300">Skills</a></li>
            <li><a href="#contact" className="hover:text-orange-300">Contact</a></li>
          </ul>
        </div>

        {/* 📚 Docs & Tools */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-400">Docs & Tools</h3>
          <div className="grid grid-cols-2 gap-3 text-gray-400">
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" className="flex items-center gap-2 hover:text-orange-300"><FaHtml5 className="text-orange-500" /> HTML</a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" className="flex items-center gap-2 hover:text-orange-300"><FaCss3Alt className="text-blue-500" /> CSS</a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className="flex items-center gap-2 hover:text-orange-300"><FaJs className="text-yellow-400" /> JavaScript</a>
            <a href="https://react.dev/" target="_blank" className="flex items-center gap-2 hover:text-orange-300"><FaReact className="text-cyan-400" /> React</a>
            <a href="https://nodejs.org/en/docs" target="_blank" className="flex items-center gap-2 hover:text-orange-300"><FaNodeJs className="text-green-500" /> Node.js</a>
            <a href="https://www.mongodb.com/docs/" target="_blank" className="flex items-center gap-2 hover:text-orange-300"><FaDatabase className="text-green-400" /> MongoDB</a>
            <a href="https://git-scm.com/docs" target="_blank" className="flex items-center gap-2 hover:text-orange-300"><FaGitAlt className="text-red-500" /> Git</a>
            <a href="https://www.npmjs.com/" target="_blank" className="flex items-center gap-2 hover:text-orange-300"><FaNpm className="text-red-600" /> NPM</a>
            <a href="https://tailwindcss.com/docs" target="_blank" className="flex items-center gap-2 hover:text-orange-300"><SiTailwindcss className="text-sky-400" /> Tailwind CSS</a>
            <a href="https://expressjs.com/en/starter/installing.html" target="_blank" className="flex items-center gap-2 hover:text-orange-300"><SiExpress className="text-gray-300" /> Express.js</a>
            <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank" className="flex items-center gap-2 hover:text-orange-300"><FaBootstrap className="text-purple-500" /> Bootstrap</a>
            <a href="https://nextjs.org/docs" target="_blank" className="flex items-center gap-2 hover:text-orange-300"><TbBrandNextjs className="text-white" /> Next.js</a>
          </div>
        </div>

        {/* 🌐 Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-400">Follow Me</h3>
          <div className="flex gap-5 text-2xl mb-4">
            <a href="https://linkedin.com/in/nikhil-prajapati9889/" style={{ color: '#0077b5' }} target="_blank" className="hover:scale-110 transition"><FaLinkedin /></a>
            <a href="https://github.com/devNikhil00" style={{ color: '#ffffff' }} target="_blank" className="hover:scale-110 transition"><FaGithub /></a>
            <a href="https://twitter.com/asyncnikhil" style={{ color: '#ffffff' }} target="_blank" className="hover:scale-110 transition"><FaXTwitter/></a>
            <a href="https://instagram.com/your-handle" style={{ color: '#E1306C' }} target="_blank" className="hover:scale-110 transition"><FaInstagram /></a>
            <a href="mailto:nikhilprajapatistaic@gmail.com" style={{ color: '#D44638' }} className="hover:scale-110 transition"><FaEnvelope /></a>
          </div>
          {/* <p className="text-gray-400 text-sm">nikhilprajapatistaic@gmail.com</p> */}
        </div>

        {/* ❓ FAQ Section */}
        <div>
          <h3 className="text-lg font-semibold mb-1 text-orange-400">FAQs</h3>
          <hr className="border-t border-zinc-500 " />
          <div className="space-y-4 text-sm text-gray-300 mt-2 w-full text-zinc-400 border-[#1e90ff30] ">
            <details className="group   rounded-lg transition-all duration-200 hover:border-orange-400">
              <summary className="cursor-pointer font-medium group-open:text-orange-400">
                What technologies do you use in your projects?
              </summary>
              <p className="mt-2 text-gray-400 leading-relaxed">
                I mainly work with the MERN stack (MongoDB, Express.js, React.js, Node.js), along with Tailwind CSS, Git, and modern tools.
              </p>
            </details>

            <details className="group  rounded-lg transition-all duration-200 hover:border-orange-400">
              <summary className="cursor-pointer font-medium group-open:text-orange-400">
                Can I collaborate with you on a project?
              </summary>
              <p className="mt-2 text-gray-400 leading-relaxed">
                Absolutely! I'm always open to exciting collaborations. Reach out via the contact form or social media.
              </p>
              <h1>This is the changed part</h1>
            </details>

            <details className="group   transition-all duration-200 hover:border-orange-400">
              <summary className="cursor-pointer font-medium  group-open:text-orange-400">
                Are your projects open source?
              </summary>
              <p className="mt-2 text-gray-400 leading-relaxed">
                Most of my projects are open-source and available on GitHub. You're welcome to explore or contribute!
              </p>
            </details>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 pt-8 border-t border-[#1e90ff30]">
        <p className="text-gray-400 text-sm">
          © 2024 Nikhil Prajapati. All rights reserved. Built with ❤️ using React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
