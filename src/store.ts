import { createStore } from "redux";

import cartReducer from "./reducer";

export const store = createStore(cartReducer);
