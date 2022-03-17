import { connect } from "react-redux";

import Cart from "../components/Cart";

import { clear } from "../store/actions";
import { CartStateType } from "../store/reducer";

const mapStateToProps = (state: CartStateType) => {
  const total = state.cartItems.reduce(
    (sum, item) => sum + item.amount * item.price,
    0
  );
  return {
    cartItems: state.cartItems,
    total,
  };
};

const mapDispatchToProps = {
  clear,
};

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
