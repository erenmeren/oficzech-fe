import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";

export default function Home() {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <div className="mt-[200px]">
        <div className="w-96"></div>
        <Swiper
          // spaceBetween={1000}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="h-62 w-10 bg-orange-100">1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-62 w-10 bg-orange-100">2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-62 w-10 bg-orange-100">3</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
