import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slice/ProductSlice";
import CartSlice from "./slice/CartSlice";



export const store = configureStore({
  reducer: {
    Products: ProductSlice,
    Cart: CartSlice,
  },
});