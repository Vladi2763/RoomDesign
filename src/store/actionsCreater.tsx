import { Product, InitialState, Action as ActionType } from "./mainReducer";
import { ThunkDispatch } from "redux-thunk";
import { ActionCreator, Action } from "redux";

import { getProducts as getData } from "../utils/getProducts";

export type Dispatch = ThunkDispatch<InitialState, void, Action<ActionType>>;

export const setProducts: ActionCreator<Action> = (
  products: Array<Product>
) => {
  return {
    products,
    type: "SET_PRODUCTS",
  };
};

export const getTickets = () => {
  return (dispatch: Dispatch) => {
    getData().then((data) => {
      dispatch(setProducts(data));
    });
  };
};

export const selectProduct = (selectedProduct: Product) => {
  return {
    type: "SELECT_PRODUCT",
    selectedProduct,
  };
};

export const switchOn = () => {
  return {
    type: "SWITCH_ON",
  };
};

export const switchOff = () => {
  return {
    type: "SWITCH_OFF",
  };
};
