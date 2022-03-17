import { connect } from "react-redux";

import Navbar from "../components/Navbar";

import { CartStateType } from "../store/reducer";

const mapStateToProps = (state: CartStateType) => {
  const nbrItems = state.cartItems.reduce((sum, item) => sum + item.amount, 0);
  return {
    nbrItems,
  };
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
