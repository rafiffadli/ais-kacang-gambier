"use client";

import * as React from "react";

export function ScrollToTopOnReload() {
  React.useLayoutEffect(() => {
    // 1. Force browser scrollRestoration to manual
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Clear anchor hash if reloaded with a fragment so browser doesn't jump down
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    // 3. Immediate instant scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // 4. Double-check on next ticks to counteract delayed browser scroll restoration
    const rafId = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });

    const timer = setTimeout(() => {
      if (window.scrollY !== 0) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    }, 60);

    // 5. Handle bfcache / page show
    const handlePageShow = (event: PageTransitionEvent) => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    // 6. Reset scroll before unload so browser saves (0, 0) as last position
    const handleBeforeUnload = () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null;
}
