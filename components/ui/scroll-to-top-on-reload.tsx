"use client";

import * as React from "react";

export function ScrollToTopOnReload() {
  React.useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    // Check if the page is being reloaded
    let isReload = false;
    try {
      const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
      if (navEntries.length > 0) {
        isReload = navEntries[0].type === "reload";
      } else if ("navigation" in performance) {
        // Fallback for older spec
        const nav = (performance as unknown as { navigation: { type: number } }).navigation;
        isReload = nav && nav.type === 1;
      }
    } catch {
      isReload = false;
    }

    // Force browser manual scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // If it is a reload or fresh landing without an intentional click
    if (isReload) {
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    // On beforeunload, ensure manual restoration so reload starts clean
    const handleBeforeUnload = () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null;
}
