import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 2000); // 2s
    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center text-white text-3xl font-bold tracking-wider">
      <div className="animate-pulse text-purple-500">Loading...</div>
    </div>
  );
};

export default Preloader;
