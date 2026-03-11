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

          {/* ——— Image (left) + Quick Info (right) ——— */}
          <FadeUp delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-8">
              {/* Image — 3/5 */}
              <div className="md:col-span-3 relative rounded-xl overflow-hidden border border-[#1e90ff30] hover:border-[#1e90ff] transition-all duration-500 hover:shadow-[0_0_10px_#1e90ff80] group">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full object-contain bg-[#0a0e17] group-hover:scale-[1.02] transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                    e.target.parentElement.classList.add("flex", "items-center", "justify-center", "min-h-[200px]", "bg-[#0d1117]");
                    const placeholder = document.createElement("div");
                    placeholder.className = "text-center p-6";
                    placeholder.innerHTML = `<p class="text-3xl mb-2">📸</p><p class="text-xs text-gray-500">Screenshot coming soon</p>`;
                    e.target.parentElement.appendChild(placeholder);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                {/* Floating project number */}
                <span className="absolute top-3 left-3 text-[10px] font-bold text-white/40 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
                  #{projectNumber}
                </span>
              </div>

              {/* Quick Info + Buttons — 2/5 */}
              <div className="md:col-span-2 flex flex-col gap-4">
                <Card className="flex-1">
                  <h3 className="text-sm font-bold text-orange-400 mb-3 uppercase tracking-wider">
                    Project Info
                  </h3>
                  <div className="space-y-2.5 text-sm">
                    {[
                      ["Status", isCompleted ? "Completed" : "In Progress"],
                      [
                        "Type",
                        project.techStack.includes("React.js") ||
                        project.techStack.includes("Node.js")
                          ? "Full Stack"
                          : "Frontend",
                      ],
                    ].map(([label, value], i) => (
                      <div key={i}>
                        <div className="flex justify-between items-center py-0.5">
                          <span className="text-gray-500">{label}</span>
                          <span
                            className={
                              label === "Status"
                                ? isCompleted
                                  ? "text-green-400"
                                  : "text-yellow-400"
                                : "text-gray-300"
                            }
                          >
                            {value}
                          </span>
                        </div>
                        <div className="h-px bg-white/5" />
                      </div>
                    ))}
                    <div className="flex justify-between items-center py-0.5">
                      <span className="text-gray-500">Demo</span>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-400 hover:text-orange-300 text-sm"
                        >
                          View Live ↗
                        </a>
                      ) : (
                        <span className="text-gray-500">Coming Soon</span>
                      )}
                    </div>
                    <div className="h-px bg-white/5" />
                    <div className="flex justify-between items-center py-0.5">
                      <span className="text-gray-500">Source</span>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-400 hover:text-orange-300 text-sm"
                      >
                        GitHub ↗
                      </a>
                    </div>
                    {project.adminLink && (
                      <>
                        <div className="h-px bg-white/5" />
                        <div className="flex justify-between items-center py-0.5">
                          <span className="text-gray-500">Admin</span>
                          <a
                            href={project.adminLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-400 hover:text-orange-300 text-sm"
                          >
                            Admin Panel ↗
                          </a>
                        </div>
                      </>
                    )}
                    {project.backendGithub && (
                      <>
                        <div className="h-px bg-white/5" />
                        <div className="flex justify-between items-center py-0.5">
                          <span className="text-gray-500">Backend</span>
                          <a
                            href={project.backendGithub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-400 hover:text-orange-300 text-sm"
                          >
                            GitHub ↗
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </Card>

                {/* Action Buttons */}
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
              </div>
            </div>
          </FadeUp>

          {/* ——— Content Grid ——— */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Left: About + Features (3/5) */}
            <div className="lg:col-span-3 space-y-8">

              {/* About the Project */}
              <FadeUp delay={0.15}>
                <Card>
                  <p className="text-xs text-orange-500 font-semibold mb-1 tracking-wider uppercase">
                    Overview
                  </p>
                  <h2 className="text-lg font-bold text-white mb-4">
                    About the <span className="text-orange-500">Project</span>
                  </h2>
                  <p className="text-gray-400 text-sm leading-[1.8] whitespace-pre-line">
                    {project.longDesc}
                  </p>
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

            {/* Right: Tech Stack (2/5) */}
            <div className="lg:col-span-2 space-y-6">
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
                        {project.techStack.includes("React.js") || project.techStack.includes("Node.js") ? "FS" : "FE"}
                      </p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">
                        {project.techStack.includes("React.js") || project.techStack.includes("Node.js") ? "Full Stack" : "Frontend"}
                      </p>
                    </div>
                  </div>
                </Card>
              </FadeUp>
            </div>
          </div>

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
