"use client";

import * as React from "react";
import {
  Sparkles,
  RotateCcw,
  ArrowRight,
  Check,
  Plus,
  ChevronDown,
  ChevronUp,
  Droplets,
  Bean,
  Gem,
  Layers,
  Crown,
  Nut,
  Sun,
  Leaf,
  Cookie,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export interface Topping {
  id: string;
  name: string;
  malayName: string;
  provenance: string;
  price: number;
  category: "sauce" | "legume" | "fruit" | "crunch" | "jelly";
  color: string;
  soundType: "squishy" | "crunch" | "sweet" | "durian";
  flavorEffect: {
    sweetness: number;
    creaminess: number;
    crunch: number;
    chill: number;
  };
}

export const TOPPINGS: Topping[] = [
  {
    id: "gula-apong",
    name: "Pure Gula Apong Drizzle",
    malayName: "Nira Apong Asli",
    provenance: "Wild Asajaya Nipah Mangroves",
    price: 2.0,
    category: "sauce",
    color: "#C97A2B",
    soundType: "sweet",
    flavorEffect: { sweetness: 35, creaminess: 15, crunch: 0, chill: 5 },
  },
  {
    id: "red-beans",
    name: "Slow-Simmered Red Beans",
    malayName: "Kacang Merah Empuk",
    provenance: "Cooked 4 hours with pandan",
    price: 1.5,
    category: "legume",
    color: "#7F1D1D",
    soundType: "squishy",
    flavorEffect: { sweetness: 15, creaminess: 20, crunch: 5, chill: 10 },
  },
  {
    id: "attap-seed",
    name: "Attap Chee (Nipah Palm Fruit)",
    malayName: "Buah Kabung",
    provenance: "Fresh Borneo river estuaries",
    price: 2.0,
    category: "fruit",
    color: "#E2E8F0",
    soundType: "squishy",
    flavorEffect: { sweetness: 10, creaminess: 10, crunch: 25, chill: 20 },
  },
  {
    id: "grass-jelly",
    name: "Herbal Cincau (Grass Jelly)",
    malayName: "Cincau Hitam Sejuk",
    provenance: "Traditional cooling herbal boil",
    price: 1.5,
    category: "jelly",
    color: "#18181B",
    soundType: "squishy",
    flavorEffect: { sweetness: 5, creaminess: 5, crunch: 10, chill: 35 },
  },
  {
    id: "d24-durian",
    name: "Royal D24 Durian Purée",
    malayName: "Puri Durian D24 Segar",
    provenance: "100% Real Pahang D24 Flesh",
    price: 5.0,
    category: "fruit",
    color: "#FACC15",
    soundType: "durian",
    flavorEffect: { sweetness: 30, creaminess: 45, crunch: 0, chill: 5 },
  },
  {
    id: "roasted-peanuts",
    name: "Toasted Kuching Peanuts",
    malayName: "Kacang Tumbuk Rangup",
    provenance: "Hand-roasted daily on Jalan Gambier",
    price: 1.0,
    category: "crunch",
    color: "#D97706",
    soundType: "crunch",
    flavorEffect: { sweetness: 5, creaminess: 15, crunch: 40, chill: 0 },
  },
  {
    id: "sweet-corn",
    name: "Creamed Golden Corn",
    malayName: "Jagung Manis Berkrim",
    provenance: "Sweet tender highland corn",
    price: 1.5,
    category: "fruit",
    color: "#FDE047",
    soundType: "squishy",
    flavorEffect: { sweetness: 15, creaminess: 20, crunch: 10, chill: 10 },
  },
  {
    id: "cendol",
    name: "Pandan Cendol Strands",
    malayName: "Cendol Pandan Segar",
    provenance: "Freshly pressed pandan leaf juice",
    price: 1.8,
    category: "jelly",
    color: "#10B981",
    soundType: "squishy",
    flavorEffect: { sweetness: 10, creaminess: 15, crunch: 5, chill: 25 },
  },
  {
    id: "biscoff",
    name: "Caramelized Biscoff Crumb",
    malayName: "Serbuk Biskut Biscoff",
    provenance: "Spiced butter caramel crunch",
    price: 2.0,
    category: "crunch",
    color: "#B45309",
    soundType: "crunch",
    flavorEffect: { sweetness: 20, creaminess: 10, crunch: 35, chill: 0 },
  },
];

function getToppingIcon(id: string) {
  switch (id) {
    case "gula-apong":
      return <Droplets className="h-4 w-4" />;
    case "red-beans":
      return <Bean className="h-4 w-4" />;
    case "attap-seed":
      return <Gem className="h-4 w-4" />;
    case "grass-jelly":
      return <Layers className="h-4 w-4" />;
    case "d24-durian":
      return <Crown className="h-4 w-4" />;
    case "roasted-peanuts":
      return <Nut className="h-4 w-4" />;
    case "sweet-corn":
      return <Sun className="h-4 w-4" />;
    case "cendol":
      return <Leaf className="h-4 w-4" />;
    case "biscoff":
      return <Cookie className="h-4 w-4" />;
    default:
      return <Sparkles className="h-4 w-4" />;
  }
}

interface CurateMangroveBowlProps {
  onOpenOrderDrawer?: (customBowlDescription: string, price: number) => void;
}

export function CurateMangroveBowl({ onOpenOrderDrawer }: CurateMangroveBowlProps) {
  const [selectedToppings, setSelectedToppings] = React.useState<Record<string, number>>({
    "gula-apong": 1,
    "red-beans": 1,
    "roasted-peanuts": 1,
  });
  const [lastAdded, setLastAdded] = React.useState<string | null>(null);
  const [isExpandedOnMobile, setIsExpandedOnMobile] = React.useState<boolean>(false);

  // Auto-expand on mobile if user explicitly navigates to #bowl-builder
  React.useEffect(() => {
    const handleCheckHash = () => {
      if (typeof window !== "undefined" && window.location.hash === "#bowl-builder") {
        setIsExpandedOnMobile(true);
      }
    };
    handleCheckHash();
    window.addEventListener("hashchange", handleCheckHash);
    return () => window.removeEventListener("hashchange", handleCheckHash);
  }, []);

  const handleCollapseCustomizer = () => {
    setIsExpandedOnMobile(false);
    const bowlElem = document.getElementById("bowl-builder");
    if (bowlElem) {
      const navOffset = 85;
      const y = bowlElem.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const BASE_PRICE = 4.5; // Base crystal shaved snow + evaporated milk

  const toggleTopping = (topping: Topping) => {
    const currentCount = selectedToppings[topping.id] || 0;
    const newCount = currentCount > 0 ? 0 : 1;

    setSelectedToppings((prev) => {
      const next = { ...prev };
      if (newCount === 0) {
        delete next[topping.id];
      } else {
        next[topping.id] = 1;
      }
      return next;
    });

    if (newCount > 0) {
      setLastAdded(topping.id);
      setTimeout(() => setLastAdded(null), 800);
    }
  };

  const clearBowl = () => {
    setSelectedToppings({});
  };

  const applyPreset = (presetName: string) => {
    if (presetName === "waterfront") {
      setSelectedToppings({
        "gula-apong": 1,
        "red-beans": 1,
        "attap-seed": 1,
        "grass-jelly": 1,
        "roasted-peanuts": 1,
        "sweet-corn": 1,
      });
    } else if (presetName === "durian") {
      setSelectedToppings({
        "gula-apong": 1,
        "d24-durian": 1,
        "cendol": 1,
        "roasted-peanuts": 1,
      });
    } else if (presetName === "biscoff") {
      setSelectedToppings({
        "gula-apong": 1,
        "biscoff": 1,
        "roasted-peanuts": 1,
        "attap-seed": 1,
      });
    }
  };

  // Calculate totals
  const totalPrice = React.useMemo(() => {
    let sum = BASE_PRICE;
    Object.entries(selectedToppings).forEach(([id, count]) => {
      const item = TOPPINGS.find((t) => t.id === id);
      if (item) sum += item.price * count;
    });
    return sum;
  }, [selectedToppings]);

  // Calculate flavor meters
  const flavorMeters = React.useMemo(() => {
    let sweetness = 20; // base
    let creaminess = 25; // santan
    let crunch = 0;
    let chill = 50; // ice

    Object.keys(selectedToppings).forEach((id) => {
      const item = TOPPINGS.find((t) => t.id === id);
      if (item) {
        sweetness += item.flavorEffect.sweetness;
        creaminess += item.flavorEffect.creaminess;
        crunch += item.flavorEffect.crunch;
        chill += item.flavorEffect.chill;
      }
    });

    return {
      sweetness: Math.min(100, sweetness),
      creaminess: Math.min(100, creaminess),
      crunch: Math.min(100, crunch),
      chill: Math.min(100, chill),
    };
  }, [selectedToppings]);

  // Minimalist dot rating (1 to 5 scale)
  const getDots = (value: number) => {
    return Math.max(1, Math.min(5, Math.round(value / 20)));
  };

  // Dynamic sensory profile descriptor text
  const sensorySummary = React.useMemo(() => {
    const count = Object.keys(selectedToppings).length;
    if (count === 0) return "Pure mountain ice awaiting your ingredient selection";
    if (selectedToppings["d24-durian"]) {
      return "Rich and decadent with bold durian warmth and palm molasses";
    }
    if (selectedToppings["biscoff"] && selectedToppings["roasted-peanuts"]) {
      return "Layered caramelized crunch balanced over cool coconut snow";
    }
    if (selectedToppings["biscoff"] || selectedToppings["roasted-peanuts"]) {
      return "Delicate golden crunch paired with sweet palm nectar";
    }
    if (selectedToppings["cendol"] || selectedToppings["grass-jelly"]) {
      return "Cooling herbal undertones with refreshing pandan aromas";
    }
    return "Balanced Sarawak palm sweetness with traditional slow-cooked toppings";
  }, [selectedToppings]);

  const handleOrderCustomBowl = () => {
    const toppingNames = Object.keys(selectedToppings)
      .map((id) => TOPPINGS.find((t) => t.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const bowlDesc = `Custom Mangrove Shaved Ice Bowl (${toppingNames || "Plain Mountain Snow"}) - RM ${totalPrice.toFixed(2)}`;

    if (onOpenOrderDrawer) {
      onOpenOrderDrawer(bowlDesc, totalPrice);
    } else {
      const msg = encodeURIComponent(
        `Hello IG Ais Kacang Gambier! I curated a custom Mangrove Bowl:\n\n• Toppings: ${toppingNames || "Pure Shaved Ice"}\n• Price: RM ${totalPrice.toFixed(2)}\n\nI would like to place an order for pickup at 7 Jalan Gambier.`
      );
      window.open(`https://wa.me/60168859657?text=${msg}`, "_blank");
    }
  };

  const hasTopping = (id: string) => !!selectedToppings[id];

  return (
    <section id="bowl-builder" className="scroll-mt-24 py-20 lg:py-28 bg-stone-950 text-white relative overflow-hidden border-y border-stone-800">
      {/* Subtle Background Radial Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-stone-900/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal duration={1000} distance={32}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-stone-300 text-xs font-normal font-sans">
              <Sparkles className="h-3.5 w-3.5 text-stone-400" />
              <span>Tactile Shaved Ice Customizer</span>
            </div>

            {/* Strict Two-Font: Serif used exclusively for primary header */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Curate Your Mangrove Bowl
            </h2>

            {/* Clean Sans-serif Body Text */}
            <p className="text-stone-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
              Select artisanal ingredients to craft your bespoke shaved ice. Prepared with wild Borneo nipa palm molasses.
            </p>

            {/* Presets (Disciplined Color Palette) */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2 font-sans text-xs">
              <span className="text-stone-500 mr-1">Presets:</span>
              <button
                type="button"
                onClick={() => applyPreset("waterfront")}
                className="px-3 py-1 rounded-full bg-stone-900/80 border border-stone-800 hover:border-stone-600 hover:text-white text-stone-300 transition-colors"
              >
                Waterfront Classic
              </button>
              <button
                type="button"
                onClick={() => applyPreset("durian")}
                className="px-3 py-1 rounded-full bg-stone-900/80 border border-stone-800 hover:border-stone-600 hover:text-white text-stone-300 transition-colors"
              >
                Durian Royale
              </button>
              <button
                type="button"
                onClick={() => applyPreset("biscoff")}
                className="px-3 py-1 rounded-full bg-stone-900/80 border border-stone-800 hover:border-stone-600 hover:text-white text-stone-300 transition-colors"
              >
                Biscoff Crunch
              </button>
            </div>

            {/* Mobile Quick Fold Toggle Pill */}
            <div className="md:hidden pt-2 flex justify-center">
              <button
                type="button"
                onClick={() => setIsExpandedOnMobile(!isExpandedOnMobile)}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-700 shadow-sm active:scale-95 transition-all font-sans"
              >
                {isExpandedOnMobile ? (
                  <>
                    <span>Fold Customizer</span>
                    <ChevronUp className="h-3.5 w-3.5" />
                  </>
                ) : (
                  <>
                    <span>Unfold Customizer</span>
                    <ChevronDown className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile Compact Teaser Card (When Customizer is Folded) */}
        {!isExpandedOnMobile && (
          <div className="md:hidden mt-8">
            <div className="p-6 rounded-3xl bg-stone-900/70 border border-stone-800 text-center space-y-4 shadow-xl font-sans">
              <div className="flex items-center justify-between">
                <span className="text-xs text-stone-400 font-medium flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-stone-400" />
                  <span>Curated Bowl Preview</span>
                </span>
                <span className="text-sm font-semibold text-white bg-stone-800 px-3 py-0.5 rounded-xl border border-stone-700">
                  RM {totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="space-y-1 text-left">
                <h3 className="font-serif text-lg font-bold text-white">
                  Bespoke Mountain of Crystal Snow
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Crafted with wild Borneo Gula Apong and fresh condiments. Tap unfold to curate ingredients.
                </p>
              </div>

              {/* Selected Toppings Chips */}
              <div className="flex flex-wrap gap-1.5 justify-start">
                {Object.keys(selectedToppings).map((id) => {
                  const topping = TOPPINGS.find((t) => t.id === id);
                  if (!topping) return null;
                  return (
                    <span
                      key={id}
                      className="text-xs font-medium bg-stone-800/80 text-stone-300 border border-stone-700 px-2.5 py-1 rounded-full flex items-center gap-1"
                    >
                      <Check className="h-3 w-3 text-amber-400" />
                      <span>{topping.name}</span>
                    </span>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <Button
                  onClick={() => setIsExpandedOnMobile(true)}
                  className="w-full rounded-full font-semibold bg-amber-600 hover:bg-amber-500 text-stone-950 shadow-md justify-center gap-2 py-3 text-xs"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Unfold 3D Customizer ({TOPPINGS.length} Toppings)</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>

                <button
                  type="button"
                  onClick={handleOrderCustomBowl}
                  className="w-full py-2 text-xs font-medium text-stone-400 hover:text-stone-200 transition-colors flex items-center justify-center gap-1"
                >
                  <span>Quick Order (RM {totalPrice.toFixed(2)}) via WhatsApp</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Builder Workstation (Always visible on desktop, toggleable on mobile) */}
        <div
          className={cn(
            "mt-8 sm:mt-14 grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start",
            !isExpandedOnMobile ? "hidden md:grid" : "grid"
          )}
        >
          {/* Left Column: Central "Jalan Gambier Clay Bowl" Visual (Increased Padding & Spacing) */}
          <div className="lg:col-span-6 rounded-3xl bg-stone-900/40 border border-stone-800 p-8 sm:p-12 lg:p-14 flex flex-col items-center justify-between relative shadow-2xl overflow-hidden min-h-[480px]">
            {/* Ambient Subtle Glow */}
            <div className="absolute inset-0 bg-radial from-stone-800/20 via-transparent to-transparent pointer-events-none" />

            {/* Visual Header */}
            <div className="w-full flex items-center justify-between text-xs text-stone-400 z-10 font-sans">
              <span className="font-normal text-stone-400">Jalan Gambier Clay Bowl</span>
              <button
                type="button"
                onClick={clearBowl}
                className="flex items-center gap-1 text-stone-500 hover:text-stone-300 transition-colors font-sans"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Reset Bowl</span>
              </button>
            </div>

            {/* Stylized Interactive 3D Shaved Ice Dome (Widened Vertical Margins) */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 my-8 sm:my-10 flex items-center justify-center">
              {/* Earthen Bowl Rim */}
              <div className="absolute bottom-4 w-56 sm:w-64 h-24 rounded-b-[100px] bg-gradient-to-b from-stone-800 to-stone-950 border border-stone-700/80 shadow-2xl shadow-black/80 flex items-center justify-center">
                <span className="text-[10px] tracking-wider text-stone-500 font-sans font-medium">
                  IG AIS KACANG GAMBIER
                </span>
              </div>

              {/* Shaved Ice Snow Mountain */}
              <div
                className={cn(
                  "relative w-48 sm:w-56 h-48 sm:h-56 rounded-full bg-gradient-to-t from-stone-200 via-stone-50 to-amber-50/50 shadow-inner border border-white/60 transition-all duration-500 flex items-center justify-center overflow-hidden",
                  lastAdded && "scale-105"
                )}
              >
                {/* Ice Texture Grain */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:6px_6px]" />

                {/* Gula Apong Syrup Drizzle Cascades */}
                {hasTopping("gula-apong") && (
                  <div className="absolute inset-0 pointer-events-none animate-in fade-in duration-500">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <path
                        d="M 50 10 Q 48 35 44 65 Q 42 85 40 95"
                        stroke="#B45309"
                        strokeWidth="5"
                        fill="none"
                        strokeLinecap="round"
                        className="opacity-90"
                      />
                      <path
                        d="M 50 10 Q 56 30 62 60 Q 64 80 66 95"
                        stroke="#D97706"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        className="opacity-85"
                      />
                      <path
                        d="M 50 10 Q 50 40 52 75"
                        stroke="#78350F"
                        strokeWidth="3.5"
                        fill="none"
                        strokeLinecap="round"
                        className="opacity-95"
                      />
                    </svg>
                  </div>
                )}

                {/* Royal D24 Durian Purée Crown */}
                {hasTopping("d24-durian") && (
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-30 animate-in zoom-in-75 duration-300">
                    <div className="w-14 h-12 rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-amber-500 shadow-lg border border-yellow-200 flex items-center justify-center">
                      <Crown className="h-4 w-4 text-stone-950" />
                    </div>
                  </div>
                )}

                {/* Topping Visual Clouds on the Shaved Ice */}
                {hasTopping("red-beans") && (
                  <div className="absolute bottom-6 left-5 flex gap-1 animate-in fade-in zoom-in-50 duration-300">
                    <span className="w-4 h-3 rounded-full bg-rose-950 border border-rose-900 shadow-xs" />
                    <span className="w-4 h-3 rounded-full bg-rose-900 border border-rose-800 shadow-xs" />
                    <span className="w-4 h-3 rounded-full bg-rose-950 border border-rose-900 shadow-xs" />
                  </div>
                )}

                {hasTopping("attap-seed") && (
                  <div className="absolute bottom-10 right-6 flex flex-col gap-1 animate-in fade-in zoom-in-50 duration-300">
                    <span className="w-5 h-5 rounded-full bg-white/80 backdrop-blur-xs border border-white shadow-xs" />
                    <span className="w-4 h-4 rounded-full bg-white/70 backdrop-blur-xs border border-white shadow-xs" />
                  </div>
                )}

                {hasTopping("grass-jelly") && (
                  <div className="absolute bottom-3 right-14 flex gap-1 animate-in fade-in zoom-in-50 duration-300">
                    <span className="w-4 h-4 rounded-xs bg-stone-950 shadow-md border border-stone-800 rotate-12" />
                    <span className="w-4 h-4 rounded-xs bg-stone-900 shadow-md border border-stone-800 -rotate-6" />
                  </div>
                )}

                {hasTopping("cendol") && (
                  <div className="absolute top-12 left-6 space-y-1 animate-in fade-in zoom-in-50 duration-300">
                    <span className="block w-6 h-1.5 rounded-full bg-emerald-600 shadow-xs rotate-45" />
                    <span className="block w-7 h-1.5 rounded-full bg-emerald-500 shadow-xs rotate-12" />
                  </div>
                )}

                {hasTopping("roasted-peanuts") && (
                  <div className="absolute top-10 right-8 flex gap-1 animate-in fade-in zoom-in-50 duration-300">
                    <span className="w-2.5 h-2 rounded-full bg-amber-600 shadow-xs" />
                    <span className="w-2 h-2 rounded-full bg-amber-700 shadow-xs" />
                    <span className="w-2 h-2.5 rounded-full bg-amber-500 shadow-xs" />
                  </div>
                )}

                {hasTopping("sweet-corn") && (
                  <div className="absolute bottom-12 left-16 flex gap-1 animate-in fade-in zoom-in-50 duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-xs" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-300 shadow-xs" />
                  </div>
                )}

                {hasTopping("biscoff") && (
                  <div className="absolute top-20 right-14 flex gap-1 animate-in fade-in zoom-in-50 duration-300">
                    <span className="w-3 h-1.5 rounded-xs bg-amber-800 rotate-45 shadow-xs" />
                    <span className="w-2.5 h-1.5 rounded-xs bg-amber-900 -rotate-12 shadow-xs" />
                  </div>
                )}
              </div>
            </div>

            {/* Sensory Balance: Simplified Minimalist Dot Indicator & Dynamic String */}
            <div className="w-full bg-stone-900/50 rounded-2xl p-5 border border-stone-800/80 space-y-3 z-10 font-sans">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-stone-300">Sensory Balance</span>
                <span className="text-stone-500">
                  {Object.keys(selectedToppings).length} {Object.keys(selectedToppings).length === 1 ? "ingredient" : "ingredients"}
                </span>
              </div>

              {/* Dynamic Sensory Text String */}
              <p className="text-xs text-stone-400 leading-relaxed font-sans">
                {sensorySummary}
              </p>

              {/* Minimalist Dot Scale (1 to 5) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
                {[
                  { label: "Sweetness", score: getDots(flavorMeters.sweetness) },
                  { label: "Creaminess", score: getDots(flavorMeters.creaminess) },
                  { label: "Crunch", score: getDots(flavorMeters.crunch) },
                  { label: "Chill", score: getDots(flavorMeters.chill) },
                ].map((m) => (
                  <div key={m.label} className="space-y-1.5">
                    <span className="text-[11px] text-stone-400 block">{m.label}</span>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <span
                          key={dot}
                          className={cn(
                            "w-1.5 h-1.5 rounded-full transition-colors duration-300",
                            dot <= m.score ? "bg-amber-400" : "bg-stone-800"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Price & Primary Call to Action */}
            <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-800/80 z-10 font-sans">
              <div>
                <span className="text-xs text-stone-400 block font-normal">
                  Curated Total
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-white font-sans">
                  RM {totalPrice.toFixed(2)}
                </span>
              </div>

              <Button
                onClick={handleOrderCustomBowl}
                size="lg"
                className="w-full sm:w-auto rounded-full font-semibold bg-amber-600 hover:bg-amber-500 text-stone-950 shadow-md px-6 py-3 gap-2 font-sans"
              >
                <span>Order Bowl via WhatsApp</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Column: Decluttered Ingredient Cards with Dynamic Pane Reveal */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-stone-800/80 font-sans">
              <span className="text-xs font-medium text-stone-400">
                Artisan Ingredients
              </span>
              <span className="text-xs text-stone-500">Tap to add or remove</span>
            </div>

            {/* Widened Grid Gaps & Generous Margins */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {TOPPINGS.map((topping) => {
                const selected = hasTopping(topping.id);
                return (
                  <button
                    key={topping.id}
                    type="button"
                    onClick={() => toggleTopping(topping)}
                    className={cn(
                      "group text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden font-sans",
                      selected
                        ? "bg-amber-950/25 border-amber-500/80 shadow-lg shadow-amber-950/20 text-white"
                        : "bg-stone-900/50 border-stone-800/80 text-stone-300 hover:border-stone-700 hover:bg-stone-900/80"
                    )}
                  >
                    {/* Default State: Primary Name + Elegant Icon + Select Indicator */}
                    <div className="flex items-center justify-between gap-3 w-full">
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={cn(
                            "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300",
                            selected
                              ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                              : "bg-stone-800/80 text-stone-400 border border-stone-700/40 group-hover:text-stone-200 group-hover:border-stone-600"
                          )}
                        >
                          {getToppingIcon(topping.id)}
                        </div>
                        <span
                          className={cn(
                            "font-sans font-medium text-sm leading-snug truncate transition-colors duration-200",
                            selected ? "text-white" : "text-stone-300 group-hover:text-stone-100"
                          )}
                        >
                          {topping.name}
                        </span>
                      </div>

                      <div
                        className={cn(
                          "w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 transition-all duration-200 border",
                          selected
                            ? "bg-amber-500 border-amber-400 text-stone-950 font-bold shadow-xs"
                            : "bg-stone-800/80 border-stone-700/60 text-stone-400 group-hover:border-stone-600 group-hover:text-stone-200"
                        )}
                      >
                        {selected ? (
                          <Check className="h-3 w-3 stroke-[2.5]" />
                        ) : (
                          <Plus className="h-3 w-3 stroke-[2]" />
                        )}
                      </div>
                    </div>

                    {/* Hidden Dynamic Pane: Reveals on hover or when selected */}
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300 ease-out",
                        selected
                          ? "max-h-24 opacity-100 mt-3 pt-3 border-t border-amber-500/20"
                          : "max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-3 group-hover:pt-3 group-hover:border-t group-hover:border-stone-800/80"
                      )}
                    >
                      <div className="space-y-1 font-sans">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-stone-400 font-medium">{topping.malayName}</span>
                          <span
                            className={cn(
                              "font-semibold font-mono",
                              selected ? "text-amber-400" : "text-stone-300"
                            )}
                          >
                            +RM {topping.price.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-500 leading-relaxed truncate">
                          {topping.provenance}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Collapse Button (When Customizer is Unfolded) */}
        {isExpandedOnMobile && (
          <div className="md:hidden mt-8 text-center">
            <button
              type="button"
              onClick={handleCollapseCustomizer}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-medium bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-700 shadow-md active:scale-95 transition-all w-full font-sans"
            >
              <span>Fold Customizer</span>
              <ChevronUp className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

