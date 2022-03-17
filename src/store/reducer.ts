import { CartItemsType } from "./data";

export type CartStateType = {
  cartItems: CartItemsType;
  loading: boolean;
};

const initialState: CartStateType = {
  cartItems: [],
  loading: true,
};

export type BasicCartAction = {
  type: "INC" | "DEC" | "REMOVE";
  payload: number;
};
export type ClearCartAction = {
  type: "CLEAR";
};
export type FetchCartAction = {
  type: "FETCH";
  payload: CartStateType["cartItems"];
};

const cartReducer = (
  state: CartStateType = initialState,
  action: BasicCartAction | ClearCartAction | FetchCartAction
) => {
  switch (action.type) {
    case "FETCH":
      return { ...state, loading: false, cartItems: action.payload };
    case "INC":
      const incCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload)
          return { ...item, amount: item.amount + 1 };
        return item;
      });
      return { ...state, cartItems: incCartItems };
    case "DEC":
      const decCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload)
          return { ...item, amount: item.amount - 1 };
        return item;
      });
      return { ...state, cartItems: decCartItems };
    case "REMOVE":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case "CLEAR":
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};

export default cartReducer;
