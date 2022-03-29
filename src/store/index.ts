import { configureStore } from "@reduxjs/toolkit";

import cartItemsReducer from "./cartItemsSlice";
import loadingReducer from "./loadingSlice";

export const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
