import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from "@/lib/utils";

const DraggableNote = ({ children, className, initialX = 0, initialY = 0, initialRotate = 0, color = "#fef08a" }) => {
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);

  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  // Add subtle tilt when dragging
  const rotate = useTransform(x, [initialX - 200, initialX + 200], [initialRotate - 5, initialRotate + 5]);
  const springRotate = useSpring(rotate, { stiffness: 300, damping: 30 });

  return (
    <motion.div
      drag
      dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
      style={{ x: springX, y: springY, rotate: springRotate, backgroundColor: color }}
      whileDrag={{ scale: 1.05, zIndex: 50, shadow: "0 20px 40px rgba(0,0,0,0.15)" }}
      className={cn(
        "absolute p-6 w-56 h-56 shadow-md cursor-grab active:cursor-grabbing select-none",
        "flex flex-col items-center justify-center text-center",
        "border-t border-white/50",
        "after:absolute after:inset-0 after:bg-gradient-to-br after:from-white/20 after:to-transparent after:pointer-events-none",
        className
      )}
    >
      {/* Subtle "Paper Fold" corner effect if needed, but keeping it simple for performance */}
      <div className="hand text-lg text-foreground font-medium uppercase tracking-tight">
        {children}
      </div>
      
      {/* Decorative "Pin" or "Sticker" piece at the top */}
      <div className="absolute top-2 w-8 h-2 bg-black/10 rounded-full" />
    </motion.div>
  );
};

export default DraggableNote;
