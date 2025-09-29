import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setShipping } from "../../redux/features/cart/ShippingSlice";
import { updateField } from "../../redux/features/checkout/CheckoutSlice";
import React, { useEffect, useRef } from "react";
import { addOrder } from "../../redux/features/order/OrderSlice";
import { resetCart } from "../../redux/features/cart/CartSlice";

interface CheckoutState {
  city: string;
  companyName: string;
  country: string;
  email: string;
  firstName: string;
  notes: string;
  phone: string;
  province: string;
  secondName: string;
  streetName: string;
  unit: string;
  zip: string;
}
function CheckoutComponent() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => {
    return state.products;
  });
  const cart = useAppSelector((state) => {
    return state.cart;
  });

  const shipping = useAppSelector((state) => {
    return state.shipping.shipping;
  });

  const checkoutData = useAppSelector((state) => {
    return state.checkout;
  });

  const handleChange = (value: string) => {
    dispatch(setShipping(value));
  };

  const countTotal = () => {
    let total = cart.reduce((acc, item) => {
      const product = products.find((p) => p.id === item.productId);
      if (product) {
        return acc + product.price * item.productQuantity;
      }
      return acc;
    }, 0);
    return total;
  };

  const manageInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name as keyof CheckoutState, value }));
  };

  useEffect(() => {
    const countryInput = document.querySelector<HTMLInputElement>(
      'input[name="country"]'
    );
    const provinceInput = document.querySelector<HTMLInputElement>(
      'select[name="province"]'
    );
    if (countryInput) {
      manageInput({
        target: { name: "country", value: countryInput.value },
      } as React.ChangeEvent<HTMLInputElement>);
    }
    if (provinceInput) {
      manageInput({
        target: { name: "province", value: provinceInput.value },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  }, []);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", checkoutData);
    dispatch(addOrder())
      .unwrap()
      .then((orderId) => {
        console.log("Order placed successfully with ID:", orderId);
      });
  };
  return (
    <section>
      <div className="container" style={{ fontFamily: "Roboto" }}>
        <div className="d-flex justify-content-center gap-5 p-5">
          {/* CHECKOUT FORM */}
          <div className="col-md-7 col-lg-8" style={{ width: "57%" }}>
            <div
              className="fs-5 fw-semibold py-3"
              style={{ fontFamily: "Barlow Semi Condensed", color: "#3a3a3a" }}
            >
              Customer information
            </div>
            <form onSubmit={submitForm}>
              <div className="row g-3">
                <div className="col-12 form-floating">
                  <input
                    type="email"
                    className="form-control"
                    required
                    id="email"
                    name="email"
                    placeholder="Username or Email address *"
                    onChange={manageInput}
                  />
                  <label htmlFor="email" style={{ paddingLeft: "20px" }}>
                    Username or Email address{" "}
                    <span className="fw-bold" style={{ color: "red" }}>
                      *
                    </span>
                  </label>
                </div>
                <div
                  className="fs-5 fw-semibold"
                  style={{
                    fontFamily: "Barlow Semi Condensed",
                    color: "#3a3a3a",
                  }}
                >
                  Billing details
                </div>
                <div className="col-sm-6 form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="first-name"
                    required
                    name="firstName"
                    onChange={manageInput}
                    placeholder="First name *"
                  />
                  <label htmlFor="first-name" style={{ paddingLeft: "20px" }}>
                    First name{" "}
                    <span className="fw-bold" style={{ color: "red" }}>
                      *
                    </span>
                  </label>
                </div>
                <div className="col-sm-6 form-floating">
                  <input
                    type="text"
                    id="second-name"
                    className="form-control"
                    required
                    name="secondName"
                    onChange={manageInput}
                    placeholder="Last name *"
                  />
                  <label htmlFor="last-name" style={{ paddingLeft: "20px" }}>
                    Last name{" "}
                    <span className="fw-bold" style={{ color: "red" }}>
                      *
                    </span>
                  </label>
                </div>
                <div className="col-12 form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="company-name"
                    required
                    name="companyName"
                    onChange={manageInput}
                    placeholder="Company Name *"
                  />
                  <label htmlFor="company-name" style={{ paddingLeft: "20px" }}>
                    Company Name{" "}
                    <span className="fw-bold" style={{ color: "red" }}>
                      *
                    </span>
                  </label>
                </div>
                <div className="col-12 form-floating">
                  <input
                    type="text"
                    className="form-control form-control-plaintext fs-5 fw-semibold"
                    style={{
                      fontFamily: "Barlow Semi Condensed",
                      color: "#3a3a3a",
                    }}
                    id="region"
                    required
                    onChange={manageInput}
                    name="country"
                    placeholder="County/Region *"
                    readOnly
                    value="South Africa"
                  />

                  <label htmlFor="region" style={{ paddingLeft: "20px" }}>
                    Country/Region{" "}
                    <span className="fw-bold" style={{ color: "red" }}>
                      *
                    </span>
                  </label>
                </div>
                <div className="col-sm-6 form-floating">
                  <input
                    type="text"
                    className="form-control"
                    required
                    id="street-name"
                    onChange={manageInput}
                    name="streetName"
                    placeholder="House number and street name *"
                  />
                  <label htmlFor="house-number" style={{ paddingLeft: "20px" }}>
                    House number and street name{" "}
                    <span className="fw-bold" style={{ color: "red" }}>
                      *
                    </span>
                  </label>
                </div>
                <div className="col-sm-6 form-floating">
                  <input
                    type="text"
                    id="unit-address"
                    className="form-control"
                    name="unit"
                    onChange={manageInput}
                    placeholder="Apartment, suite, unit etc (optional)"
                  />
                  <label htmlFor="unit-address" style={{ paddingLeft: "20px" }}>
                    Apartment, suite, unit etc (optional)
                  </label>
                </div>
                <div className="col-md-4 form-floating">
                  <input
                    type="text"
                    id="town"
                    className="form-control"
                    required
                    name="city"
                    onChange={manageInput}
                    placeholder="Town / City *"
                  />
                  <label htmlFor="town" style={{ paddingLeft: "20px" }}>
                    Town / City{" "}
                    <span className="fw-bold" style={{ color: "red" }}>
                      *
                    </span>
                  </label>
                </div>
                <div
                  className="col-md-4 d-flex flex-column input-group border rounded-1"
                  style={{ width: "33%" }}
                >
                  <span style={{ fontSize: "smaller" }}>
                    Province{" "}
                    <span className="fw-bold" style={{ color: "red" }}>
                      *
                    </span>
                  </span>

                  <select
                    id="province"
                    required
                    name="province"
                    onChange={manageInput}
                    defaultValue="northern-cape"
                    className="form-control form-select border-0 w-100"
                  >
                    <option value="northern_cape">Northern Cape</option>
                    <option value="eastern_cape">Eastern Cape</option>
                    <option value="free_state">Free State</option>
                    <option value="north_west">North West</option>
                    <option value="western_cape">Western Cape</option>
                  </select>
                </div>
                <div className="col-md-4 form-floating">
                  <input
                    type="text"
                    id="ZIP"
                    required
                    name="zip"
                    onChange={manageInput}
                    className="form-control"
                    placeholder="Postcode / ZIP *"
                  />
                  <label htmlFor="ZIP" style={{ paddingLeft: "20px" }}>
                    Postcode / ZIP{" "}
                    <span className="fw-bold" style={{ color: "red" }}>
                      *
                    </span>
                  </label>
                </div>
                <div className="col-12 form-floating">
                  <input
                    type="string"
                    id="phone"
                    required
                    name="phone"
                    onChange={manageInput}
                    className="form-control"
                    placeholder="Phone *"
                  />
                  <label htmlFor="phone" style={{ paddingLeft: "20px" }}>
                    Phone{" "}
                    <span className="fw-bold" style={{ color: "red" }}>
                      *
                    </span>
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="diff-address"
                  />
                  <label
                    htmlFor="diff-address"
                    className="form-check-label fs-5 fw-semibold"
                    style={{
                      fontFamily: "Barlow Semi Condensed",
                      color: "#3a3a3a",
                    }}
                  >
                    Ship to a different address?
                  </label>
                </div>
                <div className="col-12 form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    id="notes"
                    name="notes"
                    onChange={manageInput}
                    style={{ height: "100px" }}
                  ></textarea>
                  <label htmlFor="notes" style={{ paddingLeft: "20px" }}>
                    Notes (optional)
                  </label>
                </div>
                <div className="py-2">Have a coupon?</div>
                <div
                  className="fs-5 fw-semibold"
                  style={{
                    fontFamily: "Barlow Semi Condensed",
                    color: "#3a3a3a",
                  }}
                >
                  Payment
                </div>
                <div className="form-check">
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="ozow"
                    />
                    <label htmlFor="ozow" className="form-check-label p-3">
                      Ozow
                    </label>
                    <span>
                      <img
                        src="https://cdn.i-station.co.za/img/ozow-checkout.png"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
                <div
                  className="col-12 p-4"
                  style={{ backgroundColor: "#f5f5f5" }}
                >
                  Pay with Ozow Secure Payments, (Your order status will be
                  updated immediately after successful payment).
                </div>
                <div className="form-check">
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="payfast"
                    />
                    <label
                      htmlFor="diff-address"
                      className="form-check-label p-3"
                    >
                      Payfast
                    </label>
                    <span>
                      <img
                        src="https://theaceofblades.co.za/wp-content/plugins/woocommerce-payfast-gateway/assets/images/icon.png"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
                <div className="py-4">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="agreement"
                  />
                  <label
                    htmlFor="agreement"
                    className="form-check-label fw-semibold fs-6"
                  >
                    I have read and agree to the website terms and conditions{" "}
                    <span className="fw-bold" style={{ color: "red" }}>
                      *
                    </span>
                  </label>
                </div>
                <button
                  className="btn btn-dark rounded-0 w-100 p-3"
                  type="submit"
                >
                  <i className="bi bi-lock-fill"></i>
                  Place order R
                  {shipping === "flat"
                    ? (countTotal() + 75).toFixed(2)
                    : countTotal().toFixed(2)}
                </button>
                <button className="btn btn-light rounded-0 w-100 pb-3">
                  <i className="bi bi-chevron-double-left"></i>
                  Back to Cart
                </button>
              </div>
            </form>
          </div>
          {/* CART */}
          <div style={{ width: "40%" }}>
            <div style={{ position: "sticky", top: "10rem" }}>
              <div
                className="fs-5 fw-semibold py-3"
                style={{
                  fontFamily: "Barlow Semi Condensed",
                  color: "#3a3a3a",
                }}
              >
                Your order
              </div>
              <table
                className="table border"
                style={{ borderColor: "#f2f5f7" }}
              >
                <thead>
                  <tr className="align-middle">
                    <th className="fw-normal p-3" style={{ color: "#4b4f58" }}>
                      Product
                    </th>
                    <th
                      className=" text-end fw-normal p-3"
                      style={{ color: "#4b4f58" }}
                    >
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) =>
                    products.map((p) =>
                      p.id === item.productId ? (
                        <tr className="align-middle" key={item.productId}>
                          <td>
                            <div className="d-flex justify-content-start align-items-center">
                              <div className="d-flex flex-column justify-content-center align-items-center py-1">
                                <span>
                                  {" "}
                                  <img
                                    style={{ width: "55px" }}
                                    src={p.images[0]}
                                    alt=""
                                  />
                                </span>
                                <span>x{item.productQuantity}</span>
                              </div>
                              <div className="p-2" style={{ color: "#4b4f58" }}>
                                {p.name}
                              </div>
                            </div>
                          </td>
                          <td
                            className="p-3 text-end"
                            style={{ color: "#4b4f58" }}
                          >
                            R{p.price * item.productQuantity}
                          </td>
                        </tr>
                      ) : null
                    )
                  )}
                  <tr className="align-middle">
                    <td className="p-3" style={{ color: "#4b4f58" }}>
                      Subtotal
                    </td>
                    <td className="text-end p-3" style={{ color: "#4b4f58" }}>
                      R{countTotal()}
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="p-3" style={{ color: "#4b4f58" }}>
                      Shipping
                    </td>
                    <td className="py-3">
                      <div className="d-flex justify-content-end align-items-end">
                        <div
                          className="form-check p-2"
                          style={{ width: "max-content" }}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radioDefault"
                            id="radioDefault1"
                            checked={shipping === "free"}
                            value="free"
                            onChange={(e) => handleChange(e.target.value)}
                          />
                          <label
                            className="form-check-label"
                            style={{ color: "#4b4f58" }}
                          >
                            Free shipping
                          </label>
                        </div>
                      </div>
                      <div
                        className="form-check p-2"
                        style={{ width: "max-content" }}
                      >
                        <input
                          className="form-check-input"
                          style={{ marginLeft: "15rem" }}
                          type="radio"
                          name="radioDefault"
                          id="radioDefault2"
                          checked={shipping === "flat"}
                          value="flat"
                          onChange={(e) => handleChange(e.target.value)}
                        />
                        <label
                          className="form-check-label"
                          style={{ color: "#4b4f58" }}
                        >
                          Flat rate: R75.00
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr className="fw-bold align-middle">
                    <td className="p-3" style={{ color: "#4b4f58" }}>
                      Total
                    </td>
                    <td className="text-end p-3" style={{ color: "#4b4f58" }}>
                      R
                      {shipping === "flat"
                        ? (countTotal() + 75).toFixed(2)
                        : countTotal().toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CheckoutComponent;
