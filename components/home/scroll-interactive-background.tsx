"use client";

import * as React from "react";
import Image from "next/image";
import { Sparkles, Flame, MapPin, Heart } from "lucide-react";

export function ScrollInteractiveBackground() {
  const p1Ref = React.useRef<HTMLDivElement>(null);
  const p2Ref = React.useRef<HTMLDivElement>(null);
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
    let time = 0;
    let pointer = { x: 0, y: 0 };
    let animFrameId: number;

    const updateScrollPos = () => {
      targetScrollY =
        window.pageYOffset ||
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      pointer.x = (e.clientX / innerWidth - 0.5) * 40;
      pointer.y = (e.clientY / innerHeight - 0.5) * 40;
    };

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        // Subtle tilt responsiveness on physical phones
        pointer.x = Math.max(-25, Math.min(25, e.gamma * 0.8));
        pointer.y = Math.max(-25, Math.min(25, (e.beta - 45) * 0.6));
      }
    };

    const handleTouchMove = () => {
      updateScrollPos();
    };

    // Initial position
    updateScrollPos();
    currentScrollY = targetScrollY;

    // Listeners for robust cross-platform capture
    window.addEventListener("scroll", updateScrollPos, { passive: true });
    document.addEventListener("scroll", updateScrollPos, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    if (typeof window !== "undefined" && "DeviceOrientationEvent" in window) {
      window.addEventListener("deviceorientation", handleDeviceOrientation, {
        passive: true,
      });
    }

    // =========================================================================
    // HIGH-PERFORMANCE ZERO-RERENDER RAF LOOP (60fps / 120Hz ProMotion Native)
    // =========================================================================
    const tick = () => {
      time += 0.025;

      // Smooth lerp: silky responsive catch-up to touch scroll
      currentScrollY += (targetScrollY - currentScrollY) * 0.14;

      // Harmonic wave ensures road & dishes ALWAYS breathe and move, even when idle
      const wave = Math.sin(time + currentScrollY * 0.0025) * 45;

      // 1. Dynamic Road Geometry
      const qX = 650 + Math.sin(currentScrollY * 0.0035) * 110 + wave + pointer.x * 1.5;
      const qY = 700 + Math.cos(currentScrollY * 0.003) * 70 + currentScrollY * 0.16;
      const t1X = 950 - Math.sin(currentScrollY * 0.003) * 100 - wave - pointer.x * 1.5;
      const t1Y = 2200 + Math.sin(currentScrollY * 0.0028) * 60;
      const t2X = 250 + Math.cos(currentScrollY * 0.0035) * 80 + pointer.x * 0.8;
      const t2Y = 3400;

      const roadD = `M 1100,150 Q ${qX.toFixed(1)},${qY.toFixed(1)} 100,1300 T ${t1X.toFixed(1)},${t1Y.toFixed(1)} T ${t2X.toFixed(1)},${t2Y}`;

      if (roadGlowRef.current) roadGlowRef.current.setAttribute("d", roadD);
      if (roadCoreRef.current) roadCoreRef.current.setAttribute("d", roadD);
      if (roadDashRef.current) {
        roadDashRef.current.setAttribute("d", roadD);
        roadDashRef.current.setAttribute(
          "stroke-dashoffset",
          `${(-currentScrollY * 1.15 - time * 12).toFixed(1)}`
        );
      }

      // 2. Dish 1: Authentic Signature Ais Kacang
      if (p1Ref.current) {
        const p1X = Math.sin(currentScrollY * 0.0045) * 26 + Math.cos(time) * 7 + pointer.x * 0.4;
        const p1Y = currentScrollY * -0.3 + Math.sin(time * 0.9) * 9 + pointer.y * 0.3;
        const p1Rot = Math.sin(currentScrollY * 0.0035 + time * 0.4) * 12 + 4;
        const p1Scale = 1 + Math.sin(time * 0.75) * 0.035;
        p1Ref.current.style.transform = `translate3d(${p1X.toFixed(1)}px, ${p1Y.toFixed(1)}px, 0) rotate(${p1Rot.toFixed(1)}deg) scale(${p1Scale.toFixed(3)})`;
      }

      // 3. Dish 2: Artisanal Gula Apong Soft Serve
      if (p2Ref.current) {
        const p2X = Math.cos(currentScrollY * 0.004) * -26 + Math.sin(time + 1.2) * 7 - pointer.x * 0.4;
        const p2Y = (currentScrollY - 700) * 0.32 + Math.cos(time * 0.85) * 9 - pointer.y * 0.3;
        const p2Rot = -6 + Math.cos(currentScrollY * 0.004 + time * 0.4) * 12;
        const p2Scale = 1 + Math.cos(time * 0.7) * 0.035;
        p2Ref.current.style.transform = `translate3d(${p2X.toFixed(1)}px, ${p2Y.toFixed(1)}px, 0) rotate(${p2Rot.toFixed(1)}deg) scale(${p2Scale.toFixed(3)})`;
      }

      // 4. Dish 3: Authentic Sarawak Laksa
      if (p3Ref.current) {
        const p3X = Math.sin(currentScrollY * 0.004) * 24 + Math.cos(time + 2.1) * 7 + pointer.x * 0.35;
        const p3Y = (currentScrollY - 1400) * -0.26 + Math.sin(time * 0.9) * 9 + pointer.y * 0.25;
        const p3Rot = Math.cos(currentScrollY * 0.0035 + time * 0.35) * 11 - 3;
        const p3Scale = 1 + Math.sin(time * 0.8) * 0.035;
        p3Ref.current.style.transform = `translate3d(${p3X.toFixed(1)}px, ${p3Y.toFixed(1)}px, 0) rotate(${p3Rot.toFixed(1)}deg) scale(${p3Scale.toFixed(3)})`;
      }

      // 5. Dish 4: Scenic Kuching Waterfront Sunset
      if (p4Ref.current) {
        const p4X = Math.cos(currentScrollY * 0.0035) * -24 + Math.sin(time + 3) * 7 - pointer.x * 0.35;
        const p4Y = (currentScrollY - 2100) * 0.28 + Math.cos(time * 0.75) * 9 - pointer.y * 0.25;
        const p4Rot = -4 + Math.sin(currentScrollY * 0.003 + time * 0.35) * 10;
        const p4Scale = 1 + Math.cos(time * 0.7) * 0.035;
        p4Ref.current.style.transform = `translate3d(${p4X.toFixed(1)}px, ${p4Y.toFixed(1)}px, 0) rotate(${p4Rot.toFixed(1)}deg) scale(${p4Scale.toFixed(3)})`;
      }

      animFrameId = requestAnimationFrame(tick);
    };

    animFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("scroll", updateScrollPos);
      document.removeEventListener("scroll", updateScrollPos);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mousemove", handleMouseMove);
      if (typeof window !== "undefined" && "DeviceOrientationEvent" in window) {
        window.removeEventListener("deviceorientation", handleDeviceOrientation);
      }
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
          PICTURE 1: Authentic Signature Ais Kacang Dish
      ========================================================================= */}
      <div
        ref={p1Ref}
        style={{ willChange: "transform" }}
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
      ========================================================================= */}
      <div
        ref={p2Ref}
        style={{ willChange: "transform" }}
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
