export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [{
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

export function addToCart(productId) {
  let matchingItem; 

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
       matchingItem = cartItem;
    }
  });

  const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`
  );
  const quantity = Number(quantitySelector.value);

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
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  })

  cart = newCart;

  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem; 

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
       matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}