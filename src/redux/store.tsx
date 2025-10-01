import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import categoryReducer from "./features/categories/CategorySlice";
import cartReducer from "./features/cart/CartSlice";
import shippingReducer from "./features/cart/ShippingSlice";
import checkoutReducer from "./features/checkout/CheckoutSlice";
import orderReducer from "./features/order/OrderSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const rootReducers = combineReducers({
  products: productReducer,
  categories: categoryReducer,
  cart: cartReducer,
  shipping: shippingReducer,
  checkout: checkoutReducer,
  order: orderReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
