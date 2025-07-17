import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Development Engineer",
    company: "Vyloo Technologies",
    duration: "Aug 2024 – Jul 2025",
    description:
      "Built and deployed 10+ REST APIs using Node.js and Express. Led sprint planning, code reviews, and redesigned MongoDB schemas for better data performance. Cut API response times by 30% via caching and async processing.",
  },
];


const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 text-white bg-[#0f0f11] overflow-hidden"
    >
      {/* Gradient + Particles (unchanged) */}
      <div className="absolute inset-0 -z-20">
        <div
          className="absolute top-0 left-1/2 w-[140%] h-[140%] bg-gradient-to-br from-purple-900 via-black to-gray-900 opacity-20"
          style={{
            transform: "translate(-50%, 0) scale(1.1)",
            backgroundAttachment: "fixed",
          }}
        />
      </div>
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(10)].map((_, i) => (
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

      {/* Experience Timeline */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)", y: 40 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-4xl font-bold text-purple-400 text-center mb-14">
          Experience
        </h2>

        <div className="relative border-l-4 border-purple-500 pl-10 space-y-14">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[23px] top-2 w-4 h-4 bg-purple-600 rounded-full border-[3px] border-white"></div>

              <div className="bg-white/5 backdrop-blur-md p-5 rounded-xl shadow-md ml-2">
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <p className="text-purple-400 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
