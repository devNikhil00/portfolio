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
    <div className="flex justify-center items-center mt-2 px-3 sm:px-4 relative">
      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-full max-w-5xl rounded-2xl bg-gradient-to-r blur-sm opacity-60 pointer-events-none" />
      </div>

      {/* Main Container */}
      <div className="relative z-50 flex items-center justify-between w-full max-w-5xl bg-transparent">
        {/* Logo + Toggle */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="text-lg sm:text-xl font-bold text-orange-500 ml-1">
            asyncnikhil.in
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none text-orange-500 text-xl mr-2 sm:mr-4"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex glass-navbar items-center justify-between px-6 py-2 rounded-md border backdrop-blur-lg bg-black/30 shadow-md">
          <div className="flex space-x-6 text-sm font-medium text-white">
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
        </nav>

        {/* Desktop Resume Button */}
        <div className="hidden sm:block w-40 relative group rounded-md bg-gradient-to-br from-orange-500 to-red-500 shadow-lg mr-2 sm:mr-5">
          <a
            href="/resume.pdf"
            download="Nikhil_Prajapati_Resume.pdf"
            className="block text-white font-medium text-sm px-4 py-2 rounded-md border border-transparent transition-all duration-300 text-center
               group-hover:bg-white group-hover:text-orange-500 group-hover:border-orange-500"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Mobile Nav Menu (Animated) */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/90 z-[100] flex flex-col items-center justify-center md:hidden transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-2xl text-orange-500 focus:outline-none"
        >
          ✕
        </button>

        {/* Menu Links */}
        <div className="space-y-4 text-center">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.to}
              className="block text-md font-semibold text-white hover:text-orange-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Resume Button inside mobile menu */}
        <div className="mt-10 w-40 relative group rounded-md bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
          <a
            href="/resume.pdf"
            download="Nikhil_Prajapati_Resume.pdf"
            className="block text-white font-sm text-sm px-2 py-2 rounded-md border border-transparent transition-all duration-300 text-center
               group-hover:bg-white group-hover:text-orange-500 group-hover:border-orange-500"
            onClick={() => setIsOpen(false)}
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
