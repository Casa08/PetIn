import {cart, removeFromCart} from '../scripts/products/cart.js';
import { products as dogProducts } from './products/dog_product.js';
import { products as catProducts } from './products/cat_product.js';
import { products as birdProducts } from './products/bird_product.js';
import { centsToDollars } from './utilities/money_handling.js';

const allProducts = [...dogProducts, ...catProducts, ...birdProducts];

let cartSummaryHTML = '';

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  allProducts.forEach((product) => {
    if (!cartItem.productId) {
      alert(`This product is out of stock: ${JSON.stringify(cartItem.name)}`);
      return;
    }

    if (product.id === productId) {
      matchingProduct = product;
    }
  });


    cartSummaryHTML += ` 
      <div class="cart-item-container">
        <div class="delivery-date">
          Delivery date: Tuesday, June 21
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingProduct.image}">

          <div class="cart-item-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-price">
              $${centsToDollars(matchingProduct.priceCents)}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary">
                Update
              </span>
              <span class="delete-quantity-link link-primary
              js-delete-link" data-product-id="${matchingProduct.id}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            <div class="delivery-option">
              <input type="radio" checked
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
              <div>
                <div class="delivery-option-date">
                  Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                  FREE Shipping
                </div>
              </div>
            </div>
            <div class="delivery-option">
              <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
              <div>
                <div class="delivery-option-date">
                  Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                  $4.99 - Shipping
                </div>
              </div>
            </div>
            <div class="delivery-option">
              <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
              <div>
                <div class="delivery-option-date">
                  Monday, June 13
                </div>
                <div class="delivery-option-price">
                  $9.99 - Shipping
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `;
});

document.querySelector('.js-order-summary').
  innerHTML = cartSummaryHTML


document.querySelectorAll('.js-delete-link').
  forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
    
    });
  })