import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/features/cart/CartSlice";
import { NavLink } from "react-router-dom";
import { setShipping } from "../../redux/features/cart/ShippingSlice";
import { cartSubtotal } from "../../redux/features/cart/cartSubtotalSelector";

function CartComponent() {
  const dispatch = useAppDispatch();
  const countTotal = useAppSelector(cartSubtotal);
  const cart = useAppSelector((state) => {
    return state.cart;
  });

  const products = useAppSelector((state) => {
    return state.products;
  });
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  // const countTotal = () => {
  //   let total = cart.reduce((acc, item) => {
  //     const product = products.find((p) => p.id === item.productId);
  //     if (product) {
  //       return acc + product.price * item.productQuantity;
  //     }
  //     return acc;
  //   }, 0);

  //   return total;
  // };

  const handleChange = (value: string) => {
    dispatch(setShipping(value));
  };

  const shipping = useAppSelector((state) => {
    return state.shipping.shipping;
  });

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
                {cart.map((item) =>
                  products.map((p) =>
                    p.id === item.productId ? (
                      <tr className="align-middle">
                        <th scope="row">
                          <i
                            className="bi bi-x-circle text-secondary fs-5"
                            onClick={() => {
                              dispatch(removeFromCart({ itemId: p.id }));
                            }}
                          ></i>
                        </th>
                        <td className="w-auto">
                          <img
                            style={{ width: "70px" }}
                            src={p.images[0]}
                            alt=""
                          />
                        </td>
                        <td className="fw-medium">{p.name}</td>
                        <td>R{p.price}</td>
                        <td>
                          <div
                            className="d-flex border justify-content-around align-items-center"
                            style={{ width: "150px" }}
                          >
                            <button
                              className="text-center btn rounded-0 w-100"
                              onClick={() => {
                                if (item.productQuantity > 1)
                                  dispatch(decreaseQuantity(item.productId));
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
                                value={item.productQuantity}
                              />
                            </span>
                            <button
                              className="text-center btn rounded-0 w-100"
                              onClick={() => {
                                if (item.productQuantity < p.stock)
                                  dispatch(increaseQuantity(item.productId));
                              }}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>R{(p.price * item.productQuantity).toFixed(2)}</td>
                      </tr>
                    ) : null
                  )
                )}
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
                  <td>R{countTotal.toFixed(2)}</td>
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
                          value="free"
                          onChange={(e) => handleChange(e.target.value)}
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
                          value="flat"
                          onChange={(e) => handleChange(e.target.value)}
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
                  <td>
                    R
                    {shipping === "flat"
                      ? (countTotal + 75).toFixed(2)
                      : countTotal.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="w-100">
              <div className="py-2">Have a coupon?</div>
              <NavLink to="/checkout">
                <button className="btn btn-dark rounded-0 py-4 w-100 my-2">
                  Proceed to checkout
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CartComponent;
