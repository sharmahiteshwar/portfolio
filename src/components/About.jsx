import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 text-white bg-[#0f0f11] overflow-hidden"
    >
      {/* 🌌 Parallax Gradient */}
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
        {[...Array(12)].map((_, i) => (
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

      {/* 🔮 Animated Content */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)", y: 40 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center space-y-8"
      >
        <h2 className="text-4xl font-bold text-purple-400">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Hey there! I’m a self-driven developer with a love for solving real-world
          problems using code. With experience across the full stack—from crafting
          dynamic UIs in <strong>React</strong> to building powerful APIs with{" "}
          <strong>Flask</strong> and <strong>FastAPI</strong>—I enjoy taking ideas and
          turning them into scalable, elegant solutions.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          My curiosity for <strong>machine learning</strong> and <strong>AI</strong> has
          led me to create chatbots, forecasting tools, and NLP models. I'm also skilled
          in <strong>data analysis</strong> and dashboarding—turning raw data into
          meaningful insights using tools like <strong>Pandas</strong>,{" "}
          <strong>Plotly</strong>, and <strong>PowerBI</strong>.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Currently, I’m enhancing my knowledge in <strong>cloud deployment</strong>,
          <strong> DevOps</strong>, and <strong>microservices</strong> to build
          production-grade apps. My goal? Build tools that help, scale, and inspire ✨
        </p>
      </motion.div>
    </section>
  );
};

export default About;
