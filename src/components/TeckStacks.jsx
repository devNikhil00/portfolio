import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMongoose,
} from 'react-icons/si';
import { BiShieldQuarter } from 'react-icons/bi';

const TechStack = () => {
  const technologies = [
    { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML5' },
    { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS3' },
    { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript' },
    { icon: <FaReact className="text-cyan-400" />, name: 'React' },
    { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
    { icon: <SiExpress className="text-gray-300" />, name: 'Express.js' },
    { icon: <SiMongodb className="text-green-400" />, name: 'MongoDB' },
    { icon: <SiMongoose className="text-orange-300" />, name: 'Mongoose' },
    { icon: <SiTailwindcss className="text-sky-400" />, name: 'Tailwind CSS' },
    { icon: <FaJava className="text-blue-500" />, name: 'Java' },
    { icon: <BiShieldQuarter className="text-red-400" />, name: 'JWT' },
    { icon: <FaGitAlt className="text-red-500" />, name: 'Git' },
    { icon: <FaGithub className="text-white" />, name: 'GitHub' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 bg-transparent border border-[#1e90ff30] rounded-lg hover:border-[#1e90ff] transition-all duration-300 group"
        >
          <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
            {tech.icon}
          </div>
          <span className="text-sm text-gray-300 group-hover:text-orange-400 transition-colors duration-300">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
