import * as React from "react";
import { CUSTOMER_REVIEWS } from "@/data/reviews-data";
import { Star, Quote, BadgeCheck } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ReviewSlider() {
  return (
    <section id="reviews" className="py-20 bg-[#FAF6EE] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="emerald" className="mx-auto">
            Google Reviews • 4.8 / 5.0 Rating
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Loved by Kuching Locals & Travelers
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            See what our patrons say after savoring our signature Gula Apong
            desserts and Kopitiam favorites right beside the Kuching Waterfront.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CUSTOMER_REVIEWS.map((review) => (
            <Card
              key={review.id}
              className="flex flex-col justify-between bg-white border-amber-900/10 hover:shadow-lg transition-all duration-200"
            >
              <CardHeader className="space-y-3 pb-3">
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-amber-600/30" />
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </CardHeader>

              <CardContent className="pt-2 pb-5 border-t border-stone-100 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900 flex items-center gap-1">
                      {review.author}
                      {review.verified && (
                        <BadgeCheck className="h-3.5 w-3.5 text-emerald-600" />
                      )}
                    </h4>
                    <p className="text-[11px] text-stone-700">{review.role}</p>
                  </div>
                  <span className="text-[10px] text-stone-700 font-medium">
                    {review.date}
                  </span>
                </div>

                <div className="pt-1">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-sm inline-block">
                    Craved: {review.favoriteDish}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Review Social Callout */}
        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/search?q=IG+Ais+Kacang+Gambier+Kuching"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-800 hover:text-amber-900 underline underline-offset-4"
          >
            <span>Read all 500+ reviews on Google Maps & leave your feedback →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
