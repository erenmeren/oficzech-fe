import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import ScrollAnimation from "@components/ScrollAnimation";
import PageHeader from "@components/PageHeader";
import Image from "next/image";

import TradeLicensesImg from "@assets/images/services/ticaret_lisanslari.png";

export default function Home() {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="w-full bg-[#F4F5F6] mt-[106px] lg:mt-[93px]">
        <div className="padX pt-6 pb-6 lg:py-12">
          <PageHeader name={t("navbar:menuItem2")} />
        </div>
      </div>
      <ScrollAnimation>
        <div>
          <div className="padX">
            <p className="text-[#7A8192] text-[18px] py-6 lg:text-xl lg:py-12">
              {t("aboutUs:mainText")}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 mb-20">
              <div className=" lg:pr-5">
                <Image
                  src={TradeLicensesImg}
                  alt="hakkimizda"
                  className="w-full h-full rounded-xl"
                />
              </div>
              <div className="mt-9 lg:mt-0">
                <div className="mb-4">
                  <h1 className="text-2xl font-bold mb-1">
                    {t("aboutUs:header1")}
                  </h1>
                  <p>{t("aboutUs:text1")}</p>
                </div>
                <div className="mb-4">
                  <h1 className="text-2xl font-bold mb-1">
                    {t("aboutUs:header2")}
                  </h1>
                  <p>{t("aboutUs:text2")}</p>
                </div>
                <div className="mb-4">
                  <h1 className="text-2xl font-bold mb-1">
                    {t("aboutUs:header3")}
                  </h1>
                  <p>{t("aboutUs:text3")}</p>
                </div>
                <div className="">
                  <h1 className="text-2xl font-bold mb-1">
                    {t("aboutUs:header4")}
                  </h1>
                  <p>{t("aboutUs:text4")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "aboutUs",
        "navbar",
        "footer",
      ])),
      // Will be passed to the page component as props
    },
  };
}
