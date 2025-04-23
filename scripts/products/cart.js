export let cart;

loadFromStorage();

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart')) || [
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

export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId, quantity = 1) {
  let matchingItem = cart.find(item => item.productId === productId);
  
  // Try to get quantity from DOM if not provided
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
    cart.push({
      productId,
      quantity,
      deliveryOptionId: '1'
    });
  }

  saveToStorage();
}

export function removeFromCart(productId) {
  cart = cart.filter(item => item.productId !== productId);
  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  const matchingItem = cart.find(item => item.productId === productId);
  
  if (matchingItem) {
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
  }
}