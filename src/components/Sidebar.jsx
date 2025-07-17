import React, { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certs" },
  { id: "achievements", label: "Wins" },
  { id: "testimonials", label: "Love" },
  { id: "contact", label: "Contact" },
];

const Sidebar = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let currentSection = "hero";

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollY + 150) {
          currentSection = section.id;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-50">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            active === section.id ? "bg-purple-500 scale-125" : "bg-gray-500 opacity-50"
          }`}
          title={section.label}
        />
      ))}
    </aside>
  );
};

export default Sidebar;
