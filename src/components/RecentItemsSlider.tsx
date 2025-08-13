import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styling//RecentItemsSlider.css";

export default function RecentItemsSlider() {
  const slides = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
    "Slide 6",
  ];

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
          slidesPerView={3} // ✅ Swiper will now calculate widths
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          mousewheel-force-to-axis="true"
          onSlideChange={(swiper: SwiperType) =>
            console.log("Slide changed to", swiper.activeIndex)
          }
          onSwiper={(swiper: SwiperType) =>
            console.log("Swiper instance:", swiper)
          }
          className="recent-items-swiper py-5"
        >
          {slides.map((text, i) => (
            <SwiperSlide key={i}>
              <div className="slide-card ">
                <div className="d-flex flex-column">
                  <div className="w-100 h-50">
                    <img
                      className="w-100 h-50"
                      src="https://theaceofblades.co.za/wp-content/uploads/IMG_5745.jpg"
                      alt=""
                    />
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center py-3">
                    <span
                      className="fw-normal pt-2 fs-4 d-flex justify-content-center text-center p-3"
                      style={{ fontFamily: "Oswald" }}
                    >
                      AOB-2452 Handmade Damascus Chef's Knife
                    </span>
                    <span
                      className="fw-bold pb-2"
                      style={{ fontSize: "1.1rem", letterSpacing: "2px" }}
                    >
                      R990
                    </span>
                    <button
                      className="btn btn-outline-secondary rounded-0 py-2 text-black text-uppercase border-2"
                      style={{ width: "35%", fontSize: "smaller" }}
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
