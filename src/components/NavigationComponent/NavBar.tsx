import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useState } from "react";

function NavBar() {
  let [view, setView] = useState<string>("customer");
  const categories = useAppSelector((state) => {
    return state.categories;
  });

  const products = useAppSelector((state) => {
    return state.products;
  });

  const cart = useAppSelector((state) => {
    return state.cart;
  });

  const productsCount = categories.map((category) => {
    const count = products.filter((p) => p.categoryId === category.id).length;
    return count;
  });

  return (
    <div
      className="sticky-top text-uppercase bg-white"
      style={{ zIndex: "100" }}
    >
      <div className="container">
        <div className="d-flex gap-4 justify-content-between align-items-center px-5 py-2">
          <div className="d-flex my-2 flex-column justify-content-center align-items-center">
            <NavLink to={"/"}>
              <img
                className=""
                style={{ width: "90px" }}
                src="https://theaceofblades.co.za/wp-content/uploads/2023/06/Ace-of-Blades-Logo200.jpg"
                alt="logo"
              />
            </NavLink>
            <span style={{ fontSize: "smaller" }} className="fw-bold">
              The Ace of Blades
            </span>
          </div>
          {view === "customer" ? (
            <>
              <div className="">
                <nav className="navbar ">
                  <div className="container-fluid">
                    <ul
                      className="navbar-nav flex-row gap-2 fw-bold"
                      style={{ fontFamily: "Roboto" }}
                    >
                      <li className="nav-item me-3">
                        <NavLink className="nav-link" to="/">
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item dropdown me-3">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          AOB Collection
                        </a>
                        <ul className="dropdown-menu position-absolute p-2">
                          {categories.map((category, indexC) => (
                            <li key={category.id}>
                              <NavLink
                                className="dropdown-item"
                                to={`/${category.id}`}
                              >
                                <span className="d-flex justify-content-start align-items-center gap-2 px-2 fw-semibold">
                                  <span>
                                    <img
                                      style={{ maxWidth: "50px" }}
                                      src={category.image}
                                      alt=""
                                    />
                                  </span>
                                  <span>{category.name}</span>
                                  {productsCount.map((count, index) =>
                                    index === indexC ? (
                                      <span key={indexC}>({count})</span>
                                    ) : null
                                  )}
                                </span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="nav-item  me-3">
                        <a className="nav-link" href="#">
                          On Sale
                        </a>
                      </li>
                      <li className="nav-item  me-3">
                        <a className="nav-link" href="#">
                          Articles
                        </a>
                      </li>
                      <li className="nav-item  me-3">
                        <a className="nav-link" href="#">
                          Gallery
                        </a>
                      </li>
                      <li className="nav-item  me-3">
                        <NavLink className="nav-link" to="/cart">
                          Cart
                        </NavLink>
                      </li>
                      <li className="nav-item  me-3">
                        <NavLink className="nav-link" to="/checkout">
                          CheckOut
                        </NavLink>
                      </li>
                      <li className="nav-item  me-3">
                        <a className="nav-link" href="#">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="d-flex gap-2">
                <div className="dropdown">
                  <button
                    className="btn"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person-circle fs-4"></i>
                  </button>

                  <ul className="dropdown-menu p-2">
                    <li>
                      <NavLink
                        to={"/adminView"}
                        className="dropdown-item fs-italics"
                        onClick={() => {
                          setView("admin");
                        }}
                      >
                        Admin Panel
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/"}
                        className="dropdown-item"
                        onClick={() => {
                          setView("customer");
                        }}
                      >
                        Customer Panel
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <NavLink
                  className="btn border-dark border-2 rounded-0 position-relative"
                  to="/cart"
                >
                  <i className="bi bi-cart-fill fs-4"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-black">
                    {cart.length}
                    <span className="visually-hidden">cart items count</span>
                  </span>
                </NavLink>
              </div>
            </>
          ) : (
            <>
              <div className="d-flex flex-column align-items-center">
                <h3 style={{ fontFamily: "Oswald" }}>
                  Ace of Blades Command Center
                </h3>
                <span>Where every click shapes the edge of excellence.</span>
              </div>
              <div className="d-flex gap-2">
                <div className="dropdown">
                  <button
                    className="btn"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person-circle fs-4"></i>
                  </button>

                  <ul className="dropdown-menu p-2">
                    <li>
                      <NavLink
                        to={"/adminView"}
                        className="dropdown-item fs-italics"
                        onClick={() => {
                          setView("admin");
                        }}
                      >
                        Admin Panel
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/"}
                        className="dropdown-item"
                        onClick={() => {
                          setView("customer");
                        }}
                      >
                        Customer Panel
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
