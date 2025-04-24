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

  catStarsUrl() {
    return `../images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice() {
    return `$${centsToDollars(this.priceCents)}`;
  }
}


export const products = [
  {
    id: "cf3638ce-6aa0-4b85-b27f-e1d07eb678c61",
    image: "../images/products/cf_1.webp",
    name: "Blue Buffalo True Solutions Digestive Care Natural Dry Cat Food for Adult Cats, Chicken, 11-lb. Bag",
    rating: {
      stars: 4.5,
      count: 217
    },
    priceCents: 4498,
    keywords: [
      "blue",
      "bufffalo",
      "digestive"
    ]
  },
  {
    id: "cf3638ce-6aa0-4b85-b27f-e1d07eb6782",
    image: "../images/products/cf_2.webp",
    name: "Hill's Science Diet Adult 11+, Senior Adult 11+ Premium Nutrition, Dry Cat Food, Chicken Recipe, 3.5 lb Bag",
    rating: {
      stars: 4.0,
      count: 150
    },
    priceCents: 2199,
    keywords: [
      "hills",
      "diet",
      "recipe"
    ]
  },
  {
    id: "cf3638ce-6aa0-4b85-b27f-e1d07eb678c3",
    image: "../images/products/cf_3.webp",
    name: "Purina Fancy Feast Gourmet Gravy Wet Cat Food, Petites Tender Beef With Carrots Entree - 2.8 Ounce (Pack of 12)",
    rating: {
      stars: 4.5,
      count: 808
    },
    priceCents: 1272,
    keywords: [
      "purina",
      "fancy",
      "gourmet"
    ]
  },
  {
    id: "ct43638ce-6aa0-4b85-b27f-e1d07eb678c1",
    image: "../images/products/ct_1.webp",
    name: "2025 New Generation Interactive Cat Ball Toy with Elastic Mesh Tail - Automatic Motion-Activated Chirping Kitten Toy for Indoor Cats, Relieves Boredom & Encourages Play",
    rating: {
      stars: 3.5,
      count: 8500
    },
    priceCents: 1499,
    keywords: [
      "new",
      "generatoin",
      "interactions"
    ]
  },
  {
    id: "ct3638ce-6aa0-4b85-b27f-e1d07eb678c2",
    image: "../images/products/ct_2.webp",
    name: "9 Pcs Cat Balls & Catnip Toys Set - Cartoon Fuzzy Balls, Soft & Lightweight - Kittens Chewing, Kicker Toys - Toys for Indoor Cats - Kitten & Cat Accessories - Pack of 9",
    rating: {
      stars: 3.0,
      count: 1000
    },
    priceCents: 1898,
    keywords: [
      "catnip",
      "fuzzy",
      "toys"
    ]
  },
  {
    id: "ct3638ce-6aa0-4b85-b27f-e1d07eb678c3",
    image: "../images/products/ct_3.webp",
    name: "UPSKY Cat Toy Roller 3-Level Turntable Cat Toys Balls with Six Colorful Balls Interactive Kitten Fun Mental Physical Exercise Puzzle Kitten Toys",
    rating: {
      stars: 4.5,
      count: 208
    },
    priceCents: 9990,
    keywords: [
      "upsky",
      "roller",
      "turntable"
    ]
  },
  {
    id: "ca43638ce-6aa0-4b85-b27f-e1d07eb678c1",
    image: "../images/products/ca_1.webp",
    name: "Catit - Go Natural Pea Husk Clumping Cat Litter - Lightweight, Dust Free, Easy Cleaning & Scooping, Flushable Kitty Litter with Odor Control & Subtle Fragrance - 12.3 Lbs, Vanilla Scented",
    rating: {
      stars: 2.5,
      count: 1000
    },
    priceCents: 2499,
    keywords: [
      "catit",
      "natural",
      "litter"
    ]
  },
  {
    id: "ca3638ce-6aa0-4b85-b27f-e1d07eb678c2",
    image: "../images/products/ca_2.webp",
    name: "Tall Cat Scratching Post 32 Inches - Protects Furniture - Durable and Sturdy Design - Aesthetic Cat Accessories Essentials Grey/Blue",
    rating: {
      stars: 1.5,
      count: 18
    },
    priceCents: 4499,
    keywords: [
      "tall",
      "scratching",
      "post"
    ]
  },
  {
    id: "ca3638ce-6aa0-4b85-b27f-e1d07eb678c3",
    image: "../images/products/ca_3.webp",
    name: "Xin Three Layer Cat Tree with Cat Condo and Two Hammocks,Grey",
    rating: {
      stars: 5.0,
      count: 5000
    },
    priceCents: 5200,
    keywords: [
      "xin",
      "tree",
      "hammocks"
    ]
  },
  {
    id: "cc3638ce-6aa0-4b85-b27f-e1d07eb678c1",
    image: "../images/products/cc_1.webp",
    name: "rabbitgoo Cat Harness and Leash for Walking, Escape Proof Soft Adjustable Vest Harnesses for Cats, Easy Control Breathable Reflective Strips Jacket, Black, XS",
    rating: {
      stars: 4.0,
      count: 7
    },
    priceCents: 1598,
    keywords: [
      "rabbitgoo",
      "harness",
      "leash"
    ]
  },
  {
    id: "cc3638ce-6aa0-4b85-b27f-e1d07eb678c2",
    image: "../images/products/cc_2.webp",
    name: "Thundershirt Classic Cat Anxiety Jacket, Heather Gray, Medium (9 to 13 lbs), THU-009",
    rating: {
      stars: 3.5,
      count: 3219
    },
    priceCents: 4000,
    keywords: [
      "thundershirt",
      "classic",
      "jacket"
    ]
  },
  {
    id: "cc3638ce-6aa0-4b85-b27f-e1d07eb678c3",
    image: "../images/products/cc_3.webp",
    name: "Breathable Cat Recovery Suit for Female/Male, Anti-Licking Kitten Onesie - Cat Surgery Pajamas with Sleeve After Spay, Prevent Shedding, Abdominal Wounds, Skin Diseases or E-Collar Alternative",
    rating: {
      stars: 4.0,
      count: 35
    },
    priceCents: 1090,
    keywords: [
      "breathable",
      "suit",
      "recovery"
    ]
  }
].map((productDetails) => {
  return new Product (productDetails);
});

