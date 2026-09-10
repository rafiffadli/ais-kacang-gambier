"use client";

import * as React from "react";
import Image from "next/image";
import {
  Sparkles,
  Quote,
  Flame,
  Award,
  Volume2,
  VolumeX,
  ArrowRight,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { soundscape } from "@/lib/audio/soundscape";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface BourdainsCornerProps {
  onAddLaksaToOrder?: () => void;
}

export function BourdainsCorner({ onAddLaksaToOrder }: BourdainsCornerProps) {
  const [isPlayingAudio, setIsPlayingAudio] = React.useState(false);

  const toggleAudioTribute = () => {
    soundscape.playVintageClick();
    setIsPlayingAudio(!isPlayingAudio);
  };

  const handleOrderLaksa = () => {
    if (onAddLaksaToOrder) {
      onAddLaksaToOrder();
    } else {
      const msg = encodeURIComponent(
        "Hello IG Ais Kacang Gambier! I would like to order your Authentic Sarawak Laksa ('Breakfast of the Gods') for pickup at 7 Jalan Gambier."
      );
      window.open(`https://wa.me/60168859657?text=${msg}`, "_blank");
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF6EE] text-stone-900 relative overflow-hidden border-b border-amber-900/15">
      {/* Subtle Vintage Peranakan Tile Top Border */}
      <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-amber-700 via-rose-800 to-amber-700 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal duration={1000} distance={32}>
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#FFFDF9] border-2 border-amber-800/20 p-6 sm:p-10 lg:p-14 shadow-xl relative overflow-hidden">
            {/* Vintage Postmark Stamp Badge */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-dashed border-amber-800/40 text-amber-900/70 rotate-12 pointer-events-none select-none">
              <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-widest font-black">
                KUCHING POST
              </span>
              <span className="font-serif font-black text-xs sm:text-sm my-0.5 text-rose-900">
                SARAWAK
              </span>
              <span className="text-[8px] font-mono">EST. 2019</span>
            </div>

            {/* Header / Tribute Badge */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-950 text-xs font-bold shadow-xs">
                <Award className="h-3.5 w-3.5 text-rose-700" />
                <span>Bourdain&apos;s Corner • Culinary Heritage Tribute</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-950 leading-tight">
                &ldquo;Breakfast of the Gods.&rdquo;
              </h2>
              <p className="font-serif italic text-amber-800 text-base sm:text-lg">
                Anthony Bourdain on Sarawak Laksa — Kuching, Borneo
              </p>
            </div>

            {/* Grid Layout: Visual with Broth Steam + Handwritten Tasting Notes */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Atmospheric Laksa Image with Rising Broth Steam */}
              <div className="lg:col-span-6 relative flex flex-col items-center">
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden border-2 border-amber-900/20 shadow-lg group">
                  <Image
                    src="/images/sarawak-laksa.jpg"
                    alt="Authentic Sarawak Laksa with fresh sea prawns and spicy sambal belacan"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />

                  {/* Rising Broth Steam Simulation */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute bottom-10 left-1/4 w-12 h-28 bg-white/20 blur-xl rounded-full animate-[pulse_2.5s_ease-in-out_infinite] -rotate-6" />
                    <div className="absolute bottom-12 right-1/3 w-16 h-32 bg-white/15 blur-xl rounded-full animate-[pulse_3.2s_ease-in-out_infinite] rotate-12" />
                  </div>

                  {/* Caption Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="font-serif text-sm sm:text-base font-bold">
                      Authentic Sarawak Laksa Gambier
                    </p>
                    <p className="text-[11px] text-amber-200">
                      Fresh Sea Prawns • Free-Range Chicken • Calamansi Lime
                    </p>
                  </div>
                </div>

                {/* Audio Quote Playback Widget */}
                <div className="w-full mt-4 flex items-center justify-between p-3 rounded-xl bg-amber-50/80 border border-amber-200">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleAudioTribute}
                      className="p-2 rounded-full bg-amber-700 hover:bg-amber-800 text-white transition-colors"
                      aria-label="Play Bourdain tribute snippet"
                    >
                      {isPlayingAudio ? (
                        <Volume2 className="h-4 w-4 animate-pulse" />
                      ) : (
                        <VolumeX className="h-4 w-4" />
                      )}
                    </button>
                    <div className="text-left">
                      <p className="text-xs font-bold text-stone-900">
                        {isPlayingAudio ? "Playing Tasting Quote..." : "Listen to Bourdain's Tribute"}
                      </p>
                      <p className="text-[10px] text-stone-600">
                        Vintage vinyl grain &amp; kopitiam ambiance
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-xs font-bold text-amber-900">
                    RM 11.50
                  </span>
                </div>
              </div>

              {/* Right Column: Handwritten Tasting Journal */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-5 rounded-2xl bg-amber-50/60 border border-dashed border-amber-700/30 space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-800 font-bold block">
                    Hawker Journal Tasting Notes:
                  </span>

                  <div className="space-y-2.5 text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
                    <p className="flex items-start gap-2">
                      <span className="text-amber-700 font-bold shrink-0">✦</span>
                      <span>
                        <strong>The Broth:</strong> Over 30 ground aromatics—coriander seed, galangal, lemongrass, dried shallots—simmered in rich prawn essence and silky fresh santan.
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-amber-700 font-bold shrink-0">✦</span>
                      <span>
                        <strong>The Contrast:</strong> Tender sea prawns and shredded chicken ribbons perched atop springy rice vermicelli.
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-amber-700 font-bold shrink-0">✦</span>
                      <span>
                        <strong>The Ritual:</strong> Squeeze fresh calamansi into the fiery house-pounded sambal belacan, stirring it into the broth until it turns deep sunset orange.
                      </span>
                    </p>
                  </div>
                </div>

                <p className="text-xs text-stone-600 italic">
                  &ldquo;It’s got this incredible balance of spicy, sour, coconut milk, and mysterious herbal complexity that haunts you long after you leave Borneo.&rdquo;
                </p>

                {/* Quick Action Button */}
                <div className="pt-2">
                  <Button
                    onClick={handleOrderLaksa}
                    size="lg"
                    className="w-full rounded-full font-bold bg-amber-800 hover:bg-amber-900 text-white shadow-md shadow-amber-950/20 justify-center gap-2"
                  >
                    <span>Order Sarawak Laksa via WhatsApp</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
