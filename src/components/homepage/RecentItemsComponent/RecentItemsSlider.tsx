import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./RecentItemsSlider.css";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../../redux/features/cart/CartSlice";

export default function RecentItemsSlider() {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const addItem = (itemId: string, quantity: number) => {
    dispatch(addToCart({ itemId, quantity }));
  };
  return (
    <div
      className="d-flex justify-content-center flex-column"
      style={{ backgroundColor: "#f2f2f2" }}
    >
      <div className="container px-5">
        <div
          className="fs-1 pt-5 fw-medium text-uppercase"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          RECENT ITEMS
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          // ✅ Swiper will now calculate widths
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          mousewheel-force-to-axis="true"
          className="recent-items-swiper py-5"
        >
          {products.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="slide-card" style={{ minHeight: "100%" }}>
                <div className="d-flex flex-column">
                  <NavLink
                    className="w-100 h-50"
                    style={{ minHeight: "50%" }}
                    to={`/product/${item.id}`}
                  >
                    <img
                      className="w-100 h-100"
                      style={{ minHeight: "50%" }}
                      src={item.images[0]}
                      alt=""
                    />
                  </NavLink>
                  <div className="d-flex flex-column justify-content-center align-items-center py-3">
                    <span
                      className="fw-normal pt-2 fs-4 d-flex justify-content-center text-center p-3"
                      style={{ fontFamily: "Oswald" }}
                    >
                      {item.name}
                    </span>
                    <span
                      className="fw-bold pb-2"
                      style={{ fontSize: "1.1rem", letterSpacing: "2px" }}
                    >
                      {item.price}
                    </span>
                    <button
                      className="btn btn-outline-secondary rounded-0 py-2 text-black text-uppercase border-2"
                      style={{ width: "35%", fontSize: "smaller" }}
                      onClick={() => {
                        addItem(item.id, 1);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
