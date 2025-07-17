import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Anjali Singh",
    role: "HR, Vyloo Technologies",
    feedback:
      "Hiteshwar consistently delivered backend modules with precision. His Flask APIs and integration skills helped us scale internal tools rapidly. A quick learner and a great communicator!",
  },
  {
    name: "Saurabh Mehta",
    role: "Product Manager, Zomato",
    feedback:
      "Hitesh brought AI-based tracking tools into our workflow in just weeks. His passion for real-world data and backend architecture is unmatched. A future tech leader in the making!",
  },
  {
    name: "Shalini Verma",
    role: "Founder, MentalWell",
    feedback:
      "The chatbot Hitesh built for us is the backbone of our therapy platform. From speech recognition to age detection — he handled everything solo. Brilliant and reliable.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
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

      {/* Testimonial Cards */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)", y: 40 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full text-center space-y-14"
      >
        <h2 className="text-4xl font-bold text-purple-400">Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10 shadow hover:shadow-md transition-all text-left"
            >
              <p className="text-gray-300 mb-4 italic">“{item.feedback}”</p>
              <h3 className="text-sm font-bold text-purple-300">{item.name}</h3>
              <p className="text-xs text-gray-400">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
