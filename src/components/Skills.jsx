import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMongoose,
} from "react-icons/si";
import { BiShieldQuarter } from "react-icons/bi";

const skillCategories = {
  Languages: [
    { icon: <FaJs className="text-yellow-400" />, label: "JavaScript" },
    { icon: <FaJava className="text-blue-500" />, label: "Java" },
  ],
  Frontend: [
    { icon: <FaHtml5 className="text-orange-500" />, label: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS" },
    { icon: <FaReact className="text-cyan-400" />, label: "React" },
    { icon: <SiTailwindcss className="text-sky-400" />, label: "Tailwind" },
  ],
  Backend: [
    { icon: <FaNodeJs className="text-green-500" />, label: "Node.js" },
    { icon: <SiExpress className="text-gray-300" />, label: "Express" },
    { icon: <BiShieldQuarter className="text-red-400" />, label: "JWT" },
  ],
  Database: [
    { icon: <SiMongodb className="text-green-400" />, label: "MongoDB" },
    { icon: <SiMongoose className="text-orange-300" />, label: "Mongoose" },
  ],
  Tools: [
    { icon: <FaGitAlt className="text-red-500" />, label: "Git" },
    { icon: <FaGithub className="text-white" />, label: "GitHub" },
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-4 py-20 bg-gradient-to-br from-black via-[#0a0f1c] to-[#0f0f0f] text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-orange-500 font-semibold mb-2">Tech Stack</p>
        <h2 className="text-4xl font-bold mb-6">
          My <span className="text-orange-500">Skills</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Tools & technologies I use to build modern web apps.
        </p>

        {/* Category Boxes */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-4">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div
              key={category}
              className="bg-transparent rounded-xl p-6 bg-shadow-md hover:shadow-[0_0_10px_#1e90ff80] transition-shadow duration-500 border border-[#1e90ff30] hover:border-[#1e90ff]"
            >
              <h3 className="text-lg font-semibold text-orange-400 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-4 bg-transparent border-none justify-center">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group flex text-sm items-center gap-3 p-2 rounded-lg bg-transparent hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-[0_0_10px_#1e90ff80] border border-[#1e90ff30] hover:border-[#1e90ff]"
                  >
                    <div className="text-sm group-hover:text-blue-400 transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <p className="text-sm text-gray-300">{skill.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
