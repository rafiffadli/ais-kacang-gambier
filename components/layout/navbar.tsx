"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall, Sparkles, MapPin } from "lucide-react";
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

  // Close mobile drawer on route change
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
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "glass-nav shadow-md py-2.5"
            : "bg-[#FFFDF9]/95 border-b border-amber-900/10 py-3.5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.01]"
              aria-label="IG Ais Kacang Gambier Home"
            >
              <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white shadow-md shadow-amber-900/20 group-hover:shadow-amber-600/30 transition-shadow">
                <span className="font-serif font-black text-lg tracking-wider">IG</span>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-stone-900 leading-tight">
                  IG Ais Kacang <span className="text-amber-700">Gambier</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-widest text-stone-700 flex items-center gap-1">
                  <MapPin className="h-2.5 w-2.5 text-amber-700" />
                  Kuching Waterfront • Est. 2019
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-semibold tracking-wide rounded-lg transition-all duration-200",
                      isActive
                        ? "text-amber-900 bg-amber-100/60 font-bold"
                        : "text-stone-700 hover:text-amber-800 hover:bg-stone-100/60"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop WhatsApp CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://wa.me/60168859657?text=Hello%20IG%20Ais%20Kacang%20Gambier,%20I%20would%20like%20to%20inquire%20about%20your%20desserts%20and%20visiting!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  className="gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium shadow-sm hover:shadow"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  <span>WhatsApp Inquiries</span>
                </Button>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                className="inline-flex items-center justify-center p-2 rounded-xl text-stone-700 hover:text-amber-800 hover:bg-amber-100/50 transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-stone-900/40 backdrop-blur-xs md:hidden animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer Content */}
      <div
        className={cn(
          "fixed top-[65px] inset-x-0 z-30 bg-[#FFFDF9] border-b border-amber-900/15 shadow-xl transition-all duration-300 md:hidden",
          isOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-4 opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="px-5 pt-4 pb-6 space-y-3">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors",
                    isActive
                      ? "bg-amber-100 text-amber-900 font-bold"
                      : "text-stone-700 hover:bg-amber-50 hover:text-stone-900"
                  )}
                >
                  <span>{link.name}</span>
                  {isActive && <Sparkles className="h-4 w-4 text-amber-700" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-stone-200">
            <a
              href="https://wa.me/60168859657?text=Hello%20IG%20Ais%20Kacang%20Gambier!"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full justify-center gap-2">
                <PhoneCall className="h-4 w-4" />
                <span>WhatsApp Order & Inquiries</span>
              </Button>
            </a>
            <div className="mt-3 text-center">
              <p className="text-xs text-stone-700">
                7, Jalan Gambier, Kuching Waterfront, Sarawak
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
