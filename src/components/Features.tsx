function Features() {
  return (
    <div className="px-5 pt-4 bg-black text-white m-0" id="featured-3">
      <div className=" d-flex justify-content-center flex-column align-items-center py-4">
        <span
          className="pb-2 pt-3 fs-1 fw-bolder text-uppercase"
          style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "3px" }}
        >
          How Does It Works?
        </span>
        <span className="fs-6" style={{ letterSpacing: "3px" }}>
          our online experience made easy
        </span>
      </div>
      <div className="row g-2 pb-5 row-cols-1 row-cols-lg-3">
        <div className="h-auto p-5 feature col d-flex flex-column align-items-center gap-3">
          <div
            className="feature-icon d-inline-flex align-items-center justify-content-center bg-light text-black bg-gradient fs-2 mb-3 rounded-circle"
            style={{ minHeight: "25%", width: "25%" }}
          >
            <span>
              <i className="bi bi-star-fill"></i>
            </span>
          </div>
          <span className="d-flex flex-column justify-content-center gap-1 align-items-center">
            <h2
              className="fs-2 fw-bold text-light text-uppercase"
              style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "2px" }}
            >
              our select range
            </h2>
            <span className="fs-5" style={{ letterSpacing: "3px" }}>
              our exclusive range
            </span>
          </span>
          <p className="text-center" style={{ fontSize: "large" }}>
            Take your pick of our top quality, ever-growing range of handcrafted
            Damascus knives.
          </p>
        </div>
        <div className="h-auto p-5 feature col d-flex flex-column align-items-center gap-3 border-start border-end border-4 border-white">
          <div
            className="feature-icon d-inline-flex align-items-center justify-content-center bg-light text-black bg-gradient fs-2 mb-3 rounded-circle"
            style={{ minHeight: "25%", width: "25%" }}
          >
            <span>
              <i className="bi bi-lock-fill"></i>
            </span>
          </div>
          <span className="d-flex flex-column justify-content-center gap-1 align-items-center">
            <h2
              className="fs-2 fw-bold text-light text-uppercase"
              style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "2px" }}
            >
              secure checkout
            </h2>
            <span className="fs-5" style={{ letterSpacing: "2px" }}>
              simple & easy
            </span>
          </span>
          <p className="text-center" style={{ fontSize: "large" }}>
            Get your Damascus collection started now! Simply add to cart and
            proceed to our verified and secure payment gateways, Payfast/ Ozow.
          </p>
        </div>
        <div className="h-auto p-5 feature col d-flex flex-column align-items-center gap-3">
          <div
            className="feature-icon d-inline-flex align-items-center justify-content-center bg-light text-black  bg-gradient fs-2 mb-3 rounded-circle"
            style={{ minHeight: "25%", width: "25%" }}
          >
            <span>
              <i className="bi bi-truck-front-fill"></i>
            </span>
          </div>
          <span className="d-flex flex-column justify-content-center gap-1 align-items-center">
            <h2
              className="fs-2 fw-bold text-light text-uppercase"
              style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "2px" }}
            >
              simple delivery
            </h2>
            <span className="fs-5" style={{ letterSpacing: "2px" }}>
              no hassle
            </span>
          </span>
          <p className="text-center" style={{ fontSize: "large" }}>
            We use courier services to ensure your package is delivered to your
            door or business with no hassle. They say good things come to those
            who wait, luckily you don’t have to.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
