"use client";

import * as React from "react";
import {
  Sparkles,
  Volume2,
  VolumeX,
  RotateCcw,
  ArrowRight,
  Flame,
  Award,
  Check,
  Plus,
  Minus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { soundscape } from "@/lib/audio/soundscape";
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

interface CurateMangroveBowlProps {
  onOpenOrderDrawer?: (customBowlDescription: string, price: number) => void;
}

export function CurateMangroveBowl({ onOpenOrderDrawer }: CurateMangroveBowlProps) {
  const [selectedToppings, setSelectedToppings] = React.useState<Record<string, number>>({
    "gula-apong": 1,
    "red-beans": 1,
    "roasted-peanuts": 1,
  });
  const [isSoundActive, setIsSoundActive] = React.useState(true);
  const [lastAdded, setLastAdded] = React.useState<string | null>(null);

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
      if (isSoundActive) {
        if (topping.soundType === "sweet") soundscape.playSyrupDrizzle();
        else soundscape.playToppingDrop(topping.soundType);
      }
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
    if (isSoundActive) soundscape.playIceShave();
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
    <section id="bowl-builder" className="py-20 lg:py-28 bg-stone-950 text-white relative overflow-hidden border-y border-amber-900/30">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-emerald-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal duration={1000} distance={32}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>Tactile Shaved Ice Customizer</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Curate Your <span className="text-amber-400 italic">Mangrove Bowl</span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Select your artisanal toppings and watch your bespoke mountain of crystal shaved snow come to life.
              Crafted with authentic Borneo ingredients and 100% wild nipa palm molasses.
            </p>

            {/* Presets & Sound Toggle */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs text-stone-400 mr-1">Curated Presets:</span>
              <button
                onClick={() => applyPreset("waterfront")}
                className="text-xs px-3 py-1 rounded-full bg-stone-900 border border-stone-700 hover:border-amber-400 text-stone-200 transition-colors"
              >
                Waterfront Classic
              </button>
              <button
                onClick={() => applyPreset("durian")}
                className="text-xs px-3 py-1 rounded-full bg-stone-900 border border-stone-700 hover:border-amber-400 text-stone-200 transition-colors"
              >
                Durian Royale 👑
              </button>
              <button
                onClick={() => applyPreset("biscoff")}
                className="text-xs px-3 py-1 rounded-full bg-stone-900 border border-stone-700 hover:border-amber-400 text-stone-200 transition-colors"
              >
                Biscoff Crunch
              </button>

              <button
                onClick={() => setIsSoundActive(!isSoundActive)}
                className="text-xs px-3 py-1 rounded-full bg-stone-900 border border-amber-500/30 text-amber-300 hover:bg-stone-800 transition-colors flex items-center gap-1.5 ml-2"
                title="Toggle tactile sound effects"
              >
                {isSoundActive ? (
                  <>
                    <Volume2 className="h-3 w-3 text-amber-400" />
                    <span>SFX: ON</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="h-3 w-3 text-stone-500" />
                    <span>SFX: OFF</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Builder Workstation */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Visual Shaved Ice Bowl Canvas */}
          <div className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-stone-900 via-stone-900/90 to-stone-950 border border-amber-500/20 p-6 sm:p-8 flex flex-col items-center justify-between relative shadow-2xl overflow-hidden min-h-[440px]">
            {/* Ambient Bowl Glow */}
            <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="w-full flex items-center justify-between text-xs text-stone-400 z-10">
              <span className="font-serif italic text-amber-300">Jalan Gambier Clay Bowl</span>
              <button
                onClick={clearBowl}
                className="flex items-center gap-1 text-stone-400 hover:text-rose-400 transition-colors"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Reset Bowl</span>
              </button>
            </div>

            {/* Stylized Interactive 3D Shaved Ice Dome */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 my-6 flex items-center justify-center">
              {/* Earthen Bowl Rim */}
              <div className="absolute bottom-4 w-56 sm:w-64 h-24 rounded-b-[100px] bg-gradient-to-b from-amber-950 to-stone-950 border-2 border-amber-700/60 shadow-2xl shadow-black/80 flex items-center justify-center">
                <span className="text-[10px] tracking-widest text-amber-500/60 uppercase font-mono">
                  IG AIS KACANG GAMBIER
                </span>
              </div>

              {/* Shaved Ice Snow Mountain */}
              <div
                className={cn(
                  "relative w-48 sm:w-56 h-48 sm:h-56 rounded-full bg-gradient-to-t from-stone-100 via-white to-amber-50 shadow-inner border border-white/60 transition-all duration-500 flex items-center justify-center overflow-hidden",
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
                      <span className="text-xs">👑</span>
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

            {/* Live Sensory Flavor Profile Bars */}
            <div className="w-full bg-stone-950/80 rounded-2xl p-4 border border-stone-800 space-y-2.5 z-10">
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-amber-400">
                <span>Sensory Balance Meter</span>
                <span className="text-stone-400 font-normal">
                  {Object.keys(selectedToppings).length} Toppings Added
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div>
                  <div className="flex justify-between text-[10px] text-stone-400 mb-1">
                    <span>Sweetness</span>
                    <span className="text-amber-300 font-bold">{flavorMeters.sweetness}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-stone-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all duration-300"
                      style={{ width: `${flavorMeters.sweetness}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] text-stone-400 mb-1">
                    <span>Creaminess</span>
                    <span className="text-amber-300 font-bold">{flavorMeters.creaminess}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-stone-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-600 to-yellow-300 rounded-full transition-all duration-300"
                      style={{ width: `${flavorMeters.creaminess}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] text-stone-400 mb-1">
                    <span>Crunch</span>
                    <span className="text-amber-300 font-bold">{flavorMeters.crunch}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-stone-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-300"
                      style={{ width: `${flavorMeters.crunch}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] text-stone-400 mb-1">
                    <span>Chill Factor</span>
                    <span className="text-cyan-300 font-bold">{flavorMeters.chill}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-stone-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full transition-all duration-300"
                      style={{ width: `${flavorMeters.chill}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Total Price & WhatsApp CTA */}
            <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-800 z-10">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-stone-400 block font-bold">
                  Bespoke Bowl Total
                </span>
                <span className="font-serif text-3xl font-black text-amber-400">
                  RM {totalPrice.toFixed(2)}
                </span>
              </div>

              <Button
                onClick={handleOrderCustomBowl}
                size="lg"
                className="w-full sm:w-auto rounded-full font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg shadow-amber-900/40 px-6 gap-2"
              >
                <span>Order Bowl via WhatsApp</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Column: Toppings Selector Grid */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-stone-800">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Choose Artisan Ingredients:
              </span>
              <span className="text-xs text-stone-400">Tap to toggle on/off</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {TOPPINGS.map((topping) => {
                const selected = hasTopping(topping.id);
                return (
                  <button
                    key={topping.id}
                    onClick={() => toggleTopping(topping)}
                    className={cn(
                      "flex flex-col text-left p-3.5 rounded-2xl border transition-all duration-200 relative group overflow-hidden",
                      selected
                        ? "bg-amber-950/40 border-amber-500 text-white shadow-md shadow-amber-900/20"
                        : "bg-stone-900/70 border-stone-800 text-stone-300 hover:border-amber-500/50 hover:bg-stone-900"
                    )}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="font-serif font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                        {topping.name}
                      </span>
                      <div
                        className={cn(
                          "w-5 h-5 rounded-full flex items-center justify-center text-xs transition-colors shrink-0",
                          selected
                            ? "bg-amber-500 text-stone-950 font-bold"
                            : "bg-stone-800 text-stone-400"
                        )}
                      >
                        {selected ? <Check className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                      </div>
                    </div>

                    <span className="text-[11px] italic text-amber-400/80 mb-1">
                      {topping.malayName}
                    </span>

                    <span className="text-[10px] text-stone-400 line-clamp-1">
                      {topping.provenance}
                    </span>

                    <div className="mt-2 flex items-center justify-between text-xs pt-1.5 border-t border-stone-800/80">
                      <span className="font-serif font-semibold text-amber-400">
                        +RM {topping.price.toFixed(2)}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-stone-400 bg-stone-800 px-1.5 py-0.5 rounded">
                        {topping.category}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
