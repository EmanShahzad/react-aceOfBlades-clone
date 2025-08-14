function Checkout() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="" style={{ width: "65%" }}>
          <div className="col-md-7 col-lg-8">
            <div className="fs-4">Customer information</div>
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
                  <label htmlFor="email">Username or Email address *</label>
                </div>
                <div className="fs-4">Billing details</div>
                <div className="col-sm-6 form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="first-name"
                    required
                    placeholder="First name *"
                  />
                  <label htmlFor="first-name">First name *</label>
                </div>
                <div className="col-sm-6 form-floating">
                  <input
                    type="text"
                    id="last-name"
                    className="form-control"
                    required
                    placeholder="Last name *"
                  />
                  <label htmlFor="last-name">Last name *</label>
                </div>
                <div className="col-12 form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="company-name"
                    required
                    placeholder="Company Name *"
                  />
                  <label htmlFor="company-name">Company Name *</label>
                </div>
                <div className="col-12 form-floating">
                  <input
                    type="text"
                    className="form-control form-control-plaintext"
                    readOnly
                    id="region"
                    required
                    placeholder="County/Region *"
                    value="South Africa"
                  />

                  <label htmlFor="region">Company/Region *</label>
                </div>
                <div className="col-sm-6 form-floating">
                  <input
                    type="text"
                    className="form-control"
                    required
                    id="house-number"
                    placeholder="House number and street name *"
                  />
                  <label htmlFor="house-number">
                    House number and street name *
                  </label>
                </div>
                <div className="col-sm-6 form-floating">
                  <input
                    type="text"
                    id="unit-address"
                    className="form-control"
                    placeholder="Apartment, suite, unit etc (optional)"
                  />
                  <label htmlFor="unit-address">
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
                  <label htmlFor="town">Town / City *</label>
                </div>
                <div className="col-md-4 form-floating">
                  <input
                    type="text"
                    id="province"
                    required
                    className="form-control"
                    readOnly
                    value="Northern Cape"
                    placeholder="Province *"
                  />
                  <label htmlFor="province">Province *</label>
                </div>
                <div className="col-md-4 form-floating">
                  <input
                    type="text"
                    id="ZIP"
                    required
                    className="form-control"
                    placeholder="Postcode / ZIP *"
                  />
                  <label htmlFor="ZIP">Postcode / ZIP *</label>
                </div>
                <div className="col-12 form-floating">
                  <input
                    type="number"
                    id="phone"
                    required
                    className="form-control"
                    placeholder="Phone *"
                  />
                  <label htmlFor="ZIP">Phone *</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="diff-address"
                  />
                  <label htmlFor="diff-address" className="form-check-label">
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
                  <label htmlFor="ZIP">Notes (optional)</label>
                </div>
                <div className="py-2">Have a coupon?</div>
                <div className="fs-4">Payment</div>
                <div className="form-check">
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="ozow"
                    />
                    <label
                      htmlFor="diff-address"
                      className="form-check-label p-3"
                    >
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
                <div>
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
                  <label htmlFor="agreement" className="form-check-label">
                    I have read and agree to the website terms and conditions *
                  </label>
                </div>
                <button className="btn btn-dark rounded-0 w-100">
                  <i className="bi bi-lock-fill"></i>
                  Place order R1,980.00
                </button>
                <button className="btn btn-light rounded-0 w-100">
                  <i className="bi bi-chevron-double-left"></i>
                  Back to Cart
                </button>
              </div>
            </form>
          </div>
        </div>
        <div style={{ width: "30%" }}>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex flex-column justify-content-center align-items-center">
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
                  <div></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Checkout;
