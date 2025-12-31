import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import myPhoto from "../assets/nikhil.jpg";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="
        relative
        flex flex-col
        items-center
        justify-center

        px-4 py-10
        sm:px-6

        md:flex-row
        md:justify-between
        md:px-16
        md:py-0
        md:min-h-[calc(100vh-80px)]

        text-white
        overflow-hidden
        bg-transparent
      "
    >
      {/* ================= LEFT CONTENT ================= */}
      <motion.div
        initial={!shouldReduceMotion ? { opacity: 0, x: -40 } : false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          w-full
          md:w-1/2
          text-center
          md:text-left
          z-10
        "
      >
        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-6xl
            font-bold
            leading-tight
            mb-4
          "
        >
          Hi, I&apos;m{" "}
          <span className="text-orange-500">Nikhil Prajapati</span>
        </h1>

        {/* Typewriter */}
        <p
          className="
            text-base
            sm:text-lg
            text-gray-400
            mb-6
            min-h-[28px]
          "
        >
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

        {/* CTA – Living Glass Button */}
        <motion.a
          href="#projects"
          initial={!shouldReduceMotion ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          whileHover={!shouldReduceMotion ? { scale: 1.06 } : {}}
          whileTap={!shouldReduceMotion ? { scale: 0.95 } : {}}
          className="
            relative inline-flex items-center gap-2
            px-6 py-3
            rounded-full

            text-sm sm:text-base font-semibold text-white
            backdrop-blur-xl
            bg-black/40
            border border-white/15

            shadow-[0_10px_35px_rgba(0,0,0,0.7)]
            hover:border-orange-500/40

            transition-all duration-500
            overflow-hidden
          "
        >
          {/* Moving glass light */}
          {!shouldReduceMotion && (
            <motion.span
              className="
                absolute inset-0
                bg-gradient-to-r
                from-transparent
                via-white/15
                to-transparent
                opacity-60
              "
              animate={{ x: ["-120%", "120%"] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}

          {/* Breathing glow */}
          {!shouldReduceMotion && (
            <motion.span
              className="
                absolute inset-0
                rounded-full
                shadow-[0_0_25px_rgba(249,115,22,0.25)]
              "
              animate={{ opacity: [0.15, 0.35, 0.15] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}

          <span className="relative text-orange-400 text-lg">✦</span>
          <span className="relative tracking-wide">View My Work</span>
        </motion.a>
      </motion.div>

      {/* ================= RIGHT IMAGE ================= */}
      <motion.div
        initial={!shouldReduceMotion ? { opacity: 0, x: 40 } : false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="
          w-full
          mt-12
          md:mt-0
          md:w-1/2
          flex
          justify-center
          relative
          z-10
        "
      >
        {/* Rotating Ring – Desktop Only */}
        {!shouldReduceMotion && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="
              hidden md:block
              absolute
              w-[26rem]
              h-[26rem]
              rounded-full
              border-2
              border-orange-500/20
              z-0
            "
          />
        )}

        {/* Glow */}
        <div
          className="
            absolute
            hidden sm:block
            w-72 h-72
            md:w-[26rem] md:h-[26rem]
            bg-gradient-to-br
            from-orange-400/30
            via-orange-600/20
            to-orange-800/10
            rounded-full
            blur-3xl
            z-0
          "
        />

        {/* Profile Image */}
        <motion.img
          src={myPhoto}
          alt="Nikhil Prajapati"
          className="
            relative
            z-10
            w-48 h-48
            sm:w-56 sm:h-56
            md:w-[22rem] md:h-[22rem]
            object-cover
            rounded-full
            shadow-[0_0_10px_#f97316]
            hover:shadow-[0_0_20px_#f97316]
            transition
            duration-500
          "
          whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
        />
      </motion.div>
    </section>
  );
};

export default React.memo(Hero);
