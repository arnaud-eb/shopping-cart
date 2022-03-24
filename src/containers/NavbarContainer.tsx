import { connect } from "react-redux";

import Navbar from "../components/Navbar";

import { CartStateType } from "../store/reducer";
import { selectNbrItems } from "../store/selectors";

const mapStateToProps = (state: CartStateType) => {
  const nbrItems = selectNbrItems(state);
  return {
    nbrItems,
  };
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
