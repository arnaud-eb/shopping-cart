import { createSelector } from "reselect";

import { CartStateType } from "./reducer";

export const selectCartItems = (state: CartStateType) => state.cartItems;

export const selectTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((sum, item) => sum + item.amount * item.price, 0)
);

export const selectNbrItems = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((sum, item) => sum + item.amount, 0)
);
