import React from "react";
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
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-[#0a0f1c] to-[#0f0f0f] text-white pt-16 pb-8 border-t border-[#1e90ff30]">
      <div
        className="
          max-w-7xl mx-auto px-6
          grid grid-cols-2 gap-8
          md:grid-cols-4 md:gap-10
          text-sm
        "
      >
        {/* 🔗 Quick Links */}
        <div className="order-1 rounded-xl bg-white/1 backdrop-blur-sm p-4">
          <h3 className="text-lg font-semibold mb-4 text-orange-400">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="transition-colors duration-300 hover:text-orange-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 📚 Docs & Tools */}
        <div className="order-2 rounded-xl bg-white/1 backdrop-blur-sm p-4">
          <h3 className="text-lg font-semibold mb-4 text-orange-400">
            Docs & Tools
          </h3>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-gray-400">
            {[
              [FaHtml5, "HTML", "text-orange-500"],
              [FaCss3Alt, "CSS", "text-blue-500"],
              [FaJs, "JavaScript", "text-yellow-400"],
              [FaReact, "React", "text-cyan-400"],
              [FaNodeJs, "Node.js", "text-green-500"],
              [FaDatabase, "MongoDB", "text-green-400"],
              [FaGitAlt, "Git", "text-red-500"],
              [FaNpm, "NPM", "text-red-600"],
              [SiTailwindcss, "Tailwind", "text-sky-400"],
              [SiExpress, "Express", "text-gray-300"],
              [FaBootstrap, "Bootstrap", "text-purple-500"],
              [TbBrandNextjs, "Next.js", "text-white"],
            ].map(([Icon, label, color]) => (
              <a
                key={label}
                href="#"
                className="group flex items-center gap-2 transition-colors duration-300 hover:text-orange-300"
              >
                <Icon
                  className={`${color} transition-transform duration-300 group-hover:scale-110`}
                />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* 🌐 Follow Me */}
        <div className="order-3 col-span-2 md:col-span-1 rounded-xl bg-white/1 backdrop-blur-sm p-4">
          <h3 className="text-lg font-semibold mb-4 text-orange-400">
            Follow Me
          </h3>
          <div className="flex gap-5 text-2xl">
            {[
              [FaLinkedin, "#0077b5", "https://linkedin.com/in/nikhil-prajapati9889/"],
              [FaGithub, "#ffffff", "https://github.com/devNikhil00"],
              [FaXTwitter, "#ffffff", "https://twitter.com/asyncnikhil"],
              [FaInstagram, "#E1306C", "https://instagram.com/your-handle"],
              [FaEnvelope, "#D44638", "mailto:nikhilprajapatistaic@gmail.com"],
            ].map(([Icon, color, link], i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                className="transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]"
                style={{ color }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* ❓ FAQs */}
        <div className="order-4 col-span-2 md:col-span-1 rounded-xl bg-white/1 backdrop-blur-sm p-4">
          <h3 className="text-lg font-semibold mb-4 text-orange-400">
            FAQs
          </h3>
          <div className="space-y-3 text-gray-400">
            {[
              ["What technologies do you use?", "I mainly work with the MERN stack, Tailwind CSS, and modern web tools."],
              ["Can we collaborate?", "Yes! Reach out via contact form or social platforms."],
              ["Are projects open source?", "Most projects are open-source and available on GitHub."],
            ].map(([q, a]) => (
              <details key={q} className="group">
                <summary className="cursor-pointer font-medium flex justify-between items-center hover:text-orange-400">
                  {q}
                  <span className="text-orange-400 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-gray-400">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 pt-8 border-t border-[#1e90ff30]">
        <p className="text-gray-400 text-xs sm:text-sm">
          © 2024 Nikhil Prajapati. Built with ❤️ using React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
