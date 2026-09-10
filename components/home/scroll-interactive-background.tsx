"use client";

import * as React from "react";

export function ScrollInteractiveBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none"
    >
      {/* Soft, luxurious ambient dessert atmosphere glows (Clean, modern, zero rogue floating photos) */}
      <div className="absolute top-0 right-0 w-[600px] lg:w-[900px] h-[600px] lg:h-[900px] rounded-full bg-radial from-amber-400/15 via-amber-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[1100px] -left-32 w-[500px] lg:w-[750px] h-[500px] lg:h-[750px] rounded-full bg-radial from-amber-500/10 via-rose-300/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[2100px] -right-32 w-[600px] lg:w-[850px] h-[600px] lg:h-[850px] rounded-full bg-radial from-amber-400/12 via-amber-600/5 to-transparent blur-3xl pointer-events-none -z-10" />
    </div>
  );
}
