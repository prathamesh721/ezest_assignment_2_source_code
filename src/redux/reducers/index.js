import { combineReducers } from "redux";
import {cartSlice} from '../cartSlice'
import { productsReducer, selectedProductsReducer, cartReducer, handleCart } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  allCartItems: cartReducer,
  handlecartSlice: cartSlice.reducer,

});
export default reducers;
