import * as React from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, Compass, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
          Reach Out Directly
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
          Visit Us at Kuching Waterfront
        </h2>
        <p className="text-stone-700 text-sm sm:text-base mt-2 leading-relaxed">
          Conveniently located along historic Jalan Gambier, right across from
          the scenic Sarawak River promenade.
        </p>
      </div>

      {/* Main Info Blocks */}
      <div className="space-y-4">
        {/* Address */}
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
              Outlet Address
            </h4>
            <p className="text-sm font-semibold text-stone-900 leading-snug">
              IG Ais Kacang Gambier (Kopitiam)
            </p>
            <address className="not-italic text-xs text-stone-700 leading-relaxed">
              7, Jalan Gambier, Waterfront, 93000 Kuching, Sarawak, Malaysia
            </address>
          </div>
        </div>

        {/* WhatsApp & Phone */}
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
            <Phone className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
              Direct Phone & WhatsApp
            </h4>
            <p className="text-sm font-semibold text-stone-900">
              <a
                href="tel:+60168859657"
                className="hover:text-amber-700 transition-colors"
              >
                +60 16-885 9657
              </a>
            </p>
            <p className="text-xs text-stone-700">
              Available daily for takeout orders, event catering, & inquiries.
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
            <Mail className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
              Email Correspondence
            </h4>
            <p className="text-sm font-semibold text-stone-900">
              <a
                href="mailto:iggulaapong@gmail.com"
                className="hover:text-amber-700 transition-colors"
              >
                iggulaapong@gmail.com
              </a>
            </p>
            <p className="text-xs text-stone-700">
              For corporate partnerships, bulk Gula Apong, and press.
            </p>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-800">
            <Clock className="h-5 w-5" />
          </div>
          <div className="space-y-1 w-full">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
              Operating Hours
            </h4>
            <div className="text-xs text-stone-700 space-y-1 pt-1">
              <div className="flex justify-between">
                <span>Mon – Thu:</span>
                <span className="font-semibold text-stone-900">10:00 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Fri – Sat:</span>
                <span className="font-semibold text-stone-900">10:00 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday & Holidays:</span>
                <span className="font-semibold text-stone-900">10:00 AM – 10:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instant WhatsApp Quick Button */}
      <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-amber-50 border border-emerald-200 space-y-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-emerald-700" />
          <h4 className="text-sm font-bold text-stone-900">
            Chat on WhatsApp Directly
          </h4>
        </div>
        <p className="text-xs text-stone-700 leading-relaxed">
          Need a quick answer or want to place an advance pickup order? Tap below
          to message our counter staff directly.
        </p>
        <a
          href="https://wa.me/60168859657?text=Hello%20IG%20Ais%20Kacang%20Gambier!"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button variant="emerald" size="sm" className="w-full justify-center">
            Open WhatsApp (+60 16-885 9657)
          </Button>
        </a>
      </div>
    </div>
  );
}
