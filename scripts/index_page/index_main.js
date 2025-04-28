import { cart } from '../products/cart.js';
import { products as dogProducts } from 'products/dog_product_index.js';
import { products as catProducts } from './products/cat_product_index.js';
import { products as birdProducts } from './products/bird_product_index.js';
import { centsToDollars } from '../utilities/money_handling.js';
import { showAddedMessage } from '../utilities/show_added_message.js';

// Utility to render a product section individually
function renderProductSection(products, sectionSelector) {
  const sectionElement = document.querySelector(sectionSelector);
  if (!sectionElement) return;

  let productsHTML = '';

  products.forEach((product) => {
    productsHTML += `
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="${product.getStarsUrl()}"> <!-- updated -->
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          ${product.getPrice()} <!-- updated -->
        </div>

        <div class="product-quantity-container">
          <select class="js-quantity-selector-${product.id}">
            ${Array.from({ length: 10 }, (_, i) => 
              `<option value="${i + 1}" ${i === 0 ? 'selected' : ''}>${i + 1}</option>`).join('')}
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart js-added-to-cart-${product.id}">
          <img src="../images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart"
                data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>`;
  });

  sectionElement.innerHTML = productsHTML;

  // Add-to-Cart logic scoped to this section
  sectionElement.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
      button.addEventListener('click', () => {
        const { productId } = button.dataset;

        const quantitySelector = sectionElement.querySelector(`.js-quantity-selector-${productId}`);
        const quantity = Number(quantitySelector?.value || 1);

        cart.addToCart(productId, quantity);
        updateCartQuantity();
        showAddedMessage(productId);
      });
    });
}

// Update cart quantity header globally
function updateCartQuantity() {
  let cartQuantity = 0;

  cart.cartItems.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const quantityDisplay = document.querySelector('.js-cart-quantity');
  if (quantityDisplay) {
    quantityDisplay.innerText = cartQuantity;
  }
}

// Render all pet sections after DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  renderProductSection(dogProducts, '.js-dog-products-grid');
  renderProductSection(catProducts, '.js-cat-products-grid');
  renderProductSection(birdProducts, '.js-bird-products-grid');
  updateCartQuantity();
});
