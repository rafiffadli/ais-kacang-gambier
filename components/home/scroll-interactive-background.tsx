"use client";

import * as React from "react";
import { Sparkles, Star, MapPin, Heart, Flame } from "lucide-react";

export function ScrollInteractiveBackground() {
  const [scrollY, setScrollY] = React.useState(0);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Noticeable Parallax Calculation factors for obvious movement
  // Card 1 (Top Left): Moves upward faster as you scroll
  const card1Y = scrollY * -0.42 + mousePos.y * 0.8;
  const card1Rot = -8 + scrollY * 0.035;

  // Card 2 (Top Right): Drifts downward with subtle counter-rotation
  const card2Y = scrollY * 0.38 - mousePos.y * 0.6;
  const card2Rot = 10 - scrollY * 0.04;

  // Card 3 (Mid-Page Left): Drifts upward noticeably
  const card3Y = (scrollY - 600) * -0.5 + mousePos.y * 0.5;
  const card3Rot = 6 + scrollY * 0.025;

  // Card 4 (Mid-Page Right): Shifts downward with deep depth
  const card4Y = (scrollY - 800) * 0.45 - mousePos.y * 0.7;
  const card4Rot = -12 + scrollY * 0.03;

  // Small floating elements (Droplet, Pandan, Peanut, Sparkle)
  const dropY = scrollY * -0.65;
  const leafY = scrollY * 0.5;
  const peanutY = (scrollY - 400) * -0.7;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-20"
    >
      {/* =========================================================
          PICTURE 1 (Top Left): Artisanal Gula Apong Soft Serve Card
          Moves obviously upward and tilts on scroll
      ========================================================= */}
      <div
        style={{
          transform: `translate3d(${mousePos.x * 0.5}px, ${card1Y}px, 0) rotate(${card1Rot}deg)`,
          transition: "transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)",
        }}
        className="absolute top-36 -left-6 sm:left-4 lg:left-10 w-48 sm:w-60 rounded-3xl bg-white/90 p-3.5 shadow-2xl border-2 border-amber-300/80 backdrop-blur-md"
      >
        {/* Visual Dessert Frame */}
        <div className="relative h-44 sm:h-52 w-full rounded-2xl bg-gradient-to-tr from-amber-900 via-amber-700 to-amber-500 p-4 flex flex-col justify-between text-white overflow-hidden shadow-inner">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-amber-200 border border-amber-300/30">
              🍦 Soft Serve
            </span>
            <div className="flex items-center gap-0.5 text-amber-300 text-xs font-bold bg-black/30 px-2 py-0.5 rounded-full">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              <span>4.9</span>
            </div>
          </div>

          {/* Graphical Representation of Soft Serve Cone */}
          <div className="my-auto text-center space-y-1">
            <div className="w-14 h-14 mx-auto rounded-full bg-amber-200/20 border border-amber-200/40 flex items-center justify-center text-3xl shadow-lg animate-bounce">
              🍦
            </div>
            <p className="font-serif text-lg font-bold text-white drop-shadow-md">
              Gula Apong Cone
            </p>
          </div>

          <div className="flex items-center justify-between text-[11px] pt-1 border-t border-white/20">
            <span className="text-amber-200 font-semibold">Churned Daily</span>
            <span className="font-bold text-white bg-amber-950/60 px-2 py-0.5 rounded">
              RM 6.90
            </span>
          </div>
        </div>

        <div className="pt-2 px-1 flex items-center justify-between text-[10px] text-stone-600 font-bold">
          <span className="flex items-center gap-1 text-amber-800">
            <Flame className="h-3 w-3 text-amber-600" />
            Warm Palm Molasses
          </span>
          <span className="text-emerald-700">★ Best Seller</span>
        </div>
      </div>

      {/* =========================================================
          PICTURE 2 (Top Right): Signature Ais Kacang Mountain Card
          Moves obviously downward and rotates counter-clockwise
      ========================================================= */}
      <div
        style={{
          transform: `translate3d(${-mousePos.x * 0.5}px, ${card2Y}px, 0) rotate(${card2Rot}deg)`,
          transition: "transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)",
        }}
        className="absolute top-44 -right-8 sm:right-6 lg:right-14 w-52 sm:w-64 rounded-3xl bg-white/90 p-4 shadow-2xl border-2 border-rose-300/80 backdrop-blur-md"
      >
        <div className="relative h-48 sm:h-56 w-full rounded-2xl bg-gradient-to-tr from-stone-900 via-rose-950 to-amber-900 p-4 flex flex-col justify-between text-white overflow-hidden shadow-inner">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full text-rose-200 border border-rose-400/30">
              🍧 Shaved Snow
            </span>
            <span className="text-xs font-serif font-black text-amber-300 bg-amber-950/70 px-2.5 py-0.5 rounded-full border border-amber-400/40">
              RM 8.50
            </span>
          </div>

          {/* Ice Bowl Visual */}
          <div className="my-auto text-center space-y-1">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-4xl shadow-lg">
              🍧
            </div>
            <p className="font-serif text-base sm:text-lg font-bold text-white drop-shadow-md">
              Ais Kacang Warisan
            </p>
            <p className="text-[10px] text-rose-200">
              Red Bean • Sweet Corn • Roasted Peanuts
            </p>
          </div>

          <div className="pt-2 border-t border-white/20 flex items-center justify-between text-[10px]">
            <span className="text-stone-300 flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-amber-400" />
              100% Gula Apong
            </span>
            <span className="text-amber-300 font-semibold">Jalan Gambier</span>
          </div>
        </div>

        <div className="pt-2 px-1 flex items-center justify-between text-[10px] font-semibold text-stone-700">
          <span>Snow Ribbon Texture</span>
          <span className="text-rose-700 font-bold">♥ Local Favorite</span>
        </div>
      </div>

      {/* =========================================================
          PICTURE 3 (Mid-Page Left): Pure Sarawak Gula Apong Nectar Pot
          Appears around scroll depth and drifts dynamically
      ========================================================= */}
      <div
        style={{
          transform: `translate3d(${mousePos.x * 0.4}px, ${card3Y}px, 0) rotate(${card3Rot}deg)`,
          transition: "transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)",
        }}
        className="hidden md:block absolute top-[900px] left-8 lg:left-14 w-56 rounded-3xl bg-white/90 p-3.5 shadow-2xl border-2 border-amber-400/80 backdrop-blur-md"
      >
        <div className="relative h-44 w-full rounded-2xl bg-gradient-to-br from-amber-800 via-amber-900 to-stone-900 p-4 flex flex-col justify-between text-white overflow-hidden shadow-inner">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-amber-950/70 px-2 py-0.5 rounded text-amber-300">
              🌴 100% Pure Sap
            </span>
            <span className="text-[10px] bg-emerald-800/80 text-emerald-200 px-2 py-0.5 rounded font-bold">
              Unrefined
            </span>
          </div>

          <div className="text-center my-auto space-y-1">
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/30 flex items-center justify-center text-3xl">
              🍯
            </div>
            <p className="font-serif text-base font-bold text-amber-200">
              Sarawak Gula Apong
            </p>
            <p className="text-[10px] text-stone-300">
              Simmered in giant iron woks
            </p>
          </div>

          <div className="text-[10px] text-amber-300/90 font-medium text-center">
            Smoky Caramel &amp; Butterscotch Notes
          </div>
        </div>

        <p className="text-[10px] text-stone-600 font-bold text-center mt-2">
          Harvested from Borneo Mangrove Rivers
        </p>
      </div>

      {/* =========================================================
          PICTURE 4 (Mid-Page Right): Kuching Waterfront Sunset Card
          Drifts downward with tilt on scroll
      ========================================================= */}
      <div
        style={{
          transform: `translate3d(${-mousePos.x * 0.4}px, ${card4Y}px, 0) rotate(${card4Rot}deg)`,
          transition: "transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)",
        }}
        className="hidden md:block absolute top-[1150px] right-8 lg:right-16 w-60 rounded-3xl bg-white/90 p-3.5 shadow-2xl border-2 border-stone-300/80 backdrop-blur-md"
      >
        <div className="relative h-48 w-full rounded-2xl bg-gradient-to-tr from-purple-950 via-rose-900 to-amber-600 p-4 flex flex-col justify-between text-white overflow-hidden shadow-inner">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-black/40 px-2 py-0.5 rounded text-amber-200">
              🌅 Sunset Landmark
            </span>
            <MapPin className="h-3.5 w-3.5 text-amber-300" />
          </div>

          <div className="text-center my-auto space-y-1">
            <div className="text-3xl">⛵</div>
            <p className="font-serif text-base font-bold text-white">
              Kuching Waterfront
            </p>
            <p className="text-[10px] text-rose-200">
              Darul Hana Musical Fountain
            </p>
          </div>

          <div className="text-[10px] text-amber-200 font-semibold text-center border-t border-white/20 pt-1">
            Nightly Show: 8:30 PM
          </div>
        </div>

        <p className="text-[10px] text-stone-700 font-bold text-center mt-2">
          7, Jalan Gambier • Scenic River Breeze
        </p>
      </div>

      {/* =========================================================
          HIGH-CONTRAST FLOATING INGREDIENTS PARTICLES
          (Peanuts, Pandan Leaves, Palm Sugar droplets, Ice Crystals)
      ========================================================= */}
      {/* 1. Golden Palm Sugar Droplet (Left) */}
      <div
        style={{
          transform: `translate3d(0, ${dropY}px, 0)`,
          transition: "transform 0.15s ease-out",
        }}
        className="absolute top-72 left-[18%] sm:left-[22%] w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-xl border-2 border-amber-200/80 flex items-center justify-center text-sm text-white opacity-85 animate-pulse"
      >
        💧
      </div>

      {/* 2. Emerald Pandan Leaf Ribbon (Right) */}
      <div
        style={{
          transform: `translate3d(0, ${leafY}px, 0) rotate(${scrollY * 0.08}deg)`,
          transition: "transform 0.15s ease-out",
        }}
        className="absolute top-96 right-[18%] sm:right-[24%] w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-green-400 shadow-xl border-2 border-emerald-200/80 flex items-center justify-center text-lg text-white opacity-85"
      >
        🍃
      </div>

      {/* 3. Roasted Peanut Crunch (Mid Center-Left) */}
      <div
        style={{
          transform: `translate3d(0, ${peanutY}px, 0) rotate(${-scrollY * 0.09}deg)`,
          transition: "transform 0.15s ease-out",
        }}
        className="absolute top-[650px] left-[12%] w-9 h-9 rounded-xl bg-gradient-to-br from-amber-700 to-amber-900 shadow-lg border border-amber-300 flex items-center justify-center text-xs text-white opacity-80"
      >
        🥜
      </div>

      {/* 4. Sparkling Ice Crystal (Mid Center-Right) */}
      <div
        style={{
          transform: `translate3d(0, ${scrollY * -0.3}px, 0)`,
          transition: "transform 0.15s ease-out",
        }}
        className="absolute top-[800px] right-[14%] w-9 h-9 rounded-full bg-white/90 shadow-lg border border-rose-300 flex items-center justify-center text-sm text-rose-500 opacity-80"
      >
        ❄️
      </div>
    </div>
  );
}
