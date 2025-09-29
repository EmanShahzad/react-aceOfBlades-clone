import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { db } from "../../../firebase/firebase";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { cartSubtotal } from "../cart/cartSubtotalSelector";
interface CheckoutState {
  city: string;
  companyName: string;
  country: string;
  email: string;
  firstName: string;
  notes: string;
  phone: string;
  province: string;
  secondName: string;
  streetName: string;
  unit: string;
  zip: string;
}

interface CartProps {
  productQuantity: number;
  productId: string;
}

interface CartState {
  products: CartProps[];
  cartSubtotal: number;
}

interface OrderState {
  id: string;
  checkoutInfo: CheckoutState;
  cartInfo: CartState;
  shipping: string;
  userId: string;
}

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
  async (_, { getState }) => {
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

    console.log(OrderState, " stored structure");

    const docRef = await addDoc(collection(db, "orders"), OrderState);
    for (const item of products) {
      const productRef = doc(db, "products", item.productId);
      await updateDoc(productRef, {
        stock: increment(-item.productQuantity),
      });
    }
    return { id: docRef.id, ...OrderState };
  }
);

const OrderSlice = createSlice({
  name: "OrderSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addOrder.fulfilled, (state, action) => {
      state.checkoutInfo = action.payload.checkoutInfo;
      state.cartInfo = action.payload.cartInfo;
      state.shipping = action.payload.shipping;
      state.userId = action.payload.userId;
      state.id = action.payload.id;
    });
  },
});

export default OrderSlice.reducer;
