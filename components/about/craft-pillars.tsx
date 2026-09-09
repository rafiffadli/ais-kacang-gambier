import * as React from "react";
import { Sparkles, Droplets, UtensilsCrossed, ShieldCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function CraftPillars() {
  const pillars = [
    {
      icon: <Droplets className="h-6 w-6 text-amber-600" />,
      title: "100% Pure Sarawak Gula Apong",
      subtitle: "Borneo's Coastal Liquid Gold",
      description:
        "Harvested sustainably by tapping the floral stalks of nipa palms that flourish naturally along Sarawak's mangrove rivers. The sweet sap is cooked down in massive iron woks over wood fires for hours until it transforms into a thick, smoky, mineral-rich nectar with complex butterscotch undertones.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-amber-600" />,
      title: "Snow-Fine Shaved Ice Craft",
      subtitle: "Melt-in-the-Mouth Consistency",
      description:
        "Great Ais Kacang relies heavily on the precision of the ice. We calibrate our shaving blades multiple times each day to produce feather-light snow ribbons rather than coarse crystals. This allows the Gula Apong nectar and creamy milk to permeate evenly throughout the entire mound.",
    },
    {
      icon: <UtensilsCrossed className="h-6 w-6 text-amber-600" />,
      title: "Slow-Cooked Condiments",
      subtitle: "Pandan, Adzuki & Attap Chee",
      description:
        "Every topping is prepared with patience. Our adzuki red beans are soaked and simmered with pandan leaves until soft without breaking, our sweet corn is freshly creamed, and our roasted peanuts are crushed daily to guarantee unmatched crunchiness in every spoonful.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-amber-600" />,
      title: "Jalan Gambier Heritage Soul",
      subtitle: "Boutique Cleanliness & Nostalgia",
      description:
        "While respecting the deep history of Kuching Waterfront's historic street food traditions, we maintain rigorous hygiene, Halal-compliant ingredients, and an inviting, modern boutique ambiance where families and travelers can dine with complete comfort and joy.",
    },
  ];

  return (
    <section className="py-20 bg-[#FAF6EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-800">
            Our 4 Pillars of Excellence
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Crafting Unforgettable Malaysian Shaved Ice
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            We don’t cut corners. From how the palm sap is boiled to how each bowl
            is crowned, our standard ensures you savor genuine Sarawakian mastery.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <Card
              key={idx}
              className="bg-white border-amber-900/10 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="space-y-3 pb-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100/70 border border-amber-200 flex items-center justify-center shadow-xs">
                  {pillar.icon}
                </div>
                <div>
                  <CardTitle className="text-xl text-stone-900">
                    {pillar.title}
                  </CardTitle>
                  <p className="text-xs font-semibold text-amber-700 mt-0.5">
                    {pillar.subtitle}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-stone-700 leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
