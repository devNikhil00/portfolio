import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 py-20 bg-gradient-to-br  from-black via-[#0a0f1c] to-[#0f0f0f] text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* 🧑‍💻 Intro */}
        <p className="text-sm text-orange-500 font-semibold mb-2">About Me</p>
        <h2 className="text-4xl font-bold mb-6">
          Who <span className="text-orange-500">I Am</span>
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
          I’m <span className="text-orange-400 font-medium">Nikhil Prajapati</span>, a passionate full-stack developer and a recent Computer Science graduate. I love building clean, scalable, and modern web applications using the <strong>MERN stack</strong>.
          <br />
          <br />
          I'm currently focusing on improving my React & Node.js skills, building portfolio projects, and preparing for real-world developer opportunities.
        </p>

        {/* ⚙️ Tech Stack Highlights */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-4">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span className=" border border-orange-500/20 px-4 py-2 rounded-full group-hover:text-blue-400 transition-colors duration-300">React</span>
            <span className=" border border-orange-500/20 px-4 py-2 rounded-full group-hover:text-blue-400 transition-colors duration-300">Node.js</span>
            <span className=" border border-orange-500/20 px-4 py-2 rounded-full group-hover:text-blue-400 transition-colors duration-300">Express.js</span>
            <span className=" border border-orange-500/20 px-4 py-2 rounded-full group-hover:text-blue-400 transition-colors duration-300">MongoDB</span>
            <span className=" border border-orange-500/20 px-4 py-2 rounded-full group-hover:text-blue-400 transition-colors duration-300">JavaScript</span>
            <span className=" border border-orange-500/20 px-4 py-2 rounded-full group-hover:text-blue-400 transition-colors duration-300">Tailwind CSS</span>
            <span className=" border border-orange-500/20 px-4 py-2 rounded-full">Git & GitHub</span>
          </div>
        </div>

        {/* 📜 Certificates */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">Certificates</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className=" rounded-xl border border-orange-500/20 shadow-md hover:shadow-orange-500/30 transition-shadow duration-300 p-5">
              <h4 className="text-lg font-semibold text-white mb-2">Full Stack Web Development</h4>
              <p className="text-sm text-gray-400 mb-4">Coursera • 2024</p>
              <a
                href="https://www.coursera.org/verify/your-certificate-id"
                target="_blank"
                className="inline-block px-4 py-1 bg-orange-500 text-black font-medium rounded hover:bg-orange-400 transition"
              >
                View Certificate
              </a>
            </div>

            <div className="rounded-xl border border-orange-500/20 shadow-md hover:shadow-orange-500/30 transition-shadow duration-300 p-5">
              <h4 className="text-lg font-semibold text-white mb-2">React JS Certification</h4>
              <p className="text-sm text-gray-400 mb-4">Udemy • 2024</p>
              <a
                href="https://udemy.com/certificate/your-id"
                target="_blank"
                className="inline-block px-4 py-1 bg-orange-500 text-black font-medium rounded hover:bg-orange-400 transition"
              >
                View Certificate
              </a>
            </div>

            <div className=" rounded-xl border border-orange-500/20 shadow-md hover:shadow-orange-500/30 transition-shadow duration-300 p-5">
              <h4 className="text-lg font-semibold text-white mb-2">MongoDB Basics</h4>
              <p className="text-sm text-gray-400 mb-4">MongoDB University • 2024</p>
              <a
                href="https://university.mongodb.com/your-certificate-id"
                target="_blank"
                className="inline-block px-4 py-1 bg-orange-500 text-black font-medium rounded hover:bg-orange-400 transition"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>

        {/* 🎯 Career Goals */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4">What I'm Looking For</h3>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I’m looking for a full-time role as a <span className="text-orange-400 font-medium">MERN Stack Developer</span> or <span className="text-orange-400 font-medium">Frontend Developer</span> where I can contribute to impactful projects, grow alongside experienced teams, and bring value through clean code and a strong learning mindset.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
