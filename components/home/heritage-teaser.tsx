import * as React from "react";
import Link from "next/link";
import { BRAND_STATS } from "@/data/reviews-data";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Check, ShieldCheck, Flame, Compass, ArrowRight } from "lucide-react";

export function HeritageTeaser() {
  const craftSteps = [
    {
      number: "01",
      title: "Wild Mangrove Tapping",
      description:
        "Tapped sustainably from the inflorescences of wild nipa palms that line Sarawak's pristine tidal rivers.",
    },
    {
      number: "02",
      title: "Woodfire Iron Wok Boil",
      description:
        "Cooked down slowly for hours until it transforms into thick, smoky, mineral-rich Gula Apong with salted butterscotch notes.",
    },
    {
      number: "03",
      title: "Micro-Calibrated Shaving",
      description:
        "Blades calibrated multiple times daily to shave crystalline ice into cloud-soft snow that absorbs every drop of palm nectar.",
    },
    {
      number: "04",
      title: "Waterfront Quayside Joy",
      description:
        "Served fresh at 7, Jalan Gambier as the river breeze cools the sunset and the Darul Hana fountain begins.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-transparent border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal duration={1000} distance={32}>
          <div className="max-w-3xl space-y-4">
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
          </div>
        </ScrollReveal>

        {/* 4-Step Modern Process Line */}
        <ScrollReveal duration={1000} distance={32} delay={80}>
          <div className="mt-14 pt-12 border-t border-stone-200">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-800 mb-8">
              The Artisanal Shaved Ice Journey:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {craftSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative p-6 rounded-2xl bg-white border border-stone-200 shadow-xs hover:border-amber-400 hover:shadow-md transition-all space-y-3 group"
                >
                  <span className="font-serif text-3xl font-black text-amber-600/40 group-hover:text-amber-600 transition-colors">
                    {step.number}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-stone-900">
                    {step.title}
                  </h4>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Modern Bento Callout with Heritage Guarantees & Stats */}
        <ScrollReveal duration={1000} distance={32} delay={100}>
          <div className="mt-12 rounded-3xl bg-stone-900 text-white p-8 sm:p-12 border border-amber-500/20 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Palm Sugar Story */}
            <div className="lg:col-span-7 space-y-4">
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

              <div className="space-y-2 pt-2 text-xs sm:text-sm text-stone-200">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Zero artificial coloring, chemical essences, or preservatives</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Rich in minerals, lower glycemic index than white sugar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Traditional slow-boil artisanal consistency</span>
                </div>
              </div>

              <div className="pt-3">
                <Link href="/about">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="rounded-full px-5 text-xs font-bold gap-1.5"
                  >
                    <span>Learn the Full Story of Our Craft</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Modern Stats Bento */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {BRAND_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs text-center space-y-1"
                >
                  <p className="font-serif text-3xl font-bold text-amber-400">
                    {stat.value}
                  </p>
                  <p className="text-xs text-stone-300 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
