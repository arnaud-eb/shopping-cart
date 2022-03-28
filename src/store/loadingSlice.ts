import { createSlice } from "@reduxjs/toolkit";

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

export default loadingSlice.reducer;
