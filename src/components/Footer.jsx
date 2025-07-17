import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-white/5 backdrop-blur-md text-gray-300 text-sm py-6 px-6 sm:px-12 border-t border-white/10 z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-base font-medium text-purple-400">
            Always building. Always learning. 🚀
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Made with 💜 using React, Tailwind CSS & Framer Motion.
          </p>
        </div>

        <div className="flex gap-5 items-center text-sm text-gray-400">
          <a
            href="https://github.com/sharmahiteshwar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/hiteshwarsharma"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hiteshwarsharma2002@gmail.com"
            className="hover:text-purple-400 transition"
          >
            Email
          </a>
          <a
  href="public\Hiteshwar__Resume.pdf"
  download
  className="hover:text-purple-400 transition"
>
  Resume
</a>

        </div>
      </div>

      {/* ⬆️ Back to Top */}
      <a
        href="#home"
        className="absolute right-6 bottom-6 bg-purple-600 text-white px-3 py-2 rounded-full text-xs shadow hover:bg-purple-700 transition-all"
      >
        ↑ Top
      </a>

      {/* Year */}
      <div className="mt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Hiteshwar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
