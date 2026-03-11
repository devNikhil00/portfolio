import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { PROJECTS_DATA } from "../constants/projectsData";
import { TECH_ICONS } from "../constants/techIcons";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCheckCircle,
  FaHardHat,
  FaArrowRight,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import Footer from "../components/Footer";

/* ——— Reusable card wrapper matching Skills section style ——— */
const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-xl p-5 sm:p-6 bg-transparent border border-[#1e90ff30] hover:border-[#1e90ff] transition-shadow duration-500 hover:shadow-[0_0_10px_#1e90ff80] ${className}`}
  >
    {children}
  </div>
);

/* ——— Fade-up wrapper ——— */
const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS_DATA.find((p) => p.id === id);

  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? PROJECTS_DATA[currentIndex - 1] : null;
  const nextProject =
    currentIndex < PROJECTS_DATA.length - 1
      ? PROJECTS_DATA[currentIndex + 1]
      : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-6">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-400 mb-6 text-sm">
          The project you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <button
          onClick={() => navigate("/")}
          className="text-orange-500 hover:text-orange-400 flex items-center gap-2 text-sm"
        >
          <FaArrowLeft /> Back to Home
        </button>
      </div>
    );
  }

  const isCompleted = project.status === "completed";
  const projectNumber = String(currentIndex + 1).padStart(2, "0");

  return (
    <>
      <div className="min-h-screen text-white px-4 sm:px-6 pb-12">
        <div className="max-w-5xl mx-auto">

          {/* ——— Back Link ——— */}
          <FadeUp>
            <div className="pt-4 pb-6">
              <Link
                to="/#projects"
                className="group inline-flex items-center gap-2 text-xs text-gray-500 hover:text-orange-400 transition-colors"
              >
                <FaArrowLeft className="text-[10px] group-hover:-translate-x-1 transition-transform" />
                Projects
                <span className="text-white/10">/</span>
                <span className="text-gray-400">{project.title}</span>
              </Link>
            </div>
          </FadeUp>

          {/* ——— Title + Status Row ——— */}
          <FadeUp delay={0.05}>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
              <div>
                <p className="text-xs text-orange-500 font-semibold mb-1 tracking-wider uppercase">
                  Project {projectNumber}
                </p>
                <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {project.title}
                </h1>
                <p className="text-sm text-gray-400 mt-1.5 max-w-xl leading-relaxed">
                  {project.shortDesc}
                </p>
              </div>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border shrink-0 self-start ${
                  isCompleted
                    ? "border-green-500/30 text-green-400 bg-green-500/5"
                    : "border-yellow-500/30 text-yellow-400 bg-yellow-500/5"
                }`}
              >
                {isCompleted ? (
                  <FaCheckCircle className="text-[9px]" />
                ) : (
                  <FaHardHat className="text-[9px]" />
                )}
                {isCompleted ? "Completed" : "In Progress"}
              </span>
            </div>
          </FadeUp>

          {/* ——— Hero Image Banner ——— */}
          <FadeUp delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden border border-[#1e90ff30] hover:border-[#1e90ff] transition-all duration-500 hover:shadow-[0_0_15px_#1e90ff40] group mb-8">
              <div className="relative w-full">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full aspect-video object-contain bg-[#0a0e17] group-hover:scale-[1.02] transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                    e.target.parentElement.classList.add("flex", "items-center", "justify-center", "min-h-[280px]", "bg-[#0d1117]");
                    const placeholder = document.createElement("div");
                    placeholder.className = "text-center p-6";
                    placeholder.innerHTML = `<p class="text-4xl mb-3">📸</p><p class="text-sm text-gray-500">Screenshot coming soon</p>`;
                    e.target.parentElement.appendChild(placeholder);
                  }}
                />
              </div>
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
              {/* Badges on image */}
              <span className="absolute top-4 left-4 text-[11px] font-mono font-bold text-white/60 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10">
                #{projectNumber}
              </span>
              <span
                className={`absolute top-4 right-4 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md border ${
                  isCompleted
                    ? "bg-green-500/15 text-green-400 border-green-500/40"
                    : "bg-yellow-500/15 text-yellow-400 border-yellow-500/40"
                }`}
              >
                {isCompleted ? <FaCheckCircle className="text-[9px]" /> : <FaHardHat className="text-[9px]" />}
                {isCompleted ? "Completed" : "In Progress"}
              </span>
              {/* Bottom bar with quick links */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-3 flex items-center justify-between bg-black/60 backdrop-blur-sm border-t border-white/5">
                <span className="text-sm font-medium text-white/80 truncate mr-4">{project.title}</span>
                <div className="flex items-center gap-2 shrink-0">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" title="Source Code" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors">
                      <FaGithub className="text-sm" />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" title="Live Demo" className="w-8 h-8 flex items-center justify-center rounded-lg bg-orange-500/20 hover:bg-orange-500/40 text-orange-400 hover:text-orange-300 transition-colors">
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* ——— Content Grid ——— */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Left: About + Features (3/5) */}
            <div className="lg:col-span-3 space-y-8">

              {/* About the Project — Structured */}
              <FadeUp delay={0.15}>
                <Card>
                  <p className="text-xs text-orange-500 font-semibold mb-1 tracking-wider uppercase">
                    Overview
                  </p>
                  <h2 className="text-lg font-bold text-white mb-4">
                    About the <span className="text-orange-500">Project</span>
                  </h2>

                  {/* Intro paragraph */}
                  <p className="text-gray-400 text-sm leading-[1.8] mb-6">
                    {project.overview}
                  </p>

                  {/* Structured detail blocks */}
                  <div className="space-y-4">
                    {project.details.map((block, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border border-white/5 bg-white/[0.02] p-4 hover:border-orange-500/20 transition-colors duration-300"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                          <h4 className="text-sm font-semibold text-orange-400">
                            {block.title}
                          </h4>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed pl-3.5">
                          {block.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeUp>

              {/* Key Features */}
              <FadeUp delay={0.2}>
                <Card>
                  <p className="text-xs text-orange-500 font-semibold mb-1 tracking-wider uppercase">
                    Highlights
                  </p>
                  <h2 className="text-lg font-bold text-white mb-4">
                    Key <span className="text-orange-500">Features</span>
                  </h2>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm text-gray-300 border-l-2 border-orange-500/40 pl-3 py-1.5 hover:border-orange-500 hover:text-white transition-colors duration-300"
                      >
                        <span className="w-1 h-1 rounded-full bg-orange-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeUp>
            </div>

            {/* Right: Quick Info + Tech Stack + Stats (2/5) */}
            <div className="lg:col-span-2 space-y-6">

              {/* Quick Info */}
              <FadeUp delay={0.2}>
                <Card>
                  <p className="text-xs text-orange-500 font-semibold mb-1 tracking-wider uppercase">
                    Details
                  </p>
                  <h3 className="text-lg font-bold text-white mb-4">
                    Project <span className="text-orange-500">Info</span>
                  </h3>
                  <div className="space-y-2.5 text-sm">
                    {[
                      ["Status", isCompleted ? "Completed" : "In Progress"],
                      [
                        "Type",
                        project.techStack.some(t => ["React.js", "React 18", "React 19", "Next.js 14"].includes(t)) &&
                        project.techStack.some(t => ["Node.js", "Express.js", "Supabase"].includes(t))
                          ? "Full Stack"
                          : "Frontend",
                      ],
                    ].map(([label, value], i) => (
                      <div key={i}>
                        <div className="flex justify-between items-center py-0.5">
                          <span className="text-gray-500">{label}</span>
                          <span className={label === "Status" ? (isCompleted ? "text-green-400" : "text-yellow-400") : "text-gray-300"}>
                            {value}
                          </span>
                        </div>
                        <div className="h-px bg-white/5" />
                      </div>
                    ))}
                    <div className="flex justify-between items-center py-0.5">
                      <span className="text-gray-500">Demo</span>
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 text-sm">View Live ↗</a>
                      ) : (
                        <span className="text-gray-500">Coming Soon</span>
                      )}
                    </div>
                    <div className="h-px bg-white/5" />
                    <div className="flex justify-between items-center py-0.5">
                      <span className="text-gray-500">Source</span>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 text-sm">GitHub ↗</a>
                    </div>
                    {project.adminLink && (
                      <>
                        <div className="h-px bg-white/5" />
                        <div className="flex justify-between items-center py-0.5">
                          <span className="text-gray-500">Admin</span>
                          <a href={project.adminLink} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 text-sm">Admin Panel ↗</a>
                        </div>
                      </>
                    )}
                    {project.backendGithub && (
                      <>
                        <div className="h-px bg-white/5" />
                        <div className="flex justify-between items-center py-0.5">
                          <span className="text-gray-500">Backend</span>
                          <a href={project.backendGithub} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 text-sm">GitHub ↗</a>
                        </div>
                      </>
                    )}
                  </div>
                </Card>
              </FadeUp>

              {/* Action Buttons */}
              <FadeUp delay={0.22}>
                <div className="flex flex-col gap-2.5">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 text-black font-medium text-sm hover:bg-orange-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Live Demo
                      <FaArrowRight className="text-[10px] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-yellow-500/30 text-yellow-400 text-sm font-medium cursor-not-allowed bg-yellow-500/5">
                      <FaHardHat className="text-xs" /> Not Deployed Yet
                    </div>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-[#1e90ff30] hover:border-[#1e90ff] text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_10px_#1e90ff80]"
                  >
                    <FaGithub /> Source Code
                    <FaArrowRight className="text-[10px] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                  {project.adminLink && (
                    <a
                      href={project.adminLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-orange-500/30 hover:border-orange-500 text-orange-400 text-sm font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(249,115,22,0.3)]"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Admin Panel
                      <FaArrowRight className="text-[10px] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  )}
                  {project.backendGithub && (
                    <a
                      href={project.backendGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-[#1e90ff30] hover:border-[#1e90ff] text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_10px_#1e90ff80]"
                    >
                      <FaGithub /> Backend Repo
                      <FaArrowRight className="text-[10px] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  )}
                </div>
              </FadeUp>

              {/* Tech Stack */}
              <FadeUp delay={0.25}>
                <Card>
                  <p className="text-xs text-orange-500 font-semibold mb-1 tracking-wider uppercase">
                    Built With
                  </p>
                  <h3 className="text-lg font-bold text-white mb-4">
                    Tech <span className="text-orange-500">Stack</span>
                  </h3>

                  <div className="flex flex-wrap gap-2.5">
                    {project.techStack.map((tech, idx) => (
                      <div
                        key={idx}
                        className="group flex items-center gap-2 px-3 py-2 rounded-lg border border-[#1e90ff30] hover:border-[#1e90ff] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-[0_0_10px_#1e90ff80] cursor-default"
                      >
                        <span className="text-sm group-hover:text-blue-400 transition-colors duration-300">
                          {TECH_ICONS[tech] || <FaCode className="text-gray-500" />}
                        </span>
                        <span className="text-sm text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeUp>

              {/* Quick Stats */}
              <FadeUp delay={0.3}>
                <Card>
                  <p className="text-xs text-orange-500 font-semibold mb-1 tracking-wider uppercase">
                    At a Glance
                  </p>
                  <h3 className="text-lg font-bold text-white mb-4">
                    Quick <span className="text-orange-500">Stats</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center py-3 rounded-lg border border-white/5 bg-white/[0.02]">
                      <p className="text-xl font-bold text-orange-400">{project.techStack.length}</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">Technologies</p>
                    </div>
                    <div className="text-center py-3 rounded-lg border border-white/5 bg-white/[0.02]">
                      <p className="text-xl font-bold text-orange-400">{project.features.length}</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">Features</p>
                    </div>
                    <div className="text-center py-3 rounded-lg border border-white/5 bg-white/[0.02]">
                      <p className="text-xl font-bold text-orange-400">
                        {isCompleted ? (
                          <FaCheckCircle className="inline text-green-400" />
                        ) : (
                          <FaHardHat className="inline text-yellow-400" />
                        )}
                      </p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">Status</p>
                    </div>
                    <div className="text-center py-3 rounded-lg border border-white/5 bg-white/[0.02]">
                      <p className="text-xl font-bold text-orange-400">
                        {project.techStack.some(t => ["React.js", "React 18", "React 19", "Next.js 14"].includes(t)) && project.techStack.some(t => ["Node.js", "Express.js", "Supabase"].includes(t)) ? "FS" : "FE"}
                      </p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">
                        {project.techStack.some(t => ["React.js", "React 18", "React 19", "Next.js 14"].includes(t)) && project.techStack.some(t => ["Node.js", "Express.js", "Supabase"].includes(t)) ? "Full Stack" : "Frontend"}
                      </p>
                    </div>
                  </div>
                </Card>
              </FadeUp>
            </div>
          </div>

          {/* ——— Full-Width Architecture Section ——— */}
          {(project.architecture || project.roadmap) && (
            <div className="mt-8 space-y-8">

              {/* Architecture / Data Flow (all projects that have it) */}
              {project.architecture && (
                <FadeUp delay={0.35}>
                  <Card>
                    <p className="text-xs text-orange-500 font-semibold mb-1 tracking-wider uppercase">
                      How It Works
                    </p>
                    <h2 className="text-lg font-bold text-white mb-3">
                      Project <span className="text-orange-500">Architecture</span>
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {project.architecture.description}
                    </p>

                    {/* Horizontal flow on desktop, vertical on mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {project.architecture.layers.map((layer, idx) => {
                        const colorMap = {
                          orange: { dot: "bg-orange-500", border: "border-orange-500/30", glow: "shadow-[0_0_8px_rgba(249,115,22,0.3)]", text: "text-orange-400", bg: "bg-orange-500/5" },
                          blue: { dot: "bg-blue-500", border: "border-blue-500/30", glow: "shadow-[0_0_8px_rgba(59,130,246,0.3)]", text: "text-blue-400", bg: "bg-blue-500/5" },
                          cyan: { dot: "bg-cyan-500", border: "border-cyan-500/30", glow: "shadow-[0_0_8px_rgba(6,182,212,0.3)]", text: "text-cyan-400", bg: "bg-cyan-500/5" },
                          green: { dot: "bg-green-500", border: "border-green-500/30", glow: "shadow-[0_0_8px_rgba(34,197,94,0.3)]", text: "text-green-400", bg: "bg-green-500/5" },
                          purple: { dot: "bg-purple-500", border: "border-purple-500/30", glow: "shadow-[0_0_8px_rgba(168,85,247,0.3)]", text: "text-purple-400", bg: "bg-purple-500/5" },
                        };
                        const c = colorMap[layer.color] || colorMap.orange;

                        return (
                          <div key={idx} className="relative">
                            <div className={`rounded-lg border ${c.border} ${c.bg} p-4 h-full hover:border-opacity-60 transition-colors duration-300`}>
                              {/* Layer number + dot */}
                              <div className="flex items-center gap-2 mb-2">
                                <div className={`w-2.5 h-2.5 rounded-full ${c.dot} ${c.glow}`} />
                                <span className={`text-[10px] font-mono font-bold ${c.text} bg-white/5 px-1.5 py-0.5 rounded`}>
                                  {String(idx + 1).padStart(2, "0")}
                                </span>
                              </div>
                              <h4 className={`text-sm font-semibold ${c.text} mb-1.5`}>
                                {layer.name}
                              </h4>
                              <p className="text-gray-400 text-xs leading-relaxed">
                                {layer.desc}
                              </p>
                            </div>
                            {/* Arrow connector (hidden on last item and on mobile) */}
                            {idx < project.architecture.layers.length - 1 && (
                              <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10">
                                <span className="text-white/20 text-xs">→</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </Card>
                </FadeUp>
              )}

              {/* Roadmap System (Naxora-specific) */}
              {project.roadmap && (
                <FadeUp delay={0.4}>
                  <Card>
                    <p className="text-xs text-orange-500 font-semibold mb-1 tracking-wider uppercase">
                      Core System
                    </p>
                    <h2 className="text-lg font-bold text-white mb-3">
                      Roadmap <span className="text-orange-500">System</span>
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {project.roadmap.description}
                    </p>

                    {/* Visual hierarchy flow */}
                    <div className="relative space-y-0">
                      {project.roadmap.levels.map((level, idx) => {
                        const colorMap = {
                          orange: { dot: "bg-orange-500", border: "border-orange-500/30", glow: "shadow-[0_0_8px_rgba(249,115,22,0.3)]", text: "text-orange-400", line: "bg-orange-500/20" },
                          blue: { dot: "bg-blue-500", border: "border-blue-500/30", glow: "shadow-[0_0_8px_rgba(59,130,246,0.3)]", text: "text-blue-400", line: "bg-blue-500/20" },
                          cyan: { dot: "bg-cyan-500", border: "border-cyan-500/30", glow: "shadow-[0_0_8px_rgba(6,182,212,0.3)]", text: "text-cyan-400", line: "bg-cyan-500/20" },
                          green: { dot: "bg-green-500", border: "border-green-500/30", glow: "shadow-[0_0_8px_rgba(34,197,94,0.3)]", text: "text-green-400", line: "bg-green-500/20" },
                          purple: { dot: "bg-purple-500", border: "border-purple-500/30", glow: "shadow-[0_0_8px_rgba(168,85,247,0.3)]", text: "text-purple-400", line: "bg-purple-500/20" },
                        };
                        const c = colorMap[level.color] || colorMap.orange;
                        const isLast = idx === project.roadmap.levels.length - 1;

                        return (
                          <div key={idx} className="relative flex gap-4">
                            {/* Vertical connector */}
                            <div className="flex flex-col items-center shrink-0">
                              <div className={`w-3 h-3 rounded-full ${c.dot} ${c.glow} mt-1 z-10`} />
                              {!isLast && <div className={`w-px flex-1 ${c.line} min-h-[40px]`} />}
                            </div>

                            {/* Content */}
                            <div className={`flex-1 rounded-lg border ${c.border} bg-white/[0.02] p-3.5 mb-3 hover:bg-white/[0.04] transition-colors duration-300`}>
                              <div className="flex items-center gap-2 mb-1">
                                <span className={`text-[10px] font-mono font-bold ${c.text} bg-white/5 px-1.5 py-0.5 rounded`}>
                                  L{idx + 1}
                                </span>
                                <h4 className={`text-sm font-semibold ${c.text}`}>
                                  {level.name}
                                </h4>
                              </div>
                              <p className="text-gray-400 text-xs leading-relaxed">
                                {level.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Card>
                </FadeUp>
              )}

              {/* Future Scope (only for in-progress projects) */}
              {project.futureScope && (
                <FadeUp delay={0.45}>
                  <Card>
                    <p className="text-xs text-orange-500 font-semibold mb-1 tracking-wider uppercase">
                      What's Next
                    </p>
                    <h2 className="text-lg font-bold text-white mb-4">
                      Future <span className="text-orange-500">Scope</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {project.futureScope.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3 hover:border-orange-500/20 transition-colors duration-300"
                        >
                          <FaRocket className="text-orange-500/60 text-xs mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-400 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </FadeUp>
              )}
            </div>
          )}

          {/* ——— Prev / Next ——— */}
          <FadeUp delay={0.35}>
            <div className="mt-12 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
              {prevProject ? (
                <button
                  onClick={() => navigate(`/project/${prevProject.id}`)}
                  className="group flex items-center gap-3 rounded-xl border border-[#1e90ff30] hover:border-[#1e90ff] p-3 sm:p-4 transition-all duration-300 hover:shadow-[0_0_10px_#1e90ff80] text-left"
                >
                  <FaArrowLeft className="text-orange-400 text-xs group-hover:-translate-x-1 transition-transform shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Previous</p>
                    <p className="text-xs sm:text-sm font-medium text-white truncate">{prevProject.title}</p>
                  </div>
                </button>
              ) : (
                <div />
              )}
              {nextProject ? (
                <button
                  onClick={() => navigate(`/project/${nextProject.id}`)}
                  className="group flex items-center justify-end gap-3 rounded-xl border border-[#1e90ff30] hover:border-[#1e90ff] p-3 sm:p-4 transition-all duration-300 hover:shadow-[0_0_10px_#1e90ff80] text-right col-start-2"
                >
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Next</p>
                    <p className="text-xs sm:text-sm font-medium text-white truncate">{nextProject.title}</p>
                  </div>
                  <FaArrowRight className="text-orange-400 text-xs group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              ) : (
                <div />
              )}
            </div>
          </FadeUp>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails;
