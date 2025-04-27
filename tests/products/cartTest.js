import { cart } from '../../scripts/products/cart.js';

describe('test suite: addToCart', () => {
  beforeEach(() => {
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([
        {
          productId: 'bf3638ce-6aa0-4b85-b27f-e1d07eb678c61',
          quantity: 1,
          deliveryOptionId: '1'
        }
      ]);
    });

    // Reload cart data from storage
    cart.cartItems = JSON.parse(localStorage.getItem('cart'));
  });

  it('adds existing product to cart', () => {
    cart.addToCart('bf3638ce-6aa0-4b85-b27f-e1d07eb678c61', 1);
    expect(cart.cartItems.length).toEqual(1);
    expect(cart.cartItems[0].quantity).toEqual(2);
  });

  it('adds new product to cart', () => {
    // Clear cart manually
    cart.cartItems = [];
    cart.addToCart('bf3638ce-6aa0-4b85-b27f-e1d07eb678c99', 1);
    expect(cart.cartItems.length).toEqual(1);
    expect(cart.cartItems[0].productId).toEqual('bf3638ce-6aa0-4b85-b27f-e1d07eb678c99');
    expect(cart.cartItems[0].quantity).toEqual(1);
  });
});
