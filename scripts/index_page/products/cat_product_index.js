import { centsToDollars } from "../../utilities/money_handling.js";

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

  getStarsUrl() {
    return `../images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice() {
    return `$${(centsToDollars(this.priceCents))}`;
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
  }
].map((productDetails) => {
  return new Product (productDetails);
});