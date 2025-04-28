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


export const products = [
  {
    id: "bf3638ce-6aa0-4b85-b27f-e1d07eb678c61",
    image: "images/products/bf_1.webp",
    name: "Kaytee Nut & Fruit Wild Bird Seed, 5 lb",
    rating: {
      stars: 5.0,
      count: 100
    },
    priceCents: 1484,
    keywords: [
      "kaytee",
      "nut",
      "fruit"
    ]
  },
  {
    id: "bf3638ce-6aa0-4b85-b27f-e1d07eb6782",
    image: "images/products/bf_2.webp",
    name: "Pennington Classic Wild Bird Feed -20lbs",
    rating: {
      stars: 4.5,
      count: 599
    },
    priceCents: 1500,
    keywords: [
      "pennington",
      "classic",
      "wild"
    ]
  },
  {
    id: "bf3638ce-6aa0-4b85-b27f-e1d07eb678c3",
    image: "images/products/bf_3.webp",
    name: "Audubon Park Songbird Blend Wild Bird Food, Bird Food for Outside Feeders, 14-Pound Bag",
    rating: {
      stars: 3.5,
      count: 117
    },
    priceCents: 1900,
    keywords: [
      "Audubon",
      "park",
      "songbird"
    ]
  },
  {
    id: "bt43638ce-6aa0-4b85-b27f-e1d07eb678c1",
    image: "images/products/bt_1.webp",
    name: "Large Parrot Toy - Multicolored Wooden Blocks Tearing Toys for Birds Suggested for African Grey, Macaw and Amazon Parrots",
    rating: {
      stars: 4.5,
      count: 214
    },
    priceCents: 1847,
    keywords: [
      "large",
      "parrot",
      "toy"
    ]
  }
].map((productDetails) => {
  return new Product (productDetails); 
});
