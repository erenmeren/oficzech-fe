import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import ScrollAnimation from "@components/ScrollAnimation";

export default function Home() {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="grid place-items-center min-h-[800px] h-screen lg:pb-[10%]">
        <div className="w-full padX grid lg:mt-[200px]">
          <ScrollAnimation>
            <h1 className="text-6xl">Iletisim</h1>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
}

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
