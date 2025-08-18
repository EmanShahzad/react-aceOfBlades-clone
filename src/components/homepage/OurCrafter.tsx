function OurCrafter() {
  return (
    <div className=" bg-black text-white">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center gap-3 py-5">
          <div className="">
            <img
              className=""
              style={{ width: "500px" }}
              src="https://theaceofblades.co.za/wp-content/uploads/Ace-of-blades-cover-700.png"
              alt=""
            />
          </div>
          <div className="text-end w-50">
            <div
              className="fw-bold text-uppercase"
              style={{ fontSize: "2.6rem", fontFamily: "Oswald, sans-serif" }}
            >
              Our Crafter
            </div>
            <div
              className="fw-normal pt-2"
              style={{ fontSize: "1.1rem", letterSpacing: "4px" }}
            >
              BARBAROS
            </div>
            <div
              className="pt-4 lh-base"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "18.7px",
              }}
            >
              We’d like you to visit our crafter, but he’s still busy in the
              studio. Barbaros is a bit of an enigma, constantly on the verge of
              doing something wild and adventurous. He moved to Cyprus with his
              family when he was nine years old, and captivated by the
              Mediterranean.
              <br />
              <br />
              Barbaros spent his time in a small studio workshop where you can
              only make out the horizon, channeling his enthusiasm for pirate
              tales into enthusiastic craftsmanship of the traditionally favored
              Damascus knives. We reconnected years later, and what better way
              to rekindle a relationship than to share a love of a beautiful
              craft?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCrafter;
