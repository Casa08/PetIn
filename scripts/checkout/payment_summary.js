import { cart } from '../products/cart.js';
import { products as dogProducts } from '../products/dog_product.js';
import { products as catProducts } from '../products/cat_product.js';
import { products as birdProducts } from '../products/bird_product.js';
import { deliveryOptions } from '../products/delivery_options.js';
import { centsToDollars } from '../utilities/money_handling.js';

const allProducts = [...dogProducts, ...catProducts, ...birdProducts];

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const deliveryOptionId = cartItem.deliveryOptionId;

    // 🛒 Find matching product
    let matchingProduct = allProducts.find(product => product.id === productId);

    // 📦 Find matching delivery option
    let deliveryOption = deliveryOptions.find(option => option.id === deliveryOptionId);

    if (matchingProduct) {
      productPriceCents += matchingProduct.priceCents * cartItem.quantity;
    }

    if (deliveryOption) {
      shippingPriceCents += deliveryOption.priceCents;
    }
  });

  const totalBeforeTax = productPriceCents + shippingPriceCents;
  const taxCents = totalBeforeTax * 0.1;
  const totalCents = totalBeforeTax + taxCents;

  const paymentSummaryHTML = `

      <div class="payment-summary-title">
        Order Summary
      </div>

      <div class="payment-summary-row">
        <div>Items (3):</div>
        <div class="payment-summary-money">$${centsToDollars(productPriceCents)}</div>
      </div>

      <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">$${centsToDollars(shippingPriceCents)}</div>
      </div>

      <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">$${centsToDollars(totalBeforeTax)}</div>
      </div>

      <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">$${centsToDollars(taxCents)}</div>
      </div>

      <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">$${centsToDollars(totalCents)}</div>
      </div>

      <button class="place-order-button button-primary">
        Place your order
      </button>
    
  `;

  document.querySelector('.js-payment-summary').
    innerHTML = paymentSummaryHTML;
}
