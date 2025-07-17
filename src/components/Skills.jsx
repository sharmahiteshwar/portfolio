import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C++", "JavaScript", "SQL"],
  },
  {
    title: "Frameworks",
    skills: ["Spring Boot", "React", "Node.js", "Express", "Flask", "Django"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"],
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS", "Docker", "Git", "Postman", "Render", "Vercel"],
  },
  {
    title: "Machine Learning",
    skills: ["TensorFlow", "Keras", "NLP", "Rasa", "Scikit-learn"],
  },
];


const Skills = () => {
  return (
    <section
      id="skills"
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

      {/* 🔮 Animated Content */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)", y: 40 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full text-center space-y-14"
      >
        <h2 className="text-4xl font-bold text-purple-400">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10 shadow"
            >
              <h3 className="text-xl font-semibold text-purple-300 mb-4">
                {category.title}
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
