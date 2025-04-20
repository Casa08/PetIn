export function showAddedMessage(productId) {
  const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);
  if (!addedMessage) return;

  addedMessage.classList.add('added-to-cart-visible');

  // Clear previous timeout if it exists for this product
  if (showAddedMessage.timeoutIds[productId]) {
    clearTimeout(showAddedMessage.timeoutIds[productId]);
  }

  // Set new timeout to remove the message
  const timeoutId = setTimeout(() => {
    addedMessage.classList.remove('added-to-cart-visible');
  }, 2000);

  // Store timeout ID
  showAddedMessage.timeoutIds[productId] = timeoutId;
}
// 🧠 Store timeout IDs by productId so they don't interfere
showAddedMessage.timeoutIds = {};


