import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

const Sticker = ({ children, className, rotate = 0, scale = 1, importance = "medium" }) => {
  const importanceStyles = {
    low: "scale-75 opacity-80",
    medium: "scale-100 opacity-100",
    high: "scale-110 opacity-100 shadow-lg",
  };

  return (
    <motion.div
      whileHover={{ scale: scale * 1.05, rotate: rotate + 2 }}
      initial={{ rotate, scale }}
      className={cn(
        "inline-flex items-center justify-center px-4 py-2 bg-white text-foreground rounded-lg font-bold text-sm",
        "border-2 border-white shadow-[2px_2px_0px_rgba(0,0,0,0.1)]",
        "cursor-pointer select-none",
        "before:absolute before:inset-0 before:ring-4 before:ring-white before:rounded-lg before:-z-10",
        importanceStyles[importance],
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Sticker;
