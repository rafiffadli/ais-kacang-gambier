"use client";

import * as React from "react";
import { MENU_ITEMS, CATEGORIES, MenuItem } from "@/data/menu-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Heart,
  Coffee,
  IceCream,
  Utensils,
  GlassWater,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
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
        return <Sparkles className="h-3.5 w-3.5" />;
      case "ice-cream":
        return <IceCream className="h-3.5 w-3.5" />;
      case "kopitiam":
        return <Utensils className="h-3.5 w-3.5" />;
      case "beverages":
        return <GlassWater className="h-3.5 w-3.5" />;
      default:
        return <Coffee className="h-3.5 w-3.5" />;
    }
  };

  return (
    <section id="menu" className="py-20 lg:py-28 bg-transparent scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-300/80">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-800">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              <span>Artisanal Heritage Menu</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
              Crafted with Borneo&apos;s Purest Palm Sugar
            </h2>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Every dish tells the story of Jalan Gambier—where century-old
              Sarawakian recipes meet modern boutique craftsmanship.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-stone-700 bg-white/80 px-4 py-2 rounded-full border border-stone-200 shrink-0 shadow-xs">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>100% Halal Ingredients Guaranteed</span>
          </div>
        </div>

        {/* CROWN JEWELS BENTO GRID */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          {/* Bento Tile 1: Signature Ais Kacang (Large 7-cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-amber-900/15 p-7 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <Badge variant="signature" className="text-xs px-3 py-1">
                  Crown Jewel • Signature
                </Badge>
                <span className="font-serif text-2xl font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-xl border border-amber-200">
                  RM 8.50
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  Signature Gula Apong Ais Kacang
                </h3>
                <p className="text-xs italic text-stone-700 font-serif mt-0.5">
                  Ais Kacang Istimewa Gula Apong
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Mountain of finely shaved snow ice saturated with caramelized
                Sarawak Gula Apong nectar, slow-simmered red beans, creamy sweet
                corn, attap seeds, grass jelly, and crushed roasted peanuts.
              </p>

              <div className="pt-2 border-t border-stone-100">
                <p className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Condiments &amp; Blend:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Pure Sarawak Gula Apong",
                    "Fine Shaved Ice",
                    "Red Beans",
                    "Sweet Corn",
                    "Roasted Peanuts",
                    "Attap Chee",
                    "Grass Jelly",
                    "Evaporated Milk",
                  ].map((ing, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-stone-100/90 text-stone-800 px-2.5 py-0.5 rounded-md font-medium"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between relative z-10">
              <span className="text-xs text-stone-700 font-medium flex items-center gap-1">
                <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
                Made fresh to order
              </span>

              <a
                href="https://wa.me/60168859657?text=Hi%20IG%20Ais%20Kacang%20Gambier,%20I'd%20like%20to%20order%20the%20Signature%20Gula%20Apong%20Ais%20Kacang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="rounded-full gap-1 text-xs">
                  <span>Order on WhatsApp</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Bento Tile 2: Gula Apong Soft Serve (5-cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-stone-900 text-white border border-amber-500/20 p-7 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-600/20 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <Badge variant="signature" className="text-xs px-3 py-1">
                  Artisan Best Seller
                </Badge>
                <span className="font-serif text-2xl font-bold text-amber-400 bg-white/10 px-3 py-1 rounded-xl border border-white/15">
                  RM 6.90
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  Original Gula Apong Soft Serve
                </h3>
                <p className="text-xs italic text-amber-300/80 font-serif mt-0.5">
                  Ais Krim Kon Gula Apong
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Silky, velvety soft-serve ice cream churned fresh daily, infused
                with pure Borneo nipa palm sugar and drizzled with warm Gula Apong
                molasses and crunchy toppings.
              </p>

              <div className="pt-2 border-t border-stone-800">
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Sarawak Gula Apong",
                    "Fresh Milk Cream",
                    "Crushed Biscoff & Peanuts",
                    "Waffle Cone or Cup",
                  ].map((ing, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-stone-800 text-stone-200 px-2.5 py-0.5 rounded-md font-medium border border-stone-700/60"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-800 flex items-center justify-between relative z-10">
              <span className="text-xs text-amber-400 font-medium">
                ★ 100% Bornean Milk &amp; Sugar
              </span>

              <a
                href="https://wa.me/60168859657?text=Hi%20IG%20Ais%20Kacang%20Gambier,%20I'd%20like%20to%20order%20the%20Gula%20Apong%20Soft%20Serve"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-full gap-1 text-xs font-bold"
                >
                  <span>Order on WhatsApp</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Bento Tile 3: Authentic Sarawak Laksa (6-cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-white border border-amber-900/15 p-7 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="emerald" className="text-xs px-3 py-1">
                  Anthony Bourdain&apos;s Choice
                </Badge>
                <span className="font-serif text-2xl font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-xl border border-amber-200">
                  RM 11.50
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  Authentic Sarawak Laksa
                </h3>
                <p className="text-xs italic text-stone-700 font-serif mt-0.5">
                  Laksa Sarawak Asli Gambier
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Anthony Bourdain&apos;s famous &apos;Breakfast of the Gods&apos;.
                Fragrant broth made with aromatic herbs and spices, coconut milk,
                tender shredded chicken, fresh sea prawns, egg omelette strips,
                beansprouts, and sambal belacan with calamansi.
              </p>

              <div className="pt-2 border-t border-stone-100 flex flex-wrap gap-1.5">
                {[
                  "Rice Vermicelli",
                  "Secret Herbal Laksa Broth",
                  "Fresh Sea Prawns",
                  "House Sambal Belacan",
                ].map((ing, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-stone-100/90 text-stone-800 px-2.5 py-0.5 rounded-md font-medium"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-700 font-medium">
                Piping hot comfort broth
              </span>
              <a
                href="https://wa.me/60168859657?text=Hi%20IG%20Ais%20Kacang%20Gambier,%20I'd%20like%20to%20order%20the%20Sarawak%20Laksa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="rounded-full gap-1 text-xs">
                  <span>Order on WhatsApp</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Bento Tile 4: Teh C Special / Three Layer Tea (6-cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-white border border-amber-900/15 p-7 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="default" className="text-xs px-3 py-1">
                  Waterfront Classic
                </Badge>
                <span className="font-serif text-2xl font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-xl border border-amber-200">
                  RM 5.50
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  Sarawak Three-Layer Tea (Teh C Peng)
                </h3>
                <p className="text-xs italic text-stone-700 font-serif mt-0.5">
                  Teh C Peng Special Warisan
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                The quintessential Sarawak thirst-quencher. Distinct layers of
                thick dark Gula Apong syrup, rich evaporated milk, and fragrant
                steeped red tea served ice-cold.
              </p>

              <div className="pt-2 border-t border-stone-100 flex flex-wrap gap-1.5">
                {[
                  "Gula Apong Base Layer",
                  "Evaporated Milk",
                  "Steeped Black Tea",
                  "Crushed Ice",
                ].map((ing, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-stone-100/90 text-stone-800 px-2.5 py-0.5 rounded-md font-medium"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-700 font-medium">
                Borneo signature refresher
              </span>
              <a
                href="https://wa.me/60168859657?text=Hi%20IG%20Ais%20Kacang%20Gambier,%20I'd%20like%20to%20order%20the%20Teh%20C%20Peng%20Special"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="rounded-full gap-1 text-xs">
                  <span>Order on WhatsApp</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* FULL FILTERABLE MENU DIRECTORY */}
        <div className="mt-20 pt-16 border-t border-stone-300">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Browse All Culinary Offerings
            </h3>
            <p className="text-xs sm:text-sm text-stone-700">
              Filter our full assortment of shaved ice, artisanal soft serve,
              kopitiam mains, and thirst quenchers.
            </p>

            {/* Pill Filter Tabs */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 border cursor-pointer",
                      isActive
                        ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                        : "bg-white text-stone-700 border-stone-300 hover:border-amber-600 hover:bg-white"
                    )}
                  >
                    {getCategoryIcon(cat.id)}
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filtered Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredItems.map((item: MenuItem) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-stone-200/90 p-5 shadow-xs hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-serif text-base font-bold text-stone-900 leading-snug">
                      {item.name}
                    </span>
                    <span className="font-serif text-sm font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/80 shrink-0">
                      {item.price}
                    </span>
                  </div>

                  {item.malayName && (
                    <p className="text-[11px] italic text-stone-700 font-serif">
                      {item.malayName}
                    </p>
                  )}

                  <p className="text-xs text-stone-700 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {item.ingredients.slice(0, 3).map((ing, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-stone-100 text-stone-700 px-1.5 py-0.5 rounded"
                      >
                        {ing}
                      </span>
                    ))}
                    {item.ingredients.length > 3 && (
                      <span className="text-[10px] text-stone-700 px-1">
                        +{item.ingredients.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                  {item.badge && (
                    <Badge variant="outline" className="text-[10px] px-2 py-0">
                      {item.badge}
                    </Badge>
                  )}

                  <a
                    href={`https://wa.me/60168859657?text=Hi%20IG%20Ais%20Kacang%20Gambier,%20I'd%20like%20to%20order%20${encodeURIComponent(
                      item.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-amber-800 hover:text-amber-900 inline-flex items-center gap-0.5 ml-auto"
                  >
                    <span>Order</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-stone-700">
          * All desserts and beverages are prepared using Halal-certified ingredients. Vegetarian-friendly options available upon request.
        </div>
      </div>
    </section>
  );
}
