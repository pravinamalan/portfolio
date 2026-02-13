import * as React from "react";
import { cn } from "@/lib/utils";

type TiltCardProps = React.HTMLAttributes<HTMLDivElement> & {
  intensity?: number; // deg
  glare?: boolean;
};

export default function TiltCard({ className, intensity = 9, glare = true, ...props }: TiltCardProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = React.useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = React.useState<React.CSSProperties>({ opacity: 0 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rx = (py - 0.5) * -intensity;
    const ry = (px - 0.5) * intensity;

    setStyle({
      transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`,
    });

    if (glare) {
      const gx = px * 100;
      const gy = py * 100;
      setGlareStyle({
        opacity: 1,
        background: `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.22), rgba(255,255,255,0) 55%)`,
      });
    }
  }

  function onLeave() {
    setStyle({ transform: "perspective(900px) rotateX(0deg) rotateY(0deg)" });
    setGlareStyle({ opacity: 0 });
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "relative transition-transform duration-300 ease-out will-change-transform",
        className,
      )}
      style={style}
      {...props}
    >
      {glare && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
          style={glareStyle}
        />
      )}
      {props.children}
    </div>
  );
}
