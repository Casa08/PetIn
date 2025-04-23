import {cart, addToCart, loadFromStorage} from '../../scripts/products/cart.js';

describe('test suite: addToCart', () => {
  it('add existing product to cart', () => {
    spyOn(localStorage, 'setItem');

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: 'bf3638ce-6aa0-4b85-b27f-e1d07eb678c61',
        quantity: 1,
        deliverOptionId: '1'
      }]);
    });
    //console.log(localStorage.getItem('cart'));
    loadFromStorage();

    addToCart('bf3638ce-6aa0-4b85-b27f-e1d07eb678c61');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('bf3638ce-6aa0-4b85-b27f-e1d07eb678c61');
    expect(cart[0].quantity).toEqual(2);
  });

  it('add new product to cart', () => {
    spyOn(localStorage, 'setItem').and.callFake(() => {});

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });
    //console.log(localStorage.getItem('cart'));
    loadFromStorage();
    
    addToCart('bf3638ce-6aa0-4b85-b27f-e1d07eb678c61');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('bf3638ce-6aa0-4b85-b27f-e1d07eb678c61');
    expect(cart[0].quantity).toEqual(1);
  });
});
