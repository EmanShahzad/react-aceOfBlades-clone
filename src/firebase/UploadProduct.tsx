import React from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

type Product = {
  name: string;
  price: number;
  isOnSale: boolean;
  newPrice?: number;
  stock: number;
  categoryId: string;
  specifications: string[];
  images: string[];
};

type Props = {
  products: Product[];
};

const UploadProduct: React.FC<Props> = ({ products }) => {
  const uploadProducts = async () => {
    try {
      for (const product of products) {
        await addDoc(collection(db, "products"), product);
      }
      alert("Products uploaded successfully!");
    } catch (error) {
      console.error("Error uploading products:", error);
    }
  };

  return (
    <div>
      <button
        onClick={uploadProducts}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Upload Products
      </button>
    </div>
  );
};

export default UploadProduct;
