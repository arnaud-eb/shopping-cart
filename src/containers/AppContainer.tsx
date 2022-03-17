import { connect } from "react-redux";

import App from "../components/App";

import { fetch } from "../store/actions";
import data from "../store/data";
import { CartStateType } from "../store/reducer";

const mapStateToProps = (state: CartStateType) => ({
  loading: state.loading,
});

const mapDispatchToProps = {
  fetch: () => fetch(data),
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
