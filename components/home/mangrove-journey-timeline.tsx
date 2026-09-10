"use client";

import * as React from "react";
import {
  Sparkles,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Flame,
  Droplets,
  Compass,
  Clock,
  Waves,
  Music,
} from "lucide-react";
import { soundscape } from "@/lib/audio/soundscape";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface JourneyStage {
  step: string;
  title: string;
  subtitle: string;
  location: string;
  tagline: string;
  story: string;
  metrics: { label: string; value: string }[];
  visualIcon: "waves" | "flame" | "shave" | "fountain";
  audioAction: () => void;
}

export function MangroveJourneyTimeline() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isExpandedOnMobile, setIsExpandedOnMobile] = React.useState(false);

  // Auto-expand on mobile if user navigates to #heritage-journey or #journey
  React.useEffect(() => {
    const handleCheckHash = () => {
      if (
        typeof window !== "undefined" &&
        (window.location.hash === "#heritage-journey" || window.location.hash === "#journey")
      ) {
        setIsExpandedOnMobile(true);
      }
    };
    handleCheckHash();
    window.addEventListener("hashchange", handleCheckHash);
    return () => window.removeEventListener("hashchange", handleCheckHash);
  }, []);

  const handleCollapseJourney = () => {
    setIsExpandedOnMobile(false);
    const journeyElem = document.getElementById("heritage-journey");
    if (journeyElem) {
      const navOffset = 85;
      const y = journeyElem.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const stages: JourneyStage[] = [
    {
      step: "01",
      title: "Wild Mangrove Tapping",
      subtitle: "Penuaian Nira Nipah Liar",
      location: "Kota Samarahan & Asajaya Tidal Estuaries",
      tagline: "Harvested in harmony with Sarawak’s lunar tides.",
      story:
        "Deep within Sarawak’s brackish river deltas, wild Nypa fruticans palms thrive in mineral-rich mangrove mud. Before sunrise at low tide, skilled artisans make precise incisions along the flowering stalk. Cool, fresh nira (palm sap) drips slowly into sustainable bamboo canisters, retaining its natural floral bouquet and vital minerals.",
      metrics: [
        { label: "Brix Sweetness", value: "15°–18° Natural" },
        { label: "Harvest Window", value: "Dawn Low Tide" },
        { label: "Ecosystem Impact", value: "100% Sustainable" },
      ],
      visualIcon: "waves",
      audioAction: () => soundscape.playSyrupDrizzle(),
    },
    {
      step: "02",
      title: "Woodfire Iron Kawah Boiling",
      subtitle: "Pemasakan Kawah Kayu Api",
      location: "Traditional Village Firewood Sheds",
      tagline: "Six hours of patient, slow-caramelized reduction.",
      story:
        "The freshly harvested sap is transferred immediately to gigantic cast-iron cauldrons (kawah) resting over slow-burning mangrove hardwood embers. For six unbroken hours, master boilers stir the bubbling nectar with wooden oars, gently reducing it until water evaporates and gives way to thick, aromatic, salted butterscotch Gula Apong molasses.",
      metrics: [
        { label: "Simmer Temp", value: "115°C Constant" },
        { label: "Reduction Time", value: "6 Slow Hours" },
        { label: "Flavor Profile", value: "Smoky Butterscotch" },
      ],
      visualIcon: "flame",
      audioAction: () => soundscape.playSyrupDrizzle(),
    },
    {
      step: "03",
      title: "Micro-Calibrated Ice Shaving",
      subtitle: "Penyelarasan Bilah Ais Halus",
      location: "IG Ais Kacang Craft Station, Jalan Gambier",
      tagline: "Calibrated to 0.25mm for feather-light crystal snow.",
      story:
        "Texture is sacred. Our heavy Japanese-engineered shaving blades are micro-calibrated three times a day to account for ambient river humidity. Instead of coarse crushed ice that dilutes flavor, our machine shaves ice into airy, cloud-soft micro-crystals that instantly absorb the thick Gula Apong drizzle upon contact without melting prematurely.",
      metrics: [
        { label: "Blade Precision", value: "0.25mm Micro-Shave" },
        { label: "Ice Texture", value: "Feather Mountain Snow" },
        { label: "Melt Dynamic", value: "Instant Creamy Blend" },
      ],
      visualIcon: "shave",
      audioAction: () => soundscape.playIceShave(),
    },
    {
      step: "04",
      title: "8:30 PM Darul Hana Serving",
      subtitle: "Santapan Senja Waterfront",
      location: "7, Jalan Gambier Overlooking Sarawak River",
      tagline: "The iconic Kuching evening ritual under the fountain lights.",
      story:
        "At 8:30 PM sharp, the music echoes across the river as the Darul Hana Bridge and Musical Fountain erupt in synchronized violet and emerald lights. Guests gather along our open-air quayside verandah, savoring chilled bowls of Gula Apong Ais Kacang as cool night breezes flow off the river, uniting generations in pure Bornean joy.",
      metrics: [
        { label: "Fountain Show", value: "8:30 PM & 9:30 PM" },
        { label: "Riverfront View", value: "Darul Hana Bridge" },
        { label: "Heritage Era", value: "Since 2019" },
      ],
      visualIcon: "fountain",
      audioAction: () => soundscape.playRiverWater(),
    },
  ];

  const current = stages[activeStep];

  const handleStepChange = (idx: number) => {
    setActiveStep(idx);
    stages[idx].audioAction();
  };

  return (
    <section
      id="heritage-journey"
      className="scroll-mt-24 py-16 sm:py-20 lg:py-28 bg-stone-900 text-white relative overflow-hidden border-b border-amber-900/20"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal duration={1000} distance={32}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-stone-800">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                <Compass className="h-3.5 w-3.5 text-amber-400" />
                <span>Borneo Heritage Journey</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                From Nipah Mangrove to <span className="text-amber-400 italic">Waterfront Bowl</span>
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Walk through the four artisanal stages of Sarawak palm sugar craftsmanship—from the tidal
                estuaries of Samarahan to the vibrant lantern glow of Jalan Gambier.
              </p>
            </div>

            {/* Stepper Controls & Mobile Fold Toggle */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Mobile Quick Fold Toggle Pill */}
              <button
                onClick={() => setIsExpandedOnMobile(!isExpandedOnMobile)}
                className="md:hidden flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold bg-amber-600 hover:bg-amber-500 text-stone-950 shadow-md active:scale-95 transition-all"
              >
                {isExpandedOnMobile ? (
                  <>
                    <span>Fold</span>
                    <ChevronUp className="h-3.5 w-3.5" />
                  </>
                ) : (
                  <>
                    <span>Unfold (4 Stages)</span>
                    <ChevronDown className="h-3.5 w-3.5" />
                  </>
                )}
              </button>

              <button
                onClick={() => handleStepChange(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="p-3 rounded-full bg-stone-800 hover:bg-stone-700 disabled:opacity-40 disabled:hover:bg-stone-800 text-white transition-colors"
                aria-label="Previous Stage"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleStepChange(Math.min(stages.length - 1, activeStep + 1))}
                disabled={activeStep === stages.length - 1}
                className="p-3 rounded-full bg-amber-600 hover:bg-amber-500 disabled:opacity-40 disabled:hover:bg-amber-600 text-white transition-colors shadow-lg shadow-amber-950"
                aria-label="Next Stage"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile Compact Teaser Card (When Journey is Folded) */}
        {!isExpandedOnMobile && (
          <div className="md:hidden mt-8">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/40 border border-amber-500/30 text-center space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                  <Compass className="h-3.5 w-3.5 text-amber-400" />
                  <span>4 Artisanal Stages</span>
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                  Asajaya to Gambier
                </span>
              </div>

              <div className="space-y-1 text-left">
                <h3 className="font-serif text-lg font-bold text-white">
                  From Tidal Estuaries to Waterfront Bowl
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Discover how 100% pure Borneo nipa palm sap transforms into thick amber caramel and 0.25mm shaved mountain snow.
                </p>
              </div>

              {/* 4 Stages Mini Stepper Badges */}
              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="p-2.5 rounded-xl bg-stone-900/80 border border-stone-800 space-y-0.5">
                  <span className="text-[10px] font-mono text-amber-400 block font-bold">01 • Tapping</span>
                  <p className="text-[11px] text-stone-300 font-medium">Asajaya Mangroves</p>
                </div>
                <div className="p-2.5 rounded-xl bg-stone-900/80 border border-stone-800 space-y-0.5">
                  <span className="text-[10px] font-mono text-amber-400 block font-bold">02 • Boiling</span>
                  <p className="text-[11px] text-stone-300 font-medium">6-Hour Woodfire</p>
                </div>
                <div className="p-2.5 rounded-xl bg-stone-900/80 border border-stone-800 space-y-0.5">
                  <span className="text-[10px] font-mono text-amber-400 block font-bold">03 • Shaving</span>
                  <p className="text-[11px] text-stone-300 font-medium">0.25mm Micro-Snow</p>
                </div>
                <div className="p-2.5 rounded-xl bg-stone-900/80 border border-stone-800 space-y-0.5">
                  <span className="text-[10px] font-mono text-amber-400 block font-bold">04 • Darul Hana</span>
                  <p className="text-[11px] text-stone-300 font-medium">8:30 PM Fountain</p>
                </div>
              </div>

              {/* Unfold Action Button */}
              <div className="pt-1">
                <button
                  onClick={() => setIsExpandedOnMobile(true)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-xs bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg shadow-amber-950/40 transition-all active:scale-95"
                >
                  <Compass className="h-4 w-4" />
                  <span>Unfold Heritage Journey (4 Stages)</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Full Journey Stages (Always visible on desktop, toggleable on mobile) */}
        <div className={cn(!isExpandedOnMobile && "hidden md:block")}>
          {/* Interactive Stepper Navigation Bar */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {stages.map((st, idx) => {
            const isCurrent = idx === activeStep;
            return (
              <button
                key={st.step}
                onClick={() => handleStepChange(idx)}
                className={cn(
                  "p-4 rounded-2xl text-left border transition-all relative overflow-hidden",
                  isCurrent
                    ? "bg-gradient-to-br from-amber-950/60 to-stone-900 border-amber-500 shadow-lg shadow-amber-950/40"
                    : "bg-stone-900/50 border-stone-800 text-stone-400 hover:border-stone-700 hover:bg-stone-900"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={cn(
                      "font-serif font-black text-xs tracking-wider",
                      isCurrent ? "text-amber-400" : "text-stone-500"
                    )}
                  >
                    STAGE {st.step}
                  </span>
                  {isCurrent && (
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  )}
                </div>
                <h4
                  className={cn(
                    "font-serif font-bold text-sm line-clamp-1",
                    isCurrent ? "text-white" : "text-stone-300"
                  )}
                >
                  {st.title}
                </h4>
                <p className="text-[10px] text-stone-400 italic line-clamp-1 mt-0.5">
                  {st.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Showcase Feature Card */}
        <div className="mt-8 rounded-3xl bg-stone-950 border border-amber-500/30 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold">
                  STAGE {current.step} OF 04
                </span>
                <span className="text-xs text-stone-400 flex items-center gap-1">
                  <Clock className="h-3 w-3 text-amber-400" />
                  {current.location}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {current.title}
                </h3>
                <p className="text-amber-400/90 font-serif italic text-sm sm:text-base mt-1">
                  {current.tagline}
                </p>
              </div>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                {current.story}
              </p>

              {/* Artisanal Metrics Badges */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-stone-800">
                {current.metrics.map((m, i) => (
                  <div key={i} className="p-3 rounded-xl bg-stone-900/80 border border-stone-800 text-center">
                    <p className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">
                      {m.label}
                    </p>
                    <p className="font-serif text-xs sm:text-sm font-bold text-amber-400 mt-0.5">
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Graphic / Atmospheric Card */}
            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-stone-900 to-amber-950/40 border border-amber-500/20 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[300px]">
              {/* Decorative Watermark & Animated Rings */}
              <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent pointer-events-none" />

              {/* Stage-Specific Stylized Centerpiece */}
              {current.visualIcon === "waves" && (
                <div className="space-y-3">
                  <div className="w-20 h-20 mx-auto rounded-full bg-amber-500/20 border-2 border-amber-500/60 flex items-center justify-center text-amber-400">
                    <Waves className="h-10 w-10 animate-pulse" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-white">
                    Mangrove Tide Harvest
                  </h4>
                  <p className="text-xs text-stone-400 max-w-xs">
                    Wild nipah sap collected drop by drop in early morning fog.
                  </p>
                </div>
              )}

              {current.visualIcon === "flame" && (
                <div className="space-y-3">
                  <div className="w-20 h-20 mx-auto rounded-full bg-amber-600/20 border-2 border-amber-500/60 flex items-center justify-center text-amber-400">
                    <Flame className="h-10 w-10 animate-bounce duration-1000" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-white">
                    Woodfire Kawah Boiling
                  </h4>
                  <p className="text-xs text-stone-400 max-w-xs">
                    Rich mahogany syrup bubbling slowly over fragrant mangrove embers.
                  </p>
                </div>
              )}

              {current.visualIcon === "shave" && (
                <div className="space-y-3">
                  <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500/20 border-2 border-cyan-400/60 flex items-center justify-center text-cyan-300">
                    <Droplets className="h-10 w-10 animate-pulse" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-white">
                    0.25mm Razor Calibration
                  </h4>
                  <p className="text-xs text-stone-400 max-w-xs">
                    Crystal blocks shaved into feather-light snow clouds.
                  </p>
                </div>
              )}

              {current.visualIcon === "fountain" && (
                <div className="space-y-3">
                  <div className="w-20 h-20 mx-auto rounded-full bg-violet-500/20 border-2 border-violet-400/60 flex items-center justify-center text-violet-300">
                    <Music className="h-10 w-10 animate-pulse" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-white">
                    8:30 PM Darul Hana Symphony
                  </h4>
                  <p className="text-xs text-stone-400 max-w-xs">
                    Musical fountains, quayside breezes, and chilled bowls in hand.
                  </p>
                </div>
              )}

              <button
                onClick={() => current.audioAction()}
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 border border-amber-500/40 text-amber-300 text-xs font-semibold hover:bg-stone-800 transition-colors"
              >
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span>Hear Artisanal Essence</span>
              </button>
            </div>
          </div>
        </div>
        </div>

        {/* Mobile Collapse Button (When Journey is Unfolded) */}
        {isExpandedOnMobile && (
          <div className="md:hidden mt-8 text-center">
            <button
              onClick={handleCollapseJourney}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold bg-stone-950 hover:bg-stone-850 text-amber-300 border border-amber-500/30 shadow-md active:scale-95 transition-all w-full"
            >
              <span>Fold Heritage Journey (Show Less)</span>
              <ChevronUp className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
