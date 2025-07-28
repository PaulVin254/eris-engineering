import React from "react";

interface BackgroundPatternProps {
  variant?: "dots" | "grid" | "waves" | "geometric";
  className?: string;
}

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({
  variant = "dots",
  className = "",
}) => {
  const patterns = {
    dots: (
      <div className={`absolute inset-0 ${className}`}>
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0, 12px 12px",
          }}
        />
      </div>
    ),
    grid: (
      <div className={`absolute inset-0 ${className}`}>
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #f97316 1px, transparent 1px),
              linear-gradient(to bottom, #f97316 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />
      </div>
    ),
    waves: (
      <div className={`absolute inset-0 ${className}`}>
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="wave"
              x="0"
              y="0"
              width="100"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0,10 Q25,0 50,10 T100,10"
                stroke="#f97316"
                strokeWidth="1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave)" />
        </svg>
      </div>
    ),
    geometric: (
      <div className={`absolute inset-0 ${className}`}>
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="geometric"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="30,0 60,30 30,60 0,30"
                stroke="#f97316"
                strokeWidth="1"
                fill="none"
              />
              <circle
                cx="30"
                cy="30"
                r="8"
                stroke="#f97316"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometric)" />
        </svg>
      </div>
    ),
  };

  return patterns[variant] || patterns.dots;
};

export default BackgroundPattern;
