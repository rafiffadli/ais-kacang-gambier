"use client";

import * as React from "react";
import Image from "next/image";
import { Sparkles, Flame, MapPin, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollInteractiveBackground() {
  const [scrollY, setScrollY] = React.useState(0);
  const [scrollVelocity, setScrollVelocity] = React.useState(0);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [activeStage, setActiveStage] = React.useState<"hero" | "menu" | "heritage" | "visit">("hero");

  React.useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;
    let lastTime = Date.now();
    let velocityTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const now = Date.now();
          const dt = Math.max(now - lastTime, 16);
          const rawVelocity = ((currentY - lastScrollY) / dt) * 16; // px per frame

          lastScrollY = currentY;
          lastTime = now;

          setScrollY(currentY);
          // Clamp velocity between -20 and 20 for subtle, premium physics
          setScrollVelocity(Math.min(Math.max(rawVelocity, -20), 20));

          // Clear velocity when scrolling stops
          clearTimeout(velocityTimeout);
          velocityTimeout = setTimeout(() => {
            setScrollVelocity(0);
          }, 120);

          // Determine current reading stage based on scroll depth
          if (currentY < 550) {
            setActiveStage("hero");
          } else if (currentY < 1500) {
            setActiveStage("menu");
          } else if (currentY < 2500) {
            setActiveStage("heritage");
          } else {
            setActiveStage("visit");
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 45;
      const y = (e.clientY / innerHeight - 0.5) * 45;
      setMousePos({ x, y });
    };

    // Touch interaction for mobile: capture finger movements to drive horizontal parallax
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const x = (touch.clientX / window.innerWidth - 0.5) * 35;
        const y = (touch.clientY / window.innerHeight - 0.5) * 35;
        setMousePos({ x, y });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      clearTimeout(velocityTimeout);
    };
  }, []);

  // =========================================================================
  // DYNAMIC PARALLAX PHYSICS ENGINE (High responsiveness on iPhone & MacBook)
  //
  // On mobile touchscreens (where mouse is absent), horizontal sway is powered
  // by continuous trigonometric wave functions + touch delta + scroll momentum.
  // =========================================================================

  // Mobile scroll-driven horizontal swaying (ensures mobile is as lively as desktop mousemove)
  const mobileSway1 = Math.sin(scrollY * 0.005) * 22;
  const mobileSway2 = Math.cos(scrollY * 0.004) * -22;
  const mobileSway3 = Math.sin(scrollY * 0.0045) * 20;
  const mobileSway4 = Math.cos(scrollY * 0.0038) * -20;

  // Kinetic tilt induced by scroll velocity (tilts smoothly when flicking up/down)
  const kineticTilt = scrollVelocity * 0.45;

  // 1. Signature Ais Kacang (Floats around top sections)
  const p1X = mousePos.x * 0.4 + mobileSway1;
  const p1Y = scrollY * 0.55 + mousePos.y * 0.4 + scrollVelocity * 0.5;
  const p1Rot = Math.sin(scrollY * 0.004) * 14 + kineticTilt + 4;
  const p1Scale = activeStage === "hero" || activeStage === "menu" ? 1.05 : 0.92;

  // 2. Artisanal Gula Apong Soft Serve (Counter-parallax floating on the left)
  const p2X = -mousePos.x * 0.4 + mobileSway2;
  const p2Y = (scrollY - 600) * -0.38 - mousePos.y * 0.4 - scrollVelocity * 0.5;
  const p2Rot = -7 + Math.sin(scrollY * 0.0045) * 12 - kineticTilt;
  const p2Scale = activeStage === "menu" ? 1.06 : 0.94;

  // 3. Authentic Sarawak Laksa Bowl (Floats in mid-page menu/heritage)
  const p3X = mousePos.x * 0.35 + mobileSway3;
  const p3Y = (scrollY - 1300) * 0.45 + mousePos.y * 0.35 + scrollVelocity * 0.4;
  const p3Rot = Math.cos(scrollY * 0.0038) * 12 + kineticTilt - 4;
  const p3Scale = activeStage === "menu" || activeStage === "heritage" ? 1.06 : 0.92;

  // 4. Kuching Waterfront Sunset (Panorama floating in lower sections)
  const p4X = -mousePos.x * 0.35 + mobileSway4;
  const p4Y = (scrollY - 2000) * -0.32 - mousePos.y * 0.35 - scrollVelocity * 0.4;
  const p4Rot = -4 + Math.sin(scrollY * 0.003) * 10 - kineticTilt;
  const p4Scale = activeStage === "heritage" || activeStage === "visit" ? 1.08 : 0.92;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none"
    >
      {/* =========================================================================
          CREATIVE FLUID CARAMEL RIVER RIBBON (Sarawak River & Gula Apong Trail)
      ========================================================================= */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 sm:opacity-40 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1200 3800"
      >
        <defs>
          <linearGradient id="caramelStream" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.45" />
            <stop offset="35%" stopColor="#D97706" stopOpacity="0.65" />
            <stop offset="70%" stopColor="#B45309" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#78350F" stopOpacity="0.35" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="16" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <path
          d={`M 1100,200 Q ${700 + p1X * 2},${800 + scrollY * 0.2} 100,1400 T 950,2400 T 200,3400`}
          fill="none"
          stroke="url(#caramelStream)"
          strokeWidth="64"
          strokeLinecap="round"
          filter="url(#glow)"
        />
        <path
          d={`M 1100,200 Q ${700 + p1X * 2},${800 + scrollY * 0.2} 100,1400 T 950,2400 T 200,3400`}
          fill="none"
          stroke="#FEF3C7"
          strokeWidth="7"
          strokeDasharray="16 24"
          strokeDashoffset={-scrollY * 0.85}
        />
      </svg>

      {/* =========================================================================
          PICTURE 1: Authentic Signature Ais Kacang Dish
          Mobile: Positioned on right, prominently visible beside Taste Bento
          Desktop: Floats in right gutter
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${p1X}px, ${p1Y}px, 0) rotate(${p1Rot}deg) scale(${p1Scale})`,
          willChange: "transform",
        }}
        className={cn(
          "absolute top-[520px] sm:top-28 right-[-10px] sm:right-4 lg:right-12 w-48 sm:w-80 lg:w-96 rounded-full p-2.5 sm:p-3.5 shadow-2xl backdrop-blur-md transition-shadow duration-500",
          activeStage === "hero" || activeStage === "menu"
            ? "bg-gradient-to-tr from-amber-400/60 via-rose-300/50 to-amber-200/70 ring-4 ring-amber-300/50 opacity-95"
            : "bg-white/50 opacity-75"
        )}
      >
        <div className="relative aspect-square w-full rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-2xl">
          <Image
            src="/images/ais-kacang.jpg"
            alt="Authentic Ais Kacang Gambier"
            fill
            sizes="(max-width: 640px) 192px, (max-width: 1024px) 320px, 384px"
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/30 via-transparent to-transparent" />
        </div>

        {/* Floating Tethered Interactive Badge */}
        <div
          style={{
            transform: `translate3d(${-p1X * 0.3}px, ${Math.sin(scrollY * 0.005) * 8}px, 0)`,
          }}
          className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:left-2 bg-white/95 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-amber-300 shadow-xl flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold text-amber-950"
        >
          <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-600" />
          <span>Shaved Snow • RM 8.50</span>
        </div>
      </div>

      {/* =========================================================================
          PICTURE 2: Artisanal Gula Apong Soft Serve Cone
          Mobile: Positioned on left, floats up into view beside Kopitiam section
          Desktop: Floats in left gutter
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${p2X}px, ${p2Y}px, 0) rotate(${p2Rot}deg) scale(${p2Scale})`,
          willChange: "transform",
        }}
        className={cn(
          "absolute top-[1150px] sm:top-[460px] left-[-10px] sm:left-4 lg:left-10 w-44 sm:w-72 lg:w-84 rounded-3xl p-2.5 sm:p-3.5 shadow-2xl backdrop-blur-md transition-shadow duration-500",
          activeStage === "menu"
            ? "bg-gradient-to-br from-amber-400/60 via-amber-200/50 to-amber-600/60 ring-4 ring-amber-400/50 opacity-95"
            : "bg-white/50 opacity-75"
        )}
      >
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden border-2 sm:border-4 border-white shadow-2xl">
          <Image
            src="/images/gula-apong-cone.jpg"
            alt="Artisanal Gula Apong Soft Serve"
            fill
            sizes="(max-width: 640px) 176px, (max-width: 1024px) 288px, 336px"
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/30 via-transparent to-transparent" />
        </div>

        {/* Floating Tethered Badge */}
        <div
          style={{
            transform: `translate3d(${p2X * 0.3}px, ${Math.cos(scrollY * 0.005) * 8}px, 0)`,
          }}
          className="absolute -top-2.5 -right-2 sm:-top-3 sm:-right-3 bg-stone-900/90 text-amber-300 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-amber-400/40 shadow-xl flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[11px] font-bold"
        >
          <Flame className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-amber-400" />
          <span>Warm Molasses • Churned Daily</span>
        </div>
      </div>

      {/* =========================================================================
          PICTURE 3: Authentic Sarawak Laksa Bowl
          Mobile: Positioned on right, drifts beside Heritage section
          Desktop: Mid-page left gutter
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${p3X}px, ${p3Y}px, 0) rotate(${p3Rot}deg) scale(${p3Scale})`,
          willChange: "transform",
        }}
        className={cn(
          "absolute top-[1850px] sm:top-[900px] right-[-10px] sm:left-2 lg:left-8 w-44 sm:w-64 lg:w-84 rounded-full p-2.5 sm:p-3.5 shadow-2xl backdrop-blur-md transition-shadow duration-500",
          activeStage === "menu" || activeStage === "heritage"
            ? "bg-gradient-to-tr from-amber-500/60 via-rose-400/50 to-emerald-300/50 ring-4 ring-rose-400/40 opacity-95"
            : "bg-white/50 opacity-75"
        )}
      >
        <div className="relative aspect-square w-full rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-2xl">
          <Image
            src="/images/sarawak-laksa.jpg"
            alt="Sarawak Laksa Kopitiam Heritage"
            fill
            sizes="(max-width: 640px) 176px, (max-width: 1024px) 256px, 336px"
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/30 via-transparent to-transparent" />
        </div>

        {/* Floating Tethered Badge */}
        <div
          style={{
            transform: `translate3d(${-p3X * 0.3}px, ${Math.sin(scrollY * 0.0045) * 8}px, 0)`,
          }}
          className="absolute -bottom-2.5 -left-2 sm:-bottom-3 sm:right-4 bg-emerald-900/95 text-emerald-200 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-emerald-400/40 shadow-xl flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[11px] font-bold"
        >
          <Heart className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-emerald-300 fill-emerald-300" />
          <span>Bourdain&apos;s Pick • RM 11.50</span>
        </div>
      </div>

      {/* =========================================================================
          PICTURE 4: Scenic Kuching Waterfront at Sunset Panorama
          Mobile: Positioned on left, drifts beside Reviews and Visit sections
          Desktop: Lower page right gutter
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${p4X}px, ${p4Y}px, 0) rotate(${p4Rot}deg) scale(${p4Scale})`,
          willChange: "transform",
        }}
        className={cn(
          "absolute top-[2550px] sm:top-[1450px] left-[-10px] sm:right-6 w-48 sm:w-84 lg:w-[420px] rounded-3xl p-2.5 sm:p-3.5 shadow-2xl backdrop-blur-md transition-shadow duration-500",
          activeStage === "heritage" || activeStage === "visit"
            ? "bg-gradient-to-br from-amber-500/60 via-purple-400/40 to-rose-500/50 ring-4 ring-amber-400/50 opacity-95"
            : "bg-white/50 opacity-75"
        )}
      >
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden border-2 sm:border-4 border-white shadow-2xl">
          <Image
            src="/images/kuching-waterfront.jpg"
            alt="Kuching Waterfront Darul Hana Bridge Sunset"
            fill
            sizes="(max-width: 640px) 192px, (max-width: 1024px) 336px, 420px"
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />
        </div>

        {/* Floating Tethered Badge */}
        <div
          style={{
            transform: `translate3d(${p4X * 0.3}px, ${Math.cos(scrollY * 0.0045) * 8}px, 0)`,
          }}
          className="absolute -top-2.5 -right-2 sm:-top-3 sm:left-4 bg-stone-950/95 text-amber-300 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-amber-400/50 shadow-xl flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-xs font-bold"
        >
          <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-400" />
          <span>Kuching Waterfront • Darul Hana</span>
        </div>
      </div>
    </div>
  );
}
