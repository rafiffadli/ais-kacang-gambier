"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall, Sparkles, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Floating Island Container (Mamee-style floating pill) */}
      <header
        className={cn(
          "fixed inset-x-0 z-50 flex justify-center px-3 sm:px-6 lg:px-8 transition-all duration-300 pointer-events-none",
          isScrolled ? "top-2 sm:top-3" : "top-3 sm:top-5"
        )}
      >
        <div
          className={cn(
            "pointer-events-auto w-full max-w-6xl rounded-full transition-all duration-300 border flex items-center justify-between",
            isScrolled
              ? "bg-white/95 backdrop-blur-xl shadow-xl shadow-stone-900/10 border-amber-900/15 py-2 px-4 sm:px-6"
              : "bg-[#FFFDF9]/90 backdrop-blur-lg shadow-lg shadow-stone-900/5 border-amber-900/10 py-2.5 sm:py-3 px-4 sm:px-7"
          )}
        >
          {/* Brand Logo & Landmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group transition-transform duration-200 hover:scale-[1.01]"
            aria-label="IG Ais Kacang Gambier Home"
          >
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white shadow-md shadow-amber-900/20 group-hover:shadow-amber-600/30 transition-shadow shrink-0">
              <span className="font-serif font-black text-sm sm:text-base tracking-wider">IG</span>
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm sm:text-base lg:text-lg font-bold tracking-tight text-stone-900 leading-tight">
                IG Ais Kacang <span className="text-amber-700">Gambier</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-stone-700 flex items-center gap-1">
                <MapPin className="h-2.5 w-2.5 text-amber-700 shrink-0" />
                Kuching Waterfront
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Floating Pill Tabs) */}
          <nav className="hidden md:flex items-center gap-1 bg-stone-100/70 p-1 rounded-full border border-stone-200/70">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-1.5 text-xs lg:text-sm font-semibold tracking-wide rounded-full transition-all duration-200",
                    isActive
                      ? "bg-amber-600 text-white shadow-xs font-bold"
                      : "text-stone-700 hover:text-amber-900 hover:bg-white/80"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop WhatsApp CTA Button */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://wa.me/60168859657?text=Hello%20IG%20Ais%20Kacang%20Gambier,%20I%20would%20like%20to%20inquire%20about%20your%20desserts%20and%20visiting!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="rounded-full px-4 sm:px-5 gap-1.5 text-xs font-bold bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-md shadow-amber-900/15"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                <span>WhatsApp</span>
                <ArrowUpRight className="h-3 w-3 opacity-70" />
              </Button>
            </a>
          </div>

          {/* Mobile Actions: WhatsApp Quick Link + Hamburger */}
          <div className="flex md:hidden items-center gap-1.5">
            <a
              href="https://wa.me/60168859657"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Us"
              className="p-2 rounded-full bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors"
            >
              <PhoneCall className="h-4 w-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="p-2 rounded-full text-stone-700 hover:text-amber-900 hover:bg-stone-100 transition-colors"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-stone-950/30 backdrop-blur-xs md:hidden animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={cn(
          "fixed top-18 sm:top-22 inset-x-4 sm:inset-x-6 z-40 max-w-lg mx-auto md:hidden rounded-3xl bg-white/95 backdrop-blur-2xl border border-amber-900/15 p-5 shadow-2xl transition-all duration-300",
          isOpen
            ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
            : "-translate-y-4 opacity-0 scale-95 pointer-events-none"
        )}
      >
        <div className="space-y-4">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all",
                    isActive
                      ? "bg-amber-100/90 text-amber-950 shadow-xs"
                      : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                  )}
                >
                  <span>{link.name}</span>
                  {isActive && <Sparkles className="h-4 w-4 text-amber-700" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-stone-200/80 space-y-2.5">
            <a
              href="https://wa.me/60168859657?text=Hello%20IG%20Ais%20Kacang%20Gambier!"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full rounded-full justify-center gap-2 py-3 text-sm font-bold shadow-md">
                <PhoneCall className="h-4 w-4" />
                <span>WhatsApp Order & Inquiries</span>
              </Button>
            </a>
            <div className="text-center pt-1">
              <p className="text-[11px] text-stone-700 font-medium">
                📍 7, Jalan Gambier, Kuching Waterfront, Sarawak
              </p>
              <p className="text-[10px] text-stone-700 mt-0.5">
                Open Daily: 10:00 AM – 10:30 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
