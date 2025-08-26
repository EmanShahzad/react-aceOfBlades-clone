import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface CartProps {
  productQuantity: number;
  productId: string;
}

const initialState: CartProps[] = [];

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ itemId: string; quantity: number }>
    ) => {
      const item = state.find((c) => c.productId === action.payload.itemId);
      if (item) {
        item.productQuantity += action.payload.quantity;
      } else {
        state.push({
          productId: action.payload.itemId,
          productQuantity: action.payload.quantity,
        });
      }
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.find((c) => c.productId === action.payload);
      if (item) {
        item.productQuantity += 1; // immer allows safe mutation
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.find((c) => c.productId === action.payload);
      if (item && item.productQuantity > 1) {
        item.productQuantity -= 1;
      }
    },
  },
});

export default CartSlice.reducer;
export const { addToCart, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;
