import { createSelector } from "reselect";
import { CartItemsType } from "./data";

export interface IState {
  cartItems: CartItemsType;
  loading: boolean;
}

export const selectCartItems = (state: IState) => state.cartItems;

export const selectNbrItems = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((sum, item) => sum + item.amount, 0)
);

export const selectTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((sum, item) => sum + item.amount * item.price, 0)
);

export const selectLoading = (state: IState) => state.loading;
