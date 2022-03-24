import { connect } from "react-redux";

import Cart from "../components/Cart";

import { clear } from "../store/actions";
import { CartStateType } from "../store/reducer";
import { selectTotal } from "../store/selectors";

const mapStateToProps = (state: CartStateType) => {
  const total = selectTotal(state);
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
