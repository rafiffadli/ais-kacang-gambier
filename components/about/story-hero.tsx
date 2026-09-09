import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles, MapPin, Heart } from "lucide-react";

export function StoryHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FFFDF9] py-16 sm:py-24 border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge variant="signature" className="mx-auto">
            Our Heritage & Artisanal Roots
          </Badge>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-tight">
            Preserving Borneo’s Sweet Heritage Along Jalan Gambier
          </h1>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            From the wild nipa palm riverbanks of coastal Sarawak to the bustling
            quayside of the Kuching Waterfront, discover the story behind our
            signature Gula Apong Ais Kacang and passion for traditional craft.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-stone-700">
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-stone-200 shadow-xs">
              <MapPin className="h-3.5 w-3.5 text-amber-700" />
              7, Jalan Gambier, Kuching
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-stone-200 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-amber-700" />
              Established 2019
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-stone-200 shadow-xs">
              <Heart className="h-3.5 w-3.5 text-rose-500" />
              100% Halal Ingredients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
