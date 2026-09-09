"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number; // Delay in ms (e.g. for staggered cards)
  duration?: number; // Duration in ms (default: 1000ms for slow, graceful emergence)
  distance?: number; // Distance to glide up in px (default: 36)
  threshold?: number; // Intersection threshold (default: 0.05)
  rootMargin?: string; // Margin to trigger when scrolling into view (default: "0px 0px -40px 0px")
  once?: boolean; // If true, stays visible once revealed (default: true)
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 1000,
  distance = 36,
  threshold = 0.05,
  rootMargin = "0px 0px -40px 0px",
  once = true,
  className,
  style,
  ...props
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const elementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Respect reduced motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return (
    <div
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : `translate3d(0, ${distance}px, 0)`,
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: isVisible ? "auto" : "opacity, transform",
        ...style,
      }}
      className={cn("scroll-reveal-container", className)}
      {...props}
    >
      {children}
    </div>
  );
}
