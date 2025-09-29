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
    removeFromCart: (state, action: PayloadAction<{ itemId: string }>) => {
      const index = state.findIndex(
        (c) => c.productId === action.payload.itemId
      );
      if (index !== -1) {
        state.splice(index, 1); // removes the item completely
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
    resetCart: () => {
      return [];
    },
  },
});

export default CartSlice.reducer;
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  resetCart,
} = CartSlice.actions;
