import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};

const initialCartState = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const cartReducer = (state = initialCartState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CARTITEMS:
      return { ...state, cartItems: payload };
    default:
      return state;
  }
}


const cart = [];

export const handleCart = (state = cart, action) => {
  const product = action.payload
  switch (action.type) {
    case 'ADDITEM':
      // Check if product exists 

      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // Increment the Quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x);

      } else {
        const product = action.payload
        return [
          ...state,
          {
            ...product,
            qty: 1,

          }
        ]

      }


      break;
    case 'DELITEM':
      const exist1 = state.find((x) => x.id === product.id);

      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id)
      } else {
        return state.map((x) => 
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        )
      }
      break;

    default: 
    return state;
      break;

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));  
  }
}