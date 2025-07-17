import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-[#0f0f11] text-white"
    >
      {/* 🌌 Parallax Gradient Background */}
      <div className="absolute inset-0 -z-20">
        <div
          className="absolute top-0 left-1/2 w-[140%] h-[140%] bg-gradient-to-br from-purple-900 via-black to-gray-900 opacity-20"
          style={{
            transform: "translate(-50%, 0) scale(1.1)",
            backgroundAttachment: "fixed",
          }}
        />
      </div>

      {/* 💫 Floating Glowing Particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${10 + Math.random() * 15}px`,
              height: `${10 + Math.random() * 15}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* 🔮 Main Content with Blur + Typewriter */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)", y: 40 }}
        whileInView={{ opacity: 1, filter: "blur(0)", y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="z-10 flex flex-col items-center gap-6"
      >
        <img
          src="/profile.png"
          alt="Hiteshwar"
          className="w-40 h-40 rounded-full border-[4px] border-white shadow-xl"
        />

        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          Hiteshwar
        </h1>

        <div className="text-xl sm:text-2xl text-purple-400 font-medium">
          <Typewriter
            options={{
              strings: [
                "Full-Stack Developer 💻",
                "Machine Learning Explorer 🤖",
                "React & Python Enthusiast 🚀",
                "Data Analyst 📊",
                "Backend Wizard 🧙‍♂️",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </div>


        

        <p className="text-lg sm:text-xl text-gray-300 font-medium px-4 max-w-2xl">
          Passionate about building scalable web apps, training machine learning models,
          automating workflows, and analyzing data for real-world insights. Currently
          focused on creating intelligent tools and elegant user interfaces.
        </p>

        <a
        href="public\Hiteshwar__Resume.pdf"
        download
        className="inline-block bg-purple-600 px-6 py-3 text-white font-medium rounded-full shadow hover:bg-purple-700 transition-all"
        >
        📄 Download Resume
        </a>

      </motion.div>

      {/* ⬇️ Scroll Down Arrow */}
      <a
        href="#about"
        className="absolute bottom-8 z-10 flex flex-col items-center justify-center text-gray-300 animate-bounce hover:text-purple-400 transition"
      >
        <span className="text-xs mb-1">Scroll</span>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14m0 0l-6-6m6 6l6-6" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
