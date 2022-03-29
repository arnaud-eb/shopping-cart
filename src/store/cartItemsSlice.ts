import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartItemsType } from "./data";

const initialState: CartItemsType = [];

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    clear: (state) => {
      state.splice(0);
    },
    increase: (state, action: PayloadAction<number>) => {
      const cartItem = state.find((item) => item.id === action.payload);
      if (typeof cartItem !== "undefined") cartItem.amount += 1;
    },
    decrease: (state, action: PayloadAction<number>) => {
      const cartItem = state.find((item) => item.id === action.payload);
      if (typeof cartItem !== "undefined") cartItem.amount -= 1;
    },
    remove: (state, action: PayloadAction<number>) => {
      const cartItemIndex = state.findIndex(
        (item) => item.id === action.payload
      );
      if (cartItemIndex >= 0) {
        state.splice(cartItemIndex, 1);
      }
    },
    fetch: (state, action: PayloadAction<CartItemsType>) => {
      state.splice(0, state.length, ...action.payload);
    },
  },
});

export const { clear, increase, decrease, remove, fetch } =
  cartItemsSlice.actions;

export default cartItemsSlice.reducer;
