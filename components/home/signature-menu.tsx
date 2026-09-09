"use client";

import * as React from "react";
import { MENU_ITEMS, CATEGORIES, MenuItem } from "@/data/menu-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Coffee, IceCream, Utensils, GlassWater } from "lucide-react";
import { cn } from "@/lib/utils";

export function SignatureMenu() {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");

  const filteredItems = React.useMemo(() => {
    if (activeCategory === "all") return MENU_ITEMS;
    return MENU_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "ais-kacang":
        return <Sparkles className="h-4 w-4" />;
      case "ice-cream":
        return <IceCream className="h-4 w-4" />;
      case "kopitiam":
        return <Utensils className="h-4 w-4" />;
      case "beverages":
        return <GlassWater className="h-4 w-4" />;
      default:
        return <Coffee className="h-4 w-4" />;
    }
  };

  return (
    <section id="menu" className="py-20 bg-[#FAF6EE] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="signature" className="mx-auto">
            Traditional Craftsmanship • Modern Taste
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Our Handcrafted Offerings
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            From our legendary Jalan Gambier Gula Apong shaved ice to rich
            Bornean soft-serve and piping hot Sarawak Laksa, each creation is
            prepared with authentic local ingredients.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer",
                  isActive
                    ? "bg-amber-600 text-white border-amber-600 shadow-md shadow-amber-900/15"
                    : "bg-white/80 text-stone-700 border-stone-300 hover:border-amber-500 hover:bg-white"
                )}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item: MenuItem) => (
            <Card
              key={item.id}
              className="flex flex-col justify-between overflow-hidden bg-white/95 border-amber-900/10 hover:border-amber-400 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Header with Title & Price */}
                <CardHeader className="space-y-3 pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      {item.badge && (
                        <Badge
                          variant={
                            item.badge === "Signature"
                              ? "signature"
                              : item.badge === "Waterfront Classic"
                              ? "emerald"
                              : "default"
                          }
                          className="text-[11px]"
                        >
                          {item.badge}
                        </Badge>
                      )}
                      <CardTitle className="text-xl group-hover:text-amber-800 transition-colors">
                        {item.name}
                      </CardTitle>
                      {item.malayName && (
                        <p className="text-xs italic text-stone-700 font-serif">
                          {item.malayName}
                        </p>
                      )}
                    </div>
                    <span className="font-serif text-xl font-bold text-amber-800 shrink-0 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                      {item.price}
                    </span>
                  </div>

                  <CardDescription className="text-xs sm:text-sm leading-relaxed text-stone-700">
                    {item.description}
                  </CardDescription>
                </CardHeader>

                {/* Ingredients Pills */}
                <CardContent className="pt-0 pb-4">
                  <div className="pt-2 border-t border-stone-100">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Condiments & Blend:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.ingredients.map((ing, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-stone-100/80 text-stone-800 px-2 py-0.5 rounded-md font-medium"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </div>

              {/* Action Bar */}
              <CardFooter className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] text-stone-700 flex items-center gap-1 font-medium">
                  <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
                  Made Fresh to Order
                </span>

                <a
                  href={`https://wa.me/60168859657?text=Hi%20IG%20Ais%20Kacang%20Gambier,%20I%20would%20like%20to%20order/inquire%20about%20${encodeURIComponent(
                    item.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs font-semibold text-amber-800 hover:text-amber-900 hover:bg-amber-100/80"
                  >
                    Order on WhatsApp →
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-stone-700">
            * All desserts and beverages are prepared using Halal-certified
            ingredients. Vegetarian-friendly options available upon request.
          </p>
        </div>
      </div>
    </section>
  );
}
