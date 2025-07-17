import React from "react";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* WhatsApp */}
      <a
        href="https://wa.me/918607199154"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition"
        title="Message on WhatsApp"
      >
        🟢
      </a>

      {/* Email */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=hiteshwarsharma2002@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition"
        title="Email me"
      >
        ✉️
      </a>

      {/* Scroll to Top */}
      <a
        href="#hero"
        className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-purple-300 rounded-full shadow-lg transition backdrop-blur"
        title="Scroll to top"
      >
        ⬆️
      </a>
    </div>
  );
};

export default FloatingActions;
