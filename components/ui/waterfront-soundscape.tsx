"use client";

import * as React from "react";
import { Volume2, VolumeX, Waves, Sparkles } from "lucide-react";
import { soundscape } from "@/lib/audio/soundscape";
import { cn } from "@/lib/utils";

export function WaterfrontSoundscape({ className }: { className?: string }) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [volume, setVolume] = React.useState(0.5);
  const [showVolume, setShowVolume] = React.useState(false);

  const toggleSound = () => {
    const active = soundscape.toggleAmbient();
    setIsPlaying(active);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    soundscape.setVolume(val);
  };

  return (
    <div
      className={cn("relative inline-flex items-center", className)}
      onMouseEnter={() => setShowVolume(true)}
      onMouseLeave={() => setShowVolume(false)}
    >
      <button
        onClick={toggleSound}
        className={cn(
          "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-md transition-all shadow-md",
          isPlaying
            ? "bg-amber-600/90 text-white border-amber-400 shadow-amber-900/30"
            : "bg-stone-900/80 text-stone-200 border-amber-500/20 hover:bg-stone-800"
        )}
        aria-label={isPlaying ? "Mute Kuching Waterfront Soundscape" : "Play Kuching Waterfront Soundscape"}
        title={isPlaying ? "Mute River Soundscape" : "Listen to Sarawak River Waves & Night Crickets"}
      >
        {isPlaying ? (
          <>
            <div className="flex items-end gap-0.5 h-3.5 w-3.5 mr-0.5">
              <span className="w-0.5 bg-white rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-full" />
              <span className="w-0.5 bg-white rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-2/3" />
              <span className="w-0.5 bg-white rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-4/5" />
            </div>
            <span className="text-[11px] font-medium tracking-wide">River Sound</span>
          </>
        ) : (
          <>
            <Waves className="h-3.5 w-3.5 text-amber-400" />
            <span className="text-[11px] font-medium tracking-wide">River Sound</span>
          </>
        )}
      </button>

      {/* Volume Hover Control */}
      {showVolume && (
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 p-2 rounded-xl bg-stone-950/95 border border-amber-500/30 shadow-xl backdrop-blur-md z-50 flex items-center gap-2 animate-in fade-in zoom-in-95 duration-150">
          <button
            onClick={toggleSound}
            className="text-stone-300 hover:text-white"
            aria-label="Toggle mute"
          >
            {isPlaying ? (
              <Volume2 className="h-3.5 w-3.5 text-amber-400" />
            ) : (
              <VolumeX className="h-3.5 w-3.5 text-stone-500" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 h-1 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
            aria-label="Soundscape volume"
          />
        </div>
      )}
    </div>
  );
}
