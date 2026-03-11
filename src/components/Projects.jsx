import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { PROJECTS_DATA } from "../constants/projectsData";
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaCheckCircle, FaHardHat } from "react-icons/fa";
import "./css/Projects.css";

/* ── animation helpers ── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Projects = () => {
  const completed = PROJECTS_DATA.filter((p) => p.status === "completed").length;

  return (
    <section id="projects" className="px-4 sm:px-6 pt-10 pb-16 text-white">
      {/* ── Header ── */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-xs uppercase tracking-wider text-orange-500 font-semibold mb-2">
          Portfolio
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Featured <span className="text-orange-500">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm">
          A collection of projects that showcase my skills across front-end,
          back-end, and full-stack development.
        </p>

        {/* stats bar */}
        <div className="flex items-center justify-center gap-6 mt-6 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            {completed} Completed
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            {PROJECTS_DATA.length - completed} In Progress
          </span>
          <span className="text-gray-600">|</span>
          <span>{PROJECTS_DATA.length} Total</span>
        </div>
      </div>

      {/* ── Project Grid ── */}
      <motion.div
        className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {PROJECTS_DATA.map((project, idx) => (
          <motion.article
            key={project.id}
            variants={cardVariants}
            className="group rounded-xl border border-[#1e90ff30] hover:border-[#1e90ff] bg-[#0d1117]/60 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_20px_#1e90ff40] flex flex-col overflow-hidden"
          >
            {/* image */}
            <div className="relative overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className="w-full aspect-video object-contain bg-[#0a0e17] transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                  e.target.parentElement.classList.add("flex", "items-center", "justify-center", "min-h-[192px]", "bg-[#0d1117]");
                  const placeholder = document.createElement("div");
                  placeholder.className = "text-center p-4";
                  placeholder.innerHTML = `<p class="text-2xl mb-1">\ud83d\udcf8</p><p class="text-[10px] text-gray-500">Screenshot coming soon</p>`;
                  e.target.parentElement.appendChild(placeholder);
                }}
              />
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* project number */}
              <span className="absolute top-3 left-3 text-[10px] font-mono font-bold bg-black/60 text-gray-400 px-2 py-0.5 rounded-md border border-[#1e90ff30]">
                #{String(idx + 1).padStart(2, "0")}
              </span>

              {/* status badge */}
              <span
                className={`absolute top-3 right-3 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md border ${
                  project.status === "completed"
                    ? "bg-green-500/15 text-green-400 border-green-500/40 shadow-[0_0_8px_rgba(34,197,94,0.2)]"
                    : "bg-yellow-500/15 text-yellow-400 border-yellow-500/40 shadow-[0_0_8px_rgba(234,179,8,0.2)]"
                }`}
              >
                {project.status === "completed" ? (
                  <FaCheckCircle className="text-[9px]" />
                ) : (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400" />
                  </span>
                )}
                {project.status === "completed" ? "Completed" : "In Progress"}
              </span>

              {/* quick actions (visible on hover) */}
              <div className="absolute bottom-3 right-3 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    title="View Source Code"
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-black/70 border border-[#1e90ff50] text-gray-300 hover:text-white hover:border-[#1e90ff] transition-colors"
                  >
                    <FaGithub className="text-sm" />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    title="Live Demo"
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-black/70 border border-[#1e90ff50] text-gray-300 hover:text-white hover:border-[#1e90ff] transition-colors"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
            </div>

            {/* content */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-1.5 group-hover:text-orange-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-2">
                {project.shortDesc}
              </p>

              {/* tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-[#1e90ff10] text-blue-400 border border-[#1e90ff20] font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="text-[10px] px-2 py-0.5 rounded-md text-gray-500">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              {/* view details */}
              <Link
                to={`/project/${project.id}`}
                className="relative inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 overflow-hidden rounded-lg text-sm font-semibold transition-all duration-300 group/btn bg-gradient-to-r from-orange-500/20 to-orange-600/10 text-orange-400 border border-orange-500/30 hover:from-orange-500 hover:to-orange-600 hover:text-white hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Details
                  <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                </span>
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default React.memo(Projects);
