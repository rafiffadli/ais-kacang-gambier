"use client";

import * as React from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
}

export function ArtisanCursor() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [isEnabled, setIsEnabled] = React.useState(true);
  const [isHoveringInteractive, setIsHoveringInteractive] = React.useState(false);

  React.useEffect(() => {
    // Only run on fine-pointer desktop devices without reduced motion
    if (typeof window === "undefined") return;
    const mediaQueryTouch = window.matchMedia("(pointer: coarse)");
    const mediaQueryMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQueryTouch.matches || mediaQueryMotion.matches) {
      setIsEnabled(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const mouse = { x: -100, y: -100, prevX: -100, prevY: -100 };
    const droplets: Point[] = [];
    const MAX_DROPLETS = 18;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Add syrup droplet on mouse move
      const dist = Math.hypot(mouse.x - mouse.prevX, mouse.y - mouse.prevY);
      if (dist > 6 && droplets.length < MAX_DROPLETS) {
        droplets.push({
          x: mouse.x + (Math.random() - 0.5) * 4,
          y: mouse.y + (Math.random() - 0.5) * 4,
          vx: (Math.random() - 0.5) * 0.5,
          vy: Math.random() * 0.8 + 0.3, // slow viscous drip down
          size: Math.random() * 4 + 3,
          alpha: 0.65,
        });
      }

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive =
          target.closest("button") ||
          target.closest("a") ||
          target.closest("[role='button']") ||
          target.closest(".interactive-topping");
        setIsHoveringInteractive(!!interactive);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render syrup droplets
      for (let i = droplets.length - 1; i >= 0; i--) {
        const d = droplets[i];
        d.x += d.vx;
        d.y += d.vy;
        d.alpha -= 0.022; // smooth fade
        d.size *= 0.96;

        if (d.alpha <= 0.02 || d.size <= 0.5) {
          droplets.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        // Golden Gula Apong amber gradient
        const grad = ctx.createRadialGradient(
          d.x - d.size * 0.3,
          d.y - d.size * 0.3,
          0,
          d.x,
          d.y,
          d.size
        );
        grad.addColorStop(0, `rgba(251, 191, 36, ${d.alpha * 0.9})`);
        grad.addColorStop(0.7, `rgba(217, 119, 6, ${d.alpha})`);
        grad.addColorStop(1, `rgba(180, 83, 9, ${d.alpha * 0.8})`);

        ctx.fillStyle = grad;
        ctx.shadowColor = "rgba(245, 158, 11, 0.4)";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ opacity: isHoveringInteractive ? 0.9 : 0.7 }}
      aria-hidden="true"
    />
  );
}
