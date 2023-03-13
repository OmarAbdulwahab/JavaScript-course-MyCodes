// Exporting module
// import { addToCart, totalPrice as price, tq } from './shoppingCard.js';

// console.log('Exporting module');

// addToCart('bread', 5);
// console.log(price, tq);

// import add, { cart } from './shoppingCard.js';
// add('pizza', 2);
// add('bread', 5);
// add('apples', 4);
// console.log(cart);

// import * as ShoppingCart from './shoppingCard.js';
// ShoppingCart.addToCart('bread 🍞', 5);
// console.log(ShoppingCart.totalPrice);

import cloneDeep from 'lodash-es';

// Imaginary object
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

// A clone using the object.assign
const stateClone = Object.assign({}, state);
// A clone using lodash-es functions
const stateDeepClone = cloneDeep(state);

// changing something in the original object
state.user.loggedIn = false;
// It will change in case we used object.assign
console.log(stateClone);
// It will not change while using lodash because it is a deep clone better than object.assign
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

import 'core-js/stable';
