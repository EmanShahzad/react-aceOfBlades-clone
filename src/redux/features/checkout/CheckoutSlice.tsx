import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { CheckoutState } from "../../../types/checkout";

const initialState: CheckoutState = {
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
};

const CheckoutSlice = createSlice({
  name: "CheckoutInfo",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{
        field: keyof CheckoutState;
        value: string;
      }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export default CheckoutSlice.reducer;
export const { updateField } = CheckoutSlice.actions;
