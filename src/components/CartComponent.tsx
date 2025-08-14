function CartComponent() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-start gap-3 py-5">
        <div style={{ width: "60%" }}>
          <table className="table">
            <thead className="table-secondary">
              <tr
                style={{ height: "50px", fontFamily: "Barlow Semi Condensed" }}
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
                  <div className="row border w-100">
                    <span className="col">-</span>
                    <span className="col border-start border-end">1</span>
                    <span className="col">+</span>
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
                      <label className="form-check-label">Free shipping</label>
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
            <button className="btn btn-dark rounded-0 py-4 w-100 my-2">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartComponent;
