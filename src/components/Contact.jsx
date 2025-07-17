import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 text-white bg-[#0f0f11] overflow-hidden"
    >
      {/* Gradient + Parallax + Particles */}
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

      {/* Contact Content */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)", y: 40 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl w-full text-center space-y-10"
      >
        <h2 className="text-4xl font-bold text-purple-400">Let’s Connect</h2>
        <p className="text-gray-300 text-lg">
          I’m always open to discussing software projects, collaboration opportunities, or just nerding out over clean code, ML models or UI/UX trends.
          Feel free to shoot a message — I’d love to chat!
        </p>

        <div className="flex flex-col gap-4 items-center">
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=hiteshwarsharma2002@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-purple-600 text-white font-medium px-6 py-3 rounded-full shadow hover:bg-purple-700 transition-all"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 12H8m0 0l4-4m-4 4l4 4"
    />
  </svg>
  hiteshwarsharma2002@gmail.com
</a>

<a
  href="https://wa.me/918610509652?text=Hi%20Hitesh!%20I%20found%20your%20portfolio%20and%20wanted%20to%20connect.
I’m interested in discussing..."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-green-500 text-white font-medium px-6 py-3 rounded-full shadow hover:bg-green-600 transition-all"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 448 512"
  >
    <path d="M380.9 97.1C339 55.3 283.2 32 224.1 32 100.3 32 0 132.3 0 256c0 45 11.8 88.2 34.3 126.4L2.5 480l101.7-30.7c36.5 19.9 77.6 30.3 120 30.3h.1c123.8 0 224.1-100.3 224.1-224 0-59.1-23.2-114.9-65.5-157.2zM224.1 438c-38.8 0-76.8-10.5-109.7-30.4l-7.9-4.7-60.2 18.2 18.6-58-5.2-8.1C40.6 320.9 32 289.4 32 256 32 150.1 118.1 64 224.1 64c50.6 0 98.2 19.7 134 55.4 35.7 35.7 55.4 83.2 55.4 133.7 0 105.9-86.1 192-189.4 192h0zM308.6 304.2c-5.3-2.6-31.3-15.4-36.2-17.2-4.9-1.9-8.4-2.6-11.9 2.6-3.5 5.3-13.6 17.2-16.7 20.7-3.1 3.5-6.2 4-11.5 1.3-31.3-15.6-51.8-27.9-72.5-63.3-5.5-9.5 5.5-8.8 15.6-29.3 1.7-3.5.9-6.6-.4-9.2-1.3-2.6-11.9-28.6-16.3-39.1-4.3-10.3-8.7-8.9-11.9-9-3.1-.1-6.6-.1-10.1-.1s-9.2 1.3-14 6.6c-4.8 5.3-18.3 17.9-18.3 43.8 0 25.9 18.8 51 21.4 54.5 2.6 3.5 37 56.6 89.8 79.4 12.5 5.4 22.2 8.6 29.8 11 12.5 3.9 23.8 3.4 32.7 2.1 10-1.5 31-12.7 35.4-25 4.4-12.2 4.4-22.6 3.1-24.7-1.2-2.2-4.9-3.6-10.2-6.1z" />
  </svg>
  Message me on WhatsApp
</a>



          <div className="flex gap-6 text-lg text-gray-300 mt-4">
            <a
              href="https://github.com/hitesh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/hitesh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              LinkedIn
            </a>
            


            <a
              href="public\Hiteshwar__Resume.pdf"
              className="hover:text-purple-400 transition"
              download
            >
              Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
