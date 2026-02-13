import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  strength?: number;
  variant?: "primary" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg";
};

export default function MagneticButton({
  className,
  strength = 14,
  variant = "primary",
  size = "md",
  children,
  ...props
}: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLButtonElement | null>(null);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent<HTMLButtonElement>) {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x / strength, y: y / strength });
  }

  function handleLeave() {
    setPos({ x: 0, y: 0 });
  }

  const sizes =
    size === "lg"
      ? "px-6 py-3 text-[0.98rem] rounded-2xl"
      : size === "sm"
        ? "px-4 py-2 text-sm rounded-xl"
        : "px-5 py-2.5 text-sm sm:text-[0.95rem] rounded-2xl";

  const variants: Record<string, string> = {
    primary:
      "text-primary-foreground bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(36_92%_58%),hsl(var(--accent)))] shadow-[0_20px_60px_hsl(0_0%_0%/0.45)] hover:shadow-[0_26px_70px_hsl(0_0%_0%/0.55)]",
    secondary:
      "glass text-foreground hover:border-white/20 hover:bg-white/[0.09] shadow-[0_16px_50px_hsl(0_0%_0%/0.35)]",
    ghost:
      "text-foreground/90 hover:text-foreground bg-transparent hover:bg-white/[0.06] border border-white/10",
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.98 }}
      style={reduce ? undefined : { x: pos.x, y: pos.y }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 font-semibold tracking-tight transition-all duration-300 ease-out focus-premium disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
        "will-change-transform",
        sizes,
        variants[variant],
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      )}
    </motion.button>
  );
}
