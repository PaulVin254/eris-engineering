import React from "react";
import { motion } from "framer-motion";

interface FloatingHomeImagesProps {
  className?: string;
}

const FloatingHomeImages: React.FC<FloatingHomeImagesProps> = ({
  className = "",
}) => {
  const floatingImages = [
    {
      src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      alt: "Modern home exterior",
      size: "w-24 h-24",
      position: "top-20 right-10",
      delay: 0,
    },
    {
      src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      alt: "Beautiful house design",
      size: "w-20 h-20",
      position: "top-40 left-8",
      delay: 0.5,
    },
    {
      src: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      alt: "Luxury villa",
      size: "w-28 h-28",
      position: "bottom-32 right-20",
      delay: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      alt: "Contemporary home",
      size: "w-16 h-16",
      position: "bottom-20 left-16",
      delay: 1.5,
    },
  ];

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {floatingImages.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{
            opacity: 0.1,
            scale: 1,
            rotate: 0,
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            delay: image.delay,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className={`absolute ${image.position} ${image.size} rounded-xl overflow-hidden shadow-lg`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHomeImages;
