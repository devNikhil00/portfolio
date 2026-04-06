import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { FaGraduationCap, FaCalendarAlt, FaUniversity, FaAward, FaSchool } from "react-icons/fa";

/* ================= DATA ================= */

const EDUCATION_DATA = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Dronacharya Group of Institutions, Greater Noida",
    duration: "2021 – 2025",
    score: "7.74 CGPA",
    scoreColor: "text-orange-400 border-orange-500/30 bg-orange-500/5",
    accentColor: "orange",
    icon: <FaGraduationCap className="text-xl" />,
    highlights: ["Full-Stack Development", "Data Structures & Algorithms", "Database Management"],
  },
  {
    degree: "Intermediate (12th)",
    field: "Science Stream (PCM)",
    institution: "St. Anthony Inter College, Pratapgarh",
    duration: "2020 – 2021",
    score: "83.4%",
    scoreColor: "text-blue-400 border-blue-500/30 bg-blue-500/5",
    accentColor: "blue",
    icon: <FaSchool className="text-xl" />,
    highlights: ["Physics", "Chemistry", "Mathematics", "Hindi", "English"],
  },
  {
    degree: "High School (10th)",
    field: "General Studies",
    institution: "St. Anthony Inter College, Pratapgarh",
    duration: "2018 – 2019",
    score: "85.5%",
    scoreColor: "text-green-400 border-green-500/30 bg-green-500/5",
    accentColor: "green",
    icon: <FaSchool className="text-xl" />,
    highlights: ["Hindi", "Computer", "Social Studies", "Science", "Mathematics", "English"],
  },
];

/* ================= ANIMATION VARIANTS ================= */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
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
  },
  blue: {
    dot: "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]",
    iconBg: "bg-blue-500/10 border-blue-500/30",
    iconText: "text-blue-500",
    line: "from-blue-500/40 to-blue-500/0",
    tag: "border-blue-500/20 text-blue-400 bg-blue-500/5",
  },
  green: {
    dot: "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]",
    iconBg: "bg-green-500/10 border-green-500/30",
    iconText: "text-green-500",
    line: "from-green-500/40 to-green-500/0",
    tag: "border-green-500/20 text-green-400 bg-green-500/5",
  },
};

/* ================= COMPONENT ================= */

const Education = () => {
  return (
    <section
      id="education"
      className="px-4 sm:px-6 pt-10 pb-16 bg-gradient-to-br from-black via-[#0a0f1c] to-[#0f0f0f] text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-orange-500 font-semibold mb-2 tracking-wider uppercase">
          Academic Background
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          My <span className="text-orange-500">Education</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          The academic foundation behind my engineering skills.
        </p>

        {/* Timeline */}
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {EDUCATION_DATA.map((edu, idx) => {
            const accent = ACCENT[edu.accentColor] || ACCENT.orange;
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
                  {/* Top row: Icon + Degree + Score */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-4">
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${accent.iconBg} ${accent.iconText} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {edu.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3">
                        <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                          {edu.degree}
                        </h3>
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-bold border ${edu.scoreColor} shrink-0 self-start`}>
                          <FaAward className="text-[9px]" />
                          {edu.score}
                        </span>
                      </div>
                      <p className="text-orange-400 font-medium text-sm mt-0.5">
                        {edu.field}
                      </p>
                    </div>
                  </div>

                  {/* Institution & Year */}
                  <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-2 sm:gap-5 text-sm text-gray-400 mb-4 pl-0 sm:pl-[52px] items-center">
                    <span className="flex items-center gap-2 min-w-0">
                      <FaUniversity className="text-blue-400 text-xs shrink-0" />
                      <span className="truncate">{edu.institution}</span>
                    </span>
                    <span className="flex items-center gap-2 shrink-0 sm:justify-self-end">
                      <FaCalendarAlt className="text-green-400 text-xs" />
                      {edu.duration}
                    </span>
                  </div>

                  {/* Subject tags */}
                  <div className="flex flex-wrap gap-2 pl-0 sm:pl-[52px]">
                    {edu.highlights.map((tag, i) => (
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

export default Education;
