function RelatedProducts() {
  return (
    <div className="d-flex justify-content-center flex-column pb-5">
      <div className="container">
        <div
          className="fs-1 pt-5 ps-5 pb-2 fw-semibold"
          style={{ fontFamily: "Barlow Semi Condensed, sans-serif" }}
        >
          Related products
        </div>
        <div className="d-flex justify-content-center align-items-center ps-5 pb-5">
          <div
            className="d-flex justify-content-start align-items-start flex-wrap gap-4 px-5 py-2"
            style={{ fontFamily: "Roboto, sans-serif", width: "100%" }}
          >
            <div
              className="d-flex flex-column w-25 h-auto mr-1"
              style={{
                maxWidth: "24%",
                boxShadow: "1px 1px 2px 0px rgba(0, 0, 0, .1)",
              }}
            >
              <div>
                <img
                  className="w-100 bg-white h-100"
                  src="https://theaceofblades.co.za/wp-content/uploads/aob-2314-2.jpg"
                  alt=""
                />
              </div>
              <div
                className="d-flex flex-column justify-content-center text-center gap-1"
                style={{ backgroundColor: "#f2f2f2" }}
              >
                <span style={{ color: "gray" }}>Category Name</span>
                <span className="fw-semibold">
                  AOB-2314 Handmade Damascus Folding Knife
                </span>

                <span className="fw-semibold" style={{ color: "#4a4949ff" }}>
                  R790.00
                </span>

                <span className="d-flex justify-content-center my-3">
                  <button className="btn btn-dark rounded-0 px-4">
                    Add to cart
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts;
