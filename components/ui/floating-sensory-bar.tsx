"use client";

import * as React from "react";
import { WaterfrontSoundscape } from "@/components/ui/waterfront-soundscape";
import { AmbientModeSwitcher } from "@/components/ui/ambient-mode-switcher";

export function FloatingSensoryBar() {
  return (
    <aside
      aria-label="Waterfront Atmosphere & Audio Controls"
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2 p-1.5 rounded-full bg-stone-950/90 border border-amber-500/40 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-300"
    >
      {/* Audio Soundscape Toggle */}
      <WaterfrontSoundscape />

      <div className="w-px h-4 bg-stone-800" />

      {/* Atmosphere Switcher */}
      <AmbientModeSwitcher />
    </aside>
  );
}
