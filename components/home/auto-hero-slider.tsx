"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
  PhoneCall,
  Pause,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SlideData {
  id: string;
  image: string;
  alt: string;
  badge: string;
  eyebrow: string;
  title: string;
  description: string;
  tag: string;
  primaryCta: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
  secondaryCta: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
}

const SLIDES: SlideData[] = [
  {
    id: "ais-kacang",
    image: "/images/banner/ais-kacang.jpg",
    alt: "Signature Gula Apong Ais Kacang served by Kuching Waterfront",
    badge: "Waterfront Signature",
    eyebrow: "Borneo's Premier Shaved Ice Tradition",
    title: "Signature Gula Apong Ais Kacang",
    description:
      "Feather-light shaved snow drenched in pure Sarawak nipa palm syrup, slow-simmered red beans, sweet corn, and freshly toasted peanuts.",
    tag: "Est. 2019 • Jalan Gambier Kuching",
    primaryCta: {
      label: "Discover Our Flavours",
      href: "#menu",
    },
    secondaryCta: {
      label: "Find Location & Hours",
      href: "/contact",
    },
  },
  {
    id: "soft-serve",
    image: "/images/banner/soft-serve.jpg",
    alt: "Artisanal Gula Apong Soft Serve cone with Kuching Darul Hana Bridge backdrop",
    badge: "Artisanal Dessert",
    eyebrow: "Handcrafted Fresh Daily",
    title: "Original Gula Apong Soft Serve",
    description:
      "Velvety dairy cream gently folded with caramelized Borneo nipa palm molasses, topped with toasted peanuts and crushed Biscoff crumbs.",
    tag: "100% Pure Palm Molasses • Daily Churned",
    primaryCta: {
      label: "Explore Soft-Serve Menu",
      href: "#menu",
    },
    secondaryCta: {
      label: "WhatsApp Order",
      href: "https://wa.me/60168859657?text=Hello%20IG%20Ais%20Kacang%20Gambier,%20I%20would%20like%20to%20order%20the%20Gula%20Apong%20Soft%20Serve!",
      isExternal: true,
    },
  },
  {
    id: "kopitiam",
    image: "/images/banner/kopitiam.jpg",
    alt: "Traditional Sarawak Kopitiam feast with Sarawak Laksa and Teh C Peng",
    badge: "Sarawak Heritage",
    eyebrow: "Breakfast of the Gods",
    title: "Authentic Kopitiam Classics & Laksa",
    description:
      "Aromatic herbal broth with sweet sea prawns, crispy charcoal toast with homemade kaya butter, paired with three-layer iced Teh C Peng Special.",
    tag: "Time-Honored Secret Herbal Broth",
    primaryCta: {
      label: "View Kopitiam Menu",
      href: "#menu",
    },
    secondaryCta: {
      label: "Read Our Story",
      href: "/about",
    },
  },
  {
    id: "waterfront",
    image: "/images/banner/waterfront.jpg",
    alt: "Kuching Waterfront Darul Hana Bridge illuminated at sunset along Jalan Gambier",
    badge: "Riverside Sanctuary",
    eyebrow: "Kuching Waterfront Landmark",
    title: "Golden Hour Along Sarawak River",
    description:
      "The sweetest spot to unwind right opposite the Darul Hana Bridge and Musical Fountain. Savor ice-cold treats as the twilight breeze rolls in.",
    tag: "Open Daily 10:00 AM – 10:30 PM",
    primaryCta: {
      label: "Plan Your Visit",
      href: "/contact",
    },
    secondaryCta: {
      label: "WhatsApp Quick Chat",
      href: "https://wa.me/60168859657?text=Hi%20IG%20Ais%20Kacang%20Gambier,%20what%20are%20today's%20specials?",
      isExternal: true,
    },
  },
];

// Medium speed auto-slide duration: 5000ms (5 seconds)
const SLIDE_DURATION = 5000;

