import React from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaPhone,  
  FaTwitter,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-6 py-20 bg-gradient-to-br from-black via-[#0a0f1c] to-[#0f0f0f] text-white "
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-orange-500 font-semibold mb-2 text-center">Let’s Connect</p>
        <h2 className="text-4xl font-bold text-center mb-12">
          Get In <span className="text-orange-500">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* ---------- LEFT: FORM ---------- */}
          <div className='border border-[#1e8fff6c] p-5 rounded-md text-sm'>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-2 bg-transparent text-zinc-400 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1e8fff3a]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 px-4 py-2 text-zinc-400 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1e8fff3a]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Mobile</label>
                <input
                  type="tel"
                  className="w-full mt-1 px-4 py-2 text-zinc-400 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1e8fff3a]"
                  placeholder="+91-9876543210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  rows="4"
                  className="w-full mt-1 px-4 py-2 text-zinc-400 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1e8fff6c]"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="border border-[#1e8fff3a] bg-[#1e8fff18] text-zinc-400 hover:text-orange-400 px-6 py-2 rounded-md transition outline-none"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ---------- RIGHT: WHY + INFO ---------- */}
          <div className="flex flex-col justify-center space-y-6 md:px-10">
            {/* 🧠 WHY CONNECT */}
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-2">Why Connect With Me?</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you’re looking to collaborate on an exciting project, need help with a development challenge, or just want to network — I’d love to hear from you. I’m passionate about building clean, scalable apps and always open to new opportunities.
              </p>
            </div>

            {/* 📧 EMAIL */}
            <div className="text-gray-300">
              <p className="text-lg font-medium">Email</p>
              <a href="mailto:nikhilprajapatistaic@example.com" className="text-orange-400 hover:underline">
                nikhilprajapatistaic@example.com
              </a>
            </div>

            {/* 📞 PHONE */}
            <div className="text-gray-300">
              <p className="text-lg font-medium">Phone</p>
              <p className="text-orange-400">+91-8423286055</p>
            </div>

            {/* 🌐 SOCIAL LINKS */}
            {/* <div className="text-gray-300">
              <p className="text-lg font-medium">Follow Me</p>
              <div className="flex items-center gap-6 text-2xl mt-2">
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" style={{ color: '#0077b5' }} className="hover:scale-110 transition"><FaLinkedin /></a>
                <a href="https://github.com/your-username" target="_blank" rel="noreferrer" style={{ color: '#fff' }} className="hover:scale-110 transition"><FaGithub /></a>
                <a href="https://twitter.com/your-handle" target="_blank" rel="noreferrer" style={{ color: '#1DA1F2' }} className="hover:scale-110 transition"><FaTwitter /></a>
                <a href="https://instagram.com/your-handle" target="_blank" rel="noreferrer" style={{ color: '#E1306C' }} className="hover:scale-110 transition"><FaInstagram /></a>
                <a href="mailto:nikhil@example.com" style={{ color: '#D44638' }} className="hover:scale-110 transition"><FaEnvelope /></a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
