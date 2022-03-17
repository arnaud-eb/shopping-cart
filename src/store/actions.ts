import { CartItemsType } from "./data";

import { FetchCartAction, ClearCartAction, BasicCartAction } from "./reducer";

type IdType = CartItemsType[number]["id"];

const fetch = (data: CartItemsType): FetchCartAction => ({
  type: "FETCH",
  payload: data,
});

const increase = (id: IdType): BasicCartAction => ({
  type: "INC",
  payload: id,
});

const decrease = (id: IdType): BasicCartAction => ({
  type: "DEC",
  payload: id,
});

const remove = (id: IdType): BasicCartAction => ({
  type: "REMOVE",
  payload: id,
});

const clear = (): ClearCartAction => ({ type: "CLEAR" });

export { fetch, increase, decrease, remove, clear };
