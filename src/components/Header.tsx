import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/header.css";
function Header() {
  return (
    <div className="bg-black text-white" style={{ zIndex: "300" }}>
      <div className="Header headerHeight d-flex justify-content-end  mx-5 ps-5 bg-black">
        <div className="d-flex justify-content-between align-items-center w-75 headerHeight">
          <span className="mx-5 ps-5">
            FREE DELIVERY FOR ALL ORDERS OVER R1000
          </span>
          <span className="d-flex justify-space-between gap-2 align-items-center">
            <span>
              <img
                className="headerImages"
                src="https://www.svgrepo.com/show/30508/facebook-square-social-logo.svg"
                alt=""
              />
            </span>
            <span>
              <img
                className="headerImages"
                src="https://www.svgrepo.com/show/506668/instagram.svg"
                alt=""
              />
            </span>
            <span>
              <img
                className="headerImages"
                src="https://www.svgrepo.com/show/303280/whatsapp-glyph-black-logo.svg"
                alt=""
              />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
