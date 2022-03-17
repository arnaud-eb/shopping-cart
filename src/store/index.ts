import { createStore } from "redux";

import cartReducer from "./reducer";

export type AppDispatch = typeof store.dispatch;

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(cartReducer, enhancer);

export default store;
