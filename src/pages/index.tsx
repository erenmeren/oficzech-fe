import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Controller } from "swiper";

import "swiper/css";

import heroImg from "@assets/images/hero.png";
// import heroImg2 from "@assets/images/hero2.png";
import Service1Img from "@assets/images/services-1.png";
import Service2Img from "@assets/images/services-2.png";
import Service3Img from "@assets/images/services-3.png";
import LeftArrowIcon from "@assets/images/icons/lArrow.svg";
import RightArrowIcon from "@assets/images/icons/rArrow.svg";
import DocumentIcon from "@assets/images/icons/document.svg";
import PeopleIcon from "@assets/images/icons/people.svg";
import PuzzleIcon from "@assets/images/icons/puzzle.svg";
import TargetIcon from "@assets/images/icons/target.svg";
import { useState } from "react";
import ScrollAnimation from "@components/ScrollAnimation";

export default function Home() {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  SwiperCore.use([Autoplay]);

  const [firstSwiper, setFirstSwiper] = useState<any>(null);
  const [secondSwiper, setSecondSwiper] = useState<any>(null);
  const [sliderCount, setSliderCount] = useState<number>(0);

  const preCounter = (funcPrev: any) => {
    funcPrev;
    if (sliderCount > 0) setSliderCount(sliderCount - 1);
  };

  return (
    <>
      {/* first page */}
      <div
        className="grid place-items-center bg-cover min-h-[800px] h-screen lg:pb-[10%]"
        style={{ backgroundImage: `url(${heroImg.src})` }}
      >
        <div className="w-full padX grid grid-cols-12 text-white lg:mt-[200px]">
          <div className="flex items-center justify-self-start">
            <LeftArrowIcon
              height={45}
              width={45}
              alt="Left icon"
              fill="#fff"
              className="cursor-pointer left-0 h-5 w-5 lg:w-12 lg:h-12"
              onClick={() => firstSwiper.slidePrev()}
            />
          </div>
          <div className="col-span-10">
            <Swiper
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 6000 }}
              modules={[Controller]}
              onSwiper={setFirstSwiper}
              className=""
            >
              <SwiperSlide>
                <p className="text-5xl font-bold  lg:text-8xl">
                  {t("home:title1")}
                </p>
                <p className="my-6 text-lg lg:text-xl">{t("home:title1Exp")}</p>
                {/* <p className="h-14 w-52 my-4 pt-3 rounded-md bg-[var(--primary-color)] text-xl text-center font-bold hidden lg:block">
                  {t("common:contactForm")}
                </p> */}
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-5xl font-bold lg:text-8xl">
                  2-{t("home:title1")}
                </p>
                <p className="my-6 text-xl">2-{t("home:title1Exp")}</p>
                {/* <p className="h-14 w-52 my-4 pt-3 rounded-md bg-[var(--primary-color)] text-xl text-center font-bold hidden lg:block">
                  2-{t("common:contactForm")}
                </p> */}
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-5xl font-bold lg:text-8xl">
                  3-{t("home:title1")}
                </p>
                <p className="my-6 text-xl">3-{t("home:title1Exp")}</p>
                {/* <p className="h-14 w-52 my-4 pt-3 rounded-md bg-[var(--primary-color)] text-xl text-center font-bold hidden lg:block">
                  3-{t("common:contactForm")}
                </p> */}
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex items-center justify-self-end">
            <div className="">
              <RightArrowIcon
                height={45}
                width={45}
                alt="Right icon"
                fill="#fff"
                className="cursor-pointer h-5 w-5 lg:w-12 lg:h-12"
                onClick={() => firstSwiper.slideNext()}
              />
            </div>
          </div>
        </div>
      </div>
      {/* second page */}
      <div className="grid place-items-center pb-10">
        {/* contant & how we work */}
        <div className="w-full padX">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
            <div className="hidden lg:inline">
              <ScrollAnimation>
                <HowWeWork
                  icon={<PuzzleIcon height={55} width={55} />}
                  header={t("home:howWeWorkHeader1")}
                  text={t("home:howWeWorkExp1")}
                  tailStyle="mt-20"
                />

                <HowWeWork
                  icon={<TargetIcon height={55} width={55} />}
                  header={t("home:howWeWorkHeader2")}
                  text={t("home:howWeWorkExp2")}
                  tailStyle=""
                />
              </ScrollAnimation>
            </div>
            <div className="hidden lg:inline">
              <ScrollAnimation>
                <HowWeWork
                  icon={<PeopleIcon height={55} width={80} />}
                  header={t("home:howWeWorkHeader3")}
                  text={t("home:howWeWorkExp3")}
                  tailStyle="mt-20"
                />
                <HowWeWork
                  icon={<DocumentIcon height={55} width={55} />}
                  header={t("home:howWeWorkHeader4")}
                  text={t("home:howWeWorkExp4")}
                  tailStyle=""
                />
              </ScrollAnimation>
            </div>

            <div className="relative bg-[#383838] text-white rounded-b-lg  ">
              <div className="absolute w-full h-16 -top-16 bg-[var(--primary-color)] rounded-t-lg px-10 pt-5">
                <span className="text-xl font-bold">
                  {t("common:contactForm")}
                </span>
              </div>
              <div className="px-10">
                <p className="mt-10 mb-5">{t("common:contactFormExp")}</p>
                <div>
                  <input
                    type="text"
                    className="my-3 pl-5 h-12 w-full text-black text-sm rounded-lg 
                  placeholder:text-[#7A8192] placeholder:font-thin"
                    placeholder={t("common:nameLastname") || ""}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="my-3 pl-5 h-12 w-full text-black text-sm rounded-lg 
                  placeholder:text-[#7A8192] placeholder:font-thin"
                    placeholder={t("common:contactNo") || ""}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="my-3 pl-5 h-12 w-full text-black text-sm rounded-lg
                  placeholder:text-[#7A8192] placeholder:font-thin"
                    placeholder={t("common:email") || ""}
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    rows={6}
                    className="block my-3 pl-5 pt-4 w-full text-black text-sm rounded-lg 
                  border-solid border-2 border-[#F2F0F1] 
                  focus:ring-0 focus:outline-offset-0 focus:border-[#F2F0F1] 
                  resize-none 
                  placeholder:text-[#7A8192] placeholder:font-thin
                  "
                    placeholder={t("common:message") || ""}
                  ></textarea>
                </div>
                <div className="grid place-items-center mt-5 mb-5">
                  <input
                    type="button"
                    value={t("common:send") || ""}
                    className="bg-[var(--primary-color)] rounded-lg h-14 w-40 text-xl font-bold"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog */}
        <div className="mt-20 w-full padX">
          <PageHeader
            name={t("navbar:menuItem4")}
            pageURL="/blog"
            urlText={t("home:allPost")}
          />
          <ScrollAnimation>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
              <BlogCard
                header={t("home:blogHeader1")}
                text={t("home:blogExp1")}
                pageURL="Jak"
                urlText={t("home:readAll")}
              />
              <BlogCard
                header={t("home:blogHeader2")}
                text={t("home:blogExp2")}
                pageURL="dd"
                urlText={t("home:readAll")}
              />
              <BlogCard
                header={t("home:blogHeader3")}
                text={t("home:blogExp3")}
                pageURL="aa"
                urlText={t("home:readAll")}
              />
            </div>
          </ScrollAnimation>
        </div>
        {/* Hizmetlerimiz */}
        <div className="my-28 w-full padX">
          <PageHeader
            name={t("navbar:menuItem3")}
            pageURL="/hizmetlerimiz"
            urlText={t("home:allPost")}
          />

          <ScrollAnimation>
            <div className="grid grid-cols-1">
              <div>
                <Swiper
                  // slidesPerView={4}
                  spaceBetween={20}
                  // loop={true}
                  autoplay={{ delay: 10000 }}
                  modules={[Controller]}
                  onSwiper={setSecondSwiper}
                  onSlideChange={() => setSliderCount((sliderCount + 1) % 3)}
                  breakpoints={{
                    // when window width is >= 640px
                    640: {
                      // width: 640,
                      slidesPerView: 1,
                    },
                    768: {
                      // width: 640,
                      slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    1024: {
                      // width: 768,
                      slidesPerView: 4,
                    },
                  }}
                >
                  <SwiperSlide>
                    <ServicesCard
                      img={Service1Img}
                      alt={t("navbar:megaMenuHeader1")}
                      name={t("navbar:megaMenuHeader1")}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ServicesCard
                      img={Service2Img}
                      alt={t("navbar:megaMenuHeader6")}
                      name={t("navbar:megaMenuHeader6")}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ServicesCard
                      img={Service3Img}
                      alt={t("navbar:megaMenuHeader3")}
                      name={t("navbar:megaMenuHeader4")}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ServicesCard
                      img={Service3Img}
                      alt={t("navbar:megaMenuHeader4")}
                      name={t("navbar:megaMenuHeader4")}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ServicesCard
                      img={Service2Img}
                      alt={t("navbar:megaMenuHeader2")}
                      name={t("navbar:megaMenuHeader2")}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ServicesCard
                      img={Service3Img}
                      alt={t("navbar:megaMenuHeader7")}
                      name={t("navbar:megaMenuHeader7")}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div className="flex justify-center h-full mt-5 place-items-center hidden lg:flex">
              <LeftArrowIcon
                height={15}
                width={15}
                fill={`${sliderCount === 0 ? "#C3C3C3" : "#7A8192"}`}
                alt="Left icon"
                className={`${sliderCount === 0 ? "" : "cursor-pointer"}`}
                onClick={() => preCounter(secondSwiper.slidePrev())}
              />
              <div
                className={`h-3 w-3 mx-1 rounded-full ${
                  sliderCount == 0 ? "bg-[#7A8192]" : "bg-[#C3C3C3]"
                }`}
              ></div>
              <div
                className={`h-3 w-3 mx-1 rounded-full ${
                  sliderCount == 1 ? "bg-[#7A8192]" : "bg-[#C3C3C3]"
                }`}
              ></div>
              <div
                className={`h-3 w-3 mx-1 rounded-full ${
                  sliderCount == 2 ? "bg-[#7A8192]" : "bg-[#C3C3C3]"
                }`}
              ></div>

              <RightArrowIcon
                height={15}
                width={15}
                fill={`${sliderCount === 2 ? "#C3C3C3" : "#7A8192"}`}
                alt="Right icon"
                className={`${sliderCount === 2 ? "" : "cursor-pointer"}`}
                onClick={() => secondSwiper.slideNext()}
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
}

const ServicesCard = ({ name, img, alt }: any) => {
  return (
    <div className="bg-[#F4F5F6] rounded-lg">
      <Image
        src={img.src}
        width={358}
        height={250}
        alt={alt}
        className="rounded-t-lg w-full"
      />
      <div className="h-28 p-9 text-xl font-bold">{name}</div>
    </div>
  );
};

const PageHeader = ({ name, pageUrl, urlText }: any) => {
  return (
    <div className="relative mb-16">
      <h1 className="text-6xl lg:text-8xl text-[#e6e8ec] font-bold">{name}</h1>
      <h2 className="absolute text-3xl lg:text-5xl top-6 left-0.5 font-bold">
        {name}
      </h2>
      <a className="absolute text-[#3288FC] right-0 top-9">{urlText}</a>
    </div>
  );
};

const BlogCard = ({ header, text, pageURL, urlText }: any) => {
  return (
    <div className="bg-[#F4F5F6] rounded-lg p-10">
      <DocumentIcon width="30" height="30" fill="#C3C3C3" />
      <h3 className="text-2xl font-bold my-5">{header}</h3>
      <div className="text-[#7A8192] mb-5">{text}</div>
      <a href={`/blog/${pageURL}`} className="text-[#3288FC]">
        {urlText}
      </a>
    </div>
  );
};

const HowWeWork = ({ icon, header, text, tailStyle }: any) => {
  return (
    <div
      className={`grid place-items-center text-center mx-10 my-12 ${tailStyle}`}
    >
      <div className="">{icon}</div>
      <div className="text-2xl mt-3 font-bold">{header}</div>
      <div className="text-sm text-[#7A8192]">{text}</div>
    </div>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "home",
        "navbar",
        "footer",
      ])),
      // Will be passed to the page component as props
    },
  };
}
