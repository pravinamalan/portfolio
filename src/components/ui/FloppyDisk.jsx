import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

const FloppyDisk = ({ className, label = "SYSTEM", color = "#4b5563" }) => {
  return (
    <div className={cn("relative w-48 h-[178px] bg-[#1a1a1a] rounded-sm shadow-xl p-3 border-2 border-black/10 overflow-hidden group", className)}>
        {/* Metal Shutter */}
        <div className="absolute top-0 right-4 w-12 h-14 bg-[#a1a1aa] rounded-b-sm border-x border-b border-black/20 z-10 transition-transform duration-500 group-hover:-translate-x-4">
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-4 bg-black/40 rounded-sm" />
        </div>

        {/* Disk Body Details */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-black/40" />
        <div className="absolute top-1/2 left-12 w-6 h-6 border-2 border-black/40 rounded-full opacity-30" />
        
        {/* Write Protect Tab */}
        <div className="absolute bottom-2 right-2 w-3 h-3 bg-black/80 rounded-sm" />

        {/* Paper Label */}
        <div className="relative mt-12 bg-white w-full h-24 rounded-sm border-b-4 border-[#d1d5db] flex flex-col p-3 shadow-inner">
            <div className="h-1.5 w-full bg-[#3b82f6] mb-1" />
            <div className="h-1 w-full bg-[#f87171] mb-3" />
            <div className="mono text-[10px] uppercase font-bold text-black/60 truncate">
                {label}
            </div>
            <div className="mt-auto flex justify-between">
                <div className="h-0.5 w-8 bg-black/10" />
                <div className="h-0.5 w-4 bg-black/10" />
            </div>
        </div>

        {/* Arrow (Correct Disk Direction) */}
        <div className="absolute top-2 left-4 w-4 h-4 text-white/20 select-none">
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-8 8h16l-8-8z" />
            </svg>
        </div>
    </div>
  );
};

export default FloppyDisk;
