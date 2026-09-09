import * as React from "react";
import Link from "next/link";
import { Sparkles, Star, MapPin, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EA] to-[#FFFDF9] pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 border-b border-amber-900/10">
      {/* Subtle decorative heritage radial glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-amber-200/30 via-rose-100/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-950 text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-amber-700 animate-pulse" />
              <span>Jalan Gambier’s Crown Shaved Ice Landmark</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.15]">
              Authentic Sarawak{" "}
              <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent">
                Gula Apong
              </span>{" "}
              Ais Kacang & Desserts
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-stone-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience the timeless charm of the Kuching Waterfront. We craft
              fine snow-shaved ice drenched in pure Borneo nipa palm sugar,
              paired with artisanal soft-serve, comforting Kopitiam classics,
              and rich Sarawak heritage.
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-stone-700 font-medium">
              <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-stone-200/80 shadow-xs">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                <span className="font-bold text-stone-900">4.8 / 5.0</span>
                <span className="text-stone-700">(Google Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-stone-200/80 shadow-xs">
                <Award className="h-4 w-4 text-emerald-600" />
                <span className="text-stone-900 font-semibold">100% Pure Sarawak Palm Sugar</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-stone-200/80 shadow-xs">
                <MapPin className="h-4 w-4 text-amber-700" />
                <span className="text-stone-900 font-semibold">Kuching Waterfront</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a href="#menu" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto shadow-md">
                  <span>Explore Signature Menu</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>

              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white/90"
                >
                  <span>Find Our Location & Hours</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Featured Signature Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl bg-gradient-to-br from-amber-500/15 via-white to-amber-100/30 p-2 shadow-2xl border border-amber-200/80">
              <div className="rounded-[22px] bg-white p-6 shadow-sm space-y-6">
                {/* Header Badge in Card */}
                <div className="flex items-center justify-between">
                  <Badge variant="signature" className="text-xs px-3 py-1">
                    ★ Iconic Best-Seller
                  </Badge>
                  <span className="font-serif text-2xl font-bold text-amber-800">
                    RM 8.50
                  </span>
                </div>

                {/* Shaved Ice Visual Motif Container */}
                <div className="relative h-56 w-full rounded-2xl bg-gradient-to-tr from-stone-900 via-amber-950 to-stone-800 p-6 flex flex-col justify-end text-white overflow-hidden shadow-inner">
                  {/* Visual layered design elements representing Ais Kacang */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-amber-300 border border-amber-400/30">
                    <Sparkles className="h-3 w-3" />
                    <span>Jalan Gambier Classic</span>
                  </div>

                  <div className="space-y-1 relative z-10">
                    <p className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                      Handcrafted Daily
                    </p>
                    <h2 className="font-serif text-2xl font-bold leading-snug">
                      Signature Gula Apong Ais Kacang
                    </h2>
                    <p className="text-xs text-stone-300">
                      Fluffy shaved snow • Slow-simmered red bean • Roasted peanuts • Sweet corn
                    </p>
                  </div>

                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Key Ingredients Breakdown */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                    Key Sarawakian Elements:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-xs bg-amber-100/80 text-amber-900 px-2.5 py-1 rounded-md font-medium border border-amber-200">
                      Borneo Gula Apong
                    </span>
                    <span className="text-xs bg-stone-100 text-stone-800 px-2.5 py-1 rounded-md font-medium border border-stone-200">
                      Crisp Roasted Peanuts
                    </span>
                    <span className="text-xs bg-stone-100 text-stone-800 px-2.5 py-1 rounded-md font-medium border border-stone-200">
                      Sweet Cream Corn
                    </span>
                    <span className="text-xs bg-stone-100 text-stone-800 px-2.5 py-1 rounded-md font-medium border border-stone-200">
                      Attap Chee & Cendol
                    </span>
                  </div>
                </div>

                {/* Customer Trust Quote */}
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-700">
                  <span className="flex items-center gap-1 font-medium">
                    <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    &quot;Best Gula Apong in Kuching&quot;
                  </span>
                  <Link
                    href="/about"
                    className="font-semibold text-amber-700 hover:text-amber-800 underline underline-offset-2"
                  >
                    Read Our Story →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
