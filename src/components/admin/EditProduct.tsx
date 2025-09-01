import React, { useEffect, useState } from "react";
import { updateProduct } from "../../redux/features/products/productSlice";
import { useAppDispatch } from "../../redux/hooks";
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

function EditProduct(props: {
  item: ProductState;
  setEditingId: React.Dispatch<React.SetStateAction<string>>;
}) {
  const dispatch = useAppDispatch();
  let [newItem, setNewItem] = useState<ProductState>({
    id: "",
    name: "",
    price: 0,
    isOnSale: false,
    newPrice: 0,
    stock: 0,
    categoryId: "",
    specifications: [],
    images: [],
  });

  useEffect(() => {
    if (props.item) {
      setNewItem(props.item);
    }
  }, [props.item]);
  const manageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "stock") {
      if (value < "0") {
        alert("stock cannot be negative. Go!");
        return;
      }
    }
    if (name === "image-address") {
      setNewItem((prev: ProductState) => {
        return {
          ...prev,
          images: [value],
        };
      });
    } else {
      setNewItem((prev: ProductState) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  };
  const uploadData = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("uploading", newItem);
    props.setEditingId("");
    dispatch(updateProduct(newItem));
  };

  return (
    <div className="px-5 pb-5 pt-3">
      <div
        className="py-2"
        style={{ fontFamily: "Oswald", color: "#5f5e5eff" }}
      >
        <h4>Edit Here</h4>
      </div>
      <form onSubmit={uploadData}>
        <div className="row g-3">
          <div className="col-sm-6 form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              required
              name="name"
              placeholder="Product name *"
              defaultValue={props.item.name}
              onChange={manageInput}
            />
            <label htmlFor="first-name" style={{ paddingLeft: "20px" }}>
              Product name
              <span className="fw-bold" style={{ color: "red" }}>
                *
              </span>
            </label>
          </div>
          <div className="col-sm-6 form-floating">
            <input
              type="text"
              id="category-id"
              className="form-control"
              required
              name="categoryId"
              placeholder="Category Id *"
              defaultValue={props.item.categoryId}
              onChange={manageInput}
            />
            <label htmlFor="categoryId" style={{ paddingLeft: "20px" }}>
              Category Id
              <span className="fw-bold" style={{ color: "red" }}>
                *
              </span>
            </label>
          </div>
          <div className="col-sm-6 form-floating">
            <input
              type="text"
              className="form-control"
              id="stock"
              required
              name="stock"
              placeholder="Stock *"
              defaultValue={props.item.stock}
              onChange={manageInput}
            />
            <label htmlFor="stock" style={{ paddingLeft: "20px" }}>
              Stock
              <span className="fw-bold" style={{ color: "red" }}>
                *
              </span>
            </label>
          </div>
          <div className="col-sm-6 form-floating">
            <input
              type="text"
              className="form-control "
              id="price"
              required
              name="price"
              placeholder="Price *"
              defaultValue={props.item.price}
              onChange={manageInput}
            />

            <label htmlFor="price" style={{ paddingLeft: "20px" }}>
              Price
              <span className="fw-bold" style={{ color: "red" }}>
                *
              </span>
            </label>
          </div>
          <div className="col-sm-6 form-floating">
            <input
              type="text"
              className="form-control"
              id="newPrice"
              name="newPrice"
              placeholder="Discounted Price"
              defaultValue={props.item.newPrice}
              onChange={manageInput}
            />
            <label htmlFor="house-number" style={{ paddingLeft: "20px" }}>
              Discounted Price
            </label>
          </div>
          <div className="col-sm-6 form-floating">
            <input
              type="text"
              id="image-address"
              className="form-control"
              name="image-address"
              placeholder="Image URL"
              defaultValue={props.item.images[0]}
              onChange={manageInput}
            />
            <label htmlFor="unit-address" style={{ paddingLeft: "20px" }}>
              Image URL
            </label>
          </div>
          <div className="col-12">
            <button
              className="btn btn-dark p-3 w-100 fs-5 fw-medium"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default EditProduct;
