"use client";

import * as React from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";
import { soundscape } from "@/lib/audio/soundscape";
import { cn } from "@/lib/utils";

interface WaterfrontSoundscapeProps {
  className?: string;
  compact?: boolean;
}

export function WaterfrontSoundscape({ className, compact = false }: WaterfrontSoundscapeProps) {
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
          "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border backdrop-blur-md transition-all shadow-md group select-none",
          isPlaying
            ? "bg-amber-600 text-white border-amber-400 shadow-amber-900/30 ring-2 ring-amber-400/40"
            : "bg-stone-900 text-stone-200 border-amber-500/30 hover:bg-stone-800 hover:border-amber-400"
        )}
        aria-label={isPlaying ? "Mute Kuching Waterfront Audio" : "Play Kuching Waterfront River Soundscape"}
        title={isPlaying ? "Click to mute river & cricket soundscape" : "Click to listen to Sarawak River waves & night crickets"}
      >
        {isPlaying ? (
          <>
            <div className="flex items-end gap-0.5 h-3.5 w-3.5 mr-0.5">
              <span className="w-0.5 bg-white rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-full" />
              <span className="w-0.5 bg-white rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-2/3" />
              <span className="w-0.5 bg-white rounded-full animate-[pulse_0.5s_ease-in-out_infinite] h-4/5" />
            </div>
            {!compact && <span className="text-[11px] font-bold tracking-wide">Audio: ON</span>}
          </>
        ) : (
          <>
            <VolumeX className="h-3.5 w-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
            {!compact && <span className="text-[11px] font-bold tracking-wide">Audio: OFF</span>}
          </>
        )}
      </button>

      {/* Volume Hover Slider Control */}
      {showVolume && (
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 p-2.5 rounded-2xl bg-stone-950/95 border border-amber-500/40 shadow-2xl backdrop-blur-xl z-50 flex items-center gap-2 animate-in fade-in zoom-in-95 duration-150 text-white">
          <button
            onClick={toggleSound}
            className="text-stone-300 hover:text-white"
            aria-label="Toggle mute"
          >
            {isPlaying ? (
              <Volume2 className="h-4 w-4 text-amber-400" />
            ) : (
              <VolumeX className="h-4 w-4 text-stone-500" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            aria-label="Soundscape volume"
          />
        </div>
      )}
    </div>
  );
}
