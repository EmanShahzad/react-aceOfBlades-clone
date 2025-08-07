function TheHistory() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 pe-4">
      <div className="w-50 p-3 ps-4 ms-5">
        <div
          className="fw-bold text-uppercase"
          style={{ fontSize: "2.6rem", fontFamily: "Oswald, sans-serif" }}
        >
          the history
        </div>
        <div
          className="fw-normal pt-2"
          style={{ fontSize: "1.1rem", letterSpacing: "4px" }}
        >
          of damascus
        </div>
        <div
          className="pt-4"
          style={{
            fontFamily: "Roboto, sans-serif",
            letterSpacing: "1px",
            fontSize: "18px",
          }}
        >
          Damascus is a well-known style of steel that is distinguishable by its
          contrasting marble light and dark design. There are two types of
          Damascus steel (cast Damascus steel and pattern-welded Damascus
          steel). Although similar looking, they are forged through very
          specific and different processes. Historically, Damascus steel was
          always prized for its beauty, as well as ability to keep a sharp edge
          while remaining strong and flexible. Seen as the “Steel of Ancients”,
          arms made of Damascus steel are superior to those made of iron.
          Damascus craftsmanship gained a reputation of near magical properties
          and with only a precious few that knew how to achieve this, it would
          become a precious piece of history for any arms enthusiast.
        </div>
      </div>
      <div className="w-50">
        <img
          className="w-100 pe-5"
          src="https://theaceofblades.co.za/wp-content/uploads/2023/06/knifeset600-1.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default TheHistory;
