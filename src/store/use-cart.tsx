import { useSelector } from "react-redux";

import * as actions from "./actions";
import useActions from "./use-actions";
import { CartStateType } from "./reducer";

const useCart = () => {
  const loading = useSelector<CartStateType, CartStateType["loading"]>(
    (state) => state.loading
  );
  const cartItems = useSelector<CartStateType, CartStateType["cartItems"]>(
    (state) => state.cartItems
  );
  const actionsCreators = useActions(actions);

  return { loading, cartItems, ...actionsCreators };
};

export default useCart;
