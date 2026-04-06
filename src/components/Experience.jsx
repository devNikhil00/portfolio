import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

/* ================= DATA ================= */

const EXPERIENCE_DATA = [
  {
    role: "MERN Stack Developer Intern",
    company: "ASV Consulting Services",
    location: "Noida, India",
    duration: "Nov 2024 – Present",
    accentColor: "orange",
    bullets: [
      "Working on the development of an e-commerce platform using React.js, Node.js, Express.js, and MongoDB.",
      "Implementing backend features including JWT-based authentication and Cloudinary media handling.",
      "Developing responsive UI workflows and contributing to admin interfaces for product and order management.",
      "Collaborating with team members to improve code quality and follow best practices.",
    ],
    techTags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
  },
  {
    role: "Web Developer Intern",
    company: "Uptoskills Pvt. Ltd",
    location: "New Delhi, India",
    duration: "July 2024 – Oct 2024",
    accentColor: "blue",
    bullets: [
      "Built user-facing modules for an HR Dashboard using the MERN stack.",
      "Developed responsive UI components and integrated APIs for smoother data flow.",
      "Resolved UI issues and enhanced overall user experience.",
    ],
    techTags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
];

/* ================= ANIMATION VARIANTS ================= */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: (isLeft) => ({ opacity: 0, x: isLeft ? -30 : 30 }),
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ================= COLOR MAP ================= */

const ACCENT = {
  orange: {
    dot: "bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]",
    iconBg: "bg-orange-500/10 border-orange-500/30",
    iconText: "text-orange-500",
    line: "from-orange-500/40 to-orange-500/0",
    tag: "border-orange-500/20 text-orange-400 bg-orange-500/5",
    bullet: "bg-orange-500",
  },
  blue: {
    dot: "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]",
    iconBg: "bg-blue-500/10 border-blue-500/30",
    iconText: "text-blue-500",
    line: "from-blue-500/40 to-blue-500/0",
    tag: "border-blue-500/20 text-blue-400 bg-blue-500/5",
    bullet: "bg-blue-500",
  },
};

/* ================= COMPONENT ================= */

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-4 sm:px-6 pt-10 pb-16 bg-gradient-to-br from-black via-[#0a0f1c] to-[#0f0f0f] text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-orange-500 font-semibold mb-2 tracking-wider uppercase">
          Work History
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          My <span className="text-orange-500">Experience</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Professional internships where I've built real-world products and sharpened my engineering skills.
        </p>

        {/* Timeline */}
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {EXPERIENCE_DATA.map((exp, idx) => {
            const accent = ACCENT[exp.accentColor] || ACCENT.orange;
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                custom={isLeft}
                className="relative"
              >
                <div className="grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] gap-4 sm:gap-6 items-stretch mb-6">
                  {/* ── Timeline column (center on md+) ── */}
                  <div className="col-start-1 row-start-1 md:col-start-2 flex flex-col items-center shrink-0">
                    <div className={`w-3.5 h-3.5 rounded-full ${accent.dot} mt-7 z-10`} />
                    <div className={`w-px flex-1 bg-gradient-to-b ${accent.line} min-h-[24px]`} />
                  </div>

                  {/* ── Card (alternating left/right on md+) ── */}
                  <div
                    className={`col-start-2 row-start-1 rounded-xl p-5 sm:p-6 bg-[#0d1117]/60 backdrop-blur-sm border border-[#1e90ff30] hover:border-[#1e90ff] transition-all duration-500 hover:shadow-[0_0_15px_#1e90ff40] text-left group ${
                      isLeft ? "md:col-start-1 md:mr-2" : "md:col-start-3 md:ml-2"
                    }`}
                  >
                  {/* Top row: Icon + Role */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-3">
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${accent.iconBg} ${accent.iconText} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <FaBriefcase className="text-xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-orange-400 font-medium text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Location & Duration */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 text-sm text-gray-400 mb-4 pl-0 sm:pl-[52px]">
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-red-400 text-xs shrink-0" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-2 shrink-0">
                      <FaCalendarAlt className="text-green-400 text-xs" />
                      {exp.duration}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-4 pl-0 sm:pl-[52px]">
                    {exp.bullets.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <span className={`w-1.5 h-1.5 rounded-full ${accent.bullet} mt-[7px] shrink-0`} />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pl-0 sm:pl-[52px]">
                    {exp.techTags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-[11px] font-medium px-2.5 py-1 rounded-md border ${accent.tag} transition-colors duration-300`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
