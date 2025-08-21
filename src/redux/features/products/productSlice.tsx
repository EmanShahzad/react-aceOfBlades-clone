import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { useState } from "react";

interface ProductState {
  id: string;
  name: string;
  price: number;
  isOnSale: boolean;
  newPrice?: number;
  stock: number;
  categoryId: string;
  specifications: string[];
  images: string[];
}

const initialState: ProductState[] = [];

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await getDocs(collection(db, "products"));
    const products: ProductState[] = [];
    response.forEach((item) => {
      products.push({ ...(item.data() as ProductState), id: item.id });
    });
    return products;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default productSlice.reducer;
