import React, { useState } from "react";
import "./css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "#home" },
    { name: "Projects", to: "#projects" },
    { name: "Skills", to: "#skills" },
    { name: "About", to: "#about" },
    { name: "Contact", to: "#contact" },
  ];

  return (
    <div className="flex justify-center items-center mt-2 px-4">
      {/* Rotating border glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-full max-w-5xl rounded-2xl bg-gradient-to-r blur-sm opacity-60 pointer-events-none" />
      </div>

      {/* Main Container */}
      <div className="relative z-50 flex items-center justify-between w-full max-w-5xl bg-transparent">
        {/* Logo */}
        <div className="text-xl font-bold text-orange-500 ml-1">
          asyncnikhil.in
        </div>

        {/* Navbar */}
        <nav className="glass-navbar px-5 py-2 sm:px-8 sm:py-2 rounded-md border backdrop-blur-lg bg-black/30 shadow-md">
          <div className="flex justify-center items-center">
            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-6 text-sm font-medium text-white">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.to}
                  className="hover:text-orange-400 transition px-2 py-1 rounded-md"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="w-full md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none"
              >
                <span className="text-2xl text-orange-500">
                  {isOpen ? "✕" : "☰"}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {isOpen && (
            <div className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center md:hidden transition-all duration-300">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-3xl text-orange-500 focus:outline-none"
              >
                ✕
              </button>
              <div className="space-y-6 text-center">
                {navLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.to}
                    className="block text-2xl font-semibold hover:text-orange-400 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Download Resume Button */}
        <div className="w-40 relative group rounded-md bg-gradient-to-br from-orange-500 to-red-500 shadow-lg mr-5">
          <a
            href="/resume.pdf" // Place resume.pdf inside public folder
            download="Nikhil_Prajapati_Resume.pdf" // The name file will be saved as
            className="block text-white font-medium text-sm px-4 py-2 rounded-md border border-transparent transition-all duration-300 text-center
               group-hover:bg-white group-hover:text-orange-500 group-hover:border-orange-500"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
