import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import ServicesCard from "@components/ServiceCard";

import CompanyImg from "@assets/images/services/sirket_kurulumu.png";
import BankImg from "@assets/images/services/bankacilik_hizmetleri.png";
import TranslateImg from "@assets/images/services/ceviri_hizmetleri.png";
import DigitalSolutionImg from "@assets/images/services/digital_cozumler.png";
import LawImg from "@assets/images/services/hukuki_danismanlik.png";
import CorporateIdentityImg from "@assets/images/services/kurumsal_kimlik.png";
import BrandImg from "@assets/images/services/marka_tescil.png";
import OfficeImg from "@assets/images/services/ofis.png";
import OperationImg from "@assets/images/services/operasyon_yonetimi.png";
import TransportingImg from "@assets/images/services/tasina_hizmetleri.png";
import TradeLicensesImg from "@assets/images/services/ticaret_lisanslari.png";
import TaxImg from "@assets/images/services/vergi_muhasebe.png";
import VisaImg from "@assets/images/services/vize_danismanligi.png";
import ScrollAnimation from "@components/ScrollAnimation";
import PageHeader from "@components/PageHeader";

export default function Home() {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const data = [
    {
      img: CompanyImg,
      name: t("navbar:megaMenuHeader1"),
    },
    {
      img: CorporateIdentityImg,
      name: t("navbar:megaMenuHeader2"),
    },
    { name: "contact" },
    {
      img: TaxImg,
      name: t("navbar:megaMenuHeader3"),
    },
    {
      img: LawImg,
      name: t("navbar:megaMenuHeader4"),
    },
    {
      img: CompanyImg,
      name: t("navbar:megaMenuHeader5") + "*",
    },
    {
      img: OfficeImg,
      name: t("navbar:megaMenuHeader6"),
    },
    {
      img: CompanyImg,
      name: t("navbar:megaMenuHeader7") + "*",
    },
  ];

  return (
    <>
      <div className="w-full bg-[#F4F5F6] mt-[106px] lg:mt-[93px]">
        <div className="padX pt-6 pb-6 lg:py-12">
          <PageHeader name={t("navbar:menuItem3")} />
        </div>
      </div>
      <div className="padX grid grid-cols-1 gap-16 my-7 lg:grid-cols-3">
        {data.map((e, i) => {
          if (i != 2)
            return (
              <ServicesCard
                key={e.name}
                img={e.img}
                alt={e.name}
                name={e.name}
              />
            );
          else
            return (
              <div key={e.name} className="bg-blue-100 rounded-b-lg"></div>
            );
        })}
      </div>
    </>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "navbar", "footer"])),
      // Will be passed to the page component as props
    },
  };
}
