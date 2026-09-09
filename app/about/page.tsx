import type { Metadata } from "next";
import { StoryHero } from "@/components/about/story-hero";
import { CraftPillars } from "@/components/about/craft-pillars";
import { HeritageTimeline } from "@/components/about/heritage-timeline";
import { VisitBanner } from "@/components/home/visit-banner";

export const metadata: Metadata = {
  title: "About Our Heritage & Craft",
  description:
    "Learn how IG Ais Kacang Gambier preserves Borneo's native nipa palm Gula Apong traditions and crafts exceptional shaved ice and Kopitiam classics along the Kuching Waterfront.",
};

export default function AboutPage() {
  return (
    <>
      <StoryHero />
      <CraftPillars />
      <HeritageTimeline />
      <VisitBanner />
    </>
  );
}
