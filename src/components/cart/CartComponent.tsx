import { useContext } from "react";
import { CartContext } from "../CartManager";

function CartComponent() {
  const CartItems = useContext(CartContext);
  if (!CartItems) throw new Error("error");
  let { productQuantity, setProductQuantity } = CartItems;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const newQuantity = Number(value);
    setProductQuantity(newQuantity);
  };
  return (
    <section>
      <div className="container">
        <div className="d-flex justify-content-center align-items-start gap-3 py-5">
          <div style={{ width: "60%" }}>
            <table className="table">
              <thead className="table-secondary">
                <tr
                  style={{
                    height: "50px",
                    fontFamily: "Barlow Semi Condensed",
                  }}
                  className="align-middle fs-5 fw-semibold"
                >
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th style={{ width: "30%", color: "#4B4F58" }} scope="col">
                    Product
                  </th>
                  <th style={{ color: "#4B4F58" }} scope="col">
                    Price
                  </th>
                  <th style={{ color: "#4B4F58" }} scope="col">
                    Quantity
                  </th>
                  <th style={{ color: "#4B4F58" }} scope="col">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle">
                  <th scope="row">
                    <i className="bi bi-x-circle text-secondary fs-5"></i>
                  </th>
                  <td className="w-auto">
                    <img
                      style={{ width: "70px" }}
                      src="https://theaceofblades.co.za/wp-content/uploads/IMG_5745-600x600.jpg"
                      alt=""
                    />
                  </td>
                  <td className="fw-medium">
                    AOB-2452 Handmade Damascus Chef’s Knife
                  </td>
                  <td>R990.00</td>
                  <td>
                    <div
                      className="d-flex border justify-content-around align-items-center"
                      style={{ width: "150px" }}
                    >
                      <button
                        className="text-center btn rounded-0 w-100"
                        onClick={() => {
                          if (productQuantity > 1)
                            setProductQuantity(--productQuantity);
                        }}
                      >
                        -
                      </button>
                      <span className="w-auto border-start border-end text-center">
                        <input
                          className="border-0 shadow-none text-center p-1"
                          style={{ width: "50px" }}
                          type="number"
                          name="quantity"
                          id="order-quantity"
                          value={productQuantity}
                          onChange={handleChange}
                        />
                      </span>
                      <button
                        className="text-center btn rounded-0 w-100"
                        onClick={() => {
                          setProductQuantity(++productQuantity);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>R990.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table className="table">
              <thead className="table-secondary">
                <tr style={{ height: "50px" }}>
                  <th
                    scope="col"
                    className="align-middle fs-5 fw-semibold"
                    style={{ fontFamily: "Barlow Semi Condensed" }}
                  >
                    Cart totals
                  </th>
                  <th className="" scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle">
                  <td className="py-4">Subtotal</td>
                  <td>R1,980.00</td>
                </tr>
                <tr className="align-middle">
                  <td className="py-4">Shipping</td>
                  <td>
                    <div>
                      <div className="form-check py-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="radioDefault"
                          id="radioDefault1"
                        />
                        <label className="form-check-label">
                          Free shipping
                        </label>
                      </div>
                      <div className="form-check py-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="radioDefault"
                          id="radioDefault2"
                        />
                        <label className="form-check-label">
                          Flat rate: R75.00 <br /> Shipping to Northern Cape
                        </label>
                      </div>
                      <span className="btn fw-medium ps-4 py-2">
                        Change address
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td className="py-3">Total</td>
                  <td>R1,980.00</td>
                </tr>
              </tbody>
            </table>
            <div className="w-100">
              <div className="py-2">Have a coupon?</div>
              <button
                className="btn btn-dark rounded-0 py-4 w-100 my-2"
                onClick={() => {
                  console.log(productQuantity);
                }}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CartComponent;
