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
      return `images/ratings/rating-${this.rating.stars * 10}.png`;
    }
  
  getPrice() {
    return `$${(centsToDollars(this.priceCents))}`;
  }
}



export const products =[
  {
    id: "df3638ce-6aa0-4b85-b27f-e1d07eb678c61",
    image: "images/products/df_1.webp",
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
    image: "../../../images/products/df_2.webp",
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
    image: "../../../images/products/df_3.webp",
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
    image: "../../../images/products/dt_1.webp",
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
  }
].map((productDetails) => {
  return new Product (productDetails);
});
