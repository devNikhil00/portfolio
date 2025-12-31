import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMongoose,
  SiRedux,
  SiDocker,
  SiMysql,
  SiPostman,
  SiGithubactions,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import { BiShieldQuarter } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbBrandDocker, TbBrandVscode } from "react-icons/tb";

/* ================= SKILL DATA ================= */

const SKILL_CATEGORIES = {
  Languages: [
    { id: "js", icon: <FaJs className="text-yellow-400" />, label: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { id: "java", icon: <FaJava className="text-blue-500" />, label: "Java", link: "https://docs.oracle.com/javase/tutorial/" },
  ],

  Frontend: [
    { id: "html", icon: <FaHtml5 className="text-orange-500" />, label: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { id: "css", icon: <FaCss3Alt className="text-blue-500" />, label: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { id: "react", icon: <FaReact className="text-cyan-400" />, label: "React", link: "https://react.dev/" },
    { id: "tailwind", icon: <SiTailwindcss className="text-sky-400" />, label: "Tailwind CSS", link: "https://tailwindcss.com/docs" },
    { id: "redux", icon: <SiRedux className="text-purple-500" />, label: "Redux", link: "https://redux.js.org/introduction/getting-started" },
  ],

  Backend: [
    { id: "node", icon: <FaNodeJs className="text-green-500" />, label: "Node.js", link: "https://nodejs.org/en/docs" },
    { id: "express", icon: <SiExpress className="text-gray-300" />, label: "Express.js", link: "https://expressjs.com/en/starter/installing.html" },
    { id: "jwt", icon: <BiShieldQuarter className="text-red-400" />, label: "JWT Auth", link: "https://jwt.io/introduction" },
    { id: "api-security", icon: <RiLockPasswordLine className="text-orange-400" />, label: "API Security", link: "https://owasp.org/Top10/" },
  ],

  Database: [
    { id: "mongodb", icon: <SiMongodb className="text-green-400" />, label: "MongoDB", link: "https://www.mongodb.com/docs/" },
    { id: "mongoose", icon: <SiMongoose className="text-orange-300" />, label: "Mongoose", link: "https://mongoosejs.com/docs/guide.html" },
    { id: "mysql", icon: <SiMysql className="text-blue-400" />, label: "MySQL", link: "https://dev.mysql.com/doc/" },
  ],

  DevOps: [
    { id: "docker", icon: <SiDocker className="text-blue-400" />, label: "Docker", link: "https://docs.docker.com/get-started/" },
    { id: "gha", icon: <SiGithubactions className="text-gray-300" />, label: "GitHub Actions", link: "https://docs.github.com/en/actions" },
    { id: "postman", icon: <SiPostman className="text-orange-400" />, label: "Postman", link: "https://learning.postman.com/docs/getting-started/introduction/" },
    { id: "vercel", icon: <SiVercel className="text-white" />, label: "Vercel", link: "https://vercel.com/docs" },
    { id: "netlify", icon: <SiNetlify className="text-cyan-400" />, label: "Netlify", link: "https://docs.netlify.com/" },
  ],

  Tools: [
    { id: "github", icon: <FaGithub className="text-white" />, label: "GitHub", link: "https://docs.github.com/en" },
    { id: "docker-desktop", icon: <TbBrandDocker className="text-blue-400" />, label: "Docker Desktop", link: "https://docs.docker.com/desktop/" },
    { id: "vscode", icon: <TbBrandVscode className="text-blue-400" />, label: "VS Code", link: "https://code.visualstudio.com/docs" },
    { id: "mysql-workbench", icon: <SiMysql className="text-blue-500" />, label: "MySQL Workbench", link: "https://dev.mysql.com/doc/workbench/en/" },
  ],
};

/* ================= COMPONENT ================= */

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-4 py-20 bg-gradient-to-br from-black via-[#0a0f1c] to-[#0f0f0f] text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-orange-500 font-semibold mb-2">
          Tech Stack
        </p>
        <h2 className="text-4xl font-bold mb-6">
          My <span className="text-orange-500">Skills</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Technologies, tools, and frameworks I use to build modern, scalable,
          and efficient web applications.
        </p>

        {/* Categories */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-4">
          {Object.entries(SKILL_CATEGORIES).map(([category, skills]) => (
            <section
              key={category}
              className="rounded-xl p-6 bg-transparent border border-[#1e90ff30] hover:border-[#1e90ff] transition-shadow duration-500 hover:shadow-[0_0_10px_#1e90ff80]"
            >
              <h3 className="text-lg font-semibold text-orange-400 mb-4">
                {category}
              </h3>

              <div className="flex flex-wrap gap-4 justify-center">
                {skills.map((skill) => (
                  <a
                    key={skill.id}
                    href={skill.link}
                    target="_blank"
                    rel="noreferrer"
                    title={`View ${skill.label} Documentation`}
                    className="group flex items-center gap-3 p-2 rounded-lg border border-[#1e90ff30] hover:border-[#1e90ff] transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-[0_0_10px_#1e90ff80]"
                  >
                    <span className="text-sm group-hover:text-blue-400 transition-colors duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-sm text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                      {skill.label}
                    </span>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Skills);
