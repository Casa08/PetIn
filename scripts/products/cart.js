export class Cart {
  cartItems = undefined;
  #localStorageKey = undefined;

  constructor(localStorageKey) {
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }

  #loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [
      {
        productId: 'df3638ce-6aa0-4b85-b27f-e1d07eb678c61',
        quantity: 2,
        deliveryOptionId: '1'
      },
      {
        productId: 'df3638ce-6aa0-4b85-b27f-e1d07eb6782',
        quantity: 1,
        deliveryOptionId: '2'
      }
    ];
  }

  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(productId, quantity = 1) {
    let matchingItem = this.cartItems.find(item => item.productId === productId);
    
    if (quantity === 1 && typeof document !== 'undefined') {
      const quantitySelector = document.querySelector(
        `.js-quantity-selector-${productId}`
      );
      if (quantitySelector) {
        quantity = Number(quantitySelector.value);
      }
    }
  
    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      this.cartItems.push({
        productId,
        quantity,
        deliveryOptionId: '1'
      });
    }
  
    this.saveToStorage();
  }

  removeFromCart(productId) {
    this.cartItems = this.cartItems.filter(item => item.productId !== productId);
    this.saveToStorage();
  }

  updateDeliveryOption(productId, deliveryOptionId) {
    const matchingItem = this.cartItems.find(item => item.productId === productId);
    
    if (matchingItem) {
      matchingItem.deliveryOptionId = deliveryOptionId;
      this.saveToStorage();
    }
  }
}

// Create and export a default cart instance
const cart = new Cart('cart');
export { cart };