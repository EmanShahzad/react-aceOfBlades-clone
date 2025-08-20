import React from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

type Category = {
  id: string;
  name: string;
  image: string;
};

type Props = {
  categories: Category[];
};

const UploadCategories: React.FC<Props> = ({ categories }) => {
  const uploadCategories = async () => {
    try {
      for (const category of categories) {
        await addDoc(collection(db, "categories"), category);
      }
      alert("uploaded successfully!");
    } catch (error) {
      console.error("Error uploading:", error);
    }
  };

  return (
    <div>
      <button
        onClick={uploadCategories}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Upload Cat
      </button>
    </div>
  );
};

export default UploadCategories;
