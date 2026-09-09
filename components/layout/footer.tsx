import * as React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-amber-900/30">
      {/* Top Banner with Guarantees */}
      <div className="border-b border-stone-800 bg-stone-950/60 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-stone-100 uppercase tracking-wider">
                  100% Pure Sarawak Gula Apong
                </p>
                <p className="text-xs text-stone-400">
                  Ethically harvested nipa palm sugar from coastal Borneo
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-stone-100 uppercase tracking-wider">
                  Artisanal Heritage Recipe
                </p>
                <p className="text-xs text-stone-400">
                  Fluffy shaved ice & slow-cooked traditional toppings
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-stone-100 uppercase tracking-wider">
                  Jalan Gambier Landmark
                </p>
                <p className="text-xs text-stone-400">
                  Scenic waterfront view facing the Sarawak River
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-white font-serif font-black text-base shadow-md">
                IG
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white block">
                  IG Ais Kacang Gambier
                </span>
                <span className="text-xs text-amber-400 font-medium tracking-wide">
                  Borneo Dessert & Kopitiam Warisan
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Nestled along the historic Jalan Gambier at the Kuching Waterfront,
              IG Ais Kacang Gambier celebrates Sarawakian heritage through our
              signature Gula Apong shaved ice, artisan soft-serve, and authentic
              local Kopitiam specialties.
            </p>
            <div className="pt-1 flex items-center gap-3">
              <a
                href="https://www.instagram.com/iggulaapong"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:bg-stone-700 transition-colors"
                aria-label="Instagram"
              >
                <span className="text-xs font-bold">IG</span>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:bg-stone-700 transition-colors"
                aria-label="Facebook"
              >
                <span className="text-xs font-bold">FB</span>
              </a>
              <a
                href="https://www.tiktok.com/@igaiskrim_officia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:bg-stone-700 transition-colors"
                aria-label="TikTok"
              >
                <span className="text-xs font-bold">TT</span>
              </a>
              <a
                href="https://www.igicecream.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 h-8 rounded-lg bg-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:bg-stone-700 transition-colors text-xs font-medium"
              >
                Official Site
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-amber-400 uppercase">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-400 transition-colors inline-block"
                >
                  Home & Highlights
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-amber-400 transition-colors inline-block"
                >
                  Our Heritage & Craft
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-400 transition-colors inline-block"
                >
                  Contact & Group Visits
                </Link>
              </li>
              <li>
                <a
                  href="/#menu"
                  className="hover:text-amber-400 transition-colors inline-block"
                >
                  Signature Ais Kacang & Menu
                </a>
              </li>
              <li>
                <a
                  href="/#reviews"
                  className="hover:text-amber-400 transition-colors inline-block"
                >
                  Google Customer Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Operating Hours */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-amber-400 uppercase flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              Opening Hours
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-stone-300">
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span className="text-stone-400">Monday – Thursday:</span>
                <span className="font-medium text-white">10:00 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span className="text-stone-400">Friday – Saturday:</span>
                <span className="font-medium text-white">10:00 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span className="text-stone-400">Sunday & Public Hol.:</span>
                <span className="font-medium text-white">10:00 AM – 10:30 PM</span>
              </div>
              <p className="text-[11px] text-amber-300/80 pt-1">
                * Musical Fountain display at Kuching Waterfront begins nightly at 8:30 PM.
              </p>
            </div>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-amber-400 uppercase">
              Visit Us
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed text-stone-300">
                  7, Jalan Gambier, Waterfront,
                  <br />
                  93000 Kuching, Sarawak, Malaysia
                </address>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-400 shrink-0" />
                <a
                  href="tel:+60168859657"
                  className="hover:text-amber-400 transition-colors"
                >
                  +60 16-885 9657
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-400 shrink-0" />
                <a
                  href="mailto:iggulaapong@gmail.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  iggulaapong@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Jalan+Gambier+Kuching+Sarawak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4"
                >
                  Get Directions via Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {currentYear} IG Ais Kacang Gambier (IG Ice Cream Sdn Bhd). All
            rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Inspired by Sarawakian culinary heritage & modern boutique craft.
          </p>
        </div>
      </div>
    </footer>
  );
}
