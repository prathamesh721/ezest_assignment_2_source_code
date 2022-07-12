import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addProdToCart(state, action) {
      // console.log(current(state), action, state.items);

      // const product = action.payload;
      // const existingCartItem = state.items.find(
      //   (curElem) => curElem.id === product.id
      // );

      // if (existingCartItem) {
      //   console.log(existingCartItem);

      //   return state.items.map((curElem) =>
      //     curElem.id === product.id
      //       ? { ...curElem, qnty: curElem.qty + 1 }
      //       : curElem
      //   );
      // } else {
      //   const product = action.payload;
      //   state.items.push({ ...product, quantity: 1 });
      // }
      // localStorage.setItem("items", JSON.stringify(state.items));


      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)

      if (itemIndex >= 0) {
        state.items[itemIndex].cartQuantity += 1

      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.items.push(tempProduct)

      }

      localStorage.setItem("items", JSON.stringify(state.items))
    },
    removeFromCart(state, action) {
      const nextCartItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      state.items = nextCartItems;
      localStorage.setItem("items", JSON.stringify(state.items));
    },

    decreaseCart(state, action) {
      const itemIndex = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.items[itemIndex].cartQuantity > 1) {
        state.items[itemIndex].cartQuantity -= 1;
      } else if (state.items[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.items.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );

        state.items = nextCartItems;
      }
      // state.cartTotalAmount -= state.items[itemIndex].price;
      

      localStorage.setItem("items", JSON.stringify(state.items));
    },
    increaseCart(state, action) {
      const itemIndex = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      state.items[itemIndex].cartQuantity += 1;
      state.cartTotalAmount += state.items[itemIndex].price;

      localStorage.setItem("items", JSON.stringify(state.items));
    },
    getTotals(state, action) {
      let { total, quantity } = state.items.reduce((cartTotal, item) => {
        const { price, cartQuantity } = item
        const itemTotal = price * cartQuantity;

        cartTotal.total += itemTotal
        cartTotal.quantity += cartQuantity

        return cartTotal
      }, {
        total: 0,
        quantity: 0
      })

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;

    }
  },
});

export const { addProdToCart, removeFromCart, decreaseCart, getTotals, increaseCart } =
  cartSlice.actions;
export default cartSlice;
