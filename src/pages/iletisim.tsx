import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import ScrollAnimation from "@components/ScrollAnimation";
import PageHeader from "@components/PageHeader";

export default function Home() {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="w-full bg-[#F4F5F6] mt-[106px] lg:mt-[93px]">
        <div className="padX pt-6 pb-6 lg:py-12">
          <PageHeader name={t("navbar:menuItem5")} />
        </div>
      </div>
      <div className="padX my-20">
        <ScrollAnimation>
          <h1 className="text-6xl">Iletisim</h1>
        </ScrollAnimation>
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
