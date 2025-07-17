import React, { useEffect, useRef } from "react";

const MouseParticles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const createParticle = (x, y) => {
      const particle = document.createElement("div");
      particle.className = "mouse-particle";
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      containerRef.current.appendChild(particle);

      setTimeout(() => particle.remove(), 1000);
    };

    const handleMove = (e) => {
      createParticle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
    ></div>
  );
};

export default MouseParticles;
