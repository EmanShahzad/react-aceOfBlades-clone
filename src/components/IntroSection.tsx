import "../styling/introSection.css";

function IntroSection() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      className="scrollspy-example zn-1 mySection bg-image"
    >
      <div className="container p-5">
        <div className="w-100 h-auto text-white align-items-end d-flex flex-column justify-content-between gap-3 text-end text-uppercase py-5 mx-3">
          <div className="fw-bolder pt-5" style={{ fontSize: "4.23529rem" }}>
            The crafters of life
          </div>
          <div className=" fs-6 w-50" style={{ letterSpacing: "2px" }}>
            These lines have shaped your life. From the contour lines of the
            fields worked, the roads bending around mountains and the ripple
            from the first drop of long awaited rain. The glowing rings of oak
            disappearing into the fire pit and the folds of fresh dough in the
            kitchen. Each unique and etched into your life story, just as the
            soft lines o​​f age that have shaped your father’s face and hard
            working hands. These lines guide us, define us, and remind us. They
            come to life in our blades.
          </div>
          <span className="fs-5" style={{ letterSpacing: "3px" }}>
            - the ace of blades
          </span>
          <div className="d-flex gap-4 mb-4 py-4 m-2">
            <button className="btn btn-light px-4 py-1 rounded-0 text-uppercase fs-5 ">
              Shop Now
            </button>
            <button className="btn btn-light px-4 py-1 rounded-0 text-uppercase fs-5 ">
              Knife Care
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
