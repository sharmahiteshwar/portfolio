import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const sections = ["home", "about", "skills", "projects", "experience",  "certifications","achievements","Testimonials","contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
          setActive(id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/10">
      <ul className="flex justify-center gap-10 py-4 font-mono text-sm tracking-wide">
        {sections.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`relative uppercase px-2 py-1 transition-all duration-300 group ${
                active === id
                  ? "text-purple-400"
                  : "text-white hover:text-purple-300"
              }`}
            >
              {id}
              {/* Neon Glow Border */}
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] rounded bg-purple-400 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left ${
                  active === id ? "scale-x-100" : ""
                }`}
              ></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
