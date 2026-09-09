import { HeroBanner } from "@/components/home/hero-banner";
import { SignatureMenu } from "@/components/home/signature-menu";
import { HeritageTeaser } from "@/components/home/heritage-teaser";
import { ReviewSlider } from "@/components/home/review-slider";
import { VisitBanner } from "@/components/home/visit-banner";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <SignatureMenu />
      <HeritageTeaser />
      <ReviewSlider />
      <VisitBanner />
    </>
  );
}
