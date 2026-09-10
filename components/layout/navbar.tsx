"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall, Sparkles, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AmbientModeSwitcher } from "@/components/ui/ambient-mode-switcher";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenOrderDrawer?: () => void;
}

export function Navbar({ onOpenOrderDrawer }: NavbarProps) {
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
    { name: "Curate Bowl", href: "/#bowl-builder" },
    { name: "Artisan Menu", href: "/#menu" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      const isTargetPage = pathname === "/" || pathname === path || !path;
      if (isTargetPage) {
        e.preventDefault();
        setIsOpen(false);
        const element = document.getElementById(hash);
        if (element) {
          const navOffset = 85;
          const targetY = element.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({
            top: targetY,
            behavior: "smooth",
          });
          window.history.pushState(null, "", `#${hash}`);
        }
      }
    }
  };

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
            "pointer-events-auto w-full max-w-7xl rounded-full transition-all duration-300 border flex items-center justify-between",
            isScrolled
              ? "bg-white/95 dark:bg-stone-950/90 backdrop-blur-xl shadow-xl shadow-stone-900/10 border-amber-900/20 py-2 px-3 sm:px-5"
              : "bg-[#FFFDF9]/95 dark:bg-stone-950/85 backdrop-blur-lg shadow-lg shadow-stone-900/5 border-amber-900/15 py-2.5 sm:py-3 px-3 sm:px-6"
          )}
        >
          {/* Brand Logo & Landmark */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-2.5 group transition-transform duration-200 hover:scale-[1.01]"
            aria-label="IG Ais Kacang Gambier Home"
          >
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white shadow-md shadow-amber-900/20 group-hover:shadow-amber-600/30 transition-shadow shrink-0">
              <span className="font-serif font-black text-xs sm:text-sm tracking-wider">IG</span>
              <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xs sm:text-sm lg:text-base font-bold tracking-tight text-stone-900 dark:text-white leading-tight">
                IG Ais Kacang <span className="text-amber-700 dark:text-amber-400">Gambier</span>
              </span>
              <span className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400 flex items-center gap-0.5">
                <MapPin className="h-2 w-2 text-amber-700 shrink-0" />
                Kuching Waterfront
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-stone-100/80 dark:bg-stone-900/80 p-1 rounded-full border border-stone-200/70 dark:border-stone-800">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "px-3.5 py-1 text-xs font-semibold tracking-wide rounded-full transition-all duration-200",
                    isActive
                      ? "bg-amber-600 text-white shadow-xs font-bold"
                      : "text-stone-700 dark:text-stone-300 hover:text-amber-900 dark:hover:text-amber-400 hover:bg-white/80 dark:hover:bg-stone-800"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Sensory Controls & Order Action */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Sunset-to-Night Atmosphere Switcher */}
            <AmbientModeSwitcher />

            {/* WhatsApp Quick Order Action */}
            {onOpenOrderDrawer ? (
              <Button
                size="sm"
                onClick={onOpenOrderDrawer}
                className="rounded-full px-4 gap-1.5 text-xs font-bold bg-amber-700 hover:bg-amber-800 text-white shadow-md shadow-amber-900/20"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                <span>Order</span>
              </Button>
            ) : (
              <a
                href="https://wa.me/60168859657?text=Hello%20IG%20Ais%20Kacang%20Gambier!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  className="rounded-full px-4 gap-1.5 text-xs font-bold bg-amber-700 hover:bg-amber-800 text-white shadow-md shadow-amber-900/20"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  <span>Order</span>
                  <ArrowUpRight className="h-3 w-3 opacity-70" />
                </Button>
              </a>
            )}
          </div>

          {/* Mobile Actions: Hamburger */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="p-1.5 rounded-full text-stone-700 dark:text-stone-300 hover:text-amber-900 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-stone-950/40 backdrop-blur-xs sm:hidden animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={cn(
          "fixed top-18 inset-x-4 z-40 max-w-lg mx-auto sm:hidden rounded-3xl bg-white/95 dark:bg-stone-950/95 backdrop-blur-2xl border border-amber-900/15 p-5 shadow-2xl transition-all duration-300",
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
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "flex items-center justify-between px-4 py-2.5 rounded-2xl text-xs font-bold transition-all",
                    isActive
                      ? "bg-amber-100/90 dark:bg-amber-950/80 text-amber-950 dark:text-amber-200"
                      : "text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-900"
                  )}
                >
                  <span>{link.name}</span>
                  {isActive && <Sparkles className="h-3.5 w-3.5 text-amber-700" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-stone-200/60 dark:border-stone-800">
            <span className="text-xs text-stone-600 dark:text-stone-300 font-semibold">Atmosphere:</span>
            <AmbientModeSwitcher />
          </div>

          <div className="pt-3 border-t border-stone-200/80 dark:border-stone-800 space-y-2.5">
            {onOpenOrderDrawer ? (
              <Button
                onClick={() => {
                  setIsOpen(false);
                  onOpenOrderDrawer();
                }}
                className="w-full rounded-full justify-center gap-2 py-3 text-xs font-bold bg-amber-700 text-white shadow-md"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Open Quick Order Ticket</span>
              </Button>
            ) : (
              <a
                href="https://wa.me/60168859657?text=Hello%20IG%20Ais%20Kacang%20Gambier!"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full rounded-full justify-center gap-2 py-3 text-xs font-bold bg-amber-700 text-white shadow-md">
                  <PhoneCall className="h-4 w-4" />
                  <span>WhatsApp Order (+60 16-885 9657)</span>
                </Button>
              </a>
            )}
            <div className="text-center pt-1">
              <p className="text-[10px] text-stone-600 dark:text-stone-400">
                📍 7, Jalan Gambier, Kuching Waterfront, Sarawak
              </p>
              <p className="text-[9px] text-stone-500 mt-0.5">
                Open Daily: 10:00 AM – 10:30 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
