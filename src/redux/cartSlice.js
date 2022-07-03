import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addProdToCart(state, action) {
      console.log(current(state), action, state.items);

      const product = action.payload;
      const existingCartItem = state.items.find(
        (curElem) => curElem.id === product.id
      );

      if (existingCartItem) {
        console.log(existingCartItem);

        return state.items.map((curElem) =>
          curElem.id === product.id
            ? { ...curElem, qnty: curElem.qty + 1 }
            : curElem
        );
      } else {
        const product = action.payload;
        state.items.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

export const productsActions = cartSlice.actions;
export default cartSlice;
