import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

interface CategoryState {
  id: string;
  name: string;
  image: string;
}

const initialState: CategoryState[] = [];
const categories: CategoryState[] = [];

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    console.log("calling");
    try {
      const response = await getDocs(collection(db, "categories"));

      response.forEach((item) => {
        categories.push({ ...(item.data() as CategoryState) });
      });
    } catch (err) {
      console.log(err, "fetching cateogires");
      throw err;
    }
    return categories;
  }
);
const CategorySlice = createSlice({
  name: "Categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default CategorySlice.reducer;
