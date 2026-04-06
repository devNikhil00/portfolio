import React, { useState, useEffect, useRef } from "react";
import { NavHashLink } from 'react-router-hash-link';
import { useLocation } from "react-router-dom";
import { FaHome, FaCode, FaCogs, FaGraduationCap, FaUser, FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFileDownload, FaBriefcase } from "react-icons/fa";
import useActiveSection from "../hooks/useActiveSection";
import "./css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/project/");
  const panelRef = useRef(null);

  const getActiveId = (linkId) => {
    if (isProjectPage) return linkId === "projects";
    return activeSection === linkId;
  };

  const navLinks = [
    { name: "Home", to: "/#home", id: "home", icon: <FaHome /> },
    { name: "About", to: "/#about", id: "about", icon: <FaUser /> },
    { name: "Skills", to: "/#skills", id: "skills", icon: <FaCogs /> },
    { name: "Projects", to: "/#projects", id: "projects", icon: <FaCode /> },
    { name: "Experience", to: "/#experience", id: "experience", icon: <FaBriefcase /> },
    { name: "Education", to: "/#education", id: "education", icon: <FaGraduationCap /> },
    { name: "Contact", to: "/#contact", id: "contact", icon: <FaEnvelope /> },
  ];

  /* ================= SCROLL LOCK ================= */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  /* ================= CLOSE ON ESC KEY ================= */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -72;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <>
      {/* ================= FIXED NAVBAR BAR ================= */}
      <div className="fixed top-0 left-0 w-full z-[100] py-3 px-3 sm:px-4 backdrop-blur-md bg-black/70 border-b border-white/5">
        <div className="absolute inset-0 flex justify-center">
          <div className="w-full max-w-5xl bg-gradient-to-r blur-md opacity-20 pointer-events-none" />
        </div>

        <div className="relative z-50 flex items-center justify-between mx-auto w-full max-w-5xl">
          {/* Logo */}
          <div className="text-lg sm:text-xl font-bold text-orange-500 ml-1">
            asyncnikhil.in
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden focus:outline-none mr-1 w-10 h-10 flex items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/5 hover:bg-orange-500/15 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-center items-center gap-[5px]">
              <span className={`block w-5 h-[2px] bg-orange-500 rounded-full transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-[2px] bg-orange-500 rounded-full transition-all duration-300 ${isOpen ? "scale-x-0 opacity-0" : ""}`} />
              <span className={`block w-5 h-[2px] bg-orange-500 rounded-full transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex glass-navbar items-center px-6 py-2 rounded-md border backdrop-blur-lg bg-black/30 shadow-md">
            <div className="flex space-x-6 text-sm font-medium text-white">
              {navLinks.map((link) => (
                <NavHashLink
                  key={link.id}
                  smooth
                  to={link.to}
                  scroll={(el) => scrollWithOffset(el)}
                  className={`px-2 py-1 rounded-md transition ${
                    getActiveId(link.id) ? "text-orange-400" : "hover:text-orange-400"
                  }`}
                >
                  {link.name}
                </NavHashLink>
              ))}
            </div>
          </nav>

          {/* Desktop Resume */}
          <div className="hidden md:block w-40 relative group rounded-md bg-gradient-to-br from-orange-500 to-red-500 shadow-lg mr-2 sm:mr-5">
            <a
              href="/resume.pdf"
              download="Nikhil_Prajapati_Resume.pdf"
              className="block text-white font-medium text-sm px-4 py-2 rounded-md transition-all duration-300 text-center group-hover:bg-white group-hover:text-orange-500"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* ================= MOBILE BACKDROP ================= */}
      <div
        className={`fixed inset-0 z-[200] md:hidden bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* ================= MOBILE SLIDE-IN PANEL ================= */}
      <div
        ref={panelRef}
        className={`fixed top-0 right-0 w-[78%] max-w-[300px] h-full z-[201] md:hidden overflow-hidden
        transform transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Panel background with gradient */}
        <div className="absolute inset-0 bg-[#060a12]" />
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-orange-500/8 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1e90ff]/5 to-transparent pointer-events-none" />
        <div className="absolute top-20 -left-10 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative h-full flex flex-col">

          {/* Header */}
          <div className="flex items-center justify-between px-5 pt-5 pb-4">
            <div>
              <div className="text-base font-bold text-orange-500">asyncnikhil.in</div>
              <p className="text-[10px] text-gray-500 mt-0.5 tracking-wider uppercase">Full Stack Developer</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 text-gray-400 hover:text-orange-500 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-200"
              aria-label="Close menu"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="1" y1="1" x2="13" y2="13" />
                <line x1="13" y1="1" x2="1" y2="13" />
              </svg>
            </button>
          </div>

          {/* Divider */}
          <div className="mx-5 h-px bg-gradient-to-r from-orange-500/20 via-white/5 to-transparent" />

          {/* Navigation */}
          <nav className="flex-1 px-3 pt-5 space-y-0.5">
            <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-medium px-4 mb-2">Navigation</p>
            {navLinks.map((link, idx) => {
              const isActive = getActiveId(link.id);
              return (
                <NavHashLink
                  key={link.id}
                  smooth
                  to={link.to}
                  scroll={(el) => scrollWithOffset(el)}
                  onClick={() => setIsOpen(false)}
                  className={`
                    group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                    ${isActive
                      ? "text-orange-400 bg-orange-500/10 border border-orange-500/20 shadow-[0_0_12px_rgba(249,115,22,0.08)]"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.03] border border-transparent"
                    }
                  `}
                  style={{
                    transform: isOpen ? "translateX(0)" : "translateX(20px)",
                    opacity: isOpen ? 1 : 0,
                    transition: `transform 0.3s ease ${idx * 60 + 100}ms, opacity 0.3s ease ${idx * 60 + 100}ms, background-color 0.2s, color 0.2s, border-color 0.2s`,
                  }}
                >
                  <span className={`text-xs transition-colors duration-200 ${isActive ? "text-orange-500" : "text-gray-600 group-hover:text-gray-400"}`}>
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_6px_rgba(249,115,22,0.6)]" />
                  )}
                </NavHashLink>
              );
            })}
          </nav>

          {/* Bottom Section */}
          <div className="px-5 pb-6">
            {/* Social Links */}
            <div className="mb-5">
              <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-medium mb-3">Connect</p>
              <div className="flex items-center gap-2">
                {[
                  { icon: <FaGithub />, href: "https://github.com/devNikhil00", label: "GitHub" },
                  { icon: <FaLinkedin />, href: "https://linkedin.com/in/nikhil-prajapati9889/", label: "LinkedIn" },
                  { icon: <FaInstagram />, href: "https://instagram.com/asyncnikhil", label: "Instagram" },
                  { icon: <FaEnvelope />, href: "mailto:nikhilprajapatistaic@gmail.com", label: "Email" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    title={social.label}
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/8 text-gray-500 hover:text-orange-400 hover:border-orange-500/25 hover:bg-orange-500/5 transition-all duration-200 text-sm"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-5" />

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download="Nikhil_Prajapati_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="group relative flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold overflow-hidden shadow-[0_4px_20px_rgba(249,115,22,0.2)] hover:shadow-[0_4px_30px_rgba(249,115,22,0.35)] transition-shadow duration-300"
            >
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <FaFileDownload className="text-xs relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </a>

            {/* Copyright */}
            <p className="text-center text-[9px] text-gray-700 mt-4 tracking-wide">
              © {new Date().getFullYear()} asyncnikhil.in
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
