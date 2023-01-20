import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

const MainSlide = ({ firstSwiper, setFirstSwiper, Controller }: any) => {
  const { t } = useTranslation();
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 6000 }}
      modules={[Controller]}
      onSwiper={setFirstSwiper}
    >
      <SwiperSlide>
        <p className="text-8xl font-bold">{t("home:title1")}</p>
        <p className="my-6 text-xl">{t("home:title1Exp")}</p>
        <p className="h-14 w-52 my-4 pt-3 rounded-md bg-[var(--primary-color)] text-xl text-center font-bold">
          {t("common:contactForm")}
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <p className="text-8xl font-bold">2-{t("home:title1")}</p>
        <p className="my-6 text-xl">2-{t("home:title1Exp")}</p>
        <p className="h-14 w-52 my-4 pt-3 rounded-md bg-[var(--primary-color)] text-xl text-center font-bold">
          2-{t("common:contactForm")}
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <p className="text-8xl font-bold">3-{t("home:title1")}</p>
        <p className="my-6 text-xl">3-{t("home:title1Exp")}</p>
        <p className="h-14 w-52 my-4 pt-3 rounded-md bg-[var(--primary-color)] text-xl text-center font-bold">
          3-{t("common:contactForm")}
        </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSlide;
