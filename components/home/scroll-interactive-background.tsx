"use client";

import * as React from "react";
import Image from "next/image";
import { Sparkles, Flame, MapPin, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollInteractiveBackground() {
  const [scrollY, setScrollY] = React.useState(0);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [activeStage, setActiveStage] = React.useState<"hero" | "menu" | "heritage" | "visit">("hero");

  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const maxScroll = Math.max(
            document.documentElement.scrollHeight - window.innerHeight,
            1
          );
          const progress = Math.min(Math.max(currentY / maxScroll, 0), 1);

          setScrollY(currentY);
          setScrollProgress(progress);

          // Determine current reading stage based on scroll depth
          if (currentY < 500) {
            setActiveStage("hero");
          } else if (currentY < 1400) {
            setActiveStage("menu");
          } else if (currentY < 2300) {
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

  // CHOREOGRAPHED MULTI-STAGE PARALLAX EQUATIONS
  // 1. Signature Ais Kacang (Top Right -> Shifts to center-right in Menu stage)
  const isAisKacangFocused = activeStage === "hero" || activeStage === "menu";
  const p1Y = scrollY * 0.45 + mousePos.y * 0.4;
  const p1Rot = Math.sin(scrollY * 0.003) * 12 + 4;
  const p1Scale = activeStage === "hero" ? 1.05 : activeStage === "menu" ? 0.95 : 0.85;

  // 2. Gula Apong Soft Serve (Top Left -> Rises and spins into spotlight in Menu stage)
  const p2Y = scrollY * -0.6 - mousePos.y * 0.5;
  const p2Rot = -8 + scrollY * 0.04;
  const p2Scale = activeStage === "menu" ? 1.08 : 0.92;

  // 3. Sarawak Laksa Bowl (Mid Left -> Expands dramatically when Menu/Heritage is reached)
  const p3Y = (scrollY - 750) * 0.42 + mousePos.y * 0.3;
  const p3Rot = Math.cos(scrollY * 0.0025) * 10 - 6;
  const p3Scale = activeStage === "menu" || activeStage === "heritage" ? 1.06 : 0.88;

  // 4. Kuching Waterfront Sunset (Right Background -> Expands into warm panorama in Heritage/Visit stage)
  const p4Y = (scrollY - 1300) * -0.35 - mousePos.y * 0.4;
  const p4Rot = -5 + Math.sin(scrollY * 0.002) * 6;
  const p4Scale = activeStage === "heritage" || activeStage === "visit" ? 1.1 : 0.9;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none"
    >
      {/* =========================================================================
          CREATIVE FLUID CARAMEL RIVER RIBBON (Sarawak River & Gula Apong Trail)
          Draws and undulates dynamically as you scroll down
      ========================================================================= */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1200 3200"
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

        {/* Dynamic Curved Ribbon flowing past the photos */}
        <path
          d={`M 1100,100 Q ${700 + mousePos.x * 2},${600 + scrollY * 0.2} 100,1100 T 950,2000 T 200,2800`}
          fill="none"
          stroke="url(#caramelStream)"
          strokeWidth="60"
          strokeLinecap="round"
          filter="url(#glow)"
        />
        <path
          d={`M 1100,100 Q ${700 + mousePos.x * 2},${600 + scrollY * 0.2} 100,1100 T 950,2000 T 200,2800`}
          fill="none"
          stroke="#FEF3C7"
          strokeWidth="6"
          strokeDasharray="16 24"
          strokeDashoffset={-scrollY * 0.8}
        />
      </svg>

      {/* =========================================================================
          FLOATING STAGE INDICATOR PILL (Left margin)
          Interactively tracks which culinary chapter the user is exploring
      ========================================================================= */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-start gap-3 pointer-events-auto">
        <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-amber-900/15 shadow-xl space-y-2 text-xs">
          <div className="flex items-center gap-2 pb-1 border-b border-stone-200">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
              Interactive Story
            </span>
          </div>

          <div className="space-y-1.5 font-semibold text-[11px]">
            <div
              className={cn(
                "flex items-center gap-2 px-2 py-1 rounded-lg transition-all",
                activeStage === "hero"
                  ? "bg-amber-100 text-amber-900 font-bold"
                  : "text-stone-400"
              )}
            >
              <span>01</span>
              <span>The Shaved Snow</span>
            </div>
            <div
              className={cn(
                "flex items-center gap-2 px-2 py-1 rounded-lg transition-all",
                activeStage === "menu"
                  ? "bg-amber-100 text-amber-900 font-bold"
                  : "text-stone-400"
              )}
            >
              <span>02</span>
              <span>Gula Apong &amp; Laksa</span>
            </div>
            <div
              className={cn(
                "flex items-center gap-2 px-2 py-1 rounded-lg transition-all",
                activeStage === "heritage"
                  ? "bg-amber-100 text-amber-900 font-bold"
                  : "text-stone-400"
              )}
            >
              <span>03</span>
              <span>Borneo Palm Craft</span>
            </div>
            <div
              className={cn(
                "flex items-center gap-2 px-2 py-1 rounded-lg transition-all",
                activeStage === "visit"
                  ? "bg-amber-100 text-amber-900 font-bold"
                  : "text-stone-400"
              )}
            >
              <span>04</span>
              <span>Waterfront Sunset</span>
            </div>
          </div>

          {/* Mini Scroll Progress Bar */}
          <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden mt-1">
            <div
              className="bg-gradient-to-r from-amber-500 to-amber-700 h-full transition-all duration-150 rounded-full"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* =========================================================================
          PICTURE 1: Authentic Signature Ais Kacang Dish
          Interactive Features: Dynamic spotlight tilt, scaling, floating recipe badge
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${mousePos.x * 0.4}px, ${p1Y}px, 0) rotate(${p1Rot}deg) scale(${p1Scale})`,
          transition: "transform 0.08s cubic-bezier(0.1, 0, 0.2, 1)",
        }}
        className={cn(
          "absolute top-28 -right-12 sm:right-4 lg:right-12 w-64 sm:w-80 lg:w-96 rounded-full p-3.5 shadow-2xl backdrop-blur-md transition-all duration-500 group",
          isAisKacangFocused
            ? "bg-gradient-to-tr from-amber-400/50 via-rose-300/40 to-amber-200/60 ring-4 ring-amber-300/40 opacity-95"
            : "bg-white/40 opacity-75"
        )}
      >
        <div className="relative aspect-square w-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
          <Image
            src="/images/ais-kacang.jpg"
            alt="Authentic Ais Kacang Gambier"
            fill
            sizes="(max-width: 768px) 260px, 384px"
            className="object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/20 via-transparent to-transparent" />
        </div>

        {/* Floating Tethered Interactive Badge */}
        <div
          style={{
            transform: `translate3d(${-mousePos.x * 0.3}px, ${Math.sin(scrollY * 0.004) * 8}px, 0)`,
          }}
          className="absolute -bottom-4 -left-4 sm:left-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-300 shadow-xl flex items-center gap-1.5 text-xs font-bold text-amber-950"
        >
          <Sparkles className="h-3.5 w-3.5 text-amber-600" />
          <span>Shaved Snow • RM 8.50</span>
        </div>
      </div>

      {/* =========================================================================
          PICTURE 2: Artisanal Gula Apong Soft Serve Cone
          Interactive Features: Rises rapidly in counter-parallax, floating caramel pill
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${-mousePos.x * 0.4}px, ${p2Y}px, 0) rotate(${p2Rot}deg) scale(${p2Scale})`,
          transition: "transform 0.08s cubic-bezier(0.1, 0, 0.2, 1)",
        }}
        className={cn(
          "absolute top-[420px] -left-12 sm:left-4 lg:left-10 w-56 sm:w-72 lg:w-84 rounded-3xl p-3.5 shadow-2xl backdrop-blur-md transition-all duration-500",
          activeStage === "menu"
            ? "bg-gradient-to-br from-amber-400/60 via-amber-200/50 to-amber-600/50 ring-4 ring-amber-400/50 opacity-95"
            : "bg-white/40 opacity-80"
        )}
      >
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
          <Image
            src="/images/gula-apong-cone.jpg"
            alt="Artisanal Gula Apong Soft Serve"
            fill
            sizes="(max-width: 768px) 224px, 336px"
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/20 via-transparent to-transparent" />
        </div>

        {/* Floating Tethered Badge */}
        <div
          style={{
            transform: `translate3d(${mousePos.x * 0.3}px, ${Math.cos(scrollY * 0.004) * 8}px, 0)`,
          }}
          className="absolute -top-3 -right-3 bg-stone-900/90 text-amber-300 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/40 shadow-xl flex items-center gap-1.5 text-[11px] font-bold"
        >
          <Flame className="h-3 w-3 text-amber-400" />
          <span>Warm Molasses • Churned Daily</span>
        </div>
      </div>

      {/* =========================================================================
          PICTURE 3: Authentic Sarawak Laksa Bowl
          Interactive Features: Emerges & scales up into focus as user browses Menu/Heritage
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${mousePos.x * 0.3}px, ${p3Y + 850}px, 0) rotate(${p3Rot}deg) scale(${p3Scale})`,
          transition: "transform 0.08s cubic-bezier(0.1, 0, 0.2, 1)",
        }}
        className={cn(
          "hidden md:block absolute top-[550px] left-2 lg:left-8 w-64 lg:w-84 rounded-full p-3.5 shadow-2xl backdrop-blur-md transition-all duration-500",
          activeStage === "menu" || activeStage === "heritage"
            ? "bg-gradient-to-tr from-amber-500/50 via-rose-400/40 to-emerald-300/40 ring-4 ring-rose-400/40 opacity-95"
            : "bg-white/40 opacity-75"
        )}
      >
        <div className="relative aspect-square w-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
          <Image
            src="/images/sarawak-laksa.jpg"
            alt="Sarawak Laksa Kopitiam Heritage"
            fill
            sizes="336px"
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/20 via-transparent to-transparent" />
        </div>

        {/* Floating Tethered Badge */}
        <div
          style={{
            transform: `translate3d(${-mousePos.x * 0.3}px, ${Math.sin(scrollY * 0.0035) * 8}px, 0)`,
          }}
          className="absolute -bottom-3 right-4 bg-emerald-900/95 text-emerald-200 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-400/40 shadow-xl flex items-center gap-1.5 text-[11px] font-bold"
        >
          <Heart className="h-3 w-3 text-emerald-300 fill-emerald-300" />
          <span>Anthony Bourdain&apos;s Pick • RM 11.50</span>
        </div>
      </div>

      {/* =========================================================================
          PICTURE 4: Scenic Kuching Waterfront at Sunset Panorama
          Interactive Features: Expands as user explores the Heritage & Visit sections
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${-mousePos.x * 0.3}px, ${p4Y + 1250}px, 0) rotate(${p4Rot}deg) scale(${p4Scale})`,
          transition: "transform 0.08s cubic-bezier(0.1, 0, 0.2, 1)",
        }}
        className={cn(
          "hidden md:block absolute top-[900px] -right-8 lg:right-6 w-84 lg:w-[420px] rounded-3xl p-3.5 shadow-2xl backdrop-blur-md transition-all duration-500",
          activeStage === "heritage" || activeStage === "visit"
            ? "bg-gradient-to-br from-amber-500/50 via-purple-400/30 to-rose-500/40 ring-4 ring-amber-400/50 opacity-95"
            : "bg-white/40 opacity-75"
        )}
      >
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
          <Image
            src="/images/kuching-waterfront.jpg"
            alt="Kuching Waterfront Darul Hana Bridge Sunset"
            fill
            sizes="420px"
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />
        </div>

        {/* Floating Tethered Badge */}
        <div
          style={{
            transform: `translate3d(${mousePos.x * 0.3}px, ${Math.cos(scrollY * 0.0035) * 8}px, 0)`,
          }}
          className="absolute -top-3 left-4 bg-stone-950/95 text-amber-300 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-400/50 shadow-xl flex items-center gap-1.5 text-xs font-bold"
        >
          <MapPin className="h-3.5 w-3.5 text-amber-400" />
          <span>Kuching Waterfront • Darul Hana Bridge</span>
        </div>
      </div>
    </div>
  );
}
