"use client";

import * as React from "react";
import Image from "next/image";
import { MENU_ITEMS, CATEGORIES, MenuItem } from "@/data/menu-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Sparkles,
  Heart,
  Coffee,
  IceCream,
  Utensils,
  GlassWater,
  ArrowUpRight,
  ShieldCheck,
  Award,
  Plus,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SignatureMenuProps {
  onSelectItemForOrder?: (item: MenuItem) => void;
}

export function SignatureMenu({ onSelectItemForOrder }: SignatureMenuProps) {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const [isExpandedOnMobile, setIsExpandedOnMobile] = React.useState<boolean>(false);

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

  const handleItemOrder = (item: MenuItem) => {
    if (onSelectItemForOrder) {
      onSelectItemForOrder(item);
    } else {
      const msg = encodeURIComponent(
        `Hello IG Ais Kacang Gambier! I would like to order: ${item.name} (${item.price}). Please confirm availability.`
      );
      window.open(`https://wa.me/60168859657?text=${msg}`, "_blank");
    }
  };

  const handleCollapseMenu = () => {
    setIsExpandedOnMobile(false);
    const menuElem = document.getElementById("menu");
    if (menuElem) {
      const navOffset = 85;
      const y = menuElem.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="menu" className="scroll-mt-24 py-16 sm:py-20 lg:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal duration={1000} distance={32}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-12 border-b border-stone-300/80">
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

            {/* Proof Seals & Mobile Fold Toggle */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-800 bg-white/90 px-3.5 py-1.5 rounded-full border border-stone-200 shadow-xs">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>100% Halal Certified</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-800 bg-white/90 px-3.5 py-1.5 rounded-full border border-stone-200 shadow-xs">
                <Award className="h-4 w-4 text-amber-600 shrink-0" />
                <span>Wild Asajaya Nectar</span>
              </div>

              {/* Mobile Quick Fold Toggle Pill */}
              <button
                onClick={() => setIsExpandedOnMobile(!isExpandedOnMobile)}
                className="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-700 text-white shadow-sm active:scale-95 transition-all"
              >
                {isExpandedOnMobile ? (
                  <>
                    <span>Fold Menu</span>
                    <ChevronUp className="h-3.5 w-3.5" />
                  </>
                ) : (
                  <>
                    <span>Unfold All ({MENU_ITEMS.length})</span>
                    <ChevronDown className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* CROWN JEWELS BENTO GRID */}
        <ScrollReveal duration={1000} distance={32} delay={80}>
          <div
            className={cn(
              "mt-8 sm:mt-12 grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6",
              !isExpandedOnMobile ? "hidden md:grid" : "grid"
            )}
          >
            {/* Bento Tile 1: Signature Ais Kacang (Foldable on mobile, always visible on desktop) */}
            <div
              className={cn(
                "lg:col-span-7 rounded-3xl bg-white border border-amber-900/15 p-6 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden",
                !isExpandedOnMobile && "hidden md:flex"
              )}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <Badge variant="signature" className="text-xs px-3 py-1">
                    👑 Crown Jewel • Signature
                  </Badge>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-xl border border-amber-200">
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

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {[
                    "Pure Gula Apong",
                    "Fine Shaved Snow",
                    "Red Beans",
                    "Attap Chee",
                    "Sweet Corn",
                    "Roasted Peanuts",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium bg-amber-50/90 text-amber-900 border border-amber-200/80 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between relative z-10">
                <span className="text-xs text-stone-600 font-medium flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                  Waterfront Crowd Favorite
                </span>
                <Button
                  onClick={() => handleItemOrder(MENU_ITEMS[0])}
                  size="sm"
                  className="rounded-full gap-1.5 px-5 font-bold bg-amber-700 hover:bg-amber-800 text-white shadow-xs"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Order Now</span>
                </Button>
              </div>
            </div>

            {/* Bento Tile 2: Original Gula Apong Soft Serve (Foldable on mobile, always visible on desktop) */}
            <div
              className={cn(
                "lg:col-span-5 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-950 to-amber-950 text-white p-6 sm:p-9 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden",
                !isExpandedOnMobile && "hidden md:flex"
              )}
            >
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-600/15 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <Badge variant="signature" className="text-xs px-3 py-1 bg-amber-600 border-amber-500">
                    Daily Churned
                  </Badge>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-amber-400 bg-white/10 px-3 py-1 rounded-xl border border-white/20">
                    RM 6.90
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    Original Gula Apong Soft Serve
                  </h3>
                  <p className="text-xs italic text-amber-200/80 font-serif mt-0.5">
                    Ais Krim Kon Gula Apong
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Silky, velvety soft-serve churned fresh daily, infused with pure
                  Borneo palm sugar and drizzled with warm molasses and Biscoff crumbs.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["Fresh Milk Cream", "Palm Molasses", "Biscoff Crumbs", "Waffle Cone"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium bg-stone-800 text-stone-200 border border-stone-700 px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-800 flex items-center justify-between relative z-10">
                <span className="text-xs text-amber-300 font-medium">
                  Crispy Cone or Cup
                </span>
                <Button
                  onClick={() => handleItemOrder(MENU_ITEMS[1])}
                  size="sm"
                  className="rounded-full gap-1.5 px-5 font-bold bg-amber-500 hover:bg-amber-600 text-stone-950 shadow-xs"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Order Now</span>
                </Button>
              </div>
            </div>

            {/* Bento Tile 3: Authentic Sarawak Laksa (Foldable on mobile, always visible on desktop) */}
            <div
              className={cn(
                "lg:col-span-6 rounded-3xl bg-[#FAF6EE] border border-amber-900/15 p-6 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden",
                !isExpandedOnMobile && "hidden md:flex"
              )}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="emerald" className="text-xs px-3 py-1">
                    Hawker Heritage • Bourdain Favorite
                  </Badge>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-stone-900 bg-white px-3 py-1 rounded-xl border border-stone-200">
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
                  Anthony Bourdain&apos;s famous &ldquo;Breakfast of the Gods&rdquo;.
                  Fragrant herbal coconut broth with shredded chicken, fresh sea
                  prawns, and house sambal belacan with calamansi.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-200/80 flex items-center justify-between">
                <span className="text-xs text-stone-600 font-medium">
                  Served with Calamansi &amp; Belacan
                </span>
                <Button
                  onClick={() => handleItemOrder(MENU_ITEMS[4])}
                  size="sm"
                  className="rounded-full gap-1.5 px-5 font-bold bg-stone-900 hover:bg-stone-800 text-white shadow-xs"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Order Now</span>
                </Button>
              </div>
            </div>

            {/* Bento Tile 4: Royal Gula Apong Cendol (Foldable on mobile, always visible on desktop) */}
            <div
              className={cn(
                "lg:col-span-6 rounded-3xl bg-white border border-amber-900/15 p-6 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden",
                !isExpandedOnMobile && "hidden md:flex"
              )}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="ruby" className="text-xs px-3 py-1">
                    Waterfront Classic
                  </Badge>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-xl border border-amber-200">
                    RM 7.90
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    Royal Gula Apong Cendol
                  </h3>
                  <p className="text-xs italic text-stone-700 font-serif mt-0.5">
                    Cendol Warisan Gula Apong
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  Silky handmade pandan rice jelly strands layered over finely crushed
                  snow, freshly squeezed coconut santan, kidney red beans, and deep
                  Gula Apong nectar.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-600 font-medium">
                  Fresh Lundu Coconut Santan
                </span>
                <Button
                  onClick={() => handleItemOrder(MENU_ITEMS[2])}
                  size="sm"
                  className="rounded-full gap-1.5 px-5 font-bold bg-amber-700 hover:bg-amber-800 text-white shadow-xs"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Order Now</span>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile Expand Teaser Card (When Menu is Folded) */}
        {!isExpandedOnMobile && (
          <div className="md:hidden mt-6">
            <div className="p-5 rounded-3xl bg-amber-50/80 border border-amber-300/80 text-center space-y-3 shadow-sm">
              <p className="text-xs text-stone-700 font-medium leading-relaxed">
                Explore our full menu of <strong>Gula Apong Ais Kacang, Soft-Serve, Cendol, Sarawak Laksa, and Artisanal Kopitiam Drinks</strong>.
              </p>
              <Button
                onClick={() => setIsExpandedOnMobile(true)}
                className="w-full rounded-full font-bold bg-amber-700 hover:bg-amber-800 text-white shadow-md justify-center gap-2 py-3"
              >
                <span>Unfold Full Artisanal Menu ({MENU_ITEMS.length} Offerings)</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Category Filters Bar (Foldable on mobile, always visible on desktop) */}
        <div className={cn(!isExpandedOnMobile && "hidden md:block")}>
          <ScrollReveal duration={1000} distance={32} delay={100}>
            <div className="mt-12 sm:mt-16 flex items-center justify-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all whitespace-nowrap",
                      isActive
                        ? "bg-amber-700 text-white shadow-md shadow-amber-900/20"
                        : "bg-white text-stone-700 hover:bg-amber-50 border border-stone-200 hover:border-amber-300"
                    )}
                  >
                    {getCategoryIcon(category.id)}
                    <span>{category.label}</span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Full Directory Grid */}
          <ScrollReveal duration={1000} distance={32} delay={120}>
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-white border border-stone-200/80 hover:border-amber-500/50 hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      {item.badge ? (
                        <Badge variant="signature" className="text-[10px] px-2 py-0.5">
                          {item.badge}
                        </Badge>
                      ) : (
                        <span className="text-[10px] uppercase tracking-wider text-stone-600 font-bold">
                          {item.category}
                        </span>
                      )}
                      <span className="font-serif font-bold text-amber-700 text-base">
                        {item.price}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-serif font-bold text-lg text-stone-900 group-hover:text-amber-700 transition-colors">
                        {item.name}
                      </h4>
                      {item.malayName && (
                        <p className="text-[11px] italic text-stone-700 font-serif">
                          {item.malayName}
                        </p>
                      )}
                    </div>

                    <p className="text-xs text-stone-700 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[10px] text-stone-600">
                      {item.ingredients.slice(0, 2).join(", ")}
                    </span>
                    <button
                      onClick={() => handleItemOrder(item)}
                      className="p-1.5 rounded-full bg-amber-50 text-amber-800 hover:bg-amber-700 hover:text-white transition-colors"
                      aria-label={`Order ${item.name}`}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Mobile Collapse Button (Shown when expanded on mobile) */}
          <div className="md:hidden mt-8 text-center">
            <Button
              variant="outline"
              onClick={handleCollapseMenu}
              className="rounded-full px-7 font-bold border-amber-800/30 text-stone-800 bg-white shadow-xs justify-center gap-2"
            >
              <ChevronUp className="h-4 w-4 text-amber-700" />
              <span>Fold Menu (Show Less)</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
