export interface MenuItem {
  id: string;
  name: string;
  malayName?: string;
  description: string;
  price: string;
  category: "ais-kacang" | "ice-cream" | "beverages" | "kopitiam";
  badge?: "Signature" | "Best Seller" | "Waterfront Classic" | "Chef Special";
  isHeritage?: boolean;
  ingredients: string[];
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "gula-apong-ais-kacang",
    name: "Signature Gula Apong Ais Kacang",
    malayName: "Ais Kacang Istimewa Gula Apong",
    description:
      "Our crown jewel. Mountain of finely shaved snow ice saturated with caramelized Sarawak Gula Apong nectar, slow-simmered red beans, creamy sweet corn, attap seeds, grass jelly, and crushed roasted peanuts.",
    price: "RM 8.50",
    category: "ais-kacang",
    badge: "Signature",
    isHeritage: true,
    ingredients: [
      "Pure Sarawak Gula Apong",
      "Fine Shaved Ice",
      "Red Beans",
      "Sweet Corn",
      "Roasted Peanuts",
      "Attap Chee",
      "Grass Jelly",
      "Evaporated Milk",
    ],
  },
  {
    id: "gula-apong-soft-serve",
    name: "Original Gula Apong Soft Serve",
    malayName: "Ais Krim Kon Gula Apong",
    description:
      "Silky, velvety soft-serve ice cream churned fresh daily, infused with pure Borneo nipa palm sugar and drizzled with warm Gula Apong molasses and crunchy toppings.",
    price: "RM 6.90",
    category: "ice-cream",
    badge: "Best Seller",
    isHeritage: true,
    ingredients: [
      "Sarawak Gula Apong",
      "Fresh Milk Cream",
      "Crushed Biscoff & Peanuts",
      "Waffle Cone or Cup",
    ],
  },
  {
    id: "chendol-gula-apong",
    name: "Royal Gula Apong Cendol",
    malayName: "Cendol Warisan Gula Apong",
    description:
      "Silky pandan rice flour jelly strands layered over crushed ice, rich freshly pressed coconut milk, kidney red beans, and generous spoonfuls of fragrant Gula Apong.",
    price: "RM 7.90",
    category: "ais-kacang",
    badge: "Waterfront Classic",
    isHeritage: true,
    ingredients: [
      "Handmade Pandan Cendol",
      "Fresh Santan",
      "Sarawak Gula Apong",
      "Adzuki Red Beans",
      "Shaved Ice",
    ],
  },
  {
    id: "ais-kacang-durian-special",
    name: "Durian Ais Kacang Royale",
    malayName: "Ais Kacang Raja Buah",
    description:
      "A decadent twist featuring a creamy scoop of pure D24 durian purée crowned atop our signature shaved ice, Gula Apong, and sweet heritage condiments.",
    price: "RM 13.90",
    category: "ais-kacang",
    badge: "Chef Special",
    isHeritage: false,
    ingredients: [
      "Real Durian Purée",
      "Gula Apong Molasses",
      "Sweet Corn",
      "Nata de Coco",
      "Toasted Peanuts",
    ],
  },
  {
    id: "sarawak-laksa",
    name: "Authentic Sarawak Laksa",
    malayName: "Laksa Sarawak Asli Gambier",
    description:
      "Anthony Bourdain's famous 'Breakfast of the Gods'. Fragrant broth made with aromatic herbs and spices, coconut milk, tender shredded chicken, fresh sea prawns, egg omelette strips, beansprouts, and sambal belacan with calamansi.",
    price: "RM 11.50",
    category: "kopitiam",
    badge: "Signature",
    isHeritage: true,
    ingredients: [
      "Rice Vermicelli",
      "Secret Herbal Laksa Broth",
      "Fresh Sea Prawns",
      "Shredded Chicken",
      "Calamansi Lime",
      "House Sambal Belacan",
    ],
  },
  {
    id: "gula-apong-milk-tea",
    name: "Gula Apong Boba Milk Tea",
    malayName: "Teh Susu Boba Gula Apong",
    description:
      "Full-bodied brewed Ceylon tea leaves infused with creamy fresh milk and rich caramelized Sarawak palm sugar pearls, served chilled.",
    price: "RM 8.90",
    category: "beverages",
    badge: "Best Seller",
    isHeritage: true,
    ingredients: [
      "Slow-Brewed Black Tea",
      "Fresh Milk",
      "Gula Apong Caramel",
      "Chewy Tapioca Pearls",
    ],
  },
  {
    id: "teh-c-special-three-layer",
    name: "Sarawak Three-Layer Tea (Teh C Peng)",
    malayName: "Teh C Peng Special",
    description:
      "The quintessential Sarawak thirst-quencher. Distinct layers of thick dark Gula Apong syrup, rich evaporated milk, and fragrant steeped red tea.",
    price: "RM 5.50",
    category: "beverages",
    badge: "Waterfront Classic",
    isHeritage: true,
    ingredients: [
      "Gula Apong Base Layer",
      "Evaporated Milk",
      "Steeped Black Tea",
      "Crushed Ice",
    ],
  },
  {
    id: "nasi-lemak-gambier",
    name: "Nasi Lemak Pandan Sambal Sotong",
    malayName: "Nasi Lemak Gambier Beraroma",
    description:
      "Fluffy basmati rice steamed with fresh santan and bruised pandan leaves, served with slow-cooked sweet & spicy squid sambal, crisp anchovies, roasted peanuts, and boiled egg.",
    price: "RM 12.00",
    category: "kopitiam",
    badge: "Best Seller",
    isHeritage: true,
    ingredients: [
      "Fragrant Pandan Coconut Rice",
      "Slow-Cooked Sambal Sotong",
      "Ikan Bilis",
      "Kacang Goreng",
      "Timun",
      "Hard Boiled Egg",
    ],
  },
];

export const CATEGORIES = [
  { id: "all", label: "All Offerings" },
  { id: "ais-kacang", label: "Ais Kacang & Shaved Ice" },
  { id: "ice-cream", label: "Gula Apong Soft Serve" },
  { id: "kopitiam", label: "Kuching Kopitiam Staples" },
  { id: "beverages", label: "Artisanal Drinks" },
] as const;
