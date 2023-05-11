import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems, product) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === product.id)

  if(existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    )
  }
  return [...cartItems, { ...product, quantity: 1 }]
};

const removeCartItem = (cartItems, item) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id)
  
  if(existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
  };

  return cartItems.map((cartItem) => cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
    )
};

const clearCartItem = (cartItems, item) => cartItems.filter((cartItem) => cartItem.id !== item.id);

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, product) => {
  const newCartItems = addCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItem) => {
  const newCartItems = removeCartItem(cartItems, cartItem);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItem) => {
  const newCartItems = clearCartItem(cartItems, cartItem);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
