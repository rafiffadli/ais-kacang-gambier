"use client";

import * as React from "react";
import Link from "next/link";
import {
  Sparkles,
  Star,
  MapPin,
  ArrowRight,
  Award,
  Clock,
  Heart,
  Utensils,
  IceCream,
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function HeroBanner() {
  const [activeTaste, setActiveTaste] = React.useState<"ais-kacang" | "ice-cream" | "laksa">("ais-kacang");

  const tasteHighlights = {
    "ais-kacang": {
      title: "Signature Gula Apong Ais Kacang",
      subtitle: "Fluffy Shaved Snow • Slow-Simmered Adzuki • Roasted Peanuts",
      price: "RM 8.50",
      badge: "Waterfront Best Seller",
      badgeVariant: "signature" as const,
      flavorProfile: "Smoky Butterscotch • Melt-in-Mouth Snow • Rich Creaminess",
      ingredients: [
        "Pure Sarawak Gula Apong",
        "Fine Shaved Ice",
        "Red Beans",
        "Sweet Corn",
        "Roasted Peanuts",
        "Attap Chee",
        "Grass Jelly",
      ],
      quote: "The shaved ice is feather-light like fresh mountain snow, drenched in authentic Sarawak palm sugar.",
    },
    "ice-cream": {
      title: "Original Gula Apong Soft Serve",
      subtitle: "Daily Churned Cream • Warm Palm Molasses • Biscoff Crunch",
      price: "RM 6.90",
      badge: "Artisanal Soft-Serve",
      badgeVariant: "signature" as const,
      flavorProfile: "Velvety Dairy Cream • Caramelized Apong • Salted Toffee",
      ingredients: [
        "100% Gula Apong Nectar",
        "Fresh Dairy Cream",
        "Crushed Biscoff & Peanuts",
        "Crispy Waffle Cone",
      ],
      quote: "Not too sweet, deeply fragrant with real nipa palm molasses. An absolute Kuching essential.",
    },
    laksa: {
      title: "Authentic Sarawak Laksa",
      subtitle: "Anthony Bourdain's 'Breakfast of the Gods' • Sea Prawns & Sambal",
      price: "RM 11.50",
      badge: "Kopitiam Heritage",
      badgeVariant: "emerald" as const,
      flavorProfile: "Aromatic Spices • Creamy Santan Broth • Zesty Calamansi",
      ingredients: [
        "Rice Vermicelli",
        "Secret Herbal Laksa Broth",
        "Fresh Sea Prawns",
        "Shredded Chicken",
        "Calamansi Lime",
        "House Sambal Belacan",
      ],
      quote: "The rich herbal broth and fiery sambal belacan paired with iced dessert is a match made in heaven.",
    },
  };

  const currentItem = tasteHighlights[activeTaste];

  return (
    <section className="relative overflow-hidden bg-transparent pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 border-b border-amber-900/10">
      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-gradient-to-b from-amber-200/25 via-amber-100/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-80 h-80 rounded-full bg-rose-200/20 blur-3xl pointer-events-none -z-10" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline Editorial Header */}
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-950 text-xs font-semibold shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-700" />
            <span>Kuching Waterfront&apos;s Iconic Shaved Ice &amp; Kopitiam Landmark</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.08]">
            Where Authentic{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent">
                Gula Apong
              </span>
              <span className="absolute left-0 bottom-1 w-full h-2 bg-amber-300/40 -z-10 -rotate-1 rounded-sm" />
            </span>{" "}
            Meets Shaved Snow.
          </h1>

          <p className="text-base sm:text-xl text-stone-700 max-w-2xl mx-auto leading-relaxed font-normal">
            Savor Borneo&apos;s finest nipa palm sweetness along Jalan Gambier.
            Handcrafted fluffy snow shaved ice, artisanal soft-serve, and
            soulful Sarawak Kopitiam recipes since 2019.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <a href="#menu">
              <Button size="lg" className="rounded-full px-7 shadow-lg shadow-amber-900/15">
                <span>Discover the Menu</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </a>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-7 bg-white/80 hover:bg-white"
              >
                <span>Find Location &amp; Hours</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Modern Interactive Taste Showcase Bento */}
        <div className="mt-14 sm:mt-20 max-w-5xl mx-auto">
          {/* Taste Switcher Tabs */}
          <div className="flex items-center justify-center gap-2 p-1.5 rounded-full bg-stone-200/70 max-w-md mx-auto mb-6 backdrop-blur-xs">
            <button
              onClick={() => setActiveTaste("ais-kacang")}
              className={cn(
                "flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full text-xs font-bold transition-all",
                activeTaste === "ais-kacang"
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-700 hover:text-stone-900"
              )}
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              <span>Ais Kacang</span>
            </button>

            <button
              onClick={() => setActiveTaste("ice-cream")}
              className={cn(
                "flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full text-xs font-bold transition-all",
                activeTaste === "ice-cream"
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-700 hover:text-stone-900"
              )}
            >
              <IceCream className="h-3.5 w-3.5 text-amber-600" />
              <span>Soft Serve</span>
            </button>

            <button
              onClick={() => setActiveTaste("laksa")}
              className={cn(
                "flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full text-xs font-bold transition-all",
                activeTaste === "laksa"
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-700 hover:text-stone-900"
              )}
            >
              <Utensils className="h-3.5 w-3.5 text-emerald-600" />
              <span>Sarawak Laksa</span>
            </button>
          </div>

          {/* Interactive Bento Showcase Card */}
          <div className="rounded-3xl bg-gradient-to-br from-stone-900 via-stone-950 to-amber-950 text-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-amber-500/30 relative overflow-hidden">
            {/* Background Decorative Rings */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={currentItem.badgeVariant} className="text-xs px-3 py-1">
                    {currentItem.badge}
                  </Badge>
                  <span className="text-xs text-amber-300 font-semibold tracking-wide flex items-center gap-1">
                    <Flame className="h-3.5 w-3.5" />
                    {currentItem.flavorProfile}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                    {currentItem.title}
                  </h3>
                  <p className="text-sm text-stone-300 font-medium">
                    {currentItem.subtitle}
                  </p>
                </div>

                {/* Key Elements List */}
                <div className="space-y-2 pt-2 border-t border-stone-800">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                    Handcrafted Elements &amp; Recipe:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {currentItem.ingredients.map((ing, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-stone-800/80 text-stone-200 border border-stone-700/70 px-2.5 py-1 rounded-lg"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-stone-400 italic pt-1 border-l-2 border-amber-500 pl-3">
                  &ldquo;{currentItem.quote}&rdquo;
                </p>
              </div>

              {/* Right Showcase Box */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-stone-400 font-bold">
                    Specialty Price
                  </span>
                  <span className="font-serif text-3xl sm:text-4xl font-black text-amber-400">
                    {currentItem.price}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-stone-300">
                    <Award className="h-4 w-4 text-amber-400 shrink-0" />
                    <span>100% Pure Sarawak Nipa Palm Sugar</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-300">
                    <Heart className="h-4 w-4 text-rose-400 shrink-0" />
                    <span>Halal Ingredients &amp; Freshly Made Daily</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-300">
                    <MapPin className="h-4 w-4 text-amber-400 shrink-0" />
                    <span>Facing Sarawak River &amp; Musical Fountain</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/60168859657?text=Hi%20IG%20Ais%20Kacang%20Gambier,%20I%20would%20like%20to%20order/inquire%20about%20${encodeURIComponent(
                      currentItem.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant="primary"
                      className="w-full justify-center gap-2 py-3 rounded-xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg shadow-amber-900/40"
                    >
                      <span>Order on WhatsApp</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proof Badges Bar */}
        <div className="mt-12 pt-8 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              4.8 ★
            </p>
            <p className="text-xs text-stone-600 font-medium mt-0.5">
              Google Customer Rating
            </p>
          </div>
          <div className="p-3">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              100%
            </p>
            <p className="text-xs text-stone-600 font-medium mt-0.5">
              Pure Borneo Palm Sugar
            </p>
          </div>
          <div className="p-3">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              250k+
            </p>
            <p className="text-xs text-stone-600 font-medium mt-0.5">
              Bowls &amp; Cones Served
            </p>
          </div>
          <div className="p-3">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Est. 2019
            </p>
            <p className="text-xs text-stone-600 font-medium mt-0.5">
              Jalan Gambier Landmark
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
