import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Controller } from "swiper";

import "swiper/css";

import heroImg from "@assets/images/hero.png";
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

export default function Home() {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  SwiperCore.use([Autoplay]);

  const [firstSwiper, setFirstSwiper] = useState<any>(null);
  const [secondSwiper, setSecondSwiper] = useState<any>(null);

  return (
    <>
      {/* <Head>
        <title>Oficzech - Business Consultant</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head> */}
      {/* first page */}
      <div
        className="grid place-items-center bg-cover min-h-[610px] pb-[10%]"
        style={{ backgroundImage: `url(${heroImg.src})` }}
      >
        <div className="max-w-7xl w-full px-20 flex justify-between mt-[200px] text-white ">
          <div className="flex items-center pr-10">
            <LeftArrowIcon
              height={45}
              width={45}
              alt="Left icon"
              fill="#fff"
              onClick={() => firstSwiper.slidePrev()}
            />
          </div>
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 6000 }}
            modules={[Controller]}
            onSwiper={setFirstSwiper}
          >
            <div className="grow">
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
            </div>
          </Swiper>

          <div className="flex items-center pl-10">
            <RightArrowIcon
              height={45}
              width={45}
              alt="Right icon"
              fill="#fff"
              onClick={() => firstSwiper.slideNext()}
            />
          </div>
        </div>
      </div>
      {/* second page */}
      <div className="grid place-items-center pb-40">
        <div className="max-w-7xl w-full px-20">
          <div className="grid grid-cols-3 grid-flow-col gap-8">
            <div>
              <HowWeWork
                icon={<PuzzleIcon height={55} width={55} />}
                header={t("home:howWeWorkHeader1")}
                text={t("home:howWeWorkExp1")}
                tailStyle=""
              />

              <HowWeWork
                icon={<TargetIcon height={55} width={55} />}
                header={t("home:howWeWorkHeader2")}
                text={t("home:howWeWorkExp2")}
                tailStyle=""
              />
            </div>
            <div>
              <HowWeWork
                icon={<PeopleIcon height={55} width={80} />}
                header={t("home:howWeWorkHeader3")}
                text={t("home:howWeWorkExp3")}
                tailStyle=""
              />
              <HowWeWork
                icon={<DocumentIcon height={55} width={55} />}
                header={t("home:howWeWorkHeader4")}
                text={t("home:howWeWorkExp4")}
                tailStyle=""
              />
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
        <div className="mt-32 max-w-7xl w-full px-20">
          <PageHeader
            name={t("navbar:menuItem4")}
            pageURL="/blog"
            urlText={t("home:allPost")}
          />
          <div className="grid grid-cols-3 gap-8">
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
        </div>
        {/* Hizmetlerimiz */}
        <div className="mt-32 max-w-7xl w-full px-20">
          <PageHeader
            name={t("navbar:menuItem3")}
            pageURL="/hizmetlerimiz"
            urlText={t("home:allPost")}
          />

          <Swiper
            slidesPerView={4}
            spaceBetween={50}
            loop={true}
            autoplay={{ delay: 3000 }}
            modules={[Controller]}
            onSwiper={setSecondSwiper}
          >
            <div className="grid grid-cols-4 gap-10 ">
              <SwiperSlide>
                <ServicesCard
                  img={Service1Img}
                  alt="Sirket kurulumu"
                  name={t("home:ourServicesHeader1")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesCard
                  img={Service2Img}
                  alt="Vergi ve muhasebe"
                  name={t("home:ourServicesHeader2")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesCard
                  img={Service3Img}
                  alt="Yesil Mutabakat"
                  name={t("home:ourServicesHeader3")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesCard
                  img={Service3Img}
                  alt="Yesil Mutabakat"
                  name={t("home:ourServicesHeader4")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesCard
                  img={Service1Img}
                  alt="Sirket kurulumu"
                  name={`2 - ${t("home:ourServicesHeader1")}`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesCard
                  img={Service2Img}
                  alt="Vergi ve muhasebe"
                  name={`2 - ${t("home:ourServicesHeader2")}`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesCard
                  img={Service3Img}
                  alt="Yesil Mutabakat"
                  name={`2 - ${t("home:ourServicesHeader3")}`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesCard
                  img={Service3Img}
                  alt="Yesil Mutabakat"
                  name={`2.1 - ${t("home:ourServicesHeader4")}`}
                />
              </SwiperSlide>
            </div>
          </Swiper>

          <div className="flex justify-center h-full mt-5  place-items-center">
            <LeftArrowIcon
              height={15}
              width={15}
              fill="#C3C3C3"
              alt="Left icon"
              onClick={() => secondSwiper.slidePrev()}
            />
            <div className="h-3 w-3 mx-1 bg-[#7A8192] rounded-full"></div>
            <div className="h-3 w-3 mx-1 bg-[#C3C3C3] rounded-full"></div>
            <div className="h-3 w-3 mx-1 bg-[#C3C3C3] rounded-full"></div>

            <RightArrowIcon
              height={15}
              width={15}
              fill="#7A8192"
              alt="Right icon"
              onClick={() => secondSwiper.slideNext()}
            />
          </div>
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
      <h1 className="text-8xl text-[#e6e8ec] font-bold">{name}</h1>
      <h2 className="absolute text-5xl top-6 left-0.5 font-bold">{name}</h2>
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
      ...(await serverSideTranslations(locale, ["common", "home", "navbar"])),
      // Will be passed to the page component as props
    },
  };
}
