"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const AnimatedTooltip = ({
  items,
  className,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<
    "center" | "left" | "right"
  >("center");
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  // Smart positioning function to detect if tooltip would overflow
  // Calculates the optimal position (left, center, right) based on screen boundaries
  const calculateTooltipPosition = (itemIndex: number) => {
    if (!containerRef.current) return "center";

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const viewportWidth = window.innerWidth;

    // Calculate approximate position of the tooltip
    const itemsPerRow = items.length;
    const itemWidth = containerWidth / itemsPerRow;
    const itemPosition = itemIndex * itemWidth + itemWidth / 2;

    // Estimate tooltip width (approximate)
    const tooltipWidth = 200; // Estimated tooltip width
    const margin = 16; // Safety margin

    // Check if tooltip would overflow on the right
    if (
      containerRect.left + itemPosition + tooltipWidth / 2 + margin >
      viewportWidth
    ) {
      return "right"; // Align to right edge
    }

    // Check if tooltip would overflow on the left
    if (containerRect.left + itemPosition - tooltipWidth / 2 - margin < 0) {
      return "left"; // Align to left edge
    }

    return "center"; // Default center alignment
  };

  // Handle mouse enter with position calculation
  const handleMouseEnter = (itemId: number) => {
    const itemIndex = items.findIndex((item) => item.id === itemId);
    const position = calculateTooltipPosition(itemIndex);
    setTooltipPosition(position);
    setHoveredIndex(itemId);
  };

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  // Get positioning classes based on calculated position
  const getTooltipClasses = () => {
    switch (tooltipPosition) {
      case "left":
        return "absolute -top-16 left-0 flex text-xs flex-col items-center justify-center rounded-md bg-foreground z-50 shadow-xl px-4 py-2";
      case "right":
        return "absolute -top-16 right-0 flex text-xs flex-col items-center justify-center rounded-md bg-foreground z-50 shadow-xl px-4 py-2";
      default:
        return "absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-foreground z-50 shadow-xl px-4 py-2";
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("flex items-center justify-center gap-2", className)}
    >
      {items.map((item) => (
        <div
          className="-mr-4 relative group"
          key={item.name}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                ref={tooltipRef}
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className={getTooltipClasses()}
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="font-bold text-background relative z-30 text-base">
                  {item.name}
                </div>
                <div className="text-muted-foreground text-xs">
                  {item.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            height={56}
            width={56}
            src={item.image}
            alt={item.name}
            className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-background relative transition duration-500"
            onError={(e) => {
              e.currentTarget.src = `https://placehold.co/56x56/e2e8f0/64748b?text=${item.name.charAt(
                0
              )}`;
              e.currentTarget.onerror = null;
            }}
          />
        </div>
      ))}
    </div>
  );
};
