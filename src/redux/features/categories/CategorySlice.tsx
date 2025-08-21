import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

interface CategoryState {
  id: string;
  name: string;
  image: string;
}

const initialState: CategoryState[] = [];

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await getDocs(collection(db, "categories"));
    const categories: CategoryState[] = [];
    response.forEach((item) => {
      categories.push({ ...(item.data() as CategoryState) });
    });
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
