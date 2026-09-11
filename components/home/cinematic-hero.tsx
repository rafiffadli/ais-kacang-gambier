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
                    <span>Order Now</span>
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

          {/* Right Column: Top-Down Spinning Signature Ais Kacang Experience (Little Heritage House style) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center pt-8 lg:pt-0">
            <ScrollReveal duration={1000} distance={32} delay={100}>
              <div className="relative w-64 sm:w-80 md:w-[380px] lg:w-[440px] xl:w-[490px] aspect-square group">
                {/* Soft Amber Halo Backdrop Glow */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-amber-400/30 via-amber-600/20 to-transparent blur-3xl pointer-events-none -z-10 group-hover:scale-110 transition-transform duration-700" />

                {/* Spinning Circular Antique Porcelain Bowl (Top-down Bird's-Eye View) */}
                <div className="relative aspect-square w-full filter drop-shadow-[0_30px_40px_rgba(70,30,10,0.28)] drop-shadow-[0_12px_18px_rgba(0,0,0,0.18)]">
                  <div className="w-full h-full animate-spin-plate">
                    <Image
                      src="/images/ais-kacang-topdown.png"
                      alt="Authentic Sarawak Gula Apong Ais Kacang in antique Straits Chinese Nyonya porcelain bowl, shot from above and spinning"
                      fill
                      sizes="(max-width: 640px) 256px, (max-width: 1024px) 380px, 490px"
                      className="object-contain select-none"
                      priority
                    />
                  </div>
                </div>

                {/* Floating Tethered Interactive Badge */}
                <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-amber-300 shadow-xl flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-950 whitespace-nowrap z-20 group-hover:border-amber-400 group-hover:scale-105 transition-all">
                  <Sparkles className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>Signature Ais Kacang • RM 8.50</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
