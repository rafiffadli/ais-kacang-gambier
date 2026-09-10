"use client";

import * as React from "react";
import Image from "next/image";
import {
  Sparkles,
  Clock,
  ArrowRight,
  Award,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAmbientMode } from "@/components/ui/ambient-mode-provider";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface CinematicHeroProps {
  onOpenOrderDrawer?: () => void;
}

export function CinematicHero({ onOpenOrderDrawer }: CinematicHeroProps) {
  const { kuchingTime } = useAmbientMode();

  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 border-b border-amber-900/10 transition-colors duration-700">
      {/* Dynamic Background Atmosphere Gradients */}
      <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <ScrollReveal duration={1000} distance={28}>
              {/* Waterfront Live Status Pill */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-400/50 text-amber-950 text-xs font-semibold shadow-xs">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Open Now • 10:00 AM – 10:30 PM</span>
                <span className="text-amber-400">•</span>
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="h-3 w-3 text-amber-700" />
                  {kuchingTime || "Kuching Waterfront"}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal duration={1000} distance={32} delay={60}>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-950 leading-[1.08]">
                Where Authentic{" "}
                <span className="relative inline-block text-amber-700">
                  <span>Gula Apong</span>
                  <span className="absolute left-0 bottom-1 w-full h-2.5 bg-amber-300/40 -z-10 -rotate-1 rounded-sm" />
                </span>{" "}
                Meets Feathered Snow.
              </h1>
            </ScrollReveal>

            <ScrollReveal duration={1000} distance={32} delay={100}>
              <p className="text-base sm:text-xl text-stone-700 max-w-2xl leading-relaxed font-normal">
                Savor 100% pure nipa palm nectar tapped from wild Sarawak river mangroves.
                Feather-light shaved crystal ice, velvety Gula Apong soft-serve, and soulful
                Sarawak Kopitiam classics along Jalan Gambier.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal duration={1000} distance={32} delay={140}>
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a href="#menu">
                  <Button
                    size="lg"
                    className="rounded-full px-7 shadow-lg shadow-amber-900/20 font-bold bg-amber-700 hover:bg-amber-800 text-white gap-2"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>Explore Artisan Menu</span>
                  </Button>
                </a>

                {onOpenOrderDrawer ? (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={onOpenOrderDrawer}
                    className="rounded-full px-7 bg-white/80 hover:bg-white border-amber-800/30 text-stone-900 font-bold"
                  >
                    <span>Quick Order Drawer</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                ) : (
                  <a href="#menu">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full px-7 bg-white/80 hover:bg-white border-amber-800/30 text-stone-900 font-bold"
                    >
                      <span>Explore Artisanal Menu</span>
                    </Button>
                  </a>
                )}
              </div>
            </ScrollReveal>

            {/* Quick Proof Badges */}
            <ScrollReveal duration={1000} distance={32} delay={180}>
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-stone-600 border-t border-stone-200">
                <div className="flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>100% Wild Nipa Palm Sugar</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>100% Halal Certified Ingredients</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Waves className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>Next Fountain Show: 8:30 PM</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Rich Cinemagraph / Interactive Gula Apong Drizzle Experience */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            <ScrollReveal duration={1000} distance={32} delay={100}>
              <div className="relative w-full max-w-md aspect-4/5 rounded-3xl overflow-hidden border-2 border-amber-800/30 shadow-2xl shadow-stone-950/20 group">
                {/* Visual Image */}
                <Image
                  src="/images/ais-kacang.jpg"
                  alt="Signature Gula Apong Ais Kacang saturated in dark golden Borneo palm sugar syrup"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 448px"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Cinemagraph Atmosphere Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent pointer-events-none" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 z-20">
                  <Badge variant="signature" className="text-xs px-3 py-1 shadow-md">
                    👑 Waterfront Crown Jewel
                  </Badge>
                </div>

                {/* Bottom Card Spotlight */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-stone-950/85 backdrop-blur-md border border-amber-500/30 text-white z-20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold">
                        Signature Gula Apong Ais Kacang
                      </h3>
                      <p className="text-xs text-amber-300 font-medium">
                        Adzuki Beans • Attap Chee • Roasted Peanuts
                      </p>
                    </div>
                    <span className="font-serif text-2xl font-black text-amber-400">
                      RM 8.50
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
