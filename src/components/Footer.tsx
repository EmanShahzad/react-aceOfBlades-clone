function Footer() {
  return (
    <footer
      className="py-5 bg-black text-white fs-5"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      {" "}
      <div className="border-dark border-bottom">
        <ul className="nav justify-content-center pb-3 mb-3">
          {" "}
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-secondary">
              Home
            </a>
          </li>{" "}
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-secondary">
              Privacy Policy
            </a>
          </li>{" "}
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-secondary">
              Shipping and Returns
            </a>
          </li>{" "}
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-secondary">
              Terms and Conditions
            </a>
          </li>{" "}
        </ul>{" "}
        <p className="text-center fs-6">Copyright © 2025 THE ACE OF BLADES</p>{" "}
      </div>
      <p className="text-center p-4">
        <span className="text-secondary">Developed and maintained by by :</span>{" "}
        Biographix Web and Media
      </p>
    </footer>
  );
}
export default Footer;
