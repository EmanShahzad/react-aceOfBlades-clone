import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import categoryReducer from "./features/categories/CategorySlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
