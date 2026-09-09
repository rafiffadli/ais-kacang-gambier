import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { LocationGuide } from "@/components/contact/location-guide";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Contact Us & Group Visits",
  description:
    "Get in touch with IG Ais Kacang Gambier at the Kuching Waterfront. Inquire about group visits, dessert catering, bulk Gula Apong, or get directions.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FFFDF9] py-14 sm:py-20 border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="signature" className="mx-auto">
              Get in Touch • Jalan Gambier Kuching
            </Badge>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
              We’d Love to Welcome You
            </h1>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Planning a visit with family or friends? Inquiring about our dessert
              catering or authentic Sarawak palm sugar? Reach out below and our
              team will gladly assist you.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Direct Info & Quick WhatsApp */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>

            {/* Right Column: Zod + React Hook Form Inquiry */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Location Directions & Nearby Landmarks */}
      <LocationGuide />
    </>
  );
}
