import { useEffect, useState } from 'react';

const useScrollDirection = () => {
  const [direction, setDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateDirection = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY) {
        setDirection("down");
      } else if (scrollY < lastScrollY) {
        setDirection("up");
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateDirection);
    return () => window.removeEventListener("scroll", updateDirection);
  }, []);

  return direction;
};

export default useScrollDirection;
