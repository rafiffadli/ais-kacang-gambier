import Link from "next/link";
import { Compass, Home, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-[75vh] flex items-center justify-center py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FFFDF9]">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold">
          <Compass className="h-3.5 w-3.5 text-amber-700" />
          <span>Waterfront Landmark Not Found</span>
        </div>

        <div className="space-y-2">
          <span className="font-serif text-6xl sm:text-7xl lg:text-8xl font-black text-amber-600/40 block">
            404
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Lost on Jalan Gambier?
          </h1>
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-md mx-auto">
          The page or recipe you are looking for has either drifted down the Sarawak River or moved to another table.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link href="/">
            <Button
              size="lg"
              className="rounded-full px-7 font-bold bg-amber-700 hover:bg-amber-800 text-white shadow-md gap-2"
            >
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
          </Link>

          <Link href="/#menu">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-7 font-bold border-amber-800/30 text-stone-900 bg-white hover:bg-amber-50 gap-2"
            >
              <Sparkles className="h-4 w-4 text-amber-600" />
              <span>Explore Menu</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
