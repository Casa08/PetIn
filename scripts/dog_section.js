import {cart, addToCart} from './products/cart.js';
import {products} from './products/dog_product.js';

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
   <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>
  
      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>
  
      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="../images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>
  
      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
      </div>
  
      <div class="product-quantity-container">
        <select class="js-quantity-selector-${product.id}">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
  
      <div class="product-spacer"></div>
  
      <div class="added-to-cart js-added-to-cart-${product.id}">
        <img src="../images/icons/checkmark.png">
        Added
      </div>
  
      <button class="add-to-cart-button button-primary js-add-to-cart"
              data-product-id="${product.id}"
      >
        Add to Cart
      </button>
    </div> 
  `;

});

document.querySelector('.js-products-grid').
  innerHTML = productsHTML;

  

  function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity').
      innerHTML = cartQuantity;
  }

  function showAddedMessage(productId) {
    const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);
    addedMessage.classList.add('added-to-cart-visible');

    if (showAddedMessage.timeoutIds[productId]) {
      clearTimeout(showAddedMessage.timeoutIds[productId]);
    }

    const timeoutId = setTimeout(() => {
      addedMessage.classList.remove('added-to-cart-visible');
    }, 2000);

    showAddedMessage.timeoutIds[productId] = timeoutId;
  }
  // 🧠 Store timeout IDs by productId so they don't interfere
  showAddedMessage.timeoutIds = {};
  

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    let addedMessageTimeoutId; //For using closure

    button.addEventListener('click', () => {
      const {productId} = button.dataset;
      
      addToCart(productId);
      updateCartQuantity();
      showAddedMessage(productId);

    });
  });