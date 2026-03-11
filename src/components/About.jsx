import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 pt-10 pb-16 bg-gradient-to-br from-black via-[#0a0f1c] to-[#0f0f0f] text-white"
    >
      <div className="max-w-6xl mx-auto text-center space-y-16">
        {/* 🧑‍💻 About Me Section */}
        <div>
          <p className="text-sm text-orange-500 font-semibold mb-2 tracking-wider uppercase">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Who <span className="text-orange-500">I Am</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I’m{" "}
            <span className="text-orange-400 font-medium">
              Nikhil Prajapati
            </span>
            , a passionate <strong>Full Stack Developer</strong> and Computer
            Science graduate who enjoys building clean, scalable, and visually
            appealing web applications using the <strong>MERN stack</strong>.
            <br />
            <br />
            I’m currently focused on improving my React, Node.js, and MongoDB
            skills, creating modern projects, and preparing for full-time
            opportunities where I can collaborate with experienced teams and
            contribute to impactful products.
          </p>
        </div>

        {/* 🎓 Certificates Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-10 tracking-wide">
            📜 Certificates
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Network Technician Career Path",
                platform: "Cisco Networking Academy • 2024",
                img: "/certificates/networking-cisco.jpg",
                link: "https://www.netacad.com/career-paths/network-technician",
              },
              {
                title: "Java Programmer Certification",
                platform: "Infosys Springboard • 2024",
                img: "/certificates/infosys-java.jpg",
                link: "https://www.infosys.com/about/springboard.html",
              },
              {
                title: "MongoDB Node.js Developer Path",
                platform: "MongoDB University • 2025",
                img: "/certificates/mongodb-nodejs.jpg",
                link: "https://learn.mongodb.com/learning-paths/mongodb-nodejs-developer-path",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden  
                          bg-shadow-md hover:shadow-[0_0_10px_#1e90ff80] transition-shadow duration-500 border border-[#1e90ff30] hover:border-[#1e90ff]"
              >
                <div className="overflow-hidden">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-left">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-gray-400 mb-3">{cert.platform}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-1 bg-orange-500 text-black font-medium rounded 
                               hover:bg-orange-400 transition-colors duration-300"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🎯 Career Goals Section */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            🎯 What I'm Looking For
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I’m currently looking for a{" "}
            <span className="text-orange-400 font-medium">
              Full Stack Developer
            </span>
            or{" "}
            <span className="text-orange-400 font-medium">
              Frontend Developer
            </span>{" "}
            role where I can contribute to meaningful projects, grow with a
            talented team, and deliver clean, efficient, and scalable web
            applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
