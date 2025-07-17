import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Advanced Python Programming",
    issuer: "E-Box",
    year: "2023",
    credential: "#",
  },
  {
    title: "Advanced Java",
    issuer: "Unschool",
    year: "2023",
    credential: "#",
  },
  {
    title: "C & C++ Programming",
    issuer: "Unschool",
    year: "2022",
    credential: "#",
  },
];


const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 text-white bg-[#0f0f11] overflow-hidden"
    >
      {/* Background Effects */}
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

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)", y: 40 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full text-center space-y-14"
      >
        <h2 className="text-4xl font-bold text-purple-400">Certifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10 shadow"
            >
              <h3 className="text-xl font-semibold text-purple-300">{cert.title}</h3>
              <p className="text-gray-300">
                {cert.issuer} <span className="text-sm text-gray-400">({cert.year})</span>
              </p>
              <a
                href={cert.credential}
                className="text-sm text-purple-400 underline hover:text-purple-200 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Credential
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
