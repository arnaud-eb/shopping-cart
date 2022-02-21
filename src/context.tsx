import * as React from "react";

import cartReducer from "./reducer";
import data from "./data";

export type CartStateType = {
  cartItems: typeof data;
  loading: boolean;
};

type IdType = typeof data[number]["id"];

interface CartContextType extends CartStateType {
  increase: (id: IdType) => void;
  decrease: (id: IdType) => void;
  remove: (id: IdType) => void;
  clear: () => void;
}

const initialState: CartStateType = {
  cartItems: [],
  loading: true,
};

const CartContext = React.createContext({} as CartContextType);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(cartReducer, initialState);

  const fetch = () => {
    setTimeout(() => {
      dispatch({ type: "FETCH", payload: data });
    }, 100);
  };

  const increase = (id: IdType) => {
    dispatch({ type: "INC", payload: id });
  };

  const decrease = (id: IdType) => {
    dispatch({ type: "DEC", payload: id });
  };

  const remove = (id: IdType) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const clear = () => {
    dispatch({ type: "CLEAR" });
  };

  React.useEffect(() => {
    fetch();
  }, []);

  return (
    <CartContext.Provider
      value={{ ...state, increase, decrease, remove, clear }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return React.useContext(CartContext);
};

export { CartContext, useCartContext };
export default CartProvider;
