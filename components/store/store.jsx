import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/products";

const store = configureStore({
  reducer: {
    products: counterSlice,
  },
});
export default store;
