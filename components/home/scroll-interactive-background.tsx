"use client";

import * as React from "react";
import Image from "next/image";
import { Sparkles, Flame, MapPin, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollInteractiveBackground() {
  const [scrollY, setScrollY] = React.useState(0);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const onScroll = () => {
      const currentY =
        window.pageYOffset ||
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setScrollY(currentY);
    };

    const onMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 50;
      const y = (e.clientY / innerHeight - 0.5) * 50;
      setMousePos({ x, y });
    };

    const onTouchMove = (e: TouchEvent) => {
      const currentY =
        window.pageYOffset ||
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setScrollY(currentY);

      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const x = (touch.clientX / window.innerWidth - 0.5) * 40;
        const y = (touch.clientY / window.innerHeight - 0.5) * 40;
        setMousePos({ x, y });
      }
    };

    // Initial scroll position
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    document.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // =========================================================================
  // DYNAMIC LIVING ROAD (SVG CARAMEL STREAM)
  //
  // The control points of the path continuously flex and undulate as you scroll,
  // making the road curve and slither dynamically on BOTH Mobile & Desktop!
  // =========================================================================
  const qX = 650 + Math.sin(scrollY * 0.004) * 160 + mousePos.x * 2;
  const qY = 700 + Math.cos(scrollY * 0.003) * 100 + scrollY * 0.2;
  const t1X = 950 - Math.sin(scrollY * 0.0035) * 140 - mousePos.x * 2;
  const t1Y = 2200 + Math.sin(scrollY * 0.003) * 90;
  const t2X = 250 + Math.cos(scrollY * 0.004) * 120 + mousePos.x;
  const t2Y = 3400;

  const roadD = `M 1100,150 Q ${qX},${qY} 100,1300 T ${t1X},${t1Y} T ${t2X},${t2Y}`;

  // =========================================================================
  // DRAMATIC, OBVIOUS PARALLAX DISPLACEMENTS (Highly visible on mobile phones!)
  // =========================================================================

  // 1. Signature Ais Kacang: drifts across horizontally (±35px) and tilts (±18deg)
  const p1X = Math.sin(scrollY * 0.005) * 35 + mousePos.x * 0.5;
  const p1Y = scrollY * -0.35 + mousePos.y * 0.4; // Moves in counter-parallax relative to scroll
  const p1Rot = Math.sin(scrollY * 0.004) * 18 + 5;
  const p1Scale = 1 + Math.sin(scrollY * 0.003) * 0.08;

  // 2. Artisanal Gula Apong Soft Serve: counter-sways opposite to Ais Kacang
  const p2X = Math.cos(scrollY * 0.0045) * -35 - mousePos.x * 0.5;
  const p2Y = (scrollY - 700) * 0.4 - mousePos.y * 0.4;
  const p2Rot = -8 + Math.cos(scrollY * 0.0045) * 16;
  const p2Scale = 1 + Math.cos(scrollY * 0.0035) * 0.08;

  // 3. Authentic Sarawak Laksa Bowl: mid-page drifting
  const p3X = Math.sin(scrollY * 0.0045) * 32 + mousePos.x * 0.4;
  const p3Y = (scrollY - 1400) * -0.32 + mousePos.y * 0.35;
  const p3Rot = Math.cos(scrollY * 0.004) * 16 - 4;
  const p3Scale = 1 + Math.sin(scrollY * 0.003) * 0.08;

  // 4. Scenic Kuching Waterfront Sunset: lower-page sweeping panorama
  const p4X = Math.cos(scrollY * 0.004) * -32 - mousePos.x * 0.4;
  const p4Y = (scrollY - 2100) * 0.35 - mousePos.y * 0.35;
  const p4Rot = -5 + Math.sin(scrollY * 0.0035) * 14;
  const p4Scale = 1 + Math.cos(scrollY * 0.003) * 0.08;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none"
    >
      {/* =========================================================================
          CREATIVE FLUID CARAMEL RIVER / ROAD (Sarawak River & Gula Apong Trail)
          Moves, curves, and undulates in real time on EVERY device!
      ========================================================================= */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40 sm:opacity-45 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1200 3800"
      >
        <defs>
          <linearGradient id="caramelStream" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.5" />
            <stop offset="35%" stopColor="#D97706" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#B45309" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#78350F" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="16" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* The dynamic road: curves and undulates as scrollY changes */}
        <path
          d={roadD}
          fill="none"
          stroke="url(#caramelStream)"
          strokeWidth="70"
          strokeLinecap="round"
          filter="url(#glow)"
        />
        {/* Animated dashed centerline on the road */}
        <path
          d={roadD}
          fill="none"
          stroke="#FEF3C7"
          strokeWidth="8"
          strokeDasharray="18 26"
          strokeDashoffset={-scrollY * 1.2}
        />
      </svg>

      {/* =========================================================================
          PICTURE 1: Authentic Signature Ais Kacang Dish
          Floats dynamically on the right side with visible horizontal sway and tilt!
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${p1X}px, ${p1Y}px, 0) rotate(${p1Rot}deg) scale(${p1Scale})`,
          transition: "transform 0.08s ease-out",
          willChange: "transform",
        }}
        className="absolute top-[580px] sm:top-28 right-0 sm:right-6 lg:right-12 w-48 sm:w-80 lg:w-96 rounded-full p-2.5 sm:p-3.5 shadow-2xl backdrop-blur-md bg-gradient-to-tr from-amber-400/60 via-rose-300/50 to-amber-200/70 ring-4 ring-amber-300/50 opacity-95"
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
        <div className="absolute -bottom-3 -left-1 sm:-bottom-4 sm:left-2 bg-white/95 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-amber-300 shadow-xl flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold text-amber-950">
          <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-600" />
          <span>Shaved Snow • RM 8.50</span>
        </div>
      </div>

      {/* =========================================================================
          PICTURE 2: Artisanal Gula Apong Soft Serve Cone
          Floats dynamically on the left side with visible counter-parallax!
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${p2X}px, ${p2Y}px, 0) rotate(${p2Rot}deg) scale(${p2Scale})`,
          transition: "transform 0.08s ease-out",
          willChange: "transform",
        }}
        className="absolute top-[1250px] sm:top-[460px] left-0 sm:left-6 lg:left-10 w-44 sm:w-72 lg:w-84 rounded-3xl p-2.5 sm:p-3.5 shadow-2xl backdrop-blur-md bg-gradient-to-br from-amber-400/60 via-amber-200/50 to-amber-600/60 ring-4 ring-amber-400/50 opacity-95"
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
        <div className="absolute -top-2.5 -right-1 sm:-top-3 sm:-right-3 bg-stone-900/90 text-amber-300 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-amber-400/40 shadow-xl flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[11px] font-bold">
          <Flame className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-amber-400" />
          <span>Warm Molasses • Churned Daily</span>
        </div>
      </div>

      {/* =========================================================================
          PICTURE 3: Authentic Sarawak Laksa Bowl
          Floats dynamically on the right side flanking the Signature Menu!
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${p3X}px, ${p3Y}px, 0) rotate(${p3Rot}deg) scale(${p3Scale})`,
          transition: "transform 0.08s ease-out",
          willChange: "transform",
        }}
        className="absolute top-[1950px] sm:top-[900px] right-0 sm:left-4 lg:left-8 w-44 sm:w-64 lg:w-84 rounded-full p-2.5 sm:p-3.5 shadow-2xl backdrop-blur-md bg-gradient-to-tr from-amber-500/60 via-rose-400/50 to-emerald-300/50 ring-4 ring-rose-400/40 opacity-95"
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
        <div className="absolute -bottom-2.5 -left-1 sm:-bottom-3 sm:right-4 bg-emerald-900/95 text-emerald-200 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-emerald-400/40 shadow-xl flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[11px] font-bold">
          <Heart className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-emerald-300 fill-emerald-300" />
          <span>Bourdain&apos;s Pick • RM 11.50</span>
        </div>
      </div>

      {/* =========================================================================
          PICTURE 4: Scenic Kuching Waterfront at Sunset Panorama
          Floats dynamically on the left side flanking Heritage & Reviews!
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${p4X}px, ${p4Y}px, 0) rotate(${p4Rot}deg) scale(${p4Scale})`,
          transition: "transform 0.08s ease-out",
          willChange: "transform",
        }}
        className="absolute top-[2650px] sm:top-[1450px] left-0 sm:right-6 lg:right-10 w-48 sm:w-84 lg:w-[420px] rounded-3xl p-2.5 sm:p-3.5 shadow-2xl backdrop-blur-md bg-gradient-to-br from-amber-500/60 via-purple-400/40 to-rose-500/50 ring-4 ring-amber-400/50 opacity-95"
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
        <div className="absolute -top-2.5 -right-1 sm:-top-3 sm:left-4 bg-stone-950/95 text-amber-300 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-amber-400/50 shadow-xl flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-xs font-bold">
          <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-400" />
          <span>Kuching Waterfront • Darul Hana</span>
        </div>
      </div>
    </div>
  );
}
