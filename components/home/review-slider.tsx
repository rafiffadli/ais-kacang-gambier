import * as React from "react";
import { CUSTOMER_REVIEWS } from "@/data/reviews-data";
import { Star, Quote, BadgeCheck, MessageSquareHeart, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ReviewSlider() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FAF6EE]/80 backdrop-blur-xs scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Aggregate Rating Pill */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-300">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-800">
              <MessageSquareHeart className="h-3.5 w-3.5 text-amber-600" />
              <span>Voice of Our Patrons</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
              Loved by Kuching Locals &amp; Travelers
            </h2>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              See what our patrons say after savoring our signature Gula Apong
              desserts and Kopitiam favorites right beside the Kuching Waterfront.
            </p>
          </div>

          {/* Modern Score Capsule */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-stone-200 shadow-xs shrink-0">
            <div className="text-right">
              <span className="font-serif text-3xl font-black text-stone-900 block leading-none">
                4.8
              </span>
              <span className="text-[11px] text-stone-700 font-medium">
                Out of 5.0 Stars
              </span>
            </div>
            <div className="h-8 w-px bg-stone-200" />
            <div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>
              <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                <BadgeCheck className="h-3.5 w-3.5" />
                500+ Google Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Editorial Reviews Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="rounded-3xl bg-white border border-stone-200/90 p-7 sm:p-8 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-stone-700 font-medium">
                    {review.date}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-stone-800 leading-relaxed italic font-serif">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900 flex items-center gap-1.5">
                    {review.author}
                    {review.verified && (
                      <BadgeCheck className="h-4 w-4 text-emerald-600" />
                    )}
                  </h4>
                  <p className="text-xs text-stone-700">{review.role}</p>
                </div>

                <span className="text-[11px] font-bold text-amber-900 bg-amber-100/90 border border-amber-200/80 px-2.5 py-1 rounded-full">
                  Craved: {review.favoriteDish}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* External Review CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=IG+Ais+Kacang+Gambier+Kuching"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-stone-300 text-stone-800 text-xs sm:text-sm font-bold shadow-xs hover:border-amber-600 hover:text-amber-800 transition-colors"
          >
            <span>Read all 500+ reviews on Google Maps &amp; leave your feedback</span>
            <ArrowUpRight className="h-4 w-4 text-amber-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
