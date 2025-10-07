import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import myPhoto from "../assets/nikhil.jpg"; // Star animation component

const Hero = () => {
  return (
    // <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-[#0f0f0f] text-white overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/10 via-[#0f0f0f] to-[#0f0f0f]">
      <section className=" relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 text-white overflow-hidden   bg-transparent
">
      {/* 🌌 Animated Star Background */}
    

      {/* 🔥 Left Side Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-center md:text-left z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="text-orange-500 font-bold">
            Nikhil Prajapati
          </span>
        </h1>

        {/* ✍️ Typewriter Dynamic Role Text */}
        <p className="text-lg text-gray-400 mb-6">
          <Typewriter
            words={[
              "Full Stack Developer",
              "MERN Stack Enthusiast",
              "Java & DSA Lover",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </p>

        {/* 🚀 CTA Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#projects"
          className="inline-block bg-orange-500 text-white py-2 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg hover:bg-orange-600 transition-all duration-300"
        >
          View My Work
        </motion.a>
      </motion.div>

      {/* 👨‍💻 Right Side Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative z-10"
      >
        {/* 🔁 Rotating Ring Border */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full border-2 border-orange-500/20 z-0"
        ></motion.div>

        {/* ✨ Glow Blur Behind Image */}
        <div className="absolute w-72 h-72 md:w-[26rem] md:h-[26rem] bg-gradient-to-br from-orange-400/30 via-orange-600/20 to-orange-800/10 rounded-full blur-3xl z-0"></div>

        {/* 🖼️ Profile Image */}
        <motion.img
          src={myPhoto}
          alt="Nikhil Prajapati"
          className="relative z-10 w-72 h-72 md:w-[22rem] md:h-[22rem] object-cover rounded-full shadow-[0_0_10px_#f97316] hover:shadow-[0_0_20px_#f97316] transition duration-500"
          whileHover={{ scale: 1.08, rotate: [0, 1.5, -1.5, 0] }}
          whileTap={{ scale: 1 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
