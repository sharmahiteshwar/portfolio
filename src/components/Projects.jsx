import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Task Manager Web App",
    description:
      "Full-stack task tracker built with Spring Boot, React & Tailwind. Features secure JWT login, user roles, REST APIs, and responsive UI for mobile/tablet.",
    link: "#",
  },
  {
    title: "Stock Market Predictor",
    description:
      "Trained LSTM model in TensorFlow/Keras to predict Google stock trends with 80%+ accuracy. Visualized data using Matplotlib.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 text-white bg-[#0f0f11] overflow-hidden"
    >
      {/* Gradient + Particle Effects (keep as-is) */}
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

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)", y: 40 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full text-center space-y-12"
      >
        <h2 className="text-4xl font-bold text-purple-400">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 p-6 rounded-xl backdrop-blur-md border border-white/10 shadow hover:shadow-lg hover:scale-[1.01] transition-all text-left"
            >
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-sm text-purple-400 underline hover:text-purple-200 transition"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
