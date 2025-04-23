import { renderOrderSummary } from "../../scripts/checkout/order_summary.js";
import { loadFromStorage } from "../../scripts/products/cart.js";

describe('test suite: render order summary', () => {
  const productId1 = 'df3638ce-6aa0-4b85-b27f-e1d07eb678c61';
  const productId2 = 'df3638ce-6aa0-4b85-b27f-e1d07eb6782';

  beforeEach(() => {
    // Clear test container to avoid leftover DOM affecting results
    document.querySelector('.js-test-container').innerHTML = `
      <div class="js-order-summary"></div>
      <div class="js-payment-summary"></div>
    `;

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([
        {
          productId: productId1,
          quantity: 2,
          deliveryOptionId: '1'
        },
        {
          productId: productId2,
          quantity: 1,
          deliveryOptionId: '2'
        }
      ]);
    });

    loadFromStorage();
    renderOrderSummary();
  });

  it('displays cart', () => {
    expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(2);
    expect(document.querySelector(`.js-product-quantity-${productId1}`).innerText).toContain('Quantity: 2');
    expect(document.querySelector(`.js-product-quantity-${productId2}`).innerText).toContain('Quantity: 1');

    // Clear test DOM again after test
    document.querySelector('.js-test-container').innerHTML = '';
  });

  it('removes a product', () => {
    document.querySelector(`.js-delete-link-${productId1}`).click();
    expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(1);
    expect(document.querySelectorAll(`.js-cart-item-container-${productId1}`).length).toEqual(0);

    document.querySelector(`.js-delete-link-${productId2}`).click();
    expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(0);
    expect(document.querySelectorAll(`.js-cart-item-container-${productId2}`).length).toEqual(0);

    // Clear test DOM again after test
    document.querySelector('.js-test-container').innerHTML = '';
  });
});
