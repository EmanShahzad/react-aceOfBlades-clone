import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
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
    <Swiper
      modules={[Navigation]}
      slidesPerView={3} // ✅ Swiper will now calculate widths
      navigation
      breakpoints={{
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }}
      onSlideChange={(swiper: SwiperType) =>
        console.log("Slide changed to", swiper.activeIndex)
      }
      onSwiper={(swiper: SwiperType) => console.log("Swiper instance:", swiper)}
      className="recent-items-swiper"
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
              <div>
                <span>AOB-2452 Handmade Damascus Chef's Knife</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
