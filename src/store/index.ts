// import { createStore } from "redux";

// import cartReducer from "../reducer";

// const enhancer =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// export const store = createStore(cartReducer, enhancer);

import { configureStore } from "@reduxjs/toolkit";
import cartItemsReducer from "./cartItemsSlice";
import loadingReducer from "./loadingSlice";

export const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
    loading: loadingReducer,
  },
});
