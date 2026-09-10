"use client";

import * as React from "react";
import Image from "next/image";
import { Sparkles, MapPin, Heart } from "lucide-react";

export function ScrollInteractiveBackground() {
  const p1Ref = React.useRef<HTMLDivElement>(null);
  const p3Ref = React.useRef<HTMLDivElement>(null);
  const p4Ref = React.useRef<HTMLDivElement>(null);

  const syrupGlowRef = React.useRef<SVGPathElement>(null);
  const syrupCoreRef = React.useRef<SVGPathElement>(null);
  const syrupHighlightRef = React.useRef<SVGPathElement>(null);

  React.useEffect(() => {
    let targetScrollY =
      window.pageYOffset ||
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    let currentScrollY = targetScrollY;
    let animFrameId: number;

    const updateScrollPos = () => {
      targetScrollY =
        window.pageYOffset ||
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
    };

    updateScrollPos();
    currentScrollY = targetScrollY;

    window.addEventListener("scroll", updateScrollPos, { passive: true });
    document.addEventListener("scroll", updateScrollPos, { passive: true });

    // Smooth, stable scroll-only parallax (Zero wiggling, zero idle movement)
    const tick = () => {
      const diff = targetScrollY - currentScrollY;

      // Only update when there is active scrolling/catch-up
      if (Math.abs(diff) > 0.05) {
        currentScrollY += diff * 0.12;

        // 1. Dish 1: Authentic Signature Ais Kacang (Top-down & Spinning, steady in place)
        if (p1Ref.current) {
          const p1Y = currentScrollY * -0.12;
          p1Ref.current.style.transform = `translate3d(0, ${p1Y.toFixed(1)}px, 0)`;
        }

        // 2. Dish 3: Authentic Sarawak Laksa (steady vertical parallax)
        if (p3Ref.current) {
          const p3Y = (currentScrollY - 1400) * -0.12;
          p3Ref.current.style.transform = `translate3d(0, ${p3Y.toFixed(1)}px, 0)`;
        }

        // 4. Dish 4: Scenic Kuching Waterfront Sunset (steady vertical parallax)
        if (p4Ref.current) {
          const p4Y = (currentScrollY - 2100) * 0.14;
          p4Ref.current.style.transform = `translate3d(0, ${p4Y.toFixed(1)}px, 0)`;
        }

        // 5. Liquid light shimmer gliding along the Gula Apong syrup drizzle when scrolling
        if (syrupHighlightRef.current) {
          syrupHighlightRef.current.setAttribute(
            "stroke-dashoffset",
            `${(-currentScrollY * 0.4).toFixed(1)}`
          );
        }
      }

      animFrameId = requestAnimationFrame(tick);
    };

    animFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("scroll", updateScrollPos);
      document.removeEventListener("scroll", updateScrollPos);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none"
    >
      {/* =========================================================================
          CASCADING PURE BORNEO GULA APONG SYRUP DRIZZLE (Artisanal Nectar Stream)
          Viscous liquid palm sugar with deep molasses core, warm golden nectar & glistening specular highlights
      ========================================================================= */}
      <svg
        className="absolute inset-0 w-full h-full opacity-65 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1200 3800"
      >
        <defs>
          {/* Rich Borneo Gula Apong Molasses & Caramel Liquid Gradient */}
          <linearGradient id="gulaApongSyrup" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#D97706" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#B45309" stopOpacity="0.95" />
            <stop offset="80%" stopColor="#78350F" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#451A03" stopOpacity="0.85" />
          </linearGradient>

          {/* Warm Ambient Honeyed Syrup Aura */}
          <linearGradient id="syrupGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.35" />
            <stop offset="35%" stopColor="#F59E0B" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#D97706" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#78350F" stopOpacity="0.1" />
          </linearGradient>

          {/* Glistening Specular Light Ridge on Viscous Syrup */}
          <linearGradient id="syrupHighlight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#FEF3C7" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#FDE68A" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFFBEB" stopOpacity="0.9" />
          </linearGradient>

          {/* Spherical Liquid Caramel / Nectar Droplet Radial Gradient */}
          <radialGradient id="amberDroplet" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#F59E0B" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#B45309" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#451A03" stopOpacity="0.75" />
          </radialGradient>
        </defs>

        {/* 1. Warm Ambient Syrup Glow (Soft Outer Spread) */}
        <path
          ref={syrupGlowRef}
          d="M 1100,150 Q 650,700 100,1300 T 950,2200 T 250,3400"
          fill="none"
          stroke="url(#syrupGlow)"
          strokeWidth="120"
          strokeLinecap="round"
        />

        {/* 2. Deep Viscous Molasses Syrup Base (Rich Body) */}
        <path
          ref={syrupCoreRef}
          d="M 1100,150 Q 650,700 100,1300 T 950,2200 T 250,3400"
          fill="none"
          stroke="url(#gulaApongSyrup)"
          strokeWidth="60"
          strokeLinecap="round"
        />

        {/* 3. Golden Nectar Inner Core (Luminous Depth) */}
        <path
          d="M 1100,150 Q 650,700 100,1300 T 950,2200 T 250,3400"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="24"
          strokeOpacity="0.65"
          strokeLinecap="round"
        />

        {/* 4. Glistening Specular Liquid Reflection (Silky Gleam that Shimmers with Scroll) */}
        <path
          ref={syrupHighlightRef}
          d="M 1100,150 Q 650,700 100,1300 T 950,2200 T 250,3400"
          fill="none"
          stroke="url(#syrupHighlight)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="180 140"
        />

        {/* 5. Glistening Suspended Palm Nectar Droplets & Caramel Beads */}
        {/* Droplets near Top Right (Hero & Spinning Bowl) */}
        <circle cx="1060" cy="260" r="14" fill="url(#amberDroplet)" />
        <circle cx="1056" cy="256" r="3.5" fill="#FFFDF0" opacity="0.85" />

        <circle cx="1090" cy="380" r="9" fill="url(#amberDroplet)" />
        <circle cx="1087" cy="378" r="2" fill="#FFFDF0" opacity="0.85" />

        {/* Droplets along the upper cascade */}
        <circle cx="760" cy="620" r="13" fill="url(#amberDroplet)" />
        <circle cx="756" cy="616" r="3" fill="#FFFDF0" opacity="0.85" />

        <circle cx="520" cy="850" r="10" fill="url(#amberDroplet)" />
        <circle cx="517" cy="848" r="2.5" fill="#FFFDF0" opacity="0.85" />

        {/* Droplets near Laksa curve (Left side) */}
        <circle cx="170" cy="1180" r="16" fill="url(#amberDroplet)" />
        <circle cx="165" cy="1175" r="4" fill="#FFFDF0" opacity="0.9" />

        <circle cx="70" cy="1440" r="11" fill="url(#amberDroplet)" />
        <circle cx="67" cy="1438" r="2.5" fill="#FFFDF0" opacity="0.85" />

        {/* Droplets along mid-page transition */}
        <circle cx="560" cy="1780" r="13" fill="url(#amberDroplet)" />
        <circle cx="556" cy="1776" r="3" fill="#FFFDF0" opacity="0.85" />

        {/* Droplets near Waterfront Sunset curve (Right side) */}
        <circle cx="890" cy="2040" r="15" fill="url(#amberDroplet)" />
        <circle cx="885" cy="2035" r="3.5" fill="#FFFDF0" opacity="0.9" />

        <circle cx="1020" cy="2340" r="10" fill="url(#amberDroplet)" />
        <circle cx="1017" cy="2338" r="2.5" fill="#FFFDF0" opacity="0.85" />

        {/* Droplets along lower cascade */}
        <circle cx="630" cy="2750" r="14" fill="url(#amberDroplet)" />
        <circle cx="626" cy="2746" r="3.5" fill="#FFFDF0" opacity="0.85" />

        {/* Droplets near bottom */}
        <circle cx="330" cy="3180" r="16" fill="url(#amberDroplet)" />
        <circle cx="325" cy="3175" r="4" fill="#FFFDF0" opacity="0.9" />

        <circle cx="210" cy="3480" r="12" fill="url(#amberDroplet)" />
        <circle cx="207" cy="3478" r="3" fill="#FFFDF0" opacity="0.85" />
      </svg>

      {/* =========================================================================
          PICTURE 1: Authentic Signature Ais Kacang Dish (Top-down, Centered & Spinning)
          Inspired by Little Heritage House (https://littleheritagehouse.com.my/cuisine/)
      ========================================================================= */}
      <div className="absolute top-[640px] sm:top-[460px] lg:top-[440px] -translate-y-1/2 right-0 sm:right-4 lg:right-8 xl:right-16 pointer-events-auto">
        <div
          ref={p1Ref}
          style={{ willChange: "transform" }}
          className="relative w-[276px] sm:w-[432px] md:w-[480px] lg:w-[537px] xl:w-[596px] group"
        >
          {/* Soft Amber Halo Backdrop Glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-amber-400/30 via-amber-600/20 to-transparent blur-3xl pointer-events-none -z-10 group-hover:scale-110 transition-transform duration-700" />

          {/* Spinning Circular Antique Porcelain Bowl (Top-down Bird's-Eye View) */}
          <div className="relative aspect-square w-full filter drop-shadow-[0_30px_40px_rgba(70,30,10,0.28)] drop-shadow-[0_12px_18px_rgba(0,0,0,0.18)]">
            <div className="w-full h-full animate-spin-plate">
              <Image
                src="/images/ais-kacang-topdown.png"
                alt="Authentic Sarawak Gula Apong Ais Kacang in antique Straits Chinese Nyonya porcelain bowl, shot from above and spinning"
                fill
                sizes="(max-width: 640px) 276px, (max-width: 1024px) 480px, 596px"
                className="object-contain select-none pointer-events-none"
                priority
              />
            </div>
          </div>

          {/* Floating Tethered Interactive Badge */}
          <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-amber-300 shadow-xl flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-950 whitespace-nowrap z-20 group-hover:border-amber-400 group-hover:scale-105 transition-all">
            <Sparkles className="h-4 w-4 text-amber-600 shrink-0" />
            <span>Signature Ais Kacang • RM 8.50</span>
          </div>
        </div>
      </div>



      {/* =========================================================================
          PICTURE 3: Authentic Sarawak Laksa Bowl
      ========================================================================= */}
      <div
        ref={p3Ref}
        style={{ willChange: "transform" }}
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
          <span>Sarawak Laksa • RM 11.50</span>
        </div>
      </div>

      {/* =========================================================================
          PICTURE 4: Scenic Kuching Waterfront at Sunset Panorama
      ========================================================================= */}
      <div
        ref={p4Ref}
        style={{ willChange: "transform" }}
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
