export const cart = [{
 productId: 'df3638ce-6aa0-4b85-b27f-e1d07eb678c61',
 quantity: 2
},
{
  productId: 'df3638ce-6aa0-4b85-b27f-e1d07eb6782',
  quantity: 1
}
];

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
    matchingItem.quantity ++;
  } else {
    cart.push({
      productId,
      quantity: 1
    });
  }
}