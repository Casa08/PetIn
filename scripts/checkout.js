import {cart, removeFromCart} from './products/cart.js';
import { products as dogProducts } from './products/dog_product.js';
import { products as catProducts } from './products/cat_product.js';
import { products as birdProducts } from './products/bird_product.js';
import { centsToDollars } from './utilities/money_handling.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import {deliveryOptions} from './products/delivery_options.js';



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


    cartSummaryHTML += ` 
      <div class="cart-item-container 
      js-cart-item-container-${matchingProduct.id}">
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
            
            ${deliveryOptionsHTML(matchingProduct)}
          </div>
        </div>
      </div>
  `;
});

  function deliveryOptionsHTML(matchingProduct) {
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
      
      HTML += `
        <div class="delivery-option">
          <input type="radio"
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

document.querySelector('.js-order-summary').
  innerHTML = cartSummaryHTML


document.querySelectorAll('.js-delete-link').
  forEach((link) => {
    link.addEventListener('click', () => {
      const { productId } = link.dataset;
      removeFromCart(productId);
    
     const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      
      container.remove();

      updateCartQuantity();
    });
  })

  function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-return-to-home-link').
      innerHTML = `${cartQuantity} items`;
  }
  
  updateCartQuantity();