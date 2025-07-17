import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institute: "Lovely Professional University, Punjab",
    duration: "2019 – 2023",
    score: "CGPA: 7.0",
  },
  {
    degree: "Senior Secondary (XII)",
    institute: "Kendriya Vidyalaya, Rewari",
    duration: "2018 – 2019",
    score: "Percentage: 67.6%",
  },
  {
    degree: "Secondary (X)",
    institute: "Kendriya Vidyalaya, Rewari",
    duration: "2016 – 2017",
    score: "CGPA: 7.6",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 text-white bg-[#0f0f11] overflow-hidden"
    >
      {/* Background Glow + Parallax */}
      <div className="absolute inset-0 -z-20">
        <div
          className="absolute top-0 left-1/2 w-[140%] h-[140%] bg-gradient-to-br from-purple-900 via-black to-gray-900 opacity-20"
          style={{
            transform: "translate(-50%, 0) scale(1.1)",
            backgroundAttachment: "fixed",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${12 + Math.random() * 15}px`,
              height: `${12 + Math.random() * 15}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${7 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Section Content */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)", y: 40 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full text-center space-y-14"
      >
        <h2 className="text-4xl font-bold text-purple-400">Education</h2>

        <div className="space-y-8 text-left">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-5 rounded-xl shadow border border-white/10"
            >
              <h3 className="text-xl font-semibold text-purple-300">
                {item.degree}
              </h3>
              <p className="text-sm text-gray-400">{item.institute}</p>
              <p className="text-sm text-gray-500 italic">{item.duration}</p>
              <p className="text-sm text-gray-300 mt-1">{item.score}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
