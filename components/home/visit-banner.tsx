import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, PhoneCall, Clock, Navigation, Sparkles, ArrowRight } from "lucide-react";

export function VisitBanner() {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white py-20 lg:py-28 border-b border-amber-900/30">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-600/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-96 h-96 rounded-full bg-rose-600/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-br from-stone-900/90 via-stone-900 to-amber-950/40 p-8 sm:p-14 lg:p-16 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span>Visit Us at Kuching Waterfront</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Planning a Sunset Stroll along the Sarawak River?
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Cool down with our signature Gula Apong Ais Kacang or enjoy
                warm Sarawak Laksa right before the Darul Hana Musical Fountain
                display. Walk-ins are always warmly welcomed!
              </p>

              {/* Waterfront Dusk Timeline */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wide block">
                    6:30 PM • Sunset
                  </span>
                  <p className="text-xs text-stone-300">
                    River breeze cools down Jalan Gambier quayside.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wide block">
                    7:30 PM • Dinner
                  </span>
                  <p className="text-xs text-stone-300">
                    Freshly served Gula Apong shaved ice &amp; Laksa.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wide block">
                    8:30 PM • Musical Show
                  </span>
                  <p className="text-xs text-stone-300">
                    Darul Hana Musical Fountain begins nightly.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-5 text-xs text-stone-300 pt-1">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-amber-400 shrink-0" />
                  Open Daily: 10:00 AM – 10:30 PM
                </span>
                <span className="flex items-center gap-1.5">
                  <Navigation className="h-4 w-4 text-amber-400 shrink-0" />
                  7, Jalan Gambier, Waterfront Kuching
                </span>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-5 flex flex-col justify-center p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                  Quick Inquiries &amp; Takeaway
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  Reserve a Table or Order Ahead
                </h3>
              </div>

              <a
                href="https://wa.me/60168859657?text=Hi%20IG%20Ais%20Kacang%20Gambier,%20I'm%20planning%20to%20visit%20today!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  size="lg"
                  className="w-full rounded-full justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 shadow-lg shadow-amber-950/40"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>WhatsApp Inquiries &amp; Orders</span>
                </Button>
              </a>

              <Link href="/contact" className="w-full">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-full justify-center text-stone-200 border-stone-700 hover:bg-stone-800 hover:text-white"
                >
                  <span>Directions &amp; Contact Details</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
