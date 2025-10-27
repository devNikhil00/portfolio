import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-6 py-20 bg-gradient-to-br from-black via-[#0a0f1c] to-[#0f0f0f] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-orange-500 font-semibold mb-2 text-center">Let’s Connect</p>
        <h2 className="text-4xl font-bold text-center mb-12">
          Get In <span className="text-orange-500">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 gap-y-12">
          {/* ---------- LEFT: FORM ---------- */}
          <div className="border border-blue-500/30 p-6 rounded-lg text-sm shadow-md hover:shadow-blue-500/30 transition">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  required
                  className="w-full mt-1 px-4 py-2 bg-transparent text-zinc-300 border border-gray-700 rounded-md 
                             focus:outline-none focus:ring-1 focus:ring-blue-400/50 placeholder:text-gray-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-1 px-4 py-2 bg-transparent text-zinc-300 border border-gray-700 rounded-md 
                             focus:outline-none focus:ring-1 focus:ring-blue-400/50 placeholder:text-gray-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Mobile</label>
                <input
                  type="tel"
                  className="w-full mt-1 px-4 py-2 bg-transparent text-zinc-300 border border-gray-700 rounded-md 
                             focus:outline-none focus:ring-1 focus:ring-blue-400/50 placeholder:text-gray-500"
                  placeholder="+91-9876543210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  rows="4"
                  required
                  className="w-full mt-1 px-4 py-2 bg-transparent text-zinc-300 border border-gray-700 rounded-md 
                             focus:outline-none focus:ring-1 focus:ring-blue-400/50 placeholder:text-gray-500"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-black font-medium px-6 py-2 rounded-md 
                           border border-orange-400 hover:bg-orange-400 hover:scale-103 
                           transition-transform duration-300 shadow-md hover:shadow-orange-500/40 hover:"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ---------- RIGHT: INFO ---------- */}
          <div className="flex flex-col justify-center space-y-6 md:px-10">
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-2">Why Connect With Me?</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you want to collaborate on a project, need help with a development challenge, or just want to network — 
                I’d love to hear from you! I’m always open to meaningful conversations about web development and tech innovation.
              </p>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="text-orange-400 text-lg" />
              <div>
                <p className="text-lg font-medium">Email</p>
                <a href="mailto:nikhilprajapatistaic@example.com" className="text-orange-400 hover:underline">
                  nikhilprajapatistaic@example.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <FaPhone className="text-orange-400 text-lg" />
              <div>
                <p className="text-lg font-medium">Phone</p>
                <p className="text-orange-400">+91-8423286055</p>
              </div>
            </div>

            {/* 🌐 Social Links */}
            <div className="text-gray-300">
              <p className="text-lg font-medium mb-2">Follow Me</p>
              <div className="flex items-center gap-5 text-xl mt-2">
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" 
                   className="hover:text-orange-400 hover:scale-110 transition"><FaLinkedin /></a>
                <a href="https://github.com/your-username" target="_blank" rel="noreferrer" 
                   className="hover:text-orange-400 hover:scale-110 transition"><FaGithub /></a>
                <a href="https://instagram.com/your-handle" target="_blank" rel="noreferrer" 
                   className="hover:text-orange-400 hover:scale-110 transition"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
