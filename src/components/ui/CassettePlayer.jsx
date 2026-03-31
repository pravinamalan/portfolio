import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from "@/lib/utils";

const CassettePlayer = ({ className, containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Reels spin as you scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360 * 5]);

  return (
    <div className={cn("relative w-64 h-40 bg-[#333] rounded-lg shadow-xl p-4 overflow-hidden border-2 border-black/20", className)}>
      {/* Cassette Body Texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:10px_10px]" />
      
      {/* Central Window */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-20 bg-[#1a1a1a] rounded-md border-2 border-black/40 flex items-center justify-around px-4">
        {/* Left Reel */}
        <motion.div style={{ rotate }} className="relative w-12 h-12 rounded-full bg-[#eee] border-4 border-[#ccc] flex items-center justify-center">
            <div className="w-1 h-8 bg-black/20 absolute" />
            <div className="w-8 h-1 bg-black/20 absolute" />
            <div className="w-4 h-4 rounded-full bg-black/40" />
        </motion.div>

        {/* Tape Path (Decorative) */}
        <div className="w-16 h-[2px] bg-[#444] relative overflow-hidden">
            <motion.div 
                animate={{ x: [-100, 100] }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            />
        </div>

        {/* Right Reel */}
        <motion.div style={{ rotate }} className="relative w-12 h-12 rounded-full bg-[#eee] border-4 border-[#ccc] flex items-center justify-center">
            <div className="w-1 h-8 bg-black/20 absolute" />
            <div className="w-8 h-1 bg-black/20 absolute" />
            <div className="w-4 h-4 rounded-full bg-black/40" />
        </motion.div>
      </div>

      {/* Retro Label */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#d94343] text-[8px] text-white flex items-center justify-center font-bold tracking-tighter uppercase px-2 shadow-inner">
        Type II - High Bias
      </div>

      {/* Screws */}
      <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-black/20 rounded-full" />
      <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-black/20 rounded-full" />
      <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-black/20 rounded-full" />
      <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-black/20 rounded-full" />
    </div>
  );
};

export default CassettePlayer;
