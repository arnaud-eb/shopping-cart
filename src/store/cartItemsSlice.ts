import { createSlice } from "@reduxjs/toolkit";

import { CartItemsType } from "./data";

const initialState = [] as CartItemsType;

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    clear: (state) => {
      state.splice(0);
    },
    increase: (state, action) => {
      const cartItem = state.find((item) => item.id === action.payload);
      if (typeof cartItem !== "undefined") cartItem.amount += 1;
    },
    decrease: (state, action) => {
      const cartItem = state.find((item) => item.id === action.payload);
      if (typeof cartItem !== "undefined") cartItem.amount -= 1;
    },
    remove: (state, action) => {
      const cartItemIndex = state.findIndex(
        (item) => item.id === action.payload
      );
      if (cartItemIndex >= 0) {
        state.splice(cartItemIndex, 1);
      }
    },
    fetch: (state, action) => {
      state.splice(0, state.length, ...action.payload);
    },
  },
});

export const { clear, increase, decrease, remove, fetch } =
  cartItemsSlice.actions;

export const selectCartItems = (state: {
  cartItems: CartItemsType;
  loading: boolean;
}) => state.cartItems;

export default cartItemsSlice.reducer;
