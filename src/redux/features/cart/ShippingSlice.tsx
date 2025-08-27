import { createSlice } from "@reduxjs/toolkit";

const shippingSlice = createSlice({
  name: "shipping",
  initialState: { shipping: "" },
  reducers: {
    setShipping: (state, action) => {
      state.shipping = action.payload;
    },
  },
});

export const { setShipping } = shippingSlice.actions;
export default shippingSlice.reducer;
