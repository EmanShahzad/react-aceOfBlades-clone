import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

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
