"use client";

import * as React from "react";
import { CinematicHero } from "@/components/home/cinematic-hero";
import { CurateMangroveBowl } from "@/components/home/curate-mangrove-bowl";
import { MangroveJourneyTimeline } from "@/components/home/mangrove-journey-timeline";
import { BourdainsCorner } from "@/components/home/bourdains-corner";
import { SignatureMenu } from "@/components/home/signature-menu";
import { HeritageTeaser } from "@/components/home/heritage-teaser";
import { ReviewSlider } from "@/components/home/review-slider";
import { VisitBanner } from "@/components/home/visit-banner";
import { ScrollInteractiveBackground } from "@/components/home/scroll-interactive-background";
import { WhatsAppOrderDrawer, OrderItem } from "@/components/home/whatsapp-order-drawer";
import { MenuItem } from "@/data/menu-data";

export default function HomePage() {
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = React.useState(false);
  const [drawerInitialItems, setDrawerInitialItems] = React.useState<OrderItem[]>([]);

  const handleOpenCustomBowlInDrawer = (customBowlDescription: string, price: number) => {
    setDrawerInitialItems([
      {
        id: `custom-bowl-${Date.now()}`,
        name: customBowlDescription,
        price,
        quantity: 1,
      },
    ]);
    setIsOrderDrawerOpen(true);
  };

  const handleAddLaksaToDrawer = () => {
    setDrawerInitialItems([
      {
        id: "sarawak-laksa",
        name: "Authentic Sarawak Laksa (Breakfast of the Gods)",
        price: 11.5,
        quantity: 1,
      },
    ]);
    setIsOrderDrawerOpen(true);
  };

  const handleAddMenuItemToDrawer = (item: MenuItem) => {
    const priceNum = parseFloat(item.price.replace("RM ", "")) || 8.5;
    setDrawerInitialItems([
      {
        id: item.id,
        name: item.name,
        price: priceNum,
        quantity: 1,
      },
    ]);
    setIsOrderDrawerOpen(true);
  };

  return (
    <div className="relative bg-nipah-weave">
      {/* Dynamic Scroll-Interactive Parallax Background */}
      <ScrollInteractiveBackground />

      {/* Main Page Content Layers */}
      <div className="relative z-10">
        {/* 1. Rich Cinemagraph Hero: Thick Gula Apong Syrup Drizzle & Ambient Mist */}
        <CinematicHero onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)} />

        {/* 2. Interactive Shaved Ice Builder: "Curate Your Mangrove Bowl" */}
        <CurateMangroveBowl onOpenOrderDrawer={handleOpenCustomBowlInDrawer} />

        {/* 3. "From Nipah Mangrove to Waterfront Bowl" Interactive Horizontal Timeline */}
        <MangroveJourneyTimeline />

        {/* 4. "Bourdain's Corner": Vintage Kopitiam Sarawak Laksa Spotlight */}
        <BourdainsCorner onAddLaksaToOrder={handleAddLaksaToDrawer} />

        {/* 5. Artisanal Heritage Menu Bento Showcase */}
        <SignatureMenu onSelectItemForOrder={handleAddMenuItemToDrawer} />

        {/* 6. Jalan Gambier Heritage Legacy & Craft Principles */}
        <HeritageTeaser />

        {/* 7. Google Reviews & Community Praise */}
        <ReviewSlider />

        {/* 8. Waterfront Visit Landmark & Opening Hours Banner */}
        <VisitBanner />
      </div>

      {/* WhatsApp Quick-Order Drawer with Preset Order Builder */}
      <WhatsAppOrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        initialItems={drawerInitialItems}
      />
    </div>
  );
}
