import {cart, removeFromCart, updateDeliveryOption} from '../products/cart.js';
import { products as dogProducts } from '../products/dog_product.js';
import { products as catProducts } from '../products/cat_product.js';
import { products as birdProducts } from '../products/bird_product.js';
import { centsToDollars } from '../utilities/money_handling.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import {deliveryOptions} from '../products/delivery_options.js';
import { renderPaymentSummary } from './payment_summary.js';

// 🧠 Function to render the order summary dynamically
export function renderOrderSummary(container = document.querySelector('.js-order-summary')) {
  if (!container) {
    console.error('Order summary container not found');
    return;
  }

  const allProducts = [...dogProducts, ...catProducts, ...birdProducts];
  console.log(cart);
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

    const deliveryOptionId = cartItem.deliveryOptionId;

    // ✅ Robust matching for delivery option
    const deliveryOption = deliveryOptions.find(option => option.id === String(deliveryOptionId));

    if (!deliveryOption) {
      console.error(`⚠️ deliveryOption not found for id: ${deliveryOptionId}`);
      return; // skip rendering this cart item if delivery option is invalid
    }

    const today = dayjs();
    const deliveryDate = today.add(
      deliveryOption.deliveryDays, 'days'
    );

    const dateDisplay = deliveryDate.format(
      'dddd, MMMM D' 
    );

    cartSummaryHTML += ` 
      <div class="cart-item-container
      js-cart-item-container 
      js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date: ${dateDisplay}
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
            <div class="product-quantity js-product-quantity-${matchingProduct.id}">
              <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary">
                Update
              </span>
              <span class="delete-quantity-link link-primary
              js-delete-link
              js-delete-link-${matchingProduct.id}" 
              data-product-id="${matchingProduct.id}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            
            ${deliveryOptionsHTML(matchingProduct, cartItem)}
          </div>
        </div>
      </div>
  `;
  });

  // 🧠 Helper to generate delivery option radio buttons
  function deliveryOptionsHTML(matchingProduct, cartItem) {
    let HTML = '';
    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliveryDate = today.add(
        deliveryOption.deliveryDays, 'days'
      );

      const dateDisplay = deliveryDate.format(
        'dddd, MMMM D' 
      );

      const priceDisplay = deliveryOption.priceCents
      === 0
      ? 'FREE'
      : `$${centsToDollars(deliveryOption.priceCents)} -`;

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
      HTML += `
        <div class="delivery-option js-delivery-option"
        data-product-id="${matchingProduct.id}"
        data-delivery-option-id=${deliveryOption.id}>
          <input type="radio"
            ${isChecked ? 'checked' : ''}
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              ${dateDisplay}
            </div>
            <div class="delivery-option-price">
              ${priceDisplay} Shipping
            </div>
          </div>
        </div>
      `;
    });

    return HTML;
  }

  container.innerHTML = cartSummaryHTML;

  // 🗑️ Handle delete item button
  document.querySelectorAll('.js-delete-link').
    forEach((link) => {
      link.addEventListener('click', () => {
        const { productId } = link.dataset;
        removeFromCart(productId);

        const itemContainer = container.querySelector(
          `.js-cart-item-container-${productId}`
        );
        if (itemContainer) itemContainer.remove();

        updateCartQuantity();
        if (typeof renderPaymentSummary === 'function') {
          renderPaymentSummary();
        }
      });
  });

  // 🧮 Update item count in header
  function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    const homeLink = document.querySelector('.js-return-to-home-link');
    if (homeLink) {
      homeLink.innerHTML = `${cartQuantity} items`;
    }
  }

  updateCartQuantity();

  // ✅ Register event listener for delivery option change
  container.querySelectorAll('.js-delivery-option').forEach((element) => {
    element.addEventListener('click', () => {
      const {productId, deliveryOptionId} = element.dataset;
      updateDeliveryOption(productId, deliveryOptionId);
      renderOrderSummary(container);
      if (typeof renderPaymentSummary === 'function') {
        renderPaymentSummary();
      }
    });
  });
};
