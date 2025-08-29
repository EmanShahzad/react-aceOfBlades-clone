import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import categoryReducer from "./features/categories/CategorySlice";
import cartReducer from "./features/cart/CartSlice";
import shippingReducer from "./features/cart/ShippingSlice";
import checkoutReducer from "./features/checkout/CheckoutSlice";
import orderReducer from "./features/order/OrderSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    cart: cartReducer,
    shipping: shippingReducer,
    checkout: checkoutReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
