import * as React from "react";
import { Compass, Car, Navigation, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LocationGuide() {
  return (
    <section className="py-16 bg-[#FAF6EE] border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 sm:p-12 border border-stone-200/80 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Directions & Landmarks */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
                <Compass className="h-3.5 w-3.5 text-amber-700" />
                <span>How to Find Us</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Landmarks Around Jalan Gambier
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 text-xs font-bold mt-0.5">
                    1
                  </span>
                  <p>
                    <strong className="text-stone-900">Kuching Waterfront Promenade:</strong>{" "}
                    We are directly facing the waterfront walkway, just minutes
                    from the pedestrian Darul Hana Bridge and the Old Court House.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 text-xs font-bold mt-0.5">
                    2
                  </span>
                  <p>
                    <strong className="text-stone-900">Parking Recommendations:</strong>{" "}
                    Ample street parking is available along Jalan Gambier and the
                    Waterfront multi-storey car park near Plaza Merdeka.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 text-xs font-bold mt-0.5">
                    3
                  </span>
                  <p>
                    <strong className="text-stone-900">Waterfront Night Fountain:</strong>{" "}
                    Best time to visit for dessert is between 6:30 PM and 9:00 PM
                    when the river breeze cools down and the musical fountain performs.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Jalan+Gambier+Kuching+Sarawak"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="gap-2">
                    <Navigation className="h-4 w-4" />
                    <span>Open in Google Maps Directions</span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Visual Map Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 text-center space-y-4 shadow-inner">
                <div className="w-14 h-14 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-amber-800">
                  <Navigation className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-stone-900">
                    Jalan Gambier, Kuching
                  </h4>
                  <p className="text-xs text-stone-700 mt-1">
                    Latitude: 1.5593° N, Longitude: 110.3444° E
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-stone-200 text-left text-xs space-y-1.5">
                  <p className="font-semibold text-stone-800">Nearby Spots:</p>
                  <ul className="list-disc list-inside text-stone-700 space-y-0.5">
                    <li>Darul Hana Bridge (3 min walk)</li>
                    <li>Kuching Waterfront Esplanade (1 min)</li>
                    <li>Plaza Merdeka Shopping Mall (5 min)</li>
                    <li>Carpenter Street & India Street (4 min)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
