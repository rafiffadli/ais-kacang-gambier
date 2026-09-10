"use client";

import * as React from "react";
import Image from "next/image";
import { Sparkles, MapPin, Heart } from "lucide-react";

export function ScrollInteractiveBackground() {
  const p1Ref = React.useRef<HTMLDivElement>(null);
  const p3Ref = React.useRef<HTMLDivElement>(null);
  const p4Ref = React.useRef<HTMLDivElement>(null);

  const roadGlowRef = React.useRef<SVGPathElement>(null);
  const roadCoreRef = React.useRef<SVGPathElement>(null);
  const roadDashRef = React.useRef<SVGPathElement>(null);

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

        // 5. Subtle dash movement on the static road when scrolling
        if (roadDashRef.current) {
          roadDashRef.current.setAttribute(
            "stroke-dashoffset",
            `${(-currentScrollY * 0.6).toFixed(1)}`
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
          CREATIVE FLUID CARAMEL RIVER / ROAD (Sarawak River & Gula Apong Trail)
          High-performance vector rendering without expensive Gaussian blur filters
      ========================================================================= */}
      <svg
        className="absolute inset-0 w-full h-full opacity-45 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1200 3800"
      >
        <defs>
          <linearGradient id="caramelStream" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.55" />
            <stop offset="35%" stopColor="#D97706" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#B45309" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#78350F" stopOpacity="0.45" />
          </linearGradient>
          <linearGradient id="caramelGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#B45309" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Soft outer glow layer (vector stroke, 0 GPU memory overhead) */}
        <path
          ref={roadGlowRef}
          d="M 1100,150 Q 650,700 100,1300 T 950,2200 T 250,3400"
          fill="none"
          stroke="url(#caramelGlow)"
          strokeWidth="110"
          strokeLinecap="round"
        />

        {/* Core caramel road */}
        <path
          ref={roadCoreRef}
          d="M 1100,150 Q 650,700 100,1300 T 950,2200 T 250,3400"
          fill="none"
          stroke="url(#caramelStream)"
          strokeWidth="68"
          strokeLinecap="round"
        />

        {/* Animated dashed road centerline */}
        <path
          ref={roadDashRef}
          d="M 1100,150 Q 650,700 100,1300 T 950,2200 T 250,3400"
          fill="none"
          stroke="#FEF3C7"
          strokeWidth="8"
          strokeDasharray="18 26"
        />
      </svg>

      {/* =========================================================================
          PICTURE 1: Authentic Signature Ais Kacang Dish (Top-down & Spinning)
          Inspired by Little Heritage House (https://littleheritagehouse.com.my/cuisine/)
      ========================================================================= */}
      <div
        ref={p1Ref}
        style={{ willChange: "transform" }}
        className="absolute top-[560px] sm:top-24 right-1 sm:right-6 lg:right-12 w-52 sm:w-80 lg:w-[380px] pointer-events-auto group"
      >
        {/* Soft Amber Halo Backdrop Glow */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-amber-400/20 via-amber-600/15 to-transparent blur-2xl pointer-events-none -z-10 group-hover:scale-110 transition-transform duration-700" />

        {/* Spinning Circular Antique Porcelain Bowl (Top-down Bird's-Eye View) */}
        <div className="relative aspect-square w-full filter drop-shadow-[0_22px_28px_rgba(70,30,10,0.22)] drop-shadow-[0_8px_12px_rgba(0,0,0,0.14)]">
          <div className="w-full h-full animate-spin-plate">
            <Image
              src="/images/ais-kacang-topdown.png"
              alt="Authentic Sarawak Gula Apong Ais Kacang in antique Straits Chinese Nyonya porcelain bowl, shot from above and spinning"
              fill
              sizes="(max-width: 640px) 208px, (max-width: 1024px) 320px, 380px"
              className="object-contain select-none pointer-events-none"
              priority
            />
          </div>
        </div>

        {/* Floating Tethered Interactive Badge */}
        <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full border border-amber-300 shadow-xl flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-amber-950 whitespace-nowrap z-20 group-hover:border-amber-400 group-hover:scale-105 transition-all">
          <Sparkles className="h-3.5 w-3.5 text-amber-600 shrink-0" />
          <span>Signature Ais Kacang • RM 8.50</span>
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
