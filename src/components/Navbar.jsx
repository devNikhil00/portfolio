import React, { useState, useEffect } from "react";
import "./css/Navbar.css";

/* ================= ACTIVE SECTION HOOK ================= */
const useActiveSection = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "projects", "skills", "about", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();

  const navLinks = [
    { name: "Home", to: "#home", id: "home" },
    { name: "Projects", to: "#projects", id: "projects" },
    { name: "Skills", to: "#skills", id: "skills" },
    { name: "About", to: "#about", id: "about" },
    { name: "Contact", to: "#contact", id: "contact" },
  ];

  /* ================= MOBILE: SCROLL LOCK ================= */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  return (
    <div className="flex justify-center items-center mt-2 px-3 sm:px-4 relative">
      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-full max-w-5xl rounded-2xl bg-gradient-to-r blur-sm opacity-60 pointer-events-none" />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-50 flex items-center justify-between w-full max-w-5xl bg-transparent">
        {/* Logo + Toggle */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="text-lg sm:text-xl font-bold text-orange-500 ml-1">
            asyncnikhil.in
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden focus:outline-none text-orange-500 text-xl mr-2 sm:mr-4"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* ================= DESKTOP NAVBAR ================= */}
        <nav className="hidden md:flex glass-navbar items-center px-6 py-2 rounded-md border backdrop-blur-lg bg-black/30 shadow-md">
          <div className="flex space-x-6 text-sm font-medium text-white">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.to}
                className={`
                  px-2 py-1 rounded-md transition
                  ${
                    activeSection === link.id
                      ? "text-orange-400"
                      : "hover:text-orange-400"
                  }
                `}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Desktop Resume */}
        <div className="hidden sm:block w-40 relative group rounded-md bg-gradient-to-br from-orange-500 to-red-500 shadow-lg mr-2 sm:mr-5">
          <a
            href="/resume.pdf"
            download="Nikhil_Prajapati_Resume.pdf"
            className="block text-white font-medium text-sm px-4 py-2 rounded-md transition-all duration-300 text-center
              group-hover:bg-white group-hover:text-orange-500"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[90] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ================= MOBILE DROPDOWN ================= */}
      <div
        className={`fixed top-0 right-0 w-1/2 h-1/2 bg-black/90 z-[100] md:hidden
        transform transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Close */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl text-orange-500"
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Menu */}
        <div className="h-full flex flex-col items-center justify-center space-y-4 text-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.to}
              onClick={() => setIsOpen(false)}
              className={`
                text-md font-semibold transition
                ${
                  activeSection === link.id
                    ? "text-orange-400"
                    : "text-white hover:text-orange-400"
                }
              `}
            >
              {link.name}
            </a>
          ))}

          {/* Resume */}
          <div className="mt-4 w-40 bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
            <a
              href="/resume.pdf"
              download="Nikhil_Prajapati_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="block text-white text-sm px-2 py-2 rounded-md transition-all duration-300 text-center
                hover:bg-white hover:text-orange-500"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
