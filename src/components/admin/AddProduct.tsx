import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { addProduct } from "../../redux/features/products/productSlice";
import { ProductState } from "../../types/products";

function AddProduct(props: {
  adding: boolean;
  setAdding: React.Dispatch<React.SetStateAction<boolean>>;
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

  const manageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "stock") {
      if (value < "0") return;
    }
    if (name === "image-address") {
      setNewItem((prev: ProductState) => {
        return {
          ...prev,
          images: [...prev.images, value],
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
  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("adding", newItem);
    dispatch(addProduct(newItem));
    props.setAdding(false);
  };
  return (
    <div className="px-5 pb-5 pt-3">
      <div
        className="py-2"
        style={{ fontFamily: "Oswald", color: "#5f5e5eff" }}
      >
        <h4>Insert a new Product!</h4>
      </div>
      <form onSubmit={addItem}>
        <div className="row g-3">
          <div className="col-sm-6 form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              required
              name="name"
              placeholder="Product name *"
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
              defaultValue=""
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
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
