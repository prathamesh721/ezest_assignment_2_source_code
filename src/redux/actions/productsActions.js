import { type } from "@testing-library/user-event/dist/type";
import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};


export const setCartItems = (cartItems) => {
  return {
    type: ActionTypes.SET_CARTITEMS,
    payload: cartItems,
  };
};


//For Add Items to cart

export const addCart = (product) => {
  return {
    type: 'ADDITEM',
    payload: product
  }
}

//For Delete Items from cart

export const delCart = (product) => {
  return {
    type: 'DELITEM',
    payload: product
  }
}
