import * as React from "react";
import Link from "next/link";
import { BRAND_STATS } from "@/data/reviews-data";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Flame, Compass } from "lucide-react";

export function HeritageTeaser() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFDF9] border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Story Box */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-stone-900 text-white p-8 sm:p-10 overflow-hidden shadow-2xl border border-amber-500/20">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-amber-600/20 blur-3xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                  <Flame className="h-3.5 w-3.5 text-amber-400" />
                  <span>The Borneo Gula Apong Tradition</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                  Tapped from Coastal Nipa Palms, Simmered for Hours.
                </h3>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Unlike conventional brown sugar or refined syrups, authentic
                  Sarawak <strong className="text-amber-300 font-semibold">Gula Apong</strong> is harvested
                  from wild nipa palm inflorescences in Sarawak’s mangrove rivers.
                  Gently simmered until thick, rich, and fragrant with natural hints of salted caramel and smoke.
                </p>

                <div className="space-y-2.5 pt-2 border-t border-stone-800 text-xs sm:text-sm text-stone-200">
                  <div className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-amber-400 shrink-0" />
                    <span>Zero artificial coloring, chemical essences, or preservatives</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-amber-400 shrink-0" />
                    <span>Rich in minerals, lower glycemic index than white sugar</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-amber-400 shrink-0" />
                    <span>Traditional slow-boil artisanal consistency</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/about">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full justify-center text-xs font-bold"
                    >
                      <span>Learn the Full Story of Our Craft</span>
                      <Compass className="h-4 w-4 ml-1.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-300 text-stone-700 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-700" />
              <span>Jalan Gambier Heritage Legacy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              Where Kuching’s River Breeze Meets Sweet Memories.
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Jalan Gambier has long stood as the heartbeat of Kuching’s spice
              and produce trade. Ships docked along the Sarawak River bringing
              fresh harvests, while street hawkers fed generation after
              generation of locals.
            </p>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Established in 2019, <strong>IG Ais Kacang Gambier</strong> was
              born to preserve that nostalgic warmth. We combine traditional
              Sarawakian recipes with contemporary boutique cleanliness, ensuring
              every scoop of ice cream and bowl of shaved ice celebrates Borneo’s
              inimitable heritage.
            </p>

            {/* Stats Grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-stone-200">
              {BRAND_STATS.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-amber-800">
                    {stat.value}
                  </p>
                  <p className="text-xs text-stone-700 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
