function CheckoutComponent() {
  return (
    <section>
      <div className="container" style={{ fontFamily: "Roboto" }}>
        <div className="d-flex justify-content-center gap-5 p-5">
          <div className="col-md-7 col-lg-8" style={{ width: "57%" }}>
            <div
              className="fs-5 fw-semibold py-3"
              style={{ fontFamily: "Barlow Semi Condensed", color: "#3a3a3a" }}
            >
              Customer information
            </div>
            <form>
              <div className="row g-3">
                <div className="col-12 form-floating">
                  <input
                    type="email"
                    className="form-control"
                    required
                    id="email"
                    placeholder="Username or Email address *"
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
                    id="last-name"
                    className="form-control"
                    required
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
                    readOnly
                    id="region"
                    required
                    placeholder="County/Region *"
                    value="South Africa"
                  />

                  <label htmlFor="region" style={{ paddingLeft: "20px" }}>
                    Company/Region{" "}
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
                    id="house-number"
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
                    className="form-control form-select border-0 w-100"
                  >
                    <option selected>Northern Cape</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-md-4 form-floating">
                  <input
                    type="text"
                    id="ZIP"
                    required
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
                    type="number"
                    id="phone"
                    required
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
                <button className="btn btn-dark rounded-0 w-100 p-3">
                  <i className="bi bi-lock-fill"></i>
                  Place order R1,980.00
                </button>
                <button className="btn btn-light rounded-0 w-100 pb-3">
                  <i className="bi bi-chevron-double-left"></i>
                  Back to Cart
                </button>
              </div>
            </form>
          </div>
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
                  <tr className="align-middle">
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column justify-content-center align-items-center py-3">
                          <span>
                            {" "}
                            <img
                              style={{ width: "55px" }}
                              src="https://theaceofblades.co.za/wp-content/uploads/IMG_5745-300x300.jpg"
                              alt=""
                            />
                          </span>
                          <span>x1</span>
                        </div>
                        <div className="p-2" style={{ color: "#4b4f58" }}>
                          AOB-2452 Handmade Damascus Chef's Knife
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-end" style={{ color: "#4b4f58" }}>
                      R990.00
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="p-3" style={{ color: "#4b4f58" }}>
                      Subtotal
                    </td>
                    <td className="text-end p-3" style={{ color: "#4b4f58" }}>
                      R1,980.00
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="p-3" style={{ color: "#4b4f58" }}>
                      Shipping
                    </td>
                    <td className="py-3">
                      <div className="d-flex justify-content-end">
                        <div
                          className="form-check p-2"
                          style={{ width: "max-content" }}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radioDefault"
                            id="radioDefault1"
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
                          type="radio"
                          name="radioDefault"
                          id="radioDefault2"
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
                      R1,980.00
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
