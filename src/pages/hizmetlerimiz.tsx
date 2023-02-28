import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import ServicesCard from "@components/ServiceCard";

import Service1Img from "@assets/images/services-1.png";
import Service2Img from "@assets/images/services-2.png";
import Service3Img from "@assets/images/services-3.png";

export default function Home() {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="w-full bg-[#F4F5F6] lg:mt-[93px]">
        <div className="py-12 padX ">
          <PageHeader name={t("navbar:menuItem3")} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 my-7 padX">
        <ServicesCard
          img={Service1Img}
          alt={t("navbar:megaMenuHeader1")}
          name={t("navbar:megaMenuHeader1")}
          h={120}
        />
        <ServicesCard
          img={Service1Img}
          alt={t("navbar:megaMenuHeader1")}
          name={t("navbar:megaMenuHeader1")}
          h={120}
        />
        <div className="bg-blue-100"></div>
        <ServicesCard
          img={Service1Img}
          alt={t("navbar:megaMenuHeader1")}
          name={t("navbar:megaMenuHeader1")}
          h={180}
        />
        <ServicesCard
          img={Service1Img}
          alt={t("navbar:megaMenuHeader1")}
          name={t("navbar:megaMenuHeader1")}
          h={180}
        />
        <ServicesCard
          img={Service1Img}
          alt={t("navbar:megaMenuHeader1")}
          name={t("navbar:megaMenuHeader1")}
          h={180}
        />
      </div>
    </>
  );
}

const PageHeader = ({ name }: any) => {
  return (
    <div className="relative">
      <h1 className="text-6xl lg:text-[85px] text-[#e6e8ec] font-bold">
        {name}
      </h1>
      <h2 className="absolute text-3xl lg:text-5xl top-5 left-0.5 font-bold">
        {name}
      </h2>
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
