import { createSelector } from "reselect";

import { RootState } from ".";

export const selectCartItems = (state: RootState) => state.cartItems;

export const selectNbrItems = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((sum, item) => sum + item.amount, 0)
);

export const selectTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((sum, item) => sum + item.amount * item.price, 0)
);

export const selectLoading = (state: RootState) => state.loading;
