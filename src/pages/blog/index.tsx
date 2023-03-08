import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import ScrollAnimation from "@components/ScrollAnimation";
import PageHeader from "@components/PageHeader";
import BlogCard from "@components/BlogCard";

export default function Home() {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const blogs = [
    {
      header: t("home:blogHeader1"),
      text: t("home:blogExp1"),
      url: "#",
    },
    {
      header: t("home:blogHeader2"),
      text: t("home:blogExp2"),
      url: "#",
    },
    {
      header: t("home:blogHeader3"),
      text: t("home:blogExp3"),
      url: "#",
    },
  ];

  return (
    <>
      <div className="w-full bg-[#F4F5F6] mt-[106px] lg:mt-[93px]">
        <div className="padX pt-6 pb-6 lg:py-12">
          <PageHeader name={t("navbar:menuItem4")} />
        </div>
      </div>
      <div className="padX my-20">
        {/* <ScrollAnimation> */}
        <div className="grid grid-cols-3 gap-10">
          {blogs.map((e, index) => {
            return (
              <BlogCard
                key={e.header + index}
                header={e.header}
                text={e.text}
                url={e.url}
                urlText={t("home:readAll")}
              />
            );
          })}
        </div>
        {/* </ScrollAnimation> */}
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
