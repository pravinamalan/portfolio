import React from 'react';
import { cn } from "@/lib/utils";

const Tape = ({ className, color = "rgba(217, 67, 67, 0.15)", rotate = 0 }) => {
  return (
    <div
      className={cn(
        "absolute pointer-events-none z-20 w-16 h-4 opacity-90",
        className
      )}
      style={{
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <svg
        viewBox="0 0 100 25"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,5 Q5,0 15,3 Q30,8 45,5 Q65,2 85,5 Q95,7 100,2 L100,20 Q95,25 80,22 Q60,18 40,22 Q20,26 5,22 Q0,20 0,15 Z"
          fill={color}
          stroke="rgba(0,0,0,0.05)"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
        {/* Subtle highlights for texture */}
        <path
          d="M5,7 Q25,12 45,8 Q70,4 95,9"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
          strokeDasharray="4,8"
        />
      </svg>
    </div>
  );
};

export default Tape;
