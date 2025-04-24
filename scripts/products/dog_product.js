import { centsToDollars } from "../utilities/money_handling.js";

class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating
    this.priceCents = productDetails.priceCents;
  }

  dogStarsUrl() {
    return `../images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice() {
    return `$${centsToDollars(this.priceCents)}`;
  }
}


export const products = [
  {
    id: "df3638ce-6aa0-4b85-b27f-e1d07eb678c61",
    image: "../images/products/df_1.webp",
    name: "Amazon Brand - Wag Dry Dog Food Salmon & Sweet Potato, Grain Free 24 lb Bag",
    rating: {
      stars: 4.5,
      count: 6878
    },
    priceCents: 5133,
    keywords: [
      "amazon",
      "salmon",
      "potato"
    ]
  },
  {
    id: "df3638ce-6aa0-4b85-b27f-e1d07eb6782",
    image: "../images/products/df_2.webp",
    name: "Amazon Brand - Wag Adult Premium Nutrition Dry Dog Food, Supports Stomach and Skin Health, Lamb and Brown Rice, 30 lb Bag",
    rating: {
      stars: 4.0,
      count: 68
    },
    priceCents: 6000,
    keywords: [
      "amazon",
      "premium",
      "nutrition"
    ]
  },
  {
    id: "df3638ce-6aa0-4b85-b27f-e1d07eb678c3",
    image: "../images/products/df_3.webp",
    name: "Instinct Raw Boost Natural Dry Dog Food with Freeze Dried Pieces, Grain Free, Real Chicken - Gut Health, 18 lb. Bag",
    rating: {
      stars: 4.5,
      count: 415
    },
    priceCents: 8999,
    keywords: [
      "instinct",
      "raw",
      "natural"
    ]
  },
  {
    id: "dt43638ce-6aa0-4b85-b27f-e1d07eb678c1",
    image: "../images/products/dt_1.webp",
    name: "Benebone Wishbone Durable Dog Chew Toy for Aggressive Chewers, Real Bacon, Made in USA, Medium",
    rating: {
      stars: 4.5,
      count: 100
    },
    priceCents: 1278,
    keywords: [
      "wish",
      "bone",
      "chew"
    ]
  },
  {
    id: "dt3638ce-6aa0-4b85-b27f-e1d07eb678c2",
    image: "../images/products/dt_2.webp",
    name: "Fida Dog Rope Toys for Large/Medium Aggressive Chewers, Tough Cotton Chew Toy, 3 Feet 5 Knots Indestructible, Tug of War Dog Pull Rope Teeth Cleaning",
    rating: {
      stars: 3.0,
      count: 118
    },
    priceCents: 2125,
    keywords: [
      "fida",
      "rope",
      "toy"
    ]
  },
  {
    id: "dt3638ce-6aa0-4b85-b27f-e1d07eb678c3",
    image: "../images/products/dt_3.webp",
    name: "Durable Plush Outdoor Toys for Dogs | Squeaky Spotted Trout | Fun Fishing Themed Dog Toy for Tough Chewers",
    rating: {
      stars: 3.5,
      count: 37
    },
    priceCents: 1499,
    keywords: [
      "durable",
      "plush",
      "squeaky"
    ]
  },
  {
    id: "da43638ce-6aa0-4b85-b27f-e1d07eb678c1",
    image: "../images/products/da_1.webp",
    name: "Ring Pet Tag | Easy-to-use tag with QR code | Real-time scan alerts | Shareable Pet Profile | No subscription or fees",
    rating: {
      stars: 4.5,
      count: 2300
    },
    priceCents: 9990,
    keywords: [
      "tag",
      "qr code",
      "real-time"
    ]
  },
  {
    id: "da3638ce-6aa0-4b85-b27f-e1d07eb678c2",
    image: "../images/products/da_2.webp",
    name: "INVIROX Shock Collar for Dogs [Ultra K9] 124 Training Levels, 4 Powerful Modes with Night-Light and ¾ Mile Range 100% Safe Dog Training Collars for Large Dogs IP67 Waterproof E Collar",
    rating: {
      stars: 4.0,
      count: 770
    },
    priceCents: 9999,
    keywords: [
      "invirox",
      "schock",
      "collar"
    ]
  },
  {
    id: "da3638ce-6aa0-4b85-b27f-e1d07eb678c3",
    image: "../images/products/da_3.webp",
    name: "Ultra Premium Durable Nylon Steak Chew Toy for Dogs | for Aggressive Chewers | Made in USA (Tomahawk Ribeye) Red",
    rating: {
      stars: 2.5,
      count: 50
    },
    priceCents: 1999,
    keywords: [
      "ultra",
      "nylon",
      "steak"
    ]
  },
  {
    id: "dc3638ce-6aa0-4b85-b27f-e1d07eb678c1",
    image: "../images/products/dc_1.webp",
    name: "ThunderShirt for Dogs, X Large, Heather Gray Classic - Dog Anxiety Relief Calming Vest",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 5499,
    keywords: [
      "thundershirt",
      "heather",
      "anxiety"
    ]
  },
  {
    id: "dc3638ce-6aa0-4b85-b27f-e1d07eb678c2",
    image: "../images/products/dc_2.webp",
    name: "TDTOK Dog Life Jacket Shark Fin American Flag Pattern with Rescue Handle and Reflective Stripes, High Buoyancy Life Safety Vest for Small,Medium,Large Dogs for Swimming and Boating (Small)",
    rating: {
      stars: 5.0,
      count: 50
    },
    priceCents: 3200,
    keywords: [
      "jacket",
      "shark",
      "american"
    ]
  },
  {
    id: "dc3638ce-6aa0-4b85-b27f-e1d07eb678c3",
    image: "../images/products/dc_3.webp",
    name: "No Pull Dog Harness for Medium Dogs, Adjustable No Choke Pet Vest with Dog Leash Fit Smart Reflective Pet Walking Harness for Training Easy Control Soft Handle Green M",
    rating: {
      stars: 4.5,
      count: 600
    },
    priceCents: 2399,
    keywords: [
      "harness",
      "adjustable",
      "cheko"
    ]
  }
].map((productDetails) => {
  return new Product (productDetails);
});