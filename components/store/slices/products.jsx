import { createSlice } from "@reduxjs/toolkit";
// import { log } from "console";

export const ProcuctSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    updateCart: (state, action) => {
      if (action.payload.action === "+") {
        state.products = state.products.map((item) =>
          item.productId === action.payload.productId
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        const product = state.products.find(
          (item) => item.productId === action.payload.productId
        );
        if (product.quantity > 1) {
          state.products = state.products.map((item) =>
            item.productId === action.payload.productId
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          );
        } else {
          state.products = state.products.filter(
            (item) => item.productId !== action.payload.productId
          );
        }
      }
    },
  },
});

export const { addToCart, updateCart } = ProcuctSlice.actions;
export default ProcuctSlice.reducer;
