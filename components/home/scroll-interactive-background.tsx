"use client";

import * as React from "react";
import Image from "next/image";
import { Sparkles, Flame, MapPin, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollInteractiveBackground() {
  const p1Ref = React.useRef<HTMLDivElement>(null);
  const p2Ref = React.useRef<HTMLDivElement>(null);
  const p3Ref = React.useRef<HTMLDivElement>(null);
  const p4Ref = React.useRef<HTMLDivElement>(null);
  const svgPath1Ref = React.useRef<SVGPathElement>(null);
  const svgPath2Ref = React.useRef<SVGPathElement>(null);

  React.useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    const updateParallax = (scrollY: number) => {
      // 1. Signature Ais Kacang Dish (Floats near top)
      if (p1Ref.current) {
        const swayX = Math.sin(scrollY * 0.006) * 28 + mouseX * 0.4;
        const translateY = scrollY * 0.52 + mouseY * 0.4;
        const rotate = Math.sin(scrollY * 0.005) * 16 + 4;
        p1Ref.current.style.transform = `translate3d(${swayX}px, ${translateY}px, 0) rotate(${rotate}deg)`;
      }

      // 2. Artisanal Gula Apong Soft Serve (Counter-parallax on left)
      if (p2Ref.current) {
        const swayX = Math.cos(scrollY * 0.0055) * -28 - mouseX * 0.4;
        const translateY = (scrollY - 600) * -0.42 - mouseY * 0.4;
        const rotate = -8 + Math.sin(scrollY * 0.005) * 14;
        p2Ref.current.style.transform = `translate3d(${swayX}px, ${translateY}px, 0) rotate(${rotate}deg)`;
      }

      // 3. Authentic Sarawak Laksa Bowl (Floats in mid page)
      if (p3Ref.current) {
        const swayX = Math.sin(scrollY * 0.005) * 26 + mouseX * 0.35;
        const translateY = (scrollY - 1200) * 0.48 + mouseY * 0.35;
        const rotate = Math.cos(scrollY * 0.0045) * 15 - 4;
        p3Ref.current.style.transform = `translate3d(${swayX}px, ${translateY}px, 0) rotate(${rotate}deg)`;
      }

      // 4. Scenic Kuching Waterfront Sunset (Floats near bottom)
      if (p4Ref.current) {
        const swayX = Math.cos(scrollY * 0.0045) * -26 - mouseX * 0.35;
        const translateY = (scrollY - 1800) * -0.38 - mouseY * 0.35;
        const rotate = -5 + Math.sin(scrollY * 0.004) * 12;
        p4Ref.current.style.transform = `translate3d(${swayX}px, ${translateY}px, 0) rotate(${rotate}deg)`;
      }

      // Ribbon dash offset
      if (svgPath2Ref.current) {
        svgPath2Ref.current.style.strokeDashoffset = `${-scrollY * 0.85}px`;
      }
    };

    const handleScroll = () => {
      // Universal scroll calculation (works across iOS Safari, Chrome, macOS)
      const currentY =
        window.pageYOffset ||
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      updateParallax(currentY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth - 0.5) * 45;
      mouseY = (e.clientY / innerHeight - 0.5) * 45;
      const currentY = window.pageYOffset || window.scrollY || 0;
      updateParallax(currentY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouseX = (touch.clientX / window.innerWidth - 0.5) * 35;
        mouseY = (touch.clientY / window.innerHeight - 0.5) * 35;
        const currentY = window.pageYOffset || window.scrollY || 0;
        updateParallax(currentY);
      }
    };

    // Initial position on load
    handleScroll();

    // Direct event listeners (no RAF suppression, immediate native execution)
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none"
    >
      {/* =========================================================================
          CREATIVE FLUID CARAMEL RIVER RIBBON (Sarawak River & Gula Apong Trail)
      ========================================================================= */}
      <svg
        className="absolute inset-0 w-full h-full opacity-35 sm:opacity-40 pointer-events-none"
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
          ref={svgPath1Ref}
          d="M 1100,200 Q 700,800 100,1400 T 950,2400 T 200,3400"
          fill="none"
          stroke="url(#caramelStream)"
          strokeWidth="64"
          strokeLinecap="round"
          filter="url(#glow)"
        />
        <path
          ref={svgPath2Ref}
          d="M 1100,200 Q 700,800 100,1400 T 950,2400 T 200,3400"
          fill="none"
          stroke="#FEF3C7"
          strokeWidth="7"
          strokeDasharray="16 24"
        />
      </svg>

      {/* =========================================================================
          PICTURE 1: Authentic Signature Ais Kacang Dish
          Visible on iPhone beside the Taste Bento & Discover section
      ========================================================================= */}
      <div
        ref={p1Ref}
        style={{ willChange: "transform" }}
        className="absolute top-[440px] sm:top-28 right-1 sm:right-6 lg:right-12 w-44 sm:w-80 lg:w-96 rounded-full p-2 sm:p-3.5 shadow-2xl backdrop-blur-md bg-gradient-to-tr from-amber-400/60 via-rose-300/50 to-amber-200/70 ring-4 ring-amber-300/50 opacity-95"
      >
        <div className="relative aspect-square w-full rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-2xl">
          <Image
            src="/images/ais-kacang.jpg"
            alt="Authentic Ais Kacang Gambier"
            fill
            sizes="(max-width: 640px) 176px, (max-width: 1024px) 320px, 384px"
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/30 via-transparent to-transparent" />
        </div>

        {/* Floating Tethered Interactive Badge */}
        <div className="absolute -bottom-3 -left-1 sm:-bottom-4 sm:left-2 bg-white/95 backdrop-blur-md px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-amber-300 shadow-xl flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-xs font-bold text-amber-950">
          <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-600" />
          <span>Shaved Snow • RM 8.50</span>
        </div>
      </div>

      {/* =========================================================================
          PICTURE 2: Artisanal Gula Apong Soft Serve Cone
          Visible on iPhone beside the Kopitiam section
      ========================================================================= */}
      <div
        ref={p2Ref}
        style={{ willChange: "transform" }}
        className="absolute top-[1050px] sm:top-[460px] left-1 sm:left-6 lg:left-10 w-44 sm:w-72 lg:w-84 rounded-3xl p-2 sm:p-3.5 shadow-2xl backdrop-blur-md bg-gradient-to-br from-amber-400/60 via-amber-200/50 to-amber-600/60 ring-4 ring-amber-400/50 opacity-95"
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
        <div className="absolute -top-2.5 -right-1 sm:-top-3 sm:-right-3 bg-stone-900/90 text-amber-300 backdrop-blur-md px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-amber-400/40 shadow-xl flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[11px] font-bold">
          <Flame className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-amber-400" />
          <span>Warm Molasses • Churned Daily</span>
        </div>
      </div>

      {/* =========================================================================
          PICTURE 3: Authentic Sarawak Laksa Bowl
          Visible on iPhone beside the Heritage section
      ========================================================================= */}
      <div
        ref={p3Ref}
        style={{ willChange: "transform" }}
        className="absolute top-[1650px] sm:top-[900px] right-1 sm:left-4 lg:left-8 w-44 sm:w-64 lg:w-84 rounded-full p-2 sm:p-3.5 shadow-2xl backdrop-blur-md bg-gradient-to-tr from-amber-500/60 via-rose-400/50 to-emerald-300/50 ring-4 ring-rose-400/40 opacity-95"
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
        <div className="absolute -bottom-2.5 -left-1 sm:-bottom-3 sm:right-4 bg-emerald-900/95 text-emerald-200 backdrop-blur-md px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-emerald-400/40 shadow-xl flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[11px] font-bold">
          <Heart className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-emerald-300 fill-emerald-300" />
          <span>Bourdain&apos;s Pick • RM 11.50</span>
        </div>
      </div>

      {/* =========================================================================
          PICTURE 4: Scenic Kuching Waterfront at Sunset Panorama
          Visible on iPhone beside the Reviews and Visit sections
      ========================================================================= */}
      <div
        ref={p4Ref}
        style={{ willChange: "transform" }}
        className="absolute top-[2300px] sm:top-[1450px] left-1 sm:right-6 lg:right-10 w-48 sm:w-84 lg:w-[420px] rounded-3xl p-2 sm:p-3.5 shadow-2xl backdrop-blur-md bg-gradient-to-br from-amber-500/60 via-purple-400/40 to-rose-500/50 ring-4 ring-amber-400/50 opacity-95"
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
        <div className="absolute -top-2.5 -right-1 sm:-top-3 sm:left-4 bg-stone-950/95 text-amber-300 backdrop-blur-md px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-amber-400/50 shadow-xl flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-xs font-bold">
          <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-400" />
          <span>Kuching Waterfront • Darul Hana</span>
        </div>
      </div>
    </div>
  );
}
