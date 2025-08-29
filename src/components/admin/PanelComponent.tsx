import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import { deleteProduct } from "../../redux/features/products/productSlice";

function PanelComponent() {
  const products = useAppSelector((state) => {
    return state.products;
  });
  const dispatch = useAppDispatch();

  let [adding, setAdding] = useState<boolean>(false);
  let [editingId, setEditingId] = useState<string>("");
  return (
    <section>
      <div className="container">
        <div
          className="py-3 pt-5 fs-1 fw-medium text-uppercase"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          GENERAL LIST OF PRODUCTS
        </div>
        <div className="my-3">
          <div className="d-flex flex-column border">
            <div className="d-flex justify-content-between align-items-center p-3">
              {adding === false ? (
                <button
                  type="button"
                  className="btn btn-dark"
                  data-bs-toggle="button"
                  onClick={() => {
                    setAdding(true);
                  }}
                >
                  Add Product
                </button>
              ) : (
                <span
                  onClick={() => {
                    setAdding(false);
                  }}
                >
                  <i className="bi bi-x-circle text-secondary fs-5"></i>
                </span>
              )}

              <div
                style={{ fontFamily: "Oswald", color: "#4B4F58" }}
                className="fs-5"
              >
                Total Products: {products.length}
              </div>
            </div>
            {adding ? <AddProduct adding setAdding={setAdding} /> : null}
          </div>
          <div className="table-responsive small">
            <table className="table align-middle">
              <thead className="table-secondary">
                <tr
                  style={{
                    fontFamily: "Barlow Semi Condensed",
                  }}
                  className="fs-5 fw-semibold "
                >
                  <th scope="col" style={{ color: "#4B4F58" }}>
                    Image
                  </th>{" "}
                  <th style={{ color: "#4B4F58" }} scope="col">
                    Product Name
                  </th>
                  <th style={{ color: "#4B4F58" }} scope="col">
                    Category ID
                  </th>{" "}
                  <th style={{ color: "#4B4F58" }} scope="col">
                    Price
                  </th>
                  <th style={{ color: "#4B4F58" }} scope="col">
                    Stock
                  </th>
                  <th style={{ color: "#4B4F58" }} scope="col">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {products.map((item) => (
                  <>
                    <tr>
                      <td>
                        <img
                          style={{
                            width: "50px",
                          }}
                          src={item.images[0]}
                          alt=""
                        />
                      </td>{" "}
                      <td className="fw-medium fs-6">{item.name}</td>{" "}
                      <td className="fw-medium fs-6">{item.categoryId}</td>
                      <td className="fw-medium fs-6">R{item.price}</td>{" "}
                      <td className="fw-medium fs-6">{item.stock}</td>{" "}
                      <td scope="col">
                        <div className="d-flex gap-3">
                          <button
                            className="btn btn-outline-secondary rounded-0 text-black text-uppercase border-2 btn-sm px-2"
                            onClick={() => {
                              setEditingId(item.id);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-outline-secondary rounded-0 text-black text-uppercase border-2 btn-sm px-2"
                            onClick={() => {
                              dispatch(deleteProduct(item.id));
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                    {editingId === item.id ? (
                      <tr>
                        <td colSpan={6}>
                          <EditProduct
                            item={item}
                            setEditingId={setEditingId}
                          />
                        </td>
                      </tr>
                    ) : null}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PanelComponent;
