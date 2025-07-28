import React from "react";
import { motion } from "framer-motion";

const FloatingElements = () => {
  const elements = [
    { size: "w-2 h-2", color: "bg-orange-200/40", delay: 0, duration: 8 },
    { size: "w-1 h-1", color: "bg-blue-200/40", delay: 2, duration: 6 },
    { size: "w-3 h-3", color: "bg-orange-300/30", delay: 4, duration: 10 },
    { size: "w-1.5 h-1.5", color: "bg-blue-300/30", delay: 1, duration: 7 },
    { size: "w-2.5 h-2.5", color: "bg-orange-200/20", delay: 3, duration: 9 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} ${element.color} rounded-full`}
          initial={{
            x: `${Math.random() * 100}vw`,
            y: "100vh",
            opacity: 0,
          }}
          animate={{
            y: "-10vh",
            opacity: [0, 1, 1, 0],
            x: `${Math.random() * 100}vw`,
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 90}%`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
