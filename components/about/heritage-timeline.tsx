import * as React from "react";
import { Clock, CheckCircle } from "lucide-react";

export function HeritageTimeline() {
  const timelineEvents = [
    {
      year: "Historical Heritage",
      title: "The Quayside of Jalan Gambier",
      description:
        "Historically one of Kuching’s most famous trading hubs along the Sarawak River. Merchants barged spices, gambier leaves, and fresh nipa palm sugar from coastal river villages right to the market docks.",
    },
    {
      year: "June 2019",
      title: "Founding of IG Ais Krim & Ais Kacang",
      description:
        "Launched at the Kuching Waterfront to celebrate Sarawak’s native Gula Apong palm sugar in fresh, contemporary dessert formats. The young girl motif in the logo symbolizes joyful childhood memories around sweet treats.",
    },
    {
      year: "2021",
      title: "The Signature Ais Kacang Formula",
      description:
        "Expanded from soft-serve ice cream into our dedicated Kopitiam dining spot at 7, Jalan Gambier, serving our signature Ais Kacang alongside authentic Sarawak Laksa, Nasi Lemak, and Kopitiam classics.",
    },
    {
      year: "2023",
      title: "Padungan Branch & Regional Acclaim",
      description:
        "Due to high demand from both local regulars and international visitors exploring Sarawak, a secondary outlet in Padungan was launched, solidifying IG's position as a premier Sarawakian dessert brand.",
    },
    {
      year: "Today",
      title: "A Must-Visit Waterfront Destination",
      description:
        "Welcoming over hundreds of guests daily who stroll by the Darul Hana Bridge and Waterfront Musical Fountain to enjoy pure Borneo indulgence.",
    },
  ];

  return (
    <section className="py-20 bg-[#FFFDF9] border-b border-amber-900/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-800 flex items-center justify-center gap-1.5">
            <Clock className="h-4 w-4" />
            Milestones of Our Journey
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            From Riverside Roots to Iconic Landmark
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Trace how passion for Borneo’s indigenous palm sugar helped shape
            one of Kuching’s favorite boutique dessert destinations.
          </p>
        </div>

        <div className="relative border-l-2 border-amber-200 ml-4 sm:ml-32 space-y-12">
          {timelineEvents.map((event, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              {/* Dot marker */}
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-amber-600 border-4 border-[#FFFDF9] shadow-sm group-hover:scale-125 transition-transform" />

              {/* Year label for desktop */}
              <div className="sm:absolute sm:-left-36 sm:top-0 text-left sm:text-right sm:w-28 mb-1 sm:mb-0">
                <span className="font-serif text-sm font-bold text-amber-800 bg-amber-100/70 sm:bg-transparent px-2 sm:px-0 py-0.5 rounded">
                  {event.year}
                </span>
              </div>

              {/* Event Content */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs group-hover:shadow-md transition-shadow">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
                  <span>{event.title}</span>
                  <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
