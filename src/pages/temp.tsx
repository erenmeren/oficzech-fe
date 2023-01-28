import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return <></>;
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