export function AutoHeroSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const touchStartX = React.useRef<number | null>(null);

  const currentSlide = SLIDES[currentIndex];

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const handlePrev = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const handleGoTo = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-slide interval timer (reliable medium speed, cycles every 5s)
  React.useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [isPaused, handleNext, currentIndex]);

  // Touch handlers for mobile swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const threshold = 40;
    if (diffX > threshold) {
      handleNext();
    } else if (diffX < -threshold) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="relative pt-24 sm:pt-28 lg:pt-32 pb-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none"
      aria-label="Hero Highlights Slider"
    >
      <style>{`
        @keyframes progressAnimation {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>

      {/* Slider Frame */}
      <div
        className="relative h-[560px] sm:h-[620px] lg:h-[680px] w-full rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl border border-amber-900/15 bg-stone-950"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slide Images with cross-fade & smooth scale effect */}
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              )}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={idx === 0}
                className={cn(
                  "object-cover object-center transition-transform duration-7000 ease-out",
                  isActive ? "scale-105" : "scale-100"
                )}
                sizes="(max-width: 1280px) 100vw, 1280px"
              />

              {/* Multi-layered cinematic scrim overlays for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-transparent to-black/20 pointer-events-none" />
            </div>
          );
        })}

        {/* Dynamic Text Content Overlay */}
        <div className="relative z-20 h-full flex flex-col justify-end p-5 sm:p-10 lg:p-14 text-white pointer-events-none">
          <div
            key={currentSlide.id}
            className="max-w-3xl space-y-3.5 sm:space-y-5 animate-in fade-in slide-in-from-bottom-3 duration-500 pointer-events-auto"
          >
            {/* Top metadata badge */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <Badge
                variant="signature"
                className="font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs uppercase tracking-wider shadow-md"
              >
                <Sparkles className="h-3 w-3 mr-1 inline-block" />
                {currentSlide.badge}
              </Badge>

              <span className="text-[11px] sm:text-sm font-semibold tracking-wide text-amber-200/90 flex items-center gap-1.5 backdrop-blur-xs px-2.5 py-0.5 rounded-full bg-black/40 border border-white/10">
                <MapPin className="h-3 w-3 text-amber-400 shrink-0" />
                {currentSlide.tag}
              </span>
            </div>

            {/* Slide Title */}
            <div className="space-y-1 sm:space-y-2">
              <p className="text-[11px] sm:text-sm font-bold uppercase tracking-widest text-amber-300">
                {currentSlide.eyebrow}
              </p>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
                {currentSlide.title}
              </h2>
            </div>

            {/* Slide Description */}
            <p className="text-xs sm:text-base lg:text-lg text-stone-200 leading-relaxed max-w-2xl font-normal drop-shadow-xs line-clamp-3 sm:line-clamp-none">
              {currentSlide.description}
            </p>

            {/* Call to Action Buttons */}
            <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
              {currentSlide.primaryCta.isExternal ? (
                <a
                  href={currentSlide.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="rounded-full px-5 sm:px-7 py-2 sm:py-3 font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-xl shadow-amber-950/40 gap-1.5 sm:gap-2 cursor-pointer"
                  >
                    <span>{currentSlide.primaryCta.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Button>
                </a>
              ) : (
                <a href={currentSlide.primaryCta.href}>
                  <Button
                    className="rounded-full px-5 sm:px-7 py-2 sm:py-3 font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-xl shadow-amber-950/40 gap-1.5 sm:gap-2 cursor-pointer"
                  >
                    <span>{currentSlide.primaryCta.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Button>
                </a>
              )}

              {currentSlide.secondaryCta.isExternal ? (
                <a
                  href={currentSlide.secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="rounded-full px-4 sm:px-7 py-2 sm:py-3 font-bold text-xs sm:text-sm bg-white/15 hover:bg-white/25 text-white border-white/30 backdrop-blur-md gap-1.5 sm:gap-2 cursor-pointer"
                  >
                    <PhoneCall className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-400" />
                    <span>{currentSlide.secondaryCta.label}</span>
                  </Button>
                </a>
              ) : (
                <Link href={currentSlide.secondaryCta.href}>
                  <Button
                    variant="outline"
                    className="rounded-full px-4 sm:px-7 py-2 sm:py-3 font-bold text-xs sm:text-sm bg-white/15 hover:bg-white/25 text-white border-white/30 backdrop-blur-md gap-1.5 sm:gap-2 cursor-pointer"
                  >
                    <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-400" />
                    <span>{currentSlide.secondaryCta.label}</span>
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Bottom Bar: Slide indicators, progress bars, pause/play, controls */}
          <div className="mt-5 sm:mt-8 pt-3 sm:pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 sm:gap-4 pointer-events-auto">
            {/* Slide selector tabs / Progress Pills */}
            <div className="flex items-center gap-1.5 sm:gap-3 flex-wrap">
              {SLIDES.map((slide, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => handleGoTo(idx)}
                    aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                    className={cn(
                      "group relative h-2 sm:h-3 rounded-full transition-all duration-300 overflow-hidden cursor-pointer",
                      isActive
                        ? "w-12 sm:w-24 bg-white/30"
                        : "w-5 sm:w-8 bg-white/20 hover:bg-white/40"
                    )}
                  >
                    {/* Animated Progress fill for the active slide */}
                    {isActive && (
                      <span
                        key={`prog-${currentIndex}-${isPaused}`}
                        className="absolute inset-y-0 left-0 bg-amber-400 rounded-full h-full"
                        style={{
                          animation: isPaused
                            ? "none"
                            : `progressAnimation ${SLIDE_DURATION}ms linear forwards`,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Slide controls: Slide Counter, Pause/Play toggle, and Chevrons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Slide Counter */}
              <div className="text-[11px] sm:text-xs font-semibold text-amber-300 font-mono px-2 py-0.5 sm:py-1 rounded bg-black/50 border border-white/15">
                0{currentIndex + 1} / 0{SLIDES.length}
              </div>

              {/* Pause/Play toggle button */}
              <button
                onClick={() => setIsPaused((prev) => !prev)}
                aria-label={isPaused ? "Resume auto-slides" : "Pause auto-slides"}
                className="p-1.5 sm:p-2 rounded-full bg-white/15 hover:bg-white/30 text-white border border-white/20 backdrop-blur-md transition-colors cursor-pointer"
              >
                {isPaused ? (
                  <Play className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-400 fill-amber-400" />
                ) : (
                  <Pause className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-stone-200" />
                )}
              </button>

              {/* Prev / Next Chevrons */}
              <div className="flex items-center gap-1 sm:gap-1.5">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Slide"
                  className="p-1.5 sm:p-2 rounded-full bg-white/15 hover:bg-amber-600 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
                >
                  <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Slide"
                  className="p-1.5 sm:p-2 rounded-full bg-white/15 hover:bg-amber-600 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
                >
                  <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Prominent Floating Side Arrow Controls (Desktop / Tablet only) */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="hidden sm:flex absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-3.5 rounded-full bg-stone-900/60 hover:bg-amber-600 text-white border border-white/25 backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 items-center justify-center shadow-xl cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="hidden sm:flex absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-3.5 rounded-full bg-stone-900/60 hover:bg-amber-600 text-white border border-white/25 backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 items-center justify-center shadow-xl cursor-pointer"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
    </section>
  );
}
