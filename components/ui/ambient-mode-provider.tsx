"use client";

import * as React from "react";

export type AmbientTheme = "afternoon" | "sunset" | "night";
export type AmbientModeSetting = "auto" | "afternoon" | "sunset" | "night";

interface AmbientContextType {
  modeSetting: AmbientModeSetting;
  activeTheme: AmbientTheme;
  kuchingTime: string;
  setModeSetting: (setting: AmbientModeSetting) => void;
  cycleNextMode: () => void;
}

const AmbientContext = React.createContext<AmbientContextType | undefined>(undefined);

export function getKuchingHour(): number {
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kuching",
      hour: "numeric",
      hour12: false,
    });
    return parseInt(formatter.format(new Date()), 10) || 12;
  } catch {
    // Fallback to local machine hour if Intl timezone fails
    return new Date().getHours();
  }
}

export function computeThemeFromHour(hour: number): AmbientTheme {
  // Sunset twilight around Kuching Waterfront: 18:00 - 19:30
  if (hour >= 18 && hour < 20) return "sunset";
  // Night lantern & Darul Hana fountain glow: 20:00 - 06:00
  if (hour >= 20 || hour < 6) return "night";
  // Daytime afternoon river sun: 06:00 - 18:00
  return "afternoon";
}

export function AmbientModeProvider({ children }: { children: React.ReactNode }) {
  const [modeSetting, setModeSetting] = React.useState<AmbientModeSetting>("auto");
  const [activeTheme, setActiveTheme] = React.useState<AmbientTheme>("afternoon");
  const [kuchingTime, setKuchingTime] = React.useState<string>("");

  // Update Kuching Time & resolve auto theme
  React.useEffect(() => {
    const updateTimeAndTheme = () => {
      try {
        const now = new Date();
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kuching",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(now);
        setKuchingTime(timeStr);

        const currentHour = getKuchingHour();
        if (modeSetting === "auto") {
          setActiveTheme(computeThemeFromHour(currentHour));
        } else {
          setActiveTheme(modeSetting);
        }
      } catch {
        // Fallback
        setKuchingTime("Kuching Waterfront");
      }
    };

    updateTimeAndTheme();
    const interval = setInterval(updateTimeAndTheme, 30000);
    return () => clearInterval(interval);
  }, [modeSetting]);

  // Apply to document attribute for global CSS styling
  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-ambient", activeTheme);
    }
  }, [activeTheme]);

  const cycleNextMode = () => {
    const modes: AmbientModeSetting[] = ["auto", "afternoon", "sunset", "night"];
    const nextIdx = (modes.indexOf(modeSetting) + 1) % modes.length;
    setModeSetting(modes[nextIdx]);
  };

  return (
    <AmbientContext.Provider
      value={{
        modeSetting,
        activeTheme,
        kuchingTime,
        setModeSetting,
        cycleNextMode,
      }}
    >
      {children}
    </AmbientContext.Provider>
  );
}

export function useAmbientMode() {
  const context = React.useContext(AmbientContext);
  if (!context) {
    throw new Error("useAmbientMode must be used within an AmbientModeProvider");
  }
  return context;
}
