"use client";

import * as React from "react";
import Image from "next/image";
import { Sparkles, Flame, MapPin, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollInteractiveBackground() {
  const [scrollY, setScrollY] = React.useState(0);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [activeStage, setActiveStage] = React.useState<"hero" | "menu" | "heritage" | "visit">("hero");

  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;

          setScrollY(currentY);

          // Determine current reading stage based on scroll depth
          if (currentY < 600) {
            setActiveStage("hero");
          } else if (currentY < 1600) {
            setActiveStage("menu");
          } else if (currentY < 2600) {
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
      const x = (e.clientX / innerWidth - 0.5) * 40;
      const y = (e.clientY / innerHeight - 0.5) * 40;
      setMousePos({ x, y });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // CHOREOGRAPHED MULTI-STAGE PARALLAX EQUATIONS (Optimized for both Desktop & Mobile iPhone)
  // 1. Signature Ais Kacang
  const p1Y = scrollY * 0.35 + mousePos.y * 0.4;
  const p1Rot = Math.sin(scrollY * 0.003) * 10 + 4;
  const p1Scale = activeStage === "hero" || activeStage === "menu" ? 1.04 : 0.92;

  // 2. Gula Apong Soft Serve
  const p2Y = (scrollY - 500) * -0.25 - mousePos.y * 0.4;
  const p2Rot = -6 + Math.sin(scrollY * 0.004) * 8;
  const p2Scale = activeStage === "menu" ? 1.05 : 0.94;

  // 3. Sarawak Laksa Bowl
  const p3Y = (scrollY - 1200) * 0.3 + mousePos.y * 0.3;
  const p3Rot = Math.cos(scrollY * 0.003) * 8 - 4;
  const p3Scale = activeStage === "menu" || activeStage === "heritage" ? 1.05 : 0.92;

  // 4. Kuching Waterfront Sunset
  const p4Y = (scrollY - 1900) * -0.2 - mousePos.y * 0.3;
  const p4Rot = -4 + Math.sin(scrollY * 0.0025) * 6;
  const p4Scale = activeStage === "heritage" || activeStage === "visit" ? 1.06 : 0.92;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none"
    >
      {/* =========================================================================
          CREATIVE FLUID CARAMEL RIVER RIBBON (Sarawak River & Gula Apong Trail)
      ========================================================================= */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25 sm:opacity-35"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1200 3600"
      >
        <defs>
          <linearGradient id="caramelStream" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
            <stop offset="35%" stopColor="#D97706" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#B45309" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#78350F" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="16" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <path
          d={`M 1100,200 Q ${700 + mousePos.x * 2},${800 + scrollY * 0.15} 100,1400 T 950,2400 T 200,3200`}
          fill="none"
          stroke="url(#caramelStream)"
          strokeWidth="60"
          strokeLinecap="round"
          filter="url(#glow)"
        />
        <path
          d={`M 1100,200 Q ${700 + mousePos.x * 2},${800 + scrollY * 0.15} 100,1400 T 950,2400 T 200,3200`}
          fill="none"
          stroke="#FEF3C7"
          strokeWidth="6"
          strokeDasharray="16 24"
          strokeDashoffset={-scrollY * 0.8}
        />
      </svg>

      {/* =========================================================================
          PICTURE 1: Authentic Signature Ais Kacang Dish
          Mobile: Positioned at top-[680px], visible right as you scroll past hero
          Desktop: Floats elegantly in right gutter
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${mousePos.x * 0.3}px, ${p1Y}px, 0) rotate(${p1Rot}deg) scale(${p1Scale})`,
          transition: "transform 0.1s cubic-bezier(0.1, 0, 0.2, 1)",
        }}
        className={cn(
          "absolute top-[680px] sm:top-28 -right-8 sm:right-4 lg:right-12 w-48 sm:w-80 lg:w-96 rounded-full p-2.5 sm:p-3.5 shadow-2xl backdrop-blur-md transition-all duration-500",
          activeStage === "hero" || activeStage === "menu"
            ? "bg-gradient-to-tr from-amber-400/50 via-rose-300/40 to-amber-200/60 ring-4 ring-amber-300/40 opacity-90 sm:opacity-95"
            : "bg-white/40 opacity-70"
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
            transform: `translate3d(${-mousePos.x * 0.2}px, ${Math.sin(scrollY * 0.004) * 6}px, 0)`,
          }}
          className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:left-2 bg-white/95 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-amber-300 shadow-xl flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold text-amber-950"
        >
          <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-600" />
          <span>Shaved Snow • RM 8.50</span>
        </div>
      </div>

      {/* =========================================================================
          PICTURE 2: Artisanal Gula Apong Soft Serve Cone
          Mobile: Positioned at top-[1350px] on left
          Desktop: Floats in left gutter
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${-mousePos.x * 0.3}px, ${p2Y}px, 0) rotate(${p2Rot}deg) scale(${p2Scale})`,
          transition: "transform 0.1s cubic-bezier(0.1, 0, 0.2, 1)",
        }}
        className={cn(
          "absolute top-[1350px] sm:top-[460px] -left-8 sm:left-4 lg:left-10 w-44 sm:w-72 lg:w-84 rounded-3xl p-2.5 sm:p-3.5 shadow-2xl backdrop-blur-md transition-all duration-500",
          activeStage === "menu"
            ? "bg-gradient-to-br from-amber-400/60 via-amber-200/50 to-amber-600/50 ring-4 ring-amber-400/50 opacity-90 sm:opacity-95"
            : "bg-white/40 opacity-75"
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
            transform: `translate3d(${mousePos.x * 0.2}px, ${Math.cos(scrollY * 0.004) * 6}px, 0)`,
          }}
          className="absolute -top-2.5 -right-2.5 sm:-top-3 sm:-right-3 bg-stone-900/90 text-amber-300 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-amber-400/40 shadow-xl flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[11px] font-bold"
        >
          <Flame className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-amber-400" />
          <span>Warm Molasses • Churned Daily</span>
        </div>
      </div>

      {/* =========================================================================
          PICTURE 3: Authentic Sarawak Laksa Bowl
          Visible on BOTH Mobile and Desktop!
          Mobile: Positioned around top-[2050px] on right
          Desktop: Mid-page left gutter
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${mousePos.x * 0.25}px, ${p3Y + (typeof window !== "undefined" && window.innerWidth < 640 ? 100 : 850)}px, 0) rotate(${p3Rot}deg) scale(${p3Scale})`,
          transition: "transform 0.1s cubic-bezier(0.1, 0, 0.2, 1)",
        }}
        className={cn(
          "absolute top-[2050px] sm:top-[750px] -right-8 sm:left-2 lg:left-8 w-44 sm:w-64 lg:w-84 rounded-full p-2.5 sm:p-3.5 shadow-2xl backdrop-blur-md transition-all duration-500",
          activeStage === "menu" || activeStage === "heritage"
            ? "bg-gradient-to-tr from-amber-500/50 via-rose-400/40 to-emerald-300/40 ring-4 ring-rose-400/40 opacity-90 sm:opacity-95"
            : "bg-white/40 opacity-70"
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
            transform: `translate3d(${-mousePos.x * 0.2}px, ${Math.sin(scrollY * 0.0035) * 6}px, 0)`,
          }}
          className="absolute -bottom-2.5 -left-2.5 sm:-bottom-3 sm:right-4 bg-emerald-900/95 text-emerald-200 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-emerald-400/40 shadow-xl flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[11px] font-bold"
        >
          <Heart className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-emerald-300 fill-emerald-300" />
          <span>Bourdain&apos;s Pick • RM 11.50</span>
        </div>
      </div>

      {/* =========================================================================
          PICTURE 4: Scenic Kuching Waterfront at Sunset Panorama
          Visible on BOTH Mobile and Desktop!
          Mobile: Positioned around top-[2750px] on left
          Desktop: Lower page right gutter
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${-mousePos.x * 0.25}px, ${p4Y + (typeof window !== "undefined" && window.innerWidth < 640 ? 100 : 1250)}px, 0) rotate(${p4Rot}deg) scale(${p4Scale})`,
          transition: "transform 0.1s cubic-bezier(0.1, 0, 0.2, 1)",
        }}
        className={cn(
          "absolute top-[2750px] sm:top-[1250px] -left-8 sm:right-6 w-48 sm:w-84 lg:w-[420px] rounded-3xl p-2.5 sm:p-3.5 shadow-2xl backdrop-blur-md transition-all duration-500",
          activeStage === "heritage" || activeStage === "visit"
            ? "bg-gradient-to-br from-amber-500/50 via-purple-400/30 to-rose-500/40 ring-4 ring-amber-400/50 opacity-90 sm:opacity-95"
            : "bg-white/40 opacity-70"
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
            transform: `translate3d(${mousePos.x * 0.2}px, ${Math.cos(scrollY * 0.0035) * 6}px, 0)`,
          }}
          className="absolute -top-2.5 -right-2.5 sm:-top-3 sm:left-4 bg-stone-950/95 text-amber-300 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-amber-400/50 shadow-xl flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-xs font-bold"
        >
          <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-400" />
          <span>Kuching Waterfront • Darul Hana</span>
        </div>
      </div>
    </div>
  );
}
