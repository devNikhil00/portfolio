import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';

// ─── EmailJS credentials ────────────────────────────────────────────────────
// Set these in a .env file at the project root:
//   VITE_EMAILJS_SERVICE_ID=service_xxx
//   VITE_EMAILJS_TEMPLATE_ID=template_xxx
//   VITE_EMAILJS_PUBLIC_KEY=xxxxx
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');
  const [sentName, setSentName] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setSentName(formData.from_name);
      setFormData({ from_name: '', from_email: '', phone: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setErrorMsg('Something went wrong. Please try again or email me directly.');
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="px-4 sm:px-6 pt-10 pb-16 bg-gradient-to-br from-black via-[#0a0f1c] to-[#0f0f0f] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-orange-500 font-semibold mb-2 text-center">Let's Connect</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Get In <span className="text-orange-500">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 gap-y-12">
          {/* ---------- LEFT: FORM ---------- */}
          <div className="relative border border-[#1e90ff30] p-5 sm:p-8 rounded-2xl text-sm shadow-[0_0_15px_rgba(30,144,255,0.1)] bg-white/[0.02] backdrop-blur-md overflow-hidden transition-shadow hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] hover:border-orange-500/30">
            
            {/* Ambient Background Glow inside the form card */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 w-full h-full min-h-[400px] flex flex-col justify-center">
              {status === 'success' ? (
                /* ── Premium Success State ── */
                <div className="flex flex-col items-center justify-center text-center space-y-4 animate-[fadeIn_0.5s_ease-out]">
                  <div className="w-20 h-20 bg-gradient-to-tr from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.4)] mb-2">
                    <svg className="w-10 h-10 text-white animate-[scaleIn_0.5s_ease-out]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-wide">Message Sent!</h3>
                  <p className="text-gray-400 max-w-[250px]">
                    Thank you for reaching out, {sentName || 'there'}. I'll get back to you as soon as possible!
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2 text-sm font-medium text-orange-400 border border-orange-500/30 rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300 shadow-md hover:shadow-orange-500/40"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* ── Form State ── */
                <div className="animate-[fadeIn_0.5s_ease-out]">
                  {/* Error Banner */}
                  {status === 'error' && (
                    <div className="mb-6 flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm animate-[slideDown_0.3s_ease-out]">
                      <span className="text-lg">❌</span>
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                      <input
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        required
                        disabled={status === 'loading'}
                        className="w-full px-4 py-3 bg-white/5 text-zinc-200 border border-white/10 rounded-xl focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 placeholder:text-gray-600 transition-all disabled:opacity-50"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input
                        type="email"
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleChange}
                        required
                        pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                        title="Please enter a valid email address"
                        disabled={status === 'loading'}
                        className="w-full px-4 py-3 bg-white/5 text-zinc-200 border border-white/10 rounded-xl focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 placeholder:text-gray-600 transition-all disabled:opacity-50"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Mobile <span className="text-gray-600">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="[0-9+\-\s()]{10,}"
                        title="Please enter a valid phone number (at least 10 digits)"
                        disabled={status === 'loading'}
                        className="w-full px-4 py-3 bg-white/5 text-zinc-200 border border-white/10 rounded-xl focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 placeholder:text-gray-600 transition-all disabled:opacity-50"
                        placeholder="+91-9876543210"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                      <textarea
                        rows="4"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={status === 'loading'}
                        className="w-full px-4 py-3 bg-white/5 text-zinc-200 border border-white/10 rounded-xl focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 placeholder:text-gray-600 transition-all disabled:opacity-50 resize-none"
                        placeholder="Write your project details here..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full relative overflow-hidden group bg-orange-500 text-black font-medium px-6 py-2 rounded-md border border-orange-400 hover:bg-orange-400 transition-transform duration-300 shadow-md hover:shadow-orange-500/40 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {/* Button Hover Glow */}
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                      
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <span>✨ Send Message</span>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* ---------- RIGHT: INFO ---------- */}
          <div className="flex flex-col justify-center space-y-6 md:px-10">
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-2">Why Connect With Me?</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you want to collaborate on a project, need help with a development challenge, or just want to
                network — I'd love to hear from you! I'm always open to meaningful conversations about web development
                and tech innovation.
              </p>
            </div>

            {/* ✉️ Email */}
            <div className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="text-[#EA4335] text-lg" />
              <div>
                <p className="text-lg font-medium">Email</p>
                <a href="mailto:nikhilprajapatistaic@gmail.com" className="text-[#EA4335] hover:underline text-sm sm:text-base break-all">
                  nikhilprajapatistaic@gmail.com
                </a>
              </div>
            </div>

            {/* 📞 Phone */}
            <div className="flex items-center gap-3 text-gray-300">
              <FaPhone className="text-[#25D366] text-lg" />
              <div>
                <p className="text-lg font-medium">Phone</p>
                <p className="text-[#25D366]">+91-8423286055</p>
              </div>
            </div>

            {/* 🌐 Social Links */}
            <div className="text-gray-300">
              <p className="text-lg font-medium mb-2">Follow Me</p>
              <div className="flex items-center gap-5 text-xl mt-2">
                <a
                  href="https://linkedin.com/in/nikhil-prajapati9889/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-110 transition"
                >
                  <FaLinkedin className="text-[#0077B5] hover:opacity-80" />
                </a>

                <a
                  href="https://github.com/devNikhil00"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-110 transition"
                >
                  <FaGithub className="text-[#f1e4e4] hover:opacity-80" />
                </a>

                {/* TODO: Replace with your real Instagram handle */}
                <a
                  href="https://instagram.com/asyncnikhil"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-110 transition"
                >
                  <FaInstagram className="text-[#E4405F] hover:opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
