"use client";

import { useInView } from "@/hooks/useInView";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function RevealOnScroll({ children, className = "", delay = 0 }: RevealOnScrollProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
