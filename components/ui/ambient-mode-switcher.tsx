"use client";

import * as React from "react";
import { Sun, Sunset, Moon, Sparkles, Clock } from "lucide-react";
import { useAmbientMode, AmbientModeSetting } from "./ambient-mode-provider";
import { cn } from "@/lib/utils";

export function AmbientModeSwitcher({ className }: { className?: string }) {
  const { modeSetting, activeTheme, kuchingTime, setModeSetting } = useAmbientMode();
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const getThemeMeta = (mode: AmbientModeSetting) => {
    switch (mode) {
      case "afternoon":
        return {
          label: "Afternoon River Sun",
          shortLabel: "Day Sun",
          icon: <Sun className="h-3.5 w-3.5 text-amber-500" />,
          desc: "Warm ivory & golden sunlight",
        };
      case "sunset":
        return {
          label: "Sarawak Sunset Dusk",
          shortLabel: "Sunset",
          icon: <Sunset className="h-3.5 w-3.5 text-rose-400" />,
          desc: "Violet twilight & amber river glow",
        };
      case "night":
        return {
          label: "Darul Hana Lantern Glow",
          shortLabel: "Night Glow",
          icon: <Moon className="h-3.5 w-3.5 text-cyan-400" />,
          desc: "Deep palm charcoal & fountain neon",
        };
      default:
        return {
          label: `Auto (${kuchingTime || "Kuching"})`,
          shortLabel: "Auto Clock",
          icon: <Clock className="h-3.5 w-3.5 text-amber-400" />,
          desc: `Synced with Kuching time (${activeTheme})`,
        };
    }
  };

  const currentMeta = getThemeMeta(modeSetting);

  return (
    <div className={cn("relative inline-block", className)}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-stone-900/80 text-stone-100 hover:bg-stone-800 border border-amber-500/30 backdrop-blur-md shadow-md transition-all group"
        title="Switch Waterfront Atmosphere (Afternoon / Sunset / Night Lantern)"
      >
        <span className="shrink-0">{currentMeta.icon}</span>
        <span className="text-[11px] font-medium tracking-wide">
          {modeSetting === "auto" ? `Auto: ${activeTheme}` : currentMeta.shortLabel}
        </span>
        <Sparkles className="h-2.5 w-2.5 text-amber-400/70 group-hover:text-amber-300 ml-0.5" />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsDropdownOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-stone-950/95 border border-amber-500/30 p-2 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150 text-white">
            <div className="px-3 py-2 border-b border-stone-800 text-[10px] font-bold uppercase tracking-widest text-amber-400/90 flex items-center justify-between">
              <span>Waterfront Atmosphere</span>
              <span className="text-stone-400 font-normal lowercase">{kuchingTime}</span>
            </div>

            <div className="p-1 space-y-1">
              {(["auto", "afternoon", "sunset", "night"] as AmbientModeSetting[]).map((mode) => {
                const meta = getThemeMeta(mode);
                const isSelected = modeSetting === mode;
                return (
                  <button
                    key={mode}
                    onClick={() => {
                      setModeSetting(mode);
                      setIsDropdownOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-left transition-all text-xs",
                      isSelected
                        ? "bg-amber-600/30 border border-amber-500/50 text-white font-bold"
                        : "text-stone-300 hover:bg-stone-800/80 hover:text-white"
                    )}
                  >
                    <span className="p-1.5 rounded-lg bg-stone-900 border border-stone-800">
                      {meta.icon}
                    </span>
                    <div className="flex flex-col flex-1 leading-tight">
                      <span className="font-semibold text-xs">{meta.label}</span>
                      <span className="text-[10px] text-stone-400 font-normal">
                        {meta.desc}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
