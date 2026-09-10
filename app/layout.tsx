import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AmbientModeProvider } from "@/components/ui/ambient-mode-provider";
import { ArtisanCursor } from "@/components/ui/artisan-cursor";
import { ScrollToTopOnReload } from "@/components/ui/scroll-to-top-on-reload";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#b45309",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aiskacanggambier.my"),
  title: {
    default: "IG Ais Kacang Gambier | Authentic Sarawak Gula Apong Shaved Ice & Kopitiam",
    template: "%s | IG Ais Kacang Gambier",
  },
  description:
    "Home of the authentic Sarawak Gula Apong Ais Kacang and artisan soft-serve at Jalan Gambier, Kuching Waterfront. Taste pure Borneo nipa palm sugar, Sarawak Laksa, and heritage desserts.",
  keywords: [
    "IG Ais Kacang Gambier",
    "IG Ais Krim",
    "Gula Apong Kuching",
    "Ais Kacang Kuching",
    "Jalan Gambier Waterfront",
    "Sarawak Laksa Gambier",
    "Borneo Palm Sugar Dessert",
    "Kuching Waterfront Dessert",
  ],
  authors: [{ name: "IG Ice Cream Sdn Bhd" }],
  creator: "IG Ais Kacang Gambier",
  publisher: "IG Ice Cream Sdn Bhd",
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://aiskacanggambier.my",
    title: "IG Ais Kacang Gambier | Authentic Sarawak Gula Apong Shaved Ice",
    description:
      "Taste authentic Sarawak Gula Apong Ais Kacang and artisanal desserts right on Jalan Gambier overlooking the Kuching Waterfront.",
    siteName: "IG Ais Kacang Gambier",
  },
  twitter: {
    card: "summary_large_image",
    title: "IG Ais Kacang Gambier | Authentic Sarawak Gula Apong Shaved Ice",
    description:
      "Heritage Bornean shaved ice, Gula Apong soft-serve, and Sarawak Kopitiam favorites at Jalan Gambier, Kuching Waterfront.",
  },
  alternates: {
    canonical: "https://aiskacanggambier.my",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "IG Ais Kacang Gambier",
    alternateName: "IG Ais Krim Gambier",
    image: "https://aiskacanggambier.my/og-image.jpg",
    description:
      "Specialty Malaysian heritage dessert house and kopitiam serving pure Sarawak Gula Apong shaved ice, artisan soft serve, and authentic Sarawak Laksa at the Kuching Waterfront.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7, Jalan Gambier, Waterfront",
      addressLocality: "Kuching",
      addressRegion: "Sarawak",
      postalCode: "93000",
      addressCountry: "MY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 1.5593,
      longitude: 110.3444,
    },
    telephone: "+6016-8859657",
    servesCuisine: ["Malaysian", "Desserts", "Sarawakian", "Kopitiam"],
    priceRange: "RM 5 - RM 25",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "22:30",
      },
    ],
    sameAs: [
      "https://www.igicecream.com/",
      "https://www.instagram.com/iggulaapong",
      "https://www.tiktok.com/@igaiskrim_officia",
    ],
  };

  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${playfairDisplay.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if ('scrollRestoration' in history) {
                  history.scrollRestoration = 'manual';
                }
                window.scrollTo(0, 0);
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col transition-colors duration-500">
        <ScrollToTopOnReload />
        <AmbientModeProvider>
          <ArtisanCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AmbientModeProvider>
      </body>
    </html>
  );
}

