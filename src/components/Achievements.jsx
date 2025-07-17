import React from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Top 2% – HackerRank Skill Assessments",
    date: "2023",
    description:
      "Scored in top 2% globally in HackerRank's Java and Python skill tests.",
  },
  {
    title: "300+ DSA Problems Solved",
    date: "2022–2024",
    description:
      "Solved over 300 problems on LeetCode, GeeksforGeeks, and Codeforces.",
  },
];


const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 text-white bg-[#0f0f11] overflow-hidden"
    >
      {/* Background Blur & Particles */}
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

      {/* Section Content */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)", y: 40 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full text-center space-y-14"
      >
        <h2 className="text-4xl font-bold text-purple-400">Achievements</h2>

        <div className="space-y-8 text-left">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-5 rounded-xl shadow border border-white/10"
            >
              <h3 className="text-xl font-semibold text-purple-300">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">{item.date}</p>
              <p className="text-gray-300 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
