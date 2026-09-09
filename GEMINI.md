# GEMINI.md — Project Memory & Architecture Context

This document preserves the comprehensive architecture, brand context, design tokens, and engineering standards for **IG Ais Kacang Gambier**.

---

## 1. Project & Brand Overview

- **Project Name**: `ais-kacang-gambier`
- **Client / Entity**: IG Ais Kacang Gambier (IG Ice Cream Sdn Bhd)
- **Flagship Location**: 7, Jalan Gambier, Waterfront, 93000 Kuching, Sarawak, Malaysia
- **Official References & Concept**:
  - [IG Ice Cream](https://www.igicecream.com/): Official brand origin, soft-serve & milk tea roots, Kuching Waterfront presence.
  - [Nyonya Tingkat](https://www.nyonyatingkat.com.my/): Heritage Malaysian aesthetic, amber/gold palette (`#F59E0B`), warm frosted glass navigation, mouthwatering menu storytelling.
  - [Little Heritage House](https://littleheritagehouse.com.my/heritage/): Timeless Peranakan culture, traditional craft preservation, boutique dining experience.
- **Core Specialties**:
  - *Signature Gula Apong Ais Kacang (ABC)*: Fluffy shaved ice drenched in 100% pure Borneo nipa palm sugar, slow-simmered red beans, sweet corn, roasted peanuts, attap seeds, grass jelly.
  - *Original Gula Apong Soft Serve*: Freshly churned daily with crunchy Biscoff/peanuts.
  - *Royal Gula Apong Cendol & Teh C Peng Special*: Three-layer authentic Sarawak iced tea.
  - *Sarawak Laksa & Kopitiam Classics*: Authentic savory comfort food for riverfront diners.

---

## 2. Technical Stack

| Category | Technology / Library | Version / Details |
| :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `^16.x` (React 19, Turbopack) |
| **Language** | TypeScript | `^5.x` (Strict mode) |
| **Styling** | Tailwind CSS | `v4` with custom boutique dessert tokens |
| **Icons** | Lucide React | `^1.x` |
| **Forms & Validation** | React Hook Form + Zod | `@hookform/resolvers` + `zod` |
| **Typography** | Google Fonts | `Playfair Display` (Serif) & `Plus Jakarta Sans` (Sans) |
| **SEO & Schema** | Open Graph, Twitter Cards, JSON-LD | Schema.org `Restaurant` & `LocalBusiness` |

---

## 3. Brand Design System & Color Tokens

- **Backgrounds**:
  - Cream Base: `#FFFDF9`
  - Rice Paper: `#FAF6EE`
  - Warm Card: `#FDFBF7`
- **Borneo Gula Apong (Primary)**:
  - Gold Accent: `#F59E0B`
  - Amber Caramel: `#D97706`
  - Dark Molasses: `#B45309` / `#78350F`
- **Heritage Accents**:
  - Nyonya Rose / Ruby: `#BE123C` / `#991B1B`
  - Pandan Emerald: `#059669` / `#047857`
  - Heritage Charcoal / Text: `#1C1917` / `#292524`
- **Glassmorphism & Floating Capsule**:
  - Floating Island Navbar: `fixed inset-x-0 z-50 rounded-full bg-white/90 backdrop-blur-xl border border-amber-900/15 shadow-xl` (mamee.com inspired floating capsule)
  - Pill Navigation Tabs: inner rounded-full pill buttons with active amber pill state

---

## 4. Directory Structure

```text
ais-kacang-gambier/
├── app/
│   ├── layout.tsx             # Root layout with fonts, metadata, JSON-LD, Navbar & Footer
│   ├── page.tsx               # Home Page: Hero, Menu, Heritage story, Reviews, Visit CTA
│   ├── about/
│   │   └── page.tsx           # About Us: Story Hero, 4 Craft Pillars, Heritage Timeline
│   ├── contact/
│   │   └── page.tsx           # Contact Us: Info, Zod-validated Form, Location Guide
│   ├── globals.css            # Tailwind theme, dessert colors, scrollbars, animations
│   ├── sitemap.ts             # Dynamic XML sitemap
│   └── robots.ts              # SEO crawler instructions
├── components/
│   ├── layout/
│   │   ├── navbar.tsx         # Sticky frosted navigation with mobile drawer & WhatsApp CTA
│   │   └── footer.tsx         # 4-column footer with hours, location, guarantees, socials
│   ├── ui/
│   │   ├── button.tsx         # Accessible button with 6 variants (primary, secondary, ruby, etc.)
│   │   ├── badge.tsx          # Badges for signatures, awards, halal, and classic items
│   │   ├── card.tsx           # Modular Card family (CardHeader, CardTitle, CardContent, etc.)
│   │   ├── input.tsx          # Accessible Input with error state styling
│   │   ├── textarea.tsx       # Accessible Textarea with error state styling
│   │   └── toast.tsx          # Interactive notification banner for form submissions
│   ├── home/
│   │   ├── hero-banner.tsx    # Atmospheric hero with signature dish spotlight
│   │   ├── signature-menu.tsx # Category-filtered menu grid with WhatsApp order links
│   │   ├── heritage-teaser.tsx# Jalan Gambier history & brand metrics
│   │   ├── review-slider.tsx  # Google Review customer testimonials (4.8 rating)
│   │   └── visit-banner.tsx   # Waterfront visit CTA with opening hours
│   ├── about/
│   │   ├── story-hero.tsx     # Narrative header
│   │   ├── craft-pillars.tsx  # 4 Pillars: 100% Palm Sugar, Shaved Ice, Fresh Condiments, Heritage
│   │   └── heritage-timeline.tsx # Milestones from historic quayside to Padungan expansion
│   └── contact/
│       ├── contact-form.tsx   # Zod + React Hook Form with dynamic catering/group fields
│       ├── contact-info.tsx   # Direct phone (+60 16-885 9657), address, hours, WhatsApp
│       └── location-guide.tsx # Landmarks (Darul Hana Bridge, Waterfront Walkway, Parking)
├── data/
│   ├── menu-data.ts           # Curated Ais Kacang, soft-serve, and kopitiam offerings
│   └── reviews-data.ts        # Verified customer reviews and brand statistics
├── lib/
│   ├── utils.ts               # Class merger utility cn()
│   └── validations/
│       └── contact.ts         # Zod schema for client-side form validation
├── GEMINI.md                  # Project memory, design context, and engineering standards
└── package.json
```

---

## 5. Engineering Standards & Workflows

### Client-Side Form Validation (Zod + React Hook Form)
- Validated at the boundary in `lib/validations/contact.ts`.
- Required fields: Full Name (min 2), Email (RFC compliant), Phone (valid regex), Inquiry Type, Message (min 10).
- Conditional fields: Estimated Guests & Event Date display dynamically when "Catering" or "Group Tour" is selected.

### Local Development Commands
```bash
npm run dev      # Start development server on http://localhost:3000
npm run build    # Run Next.js production build with strict TypeScript check
npm run start    # Start production server
npm run lint     # Run ESLint validation
```

---

## 6. Official Contact & Social Endpoints

- **Phone / WhatsApp**: `+60 16-885 9657`
- **Email**: `iggulaapong@gmail.com`
- **Address**: `7, Jalan Gambier, Waterfront, 93000 Kuching, Sarawak, Malaysia`
- **Socials**:
  - Instagram: `@iggulaapong`
  - TikTok: `@igaiskrim_officia`
  - Official Web: `https://www.igicecream.com/`
