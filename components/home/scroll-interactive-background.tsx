"use client";

import * as React from "react";

export function ScrollInteractiveBackground() {
  const [scrollY, setScrollY] = React.useState(0);
  const [mouseOffset, setMouseOffset] = React.useState({ x: 0, y: 0 });

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
      const x = (e.clientX / innerWidth - 0.5) * 35;
      const y = (e.clientY / innerHeight - 0.5) * 35;
      setMouseOffset({ x, y });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Obvious parallax motion equations
  // Background Visual 1 (Shaved Ice Mound): Moves vertically by 45% of scroll + rotates
  const iceY = scrollY * 0.45 + mouseOffset.y * 0.5;
  const iceRot = scrollY * 0.05;

  // Background Visual 2 (Caramel Syrup Waves): Swells and drifts diagonally
  const syrupY = scrollY * 0.28;
  const syrupX = Math.sin(scrollY * 0.002) * 50 + mouseOffset.x * 0.4;

  // Background Visual 3 (Soft-Serve Swirl): Floats in counter-parallax
  const softServeY = (scrollY - 400) * -0.35 - mouseOffset.y * 0.6;
  const softServeRot = -15 + scrollY * 0.04;

  // Background Visual 4 (Nipa Palm Leaves): Sways gently with scroll
  const palmY = (scrollY - 900) * 0.4 + mouseOffset.y * 0.4;
  const palmRot = 8 - scrollY * 0.03;

  // Background Visual 5 (Waterfront River Ripple Rings): Expands and translates
  const rippleY = (scrollY - 1300) * 0.3;
  const rippleScale = 1 + Math.min(scrollY * 0.0004, 0.4);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none"
    >
      {/* Base Canvas Warm Texture Gradient */}
      <div className="absolute inset-0 bg-radial from-amber-100/35 via-[#FFFDF9] to-[#FAF5EA] -z-20" />

      {/* =========================================================================
          BACKGROUND PICTURE 1: Giant Artisanal Shaved Ice (Ais Kacang) Motif
          Position: Upper Right background behind the Hero
          Moves obviously down & rotates as you scroll
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${syrupX * 0.5}px, ${iceY - 40}px, 0) rotate(${iceRot}deg)`,
          transition: "transform 0.08s cubic-bezier(0.1, 0, 0.2, 1)",
        }}
        className="absolute -top-10 -right-16 sm:right-4 lg:right-16 w-[340px] sm:w-[480px] lg:w-[560px] h-[340px] sm:h-[480px] lg:h-[560px] opacity-35 sm:opacity-45"
      >
        <svg
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-2xl"
        >
          {/* Ambient Glow */}
          <circle cx="250" cy="250" r="230" fill="url(#iceGlow)" />
          
          {/* Shaved Ice Mound Base */}
          <path
            d="M80 340C100 240 160 110 250 80C340 110 400 240 420 340C370 380 130 380 80 340Z"
            fill="url(#iceGradient)"
          />
          
          {/* Golden Gula Apong Syrup Cascading Drip */}
          <path
            d="M250 80C270 120 280 180 265 240C250 300 270 340 290 360C260 365 230 360 215 320C200 280 220 210 235 150C245 110 250 80 250 80Z"
            fill="url(#apongSyrup)"
          />
          <path
            d="M200 130C220 180 170 230 180 290C150 280 140 240 155 200C165 170 185 145 200 130Z"
            fill="url(#apongSyrupDark)"
          />
          <path
            d="M300 140C320 190 350 240 335 300C315 285 305 250 300 220C295 190 290 160 300 140Z"
            fill="url(#apongSyrupDark)"
          />

          {/* Red Beans & Sweet Corn Accents (Adzuki & Corn) */}
          <ellipse cx="170" cy="330" rx="18" ry="12" fill="#881337" />
          <ellipse cx="210" cy="345" rx="16" ry="11" fill="#9F1239" />
          <ellipse cx="320" cy="335" rx="18" ry="12" fill="#881337" />
          <circle cx="250" cy="340" r="10" fill="#F59E0B" />
          <circle cx="280" cy="330" r="9" fill="#FBBF24" />
          <circle cx="190" cy="315" r="9" fill="#F59E0B" />

          {/* Ceramic Serving Bowl Rim */}
          <path
            d="M60 330C120 375 380 375 440 330C410 430 90 430 60 330Z"
            fill="url(#bowlGradient)"
            stroke="#B45309"
            strokeWidth="4"
          />
          <ellipse cx="250" cy="335" rx="190" ry="30" fill="none" stroke="#D97706" strokeWidth="3" />

          {/* Gradients */}
          <defs>
            <radialGradient id="iceGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 250) rotate(90) scale(230)">
              <stop stopColor="#FDE68A" stopOpacity="0.4" />
              <stop offset="0.7" stopColor="#FED7AA" stopOpacity="0.15" />
              <stop offset="1" stopColor="#FED7AA" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="iceGradient" x1="250" y1="80" x2="250" y2="360" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="0.6" stopColor="#FEF3C7" />
              <stop offset="1" stopColor="#FDE68A" />
            </linearGradient>
            <linearGradient id="apongSyrup" x1="250" y1="80" x2="250" y2="360" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D97706" />
              <stop offset="0.5" stopColor="#B45309" />
              <stop offset="1" stopColor="#78350F" />
            </linearGradient>
            <linearGradient id="apongSyrupDark" x1="250" y1="80" x2="250" y2="360" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B45309" />
              <stop offset="1" stopColor="#78350F" />
            </linearGradient>
            <linearGradient id="bowlGradient" x1="250" y1="330" x2="250" y2="430" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFDF9" />
              <stop offset="1" stopColor="#E7D8C4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* =========================================================================
          BACKGROUND PICTURE 2: Flowing Caramel Gula Apong River Waves
          Position: Mid Left background, flowing behind Menu & Offerings
          Moves horizontally & vertically on scroll
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${syrupX}px, ${syrupY}px, 0)`,
          transition: "transform 0.1s ease-out",
        }}
        className="absolute top-[480px] -left-20 sm:-left-10 w-[600px] lg:w-[850px] h-[500px] opacity-25 sm:opacity-35"
      >
        <svg
          viewBox="0 0 800 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Dynamic flowing ribbon 1 */}
          <path
            d="M-50 150C150 220 300 80 500 200C700 320 750 180 850 240L850 450L-50 450Z"
            fill="url(#amberWave1)"
          />
          {/* Dynamic flowing ribbon 2 */}
          <path
            d="M-50 260C180 180 320 340 520 220C720 100 780 280 850 310L850 450L-50 450Z"
            fill="url(#amberWave2)"
          />

          <defs>
            <linearGradient id="amberWave1" x1="0" y1="150" x2="800" y2="350" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" stopOpacity="0.3" />
              <stop offset="0.5" stopColor="#D97706" stopOpacity="0.2" />
              <stop offset="1" stopColor="#B45309" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="amberWave2" x1="0" y1="200" x2="800" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FEF3C7" stopOpacity="0.5" />
              <stop offset="0.6" stopColor="#FDE68A" stopOpacity="0.3" />
              <stop offset="1" stopColor="#F59E0B" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* =========================================================================
          BACKGROUND PICTURE 3: Artisanal Gula Apong Soft Serve Cone
          Position: Mid Right background, drifting upwards
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${-mouseOffset.x * 0.4}px, ${softServeY + 700}px, 0) rotate(${softServeRot}deg)`,
          transition: "transform 0.08s cubic-bezier(0.1, 0, 0.2, 1)",
        }}
        className="absolute top-[600px] -right-14 sm:right-6 lg:right-20 w-[260px] sm:w-[380px] h-[360px] sm:h-[500px] opacity-30 sm:opacity-40"
      >
        <svg
          viewBox="0 0 350 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xl"
        >
          {/* Swirled Cream Layers */}
          <path
            d="M175 40C190 70 215 90 205 120C190 150 140 145 135 170C130 195 180 200 175 230C165 260 90 260 90 290C90 320 250 320 250 290C250 260 210 240 220 210C230 180 255 160 240 120C225 80 190 60 175 40Z"
            fill="url(#softServeGradient)"
          />
          {/* Caramel Drizzle Lines */}
          <path
            d="M175 60C195 100 150 140 190 190C220 230 160 270 180 300"
            stroke="#92400E"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M140 150C160 190 130 230 145 280"
            stroke="#B45309"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Crispy Waffle Cone */}
          <path
            d="M90 300L175 480L250 300Z"
            fill="url(#waffleGradient)"
            stroke="#B45309"
            strokeWidth="3"
          />
          {/* Waffle Cross Grid lines */}
          <path d="M110 330L225 360" stroke="#78350F" strokeWidth="2" strokeOpacity="0.4" />
          <path d="M125 370L210 400" stroke="#78350F" strokeWidth="2" strokeOpacity="0.4" />
          <path d="M140 410L195 440" stroke="#78350F" strokeWidth="2" strokeOpacity="0.4" />
          <path d="M230 330L115 360" stroke="#78350F" strokeWidth="2" strokeOpacity="0.4" />
          <path d="M215 370L130 400" stroke="#78350F" strokeWidth="2" strokeOpacity="0.4" />

          <defs>
            <linearGradient id="softServeGradient" x1="175" y1="40" x2="175" y2="320" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFBEB" />
              <stop offset="0.5" stopColor="#FDE68A" />
              <stop offset="1" stopColor="#F59E0B" />
            </linearGradient>
            <linearGradient id="waffleGradient" x1="175" y1="300" x2="175" y2="480" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D97706" />
              <stop offset="0.7" stopColor="#B45309" />
              <stop offset="1" stopColor="#78350F" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* =========================================================================
          BACKGROUND PICTURE 4: Lush Borneo Nipa Palm Leaves & Pandan Botanical Fronds
          Position: Mid-Lower Left background behind Heritage section
          Moves and sways smoothly with scroll
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(${mouseOffset.x * 0.3}px, ${palmY + 1100}px, 0) rotate(${palmRot}deg)`,
          transition: "transform 0.08s cubic-bezier(0.1, 0, 0.2, 1)",
        }}
        className="absolute top-[1000px] -left-16 sm:-left-6 lg:left-4 w-[320px] sm:w-[460px] h-[340px] sm:h-[480px] opacity-25 sm:opacity-35"
      >
        <svg
          viewBox="0 0 450 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Main Leaf Stem */}
          <path
            d="M50 420C120 340 240 200 380 70"
            stroke="#065F46"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Fronds Array */}
          <path d="M120 340C160 300 210 310 240 330C190 345 150 350 120 340Z" fill="#047857" fillOpacity="0.8" />
          <path d="M160 300C210 250 270 260 300 280C250 295 200 305 160 300Z" fill="#059669" fillOpacity="0.85" />
          <path d="M210 250C260 190 330 200 360 220C310 235 250 250 210 250Z" fill="#047857" fillOpacity="0.8" />
          <path d="M260 190C310 130 380 140 410 160C360 175 300 190 260 190Z" fill="#10B981" fillOpacity="0.75" />
          <path d="M310 130C360 70 410 80 435 95C395 110 345 125 310 130Z" fill="#059669" fillOpacity="0.8" />

          {/* Leftside Leaflets */}
          <path d="M130 360C90 320 60 340 40 370C75 370 105 370 130 360Z" fill="#065F46" fillOpacity="0.75" />
          <path d="M180 310C130 260 90 280 70 310C110 315 150 320 180 310Z" fill="#047857" fillOpacity="0.8" />
          <path d="M230 250C180 190 140 210 120 240C160 248 200 255 230 250Z" fill="#059669" fillOpacity="0.85" />
          <path d="M280 190C230 130 180 150 160 175C200 185 245 190 280 190Z" fill="#10B981" fillOpacity="0.7" />
        </svg>
      </div>

      {/* =========================================================================
          BACKGROUND PICTURE 5: Sarawak River Water Ripples & Sunset Rings
          Position: Bottom Center/Right behind Reviews & Visit section
          Expands smoothly as you reach the lower half of the page
      ========================================================================= */}
      <div
        style={{
          transform: `translate3d(0, ${rippleY + 1600}px, 0) scale(${rippleScale})`,
          transition: "transform 0.12s ease-out",
        }}
        className="absolute top-[1300px] left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[700px] sm:h-[1000px] opacity-25 sm:opacity-35"
      >
        <svg
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Concentric ripple rings simulating the river breeze */}
          <circle cx="400" cy="400" r="120" stroke="#F59E0B" strokeWidth="2" strokeDasharray="6 8" />
          <circle cx="400" cy="400" r="200" stroke="#D97706" strokeWidth="2.5" strokeOpacity="0.7" />
          <circle cx="400" cy="400" r="280" stroke="#B45309" strokeWidth="1.5" strokeDasharray="12 12" strokeOpacity="0.5" />
          <circle cx="400" cy="400" r="360" stroke="#78350F" strokeWidth="2" strokeOpacity="0.3" />
        </svg>
      </div>
    </div>
  );
}
