import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  name: string;
  price: number;
  isOnSale: boolean;
  newPrice?: number;
  stock: number;
  categoryId: string;
  specifications: string[];
  images: string[];
}

const initialState: ProductState = {
  name: "",
  price: 0,
  isOnSale: false,
  newPrice: 0,
  stock: 0,
  categoryId: "",
  specifications: [],
  images: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});
