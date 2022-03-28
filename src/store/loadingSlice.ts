import { createSlice } from "@reduxjs/toolkit";

import { CartItemsType } from "./data";
import { fetch } from "./cartItemsSlice";

const initialState = true;

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetch, (state) => {
      return !state;
    });
  },
});

export const selectLoading = (state: {
  cartItems: CartItemsType;
  loading: boolean;
}) => state.loading;

export default loadingSlice.reducer;
