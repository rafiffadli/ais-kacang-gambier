"use client";

import * as React from "react";
import { CinematicHero } from "@/components/home/cinematic-hero";
import { MangroveJourneyTimeline } from "@/components/home/mangrove-journey-timeline";
import { SignatureMenu } from "@/components/home/signature-menu";
import { HeritageTeaser } from "@/components/home/heritage-teaser";
import { ReviewSlider } from "@/components/home/review-slider";
import { VisitBanner } from "@/components/home/visit-banner";
import { ScrollInteractiveBackground } from "@/components/home/scroll-interactive-background";
import { useOrderDrawer } from "@/components/ui/order-drawer-provider";
import { MenuItem } from "@/data/menu-data";

export default function HomePage() {
  const { openOrderDrawer } = useOrderDrawer();

  const handleAddMenuItemToDrawer = (item: MenuItem) => {
    const priceNum = parseFloat(item.price.replace("RM ", "")) || 8.5;
    openOrderDrawer([
      {
        id: item.id,
        name: item.name,
        price: priceNum,
        quantity: 1,
      },
    ]);
  };

  return (
    <div className="relative bg-nipah-weave">
      {/* Dynamic Scroll-Interactive Parallax Background */}
      <ScrollInteractiveBackground />

      {/* Main Page Content Layers */}
      <div className="relative z-10">
        {/* 1. Rich Cinemagraph Hero: Thick Gula Apong Syrup Drizzle & Ambient Mist */}
        <CinematicHero onOpenOrderDrawer={() => openOrderDrawer()} />

        {/* 2. "From Nipah Mangrove to Waterfront Bowl" Interactive Horizontal Timeline */}
        <MangroveJourneyTimeline />

        {/* 3. Artisanal Heritage Menu Bento Showcase */}
        <SignatureMenu onSelectItemForOrder={handleAddMenuItemToDrawer} />

        {/* 5. Jalan Gambier Heritage Legacy & Craft Principles */}
        <HeritageTeaser />

        {/* 6. Google Reviews & Community Praise */}
        <ReviewSlider />

        {/* 7. Waterfront Visit Landmark & Opening Hours Banner */}
        <VisitBanner />
      </div>
    </div>
  );
}
