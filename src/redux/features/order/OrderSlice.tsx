import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { db } from "../../../firebase/firebase";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  increment,
  getDoc,
} from "firebase/firestore";
import { cartSubtotal } from "../cart/cartSubtotalSelector";
import { OrderState } from "../../../types/order";

const initialState: OrderState = {
  id: "",
  checkoutInfo: {
    city: "",
    companyName: "",
    country: "",
    email: "",
    firstName: "",
    notes: "",
    phone: "",
    province: "",
    secondName: "",
    streetName: "",
    unit: "",
    zip: "",
  },
  cartInfo: {
    products: [],
    cartSubtotal: 0,
  },
  shipping: "",
  userId: "",
};

export const addOrder = createAsyncThunk(
  "orders/createOrder",
  async (_, { getState, rejectWithValue }) => {
    const state: RootState = getState() as RootState;
    const products = state.cart;
    const cart = state.checkout;
    const shipping = state.shipping.shipping;
    const userId = "guest";

    const OrderState = {
      checkoutInfo: cart,
      shipping: shipping,
      userId: userId,
      cartInfo: { products: products, cartSubtotal: cartSubtotal(state) },
    };

    if (OrderState.cartInfo.products.length === 0) {
      return rejectWithValue("Cart is empty");
    }

    const docRef = await addDoc(collection(db, "orders"), OrderState);

    for (const item of products) {
      const productRef = doc(db, "products", item.productId);
      const productSnap = await getDoc(productRef);

      if (productSnap.exists()) {
        const currentStock = productSnap.data().stock;
        if (currentStock > 0) {
          const newStock = Math.max(0, currentStock - item.productQuantity);
          await updateDoc(productRef, { stock: newStock });
        }
      }
    }

    return { id: docRef.id, ...OrderState };
  }
);

const OrderSlice = createSlice({
  name: "OrderSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addOrder.fulfilled, (state, action) => {
        state.checkoutInfo = action.payload.checkoutInfo;
        state.cartInfo = action.payload.cartInfo;
        state.shipping = action.payload.shipping;
        state.userId = action.payload.userId;
        state.id = action.payload.id;
      })
      .addCase(addOrder.rejected, (state, action) => {
        console.error("Order failed:", action.payload);
      });
  },
});

export default OrderSlice.reducer;
