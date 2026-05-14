"use client";

import { useEffect, useRef, type ReactNode, type ElementType } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: 0 | 1 | 2 | 3;
  className?: string;
  style?: React.CSSProperties;
};

export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("visible");
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const delayClass = delay > 0 ? ` reveal-delay-${delay}` : "";
  const finalClass = `reveal${delayClass}${className ? ` ${className}` : ""}`;

  return (
    <Tag ref={ref as React.RefObject<HTMLElement>} className={finalClass} style={style}>
      {children}
    </Tag>
  );
}
