import Link from "next/link";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-[#F4F5F6]">
      <div className="grid place-items-center py-5">
        <div className="max-w-7xl w-full px-20 grid grid-cols-2 flex items-center">
          <div className="font-medium">
            {t("navbar:menuItem1")} | {t("navbar:menuItem2")} |{" "}
            {t("navbar:menuItem3")} | {t("navbar:menuItem4")} |{" "}
            {t("navbar:menuItem5")}
          </div>
          <div className="flex justify-end ">
            <FaLinkedin className="h-8 w-8" />
            <FaInstagramSquare className="h-8 w-8 mx-5" />
            <FaFacebookSquare className="h-8 w-8" />
          </div>
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="max-w-7xl w-full px-20 ">
          <div className="w-full border-b-2 border-[#C3C3C3]"></div>
          <div className="grid grid-cols-4 py-5">
            <div>
              <div className="font-bold">{t("navbar:megaMenuHeader1")}</div>
              <ul className="list-disc list-inside mt-1 font-normal">
                <li>{t("navbar:megaMenuItem1")}</li>
                <li>{t("navbar:megaMenuItem2")}</li>
                <li>{t("navbar:megaMenuItem3")}</li>
                <li>{t("navbar:megaMenuItem4")}</li>
                <li>{t("navbar:megaMenuItem5")}</li>
                <li>{t("navbar:megaMenuItem6")}</li>
                <li>{t("navbar:megaMenuItem17")}</li>
              </ul>
            </div>
            <div>
              <div className="font-bold">{t("navbar:megaMenuHeader3")}</div>
              <ul className="list-disc list-inside mt-1 font-normal">
                <li>{t("navbar:megaMenuItem9")}</li>
                <li> {t("navbar:megaMenuItem10")}</li>
                <li> {t("navbar:megaMenuItem11")}</li>
                <li> {t("navbar:megaMenuItem12")}</li>
              </ul>
            </div>
            <div>
              <div className="font-bold">{t("navbar:megaMenuHeader6")}</div>
              <ul className="list-disc list-inside mt-1 font-normal">
                <li>{t("navbar:megaMenuItem15")}</li>
                <li>{t("navbar:megaMenuItem16")}</li>
              </ul>
              <div className="font-bold mt-4">
                {t("navbar:megaMenuHeader2")}
              </div>
              <ul className="list-disc list-inside mt-1 font-normal">
                <li>{t("navbar:megaMenuItem7")}</li>
                <li>{t("navbar:megaMenuItem8")}</li>
              </ul>
            </div>
            <div>
              <div className="font-bold mt-3">
                {t("navbar:megaMenuHeader7")}
              </div>
              <div className="font-bold mt-3">
                {t("navbar:megaMenuHeader4")}
              </div>
              <div className="font-bold mt-4">
                {t("navbar:megaMenuHeader5")}
              </div>
              <ul className="list-disc list-inside mt-1 font-normal">
                <li>{t("navbar:megaMenuItem13")}</li>
                <li>{t("navbar:megaMenuItem14")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const NavLink = ({ pageName, locale, url }: any) => {
  return (
    <Link href={url} locale={locale} className={``}>
      <span>{pageName}</span>
    </Link>
  );
};
