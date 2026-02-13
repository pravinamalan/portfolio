import { motion, useReducedMotion } from "framer-motion";

export default function Background() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 mesh-bg grain">
      {/* animated gradient orbs */}
      <motion.div
        aria-hidden="true"
        className="absolute -left-24 top-10 h-[320px] w-[320px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.35), transparent 60%)",
        }}
        animate={
          reduce
            ? undefined
            : { x: [0, 22, -10, 0], y: [0, 10, -16, 0], scale: [1, 1.06, 0.98, 1] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[-80px] top-[-40px] h-[380px] w-[380px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 40% 45%, hsl(var(--accent) / 0.28), transparent 62%)",
        }}
        animate={
          reduce
            ? undefined
            : { x: [0, -18, 10, 0], y: [0, 14, -10, 0], scale: [1, 1.05, 0.98, 1] }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-[40%] bottom-[-120px] h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, hsl(262 83% 62% / 0.22), transparent 62%)",
        }}
        animate={
          reduce
            ? undefined
            : { x: [0, 14, -14, 0], y: [0, -12, 10, 0], scale: [1, 1.07, 0.98, 1] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
