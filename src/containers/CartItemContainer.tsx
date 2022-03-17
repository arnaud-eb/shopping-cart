import { connect } from "react-redux";

import CartItem from "../components/CartItem";

import { increase, decrease, remove } from "../store/actions";
import { AppDispatch } from "../store";
import { CartItemsType } from "../store/data";

const mapDispatchToProps = (
  dispatch: AppDispatch,
  ownProps: CartItemsType[number]
) => {
  return {
    increase: () => dispatch(increase(ownProps.id)),
    decrease: () => dispatch(decrease(ownProps.id)),
    remove: () => dispatch(remove(ownProps.id)),
  };
};

const CartItemContainer = connect(null, mapDispatchToProps)(CartItem);

export default CartItemContainer;
