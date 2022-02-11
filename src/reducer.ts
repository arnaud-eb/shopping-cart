import { CartStateType } from "./context";

type BasicCartAction = {
  type: "INC" | "DEC";
  payload: number;
};
type ClearCartAction = {
  type: "CLEAR";
};
type FetchCartAction = {
  type: "FETCH";
  payload: CartStateType["cartItems"];
};

const cartReducer = (
  state: CartStateType,
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
    case "CLEAR":
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};

export default cartReducer;
