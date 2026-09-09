import { AutoHeroSlider } from "@/components/home/auto-hero-slider";
import { HeroBanner } from "@/components/home/hero-banner";
import { SignatureMenu } from "@/components/home/signature-menu";
import { HeritageTeaser } from "@/components/home/heritage-teaser";
import { ReviewSlider } from "@/components/home/review-slider";
import { VisitBanner } from "@/components/home/visit-banner";
import { ScrollInteractiveBackground } from "@/components/home/scroll-interactive-background";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Dynamic Scroll-Interactive Parallax Pictures & Particles */}
      <ScrollInteractiveBackground />

      {/* Main Page Content */}
      <div className="relative z-10">
        {/* Auto-sliding hero banner at start of page (immediate visibility) */}
        <AutoHeroSlider />

        {/* Curated Editorial & Taste Profile Bento */}
        <ScrollReveal duration={1100} distance={32} rootMargin="0px 0px 100px 0px">
          <HeroBanner />
        </ScrollReveal>

        {/* Artisanal Heritage Menu */}
        <ScrollReveal duration={1100} distance={32} rootMargin="0px 0px 100px 0px">
          <SignatureMenu />
        </ScrollReveal>

        {/* Heritage Craftsmanship Story Teaser */}
        <ScrollReveal duration={1100} distance={32} rootMargin="0px 0px 100px 0px">
          <HeritageTeaser />
        </ScrollReveal>

        {/* Google Reviews & Community Praise */}
        <ScrollReveal duration={1100} distance={32} rootMargin="0px 0px 100px 0px">
          <ReviewSlider />
        </ScrollReveal>

        {/* Waterfront Visit Landmark Banner */}
        <ScrollReveal duration={1100} distance={32} rootMargin="0px 0px 100px 0px">
          <VisitBanner />
        </ScrollReveal>
      </div>
    </div>
  );
}
