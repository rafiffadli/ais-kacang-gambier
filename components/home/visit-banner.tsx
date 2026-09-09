import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, PhoneCall, Clock, Navigation } from "lucide-react";

export function VisitBanner() {
  return (
    <section className="relative overflow-hidden bg-stone-900 text-white py-16 lg:py-20 border-b border-amber-900/30">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-950/70 via-stone-900 to-amber-950/70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amber-500/30 bg-stone-950/70 p-8 sm:p-12 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                <MapPin className="h-3.5 w-3.5 text-amber-400" />
                <span>Visit Us at Kuching Waterfront</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
                Planning a Sunset Stroll along the Sarawak River?
              </h2>

              <p className="text-stone-300 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl">
                Cool down with our signature Gula Apong Ais Kacang or enjoy
                warm Sarawak Laksa right before the Darul Hana Musical Fountain
                display. Walk-ins are always warmly welcomed!
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-stone-300">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-amber-400" />
                  Open Daily: 10:00 AM – 10:30 PM
                </span>
                <span className="flex items-center gap-1.5">
                  <Navigation className="h-4 w-4 text-amber-400" />
                  7, Jalan Gambier, Waterfront Kuching
                </span>
              </div>
            </div>

            {/* Right Column: CTA Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
              <a
                href="https://wa.me/60168859657?text=Hi%20IG%20Ais%20Kacang%20Gambier,%20I'm%20planning%20to%20visit%20today!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  size="lg"
                  className="w-full justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>WhatsApp Inquiries & Orders</span>
                </Button>
              </a>

              <Link href="/contact" className="w-full">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-center text-stone-200 border-stone-700 hover:bg-stone-800 hover:text-white"
                >
                  <span>Directions & Contact Details</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
