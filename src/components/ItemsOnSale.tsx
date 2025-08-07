function ItemsOnSale() {
  return (
    <div
      className="d-flex justify-content-center flex-column"
      style={{ backgroundColor: "#f2f2f2" }}
    >
      <div
        className="fs-1 pt-5 ps-5 pb-2 fw-medium text-uppercase"
        style={{ fontFamily: "Oswald, sans-serif" }}
      >
        Items on Sale
      </div>
      <div className="d-flex justify-content-center align-items-center ps-5">
        <div
          className="d-flex justify-content-start align-items-start flex-wrap gap-4 px-5"
          style={{ fontFamily: "Roboto, sans-serif", width: "100%" }}
        >
          <div
            className="d-flex flex-column gap-3 w-25 h-auto mr-1"
            style={{ maxWidth: "24%" }}
          >
            <div className="w-100 position-relative">
              <img
                className="w-100 bg-white h-100"
                src="https://theaceofblades.co.za/wp-content/uploads/aob-2314-2.jpg"
                alt=""
              />
              <span
                className="position-absolute text-black w-50 h-50"
                style={{ top: "5%", right: "-42%" }}
              >
                <span className=" border border-1 border-black w-25 h-25 rounded-circle badge translate-middle d-flex justify-content-center align-items-center p-4">
                  <span className="text-black fw-light fs-6">Sale</span>
                </span>
              </span>
            </div>
            <div className="d-flex flex-column justify-content-center gap-0">
              <span className="p-2" style={{ fontSize: "larger" }}>
                AOB-2314 Handmade Damascus Folding Knife
              </span>
              <span
                className="d-flex justify-content-center align-items-center gap-2 fw-bold"
                style={{
                  fontSize: "smaller",
                }}
              >
                <span className="text-decoration-line-through">R990.00</span>
                <span>R790.00</span>
              </span>
              <span className="d-flex justify-content-center my-3">
                <button className="btn btn-dark rounded-5 px-4 pb-3">
                  <span
                    className=" d-flex pb-3 pt-1 px-1"
                    style={{ fontSize: "smaller" }}
                  >
                    Add to cart
                  </span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemsOnSale;
