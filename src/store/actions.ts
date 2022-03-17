import { CartItemsType } from "./data";

type IdType = CartItemsType[number]["id"];

const fetch = (data: CartItemsType) => ({ type: "FETCH", payload: data });

const increase = (id: IdType) => ({ type: "INC", payload: id });

const decrease = (id: IdType) => ({ type: "DEC", payload: id });

const remove = (id: IdType) => ({ type: "REMOVE", payload: id });

const clear = () => ({ type: "CLEAR" });

export { fetch, increase, decrease, remove, clear };
