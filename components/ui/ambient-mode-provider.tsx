"use client";

import * as React from "react";

export type AmbientTheme = "afternoon";
export type AmbientModeSetting = "afternoon";

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

export function computeThemeFromHour(_hour?: number): AmbientTheme {
  // Locked to day time ("afternoon") only per brand requirements
  return "afternoon";
}

export function AmbientModeProvider({ children }: { children: React.ReactNode }) {
  const [modeSetting] = React.useState<AmbientModeSetting>("afternoon");
  const [activeTheme] = React.useState<AmbientTheme>("afternoon");
  const [kuchingTime, setKuchingTime] = React.useState<string>("");

  // Update Kuching Time for live waterfront status display
  React.useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kuching",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(now);
        setKuchingTime(timeStr);
      } catch {
        setKuchingTime("Kuching Waterfront");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  // Ensure document attribute is permanently locked to daytime "afternoon"
  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-ambient", "afternoon");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const cycleNextMode = () => {};
  const setModeSetting = () => {};

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
