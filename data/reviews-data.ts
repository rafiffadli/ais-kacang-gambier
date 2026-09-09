export interface CustomerReview {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  favoriteDish: string;
  verified: boolean;
}

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    author: "Dayang Nurul Ain",
    role: "Local Food Explorer & Kuching Native",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Nothing beats sitting by the Kuching Waterfront with a bowl of IG's Gula Apong Ais Kacang on a warm afternoon. The palm sugar is the real deal — deeply aromatic, smoky, and not overly cloying. It's a genuine taste of Sarawak.",
    favoriteDish: "Signature Gula Apong Ais Kacang",
    verified: true,
  },
  {
    id: "rev-2",
    author: "Marcus Tan",
    role: "Travel Journalist, KL",
    rating: 5,
    date: "1 month ago",
    comment:
      "We visited Jalan Gambier right before sunset. The texture of their shaved ice is impossibly fluffy like fresh snow, and pairing it with Sarawak Laksa is an absolute heavenly match. Best dessert spot in Kuching!",
    favoriteDish: "Sarawak Laksa & Ais Kacang Set",
    verified: true,
  },
  {
    id: "rev-3",
    author: "Chloe & Jonathan",
    role: "Boutique Cafe Enthusiasts",
    rating: 5,
    date: "3 weeks ago",
    comment:
      "The Gula Apong soft serve in a waffle cone with crushed peanuts and Biscoff crumbs is pure artisanal magic. The presentation and clean aesthetic make it a mandatory stop every time we are in Borneo.",
    favoriteDish: "Original Gula Apong Soft Serve",
    verified: true,
  },
  {
    id: "rev-4",
    author: "Haji Ramli Awang",
    role: "Kuching Resident (30+ Years)",
    rating: 5,
    date: "2 months ago",
    comment:
      "Saya dah makan ais kacang sejak zaman muda di Gambier Street. IG Ais Kacang mengekalkan keaslian rasa nira kelapa laut Gula Apong asli Sarawak dengan kualiti kebersihan yang sangat moden dan selesa.",
    favoriteDish: "Ais Kacang Istimewa Gula Apong",
    verified: true,
  },
];

export const BRAND_STATS = [
  { label: "Bowls & Cones Served", value: "250,000+" },
  { label: "Sarawak Gula Apong Sourced", value: "100% Pure" },
  { label: "Google Review Rating", value: "4.8 / 5.0" },
  { label: "Years of Heritage Craft", value: "Since 2019" },
];
