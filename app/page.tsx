import { HeroBanner } from "@/components/home/hero-banner";
import { SignatureMenu } from "@/components/home/signature-menu";
import { HeritageTeaser } from "@/components/home/heritage-teaser";
import { ReviewSlider } from "@/components/home/review-slider";
import { VisitBanner } from "@/components/home/visit-banner";
import { ScrollInteractiveBackground } from "@/components/home/scroll-interactive-background";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Dynamic Scroll-Interactive Parallax Pictures & Particles */}
      <ScrollInteractiveBackground />

      {/* Main Page Content */}
      <div className="relative z-10">
        <HeroBanner />
        <SignatureMenu />
        <HeritageTeaser />
        <ReviewSlider />
        <VisitBanner />
      </div>
    </div>
  );
}
