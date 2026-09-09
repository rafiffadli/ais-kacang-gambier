"use client";

import * as React from "react";
import Image from "next/image";

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
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Obvious, high-amplitude parallax math
  // Picture 1: Ais Kacang Dish (Upper Right) - drifts down and tilts
  const p1Y = scrollY * 0.42 + mousePos.y * 0.5;
  const p1Rot = 6 + scrollY * 0.035;

  // Picture 2: Gula Apong Soft Serve Cone (Upper Left) - shoots upward
  const p2Y = scrollY * -0.55 - mousePos.y * 0.6;
  const p2Rot = -10 + scrollY * 0.04;

  // Picture 3: Sarawak Laksa Bowl (Mid Left) - translates with scroll
  const p3Y = (scrollY - 700) * 0.38 + mousePos.y * 0.4;
  const p3Rot = 8 - scrollY * 0.03;

  // Picture 4: Kuching Waterfront Sunset (Mid-Lower Right) - floats smoothly
  const p4Y = (scrollY - 1100) * -0.32 - mousePos.y * 0.5;
  const p4Rot = -4 + scrollY * 0.02;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none"
    >
      {/* =========================================================================
          PICTURE 1: Real Photo of Signature Ais Kacang Dish
          Position: Right side of Hero/Menu background
          Action: Moves visibly downward with rotational drift on scroll
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${mousePos.x * 0.4}px, ${p1Y}px, 0) rotate(${p1Rot}deg)`,
          transition: "transform 0.06s cubic-bezier(0.1, 0, 0.2, 1)",
        }}
        className="absolute top-24 -right-12 sm:right-2 lg:right-10 w-64 sm:w-80 lg:w-96 rounded-full p-3 bg-gradient-to-tr from-amber-400/40 via-rose-300/30 to-amber-200/50 shadow-2xl backdrop-blur-md opacity-85 sm:opacity-90"
      >
        <div className="relative aspect-square w-full rounded-full overflow-hidden border-4 border-white/90 shadow-2xl">
          <Image
            src="/images/ais-kacang.jpg"
            alt="Authentic Ais Kacang Gambier"
            fill
            sizes="(max-width: 768px) 260px, 384px"
            className="object-cover scale-105"
            priority
          />
          {/* Ambient overlay to blend softly with boutique dessert palette */}
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* =========================================================================
          PICTURE 2: Real Photo of Gula Apong Soft Serve Cone
          Position: Left side of Hero background
          Action: Rises up fast in counter-parallax as you scroll down
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${-mousePos.x * 0.4}px, ${p2Y}px, 0) rotate(${p2Rot}deg)`,
          transition: "transform 0.06s cubic-bezier(0.1, 0, 0.2, 1)",
        }}
        className="absolute top-96 -left-10 sm:left-4 lg:left-8 w-56 sm:w-72 lg:w-84 rounded-3xl p-3 bg-gradient-to-br from-amber-300/40 via-white/40 to-amber-500/30 shadow-2xl backdrop-blur-md opacity-85 sm:opacity-90"
      >
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden border-4 border-white/90 shadow-2xl">
          <Image
            src="/images/gula-apong-cone.jpg"
            alt="Artisanal Gula Apong Soft Serve"
            fill
            sizes="(max-width: 768px) 224px, 336px"
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* =========================================================================
          PICTURE 3: Real Photo of Authentic Sarawak Laksa Bowl
          Position: Mid Left background, flanking the Signature Menu
          Action: Translates and rotates as you scroll through menu
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${mousePos.x * 0.3}px, ${p3Y + 800}px, 0) rotate(${p3Rot}deg)`,
          transition: "transform 0.06s cubic-bezier(0.1, 0, 0.2, 1)",
        }}
        className="hidden md:block absolute top-[500px] left-2 lg:left-8 w-64 lg:w-80 rounded-full p-3 bg-gradient-to-tr from-amber-500/30 via-rose-400/30 to-white/50 shadow-2xl backdrop-blur-md opacity-85"
      >
        <div className="relative aspect-square w-full rounded-full overflow-hidden border-4 border-white/90 shadow-2xl">
          <Image
            src="/images/sarawak-laksa.jpg"
            alt="Sarawak Laksa Kopitiam Heritage"
            fill
            sizes="320px"
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* =========================================================================
          PICTURE 4: Real Panoramic Photo of Kuching Waterfront at Sunset
          Position: Mid-Lower Right background, flanking Heritage & Reviews
          Action: Glides smoothly in deep parallax
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${-mousePos.x * 0.3}px, ${p4Y + 1200}px, 0) rotate(${p4Rot}deg)`,
          transition: "transform 0.06s cubic-bezier(0.1, 0, 0.2, 1)",
        }}
        className="hidden md:block absolute top-[850px] -right-8 lg:right-6 w-80 lg:w-96 rounded-3xl p-3.5 bg-gradient-to-br from-amber-500/30 via-purple-400/20 to-stone-900/40 shadow-2xl backdrop-blur-md opacity-85"
      >
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden border-4 border-white/90 shadow-2xl">
          <Image
            src="/images/kuching-waterfront.jpg"
            alt="Kuching Waterfront Darul Hana Bridge Sunset"
            fill
            sizes="384px"
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/30 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
