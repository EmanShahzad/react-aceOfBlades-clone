import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { RootState } from "../../store";
import { where, query } from "firebase/firestore";
import { ProductState } from "../../../types/products";

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

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (newProduct: Omit<ProductState, "id">, { rejectWithValue }) => {
    try {
      console.log("adding in redux hello");
      // 🔹 Check stock
      if (newProduct.stock <= 0) {
        console.log("rejected");
        return rejectWithValue("Stock cannot be negative or zero!");
      }

      // 🔹 Check if product exists (name + category)
      const q = query(
        collection(db, "products"),
        where("name", "==", newProduct.name),
        where("categoryId", "==", newProduct.categoryId)
      );

      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        return rejectWithValue("Product already exists!");
      }

      // 🔹 Add product
      const docRef = await addDoc(collection(db, "products"), newProduct);
      return { id: docRef.id, ...newProduct };
    } catch (error) {
      console.error("Error adding product:", error);
      return rejectWithValue("Something went wrong while adding product");
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (productId: string) => {
    const docRef = doc(db, "products", productId);
    console.log("doing");
    await deleteDoc(docRef);
    return productId;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product: ProductState, { getState }) => {
    const productRef = doc(db, "products", product.id);

    console.log("ok");
    const state: RootState = getState() as RootState;
    const categories = state.categories;
    if (categories.find((cat) => cat.id === product.categoryId)) {
      if (product.images[0] === "")
        product.images[0] =
          "https://theaceofblades.co.za/wp-content/uploads/woocommerce-placeholder-600x600.png";
      if (product.newPrice) {
        product.isOnSale = true;
        await updateDoc(productRef, {
          name: product.name,
          price: product.price,
          isOnSale: product.isOnSale,
          newPrice: product.newPrice ?? null,
          stock: product.stock,
          categoryId: product.categoryId,
          specifications: product.specifications,
          images: product.images,
        });
      } else {
        product.isOnSale = false;
        await updateDoc(productRef, {
          name: product.name,
          price: product.price,
          isOnSale: product.isOnSale,
          newPrice: null,
          stock: product.stock,
          categoryId: product.categoryId,
          specifications: product.specifications,
          images: product.images,
        });
      }
    } else {
      alert("Category does not exist!!!");
    }
    return product;
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
    builder.addCase(addProduct.fulfilled, (state, action) => {
      console.log("done added!");
      state.push(action.payload);
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      return state.filter((p) => p.id !== action.payload);
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      console.log("uploaded", action.payload);
      const index = state.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    });
  },
});

export default productSlice.reducer;
