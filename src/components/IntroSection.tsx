import "../styling/introSection.css";

function IntroSection() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      className="scrollspy-example h-100 position-relative zn-1 mySection"
    >
      <img
        src="https://theaceofblades.co.za/wp-content/uploads/2023/06/Ace-of-blades-main-background-knife-1-1.jpg"
        className="position-absolute start-0 w-100 h-auto object-fit-cover top-0 zn-1"
        alt="Background"
      />

      <div
        className="position-absolute start-0 w-100 h-auto text-white align-items-end d-flex flex-column justify-content-between gap-3 text-end p-5 text-uppercase"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.45)",
          zIndex: "1",
        }}
      >
        <div
          className="fw-bolder pt-5 mt-5 mx-5 w-50"
          style={{ fontSize: "4.23529rem" }}
        >
          The crafters of life
        </div>
        <div
          className="m-2 px-3 fs-5"
          style={{ letterSpacing: "4px", width: "60%" }}
        >
          These lines have shaped your life. From the contour lines of the
          fields worked, the roads bending around mountains and the ripple from
          the first drop of long awaited rain. The glowing rings of oak
          disappearing into the fire pit and the folds of fresh dough in the
          kitchen. Each unique and etched into your life story, just as the soft
          lines o​​f age that have shaped your father’s face and hard working
          hands. These lines guide us, define us, and remind us. They come to
          life in our blades.
        </div>
        <span className="fs-5 px-3 mx-2">- the ace of blades</span>
        <div className="d-flex gap-4 mb-4 py-4 m-2">
          <button className="btn btn-light px-5 py-2 rounded-0 text-uppercase fs-5 ">
            Shop Now
          </button>
          <button className="btn btn-light px-5 py-2 rounded-0 text-uppercase fs-5 ">
            Knife Care
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
